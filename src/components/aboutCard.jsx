function AboutCard({ data }) {
  return (
    <div className="aboutcards-container">
    <section className="hero">
  <div className="hero-content">
    <h1>💎 ND Collection</h1>
    <p>Quality Never Questioned!</p>
  </div>
</section>
      {Array.isArray(data) &&
        data.map((item, index) => (
          <div key={index} className="aboutcard">
            

            <img id="aboutimg" src={item.img} alt={item.headline} />
            <p id="abouttitle">{item.headline}</p>
            <p id="aboutdesc">{item.desc}</p>

            {item.buttons && (
              <div className="contact">
                {item.buttons.map((btn, idx) => (
                  <a key={idx} href={btn.link} target="_blank" rel="noopener noreferrer">
                    <img src={btn.icon} alt="contact icon" className="contact-icon" />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
export default AboutCard;
