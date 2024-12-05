import { Children } from "react";

const ReuseableForm = ({fromTitle, handleSubmit, submitButton ='Submit' 
    
}) => {
   const handleLocalSubmit = e =>{
        e.preventDefault();
        const data ={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
   }
    return (
        <div> 
            <h2>{fromTitle}</h2>
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" /> <br />
                <input type="email" name="email" id="" /> <br />
                <input type="password" name="password" id="" /> <br />
                <input type="submit" value={submitButton} />
            </form>
        </div>
    );
};

export default ReuseableForm;