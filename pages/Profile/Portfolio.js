import Head from 'next/head';
import React, {useEffect , useState} from 'react';
import Navbar from '../../container/navbar/navbar';
import Sidebar from "../../container/sidebar/sidebar";
import { connect } from "react-redux";
import { viewProject , createProject} from '@/redux/actions/projectAction';
import Project_details from 'components/Project/Project_details';
import Add_project from 'components/Project/Add_project';


const Portfolio = ({viewProject, view_project}) => {
  const [updateList, setUpdateList]=useState(true);
  useEffect(() => {
      
    viewProject();
  },[]);
    return (
        <div>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.15.1/antd.min.css"
                />
           
                <title>Portfolio Info</title>
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
                                  view_project.map(project =>  <Project_details 
                                  key={view_project.id} 
                                  
                                  setUpdateList={setUpdateList}
                                  project={project}></Project_details>)
                            }  
                        </div>
                        <Add_project></Add_project>
                   

                </main>
            </div>
            </div>
        </div>
    );
};

/*export default Portfolio;*/
const mapStateToProps = (state) => {
    return {
      view_project: state.project.view_project,
     
    
    

    };
  };
  
  export default connect(mapStateToProps, {viewProject, createProject})(Portfolio);
  