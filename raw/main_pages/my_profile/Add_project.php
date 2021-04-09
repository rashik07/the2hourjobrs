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
            <h1 class="border-bottom">Add Project</h1>
            <div class="row">
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Project Title</label><br>
                        <input type="text">
                    </div>    
                </div>
                <div class="col-6">
                    <div class="my-3">
                        <label for="">Skills</label><br>
                        <input type="text">
                    </div>
                </div>
                <div class="col-12">
                    <div class="my-3">
                        <label for="">Objective</label><br>
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                    </div>

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