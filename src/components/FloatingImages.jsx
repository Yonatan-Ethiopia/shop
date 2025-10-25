import { useEffect, useRef } from "react";
import "./FloatingImages.css";

const images = [
  "/file1.png",
  "/file2.png",
  "/file3.png",
  "/file4.png",
  "/file5.png",
  "/file6.png",
  "/file7.png",
  "/file8.png",
  "/file9.png",
  "/file10.png",
  "/file11.png",
  "/file12.png",
  "/file13.png",
  "/file14.png",
  "/file15.png",
  "/file16.png",
  "/file17.png",
  "/file18.png",
  "/file19.png"
];

function FloatingImages() {
  const containerRef = useRef(null);

  // Cursor parallax effect
  //useEffect(() => {
    //const container = containerRef.current;
    //const handleMove = (e) => {
      //const x = (e.clientX / window.innerWidth - 0.5) * 20;
      //const y = (e.clientY / window.innerHeight - 0.5) * 20;
      //container.style.transform = `translate(${x}px, ${y}px)`;
    //};

    //window.addEventListener("mousemove", handleMove);
    //return () => window.removeEventListener("mousemove", handleMove);
  //}, []);

  return (
    <div className="float-container" ref={containerRef}>
      {images.map((src, i) => (
        <img key={i} src={src} className={`float-img item${i}`} alt="" />
      ))}
    </div>
  );
}
export default FloatingImages;
