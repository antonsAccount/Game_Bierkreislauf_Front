import { useState } from "react";

export default function Developer () {
    const [name, setName] = useState("");
    const [origin, setOrigin] = useState("");
    const [nicknames, setNicknames] = useState("");
    const [successful, setSuccessful ] = useState()

   

    const handleSubmit = async () => {
        let nicknamesAdjusted = nicknames.replaceAll(" ", "").split(",")
        
        if (nicknamesAdjusted.length===0){
            nicknamesAdjusted=[]
        }
        const newBeer = {
            name: name,
            origin: origin,
            nicknames: nicknamesAdjusted
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBeer)
        };
        
        try {
            const res = await fetch("http://localhost:5000/bierkreislauf/", requestOptions);
            const data = await res.json()
            console.log(data)
            setSuccessful(true);
            setName("")
            setOrigin("")
        } catch (error) {
            console.log(error)
            setSuccessful(false);
        }
    }
    return(
        <div className="developer">
            <h4 style={{backgroundColor:"rgb(228, 221, 6)"}}>{successful ? "Dieses Bier wurde zur Datenbank hinzugefügt" : "Leider ist ein Fehler aufgetreten"}</h4>
            
                <input type="text" placeholder="Biername" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Stadt, Land" value={origin} onChange={(e)=>setOrigin(e.target.value)}/>
                <input type="text" placeholder="Spitzname, Spitzname" value={nicknames} onChange={(e)=>setNicknames(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
                {/* {console.log("nicknames",nicknames)} */}
        
        </div>
    )

}