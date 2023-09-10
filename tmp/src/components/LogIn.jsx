import React, { useState } from "react";import { useNavigate } from 'react-router-dom';

function Login() {
    // fetch("http://localhost:3000")
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    async function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3001/auth/login", {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: { "Content-type": "application/json" }
        }).then((response) => {
            // console.log(response.json);
            if (response.ok){
                // alert("done")
                navigate('/main');
            }
        })
    }
    return (
        <>
            <div className="container">
                <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content rounded-4 shadow">
                            <div className="modal-header p-5 pb-4 border-bottom-0">
                                <h1 className="fw-bold mb-0 fs-2">LogIn</h1>
                            </div>
                            <div className="modal-body p-5 pt-0">
                                <form className="" onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} value={email} />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                    <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;