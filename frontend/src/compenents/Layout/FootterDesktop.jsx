const FooterDesktop = () => {
    return (
        <>
            <div
                style={{
                    alignSelf: "stretch",
                    flex: "1",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "40px 144px",
                    textAlign: "left",
                    fontSize: "15px",
                    color: "#161c2d",
                    fontFamily: "Gilroy",
                }}
            >
                <div
                    style={{
                        width: "262px",
                        position: "relative",
                        height: "205px",
                        overflow: "hidden",
                        flexShrink: "0",
                        fontSize: "16px",
                        color: "#000",
                        fontFamily: "Poppins",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            bottom: "0px",
                            left: "0px",
                            width: "142.5px",
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
                    <div
                        style={{
                            position: "absolute",
                            top: "69px",
                            left: "0.49px",
                            lineHeight: "120%",
                            textTransform: "capitalize",
                            fontWeight: "500",
                            display: "inline-block",
                            width: "262px",
                            height: "82px",
                            opacity: "0.7",
                        }}
                    >
                        votre partenaire de confiance en matière d’équipements
                        de protection individuelle (EPI)
                    </div>
                    <img
                        style={{
                            position: "absolute",
                            top: "0px",
                            left: "0.49px",
                            width: "auto",
                            height: "70px",
                            objectFit: "cover",
                        }}
                        alt=""
                        src="/logo.svg"
                    />
                </div>
                <div
                    style={{
                        width: "154px",
                        position: "relative",
                        height: "206px",
                        overflow: "hidden",
                        flexShrink: "0",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "63.05%",
                            top: "calc(50% - 80.5px)",
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
                            height: "57.77%",
                            width: "100.65%",
                            top: "33.25%",
                            left: "-0.32%",
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
                        width: "151px",
                        position: "relative",
                        height: "207px",
                        overflow: "hidden",
                        flexShrink: "0",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "31.52%",
                            top: "calc(50% - 80.5px)",
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
                            height: "57.49%",
                            width: "133.77%",
                            top: "33.33%",
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

export default FooterDesktop;
