import axios from 'axios'
import React, {useState, useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'

const dataReducer = (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload }
      default:
        return state
    }
  }


const CropDiseases = () => {

    const [state, dispatch] = useReducer(dataReducer, { data: null })
    useEffect(() => {
      window.scrollTo(0, 0);
        const getData = async () => {
          try {
            const { data } = await axios.get('http://127.0.0.1:5000//api/cropdisease');
            // console.log(data)
            dispatch({ type: 'SET_DATA', payload: data })
          } catch (err) {
            console.log(err);
          }
        };
        getData();
    }, []);

    const [selectedKey, setSelectedKey] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedKey(event.target.value);
    };


  return (
    <div className='min-h-screen '>
    <h2 className='text-2xl text-center m text-pink-600 font-bold my-10'>Crop Diseases Demystified: Everything You Need to Know to Protect Your Plants</h2>


        {
            state.data? (
                <>
                
                <div>
      <select
        value={selectedKey}
        onChange={handleDropdownChange}
        className="block w-5/6 md:w-96 mx-auto my-10 py-2 px-4 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
      >
        <option value="">Select a Crop</option>
        {Object.keys(state.data.response).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      {selectedKey && (
        <div className="mx-12">
          <h2 className="text-2xl font-bold mb-2 text-center"><span className="text-red-500">Crop Name: </span>{selectedKey}</h2>
          <div className="my-10 flex gap-5 justify-between flex-wrap group md:mx-10">
            {state.data.response[selectedKey].map((element) => (
            <Link to={`/cropdiseases/${element.Id}`}>
              <div
                key={element.Name}
                className=" font-Inria md:w-2/3 duration-300 m-auto cursor-pointer border-2 border-slate-200 rounded-xl text-center p-4 "
              >
                <h4 className='text-left text-xl font-semibold my-5'><span className="text-red-500">Disease: </span>{element.Name}</h4>
                <p className=' text-justify'> <span className="text-red-500 text-left">Description: </span>{element['Description ']}</p>
              </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
                </>
            ):(<div></div>)
        }
    </div>
  )
}

export default CropDiseases