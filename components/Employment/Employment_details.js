import React, {useEffect, useState } from 'react';
import { Card, Avatar,Modal,Input, Button, Space  , Table} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined , DeleteOutlined  } from '@ant-design/icons';
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { viewEmployment,deleteEmployment} from '@/redux/actions/employmentAction';
import { ExclamationCircleOutlined,SearchOutlined } from "@ant-design/icons";
//import Highlighter from 'react-highlight-words';



const Employment_details= ({viewEmployment, view_employment, employment , deleteEmployment}) => {
  const router = useRouter();

    useEffect(() => {
      
        viewEmployment();
     
        
      },[]);
      
      // const deleteEmploymentBtnClick = () => {
      //   const { confirm } = Modal;
    
      //   confirm({
      //     title: "Are you sure delete this project?",
      //     icon: <ExclamationCircleOutlined />,
      //     content: "Some descriptions",
      //     okText: "Yes",
      //     okType: "danger",
      //     cancelText: "No",
      //     onOk() {
      //       deleteEmployment(employment.id);
      //       //window.location.reload();
      //     },
      //   });
      // };

    const columns = [
      {
        title: 'Name',
        dataIndex: 'company_name',
        key: 'company_name',
        width: '30%',
        //...this.getColumnSearchProps('name'),
      },
      {
        title: 'Designation',
        dataIndex: 'designation',
        key: 'designation',
        width: '20%',
       // ...this.getColumnSearchProps('age'),
      },
      {
        title: 'department',
        dataIndex: 'department',
        key: 'address',
      //  ...this.getColumnSearchProps('address'),
     //   sorter: (a, b) => a.address.length - b.address.length,
//sortDirections: ['descend', 'ascend'],
      },
      
      {
        title: 'responsibilities',
        dataIndex: 'responsibilities',
        key: 'responsibilities',
      //  ...this.getColumnSearchProps('address'),
     //   sorter: (a, b) => a.address.length - b.address.length,
//sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'company_location',
        dataIndex: 'company_location',
        key: 'company_location',
      //  ...this.getColumnSearchProps('address'),
     //   sorter: (a, b) => a.address.length - b.address.length,
//sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'From',
        dataIndex: 'employment_period_from',
        key: 'employment_period_from',
        width: '150px',
      //  ...this.getColumnSearchProps('address'),
     //   sorter: (a, b) => a.address.length - b.address.length,
//sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'To',
        dataIndex: 'employment_period_to',
        key: 'employment_period_to',
        width: '150px',
      //  ...this.getColumnSearchProps('address'),
     //   sorter: (a, b) => a.address.length - b.address.length,
//sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Action',
        key: 'action',
        
                                  
                        
         
        
        render: (details) => (
          <Space size="middle">
             <DeleteOutlined  key="ellipsis" onClick={()=> {deleteEmployment(details.id);
                                                      window.location.reload()}}/>
           
          </Space>
          
        ),
      },
    ];
    
    return (

        <div>
                <Table columns={columns} dataSource={view_employment} />
           
               
              
               
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      view_employment: state.employment.view_employment,
      



    };
  };
  
  export default connect(mapStateToProps, {viewEmployment,deleteEmployment})(Employment_details);