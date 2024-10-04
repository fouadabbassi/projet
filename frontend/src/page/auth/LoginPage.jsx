import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn"; // Fixed the typo here

function LoginPage() {
    const [type, setType] = useState("signIn");

    const handleOnClick = (text) => {
        if (text !== type) {
            setType(text);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "flex-start",
                backgroundImage: "url('/istockphoto-165829163-612x612.jpg')",
                backgroundSize: "cover", // Ensures the image covers the whole div
                backgroundPosition: "center", // Centers the image
                paddingTop: "54px",
                height: "auto", // Added height to center content vertically
                boxSizing: "border-box",
            }}
        >
            <h2 style={{ textAlign: "center" }}>Login/Register</h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    height:"auto",
                }}
            >
                <button
                    style={{
                        width: "50%",
                        marginBottom: "10px", // Added margin for better spacing
                        padding: "10px",
                        cursor: "pointer",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        backgroundColor: "#f0f0f0",
                    }}
                    onClick={() => handleOnClick("signIn")}
                >
                    Login
                </button>
                <button
                    style={{
                        width: "50%",
                        marginBottom: "10px", // Added margin for better spacing
                        padding: "10px",
                        cursor: "pointer",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        backgroundColor: "#f0f0f0",
                    }}
                    onClick={() => handleOnClick("signUp")}
                >
                    Register
                </button>
                {type === "signIn" ? <SignIn /> : <SignUp />}
            </div>
        </div>
    );
}

export default LoginPage;
