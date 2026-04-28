# Playwright Automation Project

## Overview

This project contains automated tests for:

* **UI testing** 
* **API testing** 

---

## Running Tests Locally

### Run all tests

```bash
npx playwright test
```

### Run UI tests only

```bash
npx playwright test --project=ui
```

### Run API tests only

```bash
npx playwright test --project=api
```



## CI/CD (GitHub Actions)

This project uses GitHub Actions to automate test execution.

### Workflows

* **api-tests.yml** - runs API tests only
* **ui-tests.yml** - runs UI tests only
* **all-test-env.yml** - runs both API and UI tests with environment selection

### Behavior:

* **On push** → defaults to **QA**
* **Manual run** → choose environment via GitHub Actions

### Environment Handling

* Environment-specific values (e.g. `API_BASE_URL`) are stored in **GitHub Secrets**
* The workflow dynamically selects the correct values based on:

  * trigger type (push vs manual)
  * selected environment


---

## Notes

* `.env` is used for local configuration
* Test data is stored in JSON files
* UI follows Page Object Model (POM)

---
