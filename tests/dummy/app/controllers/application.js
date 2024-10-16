import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked height = 'auto';
  @tracked minHeight = '300px';
  @tracked value = '# Hello world\nThis is just some sample text';
  @tracked previewStyle = 'tab';
  @tracked editType = 'markdown';
  @tracked placeholder = 'Add some text here';
  @tracked show = true;

  previewStyles = ['vertical', 'tab'];
  editTypes = ['markdown', 'wysiwyg'];
}
