import { useState,useRef,useEffect } from "react";
import { Link } from "react-router-dom";
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import axios from "axios";
import Header from "../components/Header";
import "../styles/Home.css";

export default function Home() {
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