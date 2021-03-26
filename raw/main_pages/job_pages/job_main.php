<?php 
  include '../../component/header/header.php'
?>
<body>
    
    <?php
        include '../../component/navbar/navbar.php'
    ?>
    <div class="container main-body">
        <div class="row my-5">
            <!--1st part-->
            <div class="col-3">
                    <h3 class="m-sm-bottom">Filter By</h3>



                    <!--Category -->
                    <div class="border-bottom ">
                        <p  class="">
                            <a class="d-flex btn text-start col-12  " data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><strong >Category</strong>
                            
                            <i class="ms-auto fas fa-chevron-down"></i>
                            
                            
                            </a>
                        </p>
                    
                        <div class="collapse" id="collapseExample"> 
                            <input class="form-control me-2 mt-2 " type="search" placeholder="Search" aria-label="Search">
                        </div>
                    </div>

                    <!--industries -->
                    <div class="border-bottom ">
                        <p  >
                            <a class="d-flex btn text-start col-12  " data-bs-toggle="collapse" href="#collapseIndustries" role="button" aria-expanded="false" aria-controls="collapseIndustries"><strong >Industries</strong>
                            
                            <i class="ms-auto fas fa-chevron-down"></i>
                            
                            
                            </a>
                        </p>

                        <div class="collapse" id="collapseIndustries"> 
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Checked checkbox
                                </label>
                            </div>
                        </div>
                    </div>
                    

                    <!--Location -->
                    <div class="border-bottom ">
                        <p  >
                            <a class="d-flex btn text-start col-12  " data-bs-toggle="collapse" href="#collapseLocation" role="button" aria-expanded="false" aria-controls="collapseLocation"><strong >Location</strong>
                            
                            <i class="ms-auto fas fa-chevron-down"></i>
                            
                            
                            </a>
                        </p>

                        <div class="collapse" id="collapseLocation"> 
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Checked checkbox
                                </label>
                            </div>
                        </div>
                    </div>
                    
            </div>


            <!--2nd part-->
            <div class="col-9 bg-white rounded border ">
                <div class="d-flex m-3">
                    <input class="form-control me-2 mt-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn mt-2 button-home" type="submit">Search</button>
                    
                </div>
                
                <div class="m-3">

                
                    <div class="badge bg-secondary text-wrap mr-3" style="width: 10rem;">
                        This text should wrap. <button type="button" class="btn-close float-end" aria-label="Close"></button>
                    
                    </div>
                    <div class="badge bg-secondary text-wrap mr-3" style="width: 10rem;">
                        This text should wrap. <button type="button" class="btn-close float-end" aria-label="Close"></button>
                    
                    </div>
                    <a href="" class="clear_filter fw-bold">Clear Filter</a>
                </div>
            
                <div class="row d-flex align-items-center border m-3 rounded">
                        <div class="col-3 ">
                            <img src="https://previews.123rf.com/images/roxanabalint/roxanabalint1312/roxanabalint131200148/24476498-demo-grunge-rubber-stamp-on-white.jpg" class="card-img-top" alt="...">
                        </div>
                        <div class="col-6 text-muted fs-6">
                            <h4 class=" text-dark"> 
                                <strong class="title-home">Support Engineer, WordPress</strong><br>
                            </h4>
                            <h5 class=" text-dark"> 
                                <strong>TheICTHub</strong><br>
                            </h5>
                            <p>
                               <i class="fas fa-map-marker-alt"></i>Mirpur <br>
                            </p> 
                            <p>
                               <i class="fas fa-book-open"></i>
                                It doesn`t matter where you went to college or what your CGPA was as long as you are smart, ...<br>
                            </p>
                            <p>
                                <i class="fas fa-briefcase"></i>1 to 3 year(s)
                            </p>
                            
                               
                        </div>
                            <div class=" col-3  d-grid gap-2 p-4">
                            <a href="#" class="btn button-home">Apply</a>
                            <a href="#" class="btn button-home">Details</a>
                            <a href="#" class="btn button-home">Save Job</a>
                        </div>      
                </div>
                <div class="row d-flex align-items-center border m-3 rounded">
                        <div class="col-3 ">
                            <img src="https://previews.123rf.com/images/roxanabalint/roxanabalint1312/roxanabalint131200148/24476498-demo-grunge-rubber-stamp-on-white.jpg" class="card-img-top" alt="...">
                        </div>
                        <div class="col-6 text-muted fs-6">
                            <h4 class=" text-dark"> 
                                <strong class="title-home">Support Engineer, WordPress</strong><br>
                            </h4>
                            <h5 class=" text-dark"> 
                                <strong>TheICTHub</strong><br>
                            </h5>
                            <p>
                               <i class="fas fa-map-marker-alt"></i>Mirpur <br>
                            </p> 
                            <p>
                               <i class="fas fa-book-open"></i>
                                It doesn`t matter where you went to college or what your CGPA was as long as you are smart, ...<br>
                            </p>
                            <p>
                                <i class="fas fa-briefcase"></i>1 to 3 year(s)
                            </p>
                            
                               
                        </div>
                            <div class=" col-3  d-grid gap-2 p-4">
                            <a href="#" class="btn button-home">Apply</a>
                            <a href="#" class="btn button-home">Details</a>
                            <a href="#" class="btn button-home">Save Job</a>
                        </div>

       
                </div>
                <div class="row d-flex align-items-center border m-3 rounded">
                        <div class="col-3 ">
                            <img src="https://previews.123rf.com/images/roxanabalint/roxanabalint1312/roxanabalint131200148/24476498-demo-grunge-rubber-stamp-on-white.jpg" class="card-img-top" alt="...">
                        </div>
                        <div class="col-6 text-muted fs-6">
                            <h4 class=" text-dark"> 
                                <strong class="title-home">Support Engineer, WordPress</strong><br>
                            </h4>
                            <h5 class=" text-dark"> 
                                <strong>TheICTHub</strong><br>
                            </h5>
                            <p>
                               <i class="fas fa-map-marker-alt"></i>Mirpur <br>
                            </p> 
                            <p>
                               <i class="fas fa-book-open"></i>
                                It doesn`t matter where you went to college or what your CGPA was as long as you are smart, ...<br>
                            </p>
                            <p>
                                <i class="fas fa-briefcase"></i>1 to 3 year(s)
                            </p>
                            
                               
                        </div>
                            <div class=" col-3  d-grid gap-2 p-4">
                            <a href="#" class="btn button-home">Apply</a>
                            <a href="#" class="btn button-home">Details</a>
                            <a href="#" class="btn button-home">Save Job</a>
                        </div>

       
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
                
                                                               
            </div>
        </div>
    </div>

    
   <?php
        include '../../component/footer/footer.php'

   ?>

</body>
</html>