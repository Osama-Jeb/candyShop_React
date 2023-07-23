import { useParams } from "react-router-dom";
import "./_products_Id_Unique.scss";
import { useContext } from "react";
import { Bakset } from "../../../App";
import { motion } from "framer-motion";

export const Products_Id_Unique = () => {
    let { id, unique } = useParams();

    const allValue = useContext(Bakset);
    const allInfo = allValue.allInfo[0];

    return (
        <>
            <motion.div className="motionHolder"
                initial={{ x: "100vw", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.9, ease: "easeInOut" }}
                exit={{
                    x: "-100vw",
                    opacity: 0,
                    transition: { duration: 0.75, delay: 0.25, ease: "easeInOut" }
                }}
            >

                <div className="mt-4">
                    <h1 className="text-center">Welcome to {id} and specificaly {unique}</h1>
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
                                                                    <div className="d-flex align-items-center">
                                                                        <button onClick={() => {
                                                                            allValue.removeItem(index, i);
                                                                        }}>
                                                                            -1
                                                                        </button>
                                                                        <h2>{10 - el.stock}</h2>
                                                                        <button onClick={() => {
                                                                            allValue.addItem(index, i);
                                                                        }}>+1</button>
                                                                    </div>

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
            </motion.div>
        </>
    )
}