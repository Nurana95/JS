import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from 'axios'
import styles from '../css/users.module.css';

const url = "https://jsonplaceholder.typicode.com/users";

const Cards = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios(url).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      {users.map((user, id) => (
        <UserCard
          key={id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          address={user.address}
        />
      ))}
    </div>
  );
};

export default Cards;
