import React, { useState, useEffect } from 'react';
import moment from 'moment'
import axios from 'axios';

type userType = {
    img_name: string
    name: string
    email: string
    password: string
    salary: string
}

const userDefault: userType = {
    img_name: "",
    name: "",
    email: "",
    password: "",
    salary: "",
}

const UserCreate: React.FC = ({setIsLoadingTrue, setIsLoadingFalse}:any) => {

    const inputRef: any = React.useRef()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [salary, setSalary] = useState("")
    const [img_name, setImgName] = useState("")

    const [uploadedImage, setUploadedImage] = useState("")
    const [file, setFile] = useState(new Blob)

    const noImage = (e: any): void => {
        e.target.src = "/assets/noimage.png";
    }

    const previewImg = (): void => {
        inputRef.current.click()
    }

    const fileSelected = (event: any): void => {
        setImgName(moment(new Date()).format("YYYYMMDDHHmmss") + event.target.files[0].name)
        setFile(event.target.files[0])
        let reader = new FileReader()
        reader.onload = (e: any) => {
            setUploadedImage(e.target.result)
        }
        reader.readAsDataURL(event.target.files[0]);
    }

    const submit = (e: any): void => {
        e.preventDefault();
        const user = {
            name: name,
            email: email,
            password: password,
            salary: salary,
            file: file,
        }

        
        setIsLoadingTrue();
        // this.$parent.loading = true;
        let postData = new FormData()
        postData.append("file", file)
        postData.append("img_name", img_name)
        postData.append("name", name)
        postData.append("email", email)
        postData.append("password", password)
        postData.append("salary", salary)
        axios
            .post("/api/users", postData)
            .then((res) => {
                console.log(res.data)
                setIsLoadingFalse();
                // this.$parent.editmodal = false;
                // this.$parent.getusers();
                // this.$parent.loading = false;
            })
            .catch((res) => {
                alert("エラーです");
                // this.$parent.loading = false;
                setIsLoadingFalse();
            });

    }
    useEffect(() => {
    }, [])

    return (
        <div className="">
        <button onClick={setIsLoadingTrue}>おん</button>
        <br />
        <br />
        <button onClick={setIsLoadingFalse}>おふ</button>

        <form onSubmit={submit} className="form">
            <div className="form_ttl">出勤者登録</div>
            <ul className="form_list">
                <li className="form_list_item">
                    <dt className="form_list_item_ttl">画像</dt>
                    <dd className="form_list_item_main">
                        <img onClick={previewImg} src={uploadedImage} onError={noImage} />
                    </dd>
                    <input ref={inputRef} className="d-none" type="file" accept="image/*" onChange={fileSelected} />
                </li>
                <li className="form_list_item">
                    <dt className="form_list_item_ttl">名前</dt>
                    <dd className="form_list_item_main"><input type="text" onChange={(e) => setName(e.target.value)} /></dd>
                    <div className="error">名前を入力してください</div>
                </li>
                <li className="form_list_item">
                    <dt className="form_list_item_ttl">メール</dt>
                    <dd className="form_list_item_main"><input type="text" onChange={(e) => setEmail(e.target.value)} /></dd>
                    <div className="error">メールアドレスを適切な形で入力してください</div>
                </li>
                <li className="form_list_item">
                    <dt className="form_list_item_ttl">パスワード</dt>
                    <dd className="form_list_item_main"><input type="text" onChange={(e) => setPassword(e.target.value)} /></dd>
                    <div className="error">パスワードを8文字以上の英数字で入力してください</div>
                </li>
                <li className="form_list_item">
                    <dt className="form_list_item_ttl">日給</dt>
                    <dd className="form_list_item_main"><input type="text" onChange={(e) => setSalary(e.target.value)} /></dd>
                    <div className="error">日給を数値で入力してください</div>
                </li>
            </ul>
            <div className="form_btn">
                <button type="submit" className="cmn_btn_sub">新規登録</button>
            </div>
        </form>
        </div>

    )
}

export default UserCreate;