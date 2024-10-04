const FooterPhone = () => {
    return (
        <>
            <div
                style={{
                    alignSelf: "stretch",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px",
                    gap: "16px",
                    textAlign: "left",
                    fontSize: "15px",
                    color: "#161c2d",
                    fontFamily: "Gilroy",
                }}
            >
                <div
                    style={{
                        alignSelf: "stretch",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "16px",
                        fontSize: "16px",
                        color: "#000",
                        fontFamily: "Poppins",
                    }}
                >
                    <img
                        style={{
                            width: "auto",
                            position: "relative",
                            height: "70px",
                            objectFit: "cover",
                        }}
                        alt=""
                        src="/logo.svg"
                    />
                    <div
                        style={{
                            width: "262px",
                            position: "relative",
                            lineHeight: "120%",
                            textTransform: "capitalize",
                            fontWeight: "500",
                            display: "inline-block",
                            height: "82px",
                            flexShrink: "0",
                            opacity: "0.7",
                        }}
                    >
                        votre partenaire de confiance en matière d’équipements
                        de protection individuelle (EPI)
                    </div>
                    <div
                        style={{
                            width: "142.5px",
                            position: "relative",
                            height: "19px",
                        }}
                    >
                        <img
                            style={{
                                position: "absolute",
                                bottom: "1px",
                                left: "0px",
                                width: "17.1px",
                                height: "15px",
                            }}
                            alt=""
                            src="/logo-twitter.svg"
                        />
                        <img
                            style={{
                                position: "absolute",
                                bottom: "0px",
                                left: "40.15px",
                                width: "19.1px",
                                height: "19px",
                            }}
                            alt=""
                            src="/logo-facebook.svg"
                        />
                        <img
                            style={{
                                position: "absolute",
                                bottom: "0px",
                                left: "82.31px",
                                width: "18.1px",
                                height: "18px",
                                objectFit: "cover",
                            }}
                            alt=""
                            src="/logo-instagram.svg"
                        />
                        <img
                            style={{
                                position: "absolute",
                                bottom: "0px",
                                left: "124.47px",
                                width: "18.1px",
                                height: "18px",
                                objectFit: "cover",
                            }}
                            alt=""
                            src="/logo-linkedin.svg"
                        />
                    </div>
                </div>
                <div
                    style={{
                        width: "180px",
                        position: "relative",
                        height: "201px",
                        overflow: "hidden",
                        flexShrink: "0",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "63.06%",
                            top: "calc(50% - 53.65px)",
                            left: "0%",
                            letterSpacing: "-0.1px",
                            lineHeight: "26px",
                            display: "inline-block",
                            opacity: "0.7",
                            mixBlendMode: "normal",
                        }}
                    >
                        Company
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            height: "68.06%",
                            width: "133.33%",
                            top: "39.73%",
                            left: "0%",
                            fontSize: "17px",
                            letterSpacing: "-0.2px",
                            lineHeight: "40px",
                            fontFamily: "Poppins",
                            display: "inline-block",
                        }}
                    >
                        <p style={{ margin: "0" }}>About us</p>
                        <p style={{ margin: "0" }}>Contact us</p>
                        <p style={{ margin: "0" }}>Careers</p>
                    </div>
                </div>
                <div
                    style={{
                        width: "180px",
                        position: "relative",
                        height: "207px",
                        overflow: "hidden",
                        flexShrink: "0",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "31.5%",
                            top: "calc(50% - 82.5px)",
                            left: "0%",
                            letterSpacing: "-0.1px",
                            lineHeight: "26px",
                            display: "inline-block",
                            opacity: "0.7",
                            mixBlendMode: "normal",
                        }}
                    >
                        Legal
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            height: "72.27%",
                            width: "133.56%",
                            top: "27.71%",
                            left: "0%",
                            fontSize: "17px",
                            letterSpacing: "-0.2px",
                            lineHeight: "40px",
                            fontFamily: "Poppins",
                            display: "inline-block",
                        }}
                    >
                        <p style={{ margin: "0" }}>Privacy Policy</p>
                        <p style={{ margin: "0" }}>{`Terms & Conditions`}</p>
                        <p style={{ margin: "0" }}>Return Policy</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterPhone;
