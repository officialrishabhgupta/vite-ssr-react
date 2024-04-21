import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <div style={{display: "flex", justifyContent: "start", backgroundColor: "#333", color: "#FFFFFF", padding: "10px 10px", width: "100vw"}}>
      <Link style={{textDecoration: "none", color: "#FFFFFF", marginRight: "20px"}} to="/">Home</Link>
      <Link style={{textDecoration: "none", color: "#FFFFFF", marginRight: "20px"}} to="/contact">Contact</Link>
    </div>
  );
}

export default AppBar;