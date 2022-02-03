import {useState} from "react";
import { postMemeRequest } from "../features/editMeme/memeFormSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { persistor } from "../store";
const MemeForm = ({id}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [queryParams, setQueryParams] = useState({template_id: id,
                                        username:process.env.REACT_APP_IMGFLIP_USERNAME,
                                        password:process.env.REACT_APP_IMGFLIP_PASSWORD,})

    const handleChange= (e) => {
        const {name, value} = e.target
        setQueryParams(prev => ({...prev, [name]:value.toUpperCase()}))
        
    }
    const handleSubmit = async (e) => {
        await e.preventDefault()
        await dispatch(postMemeRequest(makeParamsQuery(queryParams)))
        await navigate(`/${id}/fetch`)
        await persistor.persist() // I have tried to force store to persist here.
    }
    return (
            <form className="form-main" onSubmit={handleSubmit}>
                <textarea spellCheck="false" required name="text0" type="text" placeholder="type something..." onChange={handleChange}>
                </textarea>
                <textarea spellCheck="false" name="text1" type="text" placeholder="type something..." onChange={handleChange}>
                </textarea>
                <button type="submit">MakeMeme</button>
            </form>
        )}

export default MemeForm;

//helper function to query params
const makeParamsQuery = (obj) => {
    const convertedObj =  Object.entries(obj).map(([key,values])=> 
        `${key}=${values}`
    )
    return '?' + convertedObj.join('&')
  }    