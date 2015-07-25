var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":19,"id":8827,"methods":[{"el":11,"sc":5,"sl":9},{"el":18,"sc":5,"sl":16}],"name":"ASTInfixExpression","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_379":{"methods":[{"sl":9},{"sl":16}],"name":"testMultipleCatchAndFinallyBlock","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_387":{"methods":[{"sl":9},{"sl":16}],"name":"testVoidKeyword","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_561":{"methods":[{"sl":9},{"sl":16}],"name":"testEcmascript","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_943":{"methods":[{"sl":9},{"sl":16}],"name":"testGetBodyFunctionClosureExpression","pass":true,"statements":[{"sl":10},{"sl":17}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [379, 387, 943, 561], [379, 387, 943, 561], [], [], [], [], [], [379, 387, 943, 561], [379, 387, 943, 561], [], []]
