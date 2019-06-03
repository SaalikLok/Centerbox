import React from 'react';
import SEO from '../components/seo';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import IndexSection from '../components/IndexSection';
import ContentSection from '../components/ContentSection';

const IndexPage = () => (
	<div>
		<SEO title="Home" keywords={[`mindfulness`, `center`]} />
		<Navigation />
		<IndexSection />
    <ContentSection />
		<Footer />
	</div>
);

export default IndexPage;
