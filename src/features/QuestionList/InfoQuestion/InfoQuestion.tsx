import React, {useEffect} from 'react'
import Cookies from "universal-cookie";
import axios from "axios";


const InfoQuestion = () => {
    useEffect(() => {
        const getInfoQuestionURL = "http://35.213.94.95:8899/api/questions/513"
        const cookies = new Cookies();
        const token = cookies.get("token");
        const instance = axios.create({
          baseURL: getInfoQuestionURL,
          headers: { Authorization: "Bearer " + token },
        });
    
        instance.get("").then((response) => {
            const {question_text} = response.data;
            console.log(question_text)
        });
      });

    return (
        <div>
            
        </div>
    )
}

export default InfoQuestion
