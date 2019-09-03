import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Sliders from '../components/Slider';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 3,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    title: {
        padding: "50px 0 10px",
        textAlign: "center",
    },
    subtitle: {
        textAlign: "center",
        maxWidth: "500px",
        margin: "0 auto",
        fontStyle:"italic",
        fontWaight: 100,
        fontFamily: "inharit",
    }
}));

export default function HomePage() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.cover}>
            <Typography variant="h4" gutterBottom className={classes.title}>
                Home Page
            </Typography>
            <Typography variant="body2" gutterBottom className={classes.subtitle}>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </Typography>
            <Sliders />
        </Container>
    );
}