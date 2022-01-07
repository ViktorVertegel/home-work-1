import React from 'react';


function SubmitForm() {
    
    let email = "";
    let password = "";

    function handleInputChange(e) {
        e.target.type = "email" ? email = e.target.value : password = e.target.value;
        console.log(email);
        console.log(password); 
    }
    
    function handleSubmit(e){
        
    // не понял, почему тут не работает проверка вида (email.trim !== "")    
        if ((email.trim.length !== 0) && (password.trim.length !== 0)) {
            console.log ({email, password});
            email = "";
            password = ""; 
            }
        else (alert ("Заполни оба поля, дружочек.") )
    }

    
    return (
        
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} type={email} placeholder="E-mail">
                </input ><br/>
                
                <input onChange={handleInputChange} type={password} placeholder="Password">
                
                </input><br/>    
                <button type='submit'>
                    Submit
                </button>    
            </form>
        
        
    )



}

export default SubmitForm;