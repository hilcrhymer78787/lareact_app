import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import UserCreate from './userCreate';
import axios from 'axios';


type userType = {
    id: number
    name: string
    email: string
    salary: number
    img_name:string
}

const initialState: userType[] = []

const User: React.FC = () => {

    const [users, setUsers] = useState(initialState)
    const [isLoading, setIsLoading] = useState(true)
    const [isShow, setIsShow] = useState(false)
    const [isCreate, setIsCreate] = useState(false)

    const getUsers = () => {
        axios.get("/api/users").then((res) => {
            setUsers(res.data);
            setIsLoading(false);
            setIsShow(true);
        });
    }

    const deleteuser = (id: number, name: string) => {
        if (confirm("「" + name + "」を削除しますか？")) {
            setIsLoading(true);
            axios.delete("/api/users/" + id).then((res) => {
                getUsers();
                setIsLoading(false);
            });
        }

    }

    const noImage = (e: any): void => {
        e.target.src = "/assets/noimage.png";
    }

    const create = () => {
        setIsCreate(true)
    }

    const setIsLoadingTrue = () => {
        setIsLoading(true)
    }

    const setIsLoadingFalse = () => {
        setIsLoading(false)
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <div>
            <div className="cmn_pageTitle">出勤者一覧</div>
            <div className={isShow ? 'table show' : 'table'}>
                <ul className="table_row ar">
                    <li className="table_row_list img_name pl-2">画像</li>
                    <li className="table_row_list name">名前</li>
                    <li className="table_row_list email d-none d-md-block">メール</li>
                    <li className="table_row_list btn">　</li>
                </ul>
                {users.map((user, index) => (
                    <ul className="table_row" key={index.toString()}>
                        <li className="table_row_list img_name">
                            <img onError={noImage} src={'/storage/' + user.img_name}/>
                        </li>
                        <li className="table_row_list name">{user.name}</li>
                        <li className="table_row_list email d-none d-md-block">{user.email}</li>
                        <li className="table_row_list btn">
                            <button className="cmn_btn_sub mr-1">編集</button>
                            <button className="cmn_btn_delete" onClick={() => deleteuser(user.id, user.name)}>削除</button>
                        </li>
                    </ul>
                ))}
            </div>

            <div className="footbar">
                <div className="container">
                    <button className="footbar_btn" onClick={() => create()}>新規登録</button>
                </div>
            </div>

            <div className={isCreate ? 'cmn_modal active' : 'cmn_modal'}>
                <div className="cmn_modal_inner">
                    <div onClick={() => setIsCreate(false)} className="cmn_modal_inner_close">×</div>
                    <UserCreate setIsLoadingTrue={setIsLoadingTrue} setIsLoadingFalse={setIsLoadingFalse}/>
                </div>
            </div>

            <div className={isLoading ? 'react-loading-wrap show' : 'react-loading-wrap'}>
                <ReactLoading type="spin" color="black" height={100} width={100} />
            </div>

        </div >
    )
}

export default User;