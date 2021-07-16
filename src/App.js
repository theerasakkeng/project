import { ThemeProvider,createTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import './App.css';
import { useStyles } from './styles';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from './Components/Navigation';
import Dashboard from './Page/Dashboard'
import User from './Page/User'
import Information from './Page/Crud'
import Map from './Page/Map'


const theme = createTheme();
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/user" component={User} />
          <Route path="/information" component={Information} />
          <Route path="/map" component={Map} />
        </Switch>
      </Router>
    </div>
    </ThemeProvider>

  );
}

export default App;
