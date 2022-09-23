import React from 'react';

const User = (props) => {

    const familiar = props.familiar;

    // normal system
    let greetings;
    if (familiar) {
        greetings = <p>Welcome, my friend.</p>    
    } else {
        greetings = <p>Who the hell are you?</p>
    }

    return (
        <>
          <div>
            <h2>Greetings</h2>
            {greetings}
          </div>


          <div>
            <h2>Food</h2>
            <p>I will buy Food foe you.</p>
            <p>Lets eat his his whose whose</p>
          </div>
          
          
          <div>
            <h2>Connection</h2>
            <p>Let's join my facebook</p>
            <p>I don't add stranger.</p>
          </div>

        </>
    );
};

export default User;