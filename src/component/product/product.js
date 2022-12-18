import React, { useState, useRef, useEffect } from "react";
import Buttom from "./buttom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faCloudSunRain, faSmog, faSun } from '@fortawesome/free-solid-svg-icons'

import "./product.css";

function Product(props) {
   const [spost, setposts] = useState(true);
   const [post, setpost] = useState("");
   const [message, setMessage] = useState("");

   const chandleChange = (event) => {
      setMessage(event.target.value);
   };

   useEffect(() => {
      inputElement.current.focus();
   }, []);

   const inputElement = useRef();
   const click = () => {
      inputElement.current.focus();
      axios
         .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${message}&units=metric&appid=b101b5bb92363259f6e97d9afcaaeede`
         )
         .then((response) => {
            const respons = response.data;
            setpost(respons);
            setposts(false);
            setMessage("");
         })
         .catch((err) => alert(err));
   };
   function cik() {
      if (spost) {
      } else {
         return (
            <ul>
               <li>{`name: ${post.name}`}</li>
               <li>{`status: ${post.weather[0].main}`}</li>
               <li>{`humidity: ${post.main.humidity} `}</li>
               <li>{`wind: ${post.wind.speed} `}</li>
               <li>{`temp:  ${post.main.temp}`}</li>
               <li>{`feels: ${post.main.feels_like} `}</li>
            </ul>
         );
      }
   }
   const weather = post?.weather?.[0]?.main;
   useEffect(() => {
      if (props.mainRef?.current && post) {
         if (weather === "Clouds") {
            props.mainRef.current.style.backgroundColor = "#DCDCDC";
         } else if (
            weather === "Haze" ||
            weather === "Fog" ||
            weather === "Mist"
         ) {
            props.mainRef.current.style.backgroundColor = "#DCDCDC";
         } else if (weather === "Clear") {
            props.mainRef.current.style.backgroundColor = "#F2DF3A";
         } else if (weather === "Rain") {
            props.mainRef.current.style.backgroundColor = "#87CEFA";
         } else if (weather === "Snow") {
            props.mainRef.current.style.backgroundColor = "#87CEFA";
         }
      }
   }, [props.mainRef, post]);

   function image() {
      const weather = post?.weather?.[0]?.main;
      if (spost) {
      } else if (weather === "Clouds") {
         return <FontAwesomeIcon icon={faCloudSun} />
      } else if (
         weather === "Haze" ||
         weather === "Fog" ||
         weather === "Mist"
      ) {
         return <FontAwesomeIcon icon={faSmog} />
      } else if (weather === "Clear") {
         return <FontAwesomeIcon icon={faSun} />;
      } else if (weather === "Rain") {
         return <FontAwesomeIcon icon={faCloudSunRain} />;
      } else if (weather === "Snow") {
         return <FontAwesomeIcon icon={faSmog} />;
      }
   }
   return (
      <div className="full">
         <div className="est">
            <input
               type="text"
               ref={inputElement}
               onChange={chandleChange}
               value={message}
            />
            <div>
               <Buttom click={click} />
            </div>
            {image()}
         </div>
         {image()}
         <div>
            {cik()}
         </div>
      </div>
   );
}

export default Product;
// function images (){
//         if(spost){
//         }else{
//         const foo = post.weather[0].main;
//         switch (foo) {
//                 case "Clouds":
//                         <img src="http://sat24.mobi/Image/satir/afrika/sa"/>

//                 case "Haze":
//                         <img src="http://sat24.mobi/Image/satir/afrika/sa"/>
//                 case "Fog":

//                         <img src="http://sat24.mobi/Image/satir/afrika/sa"/>
//                 case "Clear":
//                         <img src="http://sat24.mobi/Image/satir/afrika/sa"/>
//                 break;
//                 default:
//                 console.log('ffref');
//                 }       }        }
