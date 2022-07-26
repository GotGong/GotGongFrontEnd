import axios from "axios";


const MyRoomListAPI = async (token) => {
        // let myRoomList = []
        axios.get('http://localhost:8000/room/myroomlist/',
        { headers: {
                Authorization:`Token ${token}`,
        }})
        .then((response) => {
            // response = response.data.my_room_list;
            console.log('checkkk');
            console.log(response.data);
            const roomTitle = [];
            for(let i =0; i < response.data.length; i++)
            {
                console.log('for문');
                roomTitle.push(
                    <div key={i}>
                        <h4>{response[0][i].title}</h4>
                    </div>
                )
            }
        })
        .catch(function (error) {
            console.log(token);
            console.error(error.response.data); 
        });
}

export default MyRoomListAPI;