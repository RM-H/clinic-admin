import MainLayout from "../layouts/MainLayout";
import * as React from "react";
import * as ReactDOM from "react-dom/client";


import {
    createBrowserRouter

} from "react-router-dom";

import {
    Landing,
    Login,
    SiteSettings,
    PasswordChange,
    SiteInfoSettings,

    About,

    Blogs,
    SingleBlog
} from '../pages'



export const router = createBrowserRouter([
    {
        path: '/admin',
        element: <MainLayout/>,

        children: [

            {
                path: '/admin',
                element: <Landing/>
            },
            {
                path: '/admin/site-settings',
                element: <SiteSettings/>
            },
            {
                path: '/admin/site-settings/info',
                element: <SiteInfoSettings/>
            },


            {
                path: '/admin/password-change',
                element: <PasswordChange/>
            },

            {
                path: '/admin/about',
                element: <About/>
            }
            ,

            {
                path: '/admin/blogs',
                element: <Blogs/>
            }
            ,
            {
                path: '/admin/blogs/:blogID',
                element: <SingleBlog/>
            }


        ]


    },

    {
        path: '/',
        element: <Login/>
    }

])