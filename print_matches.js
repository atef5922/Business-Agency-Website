const fs = require('fs');

const logPath = 'C:\\Users\\Shajib\\.gemini\\antigravity-ide\\brain\\c6f499b4-37e2-4e7a-8782-c6298bae1989\\.system_generated\\logs\\transcript.jsonl';

try {
  const content = fs.readFileSync(logPath, 'utf8');
  const lines = content.split('\n');
  
  for (let i = 0; i < 40; i++) {
    const line = lines[i];
    if (!line || !line.trim()) continue;
    const obj = JSON.parse(line);
    const jsonStr = JSON.stringify(obj);
    if (jsonStr.includes('aboutBadgeReveal') || jsonStr.includes('HomeSections.tsx')) {
      console.log(`Line ${i} matches:`);
      console.log(`  step_index: ${obj.step_index}`);
      console.log(`  source: ${obj.source}`);
      console.log(`  type: ${obj.type}`);
      console.log(`  status: ${obj.status}`);
      console.log(`  content length: ${obj.content ? obj.content.length : 'N/A'}`);
      if (obj.content) {
        console.log(`  content preview: ${obj.content.substring(0, 150)}`);
      }
      console.log('----------------------------');
    }
  }
} catch (e) {
  console.error('Error:', e);
}
