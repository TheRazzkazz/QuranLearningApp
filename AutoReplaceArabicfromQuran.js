console.log('🚀 Script started...');

const fs = require('fs');
const path = require('path');

// Files to process
const files = [
  { path: './data/DivineNamesDeck.js', label: 'DivineNamesDeck' },
  { path: './data/core30Roots.js', label: 'core30Roots' }
];

// Load Uthmani Qur'an text
const quranText = fs.readFileSync('quran-uthmani.txt', 'utf8');

// Build a Set of all Uthmani phrases for fast lookup
const uthmaniWords = new Set(
  quranText
    .split(/\s+/)
    .filter(w => w.match(/[\u0600-\u06FF]/)) // Arabic words only
    .map(w => w.trim())
);

// Simple utility to find closest match in Uthmani text
function findUthmaniReplacement(word) {
  if (uthmaniWords.has(word)) return word;

  // Try to find similar matches
  for (let uthmaniWord of uthmaniWords) {
    if (
      uthmaniWord.replace(/[^\u0600-\u06FF]/g, '') ===
      word.replace(/[^\u0600-\u06FF]/g, '')
    ) {
      return uthmaniWord;
    }
  }

  // No match found
  return null;
}

files.forEach(({ path: filePath, label }) => {
  console.log(`🔧 Processing ${label}...`);

  const original = fs.readFileSync(filePath, 'utf8');
  const lines = original.split('\n');

  const updatedLines = lines.map((line) => {
    const match = line.match(/(arabic:\s*['"`])([\u0600-\u06FF\sًٌٍَُِّّْٰٱٰ]+)(['"`])/);
    if (!match) return line;

    const prefix = match[1];
    const originalArabic = match[2];
    const suffix = match[3];

    const replacement = findUthmaniReplacement(originalArabic);

    if (replacement && replacement !== originalArabic) {
      console.log(`🔁 ${originalArabic} → ${replacement}`);
      return line.replace(originalArabic, replacement);
    }

    return line;
  });

  const newFilePath = filePath.replace('.js', '_UPDATED.js');
  fs.writeFileSync(newFilePath, updatedLines.join('\n'), 'utf8');
  console.log(`✅ Updated version saved to ${newFilePath}\n`);
});
