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
            <h1 class="border-bottom">Academic Info</h1>
            <div class="row">
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Level of Education</label><br>
                        <input type="text">
                    </div>
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Exam/Degree Title</label><br>
                        <input type="text">
                    </div>
                </div>
                <div class="col-12">
                    <div class="my-3">
                        <label for="">Exam/Degree Title</label><br>
                        <input type="text" style="width:100%">
                    </div>
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Result</label><br>
                        <input type="text" >
                    </div>
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Year of Passing</label><br>
                        <input type="date" >
                    </div>   
                </div>
                <div class="col-12">
                    <div class="my-3">
                    <button class="btn btn-primary">Add</button>
                    </div>
                </div>
                <h1 class="border-bottom">Training</h1>
                <div class="col-12">
                    <div class="my-3">
                        <label for="">Title</label><br>
                        <input type="text" style="width:100%">
                    </div>
                </div>
                <div class="col-12">
                    <div class="my-3">
                        <label for="">Institution</label><br>
                        <input type="text" style="width:100%">
                    </div>
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Training Year</label><br>
                        <input type="date" >
                    </div>
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Duration</label><br>
                        <input type="number" >
                    </div>
                </div>
                <div class="col-12">
                    <div class="my-3">
                    <button class="btn btn-primary">Add</button>
                    </div>
                </div>
                <h1 class="border-bottom">Professional Qualification</h1>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Certification</label><br>
                        <input type="text" >
                    </div>
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Institution</label><br>
                        <input type="text" >
                    </div>
                </div>
                <div class="col-4">
                    <div class="my-3">
                        <label for="">Location</label><br>
                        <input type="text" >
                    </div>
                </div>
                <div class="col-4">
                    <div class="my-3">
                        <label for="">Start</label><br>
                        <input type="date" >
                    </div>
                </div>
                <div class="col-4">
                    <div class="my-3">
                        <label for="">End</label><br>
                        <input type="date" >
                    </div>
                </div>
                <div class="col-12">
                    <div class="my-3">
                    <button class="btn btn-primary">Add</button>
                    </div>
                </div> 
            </div>
            
        
         
        </div>

    </main>

    <?php
        include '../../component/footer/footer.php'
    ?>

</div>