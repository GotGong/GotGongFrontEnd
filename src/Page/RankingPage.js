import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link, resolvePath } from "react-router-dom";
import NavBar2 from "../NavBar2.js";


function RankingPage() {
    const room_id = 1
    
    axios
        .get(`http://localhost:8000/plan/rank/${room_id}/`)
        .then((response) => {
            console.log(response);
            console.log('ranking API 연결 성공');
        })
        .catch(function(error){
            console.error(error.response);
            console.log('ranking API 연결 실패');
            
        })

    return (
        <>
        <NavBar2 />
        <div style={{position: 'fixed', backgroundColor: '#F5F5F5', top: '19%', left: '0%', width: '100%', height: '81%'}}>
            <div style={{position: 'fixed', top: '23%', left: '3.5%', width: '93%', height: '72%', display: 'grid'}}>
                <div style={{backgroundColor: '#BFBFBF', height: '982px', borderRadius: '20px', display: 'grid', alignItems: 'center', justifyItems: 'center'}}>
                    <div style={{backgroundColor: 'white', width: '95%', height: '880px', borderRadius: '20px', display: 'grid', gridTemplateColumns: '63fr 37fr'}}>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 8fr 1fr', overflow:'auto'}}> 
                            <div style={{borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px'}}/>
                            <div style={{alignContent: "start", display: 'grid', gridTemplateRows: '0.5fr 1.5fr 8fr'}}>
                                <div/>
                                
                            </div>
                            <div/>
                        </div>
                        <div style={{backgroundColor: '#D9D9D9', height: '880px', display: 'grid', gridTemplateRows: '1.8fr 6.4fr 1.8fr', display: 'grid', alignItems: 'center', justifyContent: 'center', overflow:'hidden', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default RankingPage;