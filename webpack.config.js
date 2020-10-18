const path = require('path');

module.export = {
	watch: true,
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
};

// "prefixForGitPages": "git subtree push --prefix=dist origin gh-pages",
