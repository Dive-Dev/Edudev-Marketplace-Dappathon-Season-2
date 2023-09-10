import React, { useState } from "react";

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    async function handleSubmit(e){
        e.preventDefault()
        await fetch("http://localhost:3001/auth/signup", {
            method: "POST",
            body: JSON.stringify({email: email, password: password}),
            headers: {'Content-type': 'application/json'}
        })
    }
    return (
        <>
            <div className="container">
                <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content rounded-4 shadow">
                            <div className="modal-header p-5 pb-4 border-bottom-0">
                                <h1 className="fw-bold mb-0 fs-2">Sign up for free</h1>
                            </div>
                            <div className="modal-body p-5 pt-0">
                                <form className="" onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input className="form-control rounded-3" type="email" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} value={email} />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                    <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;