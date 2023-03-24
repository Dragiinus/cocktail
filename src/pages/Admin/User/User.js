import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'

import { userService } from '@/_services';

const User = () => {
    // let navigate = useNavigate()
    const [users, setUsers] = useState([])
    const flag = useRef(false)

    useEffect(() => {
        if(flag.current === false){
            userService.getAllUsers()
                .then(res => {
                    console.log(res.data.data)
                    setUsers(res.data)
                })
                .catch(err => console.log(err))
        }
        
        return () => flag.current = true
        
    }, [])

    const delUser = (userId) => {
        userService.deleteUser(userId)
            .then(res => {
                // Mise à jour du state pour affichage
                setUsers((current) => current.filter(user => user.id !== userId))
            })
            .catch(err => console.log(err))
    }
 
    // const marcel = (userId) => {
    //     console.log('click')
    //     navigate("../edit/"+userId)
    // }

    return (
        <div className="User">
            User list
            {/* <button onClick={() => marcel(4)}>user 4</button> */}
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td><span className='del_ubtn' onClick={() => delUser(user.id)}>X</span></td>
                                <td><Link to={`/admin/user/edit/${user.id}`}>{user.id}</Link></td>
                                <td>{user.nom}</td>
                                <td>{user.prénom}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default User;