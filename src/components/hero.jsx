import "./Hero.css";
function hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Big Deals on Electronics</h1>
                <p>Shop the latest gadgets, fashion, and essentials.</p>
                <button onClick={() =>
                    window.open("https://www.amazon.com", "_blank")
                }>Shop Now</button>
            </div>
        </section>
    );
}
export default hero;