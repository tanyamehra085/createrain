"use client";

import React, { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18"; // your i18n setup

export default function I18nProvider({ children }: { children: ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
