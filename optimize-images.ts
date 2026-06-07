import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import sharp from 'sharp';

const srcDir = path.resolve('src');
const publicImgDir = path.resolve('public/img');
const unusedDir = path.resolve(publicImgDir, 'nao_usados_mais');

if (!fs.existsSync(unusedDir)) {
    fs.mkdirSync(unusedDir, { recursive: true });
}

// 1. Find all referenced images in src/ and index.html
const sourceFiles = globSync('**/*.{tsx,jsx,ts,css,html}', { cwd: path.resolve('.'), ignore: ['node_modules/**', 'dist/**'] });
const usedImages = new Set<string>();

sourceFiles.forEach(file => {
    const content = fs.readFileSync(path.resolve('.', file), 'utf-8');
    const matches = content.match(/\/img\/[A-Za-z0-9_\-\/]+\.(png|jpg|jpeg)/g);
    if (matches) {
        matches.forEach(m => usedImages.add(m));
    }
});

console.log(`Found ${usedImages.size} used images.`);

// 2. Find all images in public/img
const allImages = globSync('**/*.{png,jpg,jpeg}', { cwd: publicImgDir, ignore: ['nao_usados_mais/**'] });

async function processImages() {
    for (const imgPath of allImages) {
        const fullImgPath = path.resolve(publicImgDir, imgPath);
        const webPath = `/img/${imgPath.replace(/\\/g, '/')}`;
        
        if (!usedImages.has(webPath)) {
            // Unused -> move to nao_usados_mais
            const destPath = path.resolve(unusedDir, imgPath);
            fs.mkdirSync(path.dirname(destPath), { recursive: true });
            fs.renameSync(fullImgPath, destPath);
            console.log(`MOVED UNUSED: ${imgPath}`);
        } else {
            // Used -> Convert to webp
            const parsed = path.parse(fullImgPath);
            const webpPath = path.resolve(parsed.dir, `${parsed.name}.webp`);
            const webpWebPath = `/img/${imgPath.replace(/\\/g, '/').replace(/\.[a-z]+$/, '.webp')}`;
            
            try {
                await sharp(fullImgPath).webp({ quality: 80 }).toFile(webpPath);
                console.log(`CONVERTED: ${imgPath} -> .webp`);
                
                // Move original to unused
                const destPath = path.resolve(unusedDir, imgPath);
                fs.mkdirSync(path.dirname(destPath), { recursive: true });
                fs.renameSync(fullImgPath, destPath);
                
                // Update source files to use webp
                sourceFiles.forEach(file => {
                    const filePath = path.resolve('.', file);
                    let content = fs.readFileSync(filePath, 'utf-8');
                    if (content.includes(webPath)) {
                        content = content.replaceAll(webPath, webpWebPath);
                        fs.writeFileSync(filePath, content, 'utf-8');
                        console.log(`UPDATED REF in ${file}`);
                    }
                });
            } catch (err) {
                console.error(`ERROR converting ${imgPath}:`, err);
            }
        }
    }
    console.log("Image optimization complete.");
}

processImages();
