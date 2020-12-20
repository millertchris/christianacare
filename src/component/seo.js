import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Helmet>
					<title>
						ChristianaCare Gatsby Template
					</title>
					<meta
						name='description'
						content='ChristianaCare Gatsby Template'
					/>
					<meta
						name='robots'
						content='noindex, nofollow'
					/>
					<link
						href='https://fonts.googleapis.com/css?family=IBM+Plex+Serif:300,400,400i,500,600,700|Raleway:300,400,400i,500,600,700,800,900&display=swap'
						rel='stylesheet'
					></link>
					<link
						href='https://christianacare.org/marketing-landing_v2.css'
						rel='stylesheet'
					></link>
				</Helmet>
			</React.Fragment>
		);
	}
}

export const query = graphql`
	query($slug: String!) {
		dataJson(fields: { slug: { eq: $slug } }) {
			id
			headline
			intro
			locationsIntro {
				title
				content
				notice
			}
			locations {
				title
				phone
				url
				details
			}
		}
	}
`;

export default App;
