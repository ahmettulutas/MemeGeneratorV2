import {useState} from "react";
import { postMemeRequest } from "../features/editMeme/memeFormSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MemeForm = ({id,textAmount}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [queryParams, setQueryParams] = useState({template_id: id,
                                        username:process.env.REACT_APP_IMGFLIP_USERNAME,
                                        password:process.env.REACT_APP_IMGFLIP_PASSWORD,})

    const handleChange= (e) => {
        const {name, value} = e.target
        setQueryParams(prev => ({...prev, [name]:value}))
        
    }
    const handleSubmit = async (e) => {
        await e.preventDefault();
        await dispatch(postMemeRequest(makeParamsQuery(queryParams)))
        await navigate(`/memes/${id}/${queryParams.template_id +"fetch"}`)
        
    }
    if(textAmount > 2) {
        return (
            <form className="form-main" onSubmit={handleSubmit}>
                <input required name="text0" type="text" placeholder="text1" onChange={handleChange}>
                </input>
                <input required name="text1" type="text" placeholder="text2" onChange={handleChange}>
                </input>
                <input required name="text2" type="text" placeholder="text3" onChange={handleChange}>
                </input>
                <input required name="text3" type="text" placeholder="text4" onChange={handleChange}>
                </input>
                <button type="submit">MakeMeme</button>
            </form>
        )}
    else {
        return (
            <form className="form-main" onSubmit={handleSubmit}>
                <input required name="text0" type="text" placeholder="text1" onChange={handleChange}>
                </input>
                <input required name="text1" type="text" placeholder="text2" onChange={handleChange}>
                </input>
                <button type="submit">MakeMeme</button>
            </form>
        )}
    }
export default MemeForm;

//helper function to query params
const makeParamsQuery = (obj) => {
    const convertedObj =  Object.entries(obj).map(([key,values])=> 
        `${key}=${values}`
    )
    return '?' + convertedObj.join('&')
  }    