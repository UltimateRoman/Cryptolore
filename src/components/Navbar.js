import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const Link = require("react-router-dom").Link;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="#FGR" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
          <Link to="/" >
            <div style={{color:"white"}}>Cryptolore</div>
          </Link>
          </Typography>
          <Link to="/add" style={{ color: '#FFF' }}>Add New Work</Link>
          &nbsp;&nbsp;&nbsp;&nbsp; 
          <Link to="/works" style={{ color: '#FFF' }}>Gallery</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/mytokens" style={{ color: '#FFF' }}>Your NFTs</Link>          
        </Toolbar>
      </AppBar>
    </div>
  );
}