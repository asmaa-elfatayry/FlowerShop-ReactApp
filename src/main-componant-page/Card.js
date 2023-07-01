import {All,a,b,c,d,e,f,g,h,i,j,k,l} from '../component/Buy-Flower';
import {Link} from 'react-router-dom';


let span="";
// detail of flower want to buy
Ready();
// to check if he register and login or not
function Confirm(){
    if(localStorage.getItem('RegestrationState')==="Done"){
    if(localStorage.getItem('StateLogin')==="Done"){
        alert('Congratlete process completed :)');
    }else{
        alert('you must login first !');
    }
    }
    else{
    alert("you must Regestir and Login first");
    }
}
let MyCard=()=>{
    return(
       <div>
       <h2 class="text-center" style={{
           backgroundColor:'#ffa7a7',
           hieght:'4em',
           fontSize:'1.6em',
           color:'#fff',
           padding:'1em'
       }}>Confirm the shopping process</h2>
<div class="car col-lg-6 col-md-3 container" style={{
maxWidth:'none',
margin:'2em auto',
boxShadow:'0 2px 6px 0 hsla(0,0%,0%,.2)',
}}>
    <div className="text-center" >
  <img style={{width:'35%'}} src={require('../images/car.png').default} className=" text-center"  alt="car"/>
  </div>
  {/* <Link to="/SliderPage" class="text-center text-muted text-decoration-underline">Learn More</Link> */}
  <div className="text-center" style={{padding:'1em'}}>
      <h3 className="">All flower you will buy is {All} package   </h3>
      <p> Details: {span} </p>
  </div>
  
  <input type="checkbox"/> <label>I will pay cash </label> 
  <p className="text-right"> <span className="text-danger">Note:</span> you must
  <Link to="/RegisterPage"> Register</Link> and  <Link to="/LogingPage"> Login </Link> 
   login first</p>

  <div class="card-body text-center">
  <input type="button"  class="btn btn-dark " onClick={Confirm}  value="Confirm"/> 
  <input type="button"  class="btn btn-danger " value="Cancel"/> 

  </div>
</div>


       </div>

    )
}

function Ready(){
if (a!==0)
span+=`${a} Roses Flower `;

if (b!==0)
span+=`,${b} Peony Flower `;

if (c!==0)
span+=`,${c} colorful flowers `;

if (d!==0)
span+=`,${d} Azalea Flower`;

if (e!==0)
span+=`,${e} Carnation Flower `;

if (f!==0)
span+=`,${f} Water Lily Flower `;

if (g!==0)
span+=`,${g} Aster Flower `;

if (h!==0)
span+=`,${h} Sunflower `;

if (i!==0)
span+=`,${i} Daffodil Flower `;

if (j!==0)
span+=`,${j} Azalea Flower `;

if (k!==0)
span+=`,${k} Tulip Flower `;

if (l!==0)
span+=`,${l} Marigold Flower `;

}


export default MyCard;