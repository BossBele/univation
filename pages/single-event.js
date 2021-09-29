import React from 'react';
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import {HeaderBar} from "../components/Embeds";
import Footer from "../components/footer";
import {dummyEvents} from "../components/dummyData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

const SingleNews = () => {
    const [footer, setShowFooter] = React.useState(false);

    const toggleFooter = () => {
        setShowFooter(!footer);
    }

    let event = dummyEvents[0];
    let featured = event.featured;
    return (
        <div className={styles.ideaPage} style={{}}>
            <HeaderBar color="#003D77"
                       close={footer}
                       onToggle={toggleFooter}/>
            {
                footer && <div className="w-100 h-100">
                    <Footer/>
                </div>
            }
            <div className="d-flex justify-content-center col-11 align-items-center flex-column align-self-center px-2">
                <div className="my-4 col-12">
                    <h3 className="fw-bolder text-danger">{event.channel}</h3>
                    <h1 className="fw-bolder">{event.name}</h1>
                    <span className="fw-bold">{event.date}</span>
                    <span className="fw-bold">{event.time}</span>
                </div>
                <div className="col-lg-12 mb-3">
                    <div className="d-flex flex-row ">
                        <img src={event.image} alt={"NEWS" + event.ID} className="img-fluid col-3"/>
                        <div className="px-2 flex-wrap col-7">
                            <p style={{lineHeight: "3em", textAlign: 'justify'}}>{event.story}</p>
                            <p><strong>HOST: </strong>{event.host}</p>
                            <p><strong>MODERATOR:</strong>{event.moderators}</p>
                            <strong>FEATURED PANELISTS:</strong>
                            {
                                event.featured.map((name, i) => {
                                    return (
                                        <p key={i}>{i + 1}. {name}</p>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <strong>LOCATION</strong>
                            <p>{event.medium}</p>
                            <strong>ADDRESS</strong>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-around align-items-center col-2 py-3"
                     style={{cursor: "pointer"}}>
                    <p className={styles.boldText}>Register here</p>
                    <div className={styles.roundBorder2}>
                        <FontAwesomeIcon icon={faArrowRight} size={"1x"} color="#000000"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default SingleNews;