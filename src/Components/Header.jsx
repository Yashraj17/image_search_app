import React, { useState } from 'react'
import { AppBar,Toolbar,Typography,Button,Box,Input,Stack } from '@mui/material'
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'black'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1.5 }}>
            Image Search
          </Typography>
          <Stack sx={{flexGrow:2,display:'inline'}}>
                <Input
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                autoFocus
                sx={{backgroundColor:'white',width:400,padding:0.2,paddingLeft:1.5,borderTopLeftRadius:5,borderBottomLeftRadius:5}} 
                    disableUnderline
                    placeholder="Search Images"
                />
          <Button variant="contained" onClick={()=>handleSearch(search)} color='error'><SearchIcon/></Button>
          </Stack>
         

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header