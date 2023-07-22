import { useState } from "react";
import "./_modal.scss";

export const Modal = () => {
    const [users, setUsers] = useState([]);

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [rePass, setRePass] = useState("");

    const [signEmail, setSignEmail] = useState("");
    const [signPass, setSignPass] = useState("");

    const userInfo = (event) => {
        switch (event.target.placeholder) {
            case "Full Name":
                setName(event.target.value);
                break;
            case "Username":
                setUserName(event.target.value);
                break;
            case "Phone Number":
                setPhone(event.target.value);
                break;
            case "Email":
                setEmail(event.target.value);
                break;
            case "Password":
                setPass(event.target.value);
                break;
            case "Confirm Password":
                setRePass(event.target.value);
                break;
            default:
                break;
        }
    }

    const createUser = () => {
        if (name && userName && phone && email.includes("@") && pass === rePass && pass.length >= 4) {
            let newUser = {
                name: name,
                username: userName,
                number: phone,
                email: email,
                password: pass,
                connected: false,
            }
            let temp = [...users];
            temp.push(newUser);
            setName("");
            setUserName("");
            setPhone("");
            setEmail("");
            setPass("");
            setRePass("");
            setUsers(temp);
            let tabListBtn = document.querySelectorAll(".navBtn");
            tabListBtn[1].click();
        }
    }

    const signIn = () => {
        for (let index = 0; index < users.length; index++) {
            let user = users[index];
            console.log(index, user.email, signEmail, user.password, signPass)
            if (user.email === signEmail && user.password == signPass) {
                document.querySelector(".modClose").click();
                setSignEmail("");
                setSignPass("");
            }

        }
    }
    return (
        <>
            <div className="myModal">
                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
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
                                                    <input type="text" required placeholder="Full Name" value={name} onChange={userInfo} />
                                                    <input type="text" required placeholder="Username" value={userName} onChange={userInfo} />
                                                    <input type="number" required placeholder="Phone Number" value={phone} onChange={userInfo} />
                                                    <input type="email" required placeholder="Email" value={email} onChange={userInfo} />
                                                    <input type="password" required placeholder="Password" value={pass} onChange={userInfo} />
                                                    <input type="password" required placeholder="Confirm Password" value={rePass} onChange={userInfo} />
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