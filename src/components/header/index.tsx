import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { fade } from '@material-ui/core/styles/colorManipulator';
// import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
// import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton color="inherit" aria-label="Open drawer">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                    Customiser
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;