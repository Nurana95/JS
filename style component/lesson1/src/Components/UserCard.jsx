import React from 'react';
import styles from '../css/cards.module.css';

const UserCard = ({ name, email, phone, address }) => {
    return (
        <div>
            <div className={styles.card}>
                <h2>{name}</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address.street}, {address.city} </p>
            </div>
        </div>
    );
};

export default UserCard;
