import react from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import Courses from "./Courses";


const App = () => {
  return (
    <>  
        <Navbar />  
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/loginform" component ={LoginForm}/>  
            <Route exact path = "/about" component = {About}/>
            <Route exact path = "/contact" component = {Contact}/> 
            <Route exact path = "/courses" component = {Courses}/> 
            <Redirect to="/" />         
        </Switch>
        
        <Footer />
    </>
  );
};

export default App;