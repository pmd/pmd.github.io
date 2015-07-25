var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":8952,"methods":[{"el":12,"sc":5,"sl":9},{"el":19,"sc":5,"sl":17}],"name":"ASTPropertyGet","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_303":{"methods":[{"sl":9},{"sl":17}],"name":"testCaseAsIdentifier","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":18}]},"test_387":{"methods":[{"sl":9},{"sl":17}],"name":"testVoidKeyword","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":18}]},"test_561":{"methods":[{"sl":9},{"sl":17}],"name":"testEcmascript","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":18}]},"test_885":{"methods":[{"sl":9},{"sl":17}],"name":"testArrayMethod","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [387, 303, 885, 561], [387, 303, 885, 561], [387, 303, 885, 561], [], [], [], [], [], [387, 303, 885, 561], [387, 303, 885, 561], [], []]
