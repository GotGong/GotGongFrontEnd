import React , {useState} from 'react';
import showPlanAPI from '../API/showPlanAPI';
import showDetailPlanAPI from '../API/showDetailPlanAPI';

function MakePlanPage(token){



    return(
        <div>
            <div>
                //plan content
            </div>
            <div>
                //detailplan content
            </div>
            <div>
                <button>detail plan 추가</button>
            </div>
            <div>
                <button>첨부하기</button>
            </div>
            <div>
                {/* 이 버튼 머지? */}
                <button>새 계획 작성하기</button>
            </div>
        </div>
    )
};

export default MakePlanPage;
