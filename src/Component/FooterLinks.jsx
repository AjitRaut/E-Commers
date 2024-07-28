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
              <p className="text-footer">© 2024 Bundl Technologies Pvt. Ltd</p>
            </div>
          </div>

          <div className="mt-5">
            <ul>
              <li className="font-bold text-lg">Company</li>
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
              <li className="font-bold text-lg">Contact us</li>
              <li className="my-3">Help & Support</li>
              <li className="my-3">Partner with us</li>
              <li className="my-3">Ride with us</li>
            </ul>
            <ul className="mt-12">
              <li className="my-3">Legal</li>
              <li className="my-3">Terms & Conditions</li>
              <li className="my-3">Cookie Policy</li>
              <li className="my-3">Privacy Policy</li>
              <li className="my-3">Investor Relations</li>
            </ul>
          </div>
          <div className="mt-5">
            <ul>
              <li className="my-3">We deliver to:</li>
              <li className="my-3">Bangalore</li>
              <li className="my-3">Gurgaon</li>
              <li className="my-3">Hyderabad</li>
              <li className="my-3">Delhi</li>
              <li className="my-3">Mumbai</li>
              <li className="my-3">Pune</li>
              <li className="my-3"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
