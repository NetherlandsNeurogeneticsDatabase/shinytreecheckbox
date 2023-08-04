#' Treecheckbox
#'
#' Creates the checkboxes.
#'
#' @param id The \code{input} slot that will be used to access the value.
#' @param label The label that will be displayed in front. If \code{NULL} is provided, no label will be generated.
#' @param choices A dataframe or stringified JSON which will be used to generate the checkboxes.
#' @param levels A vector which contains the columnames that will be used to create the hierarchical data. From highest to lowest level. Is not necessary if \code{choices} is a stringified JSON.
#' @param collapsed Logical; If \code{TRUE} checkboxes will be collapsed on render.
#' @param selected A vector containing the values of which checkboxes will default as checked.
#' @param include_mode Logical; If \code{TRUE} the checkboxes will be rendered with include/exclude mode.
#' @param select_buttons Logical; If \code{TRUE} helper buttons will be rendered to select all or none, collapse or expand.
#' @param search_bar Logical; If \code{TRUE} a search bar will be rendered
#' @param clickable_labels Logical; If \code{TRUE} clicking on the label will set the value of <id>_click to the label value.
#' @param render_checkbox Logical; If \code{TRUE} the checkboxes will be rendered. If \code{FALSE} only the labels will be rendered.
#' @param max_height The maximum height of the widget can be px or vh.
#' @param min_height The minimum height of the widget can be px or vh.
#' @param max_width The maximum width of the widget can be px or vh.
#' @param min_width The minimum width of the widget can be px or vh.
#' @examples
#' library(shiny)
#' library(shinytreecheckbox)
#' choices = data.frame(order = c("Primates", "Primates", "Primates", "Primates", "Primates", "Carnivora", "Carnivora", "Birds", "Birds", "Birds", "Fish", "Fish", "Fish"), genus = c("Baboons", "Capuchin monkeys", "Chimpanzees", "Gorillas", "Mandrills", "Seals", "Candids", "Chiroxiphia", "Montezuma oropendolas", "Pale chanting goshawks", "Cichlids", "Moon wrasse", "Mozambique tilapia"))
#' ui <- fluidPage(
#'  shinytreecheckbox::treecheckbox("thisisanid", "mytreecheckbox", choices, c("order", "genus"), T, c("Fish", "Gorillas"))
#' )
#' server <- function(input, output, session) {}
#' shinyApp(ui, server)
#'
#' @import htmlwidgets
#' @importFrom jsonlite toJSON
#' @export
treecheckbox <- function(id, label, choices, levels = c(), collapsed = FALSE, selected = NULL, include_mode = FALSE, select_buttons = TRUE, search_bar = TRUE, clickable_labels = FALSE, render_checkbox = TRUE, max_height = "35vh", min_height = "10vh", max_width = NULL, min_width = NULL) {
  # Validate arguments first
  # validateArgs(id, label, choices, levels, collapsed, selected, width, height)

  # Validate if id is a string
  if (!is.character(id)) {
    stop("id must be a string")
  }

  # Validate if label is a string
  if (!is.character(label)) {
    stop("label must be a string")
  }

  # if choices is a dataframe we levels can't be an empty vector
  if (is.data.frame(choices) && length(levels) == 0) {
      stop("levels can't be an empty vector if choices is a dataframe")
  }

    if (is.data.frame(choices) && !is.vector(levels)) {
      stop("levels must be a vector")
    }

   # max_height, min_height must be a string or NULL
    if (!is.null(max_height) && !is.character(max_height)) {
        stop("max_height must be a string or NULL")
    }

    if (!is.null(min_height) && !is.character(min_height)) {
        stop("min_height must be a string or NULL")
    }

    if (!is.null(max_width) && !is.character(max_width)) {
        stop("max_width must be a string or NULL")
    }

    if (!is.null(min_width) && !is.character(min_width)) {
        stop("min_width must be a string or NULL")
    }


  collapsed <- validate_logical_or_vector(collapsed, sprintf("Argument:'collapsed' should be logical or a vector. You provided %s", typeof(collapsed)))
  selected <- validate_logical_or_vector(selected, sprintf("Argument:'selected' should be logical or a vector. You provided %s", typeof(selected)))

  # forward options using x
  variables <- list(
    label = label,
    choices = jsonlite::toJSON(choices),
    levels = jsonlite::toJSON(levels),
    collapsed = collapsed,
    selected = selected,
    includeMode = include_mode,
    renderSelectButtons = select_buttons,
    search_bar = search_bar,
    isJSON = !is.data.frame(choices),
    clickableLabels = clickable_labels,
    renderCheckbox = render_checkbox,
    maxHeight = max_height,
    minHeight = min_height,
    maxWidth = max_width,
    minWidth = min_width
  )

  # create widget
  htmlwidgets::createWidget(
    name = "treecheckbox",
    variables,
    width = NULL,
    height = NULL,
    package = "shinytreecheckbox",
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
treecheckboxOutput <- function(outputId, width = NULL, height = NULL) {
  htmlwidgets::shinyWidgetOutput(outputId, "treecheckbox", width, height, package = "shinytreecheckbox")
}

#' @rdname treecheckbox-shiny
#' @export
renderTreecheckbox <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) {
    expr <- substitute(expr)
    }
  htmlwidgets::shinyRenderWidget(expr, treecheckboxOutput, env, quoted = TRUE)
}

validate_logical_or_vector <- function(argument, error_message){
  if (is.logical(argument)){
    return(argument)
  }
  if (is.character(argument)){
    return(c(argument))
  }
  if (is.vector(argument)){
    return(argument)
  }
  return(stop(error_message))
}
