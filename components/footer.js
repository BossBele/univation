import React, {Component} from 'react';
import styles from "../styles/Home.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
               <div className="d-flex w-100 flex-row justify-content-between px-5 text-white">
                   <div className="col-2">
                       <span>WHO WE PARTNER WITH</span>
                       <div style={{backgroundColor: "#4D9CFE", height: 2}} className="col-12" />
                       <div>
                           <p className={styles.partners}>Faculty</p>
                           <p className={styles.partners}>Industry</p>
                           <p className={styles.partners}>Student</p>
                       </div>
                   </div>

                   <div className="col-7 px-2">
                       <span>WHAT WE DO</span>
                       <div style={{backgroundColor: "#4D9CFE", height: 2}} className="col-12" />
                       <div className="col-12 d-flex flex-row">
                           <div className="d-flex flex-column col-6">
                               <span className={styles.weDo}>All Faculty Resources</span>
                               <span className={styles.weDo}>All Industry Resources</span>
                               <span className={styles.weDo}>All Student Resources</span>
                               <span className={styles.weDo}>Available Technologies</span>
                               <span className={styles.weDo}>COVID-19 Response</span>
                               <span className={styles.weDo}>Explore our Ventures</span>
                               <span className={styles.weDo}>Frequently Asked Questions</span>
                           </div>
                           <div className="d-flex flex-column">
                               <span className={styles.weDo}>Funding Opportunities</span>
                               <span className={styles.weDo}>License a Biological Tool</span>
                               <span className={styles.weDo}>OCR Video Collection</span>
                               <span className={styles.weDo}>See our Pipelines</span>
                               <span className={styles.weDo}>Spotlights</span>
                               <span className={styles.weDo}>The OCR Report</span>
                               <span className={styles.weDo}>View our Patents</span>
                           </div>
                       </div>
                   </div>

                   <div className="col-3">
                       <span>WHO WE ARE</span>
                       <div style={{backgroundColor: "#4D9CFE", height: 2}} className="col-12" />
                       <div className="d-flex flex-column">
                           <span className={styles.weDo}>About</span>
                           <span className={styles.weDo}>Our Process</span>
                           <span className={styles.weDo}>Meet Our Team</span>
                           <span className={styles.weDo}>Entrepreneurs-in-Residence (EIRs)</span>
                           <span className={styles.weDo}>Blavatnik Fellows</span>
                           <span className={styles.weDo}>News</span>
                           <span className={styles.weDo}>Events</span>
                           <span className={styles.weDo}>Contact Us</span>
                           <span className={styles.weDo}>Yale University</span>
                           <span className={styles.weDo}>Accessibility</span>
                           <span className={styles.weDo}>Privacy Policy</span>
                       </div>
                   </div>

               </div>

                <div className="d-flex w-100 flex-row justify-content-between px-5 text-white mt-3">
                    <div className="col-2"/>
                    <div className="col-7 px-2">
                        <h3>Sign up for our newsletter, The OCR Report.</h3>
                        <div>Learn about the latest Yale technologies, startups and opportunities by signing up for our eNews.</div>
                        <div>
                            <button className={styles.btnRegister}>Sign Up!
                            <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.regIcon} />
                            </button>
                        </div>
                    </div>
                    <div className="col-3">
                        <span>CONNECT WITH US</span>
                        <div style={{backgroundColor: "#4D9CFE", height: 2}} className="col-12" />
                        <div className="d-flex flex-row mt-3">
                            <Link href="https://facebook.com/"
                                  as="Facebook"
                                  passHref={true}>
                                <FontAwesomeIcon icon={['fab', 'facebook']} className={styles.fabIcons} size="2x" />
                            </Link>
                            <Link href="https://twitter.com/"
                                  as="Twitter"
                                  passHref={true}>
                             <FontAwesomeIcon icon={['fab', 'twitter']} className={styles.fabIcons} size="2x"  />
                            </Link>
                            <Link href="https://linkedin.com/"
                                  as="Linkedin"
                                  passHref={true}>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} className={styles.fabIcons} size="2x"  />
                            </Link>
                            <Link href="https://youtube.com/"
                                  as="Youtube"
                                  passHref={true}>
                            <FontAwesomeIcon icon={['fab', 'youtube']} className={styles.fabIcons} size="2x"  />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;