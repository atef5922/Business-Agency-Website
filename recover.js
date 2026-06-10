const fs = require('fs');

const logPath = 'C:\\Users\\Shajib\\.gemini\\antigravity-ide\\brain\\c6f499b4-37e2-4e7a-8782-c6298bae1989\\.system_generated\\logs\\transcript.jsonl';
const targetPath = 'c:\\Users\\Shajib\\Documents\\multitech Solution\\src\\components\\sections\\HomeSections.tsx';

try {
  const content = fs.readFileSync(logPath, 'utf8');
  const lines = content.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    const obj = JSON.parse(line);
    if (obj.content && obj.content.includes('aboutBadgeReveal') && obj.type === 'VIEW_FILE') {
      console.log(`Line ${i}: Found matching VIEW_FILE entry in logs! Content length: ${obj.content.length}`);
      let fileContent = obj.content;
      
      const linesOfContent = fileContent.split('\n');
      console.log(`VIEW_FILE has ${linesOfContent.length} lines of content.`);
      const reconstructedLines = [];
      
      for (const cLine of linesOfContent) {
        // Look for the line number prefix, e.g. "123: text"
        const match = cLine.match(/^\d+:\s(.*)$/);
        if (match) {
          reconstructedLines.push(match[1]);
        } else {
          // If a line doesn't have a prefix but is part of the content (e.g. empty line or multiline string), we can keep it if it's not the first/last lines
          // Wait, the viewer tool prepends "<number>: " to EVERY line. If it's empty, it prepends "<number>: "
          // If it didn't match, maybe it's the header/footer of the viewer tool
        }
      }
      
      console.log(`Reconstructed ${reconstructedLines.length} lines.`);
      if (reconstructedLines.length > 0) {
        const finalContent = reconstructedLines.join('\n');
        fs.writeFileSync(targetPath, finalContent, 'utf8');
        console.log('Successfully wrote to ' + targetPath);
        process.exit(0);
      }
    }
  }
} catch (e) {
  console.error('Error recovering:', e);
}
