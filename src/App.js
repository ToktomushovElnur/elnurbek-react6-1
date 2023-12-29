import React, { useRef } from 'react';

const CoolAnimation = () => {
    const boxRef = useRef(null);

    const handleMouseEnter = () => {
        const box = boxRef.current;
        box.style.transform = 'scale(1.1)';
    };

    const handleMouseLeave = () => {
        const box = boxRef.current;
        box.style.transform = 'scale(1)';
    };

    return (
        <div className="cool-box-container">
            <div
                ref={boxRef}
                className="cool-box"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span>useRef!</span>
            </div>
        </div>
    );
};

export default CoolAnimation;
