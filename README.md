# bpmn-js disable expanded subprocess

A bpmn-js extension which disables modeling expanded subprocess via replace menu.

## Installation

Install via [npm](http://npmjs.com/).

```bash
npm install bpmn-js-disable-expanded-subprocess
```

Add as additional module to [bpmn-js](https://github.com/bpmn-io/bpmn-js).

### Modeler

```javascript
var BpmnModeler = require('bpmn-js/lib/Modeler');
var disableExpandedSubprocessModule = require('bpmn-js-disable-expanded-subprocess');

var modeler = new BpmnModeler({
  container: '#canvas',
  additionalModules: [
    disableExpandedSubprocessModule
  ]
});
```

### Viewer

This extension is useless for the Viewer as it changes only the modeling actions.

## Licence

MIT
