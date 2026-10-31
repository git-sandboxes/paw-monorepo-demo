require('fs').mkdirSync('dist', { recursive: true });
require('fs').writeFileSync('dist/index.html', '<h1>Welcome</h1>');
