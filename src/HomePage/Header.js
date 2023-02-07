import PopularRoutes from "../HomePage/Section/PopularRoutes.js";
import News from "../HomePage/Section/News.js"

const Header = () => {
    return (
        <>
            <img style={{ width: '100%', height: '500px' }}
                alt="..."
                src={require("../assets/header-background.jpg")}
            />
            <PopularRoutes />
            <News />

        </>
    );
}
export default Header;