'use client'
import { useEffect, useState } from "react";
import AddSchedule from './addSchedule';

export default function PulsSchedule() {

    const [arr, setArr] = useState([]);
    const [length, setLength] = useState(0);
    const [userState, setUserState] = useState(false);


    const togglo_img = e => {
        const className = e.target.classList;
        const classLength = document.querySelectorAll(".aa").length;
        const tagVal = e.target.dataset.val;


        if(className == "boxAdd") {
            //userBuy = 인풋 2개까지 생성
            //aa = 인풋 무제한
            if (userState === false && arr.length >= 2) {
                alert("더이상 증가하지 않습니다.")
            } else {
                e.target.classList.replace("boxAdd", "boxMinus");
                setLength(classLength);
                for(let i = 0; i <= arr.length; i++) {
                    const newArr = arr.concat(i);
                    setArr(newArr);
                }
            }
            
        } else {
            if (Number(tagVal)+1 == arr.length || classLength == 2) {
                e.target.classList.replace('boxMinus', 'boxAdd')
                const newArray = arr.slice(0, arr.length - 1)
                setArr(newArray);
                
            } else {
                alert("마지막 버튼부터 눌러주세요.");
            }    
        }
    }


    return <>
    <div className='boxAdd' onClick={togglo_img}></div> 
    
    {
        arr.map((i,k)=> {
            return <>
                <div className={`aa box__` + i} key={k}>
                    <div className='box__content'>
                        <div className="treeBox">
                            <textarea className="treeText" type="text"/>
                        </div>
                    </div>
                    <AddSchedule/>
                </div>
                <div id={'add__' + i}  data-val={i+1} className='boxAdd' onClick={togglo_img}></div>                 
                
            </>
            
        })
    }
    

    </>
}




