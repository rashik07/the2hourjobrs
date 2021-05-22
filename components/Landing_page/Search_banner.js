import React from 'react';

const Search_banner = () => {
    return (
        <div>
            <div class="searchPanelContainer" >
                <div class="container" id="main">
                    <div class="row">
                        <div class="col-md-9 col-sm-12">
                            <div class="search-panel" role="main">
                                <h2 >Find the right job</h2>
                                <div class="search-form">
                                <form >
        
                                        <div class="inner-addon keyword-search">
                                            <i class="icon-tag"></i>
                                            <input type="text" name="txtsearch" id="txtKeyword" maxlength="50" class="form-control" placeholder="Search by keyword" spellcheck="false" aria-label="txtsearch"/>
                                    
                                    
                                        </div>

                                        <div class="inner-addon categoryCombo hidden-sm hidden-xs">
                                            <i class="icon-buildings"></i>
                                            <select name="qOT" id="qOT" class="form-control active" aria-label="Category">
                                                <option value="0" selected="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Organization Type</option>
                                                <option value="1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Government</option>
                                                <option value="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Semi Government</option>
                                                <option value="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NGO</option>
                                                <option value="4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Private Firm/Company</option>
                                                <option value="5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;International Agencies</option>
                                                <option value="6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Others</option>
                                            </select>
                                        </div>


                                     
                                        <input type="submit" class="btn btn-success" value="Search" onclick="Generategglevent()"/>
                                        </form>
                                </div>

                            </div>

                        </div>
                        <div class="col-md-3 col-sm-12"> 
                            <div class="sliderSidebar">
                                <div class="division" >
                                    <h2>Divisional Jobs</h2> 
                                    <div class="all-division">
                                        <a class="btn btn-light" target="_blank">Dhaka <span>(1511)</span></a>
                                        <a class="btn btn-light" target="_blank">Barishal <span>(19)</span></a>
                                        <a  class="btn btn-light" target="_blank">Khulna <span>(40)</span></a>
                                        <a class="btn btn-light" target="_blank">Sylhet <span>(40)</span></a>
                                        <a class="btn btn-light" target="_blank">Chattogram <span>(191)</span></a>
                                        <a class="btn btn-light" target="_blank">Rajshahi <span>(44)</span></a>
                                        <a class="btn btn-light" target="_blank">Rangpur <span>(55)</span></a>            
                                        <a class="btn btn-light" target="_blank">Mymensingh <span>(39)</span></a>
                                    </div>
                                    
                                </div>

                                    
                                <div class="quick-links desktop" >
                                    <h2>Quick links</h2>
                                    <div class="ql-list">
                                        <ul>
                                            <li><a ><i class="icon-right-angle-double"></i>&nbsp;Employer List</a></li>
                                            <li><a ><i class="icon-right-angle-double"></i>&nbsp;New Jobs (24 hrs)</a></li>
                                            <li><a ><i class="icon-right-angle-double"></i>&nbsp;Deadline Tomorrow</a></li>
                                            <li><a ><i class="icon-right-angle-double"></i>&nbsp;Contractual Jobs</a></li>                
                                            <li><a  ><i class="icon-right-angle-double"></i>&nbsp;Part time Jobs</a></li>
                                            

                                            
                                            
                                            <li>
                                            <a ><i class="icon-right-angle-double"></i>&nbsp;Overseas Jobs</a></li> 
                                            
                                            <li><a ><i class="icon-right-angle-double"></i>&nbsp;Work From Home</a></li>			


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