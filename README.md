# ShinyTreeCheckbox

## Installation

Install library using devtools:   
```R
install.packages("devtools")
devtools::install_github("NetherlandsNeurogeneticsDatabase/shinytreecheckbox")
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
                          selected="Primates",
                          collapsed=TRUE,
                          include_mode=TRUE)
```
![Include and Exclude results](https://raw.githubusercontent.com/devalk96/shinytreecheckbox/media/images/treecheckbox_example2.jpg)


### Using a stringified JSON object and adding a search bar.
```R
treecheckbox(id = ns("select_JSON_debug"), label = "", choices = "{\"Dogs\":[\"Labrador\",\"Husky\"],\"Birds\":{\"Raptors\":{\"eagles\":[\"serpenteagle\",\"bootedeagle\"],\"falcons\":{\"kestrels\":[\"malagasykestrel\",\"commonkestrel\",\"rockkestrel\"]}}}}", collapsed = TRUE, selected = FALSE, include_mode = TRUE, search_bar = TRUE),
```

![JSON + Searchbar](https://raw.githubusercontent.com/NetherlandsNeurogeneticsDatabase/shinytreecheckbox/media/images/example3.jpg)
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

### Example
View an example by running:
```R
example(treecheckbox, "shinytreecheckbox")
```
Note: This example is very bare in layout.

## Arguments
| Argument       | Optional | Default | Input type          | Description                                                                                                                                                                                                                              |
|----------------|----------|---------|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ID`           | NO       | None    | `character`         | The `input` slot that will be used to access the value.                                                                                                                                                                                  |
| `label`        | YES      | None    | `character`         | The label that will be displayed. If `NULL` is provided, no label will be added.                                                                                                                                                         |
| `choices`      | NO       | None    | `data.frame`/`list` or stringified `JSON` | A `dataframe`, `list` or stringified `JSON` that will be used to generate the checkboxes.                                                                                                                                                                    |
| `levels`       | NO | `c()`    | `vector`            | A `vector` which contains the columnames that will be used to find hierarchy in the data, this vector should be ordered from large groups --> subgroups (a single group that contains the data, also known as the 'root' is not needed). This is not needed when a stringified JSON file is provided. |
| `collapsed`    | YES      | `FALSE` | `logical`/`vector`  | Can be `logical` to hide or show all groups, or a `vector` which will hide the provided checkbox.                                                                                                                                        |
| `selected`     | YES      | `TRUE`  | `logical`/`vector`  | Can be `logical` to (de)select all groups, or a `vector` which will select the provided checkbox.                                                                                                                                        |
| `include_mode` | YES      | `FALSE` | `logical`           | Include mode will generate another button which will allow to include or exclude the checkbox.                                                                                                                                           |                                                                                                                                         
| `search_bar`        | YES      | `TRUE`    | `logical`         | A search bar will be rendered |                                                                                                                                                        |

