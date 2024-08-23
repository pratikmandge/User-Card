import React, { useEffect, useState } from 'react';
import '../css/usercard.css';
import userData from '../api/api';

const UserCard = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        userData().then(data => {
            setUser(data);
        });
    }, []);

    return (
        <div className="user-cards-container">
            {user.map(userInfo => (
                <div className="card" key={userInfo.id}>
                    <div className="card-header">
                        <h2>{userInfo.name}</h2>
                        <p className="username">@{userInfo.username}</p>
                    </div>
                    <div className="card-body">
                        <p><b>Email:</b> {userInfo.email}</p>
                        <p><b>Website:</b> <a href={`http://${userInfo.website}`} target="_blank" rel="noopener noreferrer">{userInfo.website}</a></p>
                        <p>
                            <b>Address:</b> {userInfo.address.street}, {userInfo.address.suite}, {userInfo.address.city}, {userInfo.address.zipcode}
                        </p>
                        <p><b>Company:</b> {userInfo.company.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserCard;
