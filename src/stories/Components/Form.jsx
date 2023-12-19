import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function Form({
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
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
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

  useEffect(() => {
    setTranslatedNameHelperText(t(nameHelperText));
    setTranslatedEmailHelperText(t(emailHelperText));
    setTranslatedPhoneHelperText(t(phoneHelperText));
    setTranslatedDobHelperText(t(dobHelperText));
    setTranslatedLocationHelperText(t(locationHelperText));

    // Explicitly set translated values based on the current language
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
      setIsTranslated(language === "hi"); // Set translation status based on selected language
    });
  };

  const languageOptions = [
    { value: "en", label: t("Translate to English") },
    { value: "hi", label: t("हिंदी में अनुवाद करें") },
    { value: "te", label: t("తెలుగులోకి అనువదించండి") },
  ];

  const currentLanguageOption =
    languageOptions.find((option) => option.value === i18n.language) ||
    languageOptions[0];

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
                {t("🌟 Welcome to our")}{" "}
                <span className="font-bold">{t("Health and Wellness")}</span>{" "}
                {t(
                  "Resources Platform! 🌿 To better serve you, we kindly request that you complete the Moderator KYC Form provided adjacent. Your input helps us tailor our platform and ensures a safe and supportive community. Thank you for your cooperation! 🙏"
                )}
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-pink-600">
                  {" "}
                  {t("9862255XX")}{" "}
                </a>

                <address className="mt-2 not-italic">
                  {" "}
                  {t(
                    "Level 1, Phoenix Tech Tower Plot No: 14/46, Survey No.1, IDA Uppal, Hyderabad, Telangana 500039"
                  )}
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-slate-200 p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                  <p className="text-gray-600 text-xs antialiased">
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
                    <p className="text-gray-600 text-xs antialiased">
                      {translatedEmailHelperText}
                    </p>
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      {t("Phone")}
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-xs"
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
                    <p className="text-gray-600 text-xs antialiased">
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
                  <p className="text-gray-600 text-xs antialiased">
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
                  <p className="text-gray-600 text-xs antialiased">
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
                    {isTranslated ? t("Submit") : "Submit"}{" "}
                    {/* Dynamically switch button text based on translation status */}
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
