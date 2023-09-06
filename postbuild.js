const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'build');

// Read the contents of index.html
const content = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf-8');

// Script to be injected
const redirectScript = `
<script>
  var segment = window.location.pathname.split('/').pop();
  if (segment && !segment.includes('index.html') && !segment.includes('.')) {
    window.location.replace('/#/' + segment);
  }
</script>
`;

// Insert the script before the closing body tag
const updatedContent = content.replace('</body>', `${redirectScript}\n</body>`);

// Write the modified content to 404.html
fs.writeFileSync(path.join(buildDir, '404.html'), updatedContent);

