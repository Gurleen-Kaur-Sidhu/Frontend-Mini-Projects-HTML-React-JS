

import React,{useState,useEffect} from 'react'
import './Maincards.css'
import { useNavigate } from 'react-router-dom';

const Maincards = () => {
    const [cards, setCards] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
  
      const fetchData = async () => {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories'); 
        const data = await response.json();
        setCards(data.slice(0,4)); 
      };
  
      fetchData();
    }, []);

    const handleClick = (id) => {
      console.log("this is id:", id);
      navigate(`/product4/${id}`);
  };
  return (
    <div>
    
    <div className='main-cards mx-3'>
    <div className='container-fluid me-2 my-4'>
        <div className='row'>
            {cards.map((card, index) => (
                <div className="col-md-3 col-sm-3 col-6 maincard1" key={index}>
                    <div className="card maincard2 border rounded-0" onClick={() => handleClick(card.id)}>
                        <div className="card-body card1 d-flex flex-column">
                            <h5 className="card-title maincard5">{card.name}</h5>
                            <div className="d-flex align-items-center justify-content-center" style={{ flex: 1 }}>
                                <img src={card.image} className="cardimgmain img-fluid" alt={card.title} />
                            </div>
                            <p className="card-text"></p>
                            <a href='' className="mt-auto maincard4">See all offers</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>

    </div>
  )
}

export default Maincards



