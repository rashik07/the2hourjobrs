<?php 
  include '../../component/header/header.php'
?>
<body>
    
      <?php
          include '../../component/navbar/navbar.php'
      ?>
     <!-- As a login form -->
     <main class="form-signin text-center  mb-5">
     
        <form >
            <h1>Signup</h1>
           <div class="m-4 ">
                <label for="inputEmail "  class="fs-6 fw-normal">Email address:</label>
                <input type="email" id="inputEmail" class="form-control m-2" placeholder="Email address" required autofocus>
           </div>
           
           <div class="m-4">
           <label for="inputPassword" class="fs-6 fw-normal">Password: </label>
                <input type="password" id="inputPassword" class="form-control m-2" placeholder="Password" required>
                
           </div>
           <div class="m-4">
           <label for="inputPassword" class="fs-6 fw-normal">Confirm Password: </label>
                <input type="password" id="inputPassword" class="form-control m-2" placeholder="Confirm Password" required>
                
           </div>
            
           
            <div class="d-grid gap-2 d-flex  justify-content-center" style="height: 50px;">
           
            <button class="w-50 btn btn-lg fs-6 text-white" type="submit" style="background-color: #163F66">Sign Up</button>
            </div>
            
           
        </form>
    </main>

    
    <?php
        include '../../component/footer/footer.php'

   ?>

</body>
</html>