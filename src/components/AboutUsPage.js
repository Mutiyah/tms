import React, {useRef, useEffect} from "react";
import aboutStyle from "../styles/AboutUsPageStyle.module.css";
import gsap from 'gsap';
import { ceoLeftSlide1, ceoLeftSlide2, leftSlideIn } from "../animatons/pageAnimations";


function AboutUsPage() {
  const ceoRef = useRef();
  const ceoRef1 = useRef();
  const ceoRef2 = useRef();
  const refCTSMC = useRef();

  useEffect(() => {
    ceoLeftSlide1(ceoRef);
    ceoLeftSlide2(ceoRef1);
    ceoLeftSlide2(ceoRef2);

    gsap.fromTo(refCTSMC.current, {opacity: 0, y: '-100vh'}, {opacity: 1, y: '0vh', duration: 1, 
    scrollTrigger: {
    trigger: refCTSMC.current,
    start: "top 90%",
    toggleActions: "restart none restart none",
  }})
  }, []);



  const ourValuesArr = [
    'Innovation: we are committed to finding better ways of doing business every day. We believe in adaptive and multi-focus thinking. We embrace change for the growth opportunities it brings.',
    'Integrity: We are reasonable professionals who believe that honesty, integrity and fair play are key to delivering sustainable benefits to our stakeholders',
    'Team Work: We believe in collaborative effort to achieve our goals in the most effective and efficient way as teamwork promotes strong working relationships and improves productivity',
    'Tenacity, Resilience and Energy: We are a tenacious team committed to delivering distinctive value and change to our society',
    'Respect (Diversity & Inclusion): We believe in the platinum rule - ’treat others as they wish to be treated’'
  ]

  const values = [
    {
      heading: 'Our Purpose',
      content: 'CTSMC team is driven by the need to provide solutions that will enable government agencies keep our cities safer and instill the right behaviors in road users. We aim to grow the capacities of traffic enforcement agencies by providing accurate detection and actionable data for the purpose of enforcing compliance.',
      image: "/images/purpose.jpg",
    },
    {
      heading: 'Our Vision',
      content: 'To be the leading company in Nigeria and Africa providing technology enabled enforcement solutions that help smart cities improve road use behavior and create safer roads',
      image: "/images/vision.svg",
    },
    {
      heading: 'Mission Statement',
      content: 'To create strong partnership with government and relevant agencies in Nigeria and Africa and with technology partners across the globe to provide indigenous content essential for technological development required when implementing electronic traffic enforcement solution for creating smart cities, promoting the right behaviors in motorists and other road users.',
      image: "/images/mission.jpg",
    },
    {
      heading: 'Our core values',
      content: <ul className={aboutStyle.list}>{ourValuesArr.map(val1 => (<li>{val1}</li>))}</ul>,
      image: "/images/core_values.svg",
    },
  ]
  

  return (
    <div className={aboutStyle.aboutUsSection}>
      <section className={aboutStyle.ceoSection}>
        <div className={aboutStyle.ceoSectionOverlay}>
        <p ref={ceoRef1}>
          "We are a <b>knowledge company</b> whose aim is to grow the capacities of
          traffic enforcement agencies by providing accurate detection and
          actionable data for the purpose of enforcing compliance."
        </p>
        <p ref={ceoRef2} className={aboutStyle.ceo}><b>MICHAEL AGBOGO</b></p>
        <b ref={ceoRef}><small>CEO Chithub</small></b>
        </div>
      </section>
      <section className={aboutStyle.sectionCTSMC}>
          <p ref={refCTSMC} className="flow">ChitHub Traffic System Management Company Ltd (CTSMC)<span>, is an innovative smart city technology company registered in Nigeria with expertise in implementing road use enforcement solutions using artificial intelligence and Internet of Things (IoT) technology.</span></p>
      </section>
      <section className={aboutStyle.sectionValues}>
        {values.map((val, index) => (<div key={index} className={ `${index % 2 === 0 ? aboutStyle.sectionValuesContentCanReverse : aboutStyle.sectionValuesContentCan}`}>
          <div className={aboutStyle.sectionValuesImage}>
            <img src={val.image} alt={val.heading}  />
          </div>
          <div className={aboutStyle.sectionValuesContent}>
          <h1>{val.heading}</h1>
          <div className={aboutStyle.sectionValuesImageSmallScreen }>
            <img src={val.image} alt={val.heading}  />
          </div>
          <p>{val.content}</p>
          </div>
          </div>))}
      </section>
    </div>
  );
}

export default AboutUsPage;
