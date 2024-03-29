# ShinyTreeCheckbox

## Installation

Install library using devtools:   
```R
install.packages("devtools")
devtools::install_github("NetherlandsNeurogeneticsDatabase/shinytreecheckbox")
```

## Requirements:
This package needs [bslib](https://CRAN.R-project.org/package=bslib) to work properly. 

```R
custom_theme <- bs_theme(version = "5"
                         , bootswatch = "sandstone",
                         fg = "#0056B0", bg = "rgb(250, 249, 246)",
                         primary = "#ffcb99", secondary = "#ffcb99")

# Define UI for application that draws a histogram
fluidPage(theme = custom_theme,
```

## Usage
Import the module: 
```R
library(shinytreecheckbox)
```

In the UI construct the checkboxes using `treecheckbox()`:

### Basic:
```R
treecheckbox(id = ns("example_treecheckbox"), 
                          label="mytreecheckbox", 
                          choices = data.frame(order = c("Primates", "Primates", "Primates", "Primates", "Primates", "Carnivora", "Carnivora", "Birds", "Birds", "Birds", "Fish", "Fish", "Fish"), 
                                               genus = c("Baboons", "Capuchin monkeys", "Chimpanzees", "Gorillas", "Mandrills", "Seals", "Candids", "Chiroxiphia", "Montezuma oropendolas", "Pale chanting goshawks", "Cichlids", "Moon wrasse", "Mozambique tilapia")), 
                          levels = c("order", "genus"), 
                          selected=c("Carnivora", "Birds", "Seals"),
                          collapsed=c("Primates", "Birds"))
```

![Basic results](https://raw.githubusercontent.com/devalk96/shinytreecheckbox/media/images/treecheckbox_example1.jpg)

### Include and Exclude: 
```R
treecheckbox(id = ns("example_treecheckbox2"), 
             label="mytreecheckbox", 
             choices = data.frame(order = c("Primates", "Primates", "Primates", "Primates", "Primates", "Carnivora", "Carnivora", "Birds", "Birds", "Birds", "Fish", "Fish", "Fish"), 
                                  genus = c("Baboons", "Capuchin monkeys", "Chimpanzees", "Gorillas", "Mandrills", "Seals", "Candids", "Chiroxiphia", "Montezuma oropendolas", "Pale chanting goshawks", "Cichlids", "Moon wrasse", "Mozambique tilapia")), 
             levels = c("order", "genus"), 
             selected = "Primates",
             collapsed = TRUE,
             include_mode = TRUE,
             search_bar = FALSE)

```
![Include and Exclude results](https://raw.githubusercontent.com/devalk96/shinytreecheckbox/media/images/treecheckbox_example2.jpg)


### Using a stringified JSON object and adding a search bar.  
The input JSON always expects that an object always has three keys; "value", "label" and "children". The children is excepted to be an array/vector/list of new objects.   

Format: `{"label": "my label", "value": "my value", "children": [<child object1>, <child object2>]}`. 

View an example by running:  
```R
treecheckbox(id = ns("select_JSON_debug"), 
             label = "", 
             choices = '[{"label": "eukaryotes", "value": "eukaryotes", "children": [{"label": "vertebrates", "value": "vertebrates", "children": [{"label": "mammals", "value": "mammals", "children": [{"label": "primates", "value": "primates", "children": [{"label": "humans", "value": "humans", "children": []}, {"label": "apes", "value": "apes", "children": [{"label": "chimpanzees", "value": "chimpanzees", "children": []}, {"label": "gorillas", "value": "gorillas", "children": []}, {"label": "orangutans", "value": "orangutans", "children": []}]}]}, {"label": "cats", "value": "cats", "children": [{"label": "lions", "value": "lions", "children": []}, {"label": "tigers", "value": "tigers", "children": []}]}]}, {"label": "birds", "value": "birds", "children": [{"label": "owls", "value": "owls", "children": []}, {"label": "eagles", "value": "eagles", "children": []}]}]}, {"label": "invertebrates", "value": "invertebrates", "children": [{"label": "insects", "value": "insects", "children": [{"label": "bees", "value": "bees", "children": []}, {"label": "ants", "value": "ants", "children": []}]}, {"label": "mollusks", "value": "mollusks", "children": [{"label": "snails", "value": "snails", "children": []}, {"label": "octopuses", "value": "octopuses", "children": []}]}]}]}, {"label": "prokaryotes", "value": "prokaryotes", "children": []}, {"label": "archaea", "value": "archaea", "children": []}]
', 
             collapsed = TRUE, 
             selected = FALSE, 
             include_mode = TRUE, 
             search_bar = TRUE, 
             render_checkbox = TRUE, 
             clickable_labels = TRUE)

```

![JSON + Searchbar](https://raw.githubusercontent.com/NetherlandsNeurogeneticsDatabase/shinytreecheckbox/media/images/example_json.jpg)
### Get input
`observeEvent()` can be used to react on change:

```r 
observeEvent(input$thisisanid, {
  print(input$thisisanid)
  }
)
```
NOTE:  
If include_mode is TRUE, the input will return a list with two names:
```r 
observeEvent(input$thisisanid, {
  checkboxes_input <- input$thisisanid
  print(checkboxes_input$include)
  print(checkboxes_input$exclude)
  }
)
```

### Clickable labels/links  <a name="clickable-labelslinks"></a>  
*For this to work `clickable_labels` should be set to TRUE*  
Add '_click' to the input id. Whenever a user clicks on a label the clicked label will be pushed to this input variable.
```r
observeEvent(input$thisisanid_click, {
  print(input$thisisanid_click)
  }
)
```

### Disabled checkboxes (render_checkbox) 
It is possible to create a clickable file type browser widget. This can be achieved by passing `render_checkbox == FALSE` in the `treecheckbox()` function.
If combined with the `clickable_labels == TRUE` we can create clickable links which can be proccessed in Shiny. Go to the [clickable links](#clickable-labelslinks) section for more information on this. 

![Disabled Checkboxes](https://raw.githubusercontent.com/NetherlandsNeurogeneticsDatabase/shinytreecheckbox/media/images/tree_checkbox_render_checkbox_example1.jpg)

### Example
View an example by running:
```R
example(treecheckbox, "shinytreecheckbox")
```
Note: This example is very bare in layout.

## Arguments
| Argument         | Optional | Default | Input type                          | Description                                                                                                                                                                                                                                                                   |
|------------------|----------|---------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id               | NO       | None    | character                           | The input slot that will be used to access the value.                                                                                                                                                                                                                         |
| label            | YES      | None    | character                           | The label that will be displayed. If NULL is provided, no label will be added.                                                                                                                                                                                                |
| choices          | NO       | None    | data.frame/list or stringified JSON | A dataframe, list, or stringified JSON that will be used to generate the checkboxes.                                                                                                                                                                                          |
| levels           | NO       | c()     | vector                              | A vector that contains the column names that will be used to find hierarchy in the data, ordered from large groups to subgroups (a single group that contains the data, also known as the 'root' is not needed). This is not needed when a stringified JSON file is provided. |
| collapsed        | YES      | FALSE   | logical/vector                      | Can be logical to hide or show all groups or a vector which will hide the provided checkbox.                                                                                                                                                                                  |
| selected         | YES      | TRUE    | logical/vector                      | Can be logical to (de)select all groups or a vector which will select the provided checkbox.                                                                                                                                                                                  |
| include_mode     | YES      | FALSE   | logical                             | Include mode will generate another button that allows including or excluding the checkbox.                                                                                                                                                                                    |
| search_bar       | YES      | TRUE    | logical                             | A search bar will be rendered.                                                                                                                                                                                                                                                |
| collapse_button  | YES      | TRUE    | logical                             | Show the collapse/expand all button.                                                                                                                                                                                                                                          |
| select_button    | YES      | TRUE    | logical                             | Show the select/deselect all buttons.                                                                                                                                                                                                                                         |
| clickable_labels | YES      | FALSE   | logical                             | If enabled, a click signal will be sent to $id_click input variable.                                                                                                                                                                                                          |
| render_checkbox  | YES      | TRUE    | logical                             | If disabled, the checkboxes will not be rendered.                                                                                                                                                                                                                             |
| max_height       | YES      | 35vh    | character                           | The maximum height of the widget in VH or PX.                                                                                                                                                                                                                                 |
| min_height       | YES      | 10vh    | character                           | The minimum height of the widget in VH or PX.                                                                                                                                                                                                                                 |
| max_width        | YES      | NULL    | character                           | The maximum width of the widget in VH or PX.                                                                                                                                                                                                                                  |
| min_width        | YES      | NULL    | character                           | The minimum width of the widget in VH or PX.                                                                                                                                                                                                                                  |
