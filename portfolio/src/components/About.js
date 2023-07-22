import IMG from '../assets/4-04.jpg';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">Experienced Full Stack Developer proficient in cutting-edge technologies. Passionate self-learner with 6+ years of expertise. Let's build something amazing together!</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Cat" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;