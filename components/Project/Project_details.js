import React, {useEffect, useState } from 'react';
import { Card, Avatar,Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined , DeleteOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { viewProject , deleteProject} from '@/redux/actions/projectAction';
import { ExclamationCircleOutlined } from "@ant-design/icons";



const Project_details = ({viewProject, view_project, project,deleteProject}) => {
  const router = useRouter();

    useEffect(() => {
      
        viewProject();
        //setUpdateList(false);
        
      },[]);
      
  
      //console.log(view_project);
      const deleteProjectBtnClick = () => {
        const { confirm } = Modal;
    
        confirm({
          title: "Are you sure delete this project?",
          icon: <ExclamationCircleOutlined />,
          content: "Some descriptions",
          okText: "Yes",
          okType: "danger",
          cancelText: "No",
          onOk() {
            deleteProject(project.id);
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
                                  
                        
                        <DeleteOutlined  key="ellipsis" onClick={deleteProjectBtnClick}/>,
                          
                        ]}
                      
                  >
           
                  <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            
                        title={project.title}
                        description={project.description}
                                
                  />
                            

                        </Card>
           
            </div>
               
              
               
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      view_project: state.project.view_project,
      



    };
  };
  
  export default connect(mapStateToProps, {viewProject,deleteProject})(Project_details);
