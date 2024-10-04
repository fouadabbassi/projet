import "./loginCss.css" ;
import SectionOneDesktop from '../compenents/LandingPage/SectionOneDesktop';
import SectionOneTablete from '../compenents/LandingPage/SectionOneTablete';
import SectionOnePhone from '../compenents/LandingPage/SectionOnePhone';
import { Link } from 'react-router-dom';
import AboitUsPhone from '../compenents/LandingPage/AboitUsPhone';
import ContactPhone from '../compenents/Layout/ContactPhone';
import CardDesktop from '../compenents/CartProduitDesktop';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '../redux/productAction';
import CardTablete from '../compenents/CartProduitTablete';
import CardPhone from '../compenents/CartProduitPhone';
import AboitUsDesktop from '../compenents/LandingPage/AboitUsDesktop';
import { useEffect, useState } from "react";
import AboitUsTablete from "../compenents/LandingPage/AboitUsTablete";
import FooterPhone from "../compenents/Layout/FootterPhone";
import ValeurPhone from "../compenents/Layout/ValeurPhone";
import ContactTablete from "../compenents/Layout/ContactTablete";
import ValeurTablete from "../compenents/Layout/ValeurTablete";
import FooterTablete from "../compenents/Layout/FootterTablete";
import ContactDesktop from "../compenents/Layout/ContactDesktop";
import ValeurDesktop from "../compenents/Layout/ValeurDesktop";
import FooterDesktop from "../compenents/Layout/FootterDesktop";

