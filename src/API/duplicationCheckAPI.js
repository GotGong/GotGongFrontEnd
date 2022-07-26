import axios from 'axios';

const duplicationCheckAPI = async(userid) => {
    await axios.post("http://localhost:8000/user/duplicationcheck/", {
        userid: userid,
    })
    .then(() => {
        console.log('회원가입 성공');
    })
    .catch(function (error) {
        console.log(error);
    });
};

export default duplicationCheckAPI;