import React from 'react';

import About from './LandingPageComponents/About.component';
import Contact from './LandingPageComponents/Contact.component';

const LandingPage: React.FC = () => {
	return (
		<React.Fragment>
			<About />
			{/* <Contact /> */}
		</React.Fragment>
	);
};

export default LandingPage;
