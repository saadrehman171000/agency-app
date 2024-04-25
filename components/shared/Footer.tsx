import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="flex justify-start items-center space-x-10 ">
        <div className="flex flex-col items-start justify-center space-y-5">
          <div className="flex flex-col items-start justify-start space-y-3 mb-[70px]">
            <h2 className="font-bold text-lg">Locations</h2>
            <p>Vancouver, Canada</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center space-y-5">
          <div className="flex flex-col items-start justify-start space-y-3">
            <h2 className="font-bold text-lg">Links</h2>
            <ul>
              <li>Contact Us</li>
              <li>Press Kit</li>
              <li>Privacy Policy</li>
              <li>COVID-19 Safety Plan</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-stretch justify-between mt-8">
        <div className="flex  items-center justify-start space-x-4">
          <i className="fab fa-twitter">twitter</i>
          <i className="fab fa-instagram">instagram</i>
          <i className="fab fa-facebook">facebook</i>
          <i className="fab fa-linkedin">linkedin</i>
          <i className="fab fa-apple"> apple</i>
          <i className="fab fa-google-play">google</i>
          <i className="fab fa-youtube">youtube</i>
        </div>
        <div className="text-center">
          <p>Copyright © 2021 Axiom Zen</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
