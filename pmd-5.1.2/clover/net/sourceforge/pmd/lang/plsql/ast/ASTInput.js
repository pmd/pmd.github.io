var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":25,"id":23543,"methods":[{"el":14,"sc":3,"sl":12},{"el":18,"sc":3,"sl":16},{"el":24,"sc":3,"sl":22}],"name":"ASTInput","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_119":{"methods":[{"sl":16}],"name":"testBOM","pass":true,"statements":[{"sl":17}]},"test_225":{"methods":[{"sl":16},{"sl":22}],"name":"testForStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_31":{"methods":[{"sl":16},{"sl":22}],"name":"testExpressionParentChildLinks","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_359":{"methods":[{"sl":16},{"sl":22}],"name":"testLabelledStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_473":{"methods":[{"sl":16},{"sl":22}],"name":"testIfStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_494":{"methods":[{"sl":16},{"sl":22}],"name":"testVariableOrConstantDeclaratorParentChildLinks","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_851":{"methods":[{"sl":16}],"name":"testExceptions","pass":true,"statements":[{"sl":17}]},"test_868":{"methods":[{"sl":16},{"sl":22}],"name":"testSimpleCaseStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_874":{"methods":[{"sl":16},{"sl":22}],"name":"testWhileStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [359, 225, 119, 494, 868, 473, 31, 874, 851], [359, 225, 119, 494, 868, 473, 31, 874, 851], [], [], [], [], [359, 225, 494, 868, 473, 31, 874], [359, 225, 494, 868, 473, 31, 874], [], [], []]
