---
type: database
---

# Tools & Software

```base
filters:
  and:
    - file.inFolder("05. People & Resources/Tools & Software/Entries")
    - file.ext == "md"
formulas:
  tool_file: file.asLink()
properties:
  file.name:
    displayName: Title
  tool_categories:
    displayName: Categorie
  tool_link:
    displayName: Tools Link
  tool_description:
    displayName: Description
  tool_details:
    displayName: Details
  formula.tool_file:
    displayName: tools_file
views:
  - type: table
    name: Tools
    order:
      - file.name
      - tool_categories
      - tool_link
      - tool_description
      - tool_details
      - formula.tool_file
    sort: []

```
## Add a tool

Create a note in `05. People & Resources/Tools & Software/Entries`. Its file name becomes the **Title** in the table. Add these properties, then replace the example values:

```yaml
---
tool_categories:
  - Productivity
  - AI
tool_link: https://example.com
tool_description: What the tool helps you do.
tool_details: "[[05. People & Resources/Tools & Software/Details/Tool Name/Overview]]"
---
```

Add or remove lines under `tool_categories` to assign one or many categories. For **Details**, create an `Overview` note inside that tool's folder under `Details`, then link to it in `tool_details`.

The **tools_file** column opens the tool's entry note. That note links to its detail note through `tool_details`.

## Tool files

These links connect this database note to every tool entry in Graph view. The list updates when entry notes are added, renamed, or removed.

<!-- tools-index:start -->

<!-- tools-index:end -->
