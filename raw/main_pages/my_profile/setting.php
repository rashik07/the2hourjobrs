<?php
    include '../../component/navbar/navbar.php';

?>
<div class="row" >
    <div class="col-3"style="min-height:550px">
    <?php
    include '../../component/sidebar/profile_sidebar.php';
    ?>
    </div>
    <main class="col-9 my-4">
        <div class="container">
            <h1 class="border-bottom">Password Recovery</h1>
            <div class="row">
                <div class="col-12">
                    <div class="my-3">
                        <label for="">Current Password</label><br>
                        <input type="password">
                    </div>
                    
                </div>
                <div class="col-12">
                    <div class="my-3">
                        <label for="">New Password</label><br>
                        <input type="password">
                    </div>
                    
                </div>
                <div class="col-12">
                    <div class="my-3">
                        <label for="">Retype Password</label><br>
                        <input type="password">
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