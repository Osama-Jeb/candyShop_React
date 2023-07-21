import "./_carousel.scss";
import drink from "../../../assets/images/drinks/drink1.jpg";
import chip from "../../../assets/images/chips/chips1.jpg";
import bar from "../../../assets/images/bars/bar1.jpg";
import candy from "../../../assets/images/candy/candy1.jpg";
import { NavLink } from "react-router-dom";


export const Carousel = () => {
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
                            myPgs.map((element, index) =>
                                <div className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval={2000}>
                                    <NavLink to={`/products/${element.name}`}>
                                        <div className="imgHolder d-flex justify-content-center">
                                        <img src={element.src} alt="..." />
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}