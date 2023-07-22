import { useParams } from "react-router-dom";
import "./_products_Id_Unique.scss";

export const Products_Id_Unique = (props) => {
    let { id, unique } = useParams();
    return (
        <>
            <div className="mt-4">
                <h1>Welcome to {id} and specificaly {unique}</h1>
            </div>
            <div className="uniqueHolder">
                {
                    props.myTabs.allInfo[0].map((element, index) =>
                        <>
                            {
                                element.name === id ?
                                    <>
                                        {
                                            props.myTabs.allInfo[0][index].items.map((el, i) =>
                                                <>
                                                    {
                                                        el.name === unique ?
                                                            <>
                                                                <img className="uniqueImg" src={el.src} alt="" />
                                                                <h1>{el.name}</h1>

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