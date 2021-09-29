import React from 'react';
import styles from "../styles/Home.module.css";
import {HeaderBar} from "../components/Embeds";
import Footer from "../components/footer";

const IdeaForm = () => {
    const [shown, setShown] = React.useState(false);

    const toggleFooter = () => {
      setShown(!shown);
    }
    const submittingForm =(e)=>{
        window.alert("Here")
        console.log(e.target.value);return
    }
    return (
        <div className={styles.ideaPage} style={{}}>
            <HeaderBar color="#4D9CFE"
                       close={shown}
                       onToggle={toggleFooter}/>
            {
                shown && <div className="w-100 h-100">
                    <Footer />
                </div>
            }
            <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="col-lg-7 col-sm-12">
                    <h1 className="fw-bolder">Have an Idea</h1>
                    <p className="my-5">
                        Would you like help translating your academic discovery into products
                        and services that benefit society? If so, please submit your idea here
                        and a member of the OCR Business Development team will be in touch with you soon.
                        ***Please note: we only accept submissions from members of the Yale
                        community (faculty, staff, students)***
                    </p>
                </div>
                <form className="col-lg-9 col-sm-12" style={{
                    backgroundColor: "#F3F3F3",
                    paddingTop: "7em", paddingBottom: "5em", paddingLeft: "10em",
                    paddingRight: "10em", marginBottom: "5em"
                }}
                      onSubmit={submittingForm}
                >
                    <input placeholder="Name"
                           required
                           className="w-100 border-1 p-3 mb-5" style={{borderRadius: 5}}
                    />
                    <input placeholder="Title"
                           required
                           className="w-100 border-1 p-3 mb-5" style={{borderRadius: 5}}
                    />
                    <div className="d-flex flex-row w-100 border-1 mb-5">
                        <input placeholder="Email"
                               required
                               type="email"
                               className="w-50 border-1 p-3 " style={{borderRadius: 5}}
                        />
                        <input placeholder="Confirm Email"
                               required
                               type="email"
                               className="w-50 border-1 p-3" style={{borderRadius: 5, marginLeft: 5}}
                        />
                    </div>
                    <input placeholder="Phone"
                           required
                           className="w-100 border-1 p-3 mb-5"
                           type="number"
                           style={{borderRadius: 5}}
                    />
                    <input placeholder="Name of your idea"
                           required
                           className="w-100 border-1 p-3 mb-5"
                           style={{borderRadius: 5}}
                    />
                    <input placeholder="Describe your idea"
                           required
                           className="w-100 border-1 p-3 mb-5"
                           type="textarea"
                           cols={5}
                           rows={5}
                           style={{borderRadius: 5}}
                    />
                    <small>Supporting Document</small>

                    <input placeholder="Describe your idea"
                           className="w-100 border p-3"
                           type="file"
                           min={1} max={1}
                           max-file-size="8000000"
                           accept=".doc, .docx, .xml, application/msword, .odt, .pdf"
                           style={{borderRadius: 5}}/>
                    <small className="mb-3">
                        One file only.<br/>
                        8 MB limit.<br/>
                        Allowed types: odf, pdf, doc, docx, ppt, pptx, xls, xlsx, x.
                    </small>
                    <div className="mt-3">
                        <input type="submit"
                               className="btn btn-primary"
                               placeholder="Submit"/>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default IdeaForm;