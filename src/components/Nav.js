import { Link } from "react-router-dom";
import { 
    Heading,
    Button
 } from "@chakra-ui/react";

export default function Nav() {
  return (
    <div>
        <nav>
        <Link className="nav-item" to='/'><Button colorScheme='green'>Home</Button></Link>
        
        </nav>
    </div>
  )
}