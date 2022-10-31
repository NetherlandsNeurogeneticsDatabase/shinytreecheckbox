# ShinyTreeCheckbox

## Installation

Install library using devtools:   
```R
install.packages("devtools")
devtools::githubinstall("devalk96/shinytreecheckbox")
```

## Usage
Import the module: 
```R
library(shinytreecheckbox)
```

In the UI construct the checkboxes using `treecheckbox()`:

Basic:
```R
treecheckbox("thisisanid", "mytreecheckbox", data.frame(order = c("Primates", "Primates", "Primates", "Primates", "Primates", "Carnivora", "Carnivora", "Birds", "Birds", "Birds", "Fish", "Fish", "Fish"), genus = c("Baboons", "Capuchin monkeys", "Chimpanzees", "Gorillas", "Mandrills", "Seals", "Candids", "Chiroxiphia", "Montezuma oropendolas", "Pale chanting goshawks", "Cichlids", "Moon wrasse", "Mozambique tilapia"))
, c("order", "genus"), T, c("Fish", "Gorillas"))
```

![Basic results](https://raw.githubusercontent.com/devalk96/shinytreecheckbox/media/images/example.jpeg)

Include and Exclude: 
```R
treecheckbox("thisisanid", "mytreecheckbox", data.frame(order = c("Primates", "Primates", "Primates", "Primates", "Primates", "Carnivora", "Carnivora", "Birds", "Birds", "Birds", "Fish", "Fish", "Fish"), genus = c("Baboons", "Capuchin monkeys", "Chimpanzees", "Gorillas", "Mandrills", "Seals", "Candids", "Chiroxiphia", "Montezuma oropendolas", "Pale chanting goshawks", "Cichlids", "Moon wrasse", "Mozambique tilapia"))
, c("order", "genus"), T, c("Fish", "Gorillas"), include_mode=TRUE)
```
![Include and Exclude results](https://raw.githubusercontent.com/devalk96/shinytreecheckbox/media/images/example2.jpeg)

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
| `choices`      | NO       | None    | `data.frame`/`list` | A `dataframe` or `list` that will be used to generate the checkboxes.                                                                                                                                                                    |
| `levels`       | NO       | None    | `vector`            | A `vector` which contains the columnames that will be used to find hierarchy in the data, this vector should be ordered from large groups --> subgroups (a single group that contains the data, also known as the 'root' is not needed). |
| `collapsed`    | YES      | `FALSE` | `logical`/`vector`  | Can be `logical` to hide or show all groups, or a `vector` which will hide the provided checkbox.                                                                                                                                        |
| `selected`     | YES      | `TRUE`  | `logical`/`vector`  | Can be `logical` to (de)select all groups, or a `vector` which will select the provided checkbox.                                                                                                                                        |
| `include_mode` | YES      | `FALSE` | `logical`           | Include mode will generate another button which will allow to include or exclude the checkbox.                                                                                                                                           |                                                                                                                                         |
