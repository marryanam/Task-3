import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Container from '@material-ui/core/Container';
import { browserHistory } from 'react-router';
import { flexbox } from '@material-ui/system';

import FaceIcon from '@material-ui/icons/Face';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import HomeIcon from '@material-ui/icons/Home';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import RouterBreadcrumbs from './app/components/Breadcrumbs';

import HomePage from './app/pages/home';
import NewsPage from './app/pages/news';
import ProfilePage from './app/pages/profile';
import LoginPage from './app/pages/login';
import './style.css';


const useStyles = makeStyles({
    root: {
        width: "100%",
        background: '#f5f5f5', 
        justifyContent: "space-evenly",
    },
    link: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#3f51b5",
        textDecoration: "none",
        fontWeight: 700,
        "&:hover": {
        color: "#94adb8"
        },
    },
    img: {
        width: "45px"
    },
    page:{
        minHeight:"90vh",
    }
});

export default function App() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <div className={classes.pageCover}>
            <Router>
                <div>
                    <header>
                        <nav>
                            <BottomNavigation value={value}  showLabels  className={classes.root} onChange={(event, newValue) => { setValue(newValue); }} >
                                <Link to="/"  className={classes.link}> <HomeIcon /> Home</Link>
                                <Link to="/news"  className={classes.link}> <BurstModeIcon /> News </Link>
                                <img src={window.location.origin + '/img/logo.svg'}  className={classes.img} alt="Logo"/>
                                <Link to="/profile"  className={classes.link}> <FaceIcon /> Profile </Link>
                                <Link to="/login"  className={classes.link}> <HowToRegIcon /> Login </Link>
                            </BottomNavigation>
                        </nav>
                    </header>

                    <main className={classes.page}>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/news" component={NewsPage} />
                        <Route path="/profile" component={ProfilePage} />
                        <Route path="/login" component={LoginPage} />
                    </main>

                    <footer>
                        <nav>
                            <BottomNavigation value={value}  showLabels  className={classes.root} onChange={(event, newValue) => { setValue(newValue); }} >
                                <Link to="/" className={classes.link}> Home</Link>
                                <Link to="/news" className={classes.link}> News </Link>
                                <Link to="/profile" className={classes.link}> Profile </Link>
                                <Link to="/login" className={classes.link}> Login </Link>
                            </BottomNavigation>
                        </nav>
                    </footer>
                </div>
            </Router>
        </div>
    );

}
