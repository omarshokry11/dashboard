import React, {useEffect, useState} from 'react';

import "./style/Login.scss";
import API from "../utilize/API";


export default function Login() {
    const [form, setForm] = useState({email: "", password: ""});
    const [error, setError] = useState("");

    function handleSubmit() {
        API("auth/login", "POST", form)
            .then(({ data, status }) => {
                if (status === 200) {
                    localStorage.setItem("access-token", data?.user?.token);
                    localStorage.setItem("user", JSON.stringify(data.user));

                    setTimeout(() => {
                        window.location.replace("/")
                    }, 1000)
                } else {
                    setError(data?.message);
                }
            })
    }

    useEffect(() => {
        if (localStorage.getItem("access-token")) {
            window.location.replace("/")
        }
    }, []);

    return(
        <div className="login">
            {error ? <span className="alert-danger">{error}</span> : null}
            <div className="main-login">
                <h1 className="title">LOG IN</h1>
                <input type="text" placeholder="Enter E-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input type="password" placeholder="Enter Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <button className="btn" type="submit" onClick={() => handleSubmit()}>LOGIN</button>
            </div>
        </div>
    );
}
