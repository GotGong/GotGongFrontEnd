import React,{ useEffect,useParams, useRef } from 'react';
import axios from 'axios';
import '../css/Page11.css';


const Page11 = () => {
    const imageInput = useRef();


    const imageUploadHandler = () => {
        // const reader = new FileReader();
        // reader = reader.readAsDataURL(imageInput.current.click());
        // console.log(reader);
        imageInput.current.click();
        console.log(imageInput);
        // console.log(e.target.files[0]);
    }

    // const user_id = localStorage.getItem('userid');
    // const room_id = 7;
    const params = useParams();

    var room_id = params.room_id;
    const token = localStorage.getItem("token");


    useEffect(() => {
        // 통신 기본
        // useEffect => 2번째 파라미터로 들어오는 list에 있는 State 값이 바뀔때만 실행되는 함수
        // 이 페이지에서는
        // 1. get으로 통신 받아오기
        // 2. 통신 받아온 데이터를 setContents, setDetailContents 함수를 통해 처리만 진행하면 됨
        axios.get(`http://localhost:8000/plan/user_plans/${room_id}/`, 
        {headers: {
            Authorization: `Token ${token}`
        }})
        .then((response) => {
            console.log(response.data);
        })
    }, [])

    return (
        <>
            <script src='script.js'></script>
            <div id = "container">
                <div id='top'>
                    <div id = 'leftItem'>

                    </div>
                    <div id = 'rightItem'>

                    </div>
                </div>
                <div id='down'>
                    <div className='filebox'>
                        <input className ='upload-name' value='첨부파일' placeholder='첨부파일' onChange={imageUploadHandler}></input>
                        <label htmlFor ='file'>첨부하기</label>
                        <input type="file" id="file"></input>
                    </div>
                </div>
                <div 
                style={
                    {display:'grid', 
                    justifyItems: 'center',
                    }}
                    >
                    <button>새 수행 작성하기</button>
                </div>
            </div>
        </>     
    );
};

export default Page11;



