import React from "react";
import headerStyles from "../styles/Header.module.css";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import NavBarContainer from "./NarBarContainer";

function HeaderPage() {



  return (
    <div className={headerStyles.headerPage}>
      <section className="topContactSection">
        <div className={headerStyles.topContactSection}>
          <div>
            <div className={headerStyles.contactOptionWrapper }><a href="tel:+234(803) 880‐0629">+234(803) 880‐0629 </a> <PhoneEnabledIcon className={headerStyles.contactOptionIcon }/></div>
            <div className={headerStyles.contactOptionWrapper }><a href="mailto:contact@echithub.com">contact@echithub.com </a> <EmailIcon className={headerStyles.contactOptionIcon }/></div> 
          </div>
          <div>
            <LinkedInIcon className={headerStyles.contactOption } />
            <FacebookIcon className={headerStyles.contactOption } />
          </div>
        </div>
      </section>
      <NavBarContainer />

    </div>
  );
}

export default HeaderPage;
