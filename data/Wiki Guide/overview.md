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

### Farm table: {#farm_table}
This makes a farm layout with soil in each cell.  A berry can be placed with ```[[File:Cheri.png\|32px]][[Berries/Cheri]]```, change Cheri to whatever species is desired. If there is nothing betweeen pipes ```|``` an empty plot will be rendered.  Plots can be colored to represent different Mulches with {.mutation}, {.boost}, {.rich} {.freeze}, {.amaze}, or  {.gooey}, which should be appended after all the other data in the cell.  Use five rows of fives cells if representing the full [[Farm]].
::: table-mutations
| :----: | :----: | :----: | :----: | :----: |
| [[File:Cheri.png\|32px]] [[Berries/Cheri]]{.gooey} | {.rich} | {.freeze}| {.amaze} | | |
[[File:Rowap.png\|32px]] [[Berries/Rowap]]{.mutation} | [[File:Petaya.png\|32px]] [[Berries/Petaya]]{.boost} | [[File:Wacan.png\|32px]] [[Berries/Wacan]]{.rich} | [[File:Babiri.png\|32px]] [[Berries/Babiri]]{.freeze} | [[File:Chople.png\|32px]] [[Berries/Chople]]{.amaze} | |
:::

```
::: table-mutations
| :----: | :----: | :----: | :----: | :----: |
| [[File:Cheri.png\|32px]] [[Berries/Cheri]]{.gooey} | {.rich} | {.freeze}| {.amaze} | | |
[[File:Rowap.png\|32px]] [[Berries/Rowap]]{.mutation} | [[File:Petaya.png\|32px]] [[Berries/Petaya]]{.boost} | [[File:Wacan.png\|32px]] [[Berries/Wacan]]{.rich} | [[File:Babiri.png\|32px]] [[Berries/Babiri]]{.freeze} | [[File:Chople.png\|32px]] [[Berries/Chople]]{.amaze} | |
:::
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

Combining the above, you can link to an anchor on another page with `[link text](#!page/subpage#anchor)`

[Harvest Aura Setups](#!Farm/Setups#harvest)

```
[Harvest Aura Setups](#!Farm/Setups#harvest)
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