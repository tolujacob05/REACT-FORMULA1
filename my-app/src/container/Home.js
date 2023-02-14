import '../css/Home.css';
import Nav from './Nav.tsx'
import F7 from '..//F1 images/F7.jpg';

const Home = () => {
    return (
        <>
            <div>
                <Nav />
            </div>
            <div className='pic1'>
                <img src={F7} alt='car1' /> 
            </div>
        </>
    )
}

export default Home;