var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":34,"id":8700,"methods":[{"el":11,"sc":5,"sl":9},{"el":19,"sc":5,"sl":16},{"el":26,"sc":5,"sl":21},{"el":33,"sc":5,"sl":28}],"name":"ASTElementGet","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_159":{"methods":[{"sl":9},{"sl":16},{"sl":21},{"sl":28}],"name":"testArrayAccess","pass":true,"statements":[{"sl":10},{"sl":18},{"sl":22},{"sl":23},{"sl":29},{"sl":30}]},"test_562":{"methods":[{"sl":9},{"sl":16}],"name":"testEcmascript","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_723":{"methods":[{"sl":9},{"sl":16},{"sl":21}],"name":"testArrayMethod","pass":true,"statements":[{"sl":10},{"sl":18},{"sl":22},{"sl":23}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [723, 159, 562], [723, 159, 562], [], [], [], [], [], [723, 159, 562], [], [723, 159, 562], [], [], [723, 159], [723, 159], [723, 159], [], [], [], [], [159], [159], [159], [], [], [], []]
