interface AboutMePageProps {
    name: string;
    description: string;
    graduation: number;
    major: string;
    hobbies: string;
    linkedin: string;
    photo_src: string;
    email: string;
}

const AboutMePage = (props: AboutMePageProps) => {
    <div>
        <h1 id="name-title">{props.name}</h1>
        <div className="horizontal-align">
            <div id="about-me-information">
                <h2 className="subtitles">About Me</h2>
                <p className="text">{props.description}</p>
                <h2 className="subtitles">Hobbies</h2>
                <p className="text">{props.hobbies}</p>
                <div className="horizontal-align">
                    <a href={props.linkedin}><img id="linkedin-logo" src="../../public/linkedin-logo.webp" alt="LinkedIn logo"/></a>
                    <div>
                        <h2 className="subtitles">Contact Me</h2>
                        <p className="text">{props.email}</p>
                    </div>
                </div>
            </div>
            <img id="profile-picture" src={props.photo_src} alt={props.name} />
        </div>
    </div>
}

export default AboutMePage;