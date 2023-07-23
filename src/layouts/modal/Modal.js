import { useContext, useState } from "react";
import "./_modal.scss";
import { Bakset } from "../../App";

export const Modal = () => {
    const allValue = useContext(Bakset);
    const [users, setUsers] = allValue.users;

    const [user, setUser] = useState({
        name: "",
        userName: "",
        phone: "",
        email: "",
        pass: "",
        rePass: "",
        connected: false,
    })

    //// Courtesy of Chat GPT
    const emptyUserValues = (object) => {
        for (const key in object) {
            object[key] = ""; // You can set it to null or any other default value as needed
        }
    };

    const [signEmail, setSignEmail] = useState("");
    const [signPass, setSignPass] = useState("");

    const userInfo = (event) => {
        switch (event.target.placeholder) {
            case "Full Name":
                setUser(prev => ({
                    ...prev, name: event.target.value
                }))
                break;
            case "Username":
                setUser(prev => ({
                    ...prev, userName: event.target.value
                }))
                break;
            case "Phone Number":
                setUser(prev => ({
                    ...prev, phone: event.target.value
                }))
                break;
            case "Email":
                setUser(prev => ({
                    ...prev, email: event.target.value
                }))
                break;
            case "Password":
                setUser(prev => ({
                    ...prev, pass: event.target.value
                }))
                break;
            case "Confirm Password":
                setUser(prev => ({
                    ...prev, rePass: event.target.value
                }))
                break;
            default:
                break;
        }
    }

    const createUser = () => {
        if (user.name && user.userName && user.phone && user.email.includes("@") && user.pass === user.rePass) {
            let temp = [...users];
            let newUser = { ...user }
            temp.push(newUser);

            emptyUserValues(user);

            setUsers(temp);
            // So I can Pass to the other tabList
            let tabListBtn = document.querySelectorAll(".navBtn");
            tabListBtn[1].click();
        }
    }

    const signIn = () => {
        let tempUsers = [...users]
        for (let index = 0; index < tempUsers.length; index++) {
            let element = tempUsers[index];
            if (element.email === signEmail && element.pass === signPass) {
                tempUsers[index].connected = true;
                document.querySelector(".modClose").click();
                console.log(element)
                setSignEmail("");
                setSignPass("");

            }
        }
        setUsers(tempUsers)
    }
    return (
        <>
            <div className="myModal">
                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">WELCOME</h1>
                                <button type="button" className="modClose btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            {/* Mytabs */}
                            <div className="modal-body myTabs">
                                <div>
                                    <ul className="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link navBtn active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                                Sign Up
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link navBtn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                                Sign In
                                            </button>
                                        </li>

                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="signUpHolder tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>


                                            <div className="d-flex align-items-center flex-column gap-2">
                                                <form action="" className="d-flex align-items-center flex-column">
                                                    <input type="text" required placeholder="Full Name" value={user.name} onChange={userInfo} />
                                                    <input type="text" required placeholder="Username" value={user.userName} onChange={userInfo} />
                                                    <input type="number" required placeholder="Phone Number" value={user.phone} onChange={userInfo} />
                                                    <input type="email" required placeholder="Email" value={user.email} onChange={userInfo} />
                                                    <input type="password" required placeholder="Password" value={user.pass} onChange={userInfo} />
                                                    <input type="password" required placeholder="Confirm Password" value={user.rePass} onChange={userInfo} />
                                                </form>

                                                <button type="button" className="btn btn-purple text-light rounded-pill" onClick={createUser}>Sign UP</button>

                                            </div>
                                        </div>
                                        <div className="signInHolder tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>

                                            <div className="d-flex align-items-center flex-column gap-2">
                                                <form action="" className="d-flex align-items-center flex-column">
                                                    <input type="email" required placeholder="Enter Your Email" value={signEmail} onChange={(e) => {
                                                        setSignEmail(e.target.value)
                                                    }} />
                                                    <input type="password" required placeholder="Enter Your Password" value={signPass} onChange={(e) => {
                                                        setSignPass(e.target.value);
                                                    }} />
                                                </form>
                                                <button type="button" className="btn btn-purple text-light rounded-pill" onClick={signIn}>Sign IN</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}