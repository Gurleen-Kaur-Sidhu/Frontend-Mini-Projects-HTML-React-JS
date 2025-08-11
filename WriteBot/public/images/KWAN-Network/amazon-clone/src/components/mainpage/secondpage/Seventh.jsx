


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Seventh.css'

const Seventh = () => {
    const [cards, setCards] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products'); 
            const data = await response.json();
            setCards(data.slice(0, 4)); 
        };

        fetchData();
    }, []);

    const handleClick = (id) => {
        console.log("this is id:", id);
        navigate(`/product/${id}`);
    }

    return (
        <div className='container-fluid me-2 my-4'>
            <div className='row'>
                {cards.map((card, index) => (
                    <div className="col-md-3 sevencard col-sm-6 col-12 mb-4" key={index}>
                        <div className="card border rounded-0 h-100" onClick={() => handleClick(card.id)}>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title seven4card">{card.title}</h5>
                                
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6 seven2card d-flex align-items-center justify-content-center" >
                                            <img src={card.image} className="img-fluid border" alt={card.title} style={{ maxHeight: '100%', objectFit: 'contain', border: '2px solid #000' }} />
                                        </div>

                                        <div className="col-6 seven2card d-flex align-items-center justify-content-center">
                                            <img src={card.image} className="img-fluid border" alt={card.title} style={{ maxHeight: '100%', objectFit: 'contain', border: '2px solid #000' }} />
                                        </div>
                                    
                                        <div className="col-6 seven2card d-flex align-items-center justify-content-center">
                                            <img src={card.image} className="img-fluid border" alt={card.title} style={{ maxHeight: '100%', objectFit: 'contain', border: '2px solid #000' }} />
                                        </div>

                                        <div className="col-6 seven2card d-flex align-items-center justify-content-center">
                                            <img src={card.image} className="img-fluid border" alt={card.title} style={{ maxHeight: '100%', objectFit: 'contain', border: '2px solid #000' }} />
                                        </div>
                                    </div>
                                </div>

                                <p className="card-text"></p>
                                <a href='' className="mt-auto">See all offers</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Seventh;

