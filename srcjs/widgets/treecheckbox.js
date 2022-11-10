import 'widgets';
import 'shiny';

import {createTree} from "../modules/renderTree.js";

HTMLWidgets.widget({

  name: 'treecheckbox',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {
        createTree(el.id, x.label, x.choices, x.levels, x.collapsed, x.selected, x.includeMode, x.select_buttons, x.search_bar)

        // HTMLWidgets.widget sets a default size. Remove this default size and make auto.
        $("#" + el.id).css("height", "auto").css("width", "auto")
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
