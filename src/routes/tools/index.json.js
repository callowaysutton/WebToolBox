import tools from './_tools.js';

const contents = JSON.stringify(tools.map(tool => {
	return {
		title: tool.title,
		slug: tool.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}