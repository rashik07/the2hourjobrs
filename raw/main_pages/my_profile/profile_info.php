<?php
    include '../../component/navbar/navbar.php';

?>
<div class="row">
    <div class="col-3">
    <?php
    include '../../component/sidebar/profile_sidebar.php';
    ?>
    </div>
    <main class="col-9 mt-4">
        <div class="container">
            <h1 class="border-bottom">Basic Info</h1>
        
            <div class="row">
                <div class="col">
                    <div class="my-3">
                        <label for="">Name:</label><br>
                        <input type="text"> 
                    </div>
                    <div class="my-3">
                        <label for="">Email:</label><br>
                        <input type="mail"> 
                    </div>
                    <div class="my-3">
                        <label for="">Phone:</label><br>
                        <input type="tel"> 
                    </div>
                    <div class="my-3">
                        <label for="">NID Number:</label><br>
                        <input type="text"> 
                    </div>
                    <div class="my-3">
                        <label for="">Bio:</label><br>
                        <p>lorem Ipsum is simply dummy text of the Lorem Ipsum is simplydummy text of the </p>
                    </div>

                </div>
                <div class="col">
                    <div class="my-3">
                        <label for="">Gender:</label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Female
                            </label>
                        </div>
                    </div>
                    <div class="my-3">
                        <label for="">Date of Birth</label><br>
                        <input type="date">
                    </div>
                    <div class="my-3">
                        <label for="">Nationality</label><br>
                        <input type="text">
                    </div>
                </div>
            </div>
            <h1 class="border-bottom">Basic Info</h1>
            <div class="row">
               <div class="col-6">
                    <div class="my-3">
                        <label for="">District</label><br>
                        <div class="input-group mb-3">
                           
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                        </div>

                    </div>
               </div>
               <div class="col-6">
                    <div class="my-3">
                        <label for="">Thana</label><br>
                        <div class="input-group mb-3">
                           
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                            <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                        </div>

                    </div>
               </div>
               <div class="col-12">
                    <div class="my-3">
                        <label for="">Address</label><br>
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>

                    </div>

               </div>
            </div>
        
        </div>

    </main>

    <?php
        include '../../component/footer/footer.php'
    ?>

</div>

