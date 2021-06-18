import React, { useRef } from 'react';

const ExoloreRef = () => {
    const userRef = useRef(null)
    const handleClick = () => {
        userRef.current.fucus()
        console.log(userRef.current.value);
    }
    return (
        <div>
            <input ref={userRef} type="text"/>
            <button onClick={handleClick}>Get Fucus</button>
        </div>
    );
};

export default ExoloreRef;