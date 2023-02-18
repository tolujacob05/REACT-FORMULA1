import '../css/Home.css';
import Nav from './Nav.tsx'
import Ferrari from "..//F1 Videos/Ferrari.mp4";
import Redbull from "..//F1 Videos/Redbull.mp4";
import Mercedes from "..//F1 Videos/Mercedes.mp4";
import Mclaren from "..//F1 Videos/Mclaren.mp4";
/*import F7 from '..//F1 images/F7.jpg'; */

const Home = () => {
    return (
        <>
            <div>
                <Nav />
            </div>
            {/*<div className='pic1'>
                <img src={F7} alt='car1' /> 
            </div> */}
            <div className='video'>
                <div className='vid1'>
                    <div className='overlay1'></div>
                    <video src={Ferrari} autoPlay loop muted />
                </div>
                <div>
                    <div className='vid2'>
                        <div className='overlay2'></div>
                        <video src={Redbull} autoPlay loop muted />
                    </div>
                    <div className='vid3'>
                        <div className='overlay3'></div>
                        <video src={Mercedes} autoPlay loop muted />
                    </div>
                </div>
            </div>
            <div className='cont'>
                <div className='word'>
                    <h3>
                        HISTORY 
                    </h3>
                    <p>
                        Formula One was first defined in 1946 by the Commission <br /> Sportive Internationale (CSI) of the FIA, forerunner of FISA, <br /> as the premier single-seater racing category in worldwide <br /> motorsport to become effective in 1947.
                    </p>
                </div>
            </div>
            
            <div className='mclaren'>
                <p>
                In the early years there were around 20 races held from late Spring <br /> to early Autumn (Fall) in Europe, although not all of these were <br /> considered significant. Most competitive cars came from Italy, particularly Alfa Romeo.
                </p>
                <div className='vid4'>
                    <div className='overlay4'></div>
                    <video src={Mclaren} autoPlay loop muted />
                </div>
            </div>
            
        </>
    )
}

export default Home;