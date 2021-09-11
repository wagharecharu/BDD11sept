$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "JBK offline application test",
  "description": "",
  "id": "jbk-offline-application-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "login test with multiple data",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@invalidLogin"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user enters \"\u003cuname\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user will verify \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user will capture error message",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-data;",
  "rows": [
    {
      "cells": [
        "uname",
        "pass",
        "title"
      ],
      "line": 34,
      "id": "jbk-offline-application-test;login-test-with-multiple-data;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456",
        "Dashboard"
      ],
      "line": 35,
      "id": "jbk-offline-application-test;login-test-with-multiple-data;;2"
    },
    {
      "cells": [
        "mangesh@gmail.com",
        "1234567",
        "Log in"
      ],
      "line": 36,
      "id": "jbk-offline-application-test;login-test-with-multiple-data;;3"
    },
    {
      "cells": [
        "neelam@gmail.com",
        "asdfgh",
        "Log in"
      ],
      "line": 37,
      "id": "jbk-offline-application-test;login-test-with-multiple-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3280425447,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "login test with multiple data",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@invalidLogin"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user will verify \"Dashboard\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user will capture error message",
  "keyword": "And "
});
formatter.match({
  "location": "StepLoginPage.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 1558048973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "StepLoginPage.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1518759419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 18
    }
  ],
  "location": "StepLoginPage.user_will_verify(String)"
});
formatter.result({
  "duration": 14516835,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.user_will_capture_error_message()"
});
formatter.result({
  "duration": 8291244,
  "status": "passed"
});
formatter.after({
  "duration": 72704634,
  "status": "passed"
});
formatter.before({
  "duration": 1842807215,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "login test with multiple data",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@invalidLogin"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user enters \"mangesh@gmail.com\" and \"1234567\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user will capture error message",
  "keyword": "And "
});
formatter.match({
  "location": "StepLoginPage.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 1459913679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mangesh@gmail.com",
      "offset": 13
    },
    {
      "val": "1234567",
      "offset": 37
    }
  ],
  "location": "StepLoginPage.user_enters_and(String,String)"
});
formatter.result({
  "duration": 305568730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "StepLoginPage.user_will_verify(String)"
});
formatter.result({
  "duration": 9958784,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.user_will_capture_error_message()"
});
formatter.result({
  "duration": 77867688,
  "status": "passed"
});
formatter.after({
  "duration": 65477547,
  "status": "passed"
});
formatter.before({
  "duration": 1898494514,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "login test with multiple data",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@invalidLogin"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user enters \"neelam@gmail.com\" and \"asdfgh\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user will capture error message",
  "keyword": "And "
});
formatter.match({
  "location": "StepLoginPage.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 2347016849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neelam@gmail.com",
      "offset": 13
    },
    {
      "val": "asdfgh",
      "offset": 36
    }
  ],
  "location": "StepLoginPage.user_enters_and(String,String)"
});
formatter.result({
  "duration": 302813805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "StepLoginPage.user_will_verify(String)"
});
formatter.result({
  "duration": 11752727,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginPage.user_will_capture_error_message()"
});
formatter.result({
  "duration": 77333988,
  "status": "passed"
});
formatter.after({
  "duration": 58826834,
  "status": "passed"
});
});