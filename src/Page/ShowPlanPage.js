import React , {useState} from 'react';
import showPlanAPI from '../API/showPlanAPI';

function ShowPlanPage(token){
    const [username,setUsername]=useState('');
    const [week,setWeek]=useState('');
    const [dislike_check,setDislike_check]=useState('');
    const [room_id,setRoom_id]=useState('');

    const showPlan = () => {
        showPlanAPI(token, room_id)
        .then(() => {
            console.log("내 계획 보여주기");
        })
    };

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
                        {weekNum(username,week)}
                    </ul>
                </li>
            </div>
            <div>
                //plan content
            </div>
            <div>
                //detailplan content
            </div>
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
    )

};

export default ShowPlanPage;