<?php
include '../../component/navbar/navbar.php';
include '../../component/header/header.php';
?>
<div class="container main-body bg-white my-5">
    <ul class="nav nav-tabs pt-3">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" data-bs-toggle="tab" href="#post">Post</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#draft">Draft</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#archive">Archive</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#archive">Saved</a>
        </li>

    </ul>
    <div class="tab-content">
        <div class="tab-pane active" id="post">

            <div class="row d-flex align-items-center border m-3 rounded tab-pane">
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
        </div>


        <div class="tab-pane " id="draft">
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

                </div>
            </div>
        </div>


        <div class="tab-pane " id="archive">
            <div class="row d-flex align-items-center border m-3 rounded" id="archive">
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
                    <a href="#" class="btn button-home">Edit</a>
                    <a href="#" class="btn button-home">Details</a>
                    <a href="#" class="btn button-home">Save Job</a>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
include '../../component/footer/footer.php'
?>