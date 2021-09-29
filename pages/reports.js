import React from 'react';
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import {HeaderBar, ReportsComponent} from "../components/Embeds";
import Footer from "../components/footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {dummyReports} from "../components/dummyData";

const Reports = () => {
    const [showReports, setShowReports] = React.useState(false);
    const [footer, setShowFooter] = React.useState(false);

    const toggleFooter = () => {
        setShowFooter(!footer);
    }
    const toggleReports = () => {
        setShowReports(!showReports)
    }
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
            <div className="d-flex justify-content-center col-lg-9 col-sm-12 align-items-center flex-column align-self-center">
                <div className="col-lg-7 col-sm-12"><h1 className="fw-bolder">The OCR Report</h1></div>
                <div className="col-lg-12 mb-3">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-column col-lg-7 col-sm-12">
                            <h2 className="fw-bold">The most current report</h2>
                            <p>
                                <Link href="/report"><a>Read the most current version of our OCR Report.</a></Link>
                                &nbsp;Conflict of Interest in the
                                Spotlight!</p>
                            <p>Links to previous editions can be found in the archive below.</p>
                        </div>

                        <div className="d-flex flex-row p-5" style={{backgroundColor: "#F3F3F3"}}>
                            <img src="/small.png"
                                 alt="report"
                                 width={120}
                                 height={40}
                                 className="img-fluid col-3 h-50 mx-2"/>

                            <div>
                                <h2 className="fw-bolder">Sign up to receive The OCR Report monthly</h2>
                                <p>Stay up to date by subscribing to receive <b>The OCR Report</b> in your inbox.</p>
                                <button className="btn btn-primary text-black-50">Sign me up!</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-lg-12 my-4 d-flex flex-row align-items-center p-4"
                     onClick={toggleReports}
                     style={{backgroundColor: "#1F468A", cursor: "pointer"}}>
                    <div className={styles.roundBorder}>
                        <FontAwesomeIcon icon={showReports ? faChevronUp : faChevronDown} size={"1x"} color="#ffffff"/>
                    </div>
                    <span className={styles.reportsToggleTitle}>2021 Reports</span>
                </div>
                {
                    showReports && <ReportsComponent reports={dummyReports}/>
                }

            </div>
            <Footer/>
        </div>
    );
}

export default Reports;