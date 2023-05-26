#' Treecheckbox
#'
#' Creates the checkboxes.
#'
#' @param id The \code{input} slot that will be used to access the value.
#' @param label The label that will be displayed in front. If \code{NULL} is provided, no label will be generated.
#' @param choices A dataframe which will be used to generate the checkboxes.
#' @param levels A vector which contains the columnames that will be used to create the hierarchical data. From large to small groups.
#' @param collapsed Logical; If \code{TRUE} checkboxes will be collapsed on render.
#' @param selected A vector containing the values of which checkboxes will default as checked.
#' @param include_mode Logical; If \code{TRUE} the checkboxes will be rendered with include/exclude mode.
#' @param select_buttons Logical; If \code{TRUE} helper buttons will be rendered to select all or none, collapse or expand.
#' @param search_bar Logical; If \code{TRUE} a search bar will be rendered
#' @param clickableLabel Logical; If \code{TRUE} clicking on the label will set the value of <id>_click to the label value.
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
treecheckbox <- function(id, label, choices, levels = c(), collapsed = FALSE, selected = NULL, include_mode = FALSE, select_buttons = TRUE, search_bar = TRUE, clickable_labels = FALSE, width = NULL, height = NULL) {
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
    select_buttons = select_buttons,
    search_bar = search_bar,
    isJSON = !is.data.frame(choices),
    clickableLabels = clickable_labels
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
