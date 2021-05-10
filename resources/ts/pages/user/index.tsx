import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import axios from 'axios';

const User: React.FC = () => {
    return (
        <div>
            <div className="cmn_pageTitle">出勤者一覧</div>
            <div v-show="isShow" className="table">
                <ul className="table_row ar">
                    <li className="table_row_list img_name pl-2">画像</li>
                    <li className="table_row_list name">名前</li>
                    <li className="table_row_list email d-none d-md-block">メール</li>
                    <li className="table_row_list btn">　</li>
                </ul>
                <ul v-for="user in users" className="table_row">
                    <li className="table_row_list img_name">
                        <img v-if="user.img_name" />
                        <img v-if="!user.img_name" src="/assets/noimage.png" />
                    </li>
                    <li className="table_row_list name">user.name</li>
                    <li className="table_row_list email d-none d-md-block">user.email</li>
                    <li className="table_row_list btn">
                        <button className="cmn_btn_sub mr-1">編集</button>
                        <button className="cmn_btn_delete">削除</button>
                    </li>
                </ul>
            </div>

            <div className="footbar">
                <div className="container">
                    <button className="footbar_btn">新規登録</button>
                </div>
            </div>

            {/* <div v-if="loading" className="vue-loading-wrap">
                <ReactLoading type="spin" color="black" height={100} width={100} />
            </div> */}

        </div >
    )
}

export default User;