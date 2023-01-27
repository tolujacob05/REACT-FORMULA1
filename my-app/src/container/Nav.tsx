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



const Nav = () => {
    return (
        <>
            <div className='logo'>
                <ParallaxText baseVelocity={10}>FORMULA 1</ParallaxText>
                <ParallaxText baseVelocity={-10}>FORMULA 1</ParallaxText>
            </div>
            <div className='nav'>
                <a href='about'>ABOUT</a>
                <a href='history'>HISTORY</a>
                <a href='drivers'>DRIVERS</a>
                <a href='constructors'>CONSTRUCTORS</a>
                <a href='gridgrandprix'>GRID AND GRAND PRIX</a>
                <a href='pictures&videos'>PICTURES AND VIDEOS</a>
                <a href='me'>ME</a>
            </div>
        </>
    )
}

export default Nav;