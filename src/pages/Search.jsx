import { useState,useRef,useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import axios from "axios";
import "../styles/Search.css";
import Header from "../components/Header";

export default function Search() {
    const [data,setdata] = useState([]);
    const [checkwait,setcheckwait] = useState(false);
    const secsionani  = useRef(null);
    const waitani = useRef(null);
    const param = useParams();
    const url = "http://localhost:3000";
    //const url = "https://backend13point8.thirteenpointeight.com";

    //!play animation

    useGSAP(() => {
        gsap.from(secsionani.current,{
            duration: 0.5,
            delay: 0.5,
            opacity: 0
        });
        gsap.to(waitani.current,{
            duration: 1,
            rotate: 360,
            repeat: -1,
            ease: "none"
        });
    });

    //!

    //!load data

    useEffect(() => {
        const loadData = async () => {
            const response = await axios.get(url + "/search/" + param.name);
            if (response.status == 200) {
                setcheckwait(true);
                setdata([...response.data]);
            }
        }
        loadData();
    },[]);

    //!

    //!show data

    const dataSearch = () => {
        try{
            if (data != "") {
                let arr = [];

                arr = data.map((e,key) => {
                    return(
                        <Link to={"/detail/" + e.post_id} key={key}>
                            <div className="item">
                                <div>
                                <img src={`data:images/${e.typeimg};base64,${e.data}`} alt="" />
                                </div>
                                <div>
                                    <h2>{e.title}</h2>
                                    <p>{e.description}</p>
                                </div>
                            </div>
                        </Link>
                    );
                });

                return(arr);
            }
            else {
                return(<h2 style={{color:"#fff",marginTop:"20px"}}>ไม่พบข้อมูล :(</h2>);
            }
        }
        catch{}
    }

    //!

    return(
        <main className="Search">
            <div className="bg_Detail"></div>
            <Header/>
            <section ref={secsionani}>
                {checkwait ? "":<div ref={waitani} className="load"></div>}
                {dataSearch()}
            </section>
        </main>
    );
}