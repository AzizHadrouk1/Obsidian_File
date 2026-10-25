---
type: database
---

# Ideas & Quick Notes

```base
filters:
  and:
    - file.inFolder("00. Inbox/Entries")
    - file.ext == "md"
formulas:
  link_file: file.asLink()
properties:
  file.ctime:
    displayName: Datetime
  file.name:
    displayName: Title
  capture_description:
    displayName: Description
  capture_type:
    displayName: Type
  capture_status:
    displayName: Status
  formula.link_file:
    displayName: link_file
views:
  - type: table
    name: Captures
    order:
      - file.ctime
      - file.name
      - capture_status
      - capture_type
      - capture_description
      - formula.link_file
    sort:
      - property: capture_type
        direction: ASC

```

## Add an idea or quick note

Create a note in `00. Inbox/Entries`. Its file name becomes **Title**, and **Datetime** is filled from its creation time. Add these properties:

```yaml
---
capture_description: A short description of the idea or note.
capture_type: Idea
capture_status: Inbox
---
```

Use `Idea` or `Quick Note` for **Type**. Change **Status** to `In progress` or `Archived` as you process it. The **link_file** column opens the capture note, where you can write longer details.

## Capture files

These links connect this database to every capture in Graph view and update as entries change.

<!-- inbox-index:start -->
<!-- inbox-index:end -->
