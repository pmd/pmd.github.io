var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":19,"id":8805,"methods":[{"el":11,"sc":5,"sl":9},{"el":18,"sc":5,"sl":16}],"name":"ASTInfixExpression","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_177":{"methods":[{"sl":9},{"sl":16}],"name":"testVoidKeyword","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_395":{"methods":[{"sl":9},{"sl":16}],"name":"testGetBodyFunctionClosureExpression","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_562":{"methods":[{"sl":9},{"sl":16}],"name":"testEcmascript","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_82":{"methods":[{"sl":9},{"sl":16}],"name":"testMultipleCatchAndFinallyBlock","pass":true,"statements":[{"sl":10},{"sl":17}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [82, 395, 177, 562], [82, 395, 177, 562], [], [], [], [], [], [82, 395, 177, 562], [82, 395, 177, 562], [], []]
