import React from 'react';
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import {EventsComponent, HeaderBar} from "../components/Embeds";
import Footer from "../components/footer";
import {dummyEvents} from "../components/dummyData";

const Events = () => {
    const [footer, setShowFooter] = React.useState(false);

    const toggleFooter = () => {
        setShowFooter(!footer);
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
                <div className="col-lg-7 col-sm-12 my-4"><h1 className="fw-bolder">OCR Events</h1></div>
                <div className="col-lg-12 mb-3">
                    <h3><strong>Stay Tuned for More on Upcoming Fall Events</strong></h3>
                    <div>
                        <EventsComponent events={dummyEvents} />
                    </div>
                </div>


            </div>
            <Footer/>
        </div>
    );
}

export default Events;