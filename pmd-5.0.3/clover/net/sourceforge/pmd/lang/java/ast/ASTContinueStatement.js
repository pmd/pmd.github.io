var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":9696,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTContinueStatement","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_271":{"methods":[{"sl":10},{"sl":18}],"name":"test_30","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_708":{"methods":[{"sl":10},{"sl":18}],"name":"testPmdOptions","pass":true,"statements":[{"sl":11},{"sl":19}]},"test_747":{"methods":[{"sl":10},{"sl":18}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [708, 271, 747], [708, 271, 747], [], [], [], [], [], [], [708, 271, 747], [708, 271, 747], [], []]
