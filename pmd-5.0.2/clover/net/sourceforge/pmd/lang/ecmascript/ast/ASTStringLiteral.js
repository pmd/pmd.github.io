var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":32,"id":8440,"methods":[{"el":12,"sc":5,"sl":9},{"el":19,"sc":5,"sl":17},{"el":23,"sc":5,"sl":21},{"el":27,"sc":5,"sl":25},{"el":31,"sc":5,"sl":29}],"name":"ASTStringLiteral","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_107":{"methods":[{"sl":9},{"sl":17}],"name":"testLineNumbers","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":18}]},"test_720":{"methods":[{"sl":9},{"sl":17}],"name":"testEcmascript","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [720, 107], [720, 107], [720, 107], [], [], [], [], [], [720, 107], [720, 107], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
