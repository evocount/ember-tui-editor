import Component from '@ember/component';
import { observer } from '@ember/object';
import { all } from 'rsvp';
import { task } from 'ember-concurrency';
import layout from '../templates/components/tui-editor';
import Editor from 'tui-editor';


export default Component.extend({
    layout,

    height: '300px',
    minHeight: '200px',
    value: '',
    previewStyle: 'tab',
    initialEditType: 'markdown',
    language: 'en_US',
    useCommandShortcut: true,
    useDefaultHTMLSanitizer: true,
    //codeBlockLanguages: null,
    usageStatistics: false,
    toolbarItems: [
        'heading',
        'bold',
        'italic',
        'strike',
        'divider',
        'hr',
        'quote',
        'divider',
        'ul',
        'ol',
        'task',
        'indent',
        'outdent',
        'divider',
        'table',
        'image',
        'link',
        'divider',
        'code',
        'codeblock'
    ],
    hideModeSwitch: false,

    /*importStyle: task(function *() {
        yield all([
            import('codemirror/lib/codemirror.css'),
            import('tui-editor/dist/tui-editor.css'),
            import('tui-editor/dist/tui-editor-contents.css'),
            import('highlight.js/styles/github.css')
        ]);
    }).on('init'),*/

    setupTask: task(function *() {
        //let Editor = yield import('tui-editor');

        let editor = new Editor({
            el: this.element,
            height: this.height,
            minHeight: this.minHeight,
            initialValue: this.value,
            previewStyle: this.previewStyle,
            initialEditType: this.initialEditType,
            language: this.language,
            useCommandShortcut: this.useCommandShortcut,
            useDefaultHTMLSanitizer: this.useDefaultHTMLSanitizer,
            //codeBlockLanguages: this.codeBlockLanguages,
            usageStatistics: this.usageStatistics,
            toolbarItems: this.toolbarItems,
            hideModeSwitch: this.hideModeSwitch
        });

        this.set('editor', editor);
    }).on('didInsertElement'),

    valueChanged: observer('value', function() {
        this.editor.setValue(this.value);
    }),
});
