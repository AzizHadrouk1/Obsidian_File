---
type: database
---

# Books & Articles

```base
filters:
  and:
    - file.inFolder("05. People & Resources/Books & Articles/Entries")
    - file.ext == "md"
formulas:
  resource_file: file.asLink()
properties:
  file.name:
    displayName: Title
  resource_type:
    displayName: Type
  resource_topics:
    displayName: Topics
  resource_author:
    displayName: Author
  resource_link:
    displayName: Source link
  resource_status:
    displayName: Status
  resource_summary:
    displayName: Summary
  formula.resource_file:
    displayName: Resource file
views:
  - type: table
    name: Resources
    order:
      - file.name
      - resource_type
      - resource_topics
      - resource_author
      - resource_link
      - resource_status
      - resource_summary
      - formula.resource_file
```

## Save a resource

Create a note in `05. People & Resources/Books & Articles/Entries`. Use the book or article title as the file name, then add properties like these:

```yaml
---
resource_type: Article
resource_topics:
  - Business
  - Learning
resource_author:
resource_link: https://example.com/article
resource_status: To read
resource_summary:
---
```

Use **Type** for Book or Article, and add multiple topics as separate list items. Save highlights, notes, and your own ideas in the resource note itself.

## Resource files

These links connect this database to its books and articles in Graph view and update as entries change.

<!-- resources-index:start -->
<!-- resources-index:end -->
