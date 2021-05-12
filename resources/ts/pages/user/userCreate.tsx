import React, { useState, useEffect } from 'react';
import axios from 'axios';

type userType = {
    id: number
    img_name: string
    name: string
    email: string
    password: string
    salary: string
}

const userDefault: userType = {
    id: 0,
    img_name: "",
    name: "",
    email: "",
    password: "",
    salary: "",
}

const UserCreate: React.FC = () => {
    
    const [user, setuser] = useState(userDefault)
    const [uploadedImage, setUploadedImage] = useState("")
    const [file, setFile] = useState("")
    // const [isLoading, setIsLoading] = useState(true)
    // const [isShow, setIsShow] = useState(false)

    // const getUsers = () => {
    //     axios.get("/api/users").then((res) => {
    //         setUsers(res.data);
    //         setIsLoading(false);
    //         setIsShow(true);
    //     });
    // }

    // const deleteuser = (id: number, name: string) => {
    //     if (confirm("「" + name + "」を削除しますか？")) {
    //         setIsLoading(true);
    //         axios.delete("/api/users/" + id).then((res) => {
    //             getUsers();
    //             setIsLoading(false);
    //         });
    //     }
    // }

    const previewImg = (): void => {

    }

    const fileSelected = () => {
        alert();
    }

    useEffect(() => {
        // getUsers()
    }, [])


    return (
        <form className="form">
            <div className="form_ttl">出勤者登録</div>
            <ul className="form_list">
                <li className="form_list_item">
                    <dt className="form_list_item_ttl">画像</dt>
                    <dd className="form_list_item_main">
                        <img onClick={() => previewImg()} src={uploadedImage}/>
                    </dd>
                    <input className="d-none" type="file" accept="image/*" onChange={() => fileSelected()} />
                </li>
                <li className="form_list_item">
                    <dt className="form_list_item_ttl">名前</dt>
                    <dd className="form_list_item_main"><input type="text" /></dd>
                    <div className="error">名前を入力してください</div>
                </li>
                <li className="form_list_item">
                    <dt className="form_list_item_ttl">メール</dt>
                    <dd className="form_list_item_main"><input type="text" /></dd>
                    <div className="error">メールアドレスを適切な形で入力してください</div>
                </li>
                <li className="form_list_item">
                    <dt className="form_list_item_ttl">パスワード</dt>
                    <dd className="form_list_item_main"><input type="text" /></dd>
                    <div className="error">パスワードを8文字以上の英数字で入力してください</div>
                </li>
                <li className="form_list_item">
                    <dt className="form_list_item_ttl">日給</dt>
                    <dd className="form_list_item_main"><input type="text" /></dd>
                    <div className="error">日給を数値で入力してください</div>
                </li>
            </ul>
            <div className="form_btn">
                <button type="submit" className="cmn_btn_sub">新規登録</button>
            </div>
        </form>
    )
}

export default UserCreate;