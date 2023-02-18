import formula1vid1 from '..//F1 Videos/formula1vid1.mp4';
import '../css/First.css';
import { Link } from 'react-router-dom'
import Typical from 'react-typical';

const First = () => {
    return (
        <>
            <div className='vid'>
                <div className='overlay'></div>
                <video src={formula1vid1} autoPlay loop muted />
            </div>
            <div className='text'>
                <h1>
                    WELCOME!
                </h1>
                <p>
                    Home of {''}
                    <Typical 
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'SPEED 💨🏎',
                            1000,
                            'FASHION 🥶',
                            1000,
                            'LUXURY 💸',
                            1000,
                            'LIFESTYLE and',
                            1000,
                            'RULES 📏'
                        ]}
                    />
                </p>
            </div>
            
            <Link to={'/home'}>
                <div className='button'>
                    <button>Formula1</button>
                </div>
                
            </Link>
            
        </>
    )
}

export default First;