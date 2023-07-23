import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./_sidebar.scss";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Bakset } from "../../App";


export const Sidebar = () => {
    const allValue = useContext(Bakset);
    const [basketInfo, setBasketInfo] = allValue.basketInfo
    const [totalPrice, setTotalPrice] = allValue.totalPrice

    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    }

    const SidebarItem = (element, action) => {
        const uniqueIndex = element.id - 1;

        switch (element.type) {
            case "drinks":
                action === "add" ? allValue.addItem(0, uniqueIndex) : allValue.removeItem(0, uniqueIndex);
                break;
            case "chips":
                action === "add" ? allValue.addItem(1, uniqueIndex) : allValue.removeItem(1, uniqueIndex);
                break;
            case "bars":
                action === "add" ? allValue.addItem(2, uniqueIndex) : allValue.removeItem(2, uniqueIndex);
                break;
            case "candy":
                action === "add" ? allValue.addItem(3, uniqueIndex) : allValue.removeItem(3, uniqueIndex);
                break;
            default:
                break;
        }
    };

    const clearBasket = () => {
        setBasketInfo([])
        setTotalPrice(0)
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
                                                                    SidebarItem(element, "remove");
                                                                }}>-</button>
                                                                <h2 className="text-dark fw-bold">{10 - element.stock}</h2>
                                                                <button className="" onClick={() => {
                                                                    SidebarItem(element, "add");
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
                    <div>
                        <h1 className="choco">Total: {totalPrice}$</h1>
                    </div>
                </div>
            </div>

        </>
    )
}