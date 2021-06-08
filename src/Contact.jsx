import react, { useState } from "react";
import './index.css';

const Contact = () => {

  const [data, setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  })

  const InputEvent = (event) =>{
      const {name, value} = event.target;

      setData ((preValue) => {
        return {
          ...preValue,
          [name] : value,
        };
      });
  };

  const formSubmit = (e) =>{
      e.preventDefault();
      alert (`Full name is ${data.fullname}. Phone number is ${data.phonenumber}. E-mail address is ${data.email} and I want to say ${data.msg}`);
  }
    return (
      <>
          <div className ="my-3">
              <h1 className="text-center"> Contact us</h1>
          </div>
          <div className= "container contact_div">
              <div className="row">
                  <div className="col-md-4  mx-auto">
                      <form onSubmit={formSubmit} className="myForm">
                          <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">
                                Full Name
                            </label>
                            <input 
                            type="text" 
                            class="form-control" 
                            name="fullname"
                            value={data.fullname}
                            onChange={InputEvent}
                            placeholder="Enter your name"
                            autoComplete="off"/>
                          </div>

                          <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">
                                Phone number
                            </label>
                            <input 
                            type="number" 
                            class="form-control" 
                            name="phonenumber"
                            value={data.phonenumber}
                            onChange={InputEvent}
                            placeholder="mobile number"
                            autoComplete="off"  
                            />
                          </div>

                          <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">
                                Email address
                            </label>
                            <input 
                            type="email" 
                            class="form-control"
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="name@example.com"
                            autoComplete="off"                              
                            />
                          </div>

                          <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">
                                Message
                            </label>
                            <textarea class="form-control"
                             rows="3"
                             name = "msg"
                             value= {data.msg}
                             onChange={InputEvent}>
                             </textarea>
                          </div>

                          <div class="col-12">
                              <button class="btn btn-outline-primary" type="submit">Submit form</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </>
    );
  };
  
  export default Contact;