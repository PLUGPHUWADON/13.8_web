<<<<<<< HEAD
import { useState,useRef,useEffect } from "react";
import { Link } from "react-router-dom";
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import axios from "axios";
=======
import { useState, useRef } from "react"; //,useEffect
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
>>>>>>> bfc9cd57bf6214b55f4afeffc95f73d2b475ff7e
import Header from "../components/Header";
import "../styles/Home.css";

export default function Home() {
<<<<<<< HEAD
    const [data,setdata] = useState([]);
    const [dataimg,setdataimg] = useState([]);
    const secsionani  = useRef(null);
    const loadpageref = useRef("");
    const url = "http://localhost:3000";
    //const url = "https://backend13point8.thirteenpointeight.com";

    //!play animation

    useGSAP(() => {
        gsap.from(secsionani.current, {
            duration: 0.5,
            delay: 0.5,
            opacity: 0
        });
    });

    //!

    //!load data

    useEffect(() => {
        const load = async () => {
            const response = await axios.get(url + "/");
            if (response.status == 200) {
                setdata([...response.data]);
                loadpageref.current = "load";
            }
        }
        load();
    },[]);

    //!

    //!show data

    const showMainPost = () => {
        try{
            return(
                <div className="firstpost">
                        <Link to={"/detail/" + data[0].post_id}>
                            <img src={`data:images/${data[0].typeimg};base64,${data[0].data}`} alt="" />
                        </Link>
                        <div>
                            <Link to={"/detail/" + data[0].post_id}>
                                <h2>{data[0].title}</h2>
                                <p>{data[0].description}</p>
                            </Link>
                        </div>
                </div>
            );
        }
        catch{}
    }

    const showSubPost = () => {
        try{
            let arr = [];
            arr = data.map((e,key) => {
                return(
                    <Link to={"/detail/" + e.post_id} key={key} className={key == 0 ? "addhidcontent":""}>
                        <div>
                            <img src={`data:images/${e.typeimg};base64,${e.data}`} alt="" />
                            <div>
                                <h3>{e.title}</h3>
                                <p>{e.description}</p>
                            </div>
                        </div>
                    </Link>
                );
            });

            return(
                arr
            );
        }
        catch{}
    }

    //!

    return(
        <main className="Home">
            <div className="boxstar"></div>
            <Header/>
            <section ref={secsionani}>
                {showMainPost()}
                <div className="subpost">
                    {showSubPost()}
                </div>
            </section>
        </main>
    );
}
=======
  const [state, setstate] = useState(false);
  const sessionani = useRef(null);
  //const section = document.querySelector("main > section");

  useGSAP(() => {
    gsap.from(sessionani.current, {
      duration: 0.5,
      delay: 0.5,
      opacity: 0,
    });
    setstate(!state);
  });

  return (
    <main className="Home">
      <div className="boxstar"></div>
      <Header />
      <section ref={sessionani}>
        <div className="firstpost">
          <img
            src="https://plus.unsplash.com/premium_photo-1670210080045-a2e0da63dd99?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <h2>This is the sun</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, aspernatur.
            </p>
          </div>
        </div>
        <div className="subpost">
          <div>
            <img
              src="https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div>
              <h3>sun</h3>
              <p>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Sint doloremque harum ea commodi
                enim recusandae! Recusandae, nulla. In accusantium quam facere
                quasi nostrum ipsam rem officia earum optio voluptatibus fugit
                mollitia sunt saepe esse aspernatur repellendus cum qui
                consequatur aut, eaque fugiat eligendi architecto! Aperiam
                repellendus voluptatibus repudiandae voluptas officia
                consectetur praesentium totam nulla asperiores? Praesentium
                facere laborum consequuntur soluta magnam perspiciatis sed, et
                cum iusto hic excepturi dolorum incidunt nobis possimus impedit
                optio minima? Non error beatae voluptate quis minus. Ullam nemo
                quam consectetur magnam in totam similique nostrum voluptate
                illum sit, harum quisquam voluptatem autem non sint quod?
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div>
              <h3>sun</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div>
              <h3>sun</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <h1>Copyright 2024 plug</h1>
      </footer>
    </main>
  );
}
>>>>>>> bfc9cd57bf6214b55f4afeffc95f73d2b475ff7e
