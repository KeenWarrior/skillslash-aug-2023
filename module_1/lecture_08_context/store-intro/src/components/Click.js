import { useDispatch } from "react-redux";

function Click(){

    const dispatch = useDispatch();

    const handleClick = function(){
        dispatch({type: "INCREMENT"});
    }

    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
        </div>
    )
}

export default Click;