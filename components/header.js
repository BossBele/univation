import React from 'react';
import styles from '../styles/Home.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {HeaderBar} from "./Embeds";
import Footer from "./footer";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 1
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shown: false}
    }

    showFooter =()=>{
        this.setState({shown: !this.state.shown});
    }

    render() {
        return (
            <div className={styles.imageBackground}>
                <HeaderBar color="#FFFFFF"
                           close={this.state.shown}
                           onToggle={this.showFooter} />
                {
                    this.state.shown && <div className="w-100 h-100">
                        <Footer />
                    </div>
                }
                <div className="mx-lg-4 mt-3">
                    <h1 className="text-white">Improving the health, welfare <br/>and prosperity of the global<br/>community.
                    </h1>
                </div>
                <div style={{height: 20}}/>
                <div className="mx-4 mt-5">
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={this.props.deviceType !== "mobile"}
                        autoPlaySpeed={7000}
                        keyBoardControl={true}
                        customTransition="transform 500ms ease-in-out"
                        transitionDuration={500}
                        className="mx-lg-3"
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {[...Array(7)].map((x, i) => {
                            return (
                                <div key={i} className={styles.carouselCard}>
                                    <p className={styles.cardInfo1}>Item {i + 1}</p>
                                    <p className={styles.cardInfo2}>Latest site info</p>
                                    <p className={styles.cardInfo3}>(in period of time)</p>
                                </div>
                            )
                        })}

                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Header;
