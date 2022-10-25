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
treecheckbox <- function(id, label, choices, levels, collapsed=F, selected=NULL, width = NULL, height = NULL) {

  validateArgs(id, label, choices, levels, collapsed, selected, width, height)


  
  # forward options using x
  variables = list(
    label = label,
    choices = jsonlite::toJSON(choices),
    levels = jsonlite::toJSON(levels),
    collapsed = jsonlite::toJSON(collapsed),
    selected = jsonlite::toJSON(selected)
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'treecheckbox',
    variables,
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

#' Validating arguments
validateArgs <- function(id, label, choices, levels, collapsed=F, selected=NULL, width = NULL, height = NULL){

  # Validate ID
  if (!is.character(id)) {
    stop(sprintf("Argument:'id' should be a string. You provided %s", typeof(id)))
  }

  # Validate label
    if (!is.character(label)) {
    stop(sprintf("Argument:'label' should be a string. You provided %s", typeof(label)))
  }

  # Validate choices
      if (!is.data.frame(choices)) {
    stop(sprintf("Argument:'choices' should be a data frame. You provided %s", typeof(choices)))
  }

  # Validate levels
    val_levels <- sapply(levels, function(x) {
    if (!is.na(match(x, colnames(choices)))) {
        return(TRUE)
    } else {
        stop(sprintf("Level: '%s'\tis not a columname in choices.", x))
        return(FALSE)
    }
  })

  # Validate collapsed
  if (!is.logical(collapsed)) {
    stop(sprintf("Argument:'collapsed' should be logical. You provided %s", typeof(collapsed)))
  }
  
  # Validate selected
  if(!is.null(selected)){
    if (!is.vector(collapsed)) {
      stop(sprintf("Argument:'collapsed' should be logical. You provided %s", typeof(collapsed)))
  }
  }




  # Validate collapsed

}