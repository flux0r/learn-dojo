/** Defining AMD modules */

/** This module will use ``dojo/dom'', so it goes in the list of dependencies.
 */
define([ "dojo/dom"
       ], function (dom) {
                /** This callback will be called once the modules in the 
                 * dependency list have loaded. The dependencies are passed in 
                 * as arguments.
                 */

                var old_text, r;
                old_text = {};
                r = { set_text: function (id, text) {
                                        var node = dom.byId(id);
                                        old_text[id] = node.innerHTML;
                                        node.innerHTML = text;
                                }
                    , restore_text: function(id) {
                                        var node = dom.byId(id);
                                        node.innerHTML = old_text[id];
                                        delete old_text[id];
                                }
                    };
                return r;
       }
);

/** The loader stores the return value of the callback function as the value 
 * of the module you're defining. Any other code that loads the module with 
 * ``require'' or ``define'' will get a reference to the return value of the 
 * defining module.
 */
