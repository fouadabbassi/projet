import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../redux/categoryAction";
import { fetchSubcategoriesByCategory } from "../redux/subcategoryAction";
import CardDesktop from "../compenents/CartProduitDesktop";
import { fetchProductsByCategory, fetchProductsBySubcategory } from "../redux/productAction";
import CardTablete from "../compenents/CartProduitTablete";
import CardPhone from "../compenents/CartProduitPhone";
import ValeurPhone from "../compenents/Layout/ValeurPhone";
import FooterPhone from "../compenents/Layout/FootterPhone";
import ValeurTablete from "../compenents/Layout/ValeurTablete";
import FooterTablete from "../compenents/Layout/FootterTablete";
import ValeurDesktop from "../compenents/Layout/ValeurDesktop";
import FooterDesktop from "../compenents/Layout/FootterDesktop";

const ProductPage = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isHovered, setIsHovered] = useState(false);
    const [ChercheWord, setChercheWord] = useState("");
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

    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [arrNembre, setArrNumbers] = useState([]);
    const [categoryId, setCategoryId] = useState(1);
    const [subcategoryId, setSubcategoryId] = useState(0);
    useEffect(() => {
        if (page > 1) {
            setArrNumbers([page - 1, page, page + 1]);
        } else {
            setArrNumbers([1, 2, 3]);
        }
    }, [page]);

    useEffect(() => {
        dispatch(fetchCategory());
        dispatch(fetchSubcategoriesByCategory(categoryId));
        if (subcategoryId === 0) {
        dispatch(fetchProductsByCategory(categoryId, page));
        }else{dispatch(fetchProductsBySubcategory(subcategoryId, page));}
    }, [categoryId,page,subcategoryId,dispatch]);

    const handleSubCat = (catId) => {
        setCategoryId(catId);
        setSubcategoryId(0);
        setPage(1);
    };
    const handleProduit = (SubcatId) => {
        setSubcategoryId(SubcatId);
        setPage(1);
    };
    const Cherche = () => {
        /*dispatch(fetchCherche(ChercheWord))*/
        console.log(ChercheWord);
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };
    const handlePage = (nbr) => {
        setPage(nbr);
    };
    const Products = useSelector((state) => state.product.products);
    const Categorys = useSelector((state) => state.category.categories);
    const Subcategorys = useSelector(
        (state) => state.subcategory.subcategories
    );
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
                                src="/Rec111.png"
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "178px",
                                    left: "calc(50% - 38.82px)",
                                    fontWeight: "500",
                                    display: "inline-block",
                                    width: "78.5px",
                                    height: "22px",
                                    fontSize:"18px",
                                }}
                            >
                                Produits
                            </div>
                        </div>
                        {/**autre section */}
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
                            {/**section categorie */}
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    background:
                                        "linear-gradient(180deg, #e7e9f1, #d8ced3)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    padding: "32px 10px",
                                    gap: "10px",
                                }}
                            >
                                {/**searsh */}
                                <div
                                    style={{
                                        width: "297.8px",
                                        position: "relative",
                                        height: "44.1px",
                                    }}
                                >
                                    {/**logic for searsh */}
                                    <form>
                                        <input
                                            type="text"
                                            id="searsh"
                                            placeholder="chercher par produit"
                                            style={{
                                                position: "absolute",
                                                top: "0px",
                                                left: "0px",
                                                borderRadius: "10px",
                                                backgroundColor: "#fff",
                                                border: "1px solid #9f9f9f",
                                                boxSizing: "border-box",
                                                padding: "10px",
                                                width: "297.8px",
                                                height: "44.1px",
                                            }}
                                            value={ChercheWord}
                                            onChange={(e) => {
                                                setChercheWord(e.target.value);
                                            }}
                                        />
                                        <img
                                            onClick={() => Cherche()}
                                            style={{
                                                position: "absolute",
                                                top: "12.92px",
                                                left: "265.22px",
                                                width: "23px",
                                                height: "18.2px",
                                                overflow: "hidden",
                                            }}
                                            alt=""
                                            src="/akar-icons_search.svg"
                                        />
                                    </form>
                                </div>
                                {/**category est subcategory */}
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "10px 42px",
                                        gap: "10px",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "245px",
                                            position: "relative",
                                            height: "44px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "4px",
                                                left: "4px",
                                                fontWeight: "500",
                                                display: "inline-block",
                                                width: "245px",
                                            }}
                                        >
                                            Categories
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "16px",
                                            color: "rgba(0, 0, 0, 0.75)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                alignSelf: "stretch",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "9px 0px",
                                                gap: "30px",
                                            }}
                                        >
                                            {/**category */}
                                            <div
                                                style={{
                                                    width: "245px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    height: "160px",
                                                    overflow:
                                                        Categorys.length < 5
                                                            ? "hidden"
                                                            : "scroll",
                                                    alignItems: "center",
                                                    justifyContent:
                                                        "flex-start",
                                                }}
                                            >
                                                {Categorys.map((element) => {
                                                    return (
                                                        <div
                                                            onClick={() =>
                                                                handleSubCat(
                                                                    element.id
                                                                )
                                                            }
                                                            key={element.id}
                                                            style={{
                                                                width: "100%",
                                                                backgroundColor:
                                                                    "#fff",
                                                                border: "1px solid rgba(0, 0, 0, 0.5)",
                                                                boxSizing:
                                                                    "border-box",
                                                                height: "32px",
                                                                display: "flex",
                                                                flexDirection:
                                                                    "row",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "flex-start",
                                                                padding:
                                                                    "8px 16px",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    position:
                                                                        "relative",
                                                                }}
                                                            >
                                                                {element.name}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            {/**subcategory */}
                                            <div
                                                style={{
                                                    width: "245px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    height: "160px",
                                                    overflow:
                                                        Subcategorys.length < 5
                                                            ? "hidden"
                                                            : "scroll",
                                                    alignItems: "center",
                                                    justifyContent:
                                                        "flex-start",
                                                }}
                                            >
                                                {Subcategorys.map((element) => {
                                                    return (
                                                        <div
                                                            onClick={() =>
                                                                handleProduit(
                                                                    element.id
                                                                )
                                                            }
                                                            key={element.id}
                                                            style={{
                                                                width: "100%",
                                                                backgroundColor:
                                                                    "rgba(159, 159, 159, 0.5)",
                                                                border: "1px solid rgba(0, 0, 0, 0.5)",
                                                                boxSizing:
                                                                    "border-box",
                                                                height: "32px",
                                                                display: "flex",
                                                                flexDirection:
                                                                    "row",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "flex-start",
                                                                padding:
                                                                    "8px 16px",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    position:
                                                                        "relative",
                                                                }}
                                                            >
                                                                {element.name}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/**section produit */}
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    background:
                                        "linear-gradient(180deg, rgba(64, 49, 112, 0.15), rgba(238, 144, 47, 0.6) 62.3%)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "8.53px",
                                    color: "#3a3a3a",
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
                                        gap: "16px 13.9px",
                                    }}
                                >
                                    {/**cart product *9  */}
                                    {Products.map((produit) => (
                                        <CardPhone
                                            key={produit.id}
                                            produit={produit}
                                        />
                                    ))}
                                </div>
                                {/**pagination */}
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "16px 8px",
                                        gap: "8px",
                                        fontSize: "16.36px",
                                        color: "#000",
                                    }}
                                >
                                    {arrNembre.map((element, index) => {
                                        return (
                                            <div
                                                onClick={() =>
                                                    handlePage(element)
                                                }
                                                key={index}
                                                style={{
                                                    cursor: "pointer",
                                                    width: "50px",
                                                    position: "relative",
                                                    height: "50px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: "0px",
                                                        left: "0px",
                                                        borderRadius: "10px",
                                                        backgroundColor:
                                                            element === page
                                                                ? "rgba(107, 130, 214, 0.9)"
                                                                : "rgba(107, 130, 214, 0.45)",
                                                        width: "50px",
                                                        height: "50px",
                                                    }}
                                                />
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: "15px",
                                                        left: "20px",
                                                    }}
                                                >
                                                    {element}
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        onClick={() => handleNextPage()}
                                        style={{
                                            width: "90px",
                                            position: "relative",
                                            height: "50px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "0px",
                                                left: "0px",
                                                borderRadius: "10px",
                                                backgroundColor: isHovered
                                                    ? "rgba(107, 130, 214, 0.9)"
                                                    : "#f9f1e7",
                                                width: "90px",
                                                height: "50px",
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "15px",
                                                left: "20px",
                                                fontWeight: "300",
                                            }}
                                        >
                                            Next
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ValeurPhone />
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
                                height: "350px",
                                objectFit: "cover",
                            }}
                            alt=""
                            src="/Rec111.png"
                        />
                        <div
                            style={{
                                position: "absolute",
                                width: "calc(100% - 555px)",
                                top: "253px",
                                left: "278px",
                                fontWeight: "500",
                                display: "inline-block",
                                height: "60px",
                            }}
                        >
                            Product
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
                        <div
                            style={{
                                alignSelf: "stretch",
                                background:
                                    "linear-gradient(180deg, #e7e9f1, #d8ced3)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                padding: "32px 10px",
                                gap: "10px",
                            }}
                        >
                            {/*searsh*/}
                            <div
                                style={{
                                    width: "297.8px",
                                    position: "relative",
                                    height: "44.1px",
                                }}
                            >
                                {/**logic for searsh */}
                                <form>
                                    <input
                                        type="text"
                                        id="searsh"
                                        placeholder="chercher par produit"
                                        style={{
                                            position: "absolute",
                                            top: "0px",
                                            left: "0px",
                                            borderRadius: "10px",
                                            backgroundColor: "#fff",
                                            border: "1px solid #9f9f9f",
                                            boxSizing: "border-box",
                                            padding: "10px",
                                            width: "297.8px",
                                            height: "44.1px",
                                        }}
                                        value={ChercheWord}
                                        onChange={(e) => {
                                            setChercheWord(e.target.value);
                                        }}
                                    />
                                    <img
                                        onClick={() => Cherche()}
                                        style={{
                                            position: "absolute",
                                            top: "12.92px",
                                            left: "265.22px",
                                            width: "23px",
                                            height: "18.2px",
                                            overflow: "hidden",
                                        }}
                                        alt=""
                                        src="/akar-icons_search.svg"
                                    />
                                </form>
                            </div>
                            {/**category */}
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    position: "relative",
                                    height: "216px",
                                }}
                            >
                                {/**title category */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        left: "50px",
                                        width: "253px",
                                        height: "44px",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "4px",
                                            left: "4px",
                                            fontWeight: "500",
                                            display: "inline-block",
                                            width: "245px",
                                        }}
                                    >
                                        Categories
                                    </div>
                                </div>
                                {/** logic categorie et subcategory here */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "73.93px",
                                        left: "50px",
                                        width: "580px",
                                        height: "735px",
                                        overflow: "hidden",
                                        fontSize: "16px",
                                        color: "rgba(0, 0, 0, 0.75)",
                                    }}
                                >
                                    {/**category */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "0px",
                                            left: "0px",
                                            width: "245px",
                                            display: "flex",
                                            flexDirection: "column",
                                            height: "160px",
                                            overflow:
                                                Categorys.length < 5
                                                    ? "hidden"
                                                    : "scroll",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                        }}
                                    >
                                        {Categorys.map((element) => {
                                            return (
                                                <div
                                                    onClick={() =>
                                                        handleSubCat(element.id)
                                                    }
                                                    key={element.id}
                                                    style={{
                                                        width: "100%",
                                                        backgroundColor: "#fff",
                                                        border: "1px solid rgba(0, 0, 0, 0.5)",
                                                        boxSizing: "border-box",
                                                        height: "32px",
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "flex-start",
                                                        padding: "8px 16px",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position:
                                                                "relative",
                                                        }}
                                                    >
                                                        {element.name}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {/**subcategory */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "0px",
                                            left: "335px",
                                            width: "245px",
                                            display: "flex",
                                            flexDirection: "column",
                                            height: "160px",
                                            overflow:
                                                Subcategorys.length < 5
                                                    ? "hidden"
                                                    : "scroll",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                        }}
                                    >
                                        {Subcategorys.map((element) => {
                                            return (
                                                <div
                                                    onClick={() =>
                                                        handleProduit(
                                                            element.id
                                                        )
                                                    }
                                                    key={element.id}
                                                    style={{
                                                        width: "100%",
                                                        backgroundColor:
                                                            "rgba(159, 159, 159, 0.5)",
                                                        border: "1px solid rgba(0, 0, 0, 0.5)",
                                                        boxSizing: "border-box",
                                                        height: "32px",
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "flex-start",
                                                        padding: "8px 16px",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position:
                                                                "relative",
                                                        }}
                                                    >
                                                        {element.name}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/**product */}
                        <div
                            style={{
                                alignSelf: "stretch",
                                background:
                                    "linear-gradient(180deg, rgba(64, 49, 112, 0.15), rgba(238, 144, 47, 0.6) 62.3%)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "24px",
                                fontSize: "14.21px",
                                color: "#3a3a3a",
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
                                    padding: "32px",
                                    gap: "32px",
                                }}
                            >
                                {/**cart product *9  */}
                                {Products.map((produit) => (
                                    <CardTablete
                                        key={produit.id}
                                        produit={produit}
                                    />
                                ))}
                            </div>
                            {/**pagination */}
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "24px",
                                    gap: "24px",
                                    fontSize: "20px",
                                }}
                            >
                                {arrNembre.map((element, index) => {
                                    return (
                                        <div
                                            onClick={() => handlePage(element)}
                                            key={index}
                                            style={{
                                                cursor: "pointer",
                                                width: "60px",
                                                position: "relative",
                                                height: "60px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "0px",
                                                    left: "0px",
                                                    borderRadius: "10px",
                                                    backgroundColor:
                                                        element === page
                                                            ? "rgba(107, 130, 214, 0.9)"
                                                            : "rgba(107, 130, 214, 0.45)",
                                                    width: "60px",
                                                    height: "60px",
                                                }}
                                            />
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "15px",
                                                    left: "27px",
                                                }}
                                            >
                                                {element}
                                            </div>
                                        </div>
                                    );
                                })}
                                <div
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    onClick={() => handleNextPage()}
                                    style={{
                                        width: "98px",
                                        position: "relative",
                                        height: "60px",
                                        cursor: "pointer",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "0px",
                                            left: "0px",
                                            borderRadius: "10px",
                                            backgroundColor: isHovered
                                                ? "rgba(107, 130, 214, 0.9)"
                                                : "#f9f1e7",
                                            width: "98px",
                                            height: "60px",
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "15px",
                                            left: "28px",
                                            fontWeight: "300",
                                        }}
                                    >
                                        Next
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/**nos valeur et footer */}
                        <ValeurTablete />
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
                                src="/Rec111.png"
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    width: "calc(100% - 803.5px)",
                                    top: "262.49px",
                                    left: "402px",
                                    fontWeight: "500",
                                    display: "inline-block",
                                    height: "72px",
                                }}
                            >
                                Produit
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
                            {/**section category et produits */}
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    background:
                                        "linear-gradient(180deg, rgba(64, 49, 112, 0.15), rgba(238, 144, 47, 0.6) 62.3%)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: "24px",
                                }}
                            >
                                {/**Section categories */}
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        background:
                                            "linear-gradient(180deg, #e7e9f1, #d8ced3)",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        padding: "32px 10px",
                                        gap: "10px",
                                    }}
                                >
                                    {/*searsh*/}
                                    <div
                                        style={{
                                            width: "297.8px",
                                            position: "relative",
                                            height: "44.1px",
                                        }}
                                    >
                                        {/**logic for searsh */}
                                        <form>
                                            <input
                                                type="text"
                                                id="searsh"
                                                placeholder="chercher par produit"
                                                style={{
                                                    position: "absolute",
                                                    top: "0px",
                                                    left: "0px",
                                                    borderRadius: "10px",
                                                    backgroundColor: "#fff",
                                                    border: "1px solid #9f9f9f",
                                                    boxSizing: "border-box",
                                                    padding: "10px",
                                                    width: "297.8px",
                                                    height: "44.1px",
                                                }}
                                                value={ChercheWord}
                                                onChange={(e) => {
                                                    setChercheWord(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                            <img
                                                onClick={() => Cherche()}
                                                style={{
                                                    position: "absolute",
                                                    top: "12.92px",
                                                    left: "265.22px",
                                                    width: "24px",
                                                    height: "24px",
                                                    overflow: "hidden",
                                                    cursor: "pointer",
                                                }}
                                                alt=""
                                                src="/akar-icons_search.svg"
                                            />
                                        </form>
                                    </div>
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            height: "216px",
                                        }}
                                    >
                                        {/**title category */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "10px",
                                                left: "133px",
                                                width: "253px",
                                                height: "44px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "4px",
                                                    left: "4px",
                                                    fontWeight: "500",
                                                    display: "inline-block",
                                                    width: "245px",
                                                }}
                                            >
                                                Categories
                                            </div>
                                        </div>
                                        {/** logic categorie et subcategory here */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "73.93px",
                                                left: "127px",
                                                width: "580px",
                                                height: "735px",
                                                overflow: "hidden",
                                                fontSize: "16px",
                                                color: "rgba(0, 0, 0, 0.75)",
                                            }}
                                        >
                                            {/**category */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "0px",
                                                    left: "0px",
                                                    width: "245px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    height: "160px",
                                                    overflow:
                                                        Categorys.length < 5
                                                            ? "hidden"
                                                            : "scroll",
                                                    alignItems: "center",
                                                    justifyContent:
                                                        "flex-start",
                                                }}
                                            >
                                                {Categorys.map((element) => {
                                                    return (
                                                        <div
                                                            key={element.id}
                                                            onClick={() =>
                                                                handleSubCat(
                                                                    element.id
                                                                )
                                                            }
                                                            style={{
                                                                width: "100%",
                                                                backgroundColor:
                                                                    "#fff",
                                                                border: "1px solid rgba(0, 0, 0, 0.5)",
                                                                boxSizing:
                                                                    "border-box",
                                                                height: "32px",
                                                                display: "flex",
                                                                flexDirection:
                                                                    "row",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "flex-start",
                                                                padding:
                                                                    "8px 16px",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    position:
                                                                        "relative",
                                                                }}
                                                            >
                                                                {element.name}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            {/**subcategory */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "0px",
                                                    left: "335px",
                                                    width: "245px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    height: "160px",
                                                    overflow:
                                                        Subcategorys.length < 5
                                                            ? "hidden"
                                                            : "scroll",
                                                    alignItems: "center",
                                                    justifyContent:
                                                        "flex-start",
                                                }}
                                            >
                                                {Subcategorys.map((element) => {
                                                    return (
                                                        <div
                                                            key={element.id}
                                                            onClick={() =>
                                                                handleProduit(
                                                                    element.id
                                                                )
                                                            }
                                                            style={{
                                                                width: "245px",
                                                                backgroundColor:
                                                                    "rgba(159, 159, 159, 0.5)",
                                                                border: "1px solid rgba(0, 0, 0, 0.5)",
                                                                boxSizing:
                                                                    "border-box",
                                                                height: "32px",
                                                                display: "flex",
                                                                flexDirection:
                                                                    "row",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "flex-start",
                                                                padding:
                                                                    "8px 16px",
                                                                cursor: "pointer",
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    position:
                                                                        "relative",
                                                                }}
                                                            >
                                                                {element.name}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/**section product */}
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                        alignContent: "center",
                                        padding: "16px 24px",
                                        gap: "32px",
                                        color: "#3a3a3a",
                                    }}
                                >
                                    {/**cart product *9  */}
                                    {Products.map((produit) => (
                                        <CardDesktop
                                            key={produit.id}
                                            produit={produit}
                                        />
                                    ))}
                                </div>
                                {/**pagination */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "24px",
                                        gap: "38px",
                                        fontSize: "20px",
                                    }}
                                >
                                    {arrNembre.map((element, index) => {
                                        return (
                                            <div
                                                onClick={() =>
                                                    handlePage(element)
                                                }
                                                key={index}
                                                style={{
                                                    cursor: "pointer",
                                                    width: "60px",
                                                    position: "relative",
                                                    height: "60px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: "0px",
                                                        left: "0px",
                                                        borderRadius: "10px",
                                                        backgroundColor:
                                                            element === page
                                                                ? "rgba(107, 130, 214, 0.9)"
                                                                : "rgba(107, 130, 214, 0.45)",
                                                        width: "60px",
                                                        height: "60px",
                                                    }}
                                                />
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: "15px",
                                                        left: "27px",
                                                    }}
                                                >
                                                    {element}
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        onClick={() => handleNextPage()}
                                        style={{
                                            width: "98px",
                                            position: "relative",
                                            height: "60px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "0px",
                                                left: "0px",
                                                borderRadius: "10px",
                                                backgroundColor: isHovered
                                                    ? "rgba(107, 130, 214, 0.9)"
                                                    : "#f9f1e7",
                                                width: "98px",
                                                height: "60px",
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "15px",
                                                left: "28px",
                                                fontWeight: "300",
                                            }}
                                        >
                                            Next
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*nos valeur*/}
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

export default ProductPage;
