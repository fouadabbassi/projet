import { Link } from "react-router-dom";
import ImageCarousel from "../ImageCarosel";

const SectionOneDesktop = () => {
    return (
        <>
            <ImageCarousel />
            {/**image right home landing page */}
            <img
                style={{
                    position: "absolute",
                    top: "139px",
                    right: "21px",
                    borderRadius: "0px 100px 0px 150px",
                    width: "448px",
                    height: "293px",
                    objectFit: "fill",
                }}
                alt=""
                src="/rectangle-42@2x.png"
            />

            {/**text home landing page */}

            <div
                style={{
                    position: "absolute",
                    width: "calc(100% - 522px)",
                    top: "170px",
                    right: "480px",
                    left: "42px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: "10px",
                    boxSizing: "border-box",
                    gap: "24px",
                    fontSize: "48px",
                    color: "#4e4e69",
                    fontFamily: "Radley",
                }}
            >
                <div
                    style={{
                        alignSelf: "stretch",
                        position: "relative",
                        lineHeight: "120%",
                        textTransform: "capitalize",
                        filter: "drop-shadow(0.5px 0.5px 5px #000)",
                    }}
                >
                    <span>{`ISTAS `}</span>
                    <span
                        style={{
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
                        fontSize: "24px",
                        lineHeight: "120%",
                        textTransform: "capitalize",
                        color: "#000",
                    }}
                >
                    votre partenaire de confiance en matière d’équipements de
                    protection individuelle (EPI)
                </div>
                <Link to="/login">
                    <button id="bootoncss">login</button>
                </Link>
            </div>
        </>
    );
}
export default SectionOneDesktop;
