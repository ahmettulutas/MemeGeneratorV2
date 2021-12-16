import React, {useState} from "react";

const MemeForm = ({textAmount}) => {
    const [texts, setTexts] = useState({})
    const handleChange= (e) => {
        const {name, value} = e.target
        setTexts(prev => ({...prev, [name]:value}))
        console.log(texts)
    }
    if(textAmount > 2)
    return(
        <form>
            <input name="text1" type="text" placeholder="text1" onChange={handleChange}>
            </input>
            <input name="text2" type="text" placeholder="text2" onChange={handleChange}>
            </input>
            <input name="text3" type="text" placeholder="text3" onChange={handleChange}>
            </input>
            <input name="text4" type="text" placeholder="text4" onChange={handleChange}>
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