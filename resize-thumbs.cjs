const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, 'public', 'img');

const resizeTasks = [
    { file: path.join(imgDir, 'spazio-logo-opt.webp'), width: 120 },
    { file: path.join(imgDir, 'servicos', 'botox-progressiva-opt.webp'), width: 128 },
    { file: path.join(imgDir, 'servicos', 'corte-feminino-opt.webp'), width: 128 },
    { file: path.join(imgDir, 'servicos', 'penteado-opt.webp'), width: 128 },
    { file: path.join(imgDir, 'servicos', 'coloracao-opt.webp'), width: 128 },
    { file: path.join(imgDir, 'servicos', 'tratamento-opt.webp'), width: 128 },
    { file: path.join(imgDir, 'manicure-esmaltacao-gel', 'unha-gel-opt.webp'), width: 128 },
    { file: path.join(imgDir, 'alongamento-fibra-vidro', 'fibra-vidro-opt.webp'), width: 128 },
    { file: path.join(imgDir, 'pedicure-tradicional', 'pedicure-opt.webp'), width: 128 },
    { file: path.join(imgDir, 'design-sobrancelhas', 'design-sobrancelha-opt.webp'), width: 128 },
    { file: path.join(imgDir, 'maquiagem-social', 'makeup-opt.webp'), width: 128 }
];

async function resizeImages() {
    console.log('Iniciando redimensionamento de miniaturas...');
    for (const task of resizeTasks) {
        if (!fs.existsSync(task.file)) {
            console.log(`Arquivo não encontrado: ${task.file}`);
            continue;
        }

        const tempFile = task.file + '.tmp';
        
        try {
            await sharp(task.file)
                .resize({ width: task.width, withoutEnlargement: true })
                .toFile(tempFile);
            
            // Substitui o original
            fs.renameSync(tempFile, task.file);
            console.log(`✅ Redimensionado: ${task.file} para largura máxima de ${task.width}px`);
        } catch (err) {
            console.error(`Erro ao redimensionar ${task.file}:`, err);
        }
    }
    console.log('Concluído!');
}

resizeImages();
