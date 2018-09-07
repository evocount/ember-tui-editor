import Controller from '@ember/controller';

export default Controller.extend({
    height: 'auto',
    minHeight: '300px',
    value: '# Hello world\nThis is just some sample text',
    previewStyle: 'tab',
    editType: 'markdown',

    previewStyles: Object.freeze(['vertical', 'tab']),
    editTypes: Object.freeze(['markdown', 'wysiwyg']),
});
