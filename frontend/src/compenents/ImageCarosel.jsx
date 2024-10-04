import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ImageCarousel = () => {
    const images = [
        "/RAM-ASSET-MANAGEMENT.jpg",
        "/e8e6c2e7-3fb6-490b-b61d-de707c2db5fb.webp",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Change slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4500); // 3000ms = 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "650px",
                overflow: "hidden",
            }}
        >
            <img
                src={images[currentIndex]}
                alt={`slide-${currentIndex}`}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "650px",
                    objectFit: "cover",
                    transition: "opacity 0.1s ease-in-out",
                }}
            />
            {/* Dots for navigation */}
            <div
                style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "10px",
                }}
            >
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor:
                                currentIndex === index
                                    ? "white"
                                    : "rgba(255, 255, 255, 0.5)",
                            cursor: "pointer",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
