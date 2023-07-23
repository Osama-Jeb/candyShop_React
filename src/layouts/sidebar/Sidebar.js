import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./_sidebar.scss";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Bakset } from "../../App";


export const Sidebar = () => {
    const allValue = useContext(Bakset);
    const [basketInfo, setBasketInfo] = allValue.basketInfo;
    const [totalPrice, setTotalPrice] = allValue.totalPrice;
    const user = allValue.users[0];

    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    }

    const clearBasket = () => {
        let tempBask = [...basketInfo];
        for (let index = 0; index < tempBask.length; index++) {
            tempBask[index].stock = 10;
        }
        setBasketInfo([])
        setTotalPrice(0)
    }

    const checkOut = () => {
        let someOne = user.find(element => element.connected === true);
        console.log(someOne);
        if (someOne === undefined) {
            alert("Please Sign in before checking out your groceries")
        } else {
            setBasketInfo([])
            setTotalPrice(0)
            setTimeout(() => {
                alert("Thanks for buy from our store")
            }, 1000);
        }
    }

    return (
        <>
            <div className="main-content">
                <button className="sidebar-toggle btn btn-purple text-warning" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <div className="sidebar">
                    <button className="btn fw-bolder fs-5" onClick={clearBasket}>
                        Empty Your List : <FontAwesomeIcon className="text-danger" icon={faTrash} />
                    </button>
                    <div className="sidebarScroll">
                        {
                            basketInfo.length === 0 ?
                                <>
                                    <h1 className="shop choco text-center">SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP 
                                    SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP 
                                    SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP SHOP</h1>
                                </>
                                :
                                <>
                                    <div>
                                        {
                                            basketInfo.map((element, index) =>
                                                <>
                                                    <div className="basketItem d-flex align-items-center justify-content-around m-1">
                                                        <img src={element.src} alt="" />
                                                        <div className="d-flex align-items-center flex-column">
                                                            <h4 className="text-light fw-bold text-uppercase">{element.name}</h4>
                                                            <div className="d-flex w-100  gap-1 align-items-center">
                                                                <button className="" onClick={() => {
                                                                    allValue.SidebarItem(element, "remove");
                                                                }}>-</button>
                                                                <h2 className="text-dark fw-bold">{10 - element.stock}</h2>
                                                                <button className="" onClick={() => {
                                                                    allValue.SidebarItem(element, "add");
                                                                }}>+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>
                                </>
                        }
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <h1 className="choco">Total: {totalPrice}$</h1>
                        <button className="btn btn-purple text-light fs-4 fw-bolder rounded-pill ps-1 pe-1"
                        onClick={checkOut}
                        >CHECKOUT</button>
                    </div>
                </div>
            </div>

        </>
    )
}