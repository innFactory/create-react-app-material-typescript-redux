// prettier-ignore
import { Badge, Divider, Drawer as DrawerMui, Hidden, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme } from '@material-ui/core';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import HomeIcon from '@material-ui/icons/Home';
import * as React from 'react';
import { Todo } from '../model/todo';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { router } from '../Router';
import { useRoutesActive } from 'react-typesafe-routes';
import { useHistory } from 'react-router-dom';
import { useActions } from '../actions';
import * as ConfigActions from '../actions/config';

export function Drawer() {
	const classes = useStyles();
	const drawerOpen: boolean = useSelector((state: RootState) => state.drawerOpen);
	const configActions: typeof ConfigActions = useActions(ConfigActions);

	const handleDrawerToggle = () => {
		configActions.setDrawerOpen(!drawerOpen);
	};

	return (
		<>
			<Hidden mdUp>
				<DrawerMui
					variant="temporary"
					anchor={'left'}
					open={drawerOpen}
					classes={{
						paper: classes.drawerPaper,
					}}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					<Content />
				</DrawerMui>
			</Hidden>
			<Hidden smDown>
				<DrawerMui
					variant="permanent"
					open
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<Content />
				</DrawerMui>
			</Hidden>
		</>
	);
}

function Content() {
	const classes = useStyles();
	const todoList = useSelector((state: RootState) => state.todoList);
	const history = useHistory();

	const { home, todo } = useRoutesActive({
		home: router.home,
		todo: router.todo,
	});

	return (
		<div>
			<div className={classes.drawerHeader} />
			<Divider />
			<List>
				<ListItem button onClick={() => history.push(router.home().$)} selected={home}>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary="Home" />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem button onClick={() => history.push(router.todo().$)} selected={todo}>
					<ListItemIcon>
						<TodoIcon todoList={todoList} />
					</ListItemIcon>
					<ListItemText primary="Todo" />
				</ListItem>
			</List>
		</div>
	);
}

function TodoIcon(props: { todoList: Todo[] }) {
	let uncompletedTodos = props.todoList.filter(t => t.completed === false);

	if (uncompletedTodos.length > 0) {
		return (
			<Badge color="secondary" badgeContent={uncompletedTodos.length}>
				<FormatListNumberedIcon />
			</Badge>
		);
	} else {
		return <FormatListNumberedIcon />;
	}
}

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
	drawerHeader: { ...theme.mixins.toolbar },
	drawerPaper: {
		width: 250,
		backgroundColor: theme.palette.background.default,
		[theme.breakpoints.up('md')]: {
			width: drawerWidth,
			position: 'relative',
			height: '100%',
		},
	},
}));
