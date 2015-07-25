var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":38,"id":13789,"methods":[{"el":29,"sc":5,"sl":24},{"el":33,"sc":5,"sl":31},{"el":37,"sc":5,"sl":35}],"name":"DaaRuleViolation","sl":19}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_708":{"methods":[{"sl":24},{"sl":31},{"sl":35}],"name":"testPmdOptions","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":32},{"sl":36}]},"test_747":{"methods":[{"sl":24},{"sl":31},{"sl":35}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":32},{"sl":36}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [708, 747], [708, 747], [708, 747], [708, 747], [708, 747], [], [], [708, 747], [708, 747], [], [], [708, 747], [708, 747], [], []]
