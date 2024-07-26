import { useState,useRef,useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import axios from "axios";
import "../styles/Detail.css";
import Header from "../components/Header";

export default function Detail() {
    const [state,setstate] = useState(false);
    const [data,setdata] = useState([]);
    const [dataoffer,setdataoffer] = useState([]);
    const [showdata,setshowdata] = useState([]);
    const [checkwait,setcheckwait] = useState(false);
    const sectionani = useRef(null);
    const waitani = useRef(null);
    const param = useParams();
    const url = "http://localhost:3000";
    //const url = "https://backend13point8.thirteenpointeight.com";

    //!animation

    useGSAP(() => {
            gsap.from(sectionani.current, {
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
        }
    );

    //!

    //!load data

    useEffect(() => {
        const loadData = async () => {
            const response = await axios.get(url + "/getdatapostall/" + param.id);
            if (response.status == 200) {
               setcheckwait(true);
               setdata([...response.data]);
            }
        }
        loadData();
    },[]);

    useEffect(() => {
        const loadDataOffer = async () => {
            const response = await axios.get(url + "/offer/" + param.id);
            if (response.status == 200) {
                setdataoffer([...response.data]);
            }
        }
        loadDataOffer();
    },[]);

    //!

    //!show data

    useEffect(() => { 
        try{
            let arr = [];

            data.filter((e,key) => {
                if (e.title != "" && e.title != undefined) {
                    arr.push(<h1 key={key + 10}>{e.title}</h1>);
                }
                if (e.des != "" && e.des != undefined) {
                    arr.push(<p key={key + 20}>{e.des}</p>);
                }
                if (e.data != "" && e.data != undefined) {
                    arr.push(<div className="showdetailimg_video" key={key + 30}><img src={`data:images/${e.typeimg};base64,${e.data}`} alt="" /></div>);
                }
                if (e.url != "" && e.url != undefined) {
                    arr.push(<div className="showdetailimg_video" key={key + 40}><iframe src={e.url} frameBorder="0"></iframe></div>);
                }
            });

            setshowdata([...arr]);
        }
        catch{}
    },[data]);

    //!

    //!reload page

    const reLoad = () => {
        setTimeout(() => {
            window.location.reload();
        },100);
    }

    //!

    return(
        <main className="Detail">
            <div className="bg_Detail"></div>
            <Header/>
            <section ref={sectionani}>
                {checkwait ? "":<div ref={waitani} className="load"></div>}
                {showdata.map(e => (
                    e
                ))}
                <div className="offer">
                    <h2>แนะนำ</h2>
                    <div className="boxitem">
                        {dataoffer.map((e,key) => (
                            <Link onClick={reLoad} to={"/detail/" + e.post_id} key={key}>
                                <div className="item">
                                    <img src={`data:images/${e.typeimg};base64,${e.data}`} alt="" />
                                    <div>
                                        <h3>{e.title}</h3>
                                        <p>{e.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}