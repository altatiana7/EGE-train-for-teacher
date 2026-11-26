# EGE Written Exam UI

The design comes from the [EGE Teachers Hub source](https://github.com/altatiana7/Tatyana-English-Hub/tree/main/ege-teachers-hub).
The styles in `exam.css` scope the Hub’s `app.css`, `katya.css`, and task
rules from the lesson, homework and mock pages to the working area.
The scoped selector substitutions map the reference page root and main panel
to the host activity. The host continues to own navigation and controls above
and below that area.

| Template key | Reference component | Source |
| --- | --- | --- |
| `1` | Statements left, matching controls right | `home1.js` / `lis1` |
| `2` | Statement with three visible options | `home1.js` / `lis2` |
| `3–9` | KIM question grid, choices and answer cell | `home1.js` / `lis3` |
| `10` | Passages left, headings and controls right | `home1.js` / `read10` |
| `11` | Continuous passage left, fragments right | `lesson1.js` and `mock1.js` / `read11` |
| `12–18` | Passage left, question and number navigation right | `home1.js` / `read12` |
| `19–24` | Continuous text, numbered gaps, capitalised words | `mock1.js` / `gaps` |
| `25–29` | Continuous text, numbered gaps, capitalised roots | `mock1.js` / `gaps` |
| `30–36` | Continuous text with inline choices | `lesson1.js` / `mcq`, `mock1.js` / `voc` |
| `37` | Full message and instructions with editor | `home1.js` / `writing` |
| `38.1` | Full prompt with table and editor | `home1.js` / `writing` |
| `38.2` | Full prompt with original diagram and editor | `write38.js` / `dataHtml` and `pie`, `home1.js` / `writing` |

Mount the returned element using `host.replaceChildren(EgeWritten.render(type, model))`.
The model uses the existing answer DOM nodes. For visible options, supply
`{label, control, options, values}` per question. Matching requires labels and
controls. Reading also takes the original paragraphs. Writing takes
`{intro, prompt, editor, footer}`, where the prompt contains the original table
or chart and plan. For typed gaps supply rows with
`{number, before, after, base, control}`.

The shared renderer changes the working area presentation. A diagnostic,
lesson or trainer keeps its own state keys, scoring rules, finish action and
audio playback. `diagnostics.js` is the adapter for the two teacher diagnostics.
