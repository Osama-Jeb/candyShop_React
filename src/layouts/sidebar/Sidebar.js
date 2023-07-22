import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./_sidebar.scss";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Bakset } from "../../App";


export const Sidebar = () => {
    const allValue = useContext(Bakset);
    const [allInfo, setAllInfo] = allValue.allInfo;
    const [basketInfo, setBaksetInfo] = allValue.basketInfo


    function toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    }

    return (
        <>
            <div className="main-content">
                <button className="sidebar-toggle" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <div className="sidebar">
                    <h1>CONTENT HERE</h1>
                    <div className="test">
                        {
                            basketInfo.length === 0 ?
                                <>
                                    <h1>SHOP SHOP SHOP</h1>
                                </>
                                :
                                <>
                                    {
                                        basketInfo.map((element, index) =>
                                            <>
                                                <div className="d-flex align-items-center m-1">
                                                    <img style={{ width: "100px" }} src={element.src} alt="" />

                                                    <div className="d-flex align-items-center flex-column">
                                                        <h4>{element.name}</h4>
                                                        <div className="d-flex align-items-center">
                                                            <button>-</button>
                                                            <h5>{10 - element.stock}</h5>
                                                            <button>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}