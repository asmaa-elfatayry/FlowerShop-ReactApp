
import $ from "jquery";






let Login =()=>{

    return(

        <div>


<form className="container" action="/CardPage" style={{
  maxWidth:"38em",
  margin:'60px auto',
  boxShadow:'0 2px 6px 0 hsla(0,0%,0%,.2)',
  padding:'2em',
  backgroundColor:'#fff'
}}>
  <h2 class="text-center">Login</h2>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input required type="email" class="form-control email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <label for="inputPassword5" class="form-label">Password</label>
<input required  type="password" id="inputPassword5" class="form-control pass" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onClick={ValidationForm} id="btn">Submit</button>
</form>
            
        </div>
    )
  
}


function ValidationForm(){
  ValidationEmail();
  ValidationPassowrd();
  Last();


}
function ValidationEmail(){
if($('.email').val()===""){
  alert( "Please provide your valid mail!" );
  $(this).focus() ;
  return false;
}else{
  //  all letters from a to z and A to Z and all number 0-9 and @ and _ 
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
  if($('.email').val().match(validRegex)){
    $('.email').addClass('is-valid');
    return true;
  }else{
    alert("Invalid email address!");
    return false;
  }
}
}
  

function ValidationPassowrd(){
  if($('.pass').val()===""){
    alert( "Please provide your password!" );
    $(this).focus() ;
    return false;
  }else{
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if($('.pass').val().match(letterNumber)  ){
      if($('.pass').value.length>=8 || $('.pass').value.length<=8  ){
      $('.pass').addClass('is-valid');
      return true;
      }else{
        alert('pass gt 8 an lt 20');
        return false;
      }
  }else{
    alert("password should contain letters and number only!");
    return false;
  }
}
}

function Last(){
  localStorage.setItem('StateLogin', 'Done');
  var statel=localStorage.getItem('StateLogin');
  console.log(statel);
}

export default Login;
