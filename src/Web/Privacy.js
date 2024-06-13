import React from "react";
import "./Privacy.css"; // Import your CSS file for styling
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

const PrivacyForm = () => {
  return (
    <div className="app" id="signup">
      <Navbar />
      <div className="privacy-policy">
        <h1>Privacy Policy</h1>
        <p>
          Last updated: May 01, 2024 This Privacy Policy describes Our policies
          and procedures on the collection, use and disclosure of Your
          information when You use the Service and tells You about Your privacy
          rights and how the law protects You. We use Your Personal data to
          provide and improve the Service. By using the Service, You agree to
          the collection and use of information in accordance with this Privacy
          Policy. This Privacy Policy has been created with the help of the
          Privacy Policy Generator.
        </p>
        <h1>Interpretation and Definitions</h1>
        <h3>Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
        <h3>Definitions</h3>
        <p>
          For the purposes of this Privacy Policy: • Account means a unique
          account created for You to access our Service or parts of our Service.{" "}
          <br />
          • Affiliate means an entity that controls, is controlled by or is
          under common control with a party, where "control" means ownership of
          50% or more of the shares, equity interest or other securities
          entitled to vote for election of directors or other managing
          authority. <br />• Company (referred to as either "the Company", "We",
          "Us" or "Our" in this Agreement) refers to Nexa Sphere, The University
          of Faisalabad . <br />
          • Cookies are small files that are placed on Your computer, mobile
          device or any other device by a website, containing the details of
          Your browsing history on that website among its many uses. <br />
          • Country refers to: Pakistan <br />
          • Device means any device that can access the Service such as a
          computer, a cellphone or a digital tablet. <br />
          • Personal Data is any information that relates to an identified or
          identifiable individual. • Service refers to the Website. <br />
          • Service Provider means any natural or legal person who processes the
          data on behalf of the Company. It refers to third-party companies or
          individuals employed by the Company to facilitate the Service, to
          provide the Service on behalf of the Company, to perform services
          related to the Service or to assist the Company in analyzing how the
          Service is used. <br />
          • Usage Data refers to data collected automatically, either generated
          by the use of the Service or from the Service infrastructure itself
          (for example, the duration of a page visit). <br />• Website refers to
          Nexa Sphere , accessible from www.nexasphere.com <br />• You means the
          individual accessing or using the Service, or the company, or other
          legal entity on behalf of which such individual is accessing or using
          the Service, as applicable.
        </p>
        <h1>Collecting and Using Your Personal Data</h1>
        <h2>Types of Data Collected</h2>
        <h3>Personal Data</h3>
        <p>
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include, but is
          not limited to:
          <br />
          • Email address
          <br />
          • First name and last name
          <br />
          • Phone number
          <br />
          • Usage Data
          <br />
        </p>

        <h3>Usage Data</h3>
        <p>
          Usage Data is collected automatically when using the Service.
          <br />
          Usage Data may include information such as Your Device's Internet
          Protocol address (e.g. IP address), browser type, browser version, the
          pages of our Service that You visit, the time and date of Your visit,
          the time spent on those pages, unique device identifiers and other
          diagnostic data. <br />
          When You access the Service by or through a mobile device, We may
          collect certain information automatically, including, but not limited
          to, the type of mobile device You use, Your mobile device unique ID,
          the IP address of Your mobile device, Your mobile operating system,
          the type of mobile Internet browser You use, unique device identifiers
          and other diagnostic data.
          <br />
          We may also collect information that Your browser sends whenever You
          visit our Service or when You access the Service by or through a
          mobile device.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyForm;
