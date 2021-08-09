import React,{useState} from 'react';
import { ThemeProvider,createTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import './App.css';
import { useStyles } from './styles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './Components/Navigation';
import Profile from './Page/Profile';
import Dashboard from './Page/Dashboard';
import Sale from './Page/Shop/Sale';
import Information from './Page/Crud';
import clsx from 'clsx';
import { CovidProvider } from './Provider/CovidProvider';
import MapView from './Page/Map/MapView';


const theme = createTheme();
function App() {
  const [open, setOpen] = useState(true)
  const classes = useStyles();
  return (
    <CovidProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className={classes.appRoot}>
      <Router>   
        <Navigation open={open} setOpen={setOpen} />
       
        <main className={clsx(classes.content, !open && classes.contentShift)}>
        <div>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/" component={Profile} exact />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/sale" component={Sale} />
          <Route path="/crud" component={Information} />
          <Route path="/map" component={MapView} />
        </Switch>
        </div>
        </main>
        
      </Router>
    </div>
    </ThemeProvider>
    </CovidProvider>
  );
}

export default App;
