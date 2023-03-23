import React from 'react';
import { useNavigate } from 'react-router-dom'

const User = () => {
    let navigate = useNavigate()
 
    const marcel = (userId) => {
        console.log('click')
        navigate("../edit/"+userId)
    }

    return (
        <div className="User">
            User list
            <button onClick={() => marcel(4)}>user 4</button>
        </div>
    );
};

export default User;