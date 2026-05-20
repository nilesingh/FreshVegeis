import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Privacy() {
  return (
    <>
      <Header />

      <style>{`
        body{
          margin:0;
          font-family:"Montserrat",sans-serif;
          background:#f9f9f9;
          color:#333;
        }

        .privacy-header{
          text-align:center;
          padding:40px 20px;
        }

        .privacy-header h1{
          margin:0;
          font-size:2.5rem;
        }

        .privacy-header p{
          margin-top:10px;
          font-size:1.1rem;
        }

        .privacy-container{
          max-width:1000px;
          margin:40px auto;
          padding:25px;
          background:white;
          border-radius:12px;
          box-shadow:0 4px 12px rgba(0,0,0,0.08);
        }

        .privacy-container h2{
          color:#2e7d32;
          margin-top:30px;
          margin-bottom:12px;
          font-size:1.5rem;
        }

        .privacy-container p{
          line-height:1.7;
          color:#444;
        }

        .privacy-container ul{
          margin-left:20px;
        }

        .privacy-container li{
          margin-bottom:10px;
          line-height:1.6;
        }

        @media(max-width:768px){
          .privacy-container{
            margin:20px;
          }

          .privacy-header h1{
            font-size:2rem;
          }
        }
      `}</style>

      <header className="privacy-header">
        <h1>Privacy Policy</h1>
        <p>Your privacy matters — learn how we protect your information</p>
      </header>

      <div className="privacy-container">
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how we collect, use, and protect your
          personal data when you interact with our website and services.
        </p>

        <h2>2. Information We Collect</h2>
        <ul>
          <li>
            Personal details like name, email address, and phone number when you
            contact us or subscribe.
          </li>

          <li>Transaction details when you purchase products.</li>

          <li>
            Technical information such as IP address, browser type, and device
            information.
          </li>
        </ul>

        <h2>3. How We Use Your Information</h2>

        <p>We use your information to:</p>

        <ul>
          <li>Provide and improve our products and services.</li>

          <li>Respond to inquiries and support requests.</li>

          <li>Send updates, promotions and newsletters with consent.</li>

          <li>Maintain security and prevent fraud.</li>
        </ul>

        <h2>4. Data Sharing</h2>

        <p>
          We do not sell your personal information. Data is only shared with
          trusted service providers for delivery, payments, and technical
          support.
        </p>

        <h2>5. Cookies & Tracking</h2>

        <p>
          Cookies may be used to improve browsing experience. You can disable
          cookies from browser settings.
        </p>

        <h2>6. Data Protection</h2>

        <p>
          We apply security measures to protect information from unauthorized
          access or misuse.
        </p>

        <h2>7. Your Rights</h2>

        <ul>
          <li>Access or update your personal information.</li>

          <li>Delete your data.</li>

          <li>Opt-out of promotional emails anytime.</li>

          <li>Request details about stored information.</li>
        </ul>

        <h2>8. Updates To Policy</h2>

        <p>
          This policy may be updated occasionally and changes will appear on
          this page.
        </p>

        <h2>9. Contact Us</h2>

        <p>
          Email: <strong>info@example.com</strong>
          <br />
          Phone: <strong>+1 613 123 0258</strong>
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Privacy;
