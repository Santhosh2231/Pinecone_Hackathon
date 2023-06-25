import React, { useReducer, useRef, useState } from 'react'
import axios from "axios";
import CardVal from '../components/CardVal';
import LoadingSpinner from '../components/LoadingSpinner';

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload }
    case 'SET_NULL':
      return { ...state, data: null }
    default:
      return state
  }
}

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [preview, setPreview] = useState(null);
  const [state, dispatch] = useReducer(dataReducer, { data: null })
  const [spin,setSpin] = useState(false);
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };
  const handleReset = () => {
    setFile(null);
    setPreview(null);
    dispatch({ type: 'SET_NULL' })
  };
  const handleFileInputChange = (e) => {
    const files = e.target.files[0];
    setFile(files);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(files);

  };

  const logging = (e) => {
    console.log(e)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    

    const formData = new FormData()
    formData.append('image', preview)
    setSpin(true);
    dispatch({ type: 'SET_NULL' })

    axios.post('http://127.0.0.1:5000//api/cropdisease', formData)
      .then((response) => {
        setSpin(false);
        dispatch({ type: 'SET_DATA', payload: response.data });

      })
      .catch((error) => console.error("san: " + error))
  }

  return (
    <div>
    <h2 className='text-2xl text-center m text-pink-600 font-bold mt-10'>Unlock the Potential of Your Fields: Upload and Analyze Crops for Better Crop Health and Yield</h2>
    


      <div
        className={`w-72  md:w-[28rem] md:h-[28rem] mx-auto flex items-center justify-center ${dragging ? 'bg-gray-200' : ''
          }
      ${file ? 'h-auto' : 'my-10 border-dashed rounded-3xl border-green-600 border-4 h-96'}
      `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center">
          {file ? (
            <div className='text-center'>

              {preview && <img src={preview} alt="Preview" className='w-64 h-64' />}
              <button
                className="mt-2 px-4 py-2 text-white bg-red-500 rounded"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                className="mt-2 px-4 mx-1 py-2 text-white bg-green-500 rounded"
                onClick={handleSubmit}
              >
                Analyse
              </button>
              {
                spin ? (<><LoadingSpinner /></>):(<></>)
              }
            </div>
          ) : (
            <>
              <label htmlFor="file-input" className="flex flex-col items-center justify-center blink-animation">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-green-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 010-2h6V3a1 1 0 011-1z"
                    clipRule="evenodd"
                    className="bg-center"
                  />
                </svg>

              </label>
              <p className="mt-2 text-base text-gray-600">Drag and drop files here or click to browse</p>
              <input
                id="file-input"
                type="file"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </>
          )}
        </div>
      </div>

      <div className='container w-full'>
        {
          state.data && (

            

            <div className='my-10 md:mb-10'>
              <h2 className='md:w-1/2 mx-auto text-center text-2xl'>Analysis of the crop:</h2> {!state.data.response[0].status?
              (<h3 className='text-green-800 md:w-1/2 text-xl mx-auto text-center font-bold'>Your crop is Healthy </h3>):(<><h3 className='text-orange-600 text-xl md:w-1/2 mx-auto text-center font-bold'> Crop may be affected with following diseases</h3>
              {
               
               state.data.response.map((dataVal, index) => {
                 return (
                   <CardVal data={dataVal} key={index} />

                 )
               })
              
             }
             </>
              
              )
              } 
              
            </div>
          )
        }


      </div>


    </div>
  );
};

export default FileUploader;
