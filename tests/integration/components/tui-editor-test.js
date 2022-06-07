import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { focus, render, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tui-editor', function (hooks) {
  setupRenderingTest(hooks);

  test('onChange event is fired when user enters text', async function (assert) {
    assert.expect(2);

    this.set('onChangeHandler', () => {});

    await render(hbs`<TuiEditor @onChange={{this.onChangeHandler}} />`);
    await waitFor('[contenteditable]');
    await focus('[contenteditable]');

    this.set('onChangeHandler', (text) => {
      assert.ok('onChange handler is executed');
      assert.equal(
        text,
        'foo',
        'onChange handler handler receives text as first argument'
      );
    });
    document.execCommand('insertText', false, 'foo');
  });
});
