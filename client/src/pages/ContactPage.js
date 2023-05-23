import React from "react";
import Layout from "../components/Layout";

const Contactpage = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="flex flex-col text-center justify-center py-[4%] items-center">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-lg mb-4">Got question for us?</p>
        <div className="md:flex justify-evenly gap-4 md:w-[50%] items-center">
          <div>
            <div className="text-left">
              <p className="text-xl mb-5 font-medium">Contact Information</p>
              <p>Online Store</p>
              <p>123 Jalan ABC</p>
              <p>Lebuh Whatever</p>
              <p>00100 Georgetown,</p>
              <p>Pulau Pinang,</p>
              <p>Malaysia</p>
            </div>
            <div className="my-5 text-left">
              <p className="text-xl font-medium">Contact Number</p>
              <p>+602-2222222</p>
            </div>
            <div className="text-left">
              <p className="text-xl font-medium">Email</p>
              <p>feedback@example.com</p>
            </div>
          </div>
          <img
            className="max-w-[310px] max-h-[350px]"
            src="https://images.pexels.com/photos/7709287/pexels-photo-7709287.jpeg?auto=compress&cs=tinysrgb"
            alt="contact"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contactpage;
