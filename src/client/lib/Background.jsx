import React, {useEffect, useState } from "react";

export default function Background (props) {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        window.addEventListener('resize', handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return  <div className="background-wrapper">
        <img src={props.src} className={props.classes} alt=""
             style={{
                 transform: `translateY(${(offsetY + props.extraOffsetY) * 0.3}px) scale(${props.scale})`
             }}/>
    </div>
}

