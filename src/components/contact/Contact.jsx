import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Location from "../../img/location.png";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

 
/*6+mZyL_adL5!w7% - emailjs password */

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        emailjs.sendForm(
            'service_mgy105u', 
            'template_42ltgli', 
            formRef.current, 
            'user_hYb5HOTPjQFLZm89uEarj')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">You can find me on..!</h1>
                </div>
                <div className="c-info">
                    <div className="c-info-item">
                        <img 
                        src={Phone}
                        alt="" 
                        className="c-icon" />
                        +91 9032001001
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Email}
                        alt="" 
                        className="c-icon" />
                        kompellapraneeth1999@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Location}
                        alt="" 
                        className="c-icon" />
                        Indus School Road, Sainikpuri, Hyderabad, 500087.
                    </div>

                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>How can I help you..?</b>
                        Feel free to contact me any-time. I can pull you out some or the other way if I can.
                    </p> 
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button> Submit </button>
                        { done && "ThankYou!!.."}
                    </form>

                    
                </div>
            </div>
        </div>
    )
}

export default Contact
