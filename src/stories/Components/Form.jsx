import React from "react";
import PropTypes from 'prop-types';
import "tailwindcss/tailwind.css";
import { useForm } from "react-hook-form";

export default function Form({ onSubmitData, nameMaxLength, emailPattern, phoneMaxLength, dobRequired, locationRequired, nameHelperText, emailHelperText, phoneHelperText }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onSubmitData(data);
  };

  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
              🌟 Welcome to our <span className="font-bold">Health and Wellness</span> Resources Platform! 🌿 To better serve you, we kindly request that you complete the Moderator KYC Form provided adjacent. Your input helps us tailor our platform and ensures a safe and supportive community. Thank you for your cooperation! 🙏
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-pink-600">
                  {" "}
                  9862255XX{" "}
                </a>

                <address className="mt-2 not-italic">
                  {" "}
                  Level 1, Phoenix Tech Tower Plot No : 14/46, Survey No.1, IDA
                  Uppal, Hyderabad, Telangana 500039
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-slate-200 p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-xs"
                    placeholder="Enter your full legal name"
                    type="text"
                    id="name"
                    {...register("name", { maxLength: nameMaxLength })}
                  />
                  {errors.name && <p className="text-red-600 text-sm">Name should not be more than 20 characters.</p>}
                  <p className="text-gray-600 text-xs antialiased">{nameHelperText}</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-xs"
                      placeholder="Enter your primary email address"
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: emailPattern,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                    <p className="text-gray-600 text-xs antialiased">{emailHelperText}</p>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-xs"
                      placeholder="Enter your phone number"
                      type="tel"
                      id="phone"
                      {...register("phone", {
                        required: "Phone number is required",
                        maxLength: {
                          value: phoneMaxLength,
                          message: "Phone number should not exceed 10 digits",
                        },
                      })}
                    />
                    {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
                    <p className="text-gray-600 text-xs antialised">{phoneHelperText}</p>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="dob">
                    Date of Birth
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-xs"
                    placeholder="Enter your date of birth"
                    type="date"
                    id="dob"
                    {...register("dob", { required: dobRequired })}
                  />
                  {errors.dob && <p className="text-red-600 text-sm">{errors.dob.message}</p>}
                  <p className="text-gray-600 text-xs antialiased">Your date of birth helps us verify your eligibility for moderating our platform.</p>
                </div>

                <div>
                  <label className="sr-only" htmlFor="location">
                    Location
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-xs"
                    placeholder="Enter your current city and country of residence"
                    type="text"
                    id="location"
                    {...register("location", { required: locationRequired })}
                  />
                  {errors.location && <p className="text-red-600 text-sm">{errors.location.message}</p>}
                  <p className="text-gray-600 text-xs antialiased">Let us know where you are located to understand the diversity of our moderator team.</p>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto antialiased"
                    disabled={Object.keys(errors).length > 0}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Form.propTypes = {
  onSubmitData: PropTypes.func,
  nameMaxLength: PropTypes.number,
  emailPattern: PropTypes.object,
  phoneMaxLength: PropTypes.number,
  dobRequired: PropTypes.string,
  locationRequired: PropTypes.string,
  nameHelperText: PropTypes.string,
  emailHelperText: PropTypes.string,
  phoneHelperText: PropTypes.string,
};

Form.defaultProps = {
  onSubmitData: () => {},
  nameMaxLength: 20,
  emailPattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  phoneMaxLength: 10,
  dobRequired: 'Date of birth is required',
  locationRequired: 'Location is required',
  nameHelperText: ' Please provide your complete name as it appears on your identification document',
  emailHelperText: 'We will use this email address for all communications regarding your moderator role.',
  phoneHelperText: 'Enter a 10-digit phone number.',
};
