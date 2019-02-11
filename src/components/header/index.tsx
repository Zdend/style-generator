import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Header: React.FC<{ 
    sidebarOpen: boolean, 
    toggleSidebar: Function,
    element: string,
    changeElement: Function
}> = ({ sidebarOpen, toggleSidebar, element, changeElement }) => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton color="inherit" aria-label="Open drawer" onClick={() => toggleSidebar(!sidebarOpen)}>
                    {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                    Customiser
                </Typography>
                <div style={{ flexGrow: 1 }} />
                <Select
                    displayEmpty
                    value={element}
                    onChange={(e) => changeElement(e.target.value)}
                >
                    <MenuItem value="input">Input</MenuItem>
                    <MenuItem value="div">Div</MenuItem>
                    <MenuItem value="button">Button</MenuItem>
                </Select>
            </Toolbar>
        </AppBar>
    );
};

export default Header;