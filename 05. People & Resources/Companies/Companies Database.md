---
type: database
---

# Companies

```base
filters:
  and:
    - file.inFolder("05. People & Resources/Companies/Entries")
    - file.ext == "md"
formulas:
  company_file: file.asLink()
properties:
  file.name:
    displayName: Company
  company_categories:
    displayName: Categories
  company_website:
    displayName: Website
  company_contacts:
    displayName: Contacts
  company_email:
    displayName: Email
  company_phone:
    displayName: Phone
  company_location:
    displayName: Location
  company_description:
    displayName: Description
  formula.company_file:
    displayName: Company file
views:
  - type: table
    name: Companies
    order:
      - file.name
      - company_categories
      - company_website
      - company_contacts
      - company_email
      - company_phone
      - company_location
      - company_description
      - formula.company_file
```

## Add a company

Create a note in `05. People & Resources/Companies/Entries`. Use the company name as the file name, then add properties like these:

```yaml
---
company_categories:
  - Partner
  - Technology
company_website: https://example.com
company_contacts:
  - "[[05. People & Resources/People/Entries/Person Name]]"
company_email: hello@example.com
company_phone:
company_location:
company_description:
---
```

Add multiple categories or people as separate list items. Keep meeting notes, history, and other details in the company note itself.

## Company files

These links connect this database to its companies in Graph view and update as entries change.

<!-- companies-index:start -->
<!-- companies-index:end -->
