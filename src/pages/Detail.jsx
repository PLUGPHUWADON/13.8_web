import { useState,useRef,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import axios from "axios";
import "../styles/Detail.css";
import Header from "../components/Header";

export default function Detail() {
    const [data,setdata] = useState([]);
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
                    arr.push(<div key={key + 30}><img src={`data:images/${e.typeimg};base64,${e.data}`} alt="" /></div>);
                }
                if (e.url != "" && e.url != undefined) {
                    arr.push(<div key={key + 40}><iframe src={e.url} frameBorder="0"></iframe></div>);
                }
            });

            setshowdata([...arr]);
        }
        catch{}
    },[data]);

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
                {/* <h1>Quo, voluptatibus hic sint aliquid porro expedita laudantium repellendus neque distinctio. Fuga nam qui a?</h1>
                <p>หลังจากยาน Mars Pathfinder สามารถลงจอดบนดาวอังคารได้สำเร็จโดยใช้งบประมาณที่น้อยกว่าโครงการ Viking ทั้งโครงการ 15 เท่า โครงการ Mars Surveyor ’98 โครงการสำรวจดาวอังคารที่ทะเยอทะยานของ NASA ที่มียานสำรวจทั้งสามลำคือ Mars Climate Orbiter, Mars Polar Lander และ Deep Space 2 ภารกิจทั้งสามจะเป็นตัวพิสูจน์ว่านโยบายการดำเนินงานแบบรัดเข็มขัดของ NASA ในเวลานั้นประสบความสำเร็จและสมควรที่จะดำเนินการต่อ ซึ่งไม่นานหลังจากที่ยานทั้งสามลำเดินทางมาถึงดาวอังคาร NASA ก็สูญเสียยานอวกาศทั้งสามลำโดยที่ไม่ทันได้เริ่มต้นภารกิจของพวกมันด้วยซ้ำ</p>
                <div>
                    <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2018_22/1254611/151007-pluto-mn-1525.jpg" alt="" />
                </div>
                <div>
                    <img src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638886434/EducationHub/photos/venus.jpg" alt="" />
                </div>
                <p>หลังจากยาน Mars Pathfinder สามารถลงจอดบนดาวอังคารได้สำเร็จโดยใช้งบประมาณที่น้อยกว่าโครงการ Viking ทั้งโครงการ 15 เท่า โครงการ Mars Surveyor ’98 โครงการสำรวจดาวอังคารที่ทะเยอทะยานของ NASA ที่มียานสำรวจทั้งสามลำคือ Mars Climate Orbiter, Mars Polar Lander และ Deep Space 2 ภารกิจทั้งสามจะเป็นตัวพิสูจน์ว่านโยบายการดำเนินงานแบบรัดเข็มขัดของ NASA ในเวลานั้นประสบความสำเร็จและสมควรที่จะดำเนินการต่อ ซึ่งไม่นานหลังจากที่ยานทั้งสามลำเดินทางมาถึงดาวอังคาร NASA ก็สูญเสียยานอวกาศทั้งสามลำโดยที่ไม่ทันได้เริ่มต้นภารกิจของพวกมันด้วยซ้ำ</p> */}
            </section>
        </main>
    );
}