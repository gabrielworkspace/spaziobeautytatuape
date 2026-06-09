const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');
const sharp = require('sharp');

const publicImgDir = path.resolve('public/img');
const sourceFiles = globSync('src/**/*.tsx', { cwd: path.resolve('.') });

async function processImages() {
    const allWebpImages = globSync('**/*.webp', { cwd: publicImgDir, ignore: ['**/*-opt.webp'] });
    
    for (const imgPath of allWebpImages) {
        const fullImgPath = path.resolve(publicImgDir, imgPath);
        const parsed = path.parse(fullImgPath);
        const optImgPath = path.resolve(parsed.dir, `${parsed.name}-opt.webp`);
        const webPath = `/img/${imgPath.replace(/\\/g, '/')}`;
        const webOptPath = `/img/${imgPath.replace(/\\/g, '/').replace(/\.webp$/, '-opt.webp')}`;
        
        try {
            // Check if this image is actually used
            let isUsed = false;
            for (const file of sourceFiles) {
                const content = fs.readFileSync(path.resolve('.', file), 'utf-8');
                if (content.includes(webPath)) {
                    isUsed = true;
                    break;
                }
            }
            
            if (!isUsed) continue;

            const metadata = await sharp(fullImgPath).metadata();
            
            // Resize to max 600px width or height to heavily satisfy Lighthouse for avatars/carousels
            // Wait, about-main is used in a 440x587 container, so 600px is perfect.
            // Penteado-festa is 464x618, so 600 or 800 is perfect.
            // Avatar is 62x80, so 600px is overkill but MUCH better than 1200px.
            
            await sharp(fullImgPath)
                .resize({ width: 600, height: 600, fit: 'inside', withoutEnlargement: true })
                .webp({ quality: 70, effort: 6 })
                .toFile(optImgPath);
            
            console.log(`CREATED: ${webOptPath}`);
            
            // Update source files
            for (const file of sourceFiles) {
                const filePath = path.resolve('.', file);
                let content = fs.readFileSync(filePath, 'utf-8');
                if (content.includes(webPath)) {
                    // carefully replace to avoid double replacing if it's already -opt
                    content = content.replaceAll(webPath, webOptPath);
                    fs.writeFileSync(filePath, content, 'utf-8');
                    console.log(`UPDATED REF in ${file} to ${webOptPath}`);
                }
            }
        } catch (err) {
            console.error(`ERROR processing ${imgPath}:`, err);
        }
    }
    console.log("Image optimization complete.");
}

processImages();
