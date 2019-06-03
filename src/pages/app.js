import React from 'react';
import SEO from '../components/seo';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import MainApp from '../components/MainApp';


const IndexPage = () => (
	<div>
		<SEO title="App" />
		{/* <Navigation /> */}
        <MainApp />
		<Footer />
	</div>
);

export default IndexPage;
