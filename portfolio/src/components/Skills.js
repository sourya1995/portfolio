import { FaNodeJs, FaReact, FaRust, FaJava, FaPython, FaDocker } from "react-icons/fa";

const Skills = () => {
    const skillsArr = [
        {
            "name": 'NodeJS',
            "icon": FaNodeJs
        },
        {
            "name": "Rust",
            "icon": FaRust
        },
        {
            "name": "Java",
            "icon": FaJava
        },
        {
            "name": "Python",
            "icon": FaPython
        },
        {
            "name": "Reactjs",
            "icon": FaReact
        },
        {
            "name": "Docker",
            "icon": FaDocker
        }
    ];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <i key={index} className='skill-cards'>
                                <Icon className='skill-icon' />
                                <p
                                    className="skill"
                                >
                                    {skill.name}
                                </p>
                            </i>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;