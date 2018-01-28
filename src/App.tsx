import * as React from 'react';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';
import withRoot from './withRoot';
import Home from './pages/home';
import Todo from './pages/todo';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';
import HomeIcon from 'material-ui-icons/Home';
import TodoIcon from 'material-ui-icons/FormatListNumbered';

const drawerWidth = 240;
const styles: StyleRulesCallback = theme => ({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        position: 'absolute',
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        width: 250,
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
});

const history = createBrowserHistory();

type State = {
    mobileOpen: boolean,
};

class App extends React.Component<WithStyles, State> {

    state = {
        mobileOpen: true,
    };

    routes = (
        <div className={this.props.classes.content}>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/home" component={Home} />
            <Route exact={true} path="/todo" component={Todo} />
        </div>
    );

    drawer = (
        <div>
            <div className={this.props.classes.drawerHeader} />
            <Divider />
            <List>
                <ListItem button onClick={() => history.push('/')}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={() => history.push('/todo')}>
                    <ListItemIcon>
                        <TodoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Todo" />
                </ListItem>
            </List>
            <div style={{height: 10000}} />
        </div>
    );

    render() {

        return (
            <Router history={history}>
                <div className={this.props.classes.root}>
                    <div className={this.props.classes.appFrame}>
                        <AppBar className={this.props.classes.appBar}>
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={this.handleDrawerToggle}
                                    className={this.props.classes.navIconHide}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography type="title" color="inherit" noWrap>
                                    Responsive drawer
                            </Typography>
                            </Toolbar>
                        </AppBar>
                        <Hidden mdUp>
                            <Drawer
                                type="temporary"
                                anchor={'left'}
                                open={this.state.mobileOpen}
                                classes={{
                                    paper: this.props.classes.drawerPaper,
                                }}
                                onClose={this.handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {this.drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden smDown implementation="css">
                            <Drawer
                                type="permanent"
                                open
                                classes={{
                                    paper: this.props.classes.drawerPaper,
                                }}
                            >
                                {this.drawer}
                            </Drawer>
                        </Hidden>
                        {this.routes}
                    </div>
                </div>
            </Router>
        );
    }

    private handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };
}

export default withRoot(withStyles(styles)<{}>(App));
