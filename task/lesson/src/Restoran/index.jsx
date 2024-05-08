import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Restoran = () => {
    const url = "http://localhost:3000/restaran";
    const [data, setData] = useState([]);
    const [Open, setOpen] = useState(false);


    useEffect(() => {
        axios(url).then(({ data }) => {
            setData(data);
        });
    }, []);

    return (
        <div>
            <h1>Название вашего ресторана</h1>
            <nav>
                <ul>
                    <li><a href="#menu">Меню</a></li>
                    <li><a href="#about">О нас</a></li>
                    <li><a href="#contact">Контакты</a></li>
                </ul>
            </nav>
            <section id="menu">
                <h2>Меню</h2>
                {data.map(({ id, name, menu }) => (
                    <div key={id} className="menu-item">
                        <h3 onClick={() => setOpen(!Open)}>{name} </h3>

                        {Open && menu.map(({ name, price }) => (
                            <div key={name}>
                                <p>Цена: {price}</p>
                                <p>Описание блюда: {name}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Restoran;
