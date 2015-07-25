var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":35,"id":23570,"methods":[{"el":14,"sc":3,"sl":12},{"el":18,"sc":3,"sl":16},{"el":24,"sc":3,"sl":22},{"el":30,"sc":3,"sl":28},{"el":34,"sc":3,"sl":32}],"name":"ASTName","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_119":{"methods":[{"sl":16}],"name":"testBOM","pass":true,"statements":[{"sl":17}]},"test_31":{"methods":[{"sl":16},{"sl":22}],"name":"testExpressionParentChildLinks","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_473":{"methods":[{"sl":16},{"sl":22}],"name":"testIfStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]},"test_851":{"methods":[{"sl":16}],"name":"testExceptions","pass":true,"statements":[{"sl":17}]},"test_874":{"methods":[{"sl":16},{"sl":22}],"name":"testWhileStmtHasCorrectTypes","pass":true,"statements":[{"sl":17},{"sl":23}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [119, 473, 31, 874, 851], [119, 473, 31, 874, 851], [], [], [], [], [473, 31, 874], [473, 31, 874], [], [], [], [], [], [], [], [], [], [], [], [], []]
