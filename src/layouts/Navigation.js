import { NavLink } from "react-router-dom"
import "./_navigation.scss"

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
                <button type="button" className={`btn btn-purple text-light`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        SignIn/Up
                    </button>
            </div>
        </>
    )
}
