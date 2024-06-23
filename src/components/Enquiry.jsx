import React, { useState } from 'react'

function Enquiry() {
    // const[user,setuserstate]= useState({
    //     name, email,password
    // })
    const getclick=(e)=>{
        e.preventDefault();
    alert("jbfsdhfbd")
        
    }
    const [inputValues, setInputValues] = useState({
        username: '', password: ''
      });
    const handleOnChange = event => {
        const { name, value } = event.target;
        
        setInputValues({ ...inputValues, [name]: value });
      };
  return (
    <section className='bg-black'>
    
        <form method='POST'>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the name" required />
        
      
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" id="email" onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the name" required />
       
  
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
            <input type="text" id="password" onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the name" required />
            <button className='bg-black ' onClick={getclick}>Submit</button>
            </form>

    </section>
  )
}

export default Enquiry