---
type: database
---

# People

```base
filters:
  and:
    - file.inFolder("05. People & Resources/People/Entries")
    - file.ext == "md"
formulas:
  person_file: file.asLink()
properties:
  file.name:
    displayName: Name
  person_categories:
    displayName: Categories
  person_company:
    displayName: Company
  person_email:
    displayName: Email
  person_phone:
    displayName: Phone
  person_location:
    displayName: Location
  person_notes:
    displayName: Notes
  formula.person_file:
    displayName: Person file
views:
  - type: table
    name: People
    order:
      - file.name
      - person_categories
      - person_company
      - person_email
      - person_phone
      - person_location
      - person_notes
      - formula.person_file
    sort: []

```

## Add a person

Create a note in `05. People & Resources/People/Entries`. Use the person's name as the file name, then add properties like these:

```yaml
---
person_categories:
  - Friend
  - Work
person_company: "[[05. People & Resources/Companies/Entries/Company Name]]"
person_email:
person_phone:
person_location:
person_notes:
---
```

Add multiple categories as separate list items. Keep conversation notes, context, and follow-ups in the person's note itself.

## People files

These links connect this database to its people in Graph view and update as entries change.

<!-- people-index:start -->
<!-- people-index:end -->
