import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Form = ({
  onSubmitData,
  nameMaxLength,
  emailPattern,
  phoneMaxLength,
  dobRequired,
  locationRequired,
  nameHelperText,
  emailHelperText,
  phoneHelperText,
  dobHelperText,
  locationHelperText,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger, // Add this line
  } = useForm();
  const { t, i18n: i18nInstance } = useTranslation();
  const [isTranslated, setIsTranslated] = useState(false); // State to track translation status
  const [translatedNameHelperText, setTranslatedNameHelperText] = useState("");
  const [translatedEmailHelperText, setTranslatedEmailHelperText] =
    useState("");
  const [translatedPhoneHelperText, setTranslatedPhoneHelperText] =
    useState("");
  const [translatedDobHelperText, setTranslatedDobHelperText] = useState("");
  const [translatedLocationHelperText, setTranslatedLocationHelperText] =
    useState("");
  const [translatedHeading, setTranslatedHeading] = useState("");

  useEffect(() => {
    setTranslatedNameHelperText(t(nameHelperText));
    setTranslatedEmailHelperText(t(emailHelperText));
    setTranslatedPhoneHelperText(t(phoneHelperText));
    setTranslatedDobHelperText(t(dobHelperText));
    setTranslatedLocationHelperText(t(locationHelperText));
    setTranslatedHeading(t("personalInformation"));
    if (i18nInstance.language === "hi") {
      setTranslatedNameHelperText(t("Name helper text"));
      setTranslatedEmailHelperText(t("Email helper text"));
      setTranslatedPhoneHelperText(t("Phone helper text"));
      setTranslatedDobHelperText(t("Date of Birth helper text"));
      setTranslatedLocationHelperText(t("Location helper text"));
    } else if (i18nInstance.language === "te") {
      setTranslatedNameHelperText(t("Name helper text"));
      setTranslatedEmailHelperText(t("Email helper text"));
      setTranslatedPhoneHelperText(t("Phone helper text"));
      setTranslatedDobHelperText(t("Date of Birth helper text"));
      setTranslatedLocationHelperText(t("Location helper text"));
    }
  }, [
    i18nInstance.language,
    nameHelperText,
    emailHelperText,
    phoneHelperText,
    dobHelperText,
    locationHelperText,
  ]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language).then(() => {
      setIsTranslated(language === "hi"); // Set translation status based on the selected language
      trigger(); // Trigger form re-validation
    });
  };

  const languageOptions = [
    { value: "en", label: t("English") },
    { value: "hi", label: t("हिंदी") },
    { value: "te", label: t("తెలుగు") },
  ];

  const currentLanguageOption =
    languageOptions.find((option) => option.value === i18n.language) ||
    languageOptions[0];

  const onSubmit = (data) => {
    onSubmitData(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <section className="bg-pink-200">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="h-screen flex items-center justify-center">
            <div className="lg:col-span-3 lg:py-12 ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6  border rounded-lg p-8 bg-sky-100"
              >
                <h1 className="text-2xl font-semibold text-center mb-6">
                  {translatedHeading}
                </h1>
                <div>
                  <label className="sr-only" htmlFor="name">
                    {t("Name")}
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-xs"
                    placeholder={t("Enter your full legal name")}
                    type="text"
                    id="name"
                    {...register("name", { maxLength: nameMaxLength })}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm">
                      {t("Name should not be more than 20 characters.")}
                    </p>
                  )}
                  <p className="text-gray-600 text-xs antialiased font-bold pt-1">
                    {translatedNameHelperText}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      {t("Email")}
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-xs"
                      placeholder={t("Enter your primary email address")}
                      type="email"
                      id="email"
                      {...register("email", {
                        required: t("Email is required"),
                        pattern: {
                          value: emailPattern,
                          message: t("Invalid email address"),
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                    <p className="text-gray-600 text-xs antialiased font-bold pt-1">
                      {translatedEmailHelperText}
                    </p>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      {t("Phone")}
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-xs "
                      placeholder={t("Enter your phone number")}
                      type="tel"
                      id="phone"
                      {...register("phone", {
                        required: t("Phone number is required"),
                        maxLength: {
                          value: phoneMaxLength,
                          message: t(
                            "Phone number should not exceed 10 digits"
                          ),
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                    <p className="text-gray-600 text-xs antialiased font-bold pt-1">
                      {translatedPhoneHelperText}
                    </p>
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="dob">
                    {t("Date of Birth")}
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-xs"
                    placeholder={t("Enter your date of birth")}
                    type="date"
                    id="dob"
                    {...register("dob", { required: t(dobRequired) })}
                  />
                  {errors.dob && (
                    <p className="text-red-600 text-sm">{errors.dob.message}</p>
                  )}
                  <p className="text-gray-600 text-xs antialiased font-bold pt-1">
                    {translatedDobHelperText}
                  </p>
                </div>
                <div>
                  <label className="sr-only" htmlFor="location">
                    {t("Location")}
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-xs"
                    placeholder={t(
                      "Enter your current city and country of residence"
                    )}
                    type="text"
                    id="location"
                    {...register("location", { required: t(locationRequired) })}
                  />
                  {errors.location && (
                    <p className="text-red-600 text-sm">
                      {errors.location.message}
                    </p>
                  )}
                  <p className="text-gray-600 text-xs antialiased font-bold pt-1">
                    {translatedLocationHelperText}
                  </p>
                </div>
                <div className="mt-4">
                  <select
                    onChange={(e) => changeLanguage(e.target.value)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-xl cursor-pointer"
                    value={currentLanguageOption.value}
                  >
                    {languageOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl cursor-pointer"
                    disabled={Object.keys(errors).length > 0}
                  >
                    {t("Submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

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
  dobHelperText: PropTypes.string,
  locationHelperText: PropTypes.string,
};

Form.defaultProps = {
  onSubmitData: () => {},
  nameMaxLength: 20,
  emailPattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  phoneMaxLength: 10,
  dobRequired: "Date of birth is required",
  locationRequired: "Location is required",
  nameHelperText:
    "Please provide your complete name as it appears on your identification document",
  emailHelperText:
    "We will use this email address for all communications regarding your moderator role.",
  phoneHelperText: "Enter a 10-digit phone number.",
  dobHelperText:
    "Your date of birth helps us verify your eligibility for moderating our platform.",
  locationHelperText:
    "Let us know where you are located to understand the diversity of our moderator team.",
};

export default Form;
