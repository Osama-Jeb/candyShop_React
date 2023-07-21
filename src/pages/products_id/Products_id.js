import { NavLink, useParams } from "react-router-dom";
import "./_products_id.scss";

export const Product_id = (props) => {
    const { id } = useParams();
    console.log(props.allInfo[0].items[0].src)
    return (
        <>
            <div>
                {
                    props.allInfo.map((element, index) =>
                        <>
                            {
                                element.name === id ?
                                    <>
                                        <div className="heroHolder">
                                            <img className="productHero" src={element.hero} alt="" />
                                        </div>
                                        <div className="myItems">
                                            {
                                                props.allInfo[index].items.map((el, i) =>
                                                    <>
                                                        <NavLink to={`/products/${id}/${el.name}`}>
                                                            <img src={el.src} alt="" />
                                                        </NavLink>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </>
                                    :
                                    <></>
                            }
                        </>
                    )
                }
            </div>
        </>
    )
}