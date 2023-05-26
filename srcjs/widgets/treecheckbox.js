import 'widgets';
import 'shiny';

import {createTree} from "../modules/renderTree.js";

HTMLWidgets.widget({

  name: 'treecheckbox',

  type: 'output',

  factory: function(el, width, height) {
    return {

      renderValue: function(x) {
        createTree(el.id, x.label, x.choices, x.levels, x.collapsed, x.selected, x.includeMode, x.select_buttons, x.search_bar, x.isJSON, x.clickableLabels, x.renderCheckbox)

        // HTMLWidgets.widget sets a default size. Remove this default size and make auto.
        $("#" + el.id).css("height", "auto").css("width", "auto")
        // Add a class to the widget container called "shinyTreeCheckboxMainContainer"
        $("#" + el.id).addClass("shinyTreeCheckboxMainContainer")
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
