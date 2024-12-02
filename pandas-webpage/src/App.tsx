import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMePage from './components/About-Me';
import aminduImage from './images/amindu.jpg';
import charuImage from './images/charu.jpg';
import kaavyaImage from './images/kaavya.png';
import laurelImage from './images/laurel.jpg';
import leiaImage from './images/leia.jpg';
import suhaniImage from './images/suhani.png';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/amindu" element={
      <AboutMePage
        name="Amindu Abeydeera"
        description="Hi, I'm Amindu, a computer science student graduating in 2026!"
        graduation={2026}
        major="Computer Science"
        hobbies="Soccer, Gym, Video Games, Cooking"
        linkedin="https://www.linkedin.com/in/amindu-abeydeera/"
        photo_src={aminduImage} 
        email="amindu@example.com"
      />
      }
      />
      </Routes>
      <Routes>
        <Route path="/charu" element={
      <AboutMePage
        name="Charu Mehta"
        description="Hi, I'm Charu, a computer science student graduating in 2026!"
        graduation={2026}
        major="Computer Science"
        hobbies="Playing the flute, baking, and playing video games"
        linkedin="https://www.linkedin.com/in/charu-mehta1/"
        photo_src={charuImage} 
        email="charu@example.com"
      />
      }
      />
      </Routes>
      <Routes>
        <Route path="/kaavya" element={
      <AboutMePage
        name="Kaavya Radhakrishnan"
        description="Hi, I'm Kaavya, a computer science student graduating in {2026}!"
        graduation={2026}
        major="Computer Science"
        hobbies="Dancing, coloring, and baking"
        linkedin="https://www.linkedin.com/in/kaavyaradhakrishnan/"
        photo_src={kaavyaImage} 
        email="kaavya@example.com"
      />
      }
      />
      </Routes>
      <Routes>
        <Route path="/laurel" element={
      <AboutMePage
        name="Laurel Sun"
        description="Hi, I'm Laurel, a computer science student graduating in 2027!"
        graduation={2027}
        major="Computer Science"
        hobbies="Running, hiking, and reading"
        linkedin="https://www.linkedin.com/in/laurel-sun/"
        photo_src={laurelImage} 
        email="laurel@example.com"
      />
      }
      />
      </Routes>
      <Routes>
        <Route path="/leia" element={
      <AboutMePage
        name="Leia Spagnola"
        description="Hi, I'm Leia, a computer science student graduating in 2028!"
        graduation={2028}
        major="Computer Science"
        hobbies="Reading and playing video games"
        linkedin="https://www.linkedin.com/in/leia-spagnola/"
        photo_src={leiaImage} 
        email="leia@example.com"
      />
      }
      />
      </Routes>
      <Routes>
        <Route path="/suhani" element={
      <AboutMePage
        name="Suhani Agrawal"
        description="Hi, I'm Suhani, a computer science & economics student graduating in 2027!"
        graduation={2027}
        major="Computer Science & Economics"
        hobbies="Playing piano and guitar, making jewelry, reading, crocheting"
        linkedin="https://www.linkedin.com/in/suhani-agrawal-90502a225/"
        photo_src={suhaniImage} 
        email="suhani@example.com"
      />
      }
      />
      </Routes>
    </div>
    </Router>
  );
};

export default App;