const Landing = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.product.products)
useEffect(() => {
        dispatch(fetchProductsByCategory(1 , 1));
}, [ dispatch]);


    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // تنظيف المستمع على التفكيك
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (width <= 640) {
        // الهاتف
        return (
            <>
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        top: "55px",
                        right: "0px",
                        left: "0px",
                        backgroundColor: "#e7e9f1",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <SectionOnePhone />
                    {/**section produits */}
                    <div
                        style={{
                            alignSelf: "stretch",
                            background:
                                "linear-gradient(180deg, rgba(64, 49, 112, 0.3), rgba(238, 144, 47, 0.6))",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "left",
                            fontSize: "20px",
                            color: "#3a3a3a",
                            fontFamily: "Poppins",
                        }}
                    >
                        <b
                            style={{
                                position: "relative",
                                lineHeight: "120%",
                                alignSelf: "stretch",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "40px",
                                flexShrink: "0",
                            }}
                        >
                            Produits
                        </b>
                        <div
                            style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "47px 0px",
                                fontSize: "11.87px",
                            }}
                        >
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                    alignContent: "center",
                                    padding: "8px",
                                    gap: "32px 16px",
                                }}
                            >
                                {products.map((produit, index) =>
                                    index < 6 ? (
                                        <CardPhone
                                            key={produit.id}
                                            produit={produit}
                                        />
                                    ) : undefined
                                )}
                            </div>
                        </div>
                        <Link to="/produits">
                            <div
                                id="about-us"
                                style={{
                                    width: "161px",
                                    position: "relative",
                                    height: "50px",
                                    fontSize: "14px",
                                    color: "#001c72",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "0px",
                                        right: "0px",
                                        borderRadius: "20px 20px 0px 0px",
                                        background:
                                            "linear-gradient(180deg, #c7cee3, #d4d9f1 28.5%, #f1cf70 86.5%)",
                                        border: "1px solid #b88e2f",
                                        boxSizing: "border-box",
                                        width: "161px",
                                        height: "50px",
                                        cursor: "pointer",
                                    }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "13.99px",
                                        left: "calc(50% - 39.5px)",
                                        lineHeight: "150%",
                                        fontWeight: "600",
                                        display: "inline-block",
                                        width: "79px",
                                    }}
                                >
                                    Show More
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div
                        style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "24px",
                            color: "#000",
                            fontFamily: "Rubik",
                        }}
                    >
                        {/**aboit */}
                        <AboitUsPhone />
                        {/**contact */}
                        <ContactPhone />
                        {/**nos valeur */}
                        <ValeurPhone />
                        {/**footter */}
                        <FooterPhone />
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
                        height: "2724px",
                        textAlign: "left",
                        fontSize: "48px",
                        color: "#4e4e69",
                        fontFamily: "Radley",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            top: "0px",
                            right: "0px",
                            left: "0px",
                            backgroundColor: "#e7e9f1",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <SectionOneTablete />
                        <div
                            style={{
                                width: "100%",
                                margin: "0",
                                position: "absolute",
                                top: "650px",
                                right: "0px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: "1",
                                fontSize: "32px",
                                color: "#3a3a3a",
                                fontFamily: "Poppins",
                            }}
                        >
                            {/**product */}
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    background:
                                        "linear-gradient(180deg, rgba(64, 49, 112, 0.3), rgba(238, 144, 47, 0.6))",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: "16px",
                                }}
                            >
                                <b
                                    style={{
                                        width: "216px",
                                        position: "relative",
                                        lineHeight: "120%",
                                        display: "flex",
                                        textAlign: "center",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "72px",
                                        flexShrink: "0",
                                    }}
                                >
                                    Produits
                                </b>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                        alignContent: "center",
                                        padding: "16px",
                                        gap: "32px 16px",
                                        fontSize: "15.3px",
                                    }}
                                >
                                    {products.map((produit, index) =>
                                        index < 6 ? (
                                            <CardTablete
                                                key={produit.id}
                                                produit={produit}
                                            />
                                        ) : undefined
                                    )}
                                </div>
                                <Link to={"/produits"}>
                                    <div
                                        style={{
                                            width: "186px",
                                            position: "relative",
                                            height: "60px",
                                            fontSize: "16px",
                                            color: "#001c72",
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "0px",
                                                left: "calc(50% - 93px)",
                                                borderRadius:
                                                    "20px 20px 0px 0px",
                                                background:
                                                    "linear-gradient(180deg, #c7cee3, #d4d9f1 28.5%, #f1cf70 86.5%)",
                                                border: "1px solid #b88e2f",
                                                boxSizing: "border-box",
                                                width: "186px",
                                                height: "60px",
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "14.21px",
                                                left: "calc(50% - 48.5px)",
                                                lineHeight: "150%",
                                                fontWeight: "600",
                                                display: "inline-block",
                                                width: "98px",
                                                height: "31px",
                                            }}
                                        >
                                            Show More
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {/**autre section */}
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    fontSize: "24px",
                                    color: "#000",
                                    fontFamily: "Rubik",
                                }}
                            >
                                {/**aboit */}
                                <AboitUsTablete />
                                {/**contact */}
                                <ContactTablete />
                                {/**nos valeur */}
                                <ValeurTablete />
                                {/**footer */}
                                <FooterTablete />
                            </div>
                        </div>
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
                        height: "3893px",
                        overflow: "hidden",
                        textAlign: "left",
                        fontSize: "32px",
                        color: "#000",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            top: "0px",
                            right: "0px",
                            left: "0px",
                            backgroundColor: "#e7e9f1",
                            height: "3893px",
                            overflow: "hidden",
                        }}
                    >
                        <SectionOneDesktop />
                        {/**section produit */}
                        <div
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: "650px",
                                right: "0px",
                                left: "0px",
                                height: "1361.4px",
                                fontSize: "24px",
                                color: "#3a3a3a",
                                fontFamily: "Poppins",
                            }}
                        >
                            {/**product logic here */}
                            <div
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    top: "0px",
                                    right: "0px",
                                    left: "0px",
                                    background:
                                        "linear-gradient(180deg, rgba(64, 49, 112, 0.3), rgba(238, 144, 47, 0.6))",
                                    height: "1361px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                    alignContent: "center",
                                    boxSizing: "border-box",
                                    gap: "32px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                        alignContent: "center",
                                        padding: "16px 24px",
                                        boxSizing: "border-box",
                                        gap: "32px",
                                        textAlign: "left",
                                        fontSize: "24px",
                                        color: "#3a3a3a",
                                        fontFamily: "Poppins",
                                    }}
                                >
                                    {products.map((produit, index) =>
                                        index < 6 ? (
                                            <CardDesktop
                                                key={produit.id}
                                                produit={produit}
                                            />
                                        ) : undefined
                                    )}
                                </div>
                            </div>
                            {/**booton show more */}
                            <Link to={"/produits"}>
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "1301.35px",
                                        left: "calc(50% - 93px)",
                                        width: "186px",
                                        height: "60px",
                                        fontSize: "16px",
                                        color: "#001c72",
                                        cursor: "pointer",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "0px",
                                            left: "calc(50% - 93px)",
                                            borderRadius: "20px 20px 0px 0px",
                                            background:
                                                "linear-gradient(180deg, #c7cee3, #d4d9f1 28.5%, #f1cf70 86.5%)",
                                            border: "1px solid #b88e2f",
                                            boxSizing: "border-box",
                                            width: "186px",
                                            height: "60px",
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "17.65px",
                                            left: "calc(50% - 47px)",
                                            lineHeight: "150%",
                                            fontWeight: "600",
                                            display: "inline-block",
                                            width: "93px",
                                        }}
                                    >
                                        Show More
                                    </div>
                                </div>
                            </Link>

                            <b
                                style={{
                                    position: "absolute",
                                    top: "69px",
                                    left: "calc(50% - 108px)",
                                    fontSize: "40px",
                                    lineHeight: "120%",
                                    display: "inline-block",
                                    textAlign: "center",
                                    width: "216px",
                                    height: "60px",
                                }}
                            >
                                Produits
                            </b>
                        </div>

                        <div
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: "2010px",
                                right: "0px",
                                left: "0px",
                                height: "1919px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                            }}
                        >
                            {/**aboit */}
                            <AboitUsDesktop />
                            {/**contact */}
                            <ContactDesktop />
                            {/**nos valeur */}
                            <ValeurDesktop />
                            {/**footer */}
                            <FooterDesktop />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Landing;
