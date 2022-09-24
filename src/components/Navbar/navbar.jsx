import "./navbar.css";

const Navbar = () => {
    return(
        <div class="nav">
            <p class="title">grace-manning.com</p>
            <p class="tagline">...where dreams come true!</p>
            <div class="navItems">
                <a class="navItem" href="#main">Home</a>
                <a class="navItem" href="#about">About</a>
                <a class="navItem" href="#projects">Projects</a>
                <a class="navItem" href="#contact">Contact</a>
            </div>
        </div>
    );
};

export default Navbar