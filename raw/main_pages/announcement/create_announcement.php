<?php 
    include '../../component/navbar/navbar.php';
    include '../../component/header/header.php';
?>

<div class="container main-body">
    
    <div class="row my-5">
        <div class="col-8 border-end">
            <h1>Create Announcement</h1>
            <div class="mb-4">
                    <div class="form-floating">
                        <input type="text" id="inputTitle" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Title:">
                        <label for="floatingTextarea2">Title:</label>
                    </div>
            </div>
            
            <div class="mb-4">
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Write job description here</label>
                    </div>
                        
            </div>
            <div class="mb-4">
                    <div class="form-floating">
                        <input type="text" id="inputTitle" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Contact:">
                        <label for="floatingTextarea2">Contact:</label>
                    </div>
            </div>
            <div class="mb-4">
                    <div class="form-floating">
                        <input type="text" id="inputTitle" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Location:">
                        <label for="floatingTextarea2">Location:</label>
                    </div>
            </div>
            <div class="mb-4">
                    <div class="form-floating">
                       <input type="file">
                        
                    </div>
            </div>
            <div class="mb-4">
                    <div class="form-floating">
                       <a href="" class="btn btn-primary">Post</a>
                        
                    </div>
            </div>
        </div>
        <div class="col-4">
            <h1>Tips</h1>
            <ul>
                <li>loram ipsam</li>
                <li>loram ipsam</li>
                <li>loram ipsam</li>
                <li>loram ipsam</li>
            </ul>
        </div>
    </div>
    


</div>

<?php
            include '../../component/footer/footer.php'
?>