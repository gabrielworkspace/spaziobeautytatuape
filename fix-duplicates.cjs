const fs = require('fs');
['src/components/HeroSection.tsx', 'src/components/ServicesSection.tsx'].forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/loading="lazy"(.*?)loading="(lazy|eager)"/g, 'loading="$2"$1');
    content = content.replace(/loading="eager"(.*?)loading="(lazy|eager)"/g, 'loading="eager"$1');
    fs.writeFileSync(f, content, 'utf8');
    console.log("Fixed duplicates in", f);
});
