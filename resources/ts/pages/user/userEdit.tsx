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

const UserCreate: React.FC = ({editUser, setIsLoading, getUsers, setIsEdit }: any) => {

    const inputRef: any = React.useRef()

    const [name, setName] = useState("")
    const [name_error, setNameError] = useState(false)
    const [email, setEmail] = useState("")
    const [email_error, setEmailError] = useState(false)
    const [password, setPassword] = useState("")
    const [password_error, setPasswordError] = useState(false)
    const [salary, setSalary] = useState("")
    const [salary_error, setSalaryError] = useState(false)
    const [img_name, setImgName] = useState("")

    const [uploadedImage, setUploadedImage] = useState("")
    // const [file, setFile] = useState(new Blob)
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
        if (validation()) {
            let postData = new FormData()
            postData.append("file", file)
            postData.append("img_name", img_name)
            postData.append("name", name)
            postData.append("email", email)
            postData.append("password", password)
            postData.append("salary", salary)
            axios
                .post("/api/usersUpdate", postData)
                .then((res) => {
                    setIsLoading(false);
                    getUsers()
                    closeModal()
                    console.log(res.data)
                })
                .catch((res) => {
                    alert("エラーです");
                    setIsLoading(false);
                })
        }
    }

    const validation = (): boolean => {
        let noProblem = true;
        setNameError(false)
        if (name === "") {
            setNameError(true)
            noProblem = false
        }
        setEmailError(false)
        if (!/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(email)) {
            setEmailError(true)
            noProblem = false
        }
        setPasswordError(false)
        if (!/^([a-zA-Z0-9]{8,})$/.test(password)) {
            setPasswordError(true)
            noProblem = false
        }
        setSalaryError(false)
        if (!/^([1-9]\d*|0)$/.test(salary)) {
            setSalaryError(true)
            noProblem = false
        }
        return noProblem;
    }

    const closeModal = (): void => {
        setIsEdit(false)
        setNameError(false)
        setEmailError(false)
        setPasswordError(false)
        setSalaryError(false)
    }

    useEffect(() => {
        setTimeout(() => {
            console.log(editUser)
        }, 10000);
    }, [])

    return (
        <div>
            <div onClick={() => closeModal()} className="cmn_modal_inner_close">×</div>
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
                        <div className={name_error ? 'error show' : 'error'}>名前を入力してください</div>
                    </li>
                    <li className="form_list_item">
                        <dt className="form_list_item_ttl">メール</dt>
                        <dd className="form_list_item_main"><input type="text" onChange={(e) => setEmail(e.target.value)} /></dd>
                        <div className={email_error ? 'error show' : 'error'}>メールアドレスを適切な形で入力してください</div>
                    </li>
                    <li className="form_list_item">
                        <dt className="form_list_item_ttl">パスワード</dt>
                        <dd className="form_list_item_main"><input type="text" onChange={(e) => setPassword(e.target.value)} /></dd>
                        <div className={password_error ? 'error show' : 'error'}>パスワードを8文字以上の英数字で入力してください</div>
                    </li>
                    <li className="form_list_item">
                        <dt className="form_list_item_ttl">日給</dt>
                        <dd className="form_list_item_main"><input type="text" onChange={(e) => setSalary(e.target.value)} /></dd>
                        <div className={salary_error ? 'error show' : 'error'}>日給を数値で入力してください</div>
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