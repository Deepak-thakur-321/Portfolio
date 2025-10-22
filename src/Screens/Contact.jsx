import React from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const formHandler = (data) => {
      const existingData = JSON.parse(localStorage.getItem("contactFormData")) || [];
      const updatedData = [...existingData, data];
      localStorage.setItem("contactFormData", JSON.stringify(updatedData));
      reset();
   };

   return (
      <section className="min-h-screen mt-10 flex items-center justify-center px-6 bg-gradient-to-br from-[#142a73] via-[#b7c4e9] to-[#30324a] text-white overflow-hidden relative">
         {/* floating glow background */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(58,89,255,0.15),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,255,255,0.1),transparent_60%)] pointer-events-none"></div>

         <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-10 animate-fadeUp">
            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-6 text-2xl">
               <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Get in Touch
               </h2>
               <p className="text-gray-300 leading-relaxed">
                  I’m open to full-time opportunities, collaborations, and interesting
                  projects. Feel free to drop a message.
               </p>

               <div className="space-y-4 text-xl   ">
                  <div className="flex items-center gap-3">
                     <FaEnvelope className="text-blue-400 text-lg" />
                     <span>deepakthakur.codr@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <FaPhoneAlt className="text-green-400 text-lg" />
                     <span>+91 8375919101</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <FaMapMarkerAlt className="text-pink-400 text-lg" />
                     <span>New Delhi</span>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-900/80 via-blue-950/70 to-indigo-900/70
 p-8 rounded-2xl border border-gray-700/50 shadow-2xl backdrop-blur-md animate-fadeUp [animation-delay:0.2s]">
               <form onSubmit={handleSubmit(formHandler)} className="space-y-5">
                  <div className="flex flex-col">
                     <label className="mb-1 text-gray-300 font-medium">Full Name</label>
                     <input
                        {...register("name", { required: "Name is Required" })}
                        type="text"
                        placeholder="Enter your name"
                        className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition"
                     />
                     {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                     )}
                  </div>

                  <div className="flex flex-col">
                     <label className="mb-1 text-gray-300 font-medium">Email</label>
                     <input
                        {...register("email", { required: "Email is Required" })}
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition"
                     />
                     {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                     )}
                  </div>

                  <div className="flex flex-col">
                     <label className="mb-1 text-gray-300 font-medium">
                        Mobile Number
                     </label>
                     <input
                        {...register("mobileNumber", {
                           required: "Mobile number is required",
                           pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Enter a valid 10-digit mobile number",
                           },
                        })}
                        type="text"
                        placeholder="Enter your mobile"
                        className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition"
                     />
                     {errors.mobileNumber && (
                        <p className="text-red-500 text-sm">
                           {errors.mobileNumber.message}
                        </p>
                     )}
                  </div>

                  <div className="flex flex-col">
                     <label className="mb-1 text-gray-300 font-medium">City</label>
                     <input
                        {...register("city", { required: "City is Required" })}
                        type="text"
                        placeholder="Enter your city"
                        className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition"
                     />
                     {errors.city && (
                        <p className="text-red-500 text-sm">{errors.city.message}</p>
                     )}
                  </div>

                  <button
                     type="submit"
                     className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg transition duration-300"
                  >
                     Send Message
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Contact;
