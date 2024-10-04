
const AboitUsDesktop = () => {
    return (
        <>
            <div
                id="about-us"
                style={{
                    alignSelf: "stretch",
                    background:
                        "linear-gradient(180deg, rgba(64, 49, 112, 0.3), rgba(238, 144, 47, 0.6))",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "24px",
                    gap: "32px",
                }}
            >
                <div
                    style={{
                        alignSelf: "stretch",
                        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)",
                        borderRadius: "15px",
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "16px",
                        gap: "32px",
                    }}
                >
                    <div
                        style={{
                            alignSelf: "stretch",
                            position: "relative",
                            lineHeight: "120%",
                            textTransform: "capitalize",
                            fontWeight: "600",
                            display: "inline-block",
                            height: "36px",
                            flexShrink: "0",
                        }}
                    >
                        À PROPOS DE ISTAS
                    </div>
                    <div
                        style={{
                            alignSelf: "stretch",
                            position: "relative",
                            fontSize: "24px",
                            lineHeight: "120%",
                            textTransform: "capitalize",
                            fontWeight: "500",
                            fontFamily: "Poppins",
                            color: "#000c2f",
                        }}
                    >
                        Depuis 2010, ISTAS est spécialisée dans la distribution
                        d&#39;équipements de protection individuelle (EPI) de
                        haute qualité. Grâce à notre expertise et notre
                        engagement envers la sécurité, nous nous efforçons de
                        fournir à nos clients les meilleurs produits pour
                        assurer leur protection dans différents environnements
                        de travail.
                    </div>
                </div>
                <div
                    style={{
                        alignSelf: "stretch",
                        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)",
                        borderRadius: "15px",
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "16px",
                        gap: "32px",
                    }}
                >
                    <div
                        style={{
                            alignSelf: "stretch",
                            position: "relative",
                            lineHeight: "120%",
                            textTransform: "capitalize",
                            fontWeight: "600",
                            display: "inline-block",
                            height: "42px",
                            flexShrink: "0",
                        }}
                    >
                        NOTRE GAMME DE PRODUITS
                    </div>
                    <div
                        style={{
                            alignSelf: "stretch",
                            position: "relative",
                            fontSize: "24px",
                            lineHeight: "120%",
                            textTransform: "capitalize",
                            fontWeight: "500",
                            fontFamily: "Poppins",
                            textAlign: "left",
                        }}
                    >
                        <ul
                            style={{
                                margin: "0",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                                paddingLeft: "32px",
                            }}
                        >
                            <li style={{ marginBottom: "0px" }}>
                                Protection de la tête : casques, casquettes,
                                cagoules
                            </li>
                            <li style={{ marginBottom: "0px" }}>
                                Protection des yeux et du visage : lunettes de
                                sécurité, écrans faciaux
                            </li>
                            <li style={{ marginBottom: "0px" }}>
                                Protection respiratoire : masques, respirateurs
                            </li>
                            <li style={{ marginBottom: "0px" }}>
                                Protection auditive : bouchons d&#39;oreilles,
                                casques antibruit
                            </li>
                            <li style={{ marginBottom: "0px" }}>
                                Protection des mains : gants de différents
                                matériaux et niveaux de résistance
                            </li>
                            <li>
                                Protection du corps : combinaisons, vêtements de
                                sécurité, gilets réfléchissants
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AboitUsDesktop;
