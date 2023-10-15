import Click from "./Click";
import Hero from "./Hero";

function Header(){

    console.log("Header rendered");

    return (
        <div>
            <Hero/>
            <Click/>
        </div>
    );
}

export default Header;