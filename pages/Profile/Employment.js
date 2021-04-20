import Head from 'next/head';
import React, { useState } from 'react';
import Navbar from '../../container/navbar/navbar';
import Sidebar from "../../container/sidebar/sidebar";
import Add_experience from "../../components/Add_experience"
import { Select } from "antd";
import {Form,Input, Button, Radio ,DatePicker,Typography,Divider,TextArea  } from 'antd';

const Employment = () => {
    return (
        <div>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.1/antd.min.css"
                />
           
                <title>Profile Info</title>
            </Head>
            <Navbar />
            <div className="container">
            <div className="row">
            <div className="col-md-3 ">
                <Sidebar />    
            </div>
            

                <main className="col-md-9   my-4">
                    
                        <div className="row">
                            <div className="col-4">
                                <Add_experience />
                            </div>
                            <div className="col-4">
                                <Add_experience />
                            </div>
                            <div className="col-4">
                                <Add_experience />
                            </div>
                            
                        </div> 
                
                   

                </main>
            </div>
            </div>
        </div>
    );
};

export default Employment;