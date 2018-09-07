import Component from '@ember/component';
import { observer } from '@ember/object';
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

    didInsertElement() {
        this._super(...arguments);

        this.setupEditor();
    },

    setupEditor() {
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
                load: () => this.onLoadWrapper(),
                change: () => this.onChangeWrapper(),
                stateChange: () => this.onStateChangeWrapper(),
                focus: () => this.onFocusWrapper(),
                blur: () => this.onBlurWrapper()
            },
        });

        this.set('editor', editor);
    },

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
        this.setupEditor();
    }),*/

    onLoadWrapper() {
        if (this.get('onLoad')) {
            this.onLoad();
        }
    },

    onChangeWrapper() {
        if (this.get('onChange')) {
            this.onChange(this.editor.getValue());
        }
    },

    onStateChangeWrapper() {
        if (this.get('onStateChange')) {
            this.onStateChange();
        }
    },

    onFocusWrapper() {
        if (this.get('onFocus')) {
            this.onFocus();
        }
    },

    onBlurWrapper() {
        if (this.get('onBlur')) {
            this.onBlur();
        }
    }
});
