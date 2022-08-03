import React , {useState} from 'react';
import showPlanAPI from '../API/showPlanAPI';
import showDetailPlanAPI from '../API/showDetailPlanAPI';

function ShowPlanPage(token){
    const [dislike_check,setDislike_check]=useState('');
    const [room_id,setRoom_id]=useState('');
    const [plan_id,setPlan_id]=useState('');
    const username  = localStorage.getItem('username');

    showPlanAPI(token, room_id)
        .then((response) => {
            //!! response값을 week에 넣기
            const week = response;
            console.log("n주차 숫자 받아오기");
        })
        .catch(()=>
        {
            console.log("n주차 숫자 받아오기 실패");
        });

    showDetailPlanAPI(token, plan_id)
        .then((response) => {
            console.log(response);
        })
        .catch((error)=>
        {
            console.log(error);
        });

    function weekNum(username, week){
        let w = [];
        for(var i=1; i<week+1; i++){
            w.push(
                <div>
                    <span>#{username}의 {i}주차 계획</span>
                </div>
            )
        }
        return w;
    };


    return(
        <div>
            <div>
                <span>{username}의 계획</span>
            </div>
            <div>
                <li>
                    <ul>
                        {weekNum}
                    </ul>
                </li>
            </div>
            <div>
                //plan content
            </div>
            <div>
                //detailplan content
            </div>
            <div className='dislikeForm'>
                <div>
                    <span>친구들의 평가</span>
                </div>
                <div>
                    {dislike_check}
                </div>
                <div>
                    <button>반대</button>
                </div>
            </div>
        </div>
    )

};

export default ShowPlanPage;