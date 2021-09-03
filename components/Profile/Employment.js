
  
import Head from 'next/head';
import React, {useEffect, useState } from 'react';
import Navbar from '../../container/navbar/navbar';
import Sidebar from "../../container/sidebar/sidebar";
import { EditOutlined, EllipsisOutlined, SettingOutlined , DeleteOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { viewEmployment} from '@/redux/actions/employmentAction';
import {Form,Input, Button, Radio ,DatePicker,Typography,Divider, Space,TextArea ,Card,Avatar } from 'antd';
import Employment_details from 'components/Employment/Employment_details';
import Add_employment from 'components/Employment/Add_employment';

const Employment = ({viewEmployment, view_employment,employment}) => {
  const [loader, setloader] =  useState(false);
  useEffect(() => {
      
    viewEmployment();
    setloader(false);
  },[loader]);

    return (
        <div> 
              <Employment_details setloader={setloader}></Employment_details>
              <Add_employment  setloader={setloader}></Add_employment>
        </div>
    );
   
};

//export default Employment;
const mapStateToProps = (state) => {
  return {
    view_employment: state.employment.view_employment,
  };
};

export default connect(mapStateToProps, {viewEmployment })(Employment);
