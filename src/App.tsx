import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pages from './components/Pages/Route';

import './App.css';

// Components
import LandingPage from './components/Pages/LandingPage.component';
import HomePage from './components/Pages/HomePage.component';
import Profile from './components/Pages/Profile.component';
import NavBar from './components/NavBar.component';

interface IUser {
	firstName: string;
	lastName: string;
	userName: string;
	idNumber: string;
	profileImg: string;
}

function App() {
	const [ user, userSet ] = useState<IUser | undefined>(undefined);

	const handleSignOn = () => {
		let payload = {
			firstName: 'Wesley',
			lastName: 'Chen',
			userName: 'IdleScV',
			idNumber: '3016932251',
			profileImg: 'https://i.imgur.com/CpQgCvk.jpg'
		};
		userSet(payload);
	};

	const handleSignOut = () => {
		userSet(undefined);
	};

	return (
		<div className="App">
			<Router>
				{user ? <NavBar userIcon={user.profileImg} signOut={handleSignOut} /> : <NavBar signOn={handleSignOn} />}
				<Switch>
					<Route path={Pages.HOME}>
						<HomePage />
					</Route>
					<Route path={Pages.PROFILE}>
						<Profile />
					</Route>
					<Route path={Pages.LANDING}>
						<LandingPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
