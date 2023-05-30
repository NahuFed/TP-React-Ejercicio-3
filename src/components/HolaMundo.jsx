import React, { useState } from 'react';



const HolaMundo = (props) => {
    const [msj, setMsj] = useState('');
    return (
        <div>
        <h1>Hello {props.receptor} {msj}!</h1>
        <button onClick={()=> setMsj("from changed state")}>Click me</button>
        </div>
    );
};

export default HolaMundo;