import { MdOutlineEast } from "react-icons/md"; 

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="section-header">
                <h3>02</h3>
                <h2 data-cursor-text="Contact me" className="outlined">CONTACT</h2>
            </div>

            <div className="box">
                <p>Lorem, ipsum dolor.?</p>
                <a href="mailto:giuseppe.delcampo@outlook.com">
                    <div className="button" data-cursor-text="Send email">
                        Send me an e-mail <MdOutlineEast />
                    </div>
                </a>
            </div>
        </section>
    )
};

export default Contact;