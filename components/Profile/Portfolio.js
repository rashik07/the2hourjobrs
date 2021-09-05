import React, {useEffect , useState} from 'react';
import { connect } from "react-redux";
import { viewProject , createProject} from '@/redux/actions/projectAction';
import Project_details from 'components/Project/Project_details';
import Add_project from 'components/Project/Add_project';

const Portfolio = ({viewProject, view_project}) => {
  const [loader, setloader] =  useState(false);
  useEffect(() => {     
    viewProject();
    setloader(false);
  },[loader]);
 
  return (
      <div>                           
            <Project_details setloader={setloader}></Project_details>                     
            <Add_project setloader={setloader}></Add_project>        
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
  