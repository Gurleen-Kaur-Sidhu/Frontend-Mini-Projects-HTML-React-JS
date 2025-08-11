


import React, { useState, useEffect, useRef } from 'react';

const Card2 = () => {
    const [cards3, setCards3] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        const fetchData3 = async () => {
            const response3 = await fetch('https://api.escuelajs.co/api/v1/categories');
            const data3 = await response3.json();
            setCards3(data3);
        };

        fetchData3();
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div>
            <div className='card-section mb-3'>
                <div>
                    <div className='card'>
                        <div className='card-body p-2'>
                            <h5 className='card-title'>
                                Bestsellers in Sports, Fitness & Outdoors
                                <a href='' style={{ fontSize: '14px' }}> See all orders</a>
                            </h5>
                            <div style={{ position: 'relative', padding: '10px' }}>
                                <div
                                    className='btn btn-lg p-2 border border-1 bg-light'
                                    onClick={scrollLeft}
                                    style={{ position: 'absolute', left: 0, top: '50%', zIndex: 1, transform: 'translateY(-50%)' }}
                                >
                                    <i className="bi bi-chevron-left"></i>
                                </div>
                                <div
                                    ref={scrollRef}
                                    style={{
                                        display: 'flex',
                                        overflow: 'hidden', 
                                        scrollBehavior: 'smooth',
                                        paddingLeft: '60px', 
                                        paddingRight: '60px', 
                                    }}
                                >
                                    {cards3.map((card11, index11) => (
                                        <div className="col" key={index11} style={{ flex: '0 0 25%', maxWidth: '25%', padding: '10px' }}>
                                            <div className="card m-2 border border-1 rounded-0" style={{ height: '350px', backgroundColor: 'white' }}>
                                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                                    <div className="card-text" style={{ height: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <img src={card11.image} className="p-2" style={{ maxHeight: '100%', maxWidth: '100%' }} alt={card11.name} />
                                                    </div>
                                                    <h5 className="card-title" style={{ height: '45px', textAlign: 'center' }}>{card11.name}</h5>
                                                    <a href="#" className="">See More Results</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='btn btn-lg p-2 border border-1 bg-light' onClick={scrollRight} style={{ position: 'absolute', right: 0, top: '50%', zIndex: 1, transform: 'translateY(-50%)' }}>
                                    <i className="bi bi-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .card-section {
                    overflow: hidden;
                }
                @media (max-width: 768px) {
                    .btn {
                        padding: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default Card2;

