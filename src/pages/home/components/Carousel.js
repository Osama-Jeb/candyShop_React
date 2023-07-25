import "./_carousel.scss";
import drink from "../../../assets/images/drinks/drink1.jpg";
import chip from "../../../assets/images/chips/chips1.jpg";
import bar from "../../../assets/images/bars/bar1.jpg";
import candy from "../../../assets/images/candy/candy1.jpg";
import { NavLink } from "react-router-dom";


export const Carousel = (props) => {
    let myPgs = [
        {
            name: "drinks",
            src: drink,
        },
        {
            name: "chips",
            src: chip,
        },
        {
            name: "bars",
            src: bar,
        },
        {
            name: "candy",
            src: candy,
        },
    ]
    return (
        <>
            <div className="d-flex justify-content-center">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {
                            !props.children ?
                                <>
                                    {
                                        myPgs.map((element, index) =>
                                            <div className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval={2000}>
                                                <NavLink to={`/products/${element.name}`}>
                                                    <div className="imgHolder d-flex justify-content-center flex-column align-items-center">
                                                        <img src={element.src} alt="..." />
                                                        <h1>{element.name}</h1>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )
                                    }
                                </>
                                :
                                props.children.map((element, index) =>
                                    <>
                                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval={2000}>
                                            <NavLink to={`/candyShop_React/products/${element.type}/${element.name}`}>
                                                <div className="imgHolder d-flex justify-content-center">
                                                    <img src={element.src} alt="..." />
                                                </div>
                                            </NavLink>
                                        </div>
                                    </>
                                )
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <h1 className="choco">{"<=="}</h1>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <h1 className="choco">{"==>"}</h1>
                    </button>
                </div>
            </div>
        </>
    )
}