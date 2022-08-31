import { useEffect, useState } from "react"
import axios from "axios";
import '../css/Page9.css'
import { AiFillCheckSquare, AiOutlineBorder, AiOutlineFileText } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { resolvePath } from "react-router-dom";
import NavBar2 from "../NavBar2.js";


export default function Page9 () { // token, room_id는 Props로 받아온다고 가정 {token, user_id, room_id}
    // const token = localStorage.getItem('token');
    // const token = token
    // const user_id = user_id
    // const room_id = room_id

    // Test용 변수

    const token = '26480fdeeac7b3c985387732291204615c21de4f'
    const user_id = 2
    const room_id = 1
    
    // useState
    // State를 만드는 함수
    // State란? 결국 변수
    // 그러나 State가 변할때 페이지가 다시 렌더링 된다 => 즉 중요한 변수는 다 State이다
    // => 꼭 set{State명}으로면 변수값이 바뀐다
    // useState와 useEffect만 알면 프론트는 다 할 수 있으니 공부를 해보도록 하자
    const [planDislike, setPlanDislike] = useState([])
    const [planCategoriesNum, setPlanCategoriesNum] = useState(0)
    const [contents, setContents] = useState([])
    const [detailContents, setDetailContents] = useState([{'content': [], 'self_check': []}])
    const [currentPick, setCurrentPick] = useState(0)
    const [rerender, setRerender] = useState(true)
    const [nowPlan, setNowPlan] = useState(0)
    const [planId, setPlanId] = useState(0)
    const [username, setUsername] = useState('')
    //const [planStatus, setPlanStatus] = useState(true)

    useEffect(() => {
        // 통신 기본
        // useEffect => 2번째 파라미터로 들어오는 list에 있는 State 값이 바뀔때만 실행되는 함수
        // 이 페이지에서는
        // 1. get으로 통신 받아오기
        // 2. 통신 받아온 데이터를 setContents, setDetailContents 함수를 통해 처리만 진행하면 됨
        axios.get(`http://localhost:8000/plan/other_user_plans/${user_id}/${room_id}/`, 
        {headers: {
            Authorization: `Token ${token}`
        }})
        .then((response) => {
            console.log(response.data)
            setPlanCategoriesNum(response.data.entire_week/7)
            var temp = response.data.plan_info;
            setContents(temp.map(item => item.content))
            setPlanDislike(temp.map(item => item.dislike_check))
            const d_plan = []
            for(let i=0; i<response.data.plan_info.length; i++) {
                const dic = {}
                var detail_plan = response.data.plan_info[i].detail_plans;
                dic['content'] = detail_plan.map(item => item.content)
                dic['self_check'] = detail_plan.map(item => item.self_check)
                d_plan.push(dic)
            }
            setDetailContents(d_plan)
            for(let i=0; i<response.data.plan_info.length; i++) {
                if (temp[i].plan_status === true) {
                        setNowPlan(i)
                }
            }
            setPlanId(temp.map(item => item.id))
            setUsername(response.data.username)
        })
    }, [])

    const dislikeUp = () =>  {
        let temp2 = planDislike
        axios.post('http://localhost:8000/plan/dislike/', {
            'plan_id': planId[currentPick]
        }, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then((response) => {
            temp2[currentPick] += 1
            setPlanDislike(temp2)
            setRerender(!rerender)
        })
    }

    const planCategories = []
    for(let i = 0; i < planCategoriesNum; i++) {
        if (i < detailContents.length) {
            if (i === nowPlan) {
                planCategories.push(
                    <div style={{width: '100%', height: '80px', borderRadius: '20px', display: 'grid',  alignItems: 'center', justifyItems: 'center'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#BFBFBF'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
                        <text id="now_plan" style={{fontSize: '3vh', userSelect: 'none'}} onClick={() => setCurrentPick(i)}>#{username}의 {i+ 1}주차 계획</text>
                    </div>
                )
            }
            else {
                planCategories.push(
                    <div style={{width: '100%', height: '80px', borderRadius: '20px', display: 'grid', alignItems: 'center', justifyItems: 'center'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#BFBFBF'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
                        <text id="user_plan" style={{fontSize: '3vh', userSelect: 'none'}} onClick={() => setCurrentPick(i)}>#{username}의 {i+ 1}주차 계획</text>
                    </div>
                )
            }
        }
        else {
            planCategories.push(
                <div style={{width: '100%', height: '80px', borderRadius: '20px', display: 'grid', alignItems: 'center', justifyItems: 'center'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#BFBFBF'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
                    <text id="later_plan" style={{fontSize: '3vh', userSelect: 'none'}} onClick={() => setCurrentPick(i)}>#{username}의 {i+ 1}주차 계획</text>
                </div>
            )
        }
    }

    const detailContentsVar = []
    for (let i = 0; i<detailContents.length; i++) {
        const temp = []
        for (let j = 0; j < detailContents[i].content.length; j++) {
            temp.push(
                <div id='content' style={{display: 'grid', gridTemplateColumns: '1fr 9fr'}}>
                    <div id='details' style={{display:'grid'}}>   
                        <div>
                            <text style={{fontSize: '3vh'}}> 
                            {detailContents[i].self_check[j] ? 
                            <AiFillCheckSquare id='icon' size="80px"/> : <AiOutlineBorder id='icon' size="80px"/>} </text>
                        </div>
                        <div style={{display:'grid', alignContent: "start", paddingTop: "15px"}}>
                            <text style={{fontSize: '3vh'}}>{detailContents[i].content[j]}</text>
                        </div>
                    </div> 
                </div>
            )
        }
        detailContentsVar.push(temp)
    }

    return (
        <>
        <NavBar2 />
        <div style={{position: 'fixed', backgroundColor: '#F5F5F5', top: '19%', left: '0%', width: '100%', height: '81%'}}>
            <div style={{position: 'fixed', top: '23%', left: '3.5%', width: '93%', height: '72%', display: 'grid', gridTemplateColumns: '22fr 78fr'}}>
                <div style={{height: '982px', display: 'grid', gridTemplateRows: '14fr, 86fr'}}>
                    <div style={{backgroundColor: '#D9D9D9', height: "150px", borderTopLeftRadius: '20px', display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                        <text style={{fontSize: '3vh'}}>{username}의 계획</text>
                    </div>
                    <div style={{overflow: 'scroll', height: "832px",backgroundColor: '#FFFFFF', borderBottomLeftRadius: '20px', display: 'grid', gap: "10px", alignContent: 'start'}}>
                        {planCategories}
                    </div>
                </div>
                <div style={{backgroundColor: '#BFBFBF', height: '982px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', display: 'grid', alignItems: 'center', justifyItems: 'center'}}>
                    <div style={{backgroundColor: 'white', width: '95%', height: '920px', borderRadius: '20px', display: 'grid', gridTemplateColumns: '63fr 37fr'}}>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 8fr 1fr', overflow:'auto'}}> 
                            <div style={{borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}}/>
                            <div style={{alignContent: "start", display: 'grid', gridTemplateRows: '0.5fr 1.5fr 8fr'}}>
                                <div/>
                                <div style={{height: "50px", display: 'grid'}}>
                                    <text style={{fontSize: '3vh'}}> {<AiOutlineFileText id='icon' size='70px'/>} {contents[currentPick]}</text>
                                </div>
                                <div style={{display: 'grid', height: "870px", alignContent: 'start'}}>
                                    {detailContentsVar[currentPick]}
                                </div>
                            </div>
                            <div/>
                        </div>
                        <div style={{backgroundColor: '#D9D9D9', height: '920px', display: 'grid', gridTemplateRows: '1.8fr 6.4fr 1.8fr', display: 'grid', alignItems: 'center', justifyContent: 'center', overflow:'hidden'}}>
                            <div style={{display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                                <text style={{fontSize: '3vh'}}>친구들의 평가</text>
                            </div>
                            <div style={{display: 'grid', alignSelf: 'center', justifyContent: 'space-evenly'}}>
                                <text style={{fontSize: '3.5vh'}}>{<BiDislike size="90px"/>} {planDislike[currentPick]} </text>
                            </div>
                            <div id='dislike_button' style={{width: '100%', backgroundColor: 'black', display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                                <button onClick={dislikeUp} style={{fontSize: '3vh', color: 'white'}}><BiDislike size="90px" color="white"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
