<?php 
  include '../../component/header/header.php'
?>
<body>
    
    <?php
        include '../../component/navbar/navbar.php'
    ?>

    <div class="container main-body my-5">
        <h1>
            Candidates Requirements (Step - 3)
        </h1>
       <form class="row">
            <div class="col-lg-8 col-sm-12 ">

                <div class="mb-4">
                    <label for="inputEmail4" class="form-label" required>Organization Type</label><br>
                    <input type="text">

                    <br>
                </div>
                <div class="mb-4">
                    <label for="inputEmail4" class="form-label " required>Year of Experience</label><br>
                        <div class="col-4">
                            <select class="form-select" id="inputGroupSelect01">
                                <option selected>Choose Your Year</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        
                        
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                            <label class="form-check-label" for="flexSwitchCheckDefault">No Experience</label>
                        </div>
                        </div>

                    <br>
                </div>
                <div class="mb-4">
                    <label for="inputEmail4" class="form-label" required>Education Qualification</label><br>
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>Choose Your Degree </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <br>
                </div>
                <div class="mb-4">
                    <label for="inputEmail4" class="form-label" required>Gender</label><br>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" >
                        <label class="form-check-label" for="gridRadios1">
                            Male
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                        <label class="form-check-label" for="gridRadios2">
                            Female
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                        <label class="form-check-label" for="gridRadios3">
                            Other
                        </label>
                    </div><br>
                </div>

                <div class="mb-4">
                    <label for="inputEmail4" class="form-label" required>Age</label><br>
                    <input type="text">


                </div>
                
                    
                
                <button class="btn btn-primary ">Next</button>
                            
            </div>
            <div class="col-4">

            </div>       
       </form>
        
    </div>

   <?php
        include '../../component/footer/footer.php'

   ?>

</body>
</html>