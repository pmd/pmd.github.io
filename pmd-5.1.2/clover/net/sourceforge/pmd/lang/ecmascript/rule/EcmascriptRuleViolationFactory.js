var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":30,"id":9836,"methods":[{"el":19,"sc":5,"sl":18},{"el":25,"sc":5,"sl":21},{"el":29,"sc":5,"sl":27}],"name":"EcmascriptRuleViolationFactory","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_561":{"methods":[{"sl":21}],"name":"testEcmascript","pass":true,"statements":[{"sl":24}]},"test_933":{"methods":[{"sl":18},{"sl":21}],"name":"testExclusionsInReportWithNOPMDEcmascript","pass":true,"statements":[{"sl":24}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [933], [], [], [933, 561], [], [], [933, 561], [], [], [], [], [], []]
