import { useState,useRef } from 'react';
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Header() {
    const headerani = useRef(null);
    const logoani = useRef(null);

    useGSAP(() => {
            gsap.from(headerani.current, {
                duration: 0.5,
                y: -360
            });

            gsap.from(logoani.current,{
                duration: 1,
                opacity: 0,
                y: 100,
            });
        }
    );

    return(
        <header ref={headerani} className="Header">
            <div ref={logoani} className="logo_Header"><span>13.</span><span>8</span></div>
        </header>
    );
}