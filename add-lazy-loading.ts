import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

const files = globSync('src/components/*.tsx');
const exclude = ['HeroSection.tsx', 'Header.tsx', 'CookieBanner.tsx', 'PrivacyPolicyModal.tsx', 'TermsOfUseModal.tsx'];

files.forEach(file => {
    const filename = path.basename(file);
    if (exclude.includes(filename)) return;
    
    const filePath = path.resolve(file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace <img ... /> with <img loading="lazy" ... />
    // Using a regex to find <img that doesn't already have loading="lazy"
    content = content.replace(/<img(?![^>]*loading="lazy")/g, '<img loading="lazy"');
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Added lazy loading to ${filename}`);
});
