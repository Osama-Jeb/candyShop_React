import { useParams } from "react-router-dom";
import "./_products_Id_Unique.scss";
import { useContext } from "react";
import { Bakset } from "../../../App";

export const Products_Id_Unique = () => {
    let { id, unique } = useParams();

    const allValue = useContext(Bakset);
    const allInfo = allValue.allInfo[0];

    return (
        <>
            <div className="mt-4">
                <h1>Welcome to {id} and specificaly {unique}</h1>
            </div>
            <div className="uniqueHolder">
                {
                    allInfo.map((element, index) =>
                        <>
                            {
                                element.name === id ?
                                    <>
                                        {
                                            allInfo[index].items.map((el, i) =>
                                                <>
                                                    {
                                                        el.name === unique ?
                                                            <>
                                                                <img className="uniqueImg" src={el.src} alt="" />
                                                                <h1>{el.name}</h1>
                                                                <button onClick={() => {
                                                                    allValue.addItem(index, i);
                                                                }}>+1</button>

                                                                <button onClick={() => {
                                                                    allValue.removeItem(index, i);
                                                                }}>
                                                                    -1
                                                                </button>
                                                            </>
                                                            :
                                                            null
                                                    }
                                                </>
                                            )
                                        }
                                    </>
                                    :
                                    null
                            }
                        </>
                    )
                }
            </div>
        </>
    )
}