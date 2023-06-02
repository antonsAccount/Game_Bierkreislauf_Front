import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



export default function Prompt ({currentLetter, setCurrentLetter, data, setHasPlayed, highScore, setHighScore, setHasLost}) {
    const [input,setInput] = React.useState("")
    const [success, setSuccess] = React.useState()
    const [ currentScore, setCurrentScore ]  = React.useState(0)
    const [ wrongInput, setWrongInput] = React.useState(false);

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
         //remove whitespace from beginning here
        
        if (input.length>0 && input[0]===currentLetter) {
            let adjustedInput = input?.slice(1,input.length).toLowerCase();
            adjustedInput = input[0]?.toUpperCase() + adjustedInput 
            const beerFound = data.find(i=>i.name===adjustedInput)
            if (beerFound===undefined){
                // setSuccess(false)
                setHasPlayed(false)
                setHasLost(true)
                //wenn verkackt, zeige Modal mit Highscore und Button zum erneut spielen
                //Handle bereits gesagte Biere
            }
            else {
                // setSuccess(true)
                setHighScore(prev=>prev+1)
                setCurrentLetter(input[input.length-1].toUpperCase())
                setInput("")
            }
            console.log(success)
        }
        else {
            setWrongInput(true)
            
        }
        
    }

 
    return (
     
        <div className="prompt">
        <br />
        <br />
        
        <FormControl sx={{}}>
        <Typography onChange sx={{backgroundColor:"rgb(228, 221, 6)", p:1}}>
            Dein Score: {currentScore}
            <br />
            {wrongInput ? <Typography sx={{color:"red"}}>Das Eingabefeld darf nicht leer sein und der Anfangsbuchstabe muss mit dem angezeigten Buchstaben übereinstimmen</Typography> : null}
       
            </Typography>
            <Typography onChange sx={{backgroundColor:"rgb(228, 221, 6)", p:1}}>
                Überleg dir ein Bier mit diesem Buchstaben: 
                <br /> 
                <Typography variant="h6">{currentLetter}</Typography>
            </Typography>
            <input id="promptInput" type="text" onChange={handleChange} value={input} placeholder='Gib hier dein Bier ein' required autoComplete="off" />                
        <Button type="submit" onClick={handleClick} variant='contained' sx={{color:"black", backgroundColor:"rgb(228, 221, 6)"}}>Los gehts</Button>
        {/* <Button onClick={handleClick} variant='contained' sx={{color:"black", backgroundColor:"rgb(228, 221, 6)"}}>Neustart</Button> */}
        </FormControl>
       
    </div>
        
    )
}