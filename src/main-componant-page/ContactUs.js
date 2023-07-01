let ContactUs=()=>{
    return(
        <div>

<div class="container row" style={{
  backgroundColor: '#212122',
      width: '60%',
      margin:'5em auto',
      color: '#fff',
      padding: '5em'
}}>
    <h2 className="text-center text-light" style={{borderBottom:'1px solid #ffc107',paddingBottom:'1em',marginBottom:'1.5em'}}>Contact Us</h2>
           <div className="col-lg-6">
            <h3 className="text-light"><i style={{paddingRight:'.6em',color:'#ffc107'}} class="fa fa-phone" aria-hidden="true" ></i>Call Us</h3>
            <p>1 (234) 567-891, 1 (234) 987-432</p>
            
            </div>
            <div className="col-lg-6">
            <h3 className="text-light"><i style={{paddingRight:'.6em',color:'#ffc107'}}class="fa fa-map-marker" aria-hidden="true"></i>Location</h3>
            <p>121 Mac Street, Cairo, Egypt, NY 9213-900  </p>
            </div>
            <div className="col-lg-6">
            <h3 className="text-light"><i  style={{paddingRight:'.6em',color:'#ffc107'}}class="fa fa-clock-o" aria-hidden="true"></i>Work Hours</h3>
            <p>every day from 9am to 4pm <br/>and from 5pm to 3am</p>

            </div>
            <div className="col-lg-6">
            <h3 className="text-light"><i  style={{paddingRight:'.6em',color:'#ffc107'}} class="fa fa-envelope-o" aria-hidden="true"></i>Email</h3>
            <p className="text-decoration-underline"> shop_flower@outlook.com</p>
            </div>
        </div>

        </div>
    )
}




export default ContactUs;