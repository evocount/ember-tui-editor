/**
 * This file serves as an index for the available locales for ToastUI for mapping between locale files and language codes.
 * As new locales are added, we should add them here as well. However, users can always force a specific file to be loaded
 * by using `@localeFile`, completely bypassing this index.
 */

export default async function importLocale(language = 'en') {
  language = language.toLowerCase();

  if (['ar'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/ar');
  } else if (['cs', 'cs-cz'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/cs-cz');
  } else if (['de', 'de-de'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/de-de');
  } else if (['en', 'en-us'].includes(language)) {
    // we can't import this file as it doesn't exist. This locale is bundled with toast ui itself.
    // await import('@toast-ui/editor/dist/i18n/en-us');
  } else if (['es', 'es-es'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/es-es');
  } else if (['fi', 'fi-fi'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/fi-fi');
  } else if (['fr', 'fr-fr'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/fr-fr');
  } else if (['gl', 'gl-es'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/gl-es');
  } else if (['it', 'it-it'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/it-it');
  } else if (['ja', 'ja-jp'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/ja-jp');
  } else if (['ko', 'ko-kr'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/ko-kr');
  } else if (['nb', 'nb-no'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/nb-no');
  } else if (['nl', 'nl-nl'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/nl-nl');
  } else if (['pl', 'pl-pl'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/pl-pl');
  } else if (['ru', 'ru-ru'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/ru-ru');
  } else if (['sv', 'sv-se'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/sv-se');
  } else if (['tr', 'tr-tr'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/tr-tr');
  } else if (['uk', 'uk-ua'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/uk-ua');
  } else if (['zh-cn'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/zh-cn');
  } else if (['zh-tw'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/zh-tw');
  }
}
