## Markdown tips

# Headers use the `(#)` symbol {#header-info}
### Add more for subheadings
```
# Headers use the `(#)` symbol {#header-info}
### Add more for subheadings
```
---

3 dashes `(-)`  in a row for a horizontal line
```
---
```

---

### Basic table: {#tables}

Title | center-aligned | right-aligned
:--- | :---: | ---:
Row | lorem | ipsum
1 | 2 | 3
4 | 500 | 600

```
Title | center-aligned | right-aligned
:--- | :---: | ---:
Row | lorem | ipsum
1 | 2 | 3
4 | 500 | 600
```

---

### Collapse: {#tables}

:::collapse This is a collapsible block.

Title | center-aligned | right-aligned
:--- | :---: | ---:
Row | lorem | ipsum
1 | 2 | 3
4 | 500 | 600

:::

```
:::collapse This is a collapsible block.

Title | center-aligned | right-aligned
:--- | :---: | ---:
Row | lorem | ipsum
1 | 2 | 3
4 | 500 | 600

:::
```

---

### Linking to other wiki pages: {#linking}

[[Pokemon]] or [[Pokemon/Charmander]] or @[[Wiki Guide]]
```
[[Pokemon]] or [[Pokemon/Charmander]] or @[[Wiki Guide]]
```
[Link to a page with text other than its name](#!Pokemon/Charmander)
```
---

### Images {#images}

Images should be located in the `/images/` folder.

[[File:Belue.png|20px]] [[File:Belue.png]] [[File:Pokeball.svg|45]]

```
[[File:Belue.png|20px]] [[File:Belue.png]] [[File:Pokeball.svg|45]]
```

---

### Links {#links}

[PokéClicker](https://pokeclicker.com) or [scroll to header info](#header-info) or [scroll to here](#here) {#here}

```
[PokéClicker](https://pokeclicker.com) or [scroll to header info](#header-info) or [scroll to here](#here) {#here}
```

### Comments

If you want to add a comment that won't be seen in the render version, you can use the following:

<!-- comment here -->
```
<!-- comment here -->
```

