import Head from 'next/head';
import React, {useEffect, useState } from 'react';
import Navbar from '../../container/navbar/navbar';
import Sidebar from "../../container/sidebar/sidebar";
import { EditOutlined, EllipsisOutlined, SettingOutlined , DeleteOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { viewEmployment } from '@/redux/actions/employmentAction';
import {Form,Input, Button, Radio ,DatePicker,Typography,Divider, Space,TextArea ,Card,Avatar } from 'antd';
import Employment_details from 'components/Employment/Employment_details';
import Add_employment from 'components/Employment/Add_employment';

const Employment = ({viewEmployment, view_employment}) => {
  useEffect(() => {
      
    viewEmployment();
  },[]);
  console.log(view_employment);

    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
    const { Title } = Typography;
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
  
    const onFormLayoutChange = ({ layout }) => {
      setFormLayout(layout);
    };

    const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 12,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
      const { Meta } = Card;
    return (
        <div>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.1/antd.min.css"
                />
           
                <title>Employment Info</title>
            </Head>
            <Navbar />
            <div className="container">
            <div className="row">
            <div className="col-md-3 ">
                <Sidebar />    
            </div>
            

                <main className="col-md-9   my-4">
               
                        <div className="row">
                        {
                          
                                  view_employment.map(employment =>  <Employment_details 
                                  key={view_employment.id} 
                                  
                                
                                  employment={employment}></Employment_details>)
                            }  
                           
        
                             
                        </div> 
                            <Add_employment></Add_employment>
                   

                </main>
            </div>
            </div>
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