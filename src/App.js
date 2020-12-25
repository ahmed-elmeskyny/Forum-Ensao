import React from 'react'

//styling
import './App.scss';

//react-router-dom
import {BrowserRouter as Router , Switch , Route} from "react-router-dom"

//pages
import Aceuil from "./pages/Acceuil/Aceuil";
import Apropos from "./pages/Apropos/apropos";
import Partenaire from "./pages/partenaire/partenaire";
import Sponsor from "./pages/sponsor/sponsor";
import Contact from "./pages/contact/contact";

//components
import Header from "./components/header/header";
import ScrollUp from "./components/button-scroll/button-scroll";



class App extends React.Component {
  constructor(){
    super();
    this.state={

    }
  }

  render()
 {
   return (
     <Router>
       <Header></Header>
       {/* switching between pages */}
       <Switch>
         <Route exact path="/">
           <Aceuil></Aceuil>
         </Route>
         <Route exact path="/apropos">
           <Apropos></Apropos>
         </Route>
         <Route exact path="/sponsors">
           <Sponsor></Sponsor>
         </Route>
         <Route exact  path="/partenaire">
           <Partenaire></Partenaire>
         </Route>
         <Route exact path="/contact">
           <Contact></Contact>
         </Route>
       </Switch>
       <ScrollUp></ScrollUp>
     </Router>
   )
 }
}

export default App;
