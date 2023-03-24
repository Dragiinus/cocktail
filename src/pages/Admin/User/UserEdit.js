import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom'
import { userService } from '@/_services';

const UserEdit = () => {
    const [user, setUsers] = useState([])
    const flag = useRef(false)

    let {uid} = useParams()
    console.log(uid)

    const onChange = (e) => {

    }

    const onSubmit = (e) => {
        
    }

    useEffect(() => {
        if(flag.current === false){
            userService.getUser(uid)
                .then(res => {
                    console.log(res.data.data)
                    setUsers(res.data.data)
                })
                .catch(err => console.log(err))
        }
        
        return () => flag.current = true
    }, [])

    return (
        <div className="UserEdit">
            UserEdit
            <form onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name="nom" value={user.nom} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" name="prenom" value={user.prenom} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="pseudo">Pseudo</label>
                    <input type="text" name="pseudo" value={user.pseudo} onChange={onChange}/>
                </div>
                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={user.email} onChange={onChange}/>
                </div>
                <div className="group">
                    <button>connexion</button>
                </div>
            </form>
        </div>
    );
};

export default UserEdit;