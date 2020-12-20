import React from 'react';
import { graphql } from 'gatsby';
import App from '../component/seo';
import '../scss/styles.scss';

export default function LandingPage({ data }) {
	const post = data.dataJson;
	return (
		<React.Fragment>
			<App />
			<header>
				<section id='header' className='container'>
					<div id='branding'>
						<a href='/' id='site-title'>
							<img
								src='https://christianacare.org/wp-content/themes/cchs/library/images/christiancare-logo.svg'
								alt='ChristianaCare'
							/>
						</a>
					</div>
				</section>
			</header>
			<main>
				<section className='region-lander-hero'>
					<div className='container'>
						<div>
							<h1
								dangerouslySetInnerHTML={{
									__html:
										post.headline,
								}}
							/>
						</div>
					</div>
				</section>
				<section className='region-lander-intro'>
					<div
						className='container'
						dangerouslySetInnerHTML={{
							__html: post.intro,
						}}
					/>
				</section>
				<section className='region-lander-locations'>
					<div className='container'>
						<div className='region-lander-locations-intro'>
							<h2>
								{
									post
										.locationsIntro
										.title
								}
							</h2>
							<div
								dangerouslySetInnerHTML={{
									__html:
										post
											.locationsIntro
											.content,
								}}
							/>
							<div
								className='notice'
								dangerouslySetInnerHTML={{
									__html:
										post
											.locationsIntro
											.notice,
								}}
							/>
						</div>
						<div className='region-lander-locations-row'>
							{post.locations.map(
								(
									location,
									i
								) => {
									return (
										<div
											key={
												i
											}
											className='region-lander-locations-item'
										>
											<h3
												dangerouslySetInnerHTML={{
													__html:
														location.title,
												}}
											/>
											<div className='region-lander-locations-cta'>
												<a
													className='region-lander-locations-phone'
													href={
														'tel:+1' +
														location.phone
													}
												>
													{
														location.phone
													}
												</a>
												<a
													className='region-lander-locations-view'
													href={
														location.url
													}
													target='_blank'
													rel='noreferrer'
												>
													View
													Page
												</a>
											</div>
											<div
												className='region-lander-locations-details'
												dangerouslySetInnerHTML={{
													__html:
														location.details,
												}}
											/>
										</div>
									);
								}
							)}
						</div>
					</div>
				</section>
			</main>
			<footer>
				<img
					src='https://christianacare.org/wp-content/themes/cchs/library/images/marketing-motif.png'
					className='marketing-motif'
					style={{ width: '50%' }}
					alt='Graphical part of the logo'
				/>
				<div id='lyh'>
					<a href='/about/contact/loveyourhealth-signup/'>
						<strong>
							Love Your Health!
						</strong>{' '}
						Sign-up for ChristianaCare's
						Health & Wellness e-newsletter.
					</a>
				</div>
				<div className='footer-inner'>
					<a
						href='https://facebook.com/christianacare'
						target='_blank'
						rel='noreferrer'
					>
						<img
							src='https://christianacare.org/images/email/icon_facebook_gray.png'
							width='30'
							height='30'
							alt='Facebook'
						/>
					</a>
					&nbsp;&nbsp;
					<a
						href='https://twitter.com/christianacare'
						target='_blank'
						rel='noreferrer'
					>
						<img
							src='https://christianacare.org/images/email/icon_twitter_gray.png'
							width='30'
							height='30'
							alt='Twitter'
						/>
					</a>
					&nbsp;&nbsp;
					<a
						href='https://www.pinterest.com/christianacare/'
						target='_blank'
						rel='noreferrer'
					>
						<img
							src='https://christianacare.org/images/pinterest-badge.png'
							width='30'
							height='30'
							alt='Pinterest'
						/>
					</a>
					&nbsp;&nbsp;
					<a
						href='https://instagram.com/christianacare'
						target='_blank'
						rel='noreferrer'
					>
						<img
							src='https://christianacare.org/images/email/icon_instagram_gray.png'
							width='30'
							height='30'
							alt='Instagram'
						/>
					</a>
					&nbsp;&nbsp;
					<a
						href='https://youtube.com/christianacare'
						target='_blank'
						rel='noreferrer'
					>
						<img
							src='https://christianacare.org/images/email/icon_youtube_gray.png'
							width='30'
							height='30'
							alt='YouTube'
						/>
					</a>
					<p id='privacy'>
						<a
							href='https://christianacare.org/privacy/'
							target='_blank'
							rel='noreferrer'
						>
							Privacy Policy
						</a>
					</p>
				</div>
			</footer>
		</React.Fragment>
	);
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
