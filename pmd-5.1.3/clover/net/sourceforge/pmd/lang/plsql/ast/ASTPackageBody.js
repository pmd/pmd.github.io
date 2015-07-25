var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":34,"id":23897,"methods":[{"el":13,"sc":3,"sl":11},{"el":17,"sc":3,"sl":15},{"el":23,"sc":3,"sl":21},{"el":33,"sc":3,"sl":30}],"name":"ASTPackageBody","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_139":{"methods":[{"sl":15},{"sl":21}],"name":"testWhileStmtHasCorrectTypes","pass":true,"statements":[{"sl":16},{"sl":22}]},"test_293":{"methods":[{"sl":15},{"sl":21}],"name":"testIfStmtHasCorrectTypes","pass":true,"statements":[{"sl":16},{"sl":22}]},"test_384":{"methods":[{"sl":15},{"sl":21}],"name":"testVariableOrConstantDeclaratorParentChildLinks","pass":true,"statements":[{"sl":16},{"sl":22}]},"test_449":{"methods":[{"sl":15},{"sl":21}],"name":"testSimpleCaseStmtHasCorrectTypes","pass":true,"statements":[{"sl":16},{"sl":22}]},"test_562":{"methods":[{"sl":15},{"sl":21}],"name":"testForStmtHasCorrectTypes","pass":true,"statements":[{"sl":16},{"sl":22}]},"test_704":{"methods":[{"sl":15},{"sl":21}],"name":"testExpressionParentChildLinks","pass":true,"statements":[{"sl":16},{"sl":22}]},"test_778":{"methods":[{"sl":15},{"sl":21}],"name":"testLabelledStmtHasCorrectTypes","pass":true,"statements":[{"sl":16},{"sl":22}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [139, 384, 778, 293, 562, 449, 704], [139, 384, 778, 293, 562, 449, 704], [], [], [], [], [139, 384, 778, 293, 562, 449, 704], [139, 384, 778, 293, 562, 449, 704], [], [], [], [], [], [], [], [], [], [], [], [], []]
