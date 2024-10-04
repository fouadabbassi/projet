import { Link } from "react-router-dom";
import ImageCarouselPhone from "../ImageCaroselPhone";

const SectionOnePhone = () => {
    return (
        <>
            <div
                style={{
                    alignSelf: "stretch",
                    position: "relative",
                    height: "586px",
                }}
            >
                <ImageCarouselPhone />
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        top: "0px",
                        right: "0px",
                        left: "0px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "23px 16px",
                        boxSizing: "border-box",
                    }}
                >
                    {/**text home landing page */}

                    <div
                        style={{
                            fontSize: "48px",
                            color: "#4e4e69",
                            fontFamily: "Radley",
                            width: "358px",
                            height: "295px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "10px",
                            boxSizing: "border-box",
                            gap: "24px",
                        }}
                    >
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                lineHeight: "60%",
                                textTransform: "capitalize",
                                filter: "drop-shadow(0.5px 0.5px 5px #000)",
                            }}
                        >
                            <span>{`ISTAS `}</span>
                            <span
                                style={{
                                    alignSelf: "stretch",
                                    fontSize: "16px",
                                    fontFamily: "Questrial",
                                    color: "#fff",
                                }}
                            >
                                Industrial Supplies Trading and Safety
                            </span>
                        </div>
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                fontSize: "20px",
                                lineHeight: "120%",
                                textTransform: "capitalize",
                                color: "#000",
                            }}
                        >
                            votre partenaire de confiance en matière
                            d’équipements de protection individuelle (EPI)
                        </div>
                        <Link to="/login">
                            <button id="bootoncss" >login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SectionOnePhone;
