import React from "react";
import "tailwindcss/tailwind.css";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Use watch to track changes in form values
  const name = watch("name");
  const email = watch("email");
  const phone = watch("phone");
  const option = watch("option");

  const [isNameValid, setIsNameValid] = React.useState(false);
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isPhoneValid, setIsPhoneValid] = React.useState(false);
  const [isOptionValid, setIsOptionValid] = React.useState(false);

  React.useEffect(() => {
    setIsNameValid(name?.length <= 30);
    setIsEmailValid(email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email));
    setIsPhoneValid(phone?.length === 10);
    setIsOptionValid(  !!option);
  }, [name, email, phone, option]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                🚀 Explore the future of tech at{" "}
                <span className="font-bold">NSEC!</span> 🌐 Specializing in CSE,
                we offer cutting-edge programs, expert faculty, and industry
                connections. 🌟 Ready to innovate? Fill the form and join us on
                the journey!
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-pink-600">
                  {" "}
                  9862255XX{" "}
                </a>

                <address className="mt-2 not-italic">
                  {" "}
                  Level 1, Phoenix Tech Tower Plot No: 14/46, Survey No.1, IDA
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
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    {...register("name", { maxLength: 30 })}
                  />
                  {errors.name && <p className="text-red-600 text-sm">Name shouldn't be more than 30 characters.</p>}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      {...register("phone", {
                        required: "Phone number is required",
                        maxLength: {
                          value: 10,
                          message: "Phone number should not exceed 10 digits",
                        },
                      })}
                    />
                    {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      className="peer sr-only"
                      id="option1"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                      {...register("option", { required: true })}
                    />

                    <label
                      htmlFor="option1"
                      className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabIndex="0"
                    >
                      <span className="text-sm"> Admission </span>
                    </label>
                  </div>

                  <div>
                    <input
                      className="peer sr-only"
                      id="option2"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                      {...register("option", { required: true })}
                    />

                    <label
                      htmlFor="option2"
                      className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabIndex="0"
                    >
                      <span className="text-sm"> Courses </span>
                    </label>
                  </div>

                  <div>
                    <input
                      className="peer sr-only"
                      id="option3"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                      {...register("option", { required: true })}
                    />

                    <label
                      htmlFor="option3"
                      className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                      tabIndex="0"
                    >
                      <span className="text-sm"> Events </span>
                    </label>
                  </div>
                </div>
                {errors.option && <p className="text-red-600 text-sm">Please select at least one option.</p>}

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    {...register("message")}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    disabled={Object.keys(errors).length > 0}
                  >
                    Send Enquiry
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
