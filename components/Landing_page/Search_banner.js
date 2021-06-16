import React from "react";

const Search_banner = () => {
  return (
    <div>
      <div className="searchPanelContainer">
        <div className="container" id="main">
          <div className="row">
            <div className="col-md-9 col-sm-12">
              <div className="search-panel" role="main">
                <h2>Find the right job</h2>
                <div className="search-form">
                  <form>
                    <div className="inner-addon keyword-search">
                      <i className="icon-tag"></i>
                      <input
                        type="text"
                        name="txtsearch"
                        id="txtKeyword"
                        maxlength="50"
                        className="form-control"
                        placeholder="Search by keyword"
                        spellcheck="false"
                        aria-label="txtsearch"
                      />
                    </div>

                    <div className="inner-addon categoryCombo hidden-sm hidden-xs">
                      <i className="icon-buildings"></i>
                      <select
                        name="qOT"
                        id="qOT"
                        className="form-control active"
                        aria-label="Category"
                      >
                        <option value="0" selected="">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Organization
                          Type
                        </option>
                        <option value="1">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Government
                        </option>
                        <option value="2">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Semi
                          Government
                        </option>
                        <option value="3">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NGO
                        </option>
                        <option value="4">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Private
                          Firm/Company
                        </option>
                        <option value="5">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;International
                          Agencies
                        </option>
                        <option value="6">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Others
                        </option>
                      </select>
                    </div>

                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Search"
                      onclick="Generategglevent()"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="sliderSidebar">
                <div className="division">
                  <h2>Divisional Jobs</h2>
                  <div className="all-division">
                    <a className="btn btn-light" target="_blank">
                      Dhaka <span>(1511)</span>
                    </a>
                    <a className="btn btn-light" target="_blank">
                      Barishal <span>(19)</span>
                    </a>
                    <a className="btn btn-light" target="_blank">
                      Khulna <span>(40)</span>
                    </a>
                    <a className="btn btn-light" target="_blank">
                      Sylhet <span>(40)</span>
                    </a>
                    <a className="btn btn-light" target="_blank">
                      Chattogram <span>(191)</span>
                    </a>
                    <a className="btn btn-light" target="_blank">
                      Rajshahi <span>(44)</span>
                    </a>
                    <a className="btn btn-light" target="_blank">
                      Rangpur <span>(55)</span>
                    </a>
                    <a className="btn btn-light" target="_blank">
                      Mymensingh <span>(39)</span>
                    </a>
                  </div>
                </div>

                <div className="quick-links desktop">
                  <h2>Quick links</h2>
                  <div className="ql-list">
                    <ul>
                      <li>
                        <a>
                          <i className="icon-right-angle-double"></i>
                          &nbsp;Employer List
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="icon-right-angle-double"></i>&nbsp;New
                          Jobs (24 hrs)
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="icon-right-angle-double"></i>
                          &nbsp;Deadline Tomorrow
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="icon-right-angle-double"></i>
                          &nbsp;Contractual Jobs
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="icon-right-angle-double"></i>&nbsp;Part
                          time Jobs
                        </a>
                      </li>

                      <li>
                        <a>
                          <i className="icon-right-angle-double"></i>
                          &nbsp;Overseas Jobs
                        </a>
                      </li>

                      <li>
                        <a>
                          <i className="icon-right-angle-double"></i>&nbsp;Work
                          From Home
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search_banner;
