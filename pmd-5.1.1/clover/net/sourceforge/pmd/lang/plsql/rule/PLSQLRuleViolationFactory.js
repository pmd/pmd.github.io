var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":31,"id":24837,"methods":[{"el":19,"sc":5,"sl":18},{"el":24,"sc":5,"sl":21},{"el":30,"sc":5,"sl":26}],"name":"PLSQLRuleViolationFactory","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_161":{"methods":[{"sl":21}],"name":"testXPathRule1Compatibility","pass":true,"statements":[{"sl":23}]},"test_225":{"methods":[{"sl":21}],"name":"testXPathRule2","pass":true,"statements":[{"sl":23}]},"test_847":{"methods":[{"sl":18},{"sl":21}],"name":"testXPathRule1","pass":true,"statements":[{"sl":23}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [847], [], [], [225, 847, 161], [], [225, 847, 161], [], [], [], [], [], [], [], [], [], []]
