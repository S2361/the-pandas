import React from "react";
import Header from "./Header"; 
import "./HomePage.css";

// Define team members in an array for easy iteration
const teamMembers = [
  { name: "Amindu Abeydeera", link: "/about/amindu", photo: "/photos/amindu.jpg" },
  { name: "Charu Mehta", link: "/about/charu", photo: "/photos/charu.jpg" },
  { name: "Kaavya Radhakrishnan", link: "/about/kaavya", photo: "/photos/kaavya.jpg" },
  { name: "Laurel Sun", link: "/about/laurel", photo: "/photos/laurel.jpg" },
  { name: "Leia Spagnola", link: "/about/leia", photo: "/photos/leia.jpg" },
  { name: "Suhani Agrawal", link: "/about/suhani", photo: "/photos/suhani.jpg" }
];


const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="home-container">
  <h2>Our Team</h2>
  <p>Click for more about us!</p>
  <ul className="team-list">
    {teamMembers.map((member, index) => (
      <li key={index} className="team-item">
        <a href={member.link}>
          <img src={member.photo} alt={member.name} className="team-photo" />
          <span className="team-name">{member.name}</span>
        </a>
      </li>
    ))}
  </ul>
</div>


    </div>
  );
};

export default HomePage;
