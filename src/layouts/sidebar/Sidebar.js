import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./_sidebar.scss";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Bakset } from "../../App";


export const Sidebar = () => {
    const allValue = useContext(Bakset);
    const basketInfo = allValue.basketInfo[0]

    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    }

    const SidebarItem = (element, action) => {
        const uniqueIndex = element.id - 1;

        switch (element.type) {
            case "Drink":
                action === "add" ? allValue.addItem(0, uniqueIndex) : allValue.removeItem(0, uniqueIndex);
                break;
            case "chip":
                action === "add" ? allValue.addItem(1, uniqueIndex) : allValue.removeItem(1, uniqueIndex);
                break;
            case "bar":
                action === "add" ? allValue.addItem(2, uniqueIndex) : allValue.removeItem(2, uniqueIndex);
                break;
            case "candy":
                action === "add" ? allValue.addItem(3, uniqueIndex) : allValue.removeItem(3, uniqueIndex);
                break;
            default:
                break;
        }
    };



    return (
        <>
            <div className="main-content">
                <button className="sidebar-toggle btn btn-purple text-warning" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <div className="sidebar">
                    <div className="sidebarScroll">
                        {
                            basketInfo.length === 0 ?
                                <>
                                    <h1>SHOP SHOP SHOP </h1>
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
                                                            <h4>{element.name}</h4>
                                                            <div className="d-flex w-100 justify-content-around align-items-center">
                                                                <button onClick={() => {
                                                                    SidebarItem(element, "remove");
                                                                }}>-</button>
                                                                <h5>{10 - element.stock}</h5>
                                                                <button onClick={() => {
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
                        <h1>CHECKOUT {allValue.totalPrice}</h1>
                    </div>
                </div>
            </div>

        </>
    )
}