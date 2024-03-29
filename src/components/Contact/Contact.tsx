import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"



export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:razalp0012300@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:razalp0012300@gmail.com">razap0012300@gmail.com</a>
        </div>
        <div>
        <a href="tel:+918129933192"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918129933192">(+91) 8129933192</a>
        </div>  
      </div>
    
    </Container>
  )
}