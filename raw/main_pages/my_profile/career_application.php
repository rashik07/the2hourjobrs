<?php
    include '../../component/navbar/navbar.php';

?>
<div class="row">
    <div class="col-3">
    <?php
    include '../../component/sidebar/profile_sidebar.php';
    ?>
    </div>
    <main class="col-9 my-4">
        <div class="container">
            <h1 class="border-bottom">Career and Application Details</h1>
        
            <div class="row">
                <div class="col-12">
                    <div class="my-3">
                        <label for="">Objective</label><br>
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                    </div>

                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Present Salary</label><br>
                        <input type="text" placeholder="30,000">
                    </div>
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Expected Salary</label><br>
                        <input type="text" placeholder="50,000">
                    </div>
                </div>
                <div class="col-12">
                    <div class="my-3">
                        <label for="">Job Level</label><br>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="joblevel" id="flexRadioDefault1" checked>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Entry Level
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="joblevel" id="flexRadioDefault2" >
                            <label class="form-check-label" for="flexRadioDefault2">
                                Mid Level
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="joblevel" id="flexRadioDefault3" >
                            <label class="form-check-label" for="flexRadioDefault3">
                                Top Level
                            </label>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="my-3">
                        <label for="">Job Nature</label><br>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="jobnature" id="flexRadioDefault4" checked>
                            <label class="form-check-label" for="flexRadioDefault4">
                                Full Time
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="jobnature" id="flexRadioDefault5" >
                            <label class="form-check-label" for="flexRadioDefault5">
                                Part Time
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="jobnature" id="flexRadioDefault6" >
                            <label class="form-check-label" for="flexRadioDefault6">
                                Contractual
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="jobnature" id="flexRadioDefault7" >
                            <label class="form-check-label" for="flexRadioDefault7">
                                Freelance
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="jobnature" id="flexRadioDefault8" >
                            <label class="form-check-label" for="flexRadioDefault8">
                                Internship
                            </label>
                        </div>
                    </div>
                </div>
                <h1 class="border-bottom">Prefered Categories</h1>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Functional*</label><br>
                        <input type="text" style="width: 100%">
                    </div>
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Special Skills*</label><br>
                        <input type="text" style="width: 100%">
                    </div>
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Organization Type</label><br>
                        <input type="text" style="width: 100%">
                    </div>
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Location</label><br>
                        <input type="text" style="width: 100%">
                    </div>
                </div>

            
            </div>
        
        </div>

    </main>

    <?php
        include '../../component/footer/footer.php'
    ?>

</div>