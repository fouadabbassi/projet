const FooterTablete = () => {
    return (
        <>
            <div
                style={{
                    alignSelf: "stretch",
                    backgroundColor: "#fff",
                    height: "263px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px",
                    boxSizing: "border-box",
                    gap: "32px",
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
                        width: "141px",
                        position: "relative",
                        height: "186px",
                        overflow: "hidden",
                        flexShrink: "0",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "63.05%",
                            top: "calc(50% - 85.75px)",
                            left: "2.48%",
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
                            height: "58.23%",
                            width: "99.72%",
                            top: "21.1%",
                            left: "0.35%",
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
                        height: "186px",
                        overflow: "hidden",
                        flexShrink: "0",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "31.5%",
                            top: "calc(50% - 83px)",
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
                            height: "63.98%",
                            width: "100%",
                            top: "19.49%",
                            left: "0.28%",
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

export default FooterTablete;
