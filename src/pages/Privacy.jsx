import "./Privacy.css";

function Privacy() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>

        <p className="privacy-updated">
          Last Updated: July 2026
        </p>

        <div className="privacy-section">
          <h2>Portfolio Project</h2>
          <p>
            This website is a demo e-commerce application created for
            educational and portfolio purposes. It is not a commercial
            shopping website.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Personal Information</h2>
          <p>
            We do not collect, store, sell, or share any personal
            information entered on this website.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Payments</h2>
          <p>
            This website does not process real payments or financial
            transactions. Any checkout page is for demonstration purposes
            only.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Local Storage</h2>
          <p>
            The shopping cart and wishlist may be saved only in your
            browser using Local Storage to improve your browsing
            experience. This information never leaves your device and is
            not sent to any server.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Cookies</h2>
          <p>
            This website does not use tracking cookies, advertising
            cookies, or analytics services.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Third-Party Services</h2>
          <p>
            This project does not use any third-party services to collect
            visitor data.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Contact</h2>
          <p>
            If you have any questions regarding this project, please use
            the Contact page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;