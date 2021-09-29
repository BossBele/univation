import React from 'react';
import styles from "../styles/Home.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import {dummyEvents, dummyNews, dummyNewsWithoutImages, hubsArray} from "../components/dummyData";


class Landing extends React.Component {
    render() {
        return (
            <div className={styles.main} style={{marginTop: 20}}>
                <div style={{height: 60}}/>
                <div className="d-flex flex-row justify-content-between mx-4">
                    <div className={styles.idea}>
                        <img src="/insight3.png" alt="Insight" width={60} height={90}/>
                        <p className={styles.ideaTxt}>Have an Idea?</p>
                        <Link href="/idea">
                            <button className="btn btn-danger text-white">Talk to OCR</button>
                        </Link>
                    </div>

                    <div className={styles.idea} style={{backgroundColor: "#D7D6D6"}}>
                        <div className="d-flex flex-row mx-2">
                            <img src="/small.png"
                                 alt="report"
                                 width={120}
                                 height={40}
                                 className="img-fluid col-3 h-50"/>
                            <div className="d-flex flex-column mx-3">
                                <p className={styles.reportTitle}>Read this month’s newsletter, The OCR Report.</p>
                                <p>The OCR Report provides office updates, industry insights and spotlights various
                                    entrepreneurs and technologies from our complex innovation ecosystem. </p>
                                <Link href="/reports">
                                    <button className="btn btn-primary col-6 text-white">Read the latest</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row justify-content-between mx-4 my-5">
                    <div className={styles.blueDivs}>
                        <p className={styles.blueDivsText}>Faculty</p>
                        <div className={styles.roundBorder}>
                            <FontAwesomeIcon icon={faArrowRight} size={"2x"} color="#ffffff"/>
                        </div>
                    </div>
                    <div className={styles.blueDivs}>
                        <p className={styles.blueDivsText}>Industry</p>
                        <div className={styles.roundBorder}>
                            <FontAwesomeIcon icon={faArrowRight} size={"2x"} color="#ffffff"/>
                        </div>
                    </div>
                    <div className={styles.blueDivs}>
                        <p className={styles.blueDivsText}>Students</p>
                        <div className={styles.roundBorder}>
                            <FontAwesomeIcon icon={faArrowRight} size={"2x"} color="#ffffff"/>
                        </div>
                    </div>
                </div>

                <div className={styles.mainLower}>
                    <h1>OCR Programs</h1>

                    <div className="d-flex flex-row justify-content-between flex-wrap">
                        {
                            hubsArray.map((hub, index) => {
                                return (
                                    <div key={index} className={styles.flexCenter} style={{cursor: "pointer"}}>
                                        <img src={hub.logo} alt={"HUB" + index} width={200} height={200}
                                             className="img-fluid"/>
                                        <p className="my-4 text-center" style={{width: 300}}>{hub.motto}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className={styles.mainLower2}>
                    <h1>OCR Events</h1>
                    <div className="d-flex flex-row justify-content-center align-items-center flex-wrap">
                        {
                            dummyEvents.map((e, index) => {
                                return (
                                    <div key={index} className={styles.flexCenter}>
                                        <img src={e.image} alt={"Event" + index}
                                             width={400} height={500}
                                             className="img-fluid"/>
                                        <div className={styles.eventsSeparator}/>
                                        <p className={styles.eventsName} style={{width: 350}}>{e.name}</p>
                                        <p className="fw-bold" style={{width: 300}}>{e.date}</p>
                                        <p className="fw-bold" style={{width: 300}}>{e.time}</p>
                                        <p className="fw-bold" style={{width: 300}}>{e.medium}</p>
                                        <p className="" style={{width: 300}}>{e.topic}</p>
                                        <button className="btn btn-primary">Register Here</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="w-75">
                        <Link href="/events">
                            <div
                                className="d-flex flex-row justify-content-between col-lg-3 align-items-center float-end"
                                style={{cursor: "pointer"}}>
                                <p className={styles.boldText}>All events</p>
                                <div className={styles.roundBorder2}>
                                    <FontAwesomeIcon icon={faArrowRight} size={"1x"} color="#000000"/>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.mainLower2}>
                    <h1>OCR News</h1>
                    <div className="d-flex flex-row justify-content-center align-items-center flex-wrap">
                        {
                            dummyNews.map((e, index) => {
                                return (
                                    <div key={index} className={styles.flexCenter}>
                                        <img src={e.image} alt={"News " + index}
                                             width={600} height={500}
                                             className="img-fluid"/>
                                        <div style={{backgroundColor: 'red'}} className="col-12 text-white">
                                            <p className={styles.newsHeadline}>{e.headline}</p>
                                            <button className="btn btn-dark" style={{margin: 20, fontWeight: 600}}>Read
                                                story
                                            </button>
                                        </div>
                                        {
                                            index % 2 === 0 ? null :
                                                <div className="col-12 pt-3">
                                                    <div style={{cursor: "pointer"}}>
                                                        {
                                                            dummyNewsWithoutImages.map((news, index) => {
                                                                return (
                                                                    <div key={index}>
                                                                        <p>{news.date}&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{news.channel}</p>
                                                                        <p className={styles.newsHeadline2}>{news.headline}</p>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        <Link href="/news">
                                                            <div
                                                                className="d-flex flex-row justify-content-between col-3 align-items-center">
                                                                <p className={styles.boldText}>All news</p>
                                                                <div className={styles.roundBorder2}>
                                                                    <FontAwesomeIcon icon={faArrowRight} size={"1x"}
                                                                                     color="#000000"/>
                                                                </div>
                                                            </div>
                                                        </Link>

                                                    </div>
                                                </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;