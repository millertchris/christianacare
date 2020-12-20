const path = require(`path`);

const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `DataJson`) {
		const fileNode = getNode(node.parent);
		const slug = createFilePath({
			node,
			getNode,
			basePath: `pages`,
		});
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	// **Note:** The graphql function call returns a Promise
	// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
	// https://www.gatsbyjs.com/docs/tutorial/part-seven/

	const { createPage } = actions;
	const result = await graphql(`
		query {
			allDataJson {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	result.data.allDataJson.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve(
				`./src/templates/landing-page.js`
			),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.fields.slug,
			},
		});
	});
};
