import React from 'react';

class ProfileClass extends React.Component {
    render() {
      return (
        // Нажал "Merge" до того, как досмотрел в видео до "Не нажимать Мёрж"
        <div>
            <span style={ {fontSize: "1.1em"} }>Привет, <b>{this.props.name.split(' ')[0]}!</b></span> <br></br>
            <span>Дата регистрации: {this.props.registeredAt.toLocaleString('ru',
            {
                day: 'numeric',
                month: 'long',
                year:'numeric'
            })}
             </span>
        </div>
  
        )
     }
  }

export default ProfileClass;  