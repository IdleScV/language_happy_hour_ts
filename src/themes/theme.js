import { createMuiTheme } from '@material-ui/core/styles';

export const primaryTheme = createMuiTheme({
	palette: {
		primary: { main: '#000000' },
		secondary: {
			main: '#e65100'
		}
	},
	typography: {
		fontFamily: "'Questrial', sans-serif"
	}
});
