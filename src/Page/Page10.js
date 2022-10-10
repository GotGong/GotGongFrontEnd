import React from 'react';
import NavBar2 from '../NavBar2';
import { AiFillCheckSquare, AiOutlineBorder, AiOutlineFileText } from "react-icons/ai";
import '../css/Page10.css'


const Page10 = () => {
        return (
        <>
        <NavBar2 />
        <div style={{position: 'fixed', backgroundColor: '#F5F5F5', top: '19%', left: '0%', width: '100%', height: '81%'}}>
            <div style={{position: 'fixed', top: '23%', left: '3.5%', width: '93%', height: '72%', display: 'grid', gridTemplateColumns: '22fr 78fr'}}>
                <div style={{height: '982px', display: 'grid', gridTemplateRows: '14fr, 86fr'}}>
                    <div style={{backgroundColor: '#D9D9D9', height: "150px", borderTopLeftRadius: '20px', display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                        <text style={{fontSize: '3vh'}}>username의 계획</text>
                    </div>
                    <div style={{overflow: 'scroll', height: "832px",backgroundColor: '#FFFFFF', borderBottomLeftRadius: '20px', display: 'grid', gap: "10px", alignContent: 'start'}}>
                        {/* {planCategories} */}
                        수행 카테고리
                    </div>
                </div>
                <div style={{backgroundColor: '#BFBFBF', height: '982px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', display: 'grid', alignItems: 'center', justifyItems: 'center'}}>
                    <div style={{backgroundColor: 'white', width: '95%', height: '920px', borderRadius: '20px', display: 'grid', gridTemplateColumns: '63fr 37fr'}}>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 8fr 1fr', overflow:'auto'}}> 
                            <div style={{borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}}/>
                            <div style={{alignContent: "start", display: 'grid', gridTemplateRows: '0.5fr 1.5fr 8fr'}}>
                                <div/>
                                <div style={{height: "50px", display: 'grid'}}>
                                    <text style={{fontSize: '3vh'}}> {<AiOutlineFileText id='icon' size='70px'/>} 
                                    {/* {contents[currentPick]} */}
                                    콘텐츠
                                    </text>
                                </div>
                                <div style={{display: 'grid', height: "870px", alignContent: 'start'}}>
                                    {/* {detailContentsVar[currentPick]} */}
                                    디테일
                                </div>
                            </div>
                            <div/>
                        </div>
                        <div style={{backgroundColor: '#D9D9D9', height: '920px', display: 'grid', gridTemplateRows: '1.8fr 6.4fr 1.8fr', display: 'grid', alignItems: 'center', justifyContent: 'center', overflow:'hidden'}}>
                            <div style={{display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                                <text style={{fontSize: '3vh'}}>username의 n주차 계획</text>
                            </div>
                            <div style={{display: 'grid', alignSelf: 'center', justifyContent: 'space-evenly'}}>
                                <text style={{fontSize: '3.5vh'}}>
                                    {/* {<BiDislike size="90px"/>}  */}
                                    {/* {planDislike[currentPick]}  */}
                                    </text>
                            </div>
                            <div id='dislike_button' style={{width: '100%', backgroundColor: 'black', display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
                                {/* <button onClick={dislikeUp} style={{fontSize: '3vh', color: 'white'}}> */}
                                    {/* <BiDislike size="90px" color="white"/> */}
                                    {/* </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Page10;

