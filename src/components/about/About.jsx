import "./about.css"
import Abt from "../../img/abt.png";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Abt}
                    alt="" 
                    className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title"> About ME !</h1>
                <p className="a-sub">
                    This is about the person who you are trying to look into...
                </p>
                <p className="a-desc">
                    I'm a graduate from Sathyabama University with a Bio-Medical Engineering Degree.
                    In the journey of hunting a job to start a career, i found this programming and started learning bits which has driven me to lern till this.
                    I'm good at React | Node | Express | MongoDB.
                    
                    

                </p>
            </div>
        </div>
    )
}

export default About
