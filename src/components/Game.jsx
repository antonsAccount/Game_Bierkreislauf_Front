import Button from '@mui/material/Button';
import Prompt from './Prompt';
import DefeatModal from './DefeatModal'
import { useState } from 'react';




export default function Game ({data}){
    const [hasPlayed, setHasPlayed] = useState(false);
    const [currentLetter, setCurrentLetter] = useState("")
    const [ highScore, setHighScore] = useState(0);
    const [ hasLost, setHasLost ] = useState(false);

    const showDefeatModal = () => {
        if (!hasLost) {

        }
    }

    const randomLetter = () => {
        const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        const randomIndex = Math.floor(Math.random()*alphabet.length)
        return alphabet[randomIndex]
    }
    const handleChange = ()=>{
        const letter = randomLetter().toUpperCase();
        setHasPlayed(true)
        setCurrentLetter(letter)
    }
    randomLetter()
    return(
        <div className="game">
        {hasPlayed ? <Prompt currentLetter={currentLetter} setCurrentLetter={setCurrentLetter} data={data} setHasPlayed={setHasPlayed} highScore={highScore} setHighScore={setHighScore} setHasLost={setHasLost}/> : <Button onClick={handleChange} variant="contained" size="large" sx={{backgroundColor:"rgb(228, 221, 6)", color:"rgb(42, 41, 41)", mt:6}}>Start</Button>}
        {!hasLost ? console.log("hasnt lost yet") : <DefeatModal hasLost={hasLost} highScore={highScore} setHasLost={setHasLost} />}
        
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
    )
}