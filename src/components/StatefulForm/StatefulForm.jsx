import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([null]);
    const [password, setPassword] = useState([]);

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(email, password,name); 

    }
    const handleEmailChange = e =>{
            console.log(e.target.value);
            setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }
    const handleNameChange = e =>{
        setName(e.target.value);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleNameChange}
                 type="text" name="name" /> <br />
                <input
                    onChange={handleEmailChange}
                 type="email" name="email" id="" /> <br />
                <input
                    onChange={handlePasswordChange}
                 type="password" name="password" id="" /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default StatefulForm;