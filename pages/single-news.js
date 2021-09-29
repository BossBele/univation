import React from 'react';
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import {HeaderBar, NewsComponent} from "../components/Embeds";
import Footer from "../components/footer";
import {dummyNews} from "../components/dummyData";

const SingleNews = () => {
    const [footer, setShowFooter] = React.useState(false);

    const toggleFooter = () => {
        setShowFooter(!footer);
    }

    let news = dummyNews[0];
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
            <div className="d-flex justify-content-center col-10 align-items-center flex-column align-self-center">
                <div className="my-4">
                    <h3 className="fw-bolder text-danger">{news.channel}</h3>
                    <h1 className="fw-bolder">{news.headline}</h1>
                    <span className="fw-bold">{news.date}</span>
                </div>
                <div className="col-lg-9 mb-3">
                    <div className="d-flex flex-row ">
                        <img src={news.image} alt={"NEWS" + news.ID} className="img-fluid "/>
                        <div className="px-2 flex-wrap">
                            <p style={{lineHeight: "3em", textAlign: 'justify'}}>{news.story}</p>
                            <h3 className="fw-bolder text-decoration-underline" style={{color: "#003D77"}}>APPLY HERE</h3>
                            <h3 className="fw-bolder text-decoration-underline my-3" style={{color: "#003D77"}}>SCHEDULE INTERVIEW HERE</h3>
                            <h3 className="fw-bolder text-decoration-underline" style={{color: "#003D77"}}>VIDEO PITCH SELECTION</h3>
                        </div>
                    </div>
                </div>


            </div>
            <Footer/>
        </div>
    );
}

export default SingleNews;