import React from 'react';

import './styles.css';

const HomePage: React.FC = () => {
  return (
    <div>
        <div className="home-image-container">
            <img className="image" src="https://runyaosphotos.s3.amazonaws.com/000084150001.jpg" alt="Zhengzhou" />
            <div className="image-caption">
                <p>Zhengzhou, China, 13 May 2020</p>
            </div>
        </div>
        
    </div>
    
  );
}

export default HomePage;