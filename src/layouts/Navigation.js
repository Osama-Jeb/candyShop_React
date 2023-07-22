import { NavLink } from "react-router-dom"
import "./_navigation.scss"
import { Sidebar } from "./sidebar/Sidebar"

export const Navigation = () => {
    let myPages = ["drinks", "chips", "bars", "candy"]
    return (
        <>
            <div className="navBar">
                <NavLink to={"/"}>Home</NavLink>
                {
                    myPages.map((element, index) =>
                        <>
                            <NavLink to={`/products/${element}`}>{element}</NavLink>
                        </>
                    )
                }
                <div>
                <button type="button" className={`btn btn-purple text-light`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    SignIn/Up
                </button>
                <Sidebar />
                </div>
            </div>
        </>
    )
}
