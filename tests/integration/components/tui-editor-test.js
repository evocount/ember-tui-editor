import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { fillInEditor } from 'ember-tui-editor/test-support/helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tui-editor', function (hooks) {
  setupRenderingTest(hooks);

  test('onChange event is fired when user enters text', async function (assert) {
    let content = '';

    this.onChangeHandler = (text) => {
      content = text;
    };

    await render(hbs`
      <TuiEditor data-test-editor @onChange={{this.onChangeHandler}}/>
    `);

    await fillInEditor('[data-test-editor]', 'foo');

    assert.equal(content, 'foo');
  });

  test('it works with @editType="wysiwyg"', async function (assert) {
    let content = '';

    this.onChangeHandler = (text) => {
      content = text;
    };

    await render(hbs`
      <TuiEditor data-test-editor @onChange={{this.onChangeHandler}} @editType="wysiwyg" />
    `);

    await fillInEditor('[data-test-editor]', 'foo');

    assert.strictEqual(content, 'foo');
  });
});
