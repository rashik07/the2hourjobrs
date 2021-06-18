import Link from "next/link";
import React from "react";

const renderButtons = () => {
  return (
    <>
      <button className="btn button-home mt-2 rounded">Detail</button>
      <button className={`btn button-home mt-2 rounded`}>Save</button>
    </>
  );
};

const WorkerItem = ({ worker }) => {
  const { name, phone, email } = worker;
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
      <div className="col-3 btn-group-vertical">{renderButtons()}</div>
    </div>
  );
};

export default WorkerItem;
