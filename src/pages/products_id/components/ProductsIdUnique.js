import { useParams } from "react-router-dom";
import "./_productsIdUnique.scss";
import { useContext } from "react";
import { Bakset } from "../../../App";
import { motion } from "framer-motion";

export const ProductsIdUnique = () => {
    let { id, unique } = useParams();

    const allValue = useContext(Bakset);
    const allInfo = allValue.allInfo[0];

    return (
        <>
            <motion.div className="motionHolder"
                initial={{ y: "100vw", opacity: 0 }}
                animate={{ y: "0", opacity: 1 }}
                transition={{ delay: 0.25, duration: 1, ease: "easeInOut" }}
                exit={{
                    y: "-100vw",
                    opacity: 0,
                    transition: { duration: 0.25, delay: 0.25, ease: "easeInOut" }
                }}
            >

                <div className="mt-4">
                    <h1 className="text-center">Welcome to {id} and specifically {unique}</h1>
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
                                                                    <div className="d-flex gap-3 align-items-center flex-column">
                                                                        <h1 className="text-uppercase">{el.name}</h1>
                                                                        <div className="d-flex gap-1 align-items-center">
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