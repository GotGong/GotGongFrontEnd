import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link, resolvePath } from 'react-router-dom';
import NavBar2 from '../NavBar2.js';

function RefundShowPage() {
  const room_id = 1;
  const [name, setName] = useState('');
  const [money, setMoney] = useState('');
  const [refundList, setRefundList] = useState([]);


    axios
      .get(`http://localhost:8000/plan/refund/${room_id}/`)
      .then((response) => {
        console.log('refund API 연결 성공');
        const refundList = response.data;
        console.log('refundList:', refundList);
        var keys = Object.keys(refundList);
        const list = [];
        for (var i = 0; i < keys.length; i++) {
            // list.push(
            //     <div>{name[i]}</div>
            // )
          var name = keys[i];
          setName(name);
          setMoney(refundList[name]);
          console.log('name : ' + name + ', money : ' + refundList[name]);
      }})
      .catch(function (error) {
        console.error(error);
        console.log('refund API 연결 실패');
      });

  return (
    <>
      <NavBar2 />
      <div
        style={{
          position: 'fixed',
          backgroundColor: '#F5F5F5',
          top: '19%',
          left: '0%',
          width: '100%',
          height: '81%',
        }}
      >
        <div
          style={{
            position: 'fixed',
            top: '23%',
            left: '3.5%',
            width: '93%',
            height: '72%',
            display: 'grid',
          }}
        >
          <div
            style={{
              backgroundColor: '#BFBFBF',
              height: '982px',
              borderRadius: '20px',
              display: 'grid',
              alignItems: 'center',
              justifyItems: 'center',
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                width: '95%',
                height: '880px',
                borderRadius: '20px',
                display: 'grid',
                gridTemplateColumns: '63fr 37fr',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 8fr 1fr',
                  overflow: 'auto',
                }}
              >
                <div
                  style={{
                    borderTopLeftRadius: '20px',
                    borderBottomLeftRadius: '20px',
                  }}
                />
                <div
                  style={{
                    alignContent: 'start',
                    display: 'grid',
                    gridTemplateRows: '0.5fr 1.5fr 8fr',
                  }}
                >
                  {refundList}
                  <div />
                </div>
                <div />
              </div>
              <div
                style={{
                  backgroundColor: '#D9D9D9',
                  height: '880px',
                  display: 'grid',
                  gridTemplateRows: '1.8fr 6.4fr 1.8fr',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  borderTopRightRadius: '20px',
                  borderBottomRightRadius: '20px',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RefundShowPage;
