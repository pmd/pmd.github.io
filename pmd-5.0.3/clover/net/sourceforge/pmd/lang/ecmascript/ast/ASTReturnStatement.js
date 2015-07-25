var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":23,"id":8459,"methods":[{"el":11,"sc":5,"sl":9},{"el":18,"sc":5,"sl":16},{"el":22,"sc":5,"sl":20}],"name":"ASTReturnStatement","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_195":{"methods":[{"sl":9},{"sl":16},{"sl":20}],"name":"testEcmascript","pass":true,"statements":[{"sl":10},{"sl":17},{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [195], [195], [], [], [], [], [], [195], [195], [], [], [195], [195], [], []]
