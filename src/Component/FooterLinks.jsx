import React from "react";
import { SiSwiggy } from "react-icons/si";

const FooterLinks = () => {
  return (
    <div className="bg-customDark ">
      <div className="max-w-5xl m-auto ">
        <div className="grid grid-cols-4 gap-4 text-white pb-20 ">
          <div className="mt-5  flex-row justify-between w-40">
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
              <li className="my-3 text-footer">About</li>
              <li className="my-3text-footer">Company</li>
              <li className="my-3 text-footer">Careers</li>
              <li className="my-3 text-footer">Team</li>
              <li className="my-3 text-footer">Swiggy One</li>
              <li className="my-3 text-footer">Swiggy Instamart</li>
              <li className="my-3 text-footer">Swiggy Genie</li>
            </ul>
          </div>
          <div className="mt-5">
            <ul>
              <li className="font-bold text-lg">Contact us</li>
              <li className="my-3 text-footer">Help & Support</li>
              <li className="my-3 text-footer">Partner with us</li>
              <li className="my-3 text-footer">Ride with us</li>
            </ul>
            <ul className="mt-12">
              <li className="my-3 font-bold text-lg">Legal</li>
              <li className="my-3 text-footer">Terms & Conditions</li>
              <li className="my-3 text-footer">Cookie Policy</li>
              <li className="my-3 text-footer">Privacy Policy</li>
              <li className="my-3 text-footer">Investor Relations</li>
            </ul>
          </div>
          <div className="mt-5">
            <ul>
              <li className="font-bold text-lg">We deliver to:</li>
              <li className="my-3 text-footer">Bangalore</li>
              <li className="my-3 text-footer">Gurgaon</li>
              <li className="my-3 text-footer">Hyderabad</li>
              <li className="my-3 text-footer">Delhi</li>
              <li className="my-3 text-footer">Mumbai</li>
              <li className="my-3 text-footer">Pune</li>
              <li className="my-3 text-footer"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
