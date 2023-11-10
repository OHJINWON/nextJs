'use client'
import { useState } from 'react';

export default function AddSchedule() {

    const [isCheck, setCheck] = useState(false);
    const [imgVal, setImgVal] = useState("off")
    const [tagLength, setTagLength] = useState(0);
    const [arr, setArray] = useState([]);

    const togglo_img = e => {
        const thisVal = e.target.dataset.val;
        const cN_Val = document.querySelectorAll(".center").length
        const cName = e.target.classList;

        alert(cN_Val);

        if(cName[0] == "bgImg") {
            setCheck(true);
            e.target.classList.replace('bgImg', 'minus');
            setTagLength(cN_Val)
            for(let i = 0; i <= arr.length; i++) {
                const addArray = arr.concat(i);
                setArray(addArray);
            }
        } else {
            if (Number(thisVal) + 2 == arr.length || cN_Val == 2) {
                e.target.classList.replace('minus', 'bgImg')
                const newArray = arr.slice(0, arr.length - 1)
                setArray(newArray);
                
            } else {
                alert("삭제 위치가 다릅니다.");
            }
        }
    }
    
    return <>
        <div className='line__box'>
            <div className="line">
                {/* 가운데 이미지 */}
                <div  data-position="center" onClick={togglo_img}  className='bgImg center'></div>
            </div>
        </div>
        { arr.map((a,i)=> {
            return (
                <div className='box__content' key={i}>
                    {
                        isCheck === true ? <div>
                            <div className="treeBox ch_treeBox">
                                <input className="treeText" type="text"/>
                            </div>
                    <div className='line__box'>
                        <div className="line">
                            {/* 가운데 이미지 */}
                            <div data-val={a} data-position="center aaa" onClick={togglo_img}  className='bgImg center'></div>
                        </div>
                    </div>
                        </div> : <div></div>
                    
                    }
                </div>
            )
        })
            
        }
    </>
}
