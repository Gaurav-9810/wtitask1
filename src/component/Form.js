import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



const Form = () => {
    const [name, setname] = useState('');
    const[lastname , setlastname]=useState('');
    const[mobile, setMobile]=useState('');
    const[email, setEmail]=useState('');
    const[Project, setProject]=useState('');

   
    const Navigate=useNavigate();
 

    
 
  
    
    const handleSubmit = async (e) => {
        e.preventDefault();
            
          
            console.log("dshsdjfkh");
            try {
              if (name == '' || lastname == '' || mobile == '' || email=='' || Project =='') {
                
                console.log("no data");
                
                return;
              }
              else{
                const response = await fetch(`http://localhost:5000/0auth/adduser`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name:name, lastname:lastname , email:email, project:Project ,mobile:mobile }),
                    credentials: 'include',
                  });
                  
                  
                  const responseData=await response.json();
                 console.log(responseData);
                if (response.status==200) {
                   window.alert('new user added');
                   window.location.reload(); // Reload the page
                          
                }
                else {
                    
                  console.error('Failed to make Profile');
                }    
              }  
            } catch (error) {
              console.error('Error:', error);
              
            }
            
          
        }   

  
  


  

      
    
    
    
    
    
    
    
  
    return (
      <>
    
           
                <div className=" flex flex-col justify-center h-[100vh] mt-4  ">
                        
                <div className="flex justify-center ">
                    <div className=" w-3/4  md:w-2/5  shadow-2xl px-6 md:px-24 py-10  box-content rounded-xl ">
                        
                        <form className="mt-6 " onSubmit={handleSubmit}>
                                <div className="mb-2">
                                    <label
                                        for="name"
                                        className="text-left ml-4 block text-sm font-semibold text-gray-800"
                                    >
                                        Name 
                                    </label>
                                    <input
                                    required={true}
                                        onChange={(e)=>setname(e.target.value)}
                                        className="  block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                        
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        for="lastname"
                                        className="text-left ml-4  block text-sm font-semibold text-gray-800"
                                    >
                                    lastname
                                    </label>
                                    <input 
                                    required={true}
                                    onChange={(e)=>setlastname(e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                
                               
                        
                                 
                                

                                <div className="mb-2">
                                    <label
                                        for="Mobile"
                                        className="text-left ml-4  block text-sm font-semibold text-gray-800"
                                    >
                                    Mobile
                                    </label>
                                    <input 
                                    required={true}
                                    onChange={(e)=>setMobile(e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        for="Email"
                                        className="text-left ml-4  block text-sm font-semibold text-gray-800"
                                    >
                                    Email
                                    </label>
                                    <input 
                                    required={true}
                                    onChange={(e)=>setEmail(e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label
                                        for="Project"
                                        className="text-left ml-4  block text-sm font-semibold text-gray-800"
                                    >
                                    Project
                                    </label>
                                    <input 
                                    required={true}
                                    onChange={(e)=>setProject(e.target.value)}
                                        className="block w-full px-4 py-2 mt-2 text-[#053B50] bg-white border rounded-md focus:border-[#053B50] focus:ring-[#053B50] focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                
                                <div className="mt-6">
                                    <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#053B50] rounded-md hover:bg-[#053B50] focus:outline-none focus:bg-[#053B50]">
                                        Submit
                                    </button>
                                </div>
                            </form>
                    </div>
        
                </div>
        
            </div>
       
   
      
         
      
      </>
     
    
    );
}

export default Form