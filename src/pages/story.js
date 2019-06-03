import React from 'react';
import SEO from '../components/seo';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const IndexPage = () => (
	<div>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<Navigation />
		<p>Coming Soon</p>
		<Footer />
	</div>
);

export default IndexPage;
