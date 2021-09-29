import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import PropTypes from "prop-types";

export const HeaderBar = ({color, onToggle, close}) => (
    <div className="d-flex flex-row justify-content-between align-items-center p-4">
        <Link href="/">
            <h1 style={{cursor: "pointer", color: color}}>Hubs Connect | Tanzania</h1>
        </Link>
        <div onClick={() => onToggle()} style={{cursor: "pointer"}}>
            {
                close ?
                    <FontAwesomeIcon icon={faWindowClose}
                                     size={"2x"}
                                     color={"red"}
                    /> :
                    <FontAwesomeIcon icon={faBars}
                                     size={"2x"}
                                     color={color}
                    />
            }

        </div>
    </div>
)

HeaderBar.propTypes ={
    close: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired
}

export const ReportsComponent = ({reports}) => (
    <div className="col-lg-12 col-sm-12 d-flex flex-row justify-content-start flex-wrap" style={{marginBottom: "5em"}}>
        {
            reports.map((rep, index) => {
                return (
                    <div key={index} className="col-sm-6 col-lg-3">
                        <img src={rep.photo} alt={"REPORT " + index} className="img-fluid"/>
                        <p className={styles.reportsTitle}>{rep.title}</p>
                    </div>
                )
            })
        }
    </div>
)
ReportsComponent.propTypes = {
    reports: PropTypes.array.isRequired
}

export const NewsComponent = ({news}) => (
    <div className="col-lg-12 col-sm-12 d-flex flex-column justify-content-start flex-wrap" style={{marginBottom: "5em"}}>
        {
            news.map((row, index) => {
                return (
                    <div key={index} className="my-4">
                        <p className={styles.reportsTitle}>{row.headline}</p>
                        <p className="">{row.date} &nbsp;&nbsp;|&nbsp;&nbsp;<span className="text-danger">{row.channel}</span></p>
                        <Link href="/single-news">
                            <button className="btn btn-primary">Read story</button>
                        </Link>
                    </div>
                )
            })
        }
    </div>
)

NewsComponent.propTypes = {
    news: PropTypes.array.isRequired
}


export const EventsComponent = ({events}) => (
    <div className="col-lg-12 col-sm-12 d-flex flex-row justify-content-start flex-wrap" style={{marginBottom: "5em"}}>
        {
            events.map((event, index) => {
                return (
                    <div key={index} className="d-flex flex-row flex-wrap">
                        <div className="col-2 p-3">
                            <span className={styles.eventDate}>{event.date}</span>
                            <img src={event.image} alt={"REPORT " + index} className="img-fluid "/>
                        </div>
                        <div className="col-9 p-3">
                            <div className={styles.eventsSeparator}/>
                            <Link href={"/single-event"}>
                            <p className={styles.reportsTitle}>{event.name}</p>
                            </Link>
                            <p className="fw-bolder">{event.time}</p>
                            <p className="fw-bolder">{event.medium}</p>
                            <p className="">{event.topic}</p>
                            <p className="">{event.topic}</p>
                            <Link href={"/single-event"}>
                                <button className="btn btn-primary text-white">Register</button>
                            </Link>
                        </div>
                    </div>
                )
            })
        }
    </div>
)

EventsComponent.propTypes = {
    events: PropTypes.array.isRequired
}
