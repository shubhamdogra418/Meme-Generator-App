import React, {useState, createRef} from "react";
import { useSearchParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage =() => {
    const [params]= useSearchParams();
    const[count,setCount] = useState(0);
    console.log(params.get("url"));
    const memeRef= createRef();    
    const addText =()=> { setCount(count+1)}

    return ( 
        <div> 
        <div style={{width: "1000px", border: "1px gray solid"}} ref={memeRef} className="meme mt-5 mb-5"> 
            <img src={params.get("url")} width="350px"/>
            {
                Array(count).fill(0).map(e => <Text/>)
            }
        </div>
        <Button onClick={addText}> Add text</Button>
        <Button variant="success" onClick={(e) => exportComponentAsJPEG(memeRef)} > Save</Button>
        </div>
    )
}

export default EditPage;