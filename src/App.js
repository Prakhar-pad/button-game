import React, {useState,useEffect} from 'react';
import './style.css';

export default function App() {
  const data = 
    {
      "India": 'New Delhi',
      "America": 'Washington DC',
      "Nepal": 'Katamandu',
      "Srilanka": 'Columbo',
      "China": 'Beijing',
    },
  const initialCountryData=Object.keys(data);
  const initialCapitalData=Object.values(data);

  const [countryArr, setCountryArr]=useState(initialCountryData)
  const [capitalArr, setCapitalArr]=useState(initialCapitalData)

  const [selectedCountry, setSelectedCountry]=useState("");
  const [selectedCapital, setSelectedCapital]=useState("");

  const [wrongCountry, setWrongCountry]=useState("");
  const [wrongCapital, setWrongCapital]=useState("");

  const [countryColour,setCountryColour]=useState(null);
  const [capitalColour,setCapitalColour]=useState(null);



  const playAgain=()=>{
    setCountryArr(initialCountryData)
    setCapitalArr(initialCapitalData)
    setCountryColour(null)
    setCapitalColour(null)
    setSelectedCountry("")
    setSelectedCapital("")

  }

  const changeStyle=(ele)=>{
    countryArr.includes(ele)?setWrongCountry(ele)||setWrongCapital(selectedCapital):setWrongCapital(ele)||setWrongCountry(selectedCountry)
    setCountryColour({color:"red"})||setCapitalColour({color:"red"})
  }

 useEffect(()=>{
  wrongCapital!==""&& setSelectedCapital("")
 
 },[wrongCapital])
 useEffect(()=>{


  wrongCountry!==""&&setSelectedCountry("")
 
 },[wrongCountry])

  

  const remove=(country, capital)=>{
    
      countryArr.splice(countryArr.indexOf(country),1);
      capitalArr.splice(capitalArr.indexOf(capital),1)
        setCountryArr(countryArr)
        setCapitalArr(capitalArr)
        setSelectedCountry("")
        setSelectedCapital("")
  
  }

  const countryClick=(ele)=>{
  
    if(selectedCountry==="" && selectedCapital===""){
      setCountryColour({})
      setCapitalColour({})
      setWrongCapital("")
      setWrongCountry("")
      setSelectedCountry(ele);
    }


    selectedCapital==""?setCountryColour({color:"green"}):data[ele]===selectedCapital?remove(ele,selectedCapital):changeStyle(ele)
  }

 


  

  const capitalClick=(ele)=>{
    if(selectedCountry==="" && selectedCapital===""){
      setCountryColour({})
      setCapitalColour({})
      setWrongCapital("")
      setWrongCountry("")
      setSelectedCapital(ele);
    }
  
    selectedCountry==""?setCapitalColour({color:"green"}):ele===data[selectedCountry]?remove(selectedCountry,ele):changeStyle(ele)
  
  }

  return (
    <div>
    
      {countryArr.length===0&&capitalArr.length===0 && (<p>Congratulations you won the game <button onClick={playAgain}>Play again</button></p>)
      }
      {countryArr.length!==0&&capitalArr.length!==0 &&<p>Countries-</p>}
    {countryArr.map((ele)=><button style={wrongCountry===ele||selectedCountry===ele?countryColour:{}} onClick={()=>countryClick(ele)}>{ele}</button>)}

   {countryArr.length!==0&&capitalArr.length!==0 && <p>Capitals-</p>}

    {capitalArr.map((ele)=><button style={wrongCapital===ele ||selectedCapital===ele?capitalColour:{}} onClick={()=>capitalClick(ele)}>{ele}</button>)}
    </div>
  );
}
