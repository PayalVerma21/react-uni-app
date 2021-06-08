import react from "react";
import { NavLink } from "react-router-dom";
import book from "../src/Images/book.jpg";
import './index.css';
import LoginForm from "./LoginForm";



const Home = () => {


    return (
      <>
          <section id = "header" className="d-flex">
            <div className ="container-fluid nav_bg">
                <div className = "row">
                    <div className = "col-10 mx-auto">
                        <div className ="row">

                        
                        <div className="col-md-6 pt-3 pt-lg-1 order-2 order-lg-0">
                            <h3 className="home-h3"> Build your career <strong >Admissions open</strong> </h3>
                            <h5 className="home-h5"> Education is a right and not a Privilege</h5>
                            <div className="mt-3">
                                <NavLink to="/loginform" className="btn-primary" id="btn-id"> Get Started </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2 header-img">
                            <img src={book} className="img-fluid animated" alt="home img" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
      </>
    );
  };
  
  export default Home;