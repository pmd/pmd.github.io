var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":9685,"methods":[{"el":8,"sc":5,"sl":6},{"el":12,"sc":5,"sl":10},{"el":20,"sc":5,"sl":18}],"name":"ASTEmptyStatement","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_458":{"methods":[{"sl":10}],"name":"testNestedClassInMethodBug","pass":true,"statements":[{"sl":11}]},"test_751":{"methods":[{"sl":10},{"sl":18}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":11},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [458, 751], [458, 751], [], [], [], [], [], [], [751], [751], [], []]
