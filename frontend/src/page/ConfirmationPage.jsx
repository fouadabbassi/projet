import { useEffect, useState } from "react";
import FooterPhone from "../compenents/Layout/FootterPhone";
import FooterTablete from "../compenents/Layout/FootterTablete";
import FooterDesktop from "../compenents/Layout/FootterDesktop";

const ConfirmationPage = () => {
    const [width, setWidth] = useState(window.innerWidth);

useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // تنظيف المستمع على التفكيك
    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);

    if (width <= 640) {
        // الهاتف
        return (
            <>
                <div
                    style={{
                        width: "100%",
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "15.48px",
                        color: "#000",
                        fontFamily: "Poppins",
                        top: "55px",
                    }}
                >
                    <div
                        style={{
                            flex: "1",
                            backgroundColor: "#fff",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/**section one */}
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                height: "221px",
                            }}
                        >
                            <img
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    top: "0px",
                                    right: "0px",
                                    left: "0px",
                                    maxWidth: "100%",
                                    overflow: "hidden",
                                    height: "230px",
                                    objectFit: "cover",
                                }}
                                alt=""
                                src="/confirmepg1.jpg"
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "178px",
                                    left: "calc(50% - 88.82px)",
                                    fontWeight: "500",
                                    display: "inline-block",
                                    width: "178.5px",
                                    height: "22px",
                                    fontSize: "18px",
                                }}
                            >
                                Demande une devis
                            </div>
                        </div>
                        {/**bootstrap responsive table for fetch produits */}
                        <div
                            style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "left",
                                fontSize: "24px",
                            }}
                        >
                            <FooterPhone />
                        </div>
                    </div>
                </div>
            </>
        );
    } else if (width <= 992) {
        // التابلت
        return (
            <>
                <div
                    style={{
                        width: "100%",
                        position: "relative",
                        backgroundColor: "#fff",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        textAlign: "center",
                        fontSize: "32px",
                        color: "#000",
                        fontFamily: "Poppins",
                    }}
                >
                    {/**sectionOne */}
                    <div
                        id="nav"
                        style={{
                            alignSelf: "stretch",
                            position: "relative",
                            height: "346px",
                            textAlign: "center",
                        }}
                    >
                        <img
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: "0px",
                                right: "0px",
                                left: "0px",
                                maxWidth: "100%",
                                overflow: "hidden",
                                height: "355px",
                                objectFit: "cover",
                            }}
                            alt=""
                            src="/confirmepg2.jpg"
                        />
                        <div
                            style={{
                                position: "absolute",
                                width: "calc(100% - 385px)",
                                top: "253px",
                                left: "200px",
                                fontWeight: "500",
                                display: "inline-block",
                                height: "60px",
                            }}
                        >
                            Demande une devis
                        </div>
                    </div>
                    {/**autre sections */}
                    <div
                        style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "left",
                            fontSize: "24px",
                        }}
                    >
                        <FooterTablete />
                    </div>
                </div>
            </>
        );
    } else {
        // الحاسوب
        return (
            <>
                <div
                    style={{
                        width: "100%",
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "48px",
                        color: "#000",
                        fontFamily: "Poppins",
                    }}
                >
                    <div
                        style={{
                            flex: "1",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#fff",
                        }}
                    >
                        {/**sectionOne */}
                        <div
                            id="nav"
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: "0px",
                                right: "0px",
                                left: "0px",
                                height: "346px",
                                textAlign: "center",
                            }}
                        >
                            <img
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    top: "0px",
                                    right: "0px",
                                    left: "0px",
                                    maxWidth: "100%",
                                    overflow: "hidden",
                                    height: "350px",
                                    objectFit: "cover",
                                }}
                                alt=""
                                src="/confirmepg3.jpg"
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 403.5px)",
                                    top: "262.49px",
                                    left: "202px",
                                    fontWeight: "500",
                                    display: "inline-block",
                                    height: "72px",
                                }}
                            >
                                Demande une devis
                            </div>
                        </div>
                        {/**autre sections */}
                        <div
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: "346px",
                                right: "0px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "24px",
                            }}
                        >
                            <FooterDesktop />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};
export default ConfirmationPage;
