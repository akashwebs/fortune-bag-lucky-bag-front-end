import React from 'react';
import './QusAnswer.css';
const QusAnswer = () => {
    return (
        <div className='faq-container'>
            <h2 className='faq-title'>FAQ</h2>
            <div className='qus-conatiner'>
                <div>
                    <h2>How React Work?</h2>
                    <p>React is javascript library for building user interfaces.when data chagne or update react create a virtual dom in borweser and compier with real dom and detect the changes. after then only update the specific data there changed. react component based For this reason its easly working with update.Build encapsulated components that manage their own state, then compose them to make complex UIs.The code is written by JSX in the react. jsx is javascript XML.  </p>
                </div>
                <div>
                    <h2>How useState work?</h2>
                    <p>useState is a hook. useState hook is asynchronous. we can assing a data in state variable with using state funciton. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value. When React first runs your component, useState will return the two-element array as usual but will assign the initial value to the first element of the array</p>
                </div>
                <div>
                    <h2>props vs useState? </h2>
                    <h3>props</h3>
                    <p>props is object.It is written like html atribute. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.props is immuatble. its only for read. </p>
                    <h3>useState</h3>
                    <p>useState is a hook. its return first state variable and second function. any data we can store in the state variable with state function and this variable pass component to another component about props. </p>
                </div>
            </div>
        </div>
    );
};

export default QusAnswer;