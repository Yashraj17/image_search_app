import React, { useEffect, useState } from 'react'
import Header from "./Components/Header";
import ImageCard from "./Components/ImageCard";
import {Grid,Stack,Typography,Box,Button,ButtonGroup } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';

import axios from 'axios';

function App() {
  const [data,setData] = useState(null);
  const [count,setCount]= useState(1);
  const [s,setS] = useState('');
  const [isProcess,setIsProcess] = useState(false)
  const handleData = (search)=>{
    setIsProcess(true)
    setS(search)
    console.log('hello this is me',search);
    axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=18&query=${search}&client_id=nXCoEeyEsAg2QohMWPzakTZNczo5HXTQp4egHD4zhfY`).then((response)=>{
     setData(response.data.results);
    })
    setIsProcess(false)
  }


  useEffect(()=>{
    const handleCount = ()=>{
      setIsProcess(true)
      console.log('hello this is me',s);
      axios.get(`https://api.unsplash.com/search/photos?page=${count}&per_page=18&query=${s}&client_id=nXCoEeyEsAg2QohMWPzakTZNczo5HXTQp4egHD4zhfY`).then((response)=>{
       setData(response.data.results);
      })
    }
    handleCount(s)
    setIsProcess(false)
  },[count])

  return (
   <>
    <Header handleData={(search)=>handleData(search)}  />
    <Grid container spacing={2} sx={{padding:2}} >
      {

        data?.map((value,index)=>(
              <Grid item xs={12} key={index} lg={2}>
            <ImageCard img={value.urls.small}/>
            </Grid>
       
        ))
      }  
    </Grid>
    <Grid marginY={3}>
      {
            (isProcess) &&
            <Box sx={{display:'flex',justifyContent:'center'}}> 
               <CircularProgress  color="success" />   
           </Box>
      }
    
    {
        (s!=="") && <Stack sx={{display:'flex'}}>
        <Box sx={{alignSelf:'center'}}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
     <Button onClick={()=>setCount(count -1)}>Prev</Button>
     <Button onClick={()=>setCount(count +1)}>  Next   </Button>
   </ButtonGroup>
        </Box>
   
       </Stack>
      }
     
      </Grid>
   </>
  );
}

export default App;
