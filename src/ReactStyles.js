import {styles} from "./Styles";
import FacebookIcon from './image/fb.png';
import GoogleIcon from './image/google.png';

const ReactStyles = () => {
  return (
      <div style={Container}>
            <div style={Header}>          
              <h2 style={{fontSize: "1.6rem", fontWeight: "bold", textAlign: "center"}}>Login</h2>
              <form style ={{padding: "0 60px"}} >
                <p>
                  <input type="email" placeholder="Email" required style={styles.EmailInput}/>
                </p>
                <p>
                  <input type="password" placeholder="Password" required style={styles.PasswordInput}/>
                </p>          
                <a href="https://www.google.com/" style={{textDecoration: 'none', color: 'blue', fontSize: '15px'}}>Forgot Password?</a>  
                <p>
                  <input type="submit" value="Login" style={styles.LoginInput}/>
                </p>
                <p style={{fontSize: '15px' }}> Don't have an account?
                <a href="https://www.google.com/" style={{textDecoration: 'none', color: 'blue', fontSize: '15px' }}>Signup</a></p>
                <div><span>or login with</span></div>
                <p>
                  <input type="submit" value="Login with Facebook" style={FacebookInput} />
                </p>
                <p>
                  <input type="submit" value="Login with Google" style={GoogleInput} />
                </p>
              </form>
            </div>
          </div>
    );
};

const Container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "sans-serif",
  backgroundColor: "#9f9da7",
};

const Header = {
  backgroundColor: "#fff",  
  width: "35%",
  margin: "30px auto",
  textAlign: "center",
  padding: "20px 0 0 0",
  borderRadius: "10px",
  boxShadow: "0px 30px 50px 0px rgba(0, 0, 0, 0.2)",
  marginTop: "100px",
};

const FacebookInput = {
  border: 'none',
  backgroundColor: 'blue',
  color: '#fff',
  fontWeight: '200',
  cursor: 'pointer',
  fontSize: '18px',
  justifyContent: 'center', 
  alignItems: 'center', 
  padding: "13px",
  width: '358px',
  borderRadius: '20px',
  backgroundImage: `url(${FacebookIcon})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '30px center',
  backgroundSize: '25px 25px',
};

const GoogleInput = {
  border: '1px solid #c2c0ca',
  backgroundColor: 'white',
  color: 'black',
  fontWeight: '200',
  cursor: 'pointer',
  fontSize: '18px',
  justifyContent: 'center', 
  alignItems: 'center', 
  padding: '13px',
  width: '358px',
  borderRadius: '20px',
  backgroundImage: `url(${GoogleIcon})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '30px center',
  backgroundSize: '25px 25px',
};


export default ReactStyles;