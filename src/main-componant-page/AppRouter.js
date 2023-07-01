import { BrowserRouter,Route } from 'react-router-dom'
import Home from './Home'
import Login from './login'
import Header from '../component/Header'
import Register from './register'
import Navbar from './navbar'
import Slider from './Slider'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import MyCard from './Card.js'
// the only stylesheet
import './MainStyle.css'
// this page will call all components and link with index.js
let AppRouter=()=>{
    
        return(
            <div>
              
             

                <BrowserRouter> 
               
                <Navbar/>
            
              
              <Route component={(props)=> <Home {...props}/>} path="/HomerPage" /> 
              <Route component={(props)=> <Login {...props}/>} path="/LogingPage" />
              <Route component={(props)=> <Register {...props}/>} path="/RegisterPage" /> 
              <Route component={(props)=> <Slider {...props}/>} path="/SliderPage" /> 
              <Route component={(props)=> <AboutUs {...props}/>} path="/AboutUSPage" /> 
              <Route component={(props)=> <ContactUs {...props}/>} path="/ContactUSPage" />
               <Route component={(props)=> <MyCard {...props}/>} path="/CardPage" />
           
         
              </BrowserRouter> 
            </div>

        )
        
}

export default AppRouter;