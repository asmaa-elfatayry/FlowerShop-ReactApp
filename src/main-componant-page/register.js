
import $ from "jquery";
// import { e } from "../component/Buy-Flower";





let Register=()=>{
    return(
    
        <div>

            
<form class="row g-3 container" action="/LogingPage" style={{

      maxWidth:"620px",
      margin:'20px auto',
      boxShadow:'0 2px 6px 0 hsla(0,0%,0%,.2)',
      padding:'1.5em',
      backgroundColor:'#fff'
}}>
    <h2 class="text-center"> Register</h2>
  <div class="col-md-6">
    <label for="validationServer01" class="form-label">First name</label>
    <input  type="text" class="form-control cccc  firstName " id="validationServer01" placeholder="Mark" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServer02" class="form-label">Last name</label>
    <input type="text" class="form-control lastName " id="validationServer02" placeholder="Otto" required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServerUsername" class="form-label">Email</label>
    <div class="input-group ">
      <span class="input-group-text" id="inputGroupPrepend3">@</span>
      <input  type="email" class="form-control emailVa" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required/>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Please Enter Your Email.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServer03" class="form-label">Address</label>
    <input type="text" class="form-control address " id="validationServer03" aria-describedby="validationServer03Feedback"  required/>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a detailed address.
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServer04" class="form-label is-valid ">Pay via</label>
    <select class="form-select selectva " id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled className="select" >Choose...</option>
      <option value="1">Paypal</option>
      <option value="2">Card</option>
      <option value="3">Aplle Cash</option>
      <option value="4">Cash</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please select a valid way.
    </div>
  </div>
 
  <div class="col-md-6">
    <label for="validationServer03" class="form-label">Phone</label>
    <input type="text" class="form-control phoneN " id="validationServer05" aria-describedby="validationServer03Feedback" required/>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a vaild number.
    </div>
  </div>

  <div class="mb-3">
    <label for="validationTextarea" class="form-label">Textarea</label>
    <textarea class="form-control is-valid" id="validationTextarea" placeholder="Any comment " ></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>



  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input agree" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required/>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>


  
  <div class="col-12">
    <button class="btn btn-primary" type="submit" onClick={ValidationForm} id="sub">Submit form</button>
  </div>

  
</form>




        </div>
    )
}
 
function ValidationForm(){
  
  ValidationUser();
  ValidationLast();
  ValidationEmail();
  ValidationAddress();
  SelectedValidation();
  ValidationNumber();
  AgreeTerms();
  Last();
 

}
 // validation first name
function ValidationUser(){
 
if($('.firstName').val()===""){
  alert( "Please provide your first name!" );
  return false;
}else{

if($('.firstName').val().length<3 ||$('.firstName').val().length>10 ){
 alert( "first name minmum lenght 4 and max length 10" );
 return false;
}else{
  $('.firstName').addClass('is-valid');
  return true;
  
}
}

}
 // validation last name 
function ValidationLast(){
  
if($('.lastName').val()===""){
  alert( "Please provide your last name!" );
  return false;
}else{

if($('.lastName').val().length<3 || $('.lastName').val().length>10 ){
 alert( "last name minmum lenght 4 and max length 10" );
 return false;
}else{
  $('.lastName').addClass('is-valid');
  return true;
}
}
} 
 // validation Email
function ValidationEmail(){
if($('.emailVa').val()===""){
  alert( "Please provide your valid mail!" );
  $(this).focus() ;
  return false;
}else{
  //  all letters from a to z and A to Z and all number 0-9 and @ and _ 
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
  if($('.emailVa').val().match(validRegex)){
    $('.emailVa').addClass('is-valid');
    return true;
  }else{
    alert("Invalid email address!");
    return false;
  }
}
}
// validation address
function ValidationAddress(){
  if($('.address').val()===""){
    alert( "Please provide your address!" );
    $(this).focus() ;
    return false;
  }else{
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if($('.address').val().match(letterNumber)){
      $('.address').addClass('is-valid');
      return true;
  }else{
    alert("address should contain letters and number only!");
    return false;
  }
}
}
// validation select how pay
function SelectedValidation(){
  console.log($('select').val())
  if($('select').val()>=1 || $('select').val()<=4)
{
  return true;
}else{
  alert("you must choose how to pay");
  return false;
}

 
}
//  validation phone number
function ValidationNumber(){
  if($('.phoneN').val()===""){
    alert("Enter phone number!" );
    $(this).focus() ;
    return false;
  }else{
   if($('.phoneN').val().length<14 || $('.phoneN').val().length>14){
    alert("valid number should be +20 and 11 numbers" );
    return false;
   }else{
    $('.phoneN').addClass('is-valid');
     return true;
   }
}
}
// agree
function AgreeTerms(){
if($('.agree').prop("checked")===true){
return true;
}else{
  alert("you must agree terms");
  return false;
}
}
// state of register in local storge
function Last(){
  localStorage.setItem('RegestrationState', 'Done');
  var state=localStorage.getItem('RegestrationState');
  console.log(state);
}

export default Register;
