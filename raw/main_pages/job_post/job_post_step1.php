<?php 
  include '../../component/header/header.php'
?>
<body>
    
    <?php
        include '../../component/navbar/navbar.php'
    ?>

    <div class="container main-body my-5">
        <h1>
            Primary Information (Step - 1)
        </h1>
        <form class="row">
            <div class="col-8">
                <label for="inputEmail4" class="form-label" required>Job Title *</label>
                <input type="text" class="form-control" id="inputEmail4" required>
            </div>
            <div class="col-8">
                <label for="inputEmail4" class="form-label">Image Upload</label><br>
                <input type="file" id="myFile" name="filename">
            </div>
            <div class="col-8">
                <label for="inputEmail4" class="form-label">Vacancy</label>
                <a tabindex="0" class="btn " role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?"><i class="fas fa-question-circle"></i></a>
                <br>
                <input type="number" id="number" name="number">
            </div>
            <div class="col-4">

            </div>
            <div class="col-4">
                <label for="inputEmail4" class="form-label" required>Job Category *</label>
                <input type="text" class="form-control" id="inputEmail4" required>
            </div>
            <div class="col-4">
                <label for="inputEmail4" class="form-label" required>Skills *</label>
                <input type="text" class="form-control" id="inputEmail4" required>
            </div>
            <div class="col-8">
                <label for="inputEmail4" class="form-label" required>Employment Status</label><br>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" >
                        <label class="form-check-label" for="gridRadios1">
                        First radio
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                        <label class="form-check-label" for="gridRadios2">
                        Second radio
                        </label>
                    </div>
            </div>
            <div class="col-4">

            </div>
            <div class="col-4 ">
                <label for="inputEmail4" class="form-label" required>Application Deadline </label>
                <a tabindex="0" class="btn " role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?"><i class="fas fa-question-circle"></i></a>
                <input type="date" class="form-control " id="inputEmail4" required>
            </div>
            <div class="col-8">

            </div>
            <div class="col-8">
                
            </div>
            <div class="col-4">
                <button class="btn btn-primary ">Next</button>
            </div>
        </form>
        
    </div>


    
   <?php
        include '../../component/footer/footer.php'

   ?>

</body>
</html>