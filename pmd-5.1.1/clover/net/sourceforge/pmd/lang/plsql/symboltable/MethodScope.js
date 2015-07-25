var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":70,"id":25771,"methods":[{"el":22,"sc":5,"sl":20},{"el":26,"sc":5,"sl":24},{"el":30,"sc":5,"sl":28},{"el":44,"sc":5,"sl":32},{"el":52,"sc":5,"sl":46},{"el":61,"sc":5,"sl":54},{"el":65,"sc":5,"sl":63},{"el":69,"sc":5,"sl":67}],"name":"MethodScope","sl":16}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_153":{"methods":[{"sl":20}],"name":"testExpressionParentChildLinks","pass":true,"statements":[{"sl":21}]},"test_194":{"methods":[{"sl":20}],"name":"testLabelledStmtHasCorrectTypes","pass":true,"statements":[{"sl":21}]},"test_333":{"methods":[{"sl":20}],"name":"testWhileStmtHasCorrectTypes","pass":true,"statements":[{"sl":21}]},"test_365":{"methods":[{"sl":20}],"name":"testIfStmtHasCorrectTypes","pass":true,"statements":[{"sl":21}]},"test_627":{"methods":[{"sl":20}],"name":"testSimpleCaseStmtHasCorrectTypes","pass":true,"statements":[{"sl":21}]},"test_633":{"methods":[{"sl":20},{"sl":46}],"name":"testVariableOrConstantDeclaratorParentChildLinks","pass":true,"statements":[{"sl":21},{"sl":48},{"sl":51}]},"test_822":{"methods":[{"sl":20}],"name":"testForStmtHasCorrectTypes","pass":true,"statements":[{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [153, 633, 333, 627, 365, 194, 822], [153, 633, 333, 627, 365, 194, 822], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [633], [], [633], [], [], [633], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
