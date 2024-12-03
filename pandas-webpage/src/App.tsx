import React from 'react';
import './App.css';
import HomePage from './pages/Home';
import AboutMePage from './components/About-Me';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import aminduImage from './images/profile-pictures/amindu.jpg';
import charuImage from './images/profile-pictures/charu.jpg';
import kaavyaImage from './images/profile-pictures/kaavya.jpg';
import laurelImage from './images/profile-pictures/laurel.jpg';
import leiaImage from './images/profile-pictures/leia.jpg';
import suhaniImage from './images/profile-pictures/suhani.jpg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
          <Route path="/suhani" element={
            <AboutMePage
              name="Suhani Agrawal"
              description="Hi, I'm Suhani, a computer science & economics student graduating in 2027!"
              graduation={2027}
              major="Computer Science & Economics"
              hobbies="Playing piano and guitar, making jewelry, reading, crocheting"
              linkedin="https://www.linkedin.com/in/suhani-agrawal-90502a225/"
              photo_src={suhaniImage}
              email="suhaniagraw@gmail.com"
            />
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
