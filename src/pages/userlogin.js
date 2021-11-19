import React from 'react'

function Userlogin() {
    return (
        <div class="container">
  <form class="box-form" action="/" method="get">

    <div class="box-title">
      <h2>Login</h2>
    </div>

    <div class="box-inputs">

      <div class="inputs-email">
        <input type="email" name="email" id="email" class="input" placeholder="Type your e-mail">
        <label for="email" class="label-inputs">E-mail:</label>
      </div>

      <div class="inputs-password">
        <input type="password" name="password" id="password" class="input" placeholder="Type your password">
        <label for="password" class="label-inputs">Password:</label>
      </div>

      <div class="inputs-remember">
        <input type="checkbox" name="remember" id="remember" checked>
        <label for="remember">Remember me</label>
      </div>

      <div class="box-btn-login">
        <button class="btn-login" type="submit" value="enter">Enter</button>
      </div>
    </div>

    <div class="box-register">
      <p>Forgot password? <a href="#">Click here!</a></p>
      <p>Don't have an account? <a href="#">Create one!</a></p>
    </div>

    <div class="break-line">
      <p>ou</p>
    </div>

    <div class="box-midias">
      <div class="midia">
        <a href="#" class="link-midias">
          <ion-icon name="logo-google"></ion-icon>
        </a>
      </div>

      <div class="midia">
        <a href="#" class="link-midias">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>

      <div class="midia">
        <a href="#" class="link-midias">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </div>
      <div class="midia">
        <a href="#" class="link-midias">
          <ion-icon name="logo-codepen"></ion-icon>
        </a>
      </div>

    </div>

  </form>
  <div class="hero">
    <p>Welcome to</p>
    <h1>Programmer<h1>
  </div>
</div>
    )
}

export default Userlogin
