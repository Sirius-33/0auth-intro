import axios from "axios";

export default function Callback( props ) {
  var code = new URLSearchParams(props.location.search).get("code");
  
  axios.post(".netlify/functions/token", {
    body: JSON.stringify({
      code
    })
  })
  .then(response => response.json())
  return null;
}