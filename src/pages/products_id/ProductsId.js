import { NavLink, useParams } from "react-router-dom";
import "./_productsId.scss";
import { useContext, useState } from "react";
import { Bakset } from "../../App";
import { Carousel } from "../home/components/Carousel";
import { motion } from "framer-motion";

export const ProductId = () => {
    const { id } = useParams();

    const allValue = useContext(Bakset);
    const allInfo = allValue.allInfo[0];

    const [searched, setSearched] = useState([])

    const search = (event, index) => {
        let items = allInfo[index].items.filter(element => element.name.includes(event.target.value.toLowerCase()))
        setSearched([...items])
    }


    return (
        <>
            <motion.div
                initial={{ x: "100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 1, ease: "easeInOut" }}
                exit={{
                    x: "-100vw",
                    opacity: 0,
                    transition: { duration: 0.25, delay: 0.25, ease: "easeInOut" }
                }}
            >
                {
                    allInfo.map((element, index) =>
                        <>
                            {
                                element.name === id ?
                                    <>
                                        <div className="topHolder d-flex align-items-center justify-content-center gap-2 ">
                                            <h1>Enjoy our {id}</h1>
                                            <div className="heroHolder">
                                                <Carousel>{allInfo[index].items}</Carousel>
                                            </div>
                                            <h1>Browse our Selection</h1>
                                        </div>

                                        <motion.div className="searchBar d-flex gap-1 align-items-center justify-content-center p-2 container"
                                            initial={{ opacity: 0, y: 100 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                        >
                                            <input type="text" onChange={(event) => {
                                                search(event, index)
                                            }} />
                                            <button className="btn btn-purple fw-bolder fs-4 rounded-pill text-light ps-2 pe-2" onClick={(event) => {
                                                search(event, index)
                                            }}>
                                                Search
                                            </button>
                                        </motion.div>

                                        <motion.div className="myItems container"
                                            initial={{ opacity: 0, y: 100 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                        >
                                            {
                                                searched.length === 0 ?
                                                    <>
                                                        {
                                                            allInfo[index].items.map((el, i) =>
                                                                <>
                                                                    <div className="item">
                                                                        <NavLink to={`/candyShop_React/products/${id}/${el.name}`}>
                                                                            <img src={el.src} alt="" />
                                                                        </NavLink>
                                                                        <h2 className="mt-1">{el.name} : {el.price}$</h2>
                                                                        <h2>Items Left: {el.stock}</h2>
                                                                        <div className="d-flex align-items-center justify-content-around w-100">
                                                                            <button className="w-50" onClick={() => {
                                                                                allValue.removeItem(index, i)
                                                                            }}>-1</button>
                                                                            <button className="w-50" onClick={() =>
                                                                                allValue.addItem(index, i)
                                                                            }>+1</button>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            searched.map((e, ind) =>
                                                                <>
                                                                    <div className="item">
                                                                        <NavLink to={`/candyShop_React/products/${id}/${e.name}`}>
                                                                            <img src={e.src} alt="" />
                                                                        </NavLink>
                                                                        <h2 className="mt-1">{e.name} : {e.price}$</h2>
                                                                        <h2>Items Left: {e.stock}</h2>
                                                                        <div className="d-flex align-items-center justify-content-around w-100">
                                                                            <button className="w-50" onClick={() => {
                                                                                allValue.removeItem(index, ind)
                                                                            }}>-1</button>
                                                                            <button className="w-50" onClick={() =>
                                                                                allValue.addItem(index, ind)
                                                                            }>+1</button>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )
                                                        }
                                                    </>
                                            }
                                        </motion.div>
                                    </>
                                    :
                                    <></>
                            }
                        </>
                    )
                }
            </motion.div>
        </>
    )
}