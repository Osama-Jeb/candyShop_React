import { NavLink, useParams } from "react-router-dom";
import "./_products_id.scss";
import { useContext} from "react";
import { Bakset } from "../../App";

export const Product_id = (props) => {
    const { id } = useParams();

    const allValue = useContext(Bakset);
    const [allInfo, setAllInfo] = allValue.allInfo;
    const [basketInfo, setBaksetInfo] = allValue.basketInfo

    const addItem = (groupIndex, uniqueIndex) => {
        let temp = [...allInfo];
        temp[groupIndex].items[uniqueIndex].stock -= 1;
        setAllInfo(temp);

        let tempBas = [...basketInfo, temp[groupIndex].items[uniqueIndex]];
        console.log(temp[groupIndex].items[uniqueIndex])
        setBaksetInfo(tempBas);
    }

    return (
        <>
            <div>
                {
                    props.myTabs.allInfo[0].map((element, index) =>
                        <>
                            {
                                element.name === id ?
                                    <>
                                        <div className="heroHolder">
                                            <img className="productHero" src={element.hero} alt="" />
                                        </div>
                                        <div className="myItems">
                                            {
                                                props.myTabs.allInfo[0][index].items.map((el, i) =>
                                                    <>
                                                        <div className="item">
                                                            <NavLink to={`/products/${id}/${el.name}`}>
                                                                <img src={el.src} alt="" />
                                                            </NavLink>
                                                            <h2>{el.price}$</h2>
                                                            <h2>Items Left: {el.stock}</h2>
                                                            <div className="d-flex align-items-center justify-content-around w-100">
                                                                <button>-</button>
                                                                <button onClick={()=>
                                                                addItem(index, i)
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