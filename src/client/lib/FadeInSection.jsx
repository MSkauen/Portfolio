import React, { useState, useRef, useEffect } from 'react';
import '../../shared/css/App.css';

export default function FadeInSection (props) {
    const domRef = useRef();

    const [isVisible, setVisible] = useState(false);
    const [type, setType] = useState('fade-in');
    const [className, setClassName] = useState('');

    let options = {
        rootMargin: '0px',
        threshold: props.threshold || 0.0,
    };

    useEffect(() => {
        setType(props.type);
        setClassName(props.className);

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(domRef.current);
            }
        }, options);

        observer.observe(domRef.current);

        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div ref={domRef} className={`${className} ${type} ${isVisible ? 'is-visible' : ''}`}>
            {props.children}
        </div>
    );
}