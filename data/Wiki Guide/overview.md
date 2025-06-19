## Markdown tips

# Headers use the `(#)` symbol {#header-info}
### Add more for subheadings
```
# Headers use the `(#)` symbol
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

### Collapse: {#collapse}

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
[Evolves into Charmeleon](#!Pokemon/Charmander)
```
Link to a page with text other than its name. [Evolves into Charmeleon](#!Pokemon/Charmander)
```
[PokéClicker Companion](https://companion.pokeclicker.com)
```
External link. [PokéClicker Companion](https://companion.pokeclicker.com)
```

---

### Anchors {#anchors}
Use anchors to send the reader to a different section on the same page.  Anchors are placed with `{#anchor}` and linked like an external link but use the `(#anchor)` text instead of a URL.

[scroll to header info](#header-info) or [scroll to here](#here) {#here}

```
[scroll to header info](#header-info) or [scroll to here](#here) {#here}
```

### Images {#images}

Images should be located in the `/images/` folder.

[[File:Belue.png|20px]] [[File:Belue.png]] [[File:Pokeball.svg|45]]

```
[[File:Belue.png|20px]] [[File:Belue.png]] [[File:Pokeball.svg|45]]
```

---

### Comments{#comments}

If you want to add a comment that won't be seen in the render version, you can use the following:

<!-- comment here -->
```
<!-- comment here -->
```

---

### Escaping Markdown {#escape}
To display characters that would normally be turned into markdown, prefix with a backslash `\` to escape.

\* this escaped asterisk won't turn into a bullet list
```
\* this escaped asterisk won't turn into a bullet list
```