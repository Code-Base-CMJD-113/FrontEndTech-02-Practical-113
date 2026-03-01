import axios from "axios"

const baseUrl = "http://localhost:8080/air/api/v1/airports"
const saveAirport = async (airportData : any) =>{
    try{
     const response = await axios.post(baseUrl,airportData)
     return response.status
    }catch(err){
        console.error(err)
    }
   
  
}
const getAirports = async () =>{
    
}
const deleteAirport = async () =>{
    
}
const updateAirport = async () =>{
    
}

export { saveAirport, getAirports, deleteAirport, updateAirport}