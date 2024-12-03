import React from "react";
import Header from "../components/Header";
import "./Home.css";
import amindu from "../images/profile-pictures/amindu.jpg";
import charu from "../images/profile-pictures/charu.jpg";
import kaavya from "../images/profile-pictures/kaavya.jpg";
import laurel from "../images/profile-pictures/laurel.jpg";
import leia from "../images/profile-pictures/leia.jpg";
import suhani from "../images/profile-pictures/suhani.jpg";

// Define team members in an array for easy iteration
const teamMembers = [
    { name: "Amindu Abeydeera", link: "/amindu", photo: amindu },
    { name: "Charu Mehta", link: "/charu", photo: charu },
    { name: "Kaavya Radhakrishnan", link: "/kaavya", photo: kaavya },
    { name: "Laurel Sun", link: "/laurel", photo: laurel },
    { name: "Leia Spagnola", link: "/leia", photo: leia },
    { name: "Suhani Agrawal", link: "/suhani", photo: suhani }
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