import { NavLink, useParams } from "react-router-dom";
import "./_products_id.scss";
import { useContext } from "react";
import { Bakset } from "../../App";
import { Carousel } from "../home/components/Carousel";

export const Product_id = () => {
    const { id } = useParams();

    const allValue = useContext(Bakset);
    const allInfo = allValue.allInfo[0];


    return (
        <>
            <div>
                {
                    allInfo.map((element, index) =>
                        <>
                            {
                                element.name === id ?
                                    <>
                                        <div className="heroHolder">
                                            <Carousel>{allInfo[index].items}</Carousel>
                                        </div>
                                        <div className="myItems container">
                                            {
                                                allInfo[index].items.map((el, i) =>
                                                    <>
                                                        <div className="item">
                                                            <NavLink to={`/products/${id}/${el.name}`}>
                                                                <img src={el.src} alt="" />
                                                            </NavLink>
                                                            <h2>{el.price}$</h2>
                                                            <h2>Items Left: {el.stock}</h2>
                                                            <div className="d-flex align-items-center justify-content-around w-100">
                                                                <button className="w-50" onClick={() => {
                                                                    allValue.removeItem(index, i)
                                                                }}>-</button>
                                                                <button className="w-50" onClick={() =>
                                                                    allValue.addItem(index, i)
                                                                }>+</button>
                                                            </div>
                                                        </div>
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