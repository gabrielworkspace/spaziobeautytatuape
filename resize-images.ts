import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import sharp from 'sharp';

const publicImgDir = path.resolve('public/img');
const allWebpImages = globSync('**/*.webp', { cwd: publicImgDir });

async function processImages() {
    for (const imgPath of allWebpImages) {
        const fullImgPath = path.resolve(publicImgDir, imgPath);
        
        try {
            const metadata = await sharp(fullImgPath).metadata();
            
            if (metadata.width && metadata.width > 800) {
                const buffer = await sharp(fullImgPath)
                    .resize({ width: 800, withoutEnlargement: true })
                    .webp({ quality: 60, effort: 6 })
                    .toBuffer();
                
                fs.writeFileSync(fullImgPath, buffer);
                console.log(`RESIZED & COMPRESSED: ${imgPath}`);
            } else {
                const buffer = await sharp(fullImgPath)
                    .webp({ quality: 60, effort: 6 })
                    .toBuffer();
                
                fs.writeFileSync(fullImgPath, buffer);
                console.log(`COMPRESSED: ${imgPath}`);
            }
        } catch (err) {
            console.error(`ERROR processing ${imgPath}:`, err);
        }
    }
    console.log("Image resizing complete.");
}

processImages();
