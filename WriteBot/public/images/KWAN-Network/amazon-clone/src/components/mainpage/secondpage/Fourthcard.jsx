


import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Fourthcard.css';

const Fourthcard = () => {
    const [cards3, setCards3] = useState([]);
    const scrollRef = useRef(null);
    
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData3 = async () => {
            const response3 = await fetch('https://api.escuelajs.co/api/v1/categories');
            const data3 = await response3.json();
            setCards3(data3);
        };
        fetchData3();
    }, []);

    const handleClick = (id) => {
        console.log("this is id:", id);
        navigate(`/product4/${id}`);
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -300, 
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 300, 
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='mx-2'>
            <div className='product-section'>
                <div>
                    <div className="card fourthcard border-0 rounded-0 mt-3">
                        <div className="card-body fourth6card" style={{ width: "100%" }}>
                            <h5 className="card-title text-right fourth8card">Blockbuster deals</h5>

                            <div style={{ position: 'relative' }}>
                                <button 
                                    onClick={scrollLeft} 
                                    className="btn buttonn btn-light" 
                                    style={{ position: 'absolute', left: 10, top: '20%', zIndex: 1 }}
                                >
                                    <i className="bi bi-chevron-left"></i>
                                </button>
                                <div
                                    ref={scrollRef} 
                                    className="d-flex overflow-auto"
                                    style={{
                                        scrollBehavior: "smooth"
                                    }}
                                >
                                    {cards3.map((card11, index11) => (
                                        <div className="fourth2card p-2" key={index11} >
                                            <div 
                                                className="card fourth3card border-1 rounded-0" 
                                                onClick={() => handleClick(card11.id)} 
                                                
                                            >
                                                <div className="card-body d-flex flex-column align-items-center">
                                                    <div className="card-text fourth4card" >
                                                        <img 
                                                            src={card11.image} 
                                                            className="img-fluid" 
                                                            alt={card11.name} 
                                                            style={{ objectFit: "contain", height: "100%", width: "100%" }} 
                                                        />
                                                    </div>
                                                    <h5 className="card-title fourth7card text-center">{card11.name}</h5>
                                                    <a href="#" className="">See More Results</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button 
                                    onClick={scrollRight} 
                                    className="btn buttonn btn-light" 
                                    style={{ position: 'absolute', right: 10, top: '20%', zIndex: 1 }}
                                >
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fourthcard;


