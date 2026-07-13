import "./About.css";
function About() {
  return (
    <div className="about-page">
  <div className="about-container">

    <h1 className="about-title">
      About Our Store
    </h1>

    <p className="about-subtitle">
      A modern React e-commerce application inspired by Amazon.
    </p>

    <div className="about-section">
      <h2>Who We Are</h2>
      <p>
        This project demonstrates a complete shopping experience
        including product browsing, wishlist, shopping cart,
        checkout, and responsive design.
      </p>
    </div>

    <div className="about-features">

      <div className="feature-card">
        <h3>🛒 Shopping Cart</h3>
        <p>Add, remove and update products easily.</p>
      </div>

      <div className="feature-card">
        <h3>❤️ Wishlist</h3>
        <p>Save your favourite products.</p>
      </div>

      <div className="feature-card">
        <h3>📱 Responsive</h3>
        <p>Optimized for desktop, tablet and mobile.</p>
      </div>

      <div className="feature-card">
        <h3>⚡ Fast</h3>
        <p>Built using React and Vite.</p>
      </div>

    </div>

    <div className="about-section">
      <h2>Technologies Used</h2>

      <div className="about-tech">
        <span>React</span>
        <span>Vite</span>
        <span>React Router</span>
        <span>JavaScript</span>
        <span>CSS3</span>
        <span>Local Storage</span>
      </div>
    </div>

    <div className="about-note">
      This is a portfolio project created for learning purposes and
      is not affiliated with Amazon.
    </div>

  </div>
</div>
  );
}

export default About;