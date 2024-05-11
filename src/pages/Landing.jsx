import {UserBanner, Spinner, BlogsTable} from '../components'
import {useSelector} from "react-redux";
import {dashboardSelector} from "../slices/UserSlice";

import React, {useEffect, useState} from "react";
import {getBlogs, url} from "../services/service";
import {toast} from "react-toastify";
import {DeleteOutline, Edit} from "@mui/icons-material";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";


const Landing = () => {






    return (
        <>
            <div className='columns m-0 is-multiline'>


                <UserBanner/>

                <div className='column is-6 welcome__master p-5 my-4 '>
                    <Link to='/admin/blogs'>


                        <div className="card">
                            <div className="card-content">
                                <div className="content yekan">
                                    اضافه کردن پست جدید
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='column is-6 welcome__master p-5 my-4'>
                    <Link to='/admin/site-settings/info'>


                        <div className="card">
                            <div className="card-content">
                                <div className="content yekan">
                                    تنظیمات
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>



            </div>

        </>
    )
}
export default Landing;