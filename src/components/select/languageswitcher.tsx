"use client";

import { useTranslation } from "react-i18next";
import React from "react";

const languages = [
  {
    code: "en",
    label: "English",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/500px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
  },
  {
    code: "es",
    label: "Spanish ",
    flag: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  },
   {
    code: "zh",
    label: "Chinese",
    flag: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  },
  //  {
  //   code: "ru",
  //   label: "Russian",
  //   flag: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  // },
  //  {
  //   code: "ar",
  //   label: "Arabic",
  //   flag: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
  // },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="w-[120px] relative">
      <select
        value={i18n.language}
        onChange={handleChange}
        className="w-full appearance-none px-3 py-2 text-sm text-[#2c2c54] bg-white/50 border border-[rgba(0,0,0,0.1)] rounded-xl outline-none backdrop-blur-sm transition duration-300 ease-in-out shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>

      {/* This shows the selected language's flag on the right */}
      <div className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2">
        <img
          src={
            languages.find((lang) => lang.code === i18n.language)?.flag || ""
          }
          alt={i18n.language}
          className="w-5 h-5 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default LanguageSwitcher;
