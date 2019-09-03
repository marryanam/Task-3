import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Form from '../components/Form';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 3,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

export default function LoginPage() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.cover}>
            <Form />
        </Container>
    );
}