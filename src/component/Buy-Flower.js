import $ from "jquery"
import {Link} from 'react-router-dom'
// next section after header to buy flower



let Shopping=()=>{
    return(        
<div class="container shopping">
<h2 class="text-center text-secondary">Choose Your favourite flowers</h2>
<div class="text-center">
<span class="text-secondary AllNo" >0</span><i class=" fa fa-shopping-cart fa-3x "></i>
</div>
{/* container divs */}
<div class="container row">
{/* first card */}
<div class="card col-lg-4 col-md-5 " >
  <img src={require('../images/f1.png').default} class="card-img-top" alt="Roses Flower"/>
  <Link to="/SliderPage" class="text-center text-muted text-decoration-underline">Learn More</Link>
  <div class="card-body">
  <span class="text-secondary spanNoA"  >0</span><i class=" fa fa-shopping-cart "></i>
  <input type="button"  class="btn btn-success addButtonA" onClick={AddBtnA} value="Add"/> 
  <input type="button"  class="btn btn-danger removeButtonA" onClick={RemoveBtnA} value="Remove"/> 

  </div>
</div>

{/* 2 card */}
<div class="card col-lg-4 col-md-5 " >
  <img src={require('../images/f2.png').default} class="card-img-top" alt="Peony Flower"/>
  <Link to="/SliderPage" class="text-center text-muted text-decoration-underline">Learn More</Link>
  <div class="card-body">
  <span class="text-secondary spanNoB">0</span><i class=" fa fa-shopping-cart "></i>
  <input type="button"  class="btn btn-success addButtonB" onClick={AddBtnB} value="Add"/> 
  <input type="button"  class="btn btn-danger removeButtonB" onClick={RemoveBtnB} value="Remove"/> 
  </div>
</div>

{/* 3card */}
<div class="card col-lg-4 col-md-5 " >
  <img src={require('../images/f3.png').default}class="card-img-top" alt="colorful flowers"/>
  <Link to="/SliderPage" class="text-center text-muted text-decoration-underline">Learn More</Link>
  <div class="card-body">
  <span class="text-secondary spanNoC" >0</span><i class=" fa fa-shopping-cart "></i>
  <input type="button"  class="btn btn-success addButtonC" onClick={AddBtnC} value="Add"/> 
  <input type="button"  class="btn btn-danger removeButtonC" onClick={RemoveBtnC}  value="Remove"/> 

  </div>
</div>

{/* 4 card */}
<div class="card col-lg-4 col-md-5 " >
  <img src={require('../images/f4.png').default} class="card-img-top" alt="Azalea Flower"/>
  <Link to="/SliderPage" class="text-center text-muted text-decoration-underline">Learn More</Link>
  <div class="card-body">
  <span class="text-secondary spanNoD">0</span><i class=" fa fa-shopping-cart "></i>
  <input type="button"  class="btn btn-success addButtonD" onClick={AddBtnD} value="Add"/> 
  <input type="button"  class="btn btn-danger removeButtonD" onClick={ RemoveBtnD} value="Remove"/> 

  </div>
</div>

{/* 5 card */}
<div class="card col-lg-4 col-md-5 " >
  <img src={require('../images/f5.png').default} class="card-img-top" alt="Carnation Flower"/>
  <Link to="/SliderPage" class="text-center text-muted text-decoration-underline">Learn More</Link>
  <div class="card-body">
  <span class="text-secondary spanNoE" >0</span><i class=" fa fa-shopping-cart "></i>
  <input type="button"  class="btn btn-success addButtonE" onClick={AddBtnE} value="Add"/> 
  <input type="button"  class="btn btn-danger removeButtonE" onClick={RemoveBtnE} value="Remove"/> 

  </div>
</div>

{/* 6 card */}
<div class="card col-lg-4 col-md-5 " >
  <img src={require('../images/f6.png').default} class="card-img-top" alt="Water Lily Flower"/>
  <Link to="/SliderPage" class="text-center text-muted text-decoration-underline">Learn More</Link>
  <div class="card-body">
  <span class="text-secondary spanNoF" >0</span><i class=" fa fa-shopping-cart "></i>
  <input type="button"  class="btn btn-success addButtonF" onClick={AddBtnF} value="Add"/> 
  <input type="button"  class="btn btn-danger removeButtonF" onClick={RemoveBtnF} value="Remove"/> 

  </div>
</div>

{/* 7 card */}
<div class="card col-lg-4 col-md-5 " >
  <img src={require('../images/f7.png').default} class="card-img-top" alt=" Aster Flower"/>
  <Link to="/SliderPage" class="text-center text-muted text-decoration-underline">Learn More</Link>
  <div class="card-body">
  <span class="text-secondary  spanNoG" >0</span><i class=" fa fa-shopping-cart "></i>
  <input type="button"  class="btn btn-success addButtonG" onClick={AddBtnG} value="Add"/> 
  <input type="button"  class="btn btn-danger removeButtonG" onClick={RemoveBtnG} value="Remove"/> 

  </div>
</div>

{/* 8 card */}
<div class="card col-lg-4 col-md-5 " >
  <img src={require('../images/f8.png').default} class="card-img-top" alt="Sunflower"/>
  <Link to="/SliderPage" class="text-center text-muted text-decoration-underline">Learn More</Link>
  <div class="card-body">
  <span class="text-secondary spanNoH" >0</span><i class=" fa fa-shopping-cart "></i>
  <input type="button"  class="btn btn-success addButtonH" onClick={AddBtnH} value="Add"/> 
  <input type="button"  class="btn btn-danger removeButtonH" onClick={RemoveBtnH} value="Remove"/>
  </div>
</div>

{/* 9 card */}
<div class="card col-lg-4 col-md-5 " >
  <img src={require('../images/f9.png').default} class="card-img-top" alt="Daffodil Flower"/>
  <Link to="/SliderPage" class="text-center text-muted text-decoration-underline">Learn More</Link>
  <div class="card-body">
  <span class="text-secondary spanNoI" >0</span><i class=" fa fa-shopping-cart "></i>
  <input type="button"  class="btn btn-success addButtonI" onClick={AddBtnI} value="Add"/> 
  <input type="button"  class="btn btn-danger removeButtonI"  onClick={RemoveBtnI} value="Remove"/> 
  </div>
</div>


{/* 10 card */}
<div class="card col-lg-4 col-md-5 " >
  <img src={require('../images/f10.png').default} class="card-img-top" alt="Azalea Flower"/>
  <Link to="/SliderPage" class="text-center text-muted text-decoration-underline">Learn More</Link>
  <div class="card-body">
  <span class="text-secondary spanNoJ" >0</span><i class=" fa fa-shopping-cart "></i>
  <input type="button"  class="btn btn-success addButtonJ" onClick={AddBtnJ} value="Add"/> 
  <input type="button"  class="btn btn-danger removeButtonJ" onClick={RemoveBtnJ} value="Remove"/> 
  </div>
</div>


{/* 11 card */}
<div class="card col-lg-4 col-md-5 " >
  <img src={require('../images/f11.png').default} class="card-img-top" alt="Tulip Flower"/>
  <Link to="/SliderPage" class="text-center text-muted text-decoration-underline">Learn More</Link>
  <div class="card-body">
  <span class="text-secondary spanNoK" >0</span><i class=" fa fa-shopping-cart "></i>
  <input type="button"  class="btn btn-success addButtonK" onClick={AddBtnK} value="Add"/> 
  <input type="button"  class="btn btn-danger removeButtonK" onClick={RemoveBtnK} value="Remove"/> 
  </div>
</div>

{/* 12 card */}
<div class="card col-lg-4 col-md-5 " >
  <img src={require('../images/f12.png').default} class="card-img-top" alt="Marigold Flower"/>
  <Link to="/SliderPage" class="text-center text-muted text-decoration-underline">Learn More</Link>
  <div class="card-body">
  <span class="text-secondary spanNoL">0</span><i class=" fa fa-shopping-cart "></i>
  <input type="button"  class="btn btn-success addButtonL" onClick={AddBtnL} value="Add"/> 
  <input type="button"  class="btn btn-danger removeButtonL" onClick={RemoveBtnL} value="Remove"/> 

  </div>
</div>

</div>

</div>
       

       

    )
    
}

