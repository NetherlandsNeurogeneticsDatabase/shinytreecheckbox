#' Treecheckbox
#'
#' Creates the checkboxes.
#'
#' @import htmlwidgets
#' @importFrom jsonlite toJSON
#' @export
treecheckbox <- function(id, label, choices, levels, collapsed = F, width = NULL, height = NULL) {

  # forward options using x
  x = list(
    label = label,
    choices = jsonlite::toJSON(choices),
    levels = jsonlite::toJSON(levels),
    collapsed = jsonlite::toJSON(collapsed)
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'treecheckbox',
    x,
    width = NULL,
    height = NULL,
    package = 'shinytreecheckbox',
    elementId = id
  )
}

#' Shiny bindings for treecheckbox
#'
#' Output and render functions for using treecheckbox within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a treecheckbox
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name treecheckbox-shiny
#'
#' @export
treecheckboxOutput <- function(outputId, width = NULL, height = NULL){
  htmlwidgets::shinyWidgetOutput(outputId, 'treecheckbox', width, height, package = 'shinytreecheckbox')
}

#' @rdname treecheckbox-shiny
#' @export
renderTreecheckbox <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, treecheckboxOutput, env, quoted = TRUE)
}
