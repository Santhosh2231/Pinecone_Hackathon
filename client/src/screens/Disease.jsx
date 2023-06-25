import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import CardVal from '../components/CardVal'

const dataReducer = (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload, precautions:[action.payload.response[0]["Precaution-1"],action.payload.response[0]["Precaution-2"],action.payload.response[0]["Precaution-3"]], 
        pesticides:[action.payload.response[0]["Pesticide-1"],action.payload.response[0]["Pesticide-2"],action.payload.response[0]["Pesticide-3"]] }
      default:
        return state
    }
  }


const Disease = () => {

    const params = useParams();
    const {disease} = params;
    const [state, dispatch] = useReducer(dataReducer, { data: null,precautions:null,pesticides:null })

    useEffect(() => {
        const getData = async () => {
          try {
            const { data } = await axios.get(`http://127.0.0.1:5000//api/disease/${disease}`);
            // console.log(data)
            dispatch({ type: 'SET_DATA', payload: data })
            
          } catch (err) {
            console.log(err);
          }
        };
        getData();
    }, [disease]);


  return (
    <>
    {
      state.data && (
        <div className=''>
        {
          state.data.response.map((dataVal,index)=>{
            return (   
                <div className="flex justify-center bg-transparent ">
                <div className=" shadow-md rounded-lg p-6 w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-2/3">
                    <h2 className="text-3xl font-bold my-10">{dataVal.Name}</h2>
                    {/* <h3 className="text-xl font-bold mb-4 text-red-400">{confidenceScore}</h3> */}
                    <p className="text-gray-600 mb-4">{dataVal["Description "]}</p>
                
                    <h3 className="font-semibold mb-2">Precautions:</h3>
                    <ol className="list-decimal ml-6 mb-4">
                    {state.precautions.map((precaution, index) => (
                        
                        <li key={index}>{precaution}</li>
                    ))}
                    </ol>
                
                    <h3 className="font-semibold mb-2">Pesticides:</h3>
                    <ol className="list-decimal ml-6">
                    {state.pesticides.map((pesticide, index) => (
                        <li key={index}>{pesticide}</li>
                    ))}
                    </ol>
                </div>
                </div>
           
            )
          })
        }          
        </div>
      )
    }
    </>

  )
}

export default Disease