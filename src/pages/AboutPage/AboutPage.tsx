import React from 'react';

import './styles.css';

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className='home-text-container'>
        <div className="about-section">
            <h1>Background</h1>
            <p>Hello and welcome! My name is Runyao and I am a Master of Computer Science student at University of Illinois Urbana-Champaign. I also majored in Computer Science for my bachelor's degree at 
                New York University. I have experience in full-stack development and DevOps through projects at school, internships, and in my personal time. For example, I designed and built this website
                from scratch. I will graduate in December 2023 and I am looking for full-time software engineer opportunities. I am also an amateur photographer and you can find some of my works here. For 
                more details of my background, check out my <a href="/resume" target="_blank">resume</a>.
            </p>
        </div>
        <div className="about-section">
            <h1>About Myself</h1>
            <p>I am from Zhengzhou, China. For people unfamiliar with the city, I always tell them the interesting fact that most iPhones are assembled there.</p> 

            <p>I started coding when I was in my last year of high school. I was not sure about what to major in when I go to college so I took some Codecademy courses on Python. It was nothing too advanced 
              but it showed me the possibilities of coding. When I started getting more serious into Computer Science and coding, the problem-solving aspect interested me the most. It was fun and rewarding 
              to convert an idea into an application, with a lot of learning and debugging along the way. As I worked on personal and internship projects, I see software engineering as a constant puzzle-solving 
              process that makes good money. I like puzzle-solving and I like buying nice things, so the career of software engineer seems like a sweet deal for me. </p>

            <p>I am also very interested in cameras and photography. In 2019, I bought two Polaroid cameras at a flea market in Tbilisi. I then started a buying frenzy until eBay temporarily froze my account 
              and told me to spend responsively. After I got a bunch of cool vintage cameras (which are not as expensive as eBay made me feel), I started using them. Some of the photos came out quite nicely. 
              You can find some of my favorite photos in the photography section.   
            </p>

        </div>
            
            
        </div>
    </div>
  );
}

export default AboutPage;