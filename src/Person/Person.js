import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>I am {props.name} and i am {props.age} years old...</p>
            <p>{props.children}</p>
        </div>
          
        )
}; 

export default Person;