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

## Example. 
View an example by running:
```R
example(treecheckbox, "shinytreecheckbox")
```
Note: This example is very bare in layout.


