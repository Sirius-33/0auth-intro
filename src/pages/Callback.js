import axios from "axios";

export default function Callback( props ) {
  var code = new URLSearchParams(props.location.search).get("code");
  
  axios.post("/.netlify/functions/token", JSON.stringify({
      code
    
  }))
  .then(response => console.log(response));
  return null;
}