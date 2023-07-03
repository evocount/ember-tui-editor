import { waitFor, fillIn } from '@ember/test-helpers';

export async function waitForEditor(selector) {
  let mainEl = await waitFor(`${selector} .toastui-editor-main`);

  let elPath;

  if (mainEl.classList.contains('toastui-editor-ww-mode')) {
    elPath = '.toastui-editor-ww-container [contenteditable] > :first-child';
  } else {
    elPath = '.toastui-editor-md-container [contenteditable]';
  }

  return await waitFor(`${selector} ${elPath}`);
}

export async function fillInEditor(selector, value) {
  let el = await waitForEditor(selector);

  await fillIn(el, value);
}
