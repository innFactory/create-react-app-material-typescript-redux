// prettier-ignore
import { AppBar, IconButton, Toolbar, Typography, useMediaQuery } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { Router } from "react-router-dom";
import { RouterSwitch } from 'react-typesafe-routes';
import { Drawer } from "./components/Drawer";
import { history } from "./configureStore";
import { withRoot } from "./withRoot";
import { useSelector } from 'react-redux';
import { useActions } from './actions';
import * as ConfigActions from './actions/config';
import { RootState } from "./reducers";
import { router } from "./Router";

import { Snackbar } from './components/Snackbar';

function App() {
	const classes = useStyles();
	const drawerOpen: boolean = useSelector((state: RootState) => state.drawerOpen);
	const configActions: typeof ConfigActions = useActions(ConfigActions);
	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("sm")
	);

	const handleDrawerToggle = () => {
		configActions.setDrawerOpen(!drawerOpen);
	};


	return (
		<Router history={history}>
			<div className={classes.root}>
				<div className={classes.appFrame}>
				<Snackbar />
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={handleDrawerToggle}
								className={classes.navIconHide}
							>
								<MenuIcon />
							</IconButton>
							<Typography
								variant="h6"
								color="inherit"
								noWrap={isMobile}
							>
								Create-React-App with Material-UI, Typescript,
								Redux and Routing
							</Typography>
						</Toolbar>
					</AppBar>
					<Drawer />
					<div className={classes.content}>
						<RouterSwitch router={router} />
					</div>
				</div>
			</div>
		</Router>
	);
}


const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "100%",
		zIndex: 1,
		overflow: "hidden",
	},
	appFrame: {
		position: "relative",
		display: "flex",
		width: "100%",
		height: "100%",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		position: "absolute",
	},
	navIconHide: {
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	content: {
		backgroundColor: theme.palette.background.default,
		width: "100%",
		height: "calc(100% - 56px)",
		marginTop: 56,
		[theme.breakpoints.up("sm")]: {
			height: "calc(100% - 64px)",
			marginTop: 64,
		},
	},
}));

export default withRoot(App);
