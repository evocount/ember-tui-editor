import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  height = 'auto';
  minHeight = '300px';
  value = '# Hello world\nThis is just some sample text';
  previewStyle = 'tab';
  editType = 'markdown';

  previewStyles = ['vertical', 'tab'];
  editTypes = ['markdown', 'wysiwyg'];
  placeholder = 'Add some text here';

  show = true;
}
