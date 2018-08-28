import Component from '@ember/component';
import { observer } from '@ember/object';
// import { all } from 'rsvp';
import { task } from 'ember-concurrency';
import layout from '../templates/components/tui-editor';
import Editor from 'tui-editor';


export default Component.extend({
    layout,

    height: '300px',
    minHeight: '200px',
    value: '',
    previewStyle: 'tab',
    editType: 'markdown',
    language: 'en_US',
    useCommandShortcut: true,
    useDefaultHTMLSanitizer: true,
    //codeBlockLanguages: null,
    usageStatistics: false,
    toolbarItems: Object.freeze([
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
    ]),
    hideModeSwitch: false,
    viewer: false,

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

        let editor = Editor.factory({
            viewer: this.viewer,
            el: this.element,
            height: this.height,
            minHeight: this.minHeight,
            initialValue: this.value,
            previewStyle: this.previewStyle,
            initialEditType: this.editType,
            language: this.language,
            useCommandShortcut: this.useCommandShortcut,
            useDefaultHTMLSanitizer: this.useDefaultHTMLSanitizer,
            //codeBlockLanguages: this.codeBlockLanguages,
            usageStatistics: this.usageStatistics,
            toolbarItems: this.toolbarItems,
            hideModeSwitch: this.hideModeSwitch,

            events: {
                load: () => this.onLoad(),
                change: () => this.onChange(),
                stateChange: () => this.onStateChange(),
                focus: () => this.onFocus(),
                blur: () => this.onBlur()
            },
        });

        this.set('editor', editor);
    }).on('didInsertElement'),

    valueChanged: observer('value', function() {
        if (this.editor.getValue && this.editor.getValue() === this.value) {
            return;
        }

        this.editor.setValue(this.value);
    }),

    heightChanged: observer('height', function() {
        this.editor.height(this.height);
    }),

    minHeightChanged: observer('minHeight', function() {
        this.editor.minHeight(this.minHeight);
    }),

    previewStyleChanged: observer('previewStyle', function() {
        this.editor.changePreviewStyle(this.previewStyle);
    }),

    editTypeChanged: observer('editType', function() {
        this.editor.changeMode(this.editType);
    }),

    /*
    TODO this is quite buggy
    parameterChanged: observer(
            'language',
            'useCommandShortcut',
            'useDefaultHTMLSanitizer',
            'toolbarItems.[]',
            'hideModeSwitch',
            function() {
        this.editor.remove();
        this.setupTask.perform();
    }),*/

    onLoad() {
        if (this.get('load')) {
            this.load();
        }
    },

    onChange() {
        if (this.get('change')) {
            this.change(this.editor.getValue());
        }
    },

    onStateChange() {
        if (this.get('stateChange')) {
            this.stateChange();
        }
    },

    onFocus() {
        if (this.get('focus')) {
            this.focus();
        }
    },

    onBlur() {
        if (this.get('blur')) {
            this.blur();
        }
    }
});
