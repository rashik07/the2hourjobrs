import React, {useEffect, useState } from 'react';
import { Card, Avatar,Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined , DeleteOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { viewEmployment,deleteEmployment} from '@/redux/actions/employmentAction';
import { ExclamationCircleOutlined } from "@ant-design/icons";



const Employment_details= ({viewEmployment, view_employment, employment , deleteEmployment}) => {
  const router = useRouter();

    useEffect(() => {
      
        viewEmployment();
     
        
      },[]);
      
      const deleteEmploymentBtnClick = () => {
        const { confirm } = Modal;
    
        confirm({
          title: "Are you sure delete this project?",
          icon: <ExclamationCircleOutlined />,
          content: "Some descriptions",
          okText: "Yes",
          okType: "danger",
          cancelText: "No",
          onOk() {
            deleteEmployment(employment.id);
            window.location.reload();
          },
        });
      };
      
   
     
    const { Meta } = Card;
    
    return (

        <div>
                
            <div className="col-4 ">
           
                  <Card
                        style={{ width: 250, border: '1px solid whitesmoke', backgroundColor:'whitesmoke', marginBottom: 10, height: 168}}
                                  
                        actions={[
                                  
                        
                        <DeleteOutlined  key="ellipsis"  onClick={deleteEmploymentBtnClick}/>,
                          
                        ]}
                      
                  >
           
                  <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            
                        title={employment.company_name}
                        description={employment.designation}
                                
                  />
                            

                        </Card>
           
            </div>
               
              
               
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      view_employment: state.employment.view_employment,
      



    };
  };
  
  export default connect(mapStateToProps, {viewEmployment,deleteEmployment})(Employment_details);