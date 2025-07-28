const fs = require('fs');
const path = require('path');

// Load Uthmani Qur'an text
const quranLines = fs.readFileSync('quran-uthmani.txt', 'utf8')
  .split('\n')
  .map(line => line.trim())
  .filter(line => /^[\u0600-\u06FF\sًٌٍَُِّْٰٱ]+$/.test(line));

// Function to normalize Arabic (remove diacritics)
function normalizeArabic(text) {
  return text.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '').trim();
}

// Recursively get all .js, .jsx, .json files in the project
function getAllFiles(dir, fileList = []) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !filePath.includes('node_modules')) {
      getAllFiles(filePath, fileList);
    } else if (/\.(js|jsx|json)$/.test(filePath) && !filePath.endsWith('.bak')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const projectRoot = '.';
const files = getAllFiles(projectRoot);

let totalReplacements = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let updated = content;
  let offset = 0;
  let hasChanges = false;

  const regex = /(['"`])([\u0600-\u06FF\sًٌٍَُِّْٰٱ]+)\1/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const fullMatch = match[0];
    const quote = match[1];
    const arabicText = match[2];
    const normalized = normalizeArabic(arabicText);

    const replacement = quranLines.find(line => normalizeArabic(line) === normalized);

    if (!replacement) {
      console.log(`⚠️ No match found in Qur'an for: ${arabicText}`);
      continue;
    }

    if (replacement === arabicText) {
      // Same as source, skip
      continue;
    }

    const newQuoted = `${quote}${replacement}${quote}`;
    const start = match.index + offset;
    const end = start + fullMatch.length;

    updated = updated.slice(0, start) + newQuoted + updated.slice(end);
    offset += newQuoted.length - fullMatch.length;

    console.log(`✅ ${file}: ${arabicText} → ${replacement}`);
    totalReplacements++;
    hasChanges = true;
  }

  if (hasChanges) {
    fs.writeFileSync(`${file}.bak`, content, 'utf8'); // create backup
    fs.writeFileSync(file, updated, 'utf8'); // overwrite with corrected Arabic
    console.log(`🔄 File updated: ${file}`);
  }
});

if (totalReplacements === 0) {
  console.log('🟰 No Arabic replacements were made.');
} else {
  console.log(`🎉 Total replacements made: ${totalReplacements}`);
}
