import axios from "axios";

const url = 'http://localhost:3000/auth/'

export default class Login {
  async login(user, pss) {
    let dataToSend = {
        userData: {
            ra: user,
            password: pss
        }
    }
    const status = {
        token:"",
        idUser:"",
        success:""
    }
    await axios.post(url + "login", dataToSend, {
        headers: {
            'content-type': 'application/json',
       },
    })
    .then(function(response){
        status.token = response.data.token;
        status.idUser = response.data.ra;
        status.success = response.data.success;
    })      
    .catch(function (error) {
        console.log(error);
    });
    console.log(status)
    localStorage.setItem('token', status.token);
    //  localStorage.setItem("idUser", loginStatus.data.id);
    dataToSend = undefined;
    return status.success
  }
}
