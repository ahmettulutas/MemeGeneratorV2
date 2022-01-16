import React, {useState, useEffect} from "react";
import { postMemeRequest } from "../features/editMeme/memeFormSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MemeForm = ({id,textAmount}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [queryParams, setQueryParams] = useState({template_id: id,
                                        username:process.env.REACT_APP_IMGFLIP_USERNAME,
                                        password:process.env.REACT_APP_IMGFLIP_PASSWORD,})
    useEffect(()=> {
        console.log(queryParams.username, queryParams.password)
    })
    const handleChange= (e) => {
        const {name, value} = e.target
        setQueryParams(prev => ({...prev, [name]:value}))
        
    }
    const handleSubmit = async (e) => {
        await e.preventDefault();
        await dispatch(postMemeRequest(convertObj(queryParams)))
        await navigate(`/memes/${id}/${queryParams.template_id +"fetch"}`)
        
    }


    if(textAmount > 2)
    return(

        <form onSubmit={handleSubmit}>
            <p>{convertObj(queryParams)}</p>
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
            <form onSubmit={handleSubmit}>
            <p>{convertObj(queryParams)}</p>
            <input name="text0" type="text" placeholder="text1" onChange={handleChange}>
            </input>
            <input name="text1" type="text" placeholder="text2" onChange={handleChange}>
            </input>
            <button type="submit">MakeMeme</button>
        </form>
        )}
    }
export default MemeForm;


const convertObj = (obj) => {
    const convertedObj =  Object.entries(obj).map(([key,values])=> 
        `${key}=${values}`
    )
    return '?' + convertedObj.join('&')
  }    