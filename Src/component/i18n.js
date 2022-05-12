import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';

import * as ar from '../Local_language/ar.json'
import * as en from '../Local_language/en.json'
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: en
  },
  ar: {
    translation: ar
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    compatibilityJSON: 'v3',
    
    fallbackLng: I18nManager.isRTL ? 'ar' : 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    // react: {
    //   bindI18n: 'languageChanged loaded'
    // }
    
  }
  // (err, t) => {
  //   translate = t;
  // }
  );


  // ar: {
  //   translation: { 
      // 'Hello world': ' مرحبا بالعالم',
      // 'Some text goes here, some more text goes here':
      //   'بعض النص هنا ، المزيد من النص هنا',
      // 'Row test': 'اختبار الصف',
      // 'column 1': 'العمود 1',
      // 'column 2': 'العمود 2',
      // 'column 3': 'العمود 3',
      // 'Textinput test': 'اختبار الإدخال',
      // 'Testing': 'اختبارات',
      // 'Change language': 'تغيير اللغة',
      // 'Go to Inner screen ->': 'انتقل إلى الشاشة الداخلية ->',
      // 'Home': 'الصفحة الرئيسية',
    //},
  //},


//export { translate as t };

export default i18n;