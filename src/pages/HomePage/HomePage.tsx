import React from 'react';

import './styles.css';

const HomePage: React.FC = () => {
  return (
    <div>
        <div className="home-image-container">
            {/* <img className="image" src="" alt="Zhengzhou" /> */}
            <div className="text-container">
                <p>Zhengzhou, China, 13 May 2020</p>
                {/* <div className="copyright">@Runyao Fan</div> */}
            </div>
        </div>
        <div className='home-text-container'>
            <h1>Background</h1>
            <p>Hello and welcome! My name is Runyao and I am a Master of Computer Science student at University of Illinois Urbana-Champaign. I also majored in Computer Science for my bachelor's degree at 
                New York University. I have experience in full-stack development and DevOps through projects at school, internships, and in my personal time. For example, I designed and built this website
                from scratch. I will graduate in December 2023 and I am looking for full-time software engineer opportunities. I am also an amateur photographer and you can find some of my works here. For 
                more details of my background, check out my <a href="/resume" target="_blank">resume</a>.
            </p>
        </div>
    </div>
    
  );
}

export default HomePage;