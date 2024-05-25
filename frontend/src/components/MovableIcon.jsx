import { useState, useEffect } from 'react';

const MovableIcon = () => {
    const [mousePos, setMousePos] = useState({});
    const [imageCenter, setImageCenter] = useState(`0px, 0px`);
    const [onImage, setOnImage] = useState(false);
    const [distanceX, setDistanceX] = useState(null);
    const [distanceY, setDistanceY] = useState(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    return (
        <div
            className='h-screen'
            style={{
                backgroundImage: `url("https://cdn-icons-png.flaticon.com/512/4221/4221633.png")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: imageCenter,
            }}
            onMouseDown={e => {
                setOnImage(true)
                setDistanceX(mousePos.x - parseInt(window.getComputedStyle(e.target).getPropertyValue("background-position").split(' ')[0].slice(0, -2)))
                setDistanceY(mousePos.y - parseInt(window.getComputedStyle(e.target).getPropertyValue("background-position").split(' ')[1].slice(0, -2)))
            }}
            onMouseUp={() => setOnImage(false)}
            onMouseMove={() => {
                if (onImage) {
                    setImageCenter(`${mousePos.x - distanceX}px ${mousePos.y - distanceY}px`)
                }
            }}
        >
        </div>
    )
}

export default MovableIcon;
