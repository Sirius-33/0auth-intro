import querystring from 'querystring';

export default function Login() {
  var queryParameters = querystring.stringify({
    response_type: "code",
    client_id: "2ea5723b8ed9424f993caff6e12338e5",
    scope: "user-read-private user-read-email",
    redirect_uri: "http://localhost:8888/callback",
    state: "ogdnodagnojndgaojn"
  });
  return (
    <>
      <h1>Log In</h1>
      <a href={`http://accounts.spotify.com/authorize?${queryParameters}`}>Log In with Spotify</a>
    </>
  )
}