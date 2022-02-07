 import React from 'react';
 import { Carousel } from 'react-responsive-carousel';
 import "react-responsive-carousel/lib/styles/carousel.min.css";

 
 const ProjectsCarouse = () => {
   return (
     <Carousel
     showArrows={true}
     infiniteLoop={true}
     showThumbs={false}
     showStatus={false}
     autoPlay={true}
     interval={4000}
     stopOnHover={true}
     >
        <>
            <div className="myCarousel">

                <h5>School Management System</h5>
                <hr />
                <p>School Management System: E-registry book of Primary school</p>
                <p>  ( Java, NetBeans, MySQL )  </p>
                <p><small>©2020</small></p>
              
            </div>
        </>
        <>
            <div className="myCarousel">
                <h5>E-commerce "SEVERIN".</h5>
                <hr />
                <p>It's one great and exciting project.</p>
                <p> ( HTML, CSS, PHP, Bootstrap, MySQL, Adobe Photoshop ) </p>
                <p><small>©2017</small></p>
            </div>
            
        </>
        <>
            <div className="myCarousel">
                <h5>Certificate Printing Program for Primary Schools</h5>
                <hr />
                <p>Project program for creating and printing Certificate for Primary Schools</p>
                <p> ( Visual Studio, Visual Basic, Microsoft word, Adobe Photoshop ) </p>
                <p><small>©2021</small></p>
            </div>
        </>
        <>
            <div className="myCarousel">
                <h5>Mobile App Development: "Parking Orašje"</h5>
                <hr />
                <p>Parking Orasje is a simple presentation application. Group project of colleagues in the study of informatics</p>
                <p> ( Java, Android Studio, FireBase ) </p>
                <p><small>©2020</small></p>
            </div>
        </>
        <>
            <div className="myCarousel">
                <h5>Stickers for office folders</h5>
                <hr />
                <p>Project program for creating sticker of office folders.</p>
                <p> ( Visual Studio, Visual Basic, Microsoft word, Adobe Photoshop ) </p>
                <p><small>©2021</small></p>
            </div>
        </>
        <>
            <div className="myCarousel">
                <h5>Programming in Java AutoService</h5>
                <hr />
                <p>Basic program in Java. Group project made for college courses and exercise.</p>
                <p> ( JAVA, NetBeans, JDK, JavaFx, MySQL ) </p>
                <p><small>©2019</small></p>
            </div>
        </>

        <>
            <div className="myCarousel">
                <h5>CMS Project Cinema Orasje</h5>
                <hr />
                <p>CMS-'Conetent Management System' in the example. 'Cinema Orasje' or the original name in the Croatian language "Kino Orašje".</p>
                <p> ( HTML, CSS, PHP, Bootstrap, MySQL, Photoshop ) </p>
                <p><small>©2018</small></p>
            </div>
        </>

        <>
            <div className="myCarousel">
                <h5>License Plate Detection BiH RCNN</h5>
                <hr />
                <p>License Plate Detection Bosnia and Herzegovina with RCNN. 'Detekcija registarskih oznaka BiH putem RCNN'.</p>
                <p> ( Python, Google Colab ) </p>
                <p><small>©2020</small></p>
            </div>
        </>

        <>
            <div className="myCarousel">
                <div className='carous'>
                <h5>Basic Internet Website</h5>
                <hr />
                <p>Simple website. My first solo project, making a website.Simple website. My first solo project, making a website.</p>
                <p> ( HTML & CSS ) </p>
                <p><small>©2015</small></p>
                </div>
            </div>
        </>

     </Carousel>
   )
 }
 
 export default ProjectsCarouse
 