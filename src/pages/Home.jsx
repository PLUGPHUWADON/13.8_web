import { useState,useRef,useEffect } from "react";
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import Header from "../components/Header";
import "../styles/Home.css";
gsap.registerPlugin(useGSAP);

export default function Home() {
    const [state,setstate] = useState(false);
    const sessionani  = useRef(null);
    const section = document.querySelector("main > section");

    useGSAP(() => {
            gsap.from(sessionani.current, {
                duration: 0.5,
                delay: 0.5,
                opacity: 0
            });
            setstate(!state);
        }
    );

    return(
        <main className="Home">
            <div className="boxstar"></div>
            <Header/>
            <section ref={sessionani}>
                <div className="firstpost">
                    <img src="https://plus.unsplash.com/premium_photo-1670210080045-a2e0da63dd99?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div>
                        <h2>This is the sun</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aspernatur.</p>
                    </div>
                </div>
                <div className="subpost">
                    <div>
                        <img src="https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div>
                            <h3>sun</h3>
                            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint doloremque harum ea commodi enim recusandae! Recusandae, nulla. In accusantium quam facere quasi nostrum ipsam rem officia earum optio voluptatibus fugit mollitia sunt saepe esse aspernatur repellendus cum qui consequatur aut, eaque fugiat eligendi architecto! Aperiam repellendus voluptatibus repudiandae voluptas officia consectetur praesentium totam nulla asperiores? Praesentium facere laborum consequuntur soluta magnam perspiciatis sed, et cum iusto hic excepturi dolorum incidunt nobis possimus impedit optio minima? Non error beatae voluptate quis minus. Ullam nemo quam consectetur magnam in totam similique nostrum voluptate illum sit, harum quisquam voluptatem autem non sint quod?</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div>
                            <h3>sun</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div>
                            <h3>sun</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}