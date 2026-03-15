import axios from "axios"

const baseUrl = "http://localhost:8081/air/api/v1/auth"

const signInService = async (loginData : any) =>{
    try{
     const response = await axios.post(
         `${baseUrl}/login`,
         loginData)
     return response.data.token
    }catch(err){
        console.error(err)
    }
}

const signUpService = async (signInData : any) =>{
    try{
     const response = await axios.post(
         `${baseUrl}/signup`,
         signInData
         )
     return response.data.token
    }catch(err){
        console.error(err)
    }
}


export { signInService,signUpService }