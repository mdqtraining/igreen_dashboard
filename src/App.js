import logo from "./logo.svg";
import "./css/style.css"

import Box from "@mui/material/Box";
import form, { Button, Stack } from "@mui/material";
import { Grid, TextField } from "@mui/material";
import React from "react";
import "./css/style.css"

// import KeyIcon from '@mui/icons-material/Key';
import LoginIcon from '@mui/icons-material/Login';
import { SpeakerNotesOff } from "@mui/icons-material";

const samplepicture =new URL("./images/newedit3.jpg",import.meta.url)
const untitled1 =new URL("./images/Untitled1.png",import.meta.url)

function App() {
  return <>
 {/* <body> */}
       
         {/* <Box> */}
          <Grid container justifyContent='center' sx={{ textAlign: 'center' }} >

    <Box className="sample"  sx={{ border:"1px solid black",mt:'10%' ,borderColor:'#d2cbcb;' , borderRadius:'40px',':hover': {  boxShadow:2},m:6 }} >
   <Grid item>
   
    <nav className="navbar">
        <ul>

         <li className="active">Marketplace</li>
         <li className="active" >Drop</li>
         <li className="active">Brands</li>
         <li className="active">Login</li>
         <li className="active">Sign Up</li>
        

        </ul>
      </nav>
      </Grid>
   
      {/* <Grid justifyContent='center' sx={{ textAlign: 'center' }}> */}
        <Grid item>
    <Grid  className="samplepicture">
     
    <img  src={samplepicture}/>

    <img className="untitled"  src={ untitled1 }/>
   
 </Grid>
 {/* <Grid className="box2">
   
    </Grid> */}
    </Grid>
   
  <Grid item sx={{pl:5}}>
     <Box  sx={{ border:"1px solid black",p:3,mt:'30%',borderColor:'#d2cbcb;',width:'210px',backgroundColor:'#C8C8C8', borderRadius:'20px',textAlign:"left"}} >
  <Box>
    <h2>Welcome Back</h2>
    <p>Please Enter Your Email and Password</p>
    <Grid>
    <TextField id="Email" label="Email id" variant="outlined" size='small'color='secondary'
      />
      </Grid>
      <Grid sx={{mt:2}}>
       <TextField    id="MobileNum" label="Password" required variant="outlined"  size='small'color='secondary'
                                    inputProps={{
                                        maxLength: 10
                                    }}
                               
                                />
                                </Grid>
                                
                                <Grid container>
                                <Grid sx={{pt:2}}>
                                    <Stack spacing={2} direction="row" >
                                        <Button 
                                       
                                         variant="outlined"
                                            type='submit' sx={{ color: 'white', backgroundColor: '#FFC901', borderRadius: '5px 18px', ':hover': {  borderColor: '#FFC901', color: '#000000'} }}>Login 

                                            <LoginIcon sx={{ml:1}}></LoginIcon>
                                            </Button>
                                      
                                    </Stack>
                                    
                                    <Box><p>Dont have on account yet? Create Account</p></Box>
                              
                                </Grid>
                              
                                </Grid>
                               
  </Box>
 <Grid>
 
 </Grid>

 </Box>
 {/* </Grid> */}
    </Grid>
  
    </Box>
          </Grid> 
        {/* </Box> */}
        
        {/* </body> */}
      
        </>
}

export default App;
   
