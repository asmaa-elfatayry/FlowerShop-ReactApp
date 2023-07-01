let AboutUs=()=>{
    return(
        <div >
            <h2 className="text-light" style={{
                backgroundImage: 'linear-gradient(to right,#cf5afe, #9b5efa)',
                height:'4em',
                padding:'1.2em 0em 0em 1.2em'
            }}>About Us</h2>
            <div className="row container" style={{
               fontSize:'1.3em',
                margin:'auto',
                padding:'2em'
            }}>
                <div className="col-lg-4 col-md-2 col-sm-12">
                    <img className="w-100" src={require('../images/flw3.png').default}/>
                </div>
                <div className="col-lg-8 col-md-10 col-sm-12" style={{padding:'1em'}}>
                    <p>Our Flowershop has been around in the flower shop industry since year 2010 and for 11 years we still continue to 
                        provide quality and surpassing service for our valued customers. The founders Ms. Emma San Jose and Ms. 
                        Sally San Jose have more than a decade of experience in the flower arrangement industry which serves as one
                         of the strength of shop.</p>
                         <p>
                           <h5 className="text-danger"> we created this shop for a reasons:</h5>
                             <ul>
                                 <li>to Make some one happy and gave him a flower.</li>
                                 <li>flower alaways make way better.</li>
                                 <li>the closest way to anyone's heart.</li>
                                 <li>to spread love and happiness.</li>

                             </ul>
                         </p>
                </div>
            </div>
        
        </div>

    )
}

export default AboutUs;
