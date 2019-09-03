import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

const breadcrumbNameMap = {
    '/home': 'Home',
    '/news': 'News',
    '/profile': 'Profile',
    '/login': 'Login',
};

function ListItemLink(props) {
    const { to, open, ...other } = props;
    const primary = breadcrumbNameMap[to];

    return (
        <li>
          <ListItem button component={RouterLink} to={to} {...other}>
            <ListItemText primary={primary} />
          </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    open: PropTypes.bool,
    to: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 360,
    },
    lists: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(1),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const LinkRouter = props => <Link {...props} component={RouterLink} />;

export default function Nav() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    return (
    
    <nav className={classes.lists} aria-label="mailbox folders">
        <List>
            <ListItemLink to="/"/>
            <ListItemLink to="/news"/>
            <ListItemLink to="/profile"/>
            <ListItemLink to="/login"/>
        </List>
    </nav>
  );
}