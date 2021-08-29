<template>
<MDBNavbar light bg="light" expand="lg" container class="sticky header" id="sticky navbar"> 
  <MDBNavbarBrand href="/">CHARMAIN PEDRIGAL</MDBNavbarBrand>
  <div class="rightnav">
  <MDBNavbarToggler target="#navbarSupportedContent"></MDBNavbarToggler>
  <MDBNavbarNav collapse="navbarSupportedContent">
  <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  </MDBNavbarNav>
  </div>
</MDBNavbar>
<!-- <nav class="navbar navbar-expand-lg sticky header" id="sticky navbar" >
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
  <!--<div class="container">
    <div class="two-column">
      <div class="grid-item">
        <br />
        <br />
        <h3>HELLO,</h3>
        <h1>I'M CHARMAIN</h1>
        <br />
        <h5>I am an incoming UX Engineer studying at Otago Polytechnic.</h5>
      </div>
      <div class="grid-item info">
        <div>
          <br />
          <br />
          <a
            href="https://github.com/charmainpdrgl"
            target="_blank"
            class="icons"
            ><img
              src="../assets/icons/github.png"
              style="width: 20px; height: 20px"
          /></a>
          <a
            href="mailto:charmainpedrigal@gmail.com"
            target="_blank"
            class="icons"
            ><img
              src="../assets/icons/email.png"
              style="width: 20px; height: 20px"
          /></a>
          <a
            href="https://www.linkedin.com/in/charmain-pedrigal-b251171ab/"
            target="_blank"
            ><img
              src="../assets/icons/linkedin.png"
              style="width: 22px; height: 22px"
          /></a>
        </div>
        <br />
        <p>
          <a
            href="#"
            class="customButtons btn btn-sm btn-outline-secondary"
            role="button"
            target="_blank"
            >MY RESUME</a
          >
        </p>
      </div>
    </div>
  </div>
  <div class="about-me">
    <div class="container">
      <h3>ABOUT ME</h3>
      <br />
      <p>
        I am currently studying Information Technology at Otago Polytechnic,
        focusing on frontend web development and user experience. In my free
        time, I like to go out and take photos or stay in and learn to cook some
        Filipino food.
      </p>
      <p>
        Here are some of the technologies I've worked with while studying at
        Otago Polytechnic:
      </p>
      <div class="two-column">
        <div class="grid-item">
          <ul>
            <li>HTML | CSS</li>
            <li>C#</li>
            <li>JAVA</li>
            <li>PYTHON</li>
          </ul>
        </div>
        <div class="grid-item">
          <ul>
            <li>LARAVEL</li>
            <li>PHP</li>
            <li>VUE.JS</li>
          </ul>
        </div>
      </div>
    </div>
  </div> -->
  
  <div class="container">
    <h3>PROJECTS</h3>
    <br />
    <div class="product-grid">
      <div class="col">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-text">RETHRIFT</h5>
            <p class="card-text">A sustainable second-hand thrifting store.</p>
            <medium class="text-muted">Netlify, Shopify, Bootstrap, NPM</medium>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-text">CANTEEN SYSTEM INTERFACE</h5>
            <p class="card-text">
              An application created for St. Hilda's canteen order system.
            </p>
            <medium class="text-muted">Vue.js, Firebase</medium>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-text">PRACTICAL / LAB CHECKPOINT TOOL</h5>
            <p class="card-text">
              An application created for programming lecturers and their
              students.
            </p>
            <medium class="text-muted">PHP, Laravel, Bootstrap, Mariadb</medium>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav
    } from 'mdb-vue-ui-kit';
import { ref } from 'vue';
export default {
  name: "HelloWorld",
  components: {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav
  },
  setup() {
    const collapse1 = ref(false);
    return {
      collapse1,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rightnav {
    float: right;
}

.sticky{
    font-size: small;
    position:sticky;
    top:0;
    padding:1%
}

.container {
text-align: left;
padding: 10%;
}

.two-column {
display: grid;
grid-template-columns: auto auto;
grid-gap: 10px;
}

.icons {
padding-right: 5%;
font-size: 0.5em;
}

.info {
text-align: center;
}

.customButtons {
background-color: gray;
padding-left: 2%;
padding-right: 2%;
font-size: large;
}

.customButtons:hover {
opacity: 0.6;
transition: 1s;
}

.about-me {
background-color: gainsboro;
}

/* a:link {
color: green;
background-color: transparent;
text-decoration: none;
}

a:visited {
color: pink;
background-color: transparent;
text-decoration: none;
}

a:hover {
color: red;
background-color: transparent;
text-decoration: none;
}

a:active {
color: yellow;
background-color: transparent;
text-decoration: underline;
} */

.product-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2.5rem;
}
@media screen and (min-width: 576px) and (max-width: 992px) {
.product-grid {
    grid-template-columns: repeat(2, 1fr);
}
}
@media screen and (max-width: 576px) {
.product-grid {
    grid-template-columns: repeat(1, 1fr);
}
} 
</style>
