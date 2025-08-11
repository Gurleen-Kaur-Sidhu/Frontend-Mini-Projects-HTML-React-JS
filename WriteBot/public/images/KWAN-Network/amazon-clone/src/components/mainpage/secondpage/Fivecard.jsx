


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Fivecard.css'

const Fivecard = () => {
    const [cards, setCards] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products'); 
            const data = await response.json();
            setCards(data.slice(5, 9)); 
        };

        fetchData();
    }, []);

    const handleClick = (id) => {
        console.log("this is id:", id);
        navigate(`/product/${id}`);
    };

    return (
        <div className='container-fluid me-2 my-4'>
            <div className='row'>
                {cards.map((card, index) => (
                    <div className="col-md-3 col-sm-6 col-6 fivecard" key={index}>
                        <div className="card border five3card rounded-0" onClick={() => handleClick(card.id)}>
                            <div className="card-body five2card d-flex flex-column">
                                <h5 className="card-title five4card">{card.title}</h5>
                                <div className="d-flex align-items-center justify-content-center" style={{ flex: 1 }}>
                                    <img src={card.image} 
                                         className="img-fluid myimg5 m-2 p-3" 
                                         alt={card.title} 
                                          /> 
                                </div>
                               
                                <a href='' className="mt-auto">See all offers</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fivecard;



