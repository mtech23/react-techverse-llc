import "./style.css";
import { UserLayout } from "../../Components/Layout/UserLayout";
import phoneicon from "../../asserts/images/phone-icon.webp";
import chaticon from "../../asserts/images/chat-icon.webp";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap } from "gsap";
import TrustedPartners from "../../Components/TrustedPartners";
import donatorange from "../../asserts/images/donat-orange.webp";
import greenCube from "../../asserts/images/green-cube.webp";
import pinkCapsol from "../../asserts/images/pink-capsol.webp";
import HeroSection from "../../Components/herosection/index";
import Ctnbutton from "../../Components/ctnbutton";
import Aos from "aos";
import "swiper/css";
import TechnologiesUse from "../../Components/technologiesuse";
import Frequentlyaskquestion from "../../Components/frequentlyaskquestion";
import Portfolio from "../../Components/Portfolio";
import { playstore } from "../../asserts/images";
import appstore from "../../asserts/images/app-store.webp";
import healthcareimg1 from "../../asserts/images/health-care-img1.webp";
import healthcareimg2 from "../../asserts/images/health-care-img2.webp";
import healthcareimg3 from "../../asserts/images/health-care-img3.webp";
import healthcareportfolio1 from "../../asserts/images/health-care-portfolio1.webp";
import healthcareportfolio2 from "../../asserts/images/health-care-portfolio2.webp";
import healthcareportfolio3 from "../../asserts/images/health-care-portfolio3.webp";
import healthcareportfolio4 from "../../asserts/images/health-care-portfolio4.webp";
import healthcareportfolio5 from "../../asserts/images/health-care-portfolio5.webp";
import mobileframe from "../../asserts/images/mobile-frame.webp";
import website1 from "../../asserts/images/website-1.webp";
import website2 from "../../asserts/images/website-2.webp";
import website3 from "../../asserts/images/website-3.webp";
import website4 from "../../asserts/images/website-4.webp";
import Macbook from "../../asserts/images/Macbook.webp";
import App_development_solutions from "../../Components/App_development_solutions";
import Development_Process from "../../Components/Development_Process";
import Portfolios from "../../Components/portfolios";
import Driving_Exprience from "../../Components/Driving_experience";
import Testimonials from "../../Components//Testimonials";
import Helmet from "../../Components/Helmet";
gsap.registerPlugin(MotionPathPlugin);

