import axios from "axios"

const baseUrl = "http://localhost:8081/air/api/v1/airports"
const fetchToken = ()=>{
    const token = localStorage.getItem("cmjd113")
    return "Bearer "+token;
}
const saveAirport = async (airportData : any) =>{
    try{
     const response = await axios.post(baseUrl,
        airportData,
        {
            headers: {
                Authorization: fetchToken()
            }
        }
        )
     return response.status
    }catch(err){
        console.error(err)
    }
}
const getAirports = async () =>{
    const response = await axios.get
    (baseUrl,
        {
            headers:{
                Authorization: fetchToken()
            }
        }
        
        )
    return response.data

}
const deleteAirport = async (airportId: string) =>{
    const reponse = await axios.delete(
        `${baseUrl}/${airportId}`)
        return reponse.status;
}
const updateAirport = async (updatedAirportData : any) =>{
    const response = await axios.patch(`${baseUrl}/${updatedAirportData.airportId}`,
    updatedAirportData)
    return response.status
}

export { saveAirport, getAirports, deleteAirport, updateAirport}