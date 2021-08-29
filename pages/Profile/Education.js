import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Navbar from '../../container/navbar/navbar';
import Sidebar from "../../container/sidebar/sidebar";
import {Form,Input, Button, Radio ,DatePicker,Typography,Divider,TextArea,InputNumber ,Select } from 'antd';

import Academic_info from 'components/Education/Academic_info';
import Training from 'components/Education/Training';
import ProfessionalQualification from 'components/Education/ProfessionalQualification';

const Education = ( ) => {
  
  
    
   
   
      return (
          <div>
              <Head>
                  <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.1/antd.min.css"
                  />
             
                  <title>Education Info</title>
              </Head>
              <Navbar />
              <div className="container">
              <div className="row">
              <div className="col-md-3 ">
                  <Sidebar />    
              </div>
              
  
                  <main className="col-md-9   my-4">

                          <Academic_info/>
                          <Training/>
                          <ProfessionalQualification/>
                           
                  </main>
              </div>
              </div>
          </div>
    );
};

;

export default Education;