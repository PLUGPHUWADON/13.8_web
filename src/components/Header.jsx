import { useState,useRef } from 'react';
import { Link } from "react-router-dom";
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
            <Link to="/">
            <div ref={logoani} className="logo_Header"><span>13.</span><span>8</span></div>
            </Link>
            <nav>
                <ul>
                    <li><Link>หน้าแรก</Link></li>
                    <li>ดาวทั้งหมด</li>
                </ul>
            </nav>
            <form>
                <input type="text" placeholder="ค้นหา" />
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </header>
    );
}