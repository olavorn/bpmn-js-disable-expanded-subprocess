import DisabledExpandedSubprocessPopupProvider from './DisabledExpandedSubprocessPopupProvider';


export default {
  __depends__: [
    'popupMenu',
    'bpmnReplace'
  ],
  __init__: [ 'disabledExpandedSubprocessPopupProvider' ],
  disabledExpandedSubprocessPopupProvider: [ 'type', DisabledExpandedSubprocessPopupProvider ]
};
