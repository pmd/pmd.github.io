var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":10510,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":19,"sc":5,"sl":17}],"name":"ASTLabeledStatement","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_263":{"methods":[{"sl":13},{"sl":17}],"name":"testLabelledBreakLockup","pass":true,"statements":[{"sl":14},{"sl":18}]},"test_398":{"methods":[{"sl":13},{"sl":17}],"name":"testPmdOptions","pass":true,"statements":[{"sl":14},{"sl":18}]},"test_902":{"methods":[{"sl":13},{"sl":17}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":14},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [263, 902, 398], [263, 902, 398], [], [], [263, 902, 398], [263, 902, 398], [], [], []]
