var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":31,"id":25060,"methods":[{"el":19,"sc":5,"sl":18},{"el":24,"sc":5,"sl":21},{"el":30,"sc":5,"sl":26}],"name":"PLSQLRuleViolationFactory","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_221":{"methods":[{"sl":18},{"sl":21}],"name":"testXPathRule1","pass":true,"statements":[{"sl":23}]},"test_509":{"methods":[{"sl":21}],"name":"testXPathRule1Compatibility","pass":true,"statements":[{"sl":23}]},"test_783":{"methods":[{"sl":21}],"name":"testXPathRule2","pass":true,"statements":[{"sl":23}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [221], [], [], [509, 783, 221], [], [509, 783, 221], [], [], [], [], [], [], [], [], [], []]
