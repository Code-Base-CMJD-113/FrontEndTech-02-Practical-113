import React, { ChangeEvent, useState } from "react"

export default function Airports() {
    //Model
    interface AirportModel {
        airportId: string,
        airportCode: string,
        name: string,
        city: string,
        country: string,
    }
    // main state
    const [airport, setAirport] = useState<AirportModel>({
        airportId: "",
        airportCode: "",
        name: "",
        city: "",
        country: ""
    })
    const [airportList, setAirportList] = useState<AirportModel []>([]);

 // get form data

const handleOnChange = (e: ChangeEvent<HTMLInputElement>)=>{
  const {name, value} = e.target
  setAirport((prev) => ({...prev,[name]: value}))

}
 const handleOnSubmit = ()=>{
    console.log(airport)
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
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  