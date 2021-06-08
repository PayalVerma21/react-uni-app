import react, { useState } from "react";
import {useHistory} from "react-router-dom";
import Courses from "./Courses";
import './index.css';

const LoginForm = () => {

        const [email, setEmail] = useState("");
        const [pass, setPass] = useState("");

        const [allEntry, setAllEntry] = useState([]);
        var history = useHistory();

        const SubmitLogin= (event) => {
            event.preventDefault();

            var adminEmail = "admin@gmail.com";
            var adminPassword = "admin!123";
            

            if(email == adminEmail && pass == adminPassword )
             {
                const newEntry = {email:email, password:pass};
                setAllEntry([...allEntry, newEntry]);
                console.log(allEntry);
                
                setEmail("");
                setPass("");

                history.push("/courses")
                
                                
            } else{
                alert("Incorrect username or password");
            }
            

        }

        const resetLogin = () => {
            window.location.reload();
        }    

        

    return(
        <>  
            <div className="styleForm">
            <form action="/courses" className="form1" onSubmit={SubmitLogin} onReset={resetLogin}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" autoComplete="off"
                    value={email}
                    onChange={ (event) => setEmail(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password " id="password" autoComplete="off"
                    value={pass} 
                    onChange={(event) => setPass(event.target.value)}
                    />
                </div>

                <button  type="submit" className="submitForm">Login (Admin/User)</button>
                <button type="reset" className="resetForm">Reset</button>
            </form>

                <div>
                    {
                        allEntry.map( (currElement) => {
                            return(
                                <div>
                                    <p>{currElement.email} </p>
                                    <p>{currElement.password}</p>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </>
    );
};

export default LoginForm;