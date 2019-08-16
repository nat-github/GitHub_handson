$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "basket",
  "description": "",
  "id": "basket",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Testing scenario outline",
  "description": "",
  "id": "basket;testing-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@outlineTest"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I go to \"\u003cwebsite\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "i type \"\u003csearchText\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "i should see the results",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "basket;testing-scenario-outline;",
  "rows": [
    {
      "cells": [
        "website",
        "searchText"
      ],
      "line": 27,
      "id": "basket;testing-scenario-outline;;1"
    },
    {
      "cells": [
        "https://www.google.com",
        "Testing"
      ],
      "line": 28,
      "id": "basket;testing-scenario-outline;;2"
    },
    {
      "cells": [
        "https://www.google.com",
        "Cucumber"
      ],
      "line": 29,
      "id": "basket;testing-scenario-outline;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Testing scenario outline",
  "description": "",
  "id": "basket;testing-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@outlineTest"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I go to \"https://www.google.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "i type \"Testing\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "i should see the results",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.i_go_to(String)"
});
formatter.result({
  "duration": 5710299300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.searchText(String)"
});
formatter.result({
  "duration": 465602500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_should_see_the_results()"
});
formatter.result({
  "duration": 1068216200,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Testing scenario outline",
  "description": "",
  "id": "basket;testing-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@outlineTest"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I go to \"https://www.google.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "i type \"Cucumber\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "i should see the results",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.i_go_to(String)"
});
formatter.result({
  "duration": 4414064500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.searchText(String)"
});
formatter.result({
  "duration": 348767200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_should_see_the_results()"
});
formatter.result({
  "duration": 816390600,
  "status": "passed"
});
});