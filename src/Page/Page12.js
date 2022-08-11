import React, { useEffect, useState } from "react";
import '../css/Page12.css'
import axios from "axios";
export default function Page12 ({token, room_id}) { // token, room_id는 Props로 받아온다고 가정 {token, room_id}

    const token = token
    const room_id = room_id;

    // Test용 -> 잘 되는거 확인 완료
    // const token = 'ca1fd0e3be8a4178385dc8e4f665b5663dfb4481'
    // const room_id = 8;
    
    const [content, setContent] = useState('')
    const contentHandler = (e) => {
        setContent(e.target.value)
    }

    const [detail_contents, setDetail_contents] = useState([''])
    const detail_contentHandler = (e) => {
        let copyArray = detail_contents;
        copyArray[e.target.name - 1] = e.target.value
        setDetail_contents(copyArray)
    }

    const [detail_plans, setDetail_plans] = useState([<div style={{height: '10px', width: '100%'}}></div>, 
    <div style={{height: '100px', width: '100%'}}>
        <div style={{display: 'grid', gridTemplateColumns: '2fr 92fr 2fr'}}>
            <div/>
            <input name={1} style={{background: '#FFFFFF', width: '100%', borderRadius: '20px', borderColor: 'white', height: '80px'}} onChange={detail_contentHandler}/>
            <div/>
        </div>
        <div></div>
    </div>
    ]);
    const [detail_num, setDetail_num] = useState(2)
    
    const[rerender, setRerender] = useState(true)

    useEffect(() => {
        let temp = detail_plans
        let temp2 = detail_contents
        temp.push(
            <div style={{height: '100px', width: '100%'}}>
                <div style={{display: 'grid', gridTemplateColumns: '2fr 92fr 2fr'}}>
                    <div/>
                    <input name={detail_num} style={{background: '#FFFFFF', width: '100%', borderRadius: '20px', borderColor: 'white', height: '80px'}} onChange={detail_contentHandler}/>
                    <div/>
                </div>
                <div></div>
            </div>
        )
        temp2.push('')
        setDetail_contents(temp2)
        setDetail_plans(temp)
        setDetail_num(detail_num + 1)
    }, [rerender])

    const postPlan = () => {
        console.log(detail_contents)
        console.log(detail_num)
        axios.post('http://localhost:8000/plan/', {
            'room_id': room_id,
            'content': content,
            'detail_num': detail_num - 1,
            'detail_content': detail_contents
        }, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
    }

    return (
        <div id="Page12-container">
            <div/>

            <div id="Page12-plan">
                <div/>
                <div id="Page12-document-img-wrapper" style={{width: '100%', backgroundColor: 'white', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', display:'grid', justifyItems: 'center', paddingTop: '25%'}}>
                    <img src={ require('../img/Document.png')} style={{width: '30px', height: '40px'}}/>
                </div>
                <div id='Page12-textarea-wrapper'>
                    <textarea onChange={contentHandler}/>
                </div>
                <div style={{backgroundColor: 'white', width: '100%', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}/>
                <div/>
            </div>

            <div/>

            <div id="Page12-detail-plans">
                {detail_plans}
            </div>
            <div/>
            <div id="Page12-button">
                <div style={{height: '80px', width: '100%'}}>
                    <div style={{display: 'grid', gridTemplateColumns: '2fr 32fr 62fr'}}>
                        <div/>
                        <button name={1} style={{background: '#FFFFFF', width: '100%', borderRadius: '20px', borderColor: 'white', color: '#BFBFBF', fontSize: '80px'}} onClick={setRerender}>+</button>
                        <div/>
                    </div>
                </div>
                <div style={{display:'grid', justifyItems: 'center'}}>
                <button onClick={postPlan}>새 계획 작성하기</button>
                </div>
            </div>
        </div>
    )
}