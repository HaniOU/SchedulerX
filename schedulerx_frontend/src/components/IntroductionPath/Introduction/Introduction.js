import { Link } from "react-router-dom";

function Introduction(){
    return(
        <div>
            <h1>Welcome</h1> 
            <h2>To continue, please <Link to="/login">Login</Link></h2>
        </div>
        
    );
}

export default Introduction;