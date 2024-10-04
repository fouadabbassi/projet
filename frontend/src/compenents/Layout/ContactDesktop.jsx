import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMessage } from "../../redux/messageAction";

const ContactDesktop = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [objet, setObjet] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

        const validateForm = () => {
            const newErrors = {};
            if (!name) newErrors.name = "name is required";
            else if (name.length < 4)
                newErrors.name = "name must be at least 4 characters";
            if (!email) newErrors.email = "Email is required";
            else if (!/\S+@\S+\.\S+/.test(email))
                newErrors.email = "Email is invalid";
            if (!objet) newErrors.objet = "objet is required";
            else if (objet.length < 1)
                newErrors.objet = "objet must be at least 2 characters";
            if (!message) newErrors.message = "message is required";
            else if (message.length < 10)
                newErrors.message = "message must be at least 10 characters";
            return newErrors;
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            const formErrors = validateForm();
            if (Object.keys(formErrors).length > 0) {
                setErrors(formErrors);
                console.log(errors)
            } else {
                setErrors({});
                dispatch(
                    createMessage({
                        name: name,
                        email: email,
                        object: objet,
                        message: message,
                    })
                );
                navigate("/");
            }
        };

    return (
        <>
            <div
                id="contact"
                style={{
                    alignSelf: "stretch",
                    position: "relative",
                    background:
                        "linear-gradient(180deg, rgba(238, 144, 47, 0.6), rgba(64, 49, 112, 0.3))",
                    height: "709px",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        top: "14px",
                        left: "0px",
                        fontWeight: "600",
                        display: "inline-block",
                        height: "38px",
                        color: "#000",
                        textAlign: "center",
                        fontSize: "32px",
                        fontStyle: "normal",
                        lineHeight: "normal",
                    }}
                >
                    Contact Nous
                </div>
                <div
                    style={{
                        position: "absolute",
                        width: "calc(100% - 549px)",
                        top: "62px",
                        left: "275px",
                        fontSize: "15px",
                        fontWeight: "300",
                        fontFamily: "Roboto",
                        color: "#001b7c",
                        display: "inline-block",
                    }}
                >{`For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!`}</div>
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        top: "125px",
                        right: "0px",
                        left: "0px",
                        height: "563px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "16px 64px",
                        boxSizing: "border-box",
                        gap: "64px",
                        textAlign: "left",
                        fontSize: "16.53px",
                        fontFamily: "Poppins",
                    }}
                >
                    <div
                        style={{
                            width: "243px",
                            position: "relative",
                            height: "362.1px",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "16px",
                                gap: "12px",
                            }}
                        >
                            {/**adress */}
                            <div
                                style={{
                                    width: "211px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    padding: "8px 16px",
                                    boxSizing: "border-box",
                                    gap: "16px",
                                }}
                            >
                                <img
                                    style={{
                                        width: "24px",
                                        position: "relative",
                                        height: "24px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/location-on.svg"
                                />
                                <div
                                    style={{
                                        width: "146px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                    }}
                                >
                                    {/**adress */}
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            fontWeight: "500",
                                            display: "inline-block",
                                            height: "24.8px",
                                            flexShrink: "0",
                                        }}
                                    >
                                        Address
                                    </div>
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            fontSize: "11.02px",
                                            display: "inline-block",
                                            height: "50.6px",
                                            flexShrink: "0",
                                        }}
                                    >
                                        236 5th SE Avenue, New York NY10000,
                                        United States
                                    </div>
                                </div>
                            </div>
                            {/**phone */}
                            <div
                                style={{
                                    width: "211px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    padding: "16px",
                                    boxSizing: "border-box",
                                    gap: "16px",
                                }}
                            >
                                <img
                                    style={{
                                        width: "24px",
                                        position: "relative",
                                        height: "24px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/call.svg"
                                />
                                <div
                                    style={{
                                        width: "146px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            fontWeight: "500",
                                            display: "inline-block",
                                            height: "24.8px",
                                            flexShrink: "0",
                                        }}
                                    >
                                        Phone
                                    </div>
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            fontSize: "11.02px",
                                            display: "inline-block",
                                            height: "33.7px",
                                            flexShrink: "0",
                                        }}
                                    >
                                        <p
                                            style={{
                                                margin: "0",
                                            }}
                                        >
                                            Mobile: +(84) 546-6789
                                        </p>
                                        <p
                                            style={{
                                                margin: "0",
                                            }}
                                        >
                                            Hotline: +(84) 456-6789
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/**time work */}
                            <div
                                style={{
                                    width: "193px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    padding: "16px",
                                    boxSizing: "border-box",
                                    gap: "16px",
                                }}
                            >
                                <img
                                    style={{
                                        width: "15.8px",
                                        position: "relative",
                                        height: "15.7px",
                                        overflow: "hidden",
                                        flexShrink: "0",
                                    }}
                                    alt=""
                                    src="/biclockfill.svg"
                                />
                                <div
                                    style={{
                                        width: "146px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            fontWeight: "500",
                                            display: "inline-block",
                                            height: "24.8px",
                                            flexShrink: "0",
                                        }}
                                    >
                                        Working Time
                                    </div>
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            fontSize: "11.02px",
                                            display: "inline-block",
                                            height: "67.4px",
                                            flexShrink: "0",
                                        }}
                                    >
                                        <p
                                            style={{
                                                margin: "0",
                                            }}
                                        >
                                            Monday-Friday: 9:00 - 22:00
                                        </p>
                                        <p
                                            style={{
                                                margin: "0",
                                            }}
                                        >
                                            Saturday-Sunday: 9:00 - 21:00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            width: "426.5px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "28px",
                            fontSize: "11.02px",
                        }}
                    >
                        <div
                            style={{
                                width: "425.7px",
                                position: "relative",
                                height: "86.7px",
                            }}
                        >
                            {/**label */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0px",
                                    right: "0px",
                                    fontWeight: "500",
                                    display: "inline-block",
                                    width: "100%",
                                    height: "17.7px",
                                }}
                            >
                                Your name <br />
                                <p style={{ color: "#b88e2f" }}>
                                    {errors.name}
                                </p>
                            </div>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                placeholder="Your name"
                                style={{
                                    position: "absolute",
                                    top: "32.96px",
                                    right: "0px",
                                    borderRadius: "6.89px",
                                    backgroundColor: "#fff",
                                    border: "0.7px solid #9f9f9f",
                                    boxSizing: "border-box",
                                    width: "424.7px",
                                    height: "53.7px",
                                    padding: "10px",
                                    fontSize: "18px",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                width: "425.7px",
                                position: "relative",
                                height: "86.7px",
                            }}
                        >
                            {/**label */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0px",
                                    right: "0px",
                                    fontWeight: "500",
                                    display: "inline-block",
                                    width: "100%",
                                    height: "17.7px",
                                }}
                            >
                                Email address
                                <br />
                                <p style={{ color: "#b88e2f" }}>
                                    {errors.email}
                                </p>
                            </div>
                            <input
                                type="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Youremail@gmail.com"
                                style={{
                                    position: "absolute",
                                    top: "32.96px",
                                    right: "0px",
                                    borderRadius: "6.89px",
                                    backgroundColor: "#fff",
                                    border: "0.7px solid #9f9f9f",
                                    boxSizing: "border-box",
                                    width: "424.7px",
                                    height: "53.7px",
                                    padding: "10px",
                                    fontSize: "18px",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                width: "424.1px",
                                position: "relative",
                                height: "86.7px",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0px",
                                    right: "0px",
                                    fontWeight: "500",
                                    display: "inline-block",
                                    width: "100%",
                                    height: "17.7px",
                                }}
                            >
                                Objet
                                <br />
                                <p style={{ color: "#b88e2f" }}>
                                    {errors.objet}
                                </p>
                            </div>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setObjet(e.target.value);
                                }}
                                placeholder="Objet"
                                style={{
                                    position: "absolute",
                                    top: "32.96px",
                                    right: "0px",
                                    borderRadius: "6.89px",
                                    backgroundColor: "#fff",
                                    border: "0.7px solid #9f9f9f",
                                    boxSizing: "border-box",
                                    width: "424.7px",
                                    height: "53.7px",
                                    padding: "10px",
                                    fontSize: "18px",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                width: "424.1px",
                                position: "relative",
                                height: "118.9px",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0px",
                                    right: "0px",
                                    fontWeight: "500",
                                    display: "inline-block",
                                    width: "100%",
                                    height: "17.7px",
                                }}
                            >
                                Message
                                <br />
                                <p style={{ color: "#b88e2f" }}>
                                    {errors.message}
                                </p>
                            </div>
                            <textarea
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                                placeholder="Message"
                                style={{
                                    position: "absolute",
                                    top: "32.96px",
                                    right: "0px",
                                    borderRadius: "6.89px",
                                    backgroundColor: "#fff",
                                    border: "0.7px solid #9f9f9f",
                                    boxSizing: "border-box",
                                    width: "423.3px",
                                    height: "86px",
                                    maxHeight: "86px",
                                    padding: "10px",
                                    fontSize: "18px",
                                }}
                            />
                        </div>
                        {/**booton envoyer */}
                        <div
                            style={{
                                position: "relative",
                                height: "48px",
                                color: "#fff",
                                fontSize: "18px",
                            }}
                        >
                            <button
                                type="submit"
                                style={{
                                    position: "absolute",
                                    top: "0px",
                                    left: "calc(50% - 95.15px)",
                                    borderRadius: "3.44px",
                                    backgroundColor: "#b88e2f",
                                    border: "0.7px solid #b88e2f",
                                    boxSizing: "border-box",
                                    width: "190.3px",
                                    height: "39.4px",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "5.85px",
                                        left: "calc(50% - 33.67px)",
                                        display: "inline-block",
                                        width: "47.6px",
                                        height: "19.7px",
                                    }}
                                >
                                    Envoyer
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactDesktop;
