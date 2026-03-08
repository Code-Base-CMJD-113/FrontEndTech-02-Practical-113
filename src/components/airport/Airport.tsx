import React, { ChangeEvent, useEffect, useState } from "react"
import { deleteAirport, getAirports, saveAirport, updateAirport } from "../service/AirportService";

export default function Airports() {
    //Model
    interface AirportModel {
        airportId: string,
        airportCode: string,
        name: string,
        city: string,
        country: string,
    } 
    // Table mamtters
    const tblHeaders : string []  = [
       "Airport Id",
       "Airport Code",
       "Airport Name",
       "Airport City",
       "Airport Country",
       "Action"
    ]
    // main state
    const [airport, setAirport] = useState<AirportModel>({
        airportId: "",
        airportCode: "",
        name: "",
        city: "",
        country: ""
    })
    const [airportList, setAirportList] = useState<AirportModel []>([]);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [ isUpdate, setIsUpdate] = useState(false)
    // handle alert related state
    const [alertView, setAlertView] = useState<
    {
     type: "success" | "failed";
     message: string;
    } | null
    >(null);
// Load Table
useEffect(()=>{
  loadAirports()
},[])

const loadAirports = async () =>{
   const airports = await getAirports()
   setAirportList(airports)
}
 // get form data
const handleOnChange = (e: ChangeEvent<HTMLInputElement>)=>{
  const {name, value} = e.target
  setAirport((prev) => ({...prev,[name]: value}))

}
 const handleOnSubmit = async (e: React.SyntheticEvent)=>{
    e.preventDefault()
    if(isUpdate){
      //update
     const response =  await updateAirport(airport)
     if(response !== 204){
       setAlertView({
         type: "failed",
         message: "Airport Update Failed"
       })
       return;
     }
     setAlertView({
      type: "success",
      message: "Airport Updated Successfully"
    })
     loadAirports()
    }else{
      //save
      const status = await saveAirport(airport)
    if(status !== 201){
      setAlertView({
        type: "failed",
        message: "Save Airport Failed"
      })
      return
    }
    setAlertView({
      type: "success",
      message: "Save Airport Successfully"
    })
    }   
 }

// update Data
const handleOnUpdate = (ap : AirportModel) =>{
  setIsUpdate(true)
  setIsModalOpen(false)
  setAirport(ap)
}

const handleOnDelete = async (airportId : string) =>{
    const status = await deleteAirport(airportId)
    if(status !== 204){
      setAlertView({
        type: "failed",
        message: "Delete Airport Failed"
      })
      return;
    }
    setAlertView({
      type: "success",
      message: "Delete Airport Successfully"
    })
    loadAirports()

}
   return (
      <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://files.softicons.com/download/web-icons/vista-poi-icons-by-icons-land/ico/AirportBlue.ico"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
             Airport Details
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleOnSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Airport Code
                </label>
                <div className="mt-2">
                  <input
                    id="airportCode"
                    name="airportCode"
                    type="text"
                    value={airport.airportCode}
                    onChange={handleOnChange}
                    required
                    className="border border-gray block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-black-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Airport Name
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={airport.name}
                    onChange={handleOnChange}
                    required
                    className="border border-gray block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-black-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Airport City
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={airport.city}
                    onChange={handleOnChange}
                    required
                    className="border border-gray block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-black-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Country
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="country"
                    name="country"
                    type="text"
                    onChange={handleOnChange}
                    value={airport.country}
                    required
                    className="border border-gray block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-black-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isUpdate ? "Update" : "Save"}
                </button>
              </div>
              <div>
                <button
                  type="reset"
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Reset
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={()=> setIsModalOpen(true)}
                >
                  View Airports
                </button>
              </div>
            </form>
          </div>
        </div>

           {/* Table with Model */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-11/12 max-w-8xl rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Airport List</h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-left">
                <thead className="bg-gray-100">
                  <tr>
                     {tblHeaders.map((th,index)=> (
                       <th key={index}>{th}</th>
                     ))} 
                  </tr>
                </thead>
                <tbody>
                  {airportList.map((ap, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border">{ap.airportId}</td>
                      <td className="px-4 py-2 border">{ap.airportCode}</td>
                      <td className="px-4 py-2 border">{ap.name}</td>
                      <td className="px-4 py-2 border">{ap.city}</td>
                      <td className="px-4 py-2 border">{ap.country}</td>
          
                      <td className="px-4 py-2 border">
                        <button
                          className="bg-green-600 text-white px-3 py-1 text-sm rounded mr-2"
                          onClick={()=>handleOnUpdate(ap)}
                        
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-600 text-white px-3 py-1 text-sm rounded"
                          onClick={()=>handleOnDelete(ap.airportId)}
                         
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      </>
    )
  }
  