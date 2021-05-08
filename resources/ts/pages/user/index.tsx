import React, { useState, useEffect } from 'react';
import axios from 'axios';

type UserType = {
    name:string,
    email:string
}

const userDefault: UserType = {
    name:"noname",
    email:"noemail",
}

const User = () => {

    const [user, setuser] = useState(userDefault)

    const getLoginUser = () => {
        axios.get("/api/loginuser").then((res) => {
            setuser(res.data)
        });
    }

    useEffect(() => {
        getLoginUser()
    }, [])

    return (
        <div>
            <h2>User</h2>
            私の名前は<span>{user.name}</span><br />
            メールアドレスは<span>{user.email}</span>
            <br />
            <br />
            <a href="/logout">ログアウト</a>
        </div>
    )
}

export default User











