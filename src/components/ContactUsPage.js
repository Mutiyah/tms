import React, { useEffect, useRef } from "react";
import solutionStyles from "../styles/SolutionPageStyle.module.css";
import contactStyles from "../styles/ContactPageStyle.module.css";
import { ceoLeftSlide2 } from "../animatons/pageAnimations";
import gsap from "gsap/all";


function ContactUsPage() {
  const contactRef = useRef();
  const formWrapperRef = useRef();
  useEffect(() => {
   ceoLeftSlide2(contactRef);

   gsap.fromTo(formWrapperRef.current, {width: '5%', height: '5%', borderRadius: "100%"}, {width: '100vw', height: '50%', borderRadius: "0%", duration: 8, scrollTrigger: {
     trigger: formWrapperRef.current,
     start: "top 90%",
     scrub: 2,
     toggleActions: "restart none none none"
   }})
  }, []);


  const onsubmitFunc = (e) => {
    e.preventDefault()
    return
  }
  return (
    <div className={contactStyles.contactPage}>
      <section className={solutionStyles.solutionPageTopmost}>
        <div className={solutionStyles.solutionPageTopmostOverlay}>
          <div ref={contactRef} style={{ textAlign: "center" }} className={contactStyles.contactPageTopText}>
            <h1>We'd love to hear from you</h1>
            <p>Any question you have, our team is ready to answer all!</p>
          </div>
        </div>
      </section>
      <div className={contactStyles.formContainer}>
      <div className={contactStyles.formWrapper} ref={formWrapperRef}></div>
      <form onSubmit={onsubmitFunc} className={contactStyles.form}>
        <div>
          <label>Full Name<span>*</span></label>
          <input type="text" placeholder="John Aliyu" />
        </div>
        <div>
          <label>Email<span>*</span></label>
          <input type="email" placeholder="me@gmail.com" />
        </div>
        <div>
          <label>Phone Number<span>*</span></label>
          <input type="text" placeholder="+2348123456789" />
        </div>
        <div>
          <label>Company<span>*</span></label>
          <input type="text" placeholder="Company Name" />
        </div>
        <div>
          <label>Message<span>*</span></label>
          <textarea placeholder="Message..." ></textarea>
        </div>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default ContactUsPage;
