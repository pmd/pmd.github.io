var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":37297,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTCommentTag","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1740":{"methods":[{"sl":10}],"name":"testComment","pass":true,"statements":[{"sl":11}]},"test_1997":{"methods":[{"sl":10}],"name":"testComment","pass":true,"statements":[{"sl":11}]},"test_884":{"methods":[{"sl":10}],"name":"testComment","pass":true,"statements":[{"sl":11}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [884, 1740, 1997], [884, 1740, 1997], [], [], [], [], [], [], [], [], [], []]
