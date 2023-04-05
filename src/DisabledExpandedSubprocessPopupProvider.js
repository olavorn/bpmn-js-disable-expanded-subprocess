import { is } from 'bpmn-js/lib/util/ModelUtil';

import {
  isExpanded,
  isEventSubProcess
} from 'bpmn-js/lib/util/DiUtil';

import {
  assign
} from 'min-dash';

var REPLACE_WITH_COLLAPSED = 'replace-with-collapsed-subprocess',
    REPLACE_WITH_EXPANDED = 'replace-with-expanded-subprocess';


export default function DisabledExpandedSubprocessPopupProvider(popupMenu, bpmnReplace, translate) {
  popupMenu.registerProvider('bpmn-replace', this);

  this._bpmnReplace = bpmnReplace;
  this._translate = translate;
}

DisabledExpandedSubprocessPopupProvider.$inject = [
  'popupMenu',
  'bpmnReplace',
  'translate'
];

/**
 * Get all entries from original bpmn-js provider minus the ones that allow to model
 * collapsed subprocess.
 */
DisabledExpandedSubprocessPopupProvider.prototype.getPopupMenuEntries = function(element) {
  var bpmnReplace = this._bpmnReplace,
      translate = this._translate;

  return function(entries) {
    
    if ( !isSubProcess(element) ){
      delete entries[REPLACE_WITH_EXPANDED];
    }

    return entries;
  };
};


// helper /////

function isSubProcess(element) {
  return is(element, 'bpmn:SubProcess') &&
    !is(element, 'bpmn:Transaction') &&
    !isEventSubProcess(element);
}

function hasChildren(element) {
  return element.children && element.children.length;
}
