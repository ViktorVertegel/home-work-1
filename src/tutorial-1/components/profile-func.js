import React from "react";

function ProfileFunc(props) {
      
    return (
        <div>
        <span style={ {fontSize: "1.1em"} }>Привет, <b>{props.name.split(' ')[0]}!</b></span> <br></br>
        <span>Дата регистрации: {props.registeredAt.toLocaleString('ru',
        {
            day: 'numeric',
            month: 'long',
            year:'numeric'
        })}
         </span>
    </div>
    );
  }
  export default ProfileFunc;