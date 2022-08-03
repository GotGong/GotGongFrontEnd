import axios from 'axios';

const duplicationCheckAPI = async(userid) => {
    let return_value;
    await axios.post("http://localhost:8000/user/duplicationcheck/", {
        userid: userid,
    })
    .then((response) => {
        return_value = response.data;
    })
    .catch(function (error) {
        console.log(error);
        return_value = true;
    });
    return return_value
};

export default duplicationCheckAPI;