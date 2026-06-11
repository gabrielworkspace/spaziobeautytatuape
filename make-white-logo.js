import sharp from 'sharp';

async function main() {
  try {
    await sharp('public/img/spazio-logo-opt.webp')
      .negate({ alpha: false })
      .toFile('public/img/spazio-logo-white.webp');
    console.log("White logo created successfully");
  } catch (err) {
    console.error("Error creating white logo:", err);
  }
}

main();
