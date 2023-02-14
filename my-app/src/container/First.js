import ExpertBilberry1 from '..//F1 Videos/ExpertBilberry1.mp4';
import '../css/First.css';
import { Link } from 'react-router-dom'

const First = () => {
    return (
        <>
            <div className='vid'>
                <div className='overlay'></div>
                <video src={ExpertBilberry1} autoPlay loop muted />

            </div>
            <div className='text'>
                <h1>
                    Welcome! To the world of Formula 1 
                </h1>
            </div>
            
            <Link to={'/home'}>
                <div className='button'>
                    <button>Let's go</button>
                </div>
                
            </Link>
            
        </>
    )
}

export default First;