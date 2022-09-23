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

    // JavaScript ternary operator
    // const greeting = familiar ? 'hello' : 'bye';
    /** const food = familiar
        ? <p>I will buy Food for you.</p>
        : <p>Lets eat his his whose whose</p>
    */

    // jodi 2ta condition 1sathei fullfil korte hobe, tobe
    // logical &&
    /* const connection = familiar && <p>Let's join my facebook.</p> */

    return (
        <>
            <div>
                <h2>Greetings</h2>
                {greetings}
            </div>


            <div>
                <h2>Food</h2>
                {/* {food} */}

                {
                    familiar
                        ? <p>I will buy Food for you.</p>
                        : <p>Lets eat his his whose whose</p>
                }
            </div>


            <div>
                <h2>Connection</h2>
                {/* {connection} */}
                {/* <p>I don't add stranger.</p> */}

                {
                    familiar && <p>Let's join my facebook.</p>
                }

            </div>

        </>
    );
};

export default User;