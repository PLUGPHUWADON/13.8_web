import { useState,useRef,useEffect } from "react";
import { useNavigate,useParams,Link } from "react-router-dom";
import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import axios from "axios";
import "../styles/All.css";
import ReactPaginate from 'react-paginate';
import Header from "../components/Header";

export default function All() {
    const [countpost,setcountpost] = useState(0);
    const [data,setdata] = useState([]);
    const [checkwait,setcheckwait] = useState(false);
    const waitani = useRef(null);
    const secsionani  = useRef(null);
    const navigate = useNavigate();
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

    //!first load and count pagination

    useEffect(() => {
        const countPagination = async () => {
            const response = await axios.get(url + "/countpost");
            if (response.status == 200) {
                let allpost = response.data;
                let round = 1;
                let amount = 1;

                for (let i = 1 ; i <= allpost ; i++) {
                    if (round > 10) {
                        amount += 1;
                        round = 1;
                    }
                    round += 1;
                }

                setcountpost(amount);
            }
        }
        countPagination();

        const loadDataFirst = async () => {
            const response = await axios.get(url + "/getdatafirst/" + param.page);
            if (response.status == 200) {
                setcheckwait(true);
                setdata([...response.data]);
            }
        }
        loadDataFirst();
    },[]);

    //!

    //!pagination system

    const handlePageChange = (selectedPage) => {
        console.log(selectedPage.selected + 1)
        navigate(window.location.href = `/all/${selectedPage.selected + 1}`);
    };

    //!

    //!show data

    const showData = () => {
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
        }
        catch{}
    }

    //!

    return(
        <main className="All">
            <div className="bg_Detail"></div>
            <Header/>
            <section ref={secsionani}>
                {checkwait ? "":<div ref={waitani} className="load"></div>}
                {showData()}
                
                {checkwait ? 
                    <ReactPaginate
                    pageCount={countpost}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageChange}
                    containerClassName="pagination5"
                    activeClassName="active"
                    forcePage={param.page - 1}
                    previousLabel={null}
                    nextLabel={null}
                />:""}
            </section>
        </main>
    );
}