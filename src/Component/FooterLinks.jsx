import React from "react";
import { SiSwiggy } from "react-icons/si";

const FooterLinks = () => {
  return (
    <div className="bg-customDark">
      <div className="max-w-5xl m-auto">
        <div className="grid grid-cols-4 gap-4 text-white">
          <div className="mt-5 flex-row justify-between w-40">
            <div className="flex place-items-center">
              <SiSwiggy className="text-white w-9 h-12" />
              <p className="text-white">Swiggy</p>
            </div>
            <div>
              <p>© 2024 Bundl Technologies Pvt. Ltd</p>
            </div>
          </div>

          <div className="mt-5">
            <ul>
              <li>Company</li>
              <li className="my-3">About</li>
              <li className="my-3">Company</li>
              <li className="my-3">Careers</li>
              <li className="my-3">Team</li>
              <li className="my-3">Swiggy One</li>
              <li className="my-3">Swiggy Instamart</li>
              <li className="my-3">Swiggy Genie</li>
            </ul>
          </div>
          <div className="mt-5">
            <ul>
              <li>Contact us</li>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
            <ul className="mt-12">
              <li>Legal</li>
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div>4</div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
