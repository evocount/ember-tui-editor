import { helper } from '@ember/component/helper';

export default helper(function tuiEditorLocale([locale]) {
  <%= conditional_imports %>
});
