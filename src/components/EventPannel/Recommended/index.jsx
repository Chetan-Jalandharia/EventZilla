import React, { useEffect, useState } from "react";
import "./index.css";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";
import SimpleCard from "../../Card/SimpleCard";

export default () => {
    const [RecommendEvents, setRecommendEvents] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_REC_EVENT).then(val => {
            setRecommendEvents(val.data?.events)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className="event-pannel">

            <div className="e-bar text-light">
                <span className="fs-5 fw-bold">
                    Recommended shows
                    <BsArrowRight style={{
                        marginLeft: 6,
                        fontWeight:"bold"
                    }} />
                </span>
                <span>
                    <a style={{ color: "white" }} href="#">See all</a>
                </span>
            </div>

            <div className="event-bar">
                {
                    RecommendEvents?.map((val, index) => {
                        return (
                            <SimpleCard key={index} data={val} />
                        )
                    })
                }
            </div>

        </div>
    );
};
