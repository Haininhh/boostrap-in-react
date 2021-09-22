import React, {useEffect} from 'react'
import Cookies from "universal-cookie";
import axios from "axios";


const InfoQuestion = () => {
    // useEffect(() => {
        const getInfoQuestionURL = "http://35.213.94.95:8899/api/questions/513"
        const cookies = new Cookies();
        const token = cookies.get("token");
        const instance = axios.create({
          baseURL: getInfoQuestionURL,
          headers: { Authorization: "Bearer " + token },
        });
    
        const question = instance.get("").then((response) => {
            const {question_text} = response.data;
            return question_text
        });
    //   });

    return (
        <div className="content">
            <p>
                Given two non-negative integers <code>low</code> 
                and <code>high</code>. Return the <em>count of odd numbers
                between </em><code>low</code><em> and </em><code>high</code>
                <em> (inclusive)</em>.
            </p>

<p> </p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> low = 3, high = 7
<strong>Output:</strong> 3
<b>Explanation: </b>The odd numbers between 3 and 7 are [3,5,7].</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> low = 8, high = 10
<strong>Output:</strong> 1
<b>Explanation: </b>The odd numbers between 8 and 10 are [9].</pre>

<p> </p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= low &lt;= high &lt;= 10^9</code></li>
</ul></div>
    
    )
}

export default InfoQuestion
