import React, { FC, useMemo } from 'react';
import i18next from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import EN from '../i18n/en-US.json';
import IN from '../i18n/in-ID.json';
import JP from '../i18n/ja-JP.json';
import CN from '../i18n/zh-CN.json';

export const I18nProvider: FC = ({ children }) => {
  const i18n = useMemo(() => {
    // 创建实例
    const instance = i18next.createInstance();

    instance
      .use(languageDetector)
      .use(initReactI18next)
      .init({
        debug: process.env.NODE_ENV === 'development',
        fallbackLng: 'zh-CN',
        ns: ['myVite'],
        defaultNS: 'myVite',
        load: 'currentOnly',
        keySeparator: false,
        nsSeparator: false,
        returnEmptyString: false,
        detection: {
          order: ['cookie'],
          lookupCookie: 'lng',
        },
        resources: {
          'en-US': {
            myVite: EN,
          },
          'in-ID': {
            myVite: IN,
          },
          'ja-JP': {
            myVite: JP,
          },
          'zh-CN': {
            myVite: CN,
          },
        },
      });

    return instance;
  }, []);

  return <I18nextProvider i18n={i18n}> {children} </I18nextProvider>;
};
