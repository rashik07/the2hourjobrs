import React, {useEffect, useState } from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { connect } from "react-redux";

import { viewProject } from '@/redux/actions/projectAction';



const Add_project = ({viewProject, view_project, project}) => {
    useEffect(() => {
        viewProject();
      },[]);
      console.log(view_project);
      
    const { Meta } = Card;
    return (
        <div>
                
            <div className="col-4 ">
                  <Card
                        style={{ width: 250, border: '1px solid whitesmoke', backgroundColor:'whitesmoke', marginBottom: 10}}
                                
                        actions={[
                                
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
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
  
  export default connect(mapStateToProps, {viewProject})(Add_project);
/*export default Add_project;*/