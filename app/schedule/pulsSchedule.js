'use client'

import { useState } from "react";

export default function PulsSchedule() {

    const [arr, setArr] = useState([]);
    const [length, setLength] = useState(0);


    const togglo_img = e => {
        const className = e.target.classList;
        const classLength = document.querySelectorAll(".aa").length;
        if(className == "boxAdd") {
            e.target.classList.replace("boxAdd", "boxMinus");
            setLength(classLength);
            
            for(let i = 0; i <= arr.length; i++) {
                const newArr = arr.concat(i);
                setArr(newArr);
            }
        } else {
            if (Number(classLength) + 2 == arr.length || classLength == 2) {
                e.target.classList.replace('boxMinus', 'boxAdd')
                const newArray = arr.slice(0, arr.length - 1)
                setArr(newArray);
                
            } else {
                alert("삭제 위치가 다릅니다.");
            }    
        }
    }


    return <>
    <div className='boxAdd' onClick={togglo_img}></div> 
    
    {
        arr.map((i,k)=> {
            return <>
                <div className='aa box__01' key={k}>
                    <div className='box__content'>
                        <div className="treeBox">
                            <input className="treeText" type="text"/>
                        </div>
                    </div>
                </div>
                <div className='boxAdd' onClick={togglo_img}></div> 
    
            </>
            
        })
    }
    

    </>

}