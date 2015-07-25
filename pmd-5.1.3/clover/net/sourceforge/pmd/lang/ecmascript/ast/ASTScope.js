var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":19,"id":9010,"methods":[{"el":11,"sc":5,"sl":9},{"el":18,"sc":5,"sl":16}],"name":"ASTScope","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_130":{"methods":[{"sl":9},{"sl":16}],"name":"testMultipleCatchAndFinallyBlock","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_247":{"methods":[{"sl":9},{"sl":16}],"name":"testCatchBlockOnly","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_285":{"methods":[{"sl":9},{"sl":16}],"name":"testLineNumbersWithinEcmascriptRules","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_390":{"methods":[{"sl":9},{"sl":16}],"name":"testEcmascript","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_538":{"methods":[{"sl":9},{"sl":16}],"name":"testCatchAndFinallyBlock","pass":true,"statements":[{"sl":10},{"sl":17}]},"test_730":{"methods":[{"sl":9},{"sl":16}],"name":"testFinallyBlockOnly","pass":true,"statements":[{"sl":10},{"sl":17}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [285, 730, 390, 538, 247, 130], [285, 730, 390, 538, 247, 130], [], [], [], [], [], [285, 730, 390, 538, 247, 130], [285, 730, 390, 538, 247, 130], [], []]
