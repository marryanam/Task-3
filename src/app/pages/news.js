import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import News from '../components/News';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 3,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

export default function NewsPage() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.cover}>
            <News />
        </Container>
    );
}