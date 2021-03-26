<?php 
  include '../../component/header/header.php'
?>
<body>
    
    <?php
        include '../../component/navbar/navbar.php'
    ?>
     <!-- As a login form -->
     <main class="form-signin text-center ">
     
        <form >
            <h1>Login</h1>
           <div class="m-4 ">
                <label for="inputEmail "  class="fs-6 fw-normal">Email address:</label>
                <input type="email" id="inputEmail" class="form-control m-2" placeholder="Email address" required autofocus>
           </div>
           <div class="m-4">
           <label for="inputPassword" class="fs-6 fw-normal">Password: </label>
                <input type="password" id="inputPassword" class="form-control m-2" placeholder="Password" required>
                
           </div>
           <div data-v-e52648b8="" class="right"><div data-v-58ebcdf7="" class="d-none d-md-block forgot-password pb-10 mb-5" data-v-e52648b8=""><a id="forgot-password" target="_self" href="/ab/account-security/reset-password?from=login&amp;login=saif67090707%40gmail.com">Forgot password?</a></div></div>
           
            <div class="d-grid gap-2 d-flex " style="height: 50px;">
            <button class="w-50 btn btn-lg btn-success fs-6" type="submit">Log in</button>
            <button class="w-50 btn btn-lg fs-6 text-white" type="submit" style="background-color: #163F66">Sign Up</button>
            </div>
            
           
        </form>
    </main>

    
   <?php
        include '../../component/footer/footer.php'

   ?>

</body>
</html>