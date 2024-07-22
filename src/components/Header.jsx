import { useState,useRef } from 'react';
import { Link,useNavigate } from "react-router-dom";
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Header() {
    const [inputsearch,setinputsearch] = useState("");
    const headerani = useRef(null);
    const logoani = useRef(null);
    const navigate = useNavigate();

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

    const submitSearch = (e) => {
        if (inputsearch != "") {
            navigate("/search/" + inputsearch);
        }
        else {
            e.preventDefault();
        }
    }

    return(
        <header ref={headerani} className="Header">
            <Link to="/">
            <div ref={logoani} className="logo_Header"><span>13.</span><span>8</span></div>
            </Link>
            <nav>
                <ul>
                    <li><Link to="/">หน้าแรก</Link></li>
                    <li><Link to="/all/1">ดาวทั้งหมด</Link></li>
                </ul>
            </nav>
            <form onSubmit={submitSearch}>
                <input type="text" placeholder="ค้นหา" onChange={e => setinputsearch(e.target.value)} />
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </header>
    );
}