import React from 'react';
import styles from "../styles/Home.module.css";
import {HeaderBar, NewsComponent} from "../components/Embeds";
import Footer from "../components/footer";
import {dummyNews} from "../components/dummyData";

const News = () => {
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
            <div
                className="d-flex justify-content-center col-lg-9 col-sm-12 align-items-center flex-column align-self-center">
                <div className="col-lg-7 col-sm-12 my-4"><h1 className="fw-bolder">News</h1></div>
                <div className="col-lg-12 mb-3">
                    <NewsComponent news={dummyNews} />
                </div>


            </div>
            <Footer/>
        </div>
    );
}

export default News;