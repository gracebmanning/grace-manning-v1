import "./navbar.css";

const Navbar = () => {
    return(
        <div class="nav">
            <a class="navItem" href="#main">Home</a>
            <a class="navItem" href="#projects">Projects</a>
            <a class="navItem" href="#about">About</a>
            <a class="navItem" href="#contact">Contact</a>
        </div>
    );
};

export default Navbar