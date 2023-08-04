import 'widgets';
import 'shiny';

import {createTree} from "../modules/renderTree.js";

HTMLWidgets.widget({

  name: 'treecheckbox',

  type: 'output',

  factory: function(el, width, height) {
    return {

      renderValue: function(params) {
        params.id = el.id
        createTree(params)

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
