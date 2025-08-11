


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Secondcards.css'


const Secondcards = () => {
    const [cards2, setCards2] = useState([]);
    let navigate = useNavigate();


    useEffect(() => {
        const fetchData2 = async () => {
            const response2 = await fetch('https://fakestoreapi.com/products');
            const data2 = await response2.json();
            // setCards2(data2);
            setCards2(data2.slice(5,15)); 
        };

        fetchData2();
    }, []);

    
    const handleClick = (id) => {
        console.log("this is id:", id);
        navigate(`/product/${id}`);
    };

    return (
        <div className='mx-2'>
            <div className='product-section'>
                <div>
                    <div className="card border-0 rounded-0">
                        <div className="card-body card2">
                            <h5 className="card-title text-start">
                                Minimum 50% off | Home, kitchen & outdoors <a href='' style={{ fontSize: "15px" }}>See all offers</a>
                            </h5>

                            <div style={{ display: "flex", overflowX: "auto", overflowY: "hidden", alignItems: "center" }}>
    {cards2.map((card, index) => (
        <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
            <div className="card border-0 rounded-0 card3card" onClick={() => handleClick(card.id)}>
                <div className="card-body card3">
                    <img 
                        src={card.image} 
                        className="card2-img p-3" 
                        style={{ 
                            height: "150px",  
                            width: "100%", 
                            objectFit: "contain", 
                        }} 
                        alt={card.title} 
                    />
                    <p className='text-center h6 card2-para'>{card.title}</p>
                </div>
            </div>
        </div>
    ))}
</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Secondcards;