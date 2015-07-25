var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":19,"id":8915,"methods":[{"el":11,"sc":5,"sl":9},{"el":18,"sc":5,"sl":16}],"name":"ASTScope","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_158":{"methods":[{"sl":9},{"sl":16}],"name":"testMultipleCatchAndFinallyBlock","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_4":{"methods":[{"sl":9},{"sl":16}],"name":"testEcmascript","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_667":{"methods":[{"sl":9},{"sl":16}],"name":"testFinallyBlockOnly","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_7":{"methods":[{"sl":9},{"sl":16}],"name":"testCatchAndFinallyBlock","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_701":{"methods":[{"sl":9},{"sl":16}],"name":"testCatchBlockOnly","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_912":{"methods":[{"sl":9},{"sl":16}],"name":"testLineNumbersWithinEcmascriptRules","pass":true,"statements":[{"sl":10},{"sl":17}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [701, 912, 158, 7, 667, 4], [701, 912, 158, 7, 667, 4], [], [], [], [], [], [701, 912, 158, 7, 667, 4], [701, 912, 158, 7, 667, 4], [], []]
