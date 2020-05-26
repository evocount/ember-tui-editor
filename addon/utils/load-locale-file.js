/**
 * This file serves as an index for the available locales for ToastUI for mapping between locale files and language codes.
 * As new locales are added, we should add them here as well. However, users can always force a specific file to be loaded
 * by using `@localeFile`, completely bypassing this index.
 */

export default async function importLocale(language) {
  if (['ar'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/ar');
  } else if (['cs', 'cs-CZ'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/cs-cz');
  } else if (['de', 'de-DE'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/de-de');
  } else if (['en', 'en-US'].includes(language)) {
    // we can't import this file as it doesn't exist. This locale is bundled with toast ui itself.
    // await import('@toast-ui/editor/dist/i18n/en-us');
  } else if (['es', 'es-ES'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/es-es');
  } else if (['fi', 'fi-FI'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/fi-fi');
  } else if (['fr', 'fr-FR'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/fr-fr');
  } else if (['gl', 'gl-ES'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/gl-es');
  } else if (['it', 'it-IT'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/it-it');
  } else if (['ja', 'ja-JP'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/ja-jp');
  } else if (['ko', 'ko-KR'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/ko-kr');
  } else if (['nb', 'nb-NO'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/nb-no');
  } else if (['nl', 'nl-NL'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/nl-nl');
  } else if (['pl', 'pl-PL'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/pl-pl');
  } else if (['ru', 'ru-RU'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/ru-ru');
  } else if (['sv', 'sv-SE'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/sv-se');
  } else if (['tr', 'tr-TR'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/tr-tr');
  } else if (['uk', 'uk-UA'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/uk-ua');
  } else if (['zh-CN'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/zh-cn');
  } else if (['zh-TW'].includes(language)) {
    await import('@toast-ui/editor/dist/i18n/zh-tw');
  }
}
