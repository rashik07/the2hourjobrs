<?php 
  include '../../component/header/header.php'
?>
<body>
    
    <?php
        include '../../component/navbar/navbar.php'
    ?>

    <div class="container main-body my-5">
        <h1>
            More Job Information (Step - 2)
        </h1>
       <form class="row">
            <div class="col-8">
                <div class="mb-4">
                    <label for="inputEmail4" class="form-label" required>Workplace</label><br>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" >
                        <label class="form-check-label" for="gridRadios1">
                            Full Time    
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                        <label class="form-check-label" for="gridRadios2">
                            Part Time
                        </label>
                    </div><br>
                </div>

                <div class="mb-4">
                    <label for="inputEmail4" class="form-label" required>Job Location</label><br>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gridRadio" id="gridRadios3" value="option1" >
                        <label class="form-check-label" for="gridRadios3">
                            Inside Dhaka
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gridRadio" id="gridRadios4" value="option2">
                        <label class="form-check-label" for="gridRadios4">
                            Outside Dhaka
                        </label>
                    </div>
                    
                </div>
                <div class="mb-4">
                    <label for="inputEmail4" class="form-label" required> Salary *</label><br>
                    <input type="number" id="number" name="number" placeholder="From"> -
                    <input type="number" id="number" name="number" placeholder="To">
                </div>
                <div class="mb-4">
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Write job description here</label>
                    </div>
                        
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