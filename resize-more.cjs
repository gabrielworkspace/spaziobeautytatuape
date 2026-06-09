const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, 'public', 'img', 'servicos');
const files = [
    'escova-lisa-opt.webp',
    'luzes-opt.webp',
    'make-up-opt.webp',
    'extensao-cilios-opt.webp',
    'design-sobrancelha-opt.webp',
    'manicure-tradicional-opt.webp',
    'pe-e-mao-opt.webp',
    'spa-dos-pes-opt.webp',
    'podologia-opt.webp'
];

async function resizeImages() {
    for (const f of files) {
        const fullPath = path.join(imgDir, f);
        if (fs.existsSync(fullPath)) {
            const tempFile = fullPath + '.tmp';
            try {
                await sharp(fullPath)
                    .resize({ width: 128, withoutEnlargement: true })
                    .toFile(tempFile);
                fs.copyFileSync(tempFile, fullPath);
                fs.unlinkSync(tempFile);
                console.log(`✅ Resized ${f}`);
            } catch (e) {
                console.error(`Erro ${f}:`, e);
            }
        }
    }
}
resizeImages();
