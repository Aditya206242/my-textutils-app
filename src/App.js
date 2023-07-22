
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import { useState } from 'react';
import Alert from './components/Alert';






function App(){
  //const[switchText,setSwitchText]=useState('enable darkmode');
  const toggleMode =()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#236183";
      showAlert(" Dark mode has been enabled " , "success");
      
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled " , "success");

      
    }
  }
  const[mode,setmode]=useState('light');

  const[alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
      setAlert({
          msg : message,
          type : type,
          
      })
      setTimeout(() => {
        setAlert(null)
        
      }, 1500);
  }

  return (
    <>
    
    <Navbar title='TextUtil' About="about" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-2'>
   
            
         
         
         <TextArea mode={mode} showAlert={showAlert}/>
          
          
    
    
   
    </div>
    
    
    </>
  )


    
}

export default App;
