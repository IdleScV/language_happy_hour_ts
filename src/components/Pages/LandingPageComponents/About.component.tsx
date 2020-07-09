import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWindowSize from '../../../hooks/useWindowSize.hook';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type FormData = {
	firstName: string;
	lastName: string;
	email: string;
};

const About: React.FC = () => {
	const [ current, currentSet ] = useState('about');
	const { register, setValue, handleSubmit, errors } = useForm<FormData>();
	const size = useWindowSize();
	const onSubmit = handleSubmit((formData) => {
		console.log(formData);
	});
	const classes = useStyles();

	return (
		<Box className={classes.root} justifyContent="center" display="flex">
			<Box
				display={size.width && size.width > 904 ? 'flex' : null}
				flexWrap="nowrap"
				css={{ height: '100%' }}
				justifyContent="flex-start"
				className={classes.main}
			>
				<Box
					css={{ minWidth: 100 }}
					style={{ border: 'solid red 2px' }}
					justifyContent="center"
					display={size.width && size.width < 904 ? 'flex' : null}
				>
					<Box p={1}>
						<Typography variant="h5" onClick={() => currentSet('about')} id="about">
							About
						</Typography>
					</Box>
					<Box p={1}>
						<Typography variant="h5" onClick={() => currentSet('learn')}>
							Learn
						</Typography>
					</Box>
					<Box p={1}>
						<Typography variant="h5" onClick={() => currentSet('teach')}>
							Teach
						</Typography>
					</Box>
					<Box p={1}>
						<Typography variant="h5" onClick={() => currentSet('sign up')}>
							Sign Up
						</Typography>
					</Box>
				</Box>
				<Box p={3} style={{ border: 'solid red 2px', maxWidth: '700px' }}>
					{current == 'about' ? (
						<React.Fragment>
							<Typography variant="h3">About Us</Typography>
							<Typography variant="h5">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis felis a turpis condimentum
								faucibus id non ligula. Cras ultricies dignissim enim, sed tempor tortor interdum non. Cras eget
								viverra turpis, at gravida odio. Donec id nisl ut augue congue bibendum eget sit amet urna.
								Fusce laoreet turpis id turpis eleifend, eu ullamcorper justo maximus. Morbi volutpat libero
								porttitor massa sagittis, et ullamcorper dolor luctus. Proin non dolor elit. Duis eu enim a
								ipsum ornare blandit. Mauris sed ante fringilla, finibus ante ac, gravida sem. Pellentesque
								varius gravida congue. Etiam nunc nibh, ultrices eu mi non, euismod vestibulum dolor.
							</Typography>
						</React.Fragment>
					) : current == 'learn' ? (
						<React.Fragment>
							<Typography variant="h3">Learn with people that care</Typography>
							<Typography variant="h5">
								Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam orci
								libero, malesuada eu velit at, ullamcorper tincidunt ex. Donec nisi turpis, efficitur nec
								dapibus eget, interdum quis enim. Pellentesque habitant morbi tristique senectus et netus et
								malesuada fames ac turpis egestas. Donec fermentum odio orci, nec aliquam lectus mollis et.
								Integer gravida sapien a augue luctus vestibulum. Nullam porta sodales ipsum, ut rutrum ante
								fermentum vel. Morbi ullamcorper sit amet urna at tempor. Cras fermentum fermentum mi, nec
								interdum justo congue dapibus. Aenean varius, purus ac scelerisque placerat, enim ipsum
								convallis lectus, vitae porta libero purus aliquet nunc. Praesent congue mollis nulla sit amet
								accumsan. Suspendisse ac magna eros. Interdum et malesuada fames ac ante ipsum primis in
								faucibus.
							</Typography>
						</React.Fragment>
					) : current == 'teach' ? (
						<React.Fragment>
							<Typography variant="h3">Teach those that want to learn</Typography>
							<Typography variant="h5">
								Mauris consequat feugiat vehicula. Nulla lacinia, nisi id iaculis tincidunt, purus tellus
								suscipit elit, id tincidunt est nulla ut leo. Fusce feugiat, erat quis elementum aliquet, magna
								erat auctor ante, id rutrum orci purus condimentum ipsum. Etiam pellentesque orci dui, a
								tincidunt tellus venenatis et. Nulla bibendum vitae ipsum quis aliquet. Maecenas dignissim non
								lorem at consectetur. Vivamus sagittis, turpis vitae euismod iaculis, nisi ligula porta dui, et
								consectetur lorem arcu non odio. Orci varius natoque penatibus et magnis dis parturient montes,
								nascetur ridiculus mus.
							</Typography>
						</React.Fragment>
					) : current == 'sign up' ? (
						<Box>
							<Box mb={3}>
								<Typography variant="h3">Sign Up!</Typography>
							</Box>
							<Box display="flex" justifyContent="center" style={{ border: 'solid red 2px' }}>
								<form onSubmit={onSubmit}>
									<Box display="flex">
										<Box m={3}>
											<TextField
												id="standard-basic"
												name="firstName"
												ref={register}
												label="First name"
												variant="outlined"
												onChange={(e) => setValue('firstName', e.target.value)}
											/>
										</Box>
										<Box m={3}>
											<TextField
												id="standard-basic"
												name="lastName"
												ref={register}
												label="Last name"
												variant="outlined"
												onChange={(e) => setValue('lastName', e.target.value)}
											/>
										</Box>
									</Box>
									<Box m={3} style={{ border: 'solid red 2px' }}>
										<TextField
											id="standard-basic"
											name="email"
											ref={register}
											label="Email"
											variant="outlined"
											onChange={(e) => setValue('email', e.target.value)}
										/>
									</Box>
									<Button type="submit" variant="contained" color="secondary">
										Submit
									</Button>
								</form>
							</Box>
						</Box>
					) : null}
				</Box>
			</Box>
		</Box>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			border: 'solid red 2px',
			maxWidth: '100%'
		},
		main: {
			border: 'solid red 2px',
			maxWidth: '1000px'
		}
	})
);

export default About;
