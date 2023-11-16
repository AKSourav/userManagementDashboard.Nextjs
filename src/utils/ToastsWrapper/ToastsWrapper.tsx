"use client"
import React, { ReactNode } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastsWrapper=({children}:{children:ReactNode})=>{
    return(
        <>
            <ToastContainer/>
            {children}
        </>
    )
}

export {toast};
export default ToastsWrapper;