const Health_care = () => {
  Aos.init();

  return (
    <UserLayout>
      <Helmet
        title="Professional IT Service For Health Care Industry | Techverse LLC"
        description="Enhance your healthcare services with Techverse LLC. We provide professional IT solutions designed to meet the unique needs of the healthcare industry."
        keywords="Health Care"
      />

      <HeroSection
        classheroimage={"inner-health-bgColor"}
        title={"Techverse Optimizes"}
        subtitle={"Healthcare"}
        title2={"Delivery For Patients & Professionals."}
        tagline={
          "Techverse empowers both patients and healthcare professionals through innovative mobile applications. Our secure and user-friendly apps streamline workflows, improve patient interaction, and guarantee adherence to healthcare regulations. We craft specialized solutions that boost patient outcomes and optimize healthcare delivery, all while prioritizing strong data security measures. Partner with Techverse to revolutionize the way healthcare is delivered."
        }
        className={"ecommerceDev_hero_img"}
        CtnbuttonComponent={Ctnbutton}
        ctnButtonProps={{
          phoneicon: phoneicon,
          calltext: "Call Us",
          primaryButtonClass: "btn_with_icon",
          playstore: playstore,
          appstore: appstore,
        }}

        // secondaryButtonclassName="btn_with_icon btn_secondary"
      />

      {/* <!-- Trusted Partners --> */}

      <TrustedPartners />

      <Portfolio
        title="From Patient Engagement To Research, Techverse Develops"
        classtitle="color-darkBlue"
        newclassName="health-care-abt1"
        // title2=" Entertainment Industry"
        subtitle="Healthcare Solutions"
        para="Techverse is an expert in creating all-inclusive medical solutions. Our customized apps improve patient care, speed up procedures, and guarantee that industry norms are followed. By emphasizing efficiency and creativity, we enable healthcare providers to provide better services and increase patient outcomes.

"
        image={healthcareimg1}
        playstore={playstore}
        appstore={appstore}
        phoneicon={phoneicon}
        chaticon={chaticon}
        pinkcapsol={pinkCapsol}
        greencube={greenCube}
        donatorange={donatorange}
      />
      {/* <!-- App Development Sec --> */}
      <App_development_solutions
        title="Techverse Offer Secure And Effective"
        subtitle="Healthcare Apps"
        // title2="That Exceed Expectations "
        para="At Techverse LLC, we're experts at developing innovative healthcare applications that improve workflows, improve patient outcomes, and guarantee regulatory compliance in that sector.
       Join forces with us to create cutting-edge mobile apps."
        para1="Utilize advanced analytics to interpret healthcare data, enabling informed decision-making and strategic planning for healthcare providers and administrators."
        para2="Craft user-centric interfaces that optimize usability and accessibility, enhancing engagement and satisfaction among healthcare professionals and patients."
        para3="Create scalable and innovative healthcare applications designed to improve patient care delivery, operational efficiency, and healthcare service management.
      "
        para4="Implement comprehensive testing strategies to validate the functionality, security, and regulatory compliance of healthcare apps, ensuring reliability and user safety."
      />

      <Development_Process
        title2=" On The Move Techverse Apps Empower Professional Patients "
        subtitle="Healthcare "
        para="Techverse apps empower healthcare professionals and patients with innovative solutions. From increased patient care to streamlined operations, our apps ensure mobility and efficiency in delivering healthcare services.

"
        image={healthcareimg2}
        sportsclassName={"health-care-img-2"}
        para1="Conduct in-depth evaluations to align healthcare app development with organizational strategies and user requirements, ensuring solutions that effectively address industry challenges and boost operational workflows."
        para2="Leveraging the latest technological advancements, create innovative interfaces and robust healthcare solutions designed to optimize patient interaction and streamline administrative processes."
        para3="Implement stringent testing protocols to validate the functionality, security, and regulatory compliance of healthcare apps, ensuring seamless performance and user satisfaction."
        para4="Facilitate smooth app deployment and provide ongoing maintenance and updates to ensure optimal performance, security, and scalability, effectively meeting evolving healthcare needs."
        quality="Quality Assurance"
      />

      <Portfolios
        title=" HEALTH & LIFE SCIENCE "
        subtitle="PORTFOLIO"
        para="Our Health & Life Science portfolio showcases innovative mobile apps and responsive websites that improve healthcare delivery, patient engagement, and operational efficiency worldwide.

"
        Mobile_Apps="Mobile Apps"
        Websites="Websites"
        classmobileapp="nav-link"
        classwebsite="nav-link"
        image1={healthcareportfolio1}
        image2={healthcareportfolio2}
        image3={healthcareportfolio3}
        image4={healthcareportfolio4}
        image5={healthcareportfolio5}
        image6={mobileframe}
        image7={website1}
        image8={website2}
        image9={website3}
        image10={website4}
        image11={Macbook}
      />

      <Driving_Exprience
        titleclass2="color-darkBlue"
        titleclassName="color-darkBlue"
        title="Why Choose Our  "
        subtitle="    Media & Entertainment "
        title2="    App Development Service"
        image={healthcareimg3}
        h1="Advanced Research Capabilities"
        h2="Streamlined Clinical Workflows"
        h3="Interoperability Solutions"
        h4="Telehealth Integration"
        h5="Compliance with Emerging Technologies"
        h6="Personalized Medicine Initiatives"
        h7="Continuous Support and Maintenance"
        h8="Data Privacy Assurance"
      />

      <TechnologiesUse />
      <Testimonials />

      <Frequentlyaskquestion />
    </UserLayout>
  );
};
export default Health_care;
