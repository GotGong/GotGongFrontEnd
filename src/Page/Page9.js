import { useEffect, useState } from "react"
import axios from "axios";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";

export default function Page9 () { // token, room_id는 Props로 받아온다고 가정 {token, user_id, room_id}

    // const token = token
    // const user_id = user_id
    // const room_id = room_id

    // Test용 변수
    const token = '2b78c5cf37d68b3ab34ec0ad54135dd03a07e192'
    const user_id = 1
    const room_id = 1
    
    // useState
    // State를 만드는 함수
    // State란? 결국 변수
    // 그러나 State가 변할때 페이지가 다시 렌더링 된다 => 즉 중요한 변수는 다 State이다
    // => 꼭 set{State명}으로면 변수값이 바뀐다
    // useState와 useEffect만 알면 프론트는 다 할 수 있으니 공부를 해보도록 하자
    const [planCategoriesNum, setPlanCategoriesNum] = useState(8)
    const [contents, setContents] = useState([])
    const [detailContents, setDetailContents] = useState([{'content': [], 'check': []}])
    const [currentPick, setCurrentPick] = useState(0)
    const [rerenderingVar, setRerenderingVar] = useState(true)

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
        .then((response) => {console.log(response)})

        setContents([
            '1주차 Content', 
            '2주차 Content', 
            '3주차 Content', 
            '4주차 Content', 
            '5주차 Content', 
            '6주차 Content', 
            '7주차 Content', 
            '8주차 Content',
        ])
        setDetailContents([
            {'content': ['1주차 DetailPlan Content - 1', '1주차 DetailPlan Content - 2'], 'check': [true, false]},
            {'content': ['2주차 DetailPlan Content - 1', '2주차 DetailPlan Content - 2'], 'check': [true, false]},
            {'content': ['3주차 DetailPlan Content - 1', '3주차 DetailPlan Content - 2'], 'check': [true, false]},
            {'content': ['4주차 DetailPlan Content - 1', '4주차 DetailPlan Content - 2'], 'check': [true, false]},
            {'content': ['5주차 DetailPlan Content - 1', '5주차 DetailPlan Content - 2'], 'check': [true, false]},
            {'content': ['6주차 DetailPlan Content - 1', '6주차 DetailPlan Content - 2'], 'check': [true, false]},
            {'content': ['7주차 DetailPlan Content - 1', '7주차 DetailPlan Content - 2'], 'check': [true, false]},
            {'content': ['8주차 DetailPlan Content - 1', '8주차 DetailPlan Content - 2'], 'check': [true, false]},
        ])
    }, [])

    const planCategories = []
    for(let i = 0; i < planCategoriesNum; i++) {
        planCategories.push(
            <div style={{width: '100%', height: '60px', borderRadius: '20px', display: 'grid', justifyItems: 'center', alignItems: 'center'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#BFBFBF'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
                <text style={{fontSize: '3vh', userSelect: 'none'}} onClick={() => setCurrentPick(i)}>#준호의 {i+ 1}주차 계획</text>
            </div>
        )
    }

    const detailContentsVar = []
    for(let i = 0; i < detailContents[currentPick].content.length; i++) {
        detailContentsVar.push(
            <div style={{width: '100%', height: '50px', display: 'grid', gridTemplateColumns: '1fr 9fr'}}>
                <div style={{display: 'grid', justifyItems: 'center', alignItems: 'center'}}>
                    {detailContents[currentPick].check[i] ? 
                    <MdOutlineCheckBox/> : 
                    <MdOutlineCheckBoxOutlineBlank/>}
                </div>
                <div style={{display: 'grid', alignItems: 'center'}}>
                    <text style={{fontSize: '3vh'}}>{detailContents[currentPick].content[i]}</text>
                </div> 
            </div>
        )
    }

    return (
        <div style={{position: 'fixed', backgroundColor: '#F5F5F5', top: '19%', left: '0%', width: '100%', height: '81%'}}>
            <div style={{position: 'fixed', top: '23%', left: '3.5%', width: '93%', height: '72%', display: 'grid', gridTemplateColumns: '22fr 78fr'}}>
                <div style={{display: 'grid', gridTemplateRows: '14fr 86fr'}}>
                    <div style={{backgroundColor: '#D9D9D9', borderTopLeftRadius: '20px', display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                        <text style={{fontSize: '3vh'}}>준호의 계획</text>
                    </div>
                    <div style={{backgroundColor: '#FFFFFF', borderBottomLeftRadius: '20px', display: 'grid', overflow: 'scroll', overflowX: 'hidden', overflowY: 'auto'}}>
                        {planCategories}
                    </div>
                </div>
                <div style={{backgroundColor: '#BFBFBF', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', display: 'grid', alignItems: 'center', justifyItems: 'center'}}>
                    <div style={{backgroundColor: 'white', width: '95%', height: '93%', borderRadius: '20px', display: 'grid', gridTemplateColumns: '63fr 37fr'}}>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 8fr 1fr'}}> 
                            <div style={{borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}}/>
                            <div style={{display: 'grid', gridTemplateRows: '1fr 2fr 7fr'}}>
                                <div/>
                                <div>
                                    <text style={{fontSize: '5vh'}}>{contents[currentPick]}</text>
                                </div>
                                <div>
                                    {detailContentsVar}
                                </div>
                            </div>
                            <div/>
                        </div>   
                        <div style={{backgroundColor: '#D9D9D9', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
