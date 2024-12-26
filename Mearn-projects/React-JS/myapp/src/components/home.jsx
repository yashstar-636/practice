import React,{useState} from 'react'

const Home = () => {
    const [inputValue,setInputvalue] = useState(0);

  console.log(inputValue);
    
  return (
    <div>
        <input type="number" placeholder='Enter something' 
        onChange={
            (e) => {
setInputvalue(e.target.value)
            }
        }/>
        
       
        
    </div>
  );

};

export default Home 