import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#1A1919]">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full mt-8 md:mt-28 lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="text-white grid grid:cols md:grid-cols-6 mt-28 gap-6">
            <div className="md:col-span-2">
              <h2 className="font-extrabold mb-5 text-[32px]">
                CareerSolution
              </h2>
              <div className="text-gray-300 mb-5">
                <p>
                  There are many variations of passages of Lorem Ipsum , but the
                  majority have suffered alteration in some form.
                </p>
              </div>
              <img
                src="https://i.ibb.co/cxg0Vgb/socalgroup.png"
                alt="Social Logo"
              />
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-4">Company</h2>
              <div className="text-gray-300">
                <p className="mb-4">About Us</p>
                <p className="mb-4">Work</p>
                <p className="mb-4">Latest News</p>
                <p className="mb-4">Careers</p>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-4">Product</h2>
              <div className="text-gray-300">
                <p className="mb-4">Prototype</p>
                <p className="mb-4">Plans & Pricing</p>
                <p className="mb-4">Customers</p>
                <p className="mb-4">Integrations</p>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-4">Contact</h2>
              <div className="text-gray-300">
                <p className="mb-4">524 Broadway , NYC</p>
                <p className="mb-4">+1 777 - 978 - 5570</p>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-4">Support</h2>
              <div className="text-gray-300">
                <p className="mb-4">Help Desk</p>
                <p className="mb-4">Sales</p>
                <p className="mb-4">Become a Partner</p>
                <p className="mb-4">Developers</p>
              </div>
            </div>
          </div>
          <hr className="mt-5 md:mt-12" />
          <div>
            <p className="mt-12 mb-10 md:mb-36 text-white">
              @2023 CareerHub. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
