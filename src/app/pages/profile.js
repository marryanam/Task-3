import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Profile from '../components/Profile';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 3,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    container:{
        alignItems: "center",
        display: "flex",
        minHeight:"100vh",
    }
}));

export default function ProfilePage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Container maxWidth="lg" className={classes.cover}>
                <Profile />
            </Container>
        </div>
    );
}