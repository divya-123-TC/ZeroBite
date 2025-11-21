import * as Localization from 'expo-localization';
import I18n from 'i18n-js';

import en from './en.json';
import kn from './kn.json';
import hi from './hi.json';

// Assign translations
I18n.translations = {
  en: en,
  kn: kn,
  hi: hi
};

// Enable fallbacks (if key missing in one language ? use English)
I18n.fallbacks = true;

// Set device language
I18n.locale = Localization.locale ?? 'en';

export default I18n;