// edit handler on each button
// 1
export let All=0;
export let a=0;
const AddBtnA=()=>{
  a++;
  All++;
  $('.spanNoA').text(a);
  $('.AllNo').text(All);

}
const RemoveBtnA=()=>{
  while (a===0) {
 $('.spanNoA').text(0);
  }
     a--;
     All--;
  $('.spanNoA').text(a);
  $('.AllNo').text(All);
  
}
// 2
export let b=0;
const AddBtnB=()=>{
  b++;
  All++;
  $('.spanNoB').text(b);
$('.AllNo').text(All);
}
const RemoveBtnB=()=>{
  while (b===0) {
 $('.spanNoB').text(0);
  }
      b--;
      All--;
  $('.spanNoB').text(b);
  $('.AllNo').text(All);
  
}
// 3
export let c=0;
const AddBtnC=()=>{
  c++;
  All++;
  $('.spanNoC').text(c);
  $('.AllNo').text(All);

}
const RemoveBtnC=()=>{
  while (c===0) {
 $('.spanNoC').text(0);
  }
     c--;
     All--;
  $('.spanNoC').text(c);
  $('.AllNo').text(All);
}
 // 4
 export let d=0;
 const AddBtnD=()=>{
  d++;
  All++;
  $('.spanNoD').text(d);
  $('.AllNo').text(All);
}
const RemoveBtnD=()=>{
  while (d===0) {
 $('.spanNoD').text(0);
  }
    d--;
    All--;
  $('.spanNoD').text(d);
  $('.AllNo').text(All);
  
}
 
 // 5
 export let e=0;
 const AddBtnE=()=>{
  e++;
  All++;
  $('.spanNoE').text(e);
$('.AllNo').text(All);
}
const RemoveBtnE=()=>{
  while (e===0) {
 $('.spanNoE').text(0);
  }
     e--;
     All--;
  $('.spanNoE').text(e);
  $('.AllNo').text(All);
  
}
// 6
 export let f=0;
 const AddBtnF=()=>{
  f++;
  All++;
  $('.spanNoF').text(f);
$('.AllNo').text(All);
}
const RemoveBtnF=()=>{
  while (f===0) {
 $('.spanNoF').text(0);
  }
     f--;
     All--;
  $('.spanNoF').text(f);
 $('.AllNo').text(All); 
}

