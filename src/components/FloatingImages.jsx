import { useEffect, useRef } from "react";
import "./FloatingImages.css";

const images = [
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file1.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file2.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file3.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file4.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file5.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file6.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file7.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file8.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file9.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file10.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file11.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file12.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file13.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file14.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file15.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file15.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file17.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file18.png",
  "https://uvvfxecxirwxnefamcpt.supabase.co/storage/v1/object/public/productImages/file19.png"
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
