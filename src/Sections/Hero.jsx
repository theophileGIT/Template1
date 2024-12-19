import { Link } from 'react-scroll';
import { MdArrowDownward } from "react-icons/md"; 
import { calculateAge } from '../Utils/utils';

const Hero = () => {
    return (
        <section className="hero">
            <div className="content">
                <h1 className="outlined" data-cursor-video={`/`}>YOUR <br className="show-br"/>FULLNAME</h1>

                <div className="box">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula nunc sit amet nisi efficitur, eget varius purus efficitur. <b>Lorem, ipsum</b> , currently working at <a href="/">Lorem, ipsum dolor</a> as <b>Lorem, ipsum</b>.</p>


                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat tincidunt lorem, quis tempor urna viverra sit <a href='/'>amet. </a> <br/>
                    </p>

                    <p>
                        Nulla facilisi. Sed ullamcorper, nisi vel efficitur pharetra, <a href='/'>lectus </a> nunc malesuada ligula, a sollicitudin ante nunc ac felis. Integer dapibus justo in est blandit, ac vehicula lorem bibendum.
                    </p>

                    <p>Phasellus dapibus dolor in <a href='/'>purus </a> scelerisque, ut efficitur mi condimentum. In ac arcu a leo hendrerit <a href='/'>suscipit </a>. Etiam vitae lorem sed dui vestibulum consequat. Vivamus quis odio nec ante gravida dictum.</p>
                </div>

                <Link to={"projects"} smooth={true} duration={500} className="link-button">
                    <div className="button" data-cursor-text="Click me">
                        Tell me more <MdArrowDownward />
                    </div>
                </Link>
            </div>
        </section>
    )
};

export default Hero;
