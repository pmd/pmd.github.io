var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":8897,"methods":[{"el":12,"sc":5,"sl":9},{"el":19,"sc":5,"sl":17}],"name":"ASTPropertyGet","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_4":{"methods":[{"sl":9},{"sl":17}],"name":"testEcmascript","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":18}]},"test_629":{"methods":[{"sl":9},{"sl":17}],"name":"testArrayMethod","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":18}]},"test_711":{"methods":[{"sl":9},{"sl":17}],"name":"testCaseAsIdentifier","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [711, 629, 4], [711, 629, 4], [711, 629, 4], [], [], [], [], [], [711, 629, 4], [711, 629, 4], [], []]
