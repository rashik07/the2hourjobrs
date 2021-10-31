import React, {useEffect, useState } from 'react';
import { Card, Avatar,Modal,Input, Button, Space  , Table} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined , DeleteOutlined  } from '@ant-design/icons';
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { viewEmployment,deleteEmployment} from '@/redux/actions/employmentAction';
import { ExclamationCircleOutlined,SearchOutlined } from "@ant-design/icons";




const Employment_details= ({viewEmployment, view_employment, employment , deleteEmployment,setloader}) => {
  const router = useRouter();

    useEffect(() => {
      
        viewEmployment();
     
        
      },[]);
      

    const columns = [
      {
        title: 'Name',
        dataIndex: 'company_name',
        key: 'company_name',
        width: '30%',

      },
      {
        title: 'Designation',
        dataIndex: 'designation',
        key: 'designation',
        width: '20%',

      },
      {
        title: 'department',
        dataIndex: 'department',
        key: 'address',

      },
      
      {
        title: 'responsibilities',
        dataIndex: 'responsibilities',
        key: 'responsibilities',

      },
      {
        title: 'company_location',
        dataIndex: 'company_location',
        key: 'company_location',

      },
      {
        title: 'From',
        dataIndex: 'employment_period_from',
        key: 'employment_period_from',
        width: '120px',

      },
      {
        title: 'To',
        dataIndex: 'employment_period_to',
        key: 'employment_period_to',
        width: '120px',
      },
      {
        title: 'Action',
        key: 'action',
 
        render: (details) => (
          <Space size="middle">
             <DeleteOutlined  key="ellipsis" onClick={()=> {deleteEmployment(details.id);setloader(true)}}/>
           
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