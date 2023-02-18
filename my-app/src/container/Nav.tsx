import '../css/Nav.css'
import { useRef  } from 'react';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from 'framer-motion';
import { wrap } from "@motionone/utils";
/*import logo from '..//F1 images/logo.png';*/

interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

function ParallaxText ({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 20,
        stiffness: 400
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-40, 100, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current  * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    })

    return (
        <div className='parallax'>
            <motion.div className='scroller' style={{ x }}>
                <span>{children}</span>
                <span>{children}</span>
            </motion.div>
        </div>
    )
}

const navVariants = {
    hidden: {
        opacity: 0, 
        x: '-100vw'
    },
    visible: {
        opacity: 1, 
        x: '-10vh',
        y: '5vh',
        transition: {
            delay: 1.5, duration: 1.5, type: 'spring', stiffness: 60
        }
    }
}


const Nav = () => {
    return (
        <div className='big'>
            <div className='logo'>
                <ParallaxText baseVelocity={10}>FORMULA 1</ParallaxText>
                <ParallaxText baseVelocity={-10}>FORMULA 1</ParallaxText>
            </div>
            <motion.div className='nav'
                variants={navVariants}
                initial={'hidden'}
                animate={'visible'}
                whileHover={{ 
                    scale: 1.1, 
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    transition: {
                        duration: 0.3
                    }
                }}
            >
                <a href='home'>HOME</a>
                <a href='about'>ABOUT</a>
                <a href='history'>HISTORY</a>
                <a href='drivers'>DRIVERS</a>
                <a href='constructors'>CONSTRUCTORS</a>
                <a href='gridgrandprix'>GRID AND GRAND PRIX</a>
                <a href='pictures&videos'>PICTURES AND VIDEOS</a>
                <a href='me'>ME</a>
            </motion.div>
        </div>
        
    )
}

export default Nav;