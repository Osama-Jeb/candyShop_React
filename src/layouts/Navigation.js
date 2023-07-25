import { NavLink } from "react-router-dom"
import "./_navigation.scss"
import { Sidebar } from "./sidebar/Sidebar"
import { useContext } from "react"
import { Bakset } from "../App"

export const Navigation = () => {
    let myPages = ["drinks", "chips", "bars", "candy"]
    const allValue = useContext(Bakset);
    const [users, setUsers] = allValue.users

    let someOne = users.find(element => element.connected === true);

    const disconnect = () => {
        let tempUsers = [...users];
        let someOneIndex = users.findIndex(element => element.connected === true);
        tempUsers[someOneIndex].connected = false;
        setUsers(tempUsers);
    }
    return (
        <>
            <div className="navBar ">
                <NavLink to={"/candyShop_React/"}>Home</NavLink>
                {
                    myPages.map((element, index) =>
                        <>
                            <NavLink to={`/candyShop_React/products/${element}`}>{element}</NavLink>
                        </>
                    )
                }
                <div>
                    <div className="d-flex align-items-center gap-1">
                        {
                            !someOne ?
                                <>
                                    <h4 className="m-0">GUEST</h4>
                                    <button type="button" className={`btn btn-purple text-light`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        SignIn/Up
                                    </button>
                                </>
                                :
                                <>
                                    <h4>{someOne.userName}</h4>
                                    <button type="button" className={`btn btn-purple text-light`} onClick={disconnect}>
                                        Disconnect
                                    </button>
                                </>
                        }
                    </div>
                    <Sidebar />
                </div>
            </div>
        </>
    )
}
