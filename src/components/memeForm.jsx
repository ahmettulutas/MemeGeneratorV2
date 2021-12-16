import React, {useState} from "react";

const MemeForm = ({id,textAmount}) => {
    const [texts, setTexts] = useState({template_id: id,
                                        username: process.env.REACT_APP_IMGFLIP_USERNAME,
                                        password:process.env.REACT_APP_IMGFLIP_PASSWORD,
                                        text0: "",
                                        text1: ""})
    const handleChange= (e) => {
        const {name, value} = e.target
        setTexts(prev => ({...prev, [name]:value}))
        console.log(texts)
    }
    if(textAmount > 2)
    return(
        <form>
            <input name="text0" type="text" placeholder="text1" onChange={handleChange}>
            </input>
            <input name="text1" type="text" placeholder="text2" onChange={handleChange}>
            </input>
            <input name="text2" type="text" placeholder="text3" onChange={handleChange}>
            </input>
            <input name="text3" type="text" placeholder="text4" onChange={handleChange}>
            </input>
            <button type="submit">MakeMeme</button>
        </form>
         )
    else {
        return (
            <form>
            <input name="text1" type="text" placeholder="text1" onChange={handleChange}>
            </input>
            <input name="text2" type="text" placeholder="text2" onChange={handleChange}>
            </input>
            <button type="submit">MakeMeme</button>
        </form>
        )}}
export default MemeForm;