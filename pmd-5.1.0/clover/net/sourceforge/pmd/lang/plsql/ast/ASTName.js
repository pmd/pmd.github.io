var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":35,"id":23171,"methods":[{"el":14,"sc":3,"sl":12},{"el":18,"sc":3,"sl":16},{"el":24,"sc":3,"sl":22},{"el":30,"sc":3,"sl":28},{"el":34,"sc":3,"sl":32}],"name":"ASTName","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_273":{"methods":[{"sl":16},{"sl":22}],"name":"testExpressionParentChildLinks","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_494":{"methods":[{"sl":16}],"name":"testExceptions","pass":true,"statements":[{"sl":17}]},"test_540":{"methods":[{"sl":16},{"sl":22}],"name":"testWhileStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_707":{"methods":[{"sl":16},{"sl":22}],"name":"testIfStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [540, 273, 707, 494], [540, 273, 707, 494], [], [], [], [], [540, 273, 707], [540, 273, 707], [], [], [], [], [], [], [], [], [], [], [], [], []]
