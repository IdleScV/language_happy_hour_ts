import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';
import Avatar from '@material-ui/core/Avatar';
import Pages from './Pages/Route';

interface NavBarProps {
	userIcon?: string;
	signOn?: () => void;
	signOut?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ userIcon, signOn, signOut }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.logo} color="inherit" aria-label="menu">
						{userIcon ? (
							<Link to={Pages.HOME}>
								<LanguageIcon style={{ color: 'white' }} />
							</Link>
						) : (
							<Link to={Pages.LANDING}>
								<LanguageIcon style={{ color: 'white' }} />
							</Link>
						)}
					</IconButton>
					<Typography variant="h5" className={classes.title}>
						LiveToLearn
					</Typography>
					{userIcon ? (
						<React.Fragment>
							<IconButton color="inherit">
								<Link to={Pages.PROFILE}>
									<Avatar src={userIcon} alt="user icon" className={classes.user} />
								</Link>
							</IconButton>
							<Button size="large" color="inherit" onClick={signOut}>
								<Link to={Pages.LANDING} style={ButtonLink}>
									Sign Out
								</Link>
							</Button>
						</React.Fragment>
					) : (
						<React.Fragment>
							<Button size="large" color="inherit" onClick={signOn}>
								<Link to={Pages.HOME} style={ButtonLink}>
									Login
								</Link>
							</Button>
						</React.Fragment>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		},
		logo: {
			marginRight: theme.spacing(2)
		},
		title: {
			flexGrow: 1
		},
		user: {
			width: theme.spacing(5),
			height: theme.spacing(5)
		}
	})
);

// Remove Text decoration & changes color to default white
const ButtonLink = {
	color: 'white',
	textDecoration: 'none'
};

export default NavBar;
