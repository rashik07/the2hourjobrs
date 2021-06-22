import { saveWorker } from "@/redux/actions/userAction";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";

const renderButtons = (
  id,
  saved_user_instance_id,
  setSavedStatus,
  saveWorker,
  isSignedIn,
  show_save_button
) => {
  return (
    <>
      <button className="btn button-home mt-2 rounded">Detail</button>
      {show_save_button ? (
        <button
          onClick={() => saveWorker(id, saved_user_instance_id, setSavedStatus)}
          className="btn button-home mt-2 rounded"
          disabled={!isSignedIn}
        >
          {saved_user_instance_id ? "Unsave" : "Save"}
        </button>
      ) : null}
    </>
  );
};

const WorkerItem = ({ worker, saveWorker, isSignedIn }) => {
  const { id, name, phone, email, saved_user_instance_id } = worker;

  const router = useRouter();

  let show_save_button = true;

  if (router.pathname === "/worker/saved") {
    show_save_button = false;
  }

  const [savedStatus, setSavedStatus] = useState(saved_user_instance_id);

  return (
    <div className="row d-flex align-items-center border m-3 rounded">
      <div className="col-9 text-muted fs-6">
        <h4 className=" text-dark">
          <strong className="title-home">{name}</strong>
          <br />
        </h4>
        <p>
          <i className="fas fa-map-marker-alt mr-2" />
          Location <br />
        </p>
        <p>
          <i className="fas fa-phone mr-2" />
          {phone}
          <br />
        </p>
        <p>
          <i className="fas fa-envelope mr-2" />
          {email}
        </p>
      </div>
      <div className="col-3 btn-group-vertical">
        {renderButtons(
          id,
          savedStatus,
          setSavedStatus,
          saveWorker,
          isSignedIn,
          show_save_button
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { saveWorker })(WorkerItem);
