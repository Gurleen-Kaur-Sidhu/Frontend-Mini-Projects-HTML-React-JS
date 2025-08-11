



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sixcard.css'

const Sixcard = () => {
    const [cards2, setCards2] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        const fetchData2 = async () => {
            const response2 = await fetch('https://fakestoreapi.com/products');
            const data2 = await response2.json();
            setCards2(data2);
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
                    <div className="card border-0 border-dark rounded-0">
                        <div className="card-body">
                            <h5 className="card-title">
                                Up to 40% off | Deals on smartphones <a href='' style={{ fontSize: "15px" }}>See all offers</a>
                            </h5>
                            <div className="d-flex overflow-auto align-items-center" style={{ scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}>
                                {cards2.map((card, index) => (
                                    <div className=" p-2" key={index} onClick={() => handleClick(card.id)}>
                                        <div className="sixthdiv border border-4 border-bottom-warning border-primary" style={{
                                            height: '180px', 
                                            width: '200px', 
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopLeftRadius: "250px",
                                            borderTopRightRadius: "250px",
                                            borderBottomLeftRadius: '30px',
                                            borderBottomRightRadius: '30px',
                                            backgroundColor: 'white',
                                            overflow: 'hidden' 
                                        }}>
                                            <img src={card.image} className="img-fluid" style={{ height: '100px', width: '100px' }} alt={card.title} /> {/* Adjusted image size */}
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
};

export default Sixcard;


