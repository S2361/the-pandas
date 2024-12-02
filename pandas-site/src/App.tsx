import React from "react";
import Header from "./Header"; 
import "./HomePage.css";

// Define team members in an array for easy iteration
const teamMembers = [
  { name: "Amindu Abeydeera", link: "/about/amindu" },
  { name: "Charu Mehta", link: "/about/charu" },
  { name: "Kaavya Radhakrishnan", link: "/about/kaavya" },
  { name: "Laurel Sun", link: "/about/laurel" },
  { name: "Leia Spagnola", link: "/about/leia" },
  { name: "Suhani Agrawal", link: "/about/suhani" }
];

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="home-container">
        <h2>Meet Our Team</h2>
        <p>Click for more about us!</p>
        <ul className="team-list">
          {teamMembers.map((member, index) => (
            <li key={index} className="team-item">
              <a href={member.link} className="team-link">
                {member.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default HomePage;
