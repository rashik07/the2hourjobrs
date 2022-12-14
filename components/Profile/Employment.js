import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { viewEmployment } from "@/redux/actions/employmentAction";
import Employment_details from "components/Employment/Employment_details";
import Add_employment from "components/Employment/Add_employment";

const Employment = ({ viewEmployment, view_employment, employment }) => {
  const [loader, setloader] = useState(false);
  useEffect(() => {
    viewEmployment();
    setloader(false);
  }, [loader]);

  return (
    <div>
      <Employment_details setloader={setloader}></Employment_details>
      <Add_employment setloader={setloader}></Add_employment>
    </div>
  );
};

//export default Employment;
const mapStateToProps = (state) => {
  return {
    view_employment: state.employment.view_employment,
  };
};

export default connect(mapStateToProps, { viewEmployment })(Employment);
