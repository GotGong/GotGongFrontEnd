import React ,{useState} from 'react';
import roomCodeEnterAPI from '../API/roomCodeEnterAPI';

function RoomCodeEnterPage() {
    const [roomCode,setRoomCode] = useState('')
    const codeEnter = () =>  {
        roomCodeEnterAPI(roomCode)
        .then((response)=> {
            if (response  !== ''){
                //setToken(response);
                //페이지 이동
            }
            else{
                alert('해당 코드가 존재하지 않습니다.');
            }
        })
    }

        return (
            <div className="RoomCodeEnterPageContainer">
                <div>
                    <h1>RoomCodeEnterPage입니다.</h1>
                </div>
                <div>
                    <input
                    name="roomcode"
                    type="text"
                    placeholder="참여코드"
                    value={roomCode}
                    
                    />
                    <button onChange={codeEnter}>
                        참여하기
                    </button>
                </div>
            </div>
        );
};

export default RoomCodeEnterPage;