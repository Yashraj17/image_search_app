import React, { useState } from 'react'
import { AppBar,Typography,Button,Input,Stack,Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Header = ({handleData}) => {
    const [search,setSearch] = useState('')
    const handleSearch =(search)=>{
        console.log('hello 2',search);
            if(search !==""){
                handleData(search)
            }
    }
  return (
      <AppBar position="static" sx={{backgroundColor:'black',flexDirection:'row',padding:2 }}>
        <Grid item lg={4} xs={12}>
        <Typography variant="h6" component="div">
            Image Search
          </Typography>
        </Grid>
        <Grid item xs={12} lg={8}>

        <Stack sx={{flexGrow:2,display:'inline'}}>
                <Input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                autoFocus
                sx={{backgroundColor:'white',minWidth:300,padding:0.2,paddingLeft:1.5,borderTopLeftRadius:5,borderBottomLeftRadius:5}} 
                    disableUnderline
                    placeholder="Search Images"
                />
          <Button variant="contained" onClick={()=>handleSearch(search)} color='error'><SearchIcon/></Button>
          </Stack>
        </Grid>
      </AppBar>
  )
}

export default Header