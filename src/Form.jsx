import React from "react";
import './Form.css'
import './Meme.css'
export default function Form()
{   const [meme,setMeme] = React.useState({
    topText:"shut up and",
    bottomText:"Take my money",
    randomImage:"/images/meme.png"
})
    const [allMemeImages,setAllMemeImages] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    },[])

    function handleText(event){
        console.log("clicked")
        const {name,value} = event.target
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }
    function updateImg(){
        const num = Math.floor(Math.random()*100)
        const url = allMemeImages[num].url
        setMeme(prevData => {
            return {...prevData,randomImage:url}
        })
    }
    
    return(
        <>
            <div className="form--container flex flex-col h-full  my-5 md:my-24 md:grid">
                <input 
                    className="textfield text-3xl" 
                    type="text" 
                    placeholder="Top text"
                    name="topText" 
                    
                    onChange = {handleText}/>
                <input 
                    className="textfield text-3xl" 
                    type="text" 
                    placeholder="Bottom text" 
                    name="bottomText"
                    
                    onChange = {handleText}/>
                <button className="submit" onClick={updateImg}>Get a new meme image  🖼</button>
            </div>
            <div className="meme m-auto mx-auto w-10/12 md:m-auto md:w-full">
                <h3 className="top">{meme.topText}</h3>
                <img className="h-full " src={meme.randomImage}/>
                <h3 className="bottom">{meme.bottomText}</h3>
            </div>
        </>
    )
}