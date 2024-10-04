import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMessage } from "../../redux/messageAction";
const ContactPhone = () => {
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
            console.log(errors);
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
        <div
            id="contact"
            style={{
                width: "100%",
                position: "relative",
                background:
                    "linear-gradient(180deg, rgba(238, 144, 47, 0.6), rgba(64, 49, 112, 0.3))",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "8px",
                boxSizing: "border-box",
                gap: "16px",
                textAlign: "center",
                fontSize: "24px",
                color: "#000",
                fontFamily: "Rubik",
            }}
        >
            <div
                style={{
                    width: "320px",
                    position: "relative",
                    fontWeight: "600",
                    display: "inline-block",
                    height: "29px",
                    flexShrink: "0",
                    color: "#000",
                    textAlign: "center",
                    fontSize: "28px",
                    fontStyle: "normal",
                    lineHeight: "normal",
                }}
            >
                Contact Nous
            </div>
            <div
                style={{
                    position: "relative",
                    fontSize: "11.25px",
                    fontWeight: "300",
                    fontFamily: "Roboto",
                    color: "#001b7c",
                    display: "inline-block",
                }}
            >{`For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!`}</div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0px 16px",
                    gap: "24px",
                    textAlign: "left",
                    fontSize: "12.4px",
                    fontFamily: "Poppins",
                }}
            >
                <div
                    style={{
                        width: "219px",
                        position: "relative",
                        height: "271px",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "219px",
                            height: "271px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "12px",
                            boxSizing: "border-box",
                            gap: "9px",
                        }}
                    >
                        <div
                            style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "6px 12px",
                            }}
                        >
                            <img
                                style={{
                                    width: "18px",
                                    position: "relative",
                                    height: "18px",
                                    overflow: "hidden",
                                    flexShrink: "0",
                                }}
                                alt=""
                                src="/location-on.svg"
                            />
                            <div
                                style={{
                                    width: "109.5px",
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
                                        height: "18.6px",
                                        flexShrink: "0",
                                    }}
                                >
                                    Address
                                </div>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        position: "relative",
                                        fontSize: "8.27px",
                                        display: "inline-block",
                                        height: "37.9px",
                                        flexShrink: "0",
                                    }}
                                >
                                    236 5th SE Avenue, New York NY10000, United
                                    States
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "12px",
                            }}
                        >
                            <img
                                style={{
                                    width: "18px",
                                    position: "relative",
                                    height: "18px",
                                    overflow: "hidden",
                                    flexShrink: "0",
                                }}
                                alt=""
                                src="/call.svg"
                            />
                            <div
                                style={{
                                    width: "109.5px",
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
                                        height: "18.6px",
                                        flexShrink: "0",
                                    }}
                                >
                                    Phone
                                </div>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        position: "relative",
                                        fontSize: "8.27px",
                                        display: "inline-block",
                                        height: "25.3px",
                                        flexShrink: "0",
                                    }}
                                >
                                    <p style={{ margin: "0" }}>
                                        Mobile: +(84) 546-6789
                                    </p>
                                    <p style={{ margin: "0" }}>
                                        Hotline: +(84) 456-6789
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "12px",
                            }}
                        >
                            <img
                                style={{
                                    width: "11.9px",
                                    position: "relative",
                                    height: "11.8px",
                                    overflow: "hidden",
                                    flexShrink: "0",
                                }}
                                alt=""
                                src="/biclockfill.svg"
                            />
                            <div
                                style={{
                                    width: "109.5px",
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
                                        height: "18.6px",
                                        flexShrink: "0",
                                    }}
                                >
                                    Working Time
                                </div>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        position: "relative",
                                        fontSize: "8.27px",
                                        display: "inline-block",
                                        height: "50.6px",
                                        flexShrink: "0",
                                    }}
                                >
                                    <p style={{ margin: "0" }}>
                                        Monday-Friday: 9:00 - 22:00
                                    </p>
                                    <p style={{ margin: "0" }}>
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
                        width: "320px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "21px",
                        fontSize: "14px",
                    }}
                >
                    <div
                        style={{
                            width: "320px",
                            position: "relative",
                            height: "95px",
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
                                height: "24px",
                            }}
                        >
                            Your name <br />
                            <p style={{ color: "#b88e2f" }}>{errors.name}</p>
                        </div>
                        <input
                            type="text"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            placeholder="Your name"
                            style={{
                                position: "absolute",
                                right: "0px",
                                borderRadius: "5px",
                                backgroundColor: "#fff",
                                border: "0.5px solid #9f9f9f",
                                boxSizing: "border-box",
                                width: "318.5px",
                                height: "40.3px",
                                padding: "10px",
                                fontSize: "18px",
                                top: "38px",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            width: "320px",
                            position: "relative",
                            height: "95px",
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
                                height: "24px",
                            }}
                        >
                            Email address
                            <br />
                            <p style={{ color: "#b88e2f" }}>{errors.email}</p>
                        </div>
                        <input
                            type="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="Youremail@gmail.com"
                            style={{
                                position: "absolute",
                                right: "0px",
                                borderRadius: "5px",
                                backgroundColor: "#fff",
                                border: "0.5px solid #9f9f9f",
                                boxSizing: "border-box",
                                width: "318.5px",
                                height: "40.3px",
                                padding: "10px",
                                fontSize: "18px",
                                top: "38px",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            width: "320px",
                            position: "relative",
                            height: "95px",
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
                                height: "24px",
                            }}
                        >
                            Objet
                            <br />
                            <p style={{ color: "#b88e2f" }}>{errors.objet}</p>
                        </div>
                        <input
                            type="text"
                            onChange={(e) => {
                                setObjet(e.target.value);
                            }}
                            placeholder="Objet"
                            style={{
                                position: "absolute",
                                right: "0px",
                                borderRadius: "5px",
                                backgroundColor: "#fff",
                                border: "0.5px solid #9f9f9f",
                                boxSizing: "border-box",
                                width: "318.5px",
                                height: "40.3px",
                                padding: "10px",
                                fontSize: "18px",
                                top: "38px",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            width: "320px",
                            position: "relative",
                            height: "140px",
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
                                height: "24px",
                            }}
                        >
                            Message
                            <br />
                            <p style={{ color: "#b88e2f" }}>{errors.message}</p>
                        </div>
                        <textarea
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            placeholder="Message"
                            style={{
                                position: "absolute",
                                right: "0px",
                                borderRadius: "5px",
                                backgroundColor: "#fff",
                                border: "0.5px solid #9f9f9f",
                                boxSizing: "border-box",
                                width: "318.5px",
                                height: "86px",
                                padding: "10px",
                                fontSize: "18px",
                                top: "38px",
                                maxHeight: "86px",
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
    );
};

export default ContactPhone;
