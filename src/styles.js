import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const drawerMini = 71;

export const useStyles = makeStyles((theme) => ({
  appRoot: {
    display: "flex",
  },
  navigationLogo: {
    width: "50%"
  },
  navigationsLogoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navigationDrawer: {
    width: 240,
    whiteSpace: "nowrap",
    overflowX: "hidden",
    position: "relative",
    height: "100vh",
  },
  menuItem: {
    borderRadius: 8,
    marginBottom: 8,
  },
  route:{
    textDecoration:"none",
    width: "80%",
    border:0
  },
  menuItemActive: {
    backgroundColor: "#b2b1b9"
  },
  navigationDrawerCollapse: {
    width: theme.spacing(9),

  },
  navigationToolbarCollapse: {
    display: "none",
    [theme.breakpoints.up('xs')]: {
      display: "block",
    },
  },
  menutig: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  menuback: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: theme.spacing(1),
    ...theme.mixins.toolbar,
  },
  hidechevicon: {
    display: "none"
  },


  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerMini}px)`,
    marginLeft: drawerMini,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarmini:{
    width: `calc(100% - ${drawerMini}px)`,
    marginLeft: drawerMini
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: -169 ,
  },

  //profile
  //map
  mapContainer:{
    height:"80vh",
    width:"90vw",
    position:"absolute",
    
  },
  drawerDetail:{
    width:300,
  }

}));