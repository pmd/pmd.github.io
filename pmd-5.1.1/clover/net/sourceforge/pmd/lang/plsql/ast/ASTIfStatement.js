var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":33,"id":23310,"methods":[{"el":12,"sc":3,"sl":10},{"el":16,"sc":3,"sl":14},{"el":22,"sc":3,"sl":20},{"el":26,"sc":3,"sl":24},{"el":32,"sc":3,"sl":30}],"name":"ASTIfStatement","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_365":{"methods":[{"sl":14},{"sl":30}],"name":"testIfStmtHasCorrectTypes","pass":true,"statements":[{"sl":15},{"sl":31}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [365], [365], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [365], [365], [], [], []]
