import React from 'react'

const Contact = () => {
  return (<>
    <div >
    <h1 className='font-bold m-4 p-4 text-lg'>Contact</h1>
   
    <form>
      <input type='text' className="border border-black m-2 rounded-lg p-2" placeholder='name'/>
      <input type='text' className="border border-black rounded-lg m-2 p-2" placeholder='Message'/>
      <button className="border border-black rounded-lg bg-gray-200 m-2 p-2">Submit</button>
    </form> </div>
 </> )
}

export default Contact;