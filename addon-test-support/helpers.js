import { waitFor, fillIn } from '@ember/test-helpers';

export async function fillInEditor(cssPathOrElement, value) {
  let el;

  if (cssPathOrElement instanceof HTMLElement) {
    el = cssPathOrElement;
  } else {
    let elPath = `${cssPathOrElement} [contenteditable]`;

    await waitFor(elPath);
    el = document.querySelector(elPath);
  }

  await fillIn(el, value);
}
