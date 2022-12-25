import AcUnitIcon from '@mui/icons-material/AcUnit';
import Header from "./Header" 
import './App.css';
import Login from "./Login"
import Body from "./Body"
import Footer from "./Footer"
import Profile from "./Profile"
import { BrowserRouter as Router,Switch,Route}
from "react-router-dom"
import Alerts from './Alerts'
import ViewattendenceInfo from './Viewattendence'
import PhotoGallery from './PhotoGallery'







function App() {
  return (
    
   <Router>
      <div className="app">
      <Switch >
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Switch>
          <Route path="/ViewattendenceInfo">
            <Header />
            <ViewattendenceInfo />
            <Footer />
          </Route>
        </Switch>
      
        <Switch>
          <Route path="/home">
            <Header />
            <Body />
            <Footer />
          </Route>
        </Switch>
        <Switch>
          <Route path="/profile">
            <Header />
            <Profile />
            <Footer />
          </Route>
        </Switch>
        <Switch>
          <Route path="/alerts">
            <Header />
            <Alerts />
            <Footer />
          </Route>
        </Switch>
        <Switch>
          <Route path="/photogallery">
            <Header />
            <PhotoGallery />
            <Footer />
          </Route>
        </Switch>
     
   
   
     
        
      </div>
    </Router>
  
  );
}

export default App;
