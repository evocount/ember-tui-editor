import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, waitFor } from '@ember/test-helpers';
import {
  fillInEditor,
  waitForEditor,
} from 'ember-tui-editor/test-support/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { set } from '@ember/object';

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

  test('it works with @viewer={{true}}', async function (assert) {
    await render(hbs`
      <TuiEditor data-test-editor @viewer={{true}} @value="# Hello World"/>
    `);

    assert.dom('.toastui-editor-toolbar').doesNotExist();
  });

  test('@language option loads correct locale', async function (assert) {
    await render(hbs`
      <TuiEditor data-test-editor @language="fr" @value="# Hello World"/>
    `);

    await waitForEditor('[data-test-editor]', 'foo');

    assert.dom('[aria-label=Écrire]').exists({ count: 1 });
  });
});