// 7
 export let g=0;
 const AddBtnG=()=>{
  g++;
  All++;
  $('.spanNoG').text(g);
$('.AllNo').text(All);
}
const RemoveBtnG=()=>{
  while (g===0) {
   $('.spanNoG').text(0);
  }
     g--;
     All--;
  $('.spanNoG').text(g);
  $('.AllNo').text(All);
}
// 8
 export let h=0;
 const AddBtnH=()=>{
  h++;
  All++;
  $('.spanNoH').text(h);
$('.AllNo').text(All);
}
const RemoveBtnH=()=>{
  while (h===0) {
 $('.spanNoH').text(0);
  }
     h--;
     All--;
  $('.spanNoH').text(h);
 $('.AllNo').text(All); 
 
}
// 9
 export let i=0;
 const AddBtnI=()=>{
  i++;
  All++;
  $('.spanNoI').text(i);
$('.AllNo').text(All);
}
const RemoveBtnI=()=>{
  while (i===0) {
     $('.spanNoI').text(0);
  }
    i--;
    All--;
  $('.spanNoI').text(i);
  $('.AllNo').text(All);
}
// 10
 export let j=0;
 const AddBtnJ=()=>{
  j++;
  All++;
  $('.spanNoJ').text(j);
$('.AllNo').text(All);
}
const RemoveBtnJ=()=>{
  while (j===0) {
 $('.spanNoJ').text(0);
  }
      j--;
      All--;
  $('.spanNoJ').text(j);
  $('.AllNo').text(All);
}

// 11
 export let k=0;
 const AddBtnK=()=>{
  k++;
  All++;
  $('.spanNoK').text(k);
$('.AllNo').text(All);
}
const RemoveBtnK=()=>{
  while (k===0) {
 $('.spanNoK').text(0);
  }
        k--;
        All--;
  $('.spanNoK').text(k);
$('.AllNo').text(All);
}
// 12
 export let l=0;
 const AddBtnL=()=>{
  l++;
  All++;
  $('.spanNoL').text(l);
$('.AllNo').text(All);
}
const RemoveBtnL=()=>{
  while (l===0) {
     $('.spanNoL').text(0);
  }
  l--;
  All--;
  $('.spanNoL').text(l);
  $('.AllNo').text(All);
}
















export default Shopping;