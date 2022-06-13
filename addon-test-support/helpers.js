import { waitFor, fillIn } from '@ember/test-helpers';

export async function fillInEditor(selector, value) {
  let mainEl = await waitFor(`${selector} .toastui-editor-main`);

  let elPath;

  if (mainEl.classList.contains('toastui-editor-ww-mode')) {
    elPath = '.toastui-editor-ww-container [contenteditable] > :first-child';
  } else {
    elPath = '.toastui-editor-md-container [contenteditable]';
  }

  let el = await waitFor(`${selector} ${elPath}`);

  await fillIn(el, value);
}
