

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Thirdcard.css'

const Thirdcard = () => {
    const [cards3, setCards3] = useState([]);
    const scrollRef = useRef(null);
    
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData3 = async () => {
            const response3 = await fetch('https://fakestoreapi.com/products');
            const data3 = await response3.json();
            setCards3(data3);
        };
        fetchData3();
    }, []);

    const handleClick = (id) => {
        console.log("this is id:", id);
        navigate(`/product/${id}`);
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
                    <div className="card border-0 rounded-0 mt-3">
                        <div className="card-body thirdbody" style={{ width: "100%" }}>
                            <h5 className="card-title text-start">Blockbuster Deals</h5>

                            <div style={{ position: 'relative' }}>
                                <button className='buttonn'
                                    onClick={scrollLeft} 
                                    style={{ position: 'absolute', left: 10, top: '20%', zIndex: 1 }}
                                >
                                    <i className="bi bi-chevron-left"></i>
                                </button>
                                <div className='thirdscroll'
                                    ref={scrollRef}
                                    style={{
                                        display: "flex",
                                        overflowX: "scroll",
                                        scrollBehavior: "smooth"
                                    }}
                                >
                                    <div className='' style={{ display: "flex" }}>
                                        {cards3.map((card11, index11) => (
                                            <div className="col-sm m-2" key={index11} >
                                                <div class='thirdclass'
                                                    className="card thirdcard border-1 rounded-0" 
                                                    onClick={() => handleClick(card11.id)} 
                                                    
                                                >
                                                    <div className='thirdimage'
                                                        
                                                    >
                                                        <img  
                                                            className='mycard p-3'
                                                            src={card11.image} 
                                                            alt={card11.title} 
                                                            style={{
                                                                objectFit:"contain"
                                                            }}
                                                        />
                                                    </div>
                                                    <h5 className="card-title p-1 h6" style={{ height: "25px" }}>{card11.title}</h5>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button className='buttonn'
                                    onClick={scrollRight} 
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
}

export default Thirdcard;






