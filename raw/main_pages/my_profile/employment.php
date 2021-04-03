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
            <h1 class="border-bottom">Add Experience</h1>
            <div class="row">
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Company Name</label><br>
                        <input type="text">
                    </div>
                    
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Company Business</label><br>
                        <input type="text">
                    </div>
                    
                </div><div class="col-6">
                    <div class="my-3">
                        <label for="">Designation</label><br>
                        <input type="text">
                    </div>
                    
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Department</label><br>
                        <input type="text">
                    </div>
                    
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Location</label><br>
                        <input type="text">
                    </div>
                    
                </div>
                <div class="col-6">
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Start</label><br>
                        <input type="date">
                    </div>
                    
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">End</label><br>
                        <input type="date">
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