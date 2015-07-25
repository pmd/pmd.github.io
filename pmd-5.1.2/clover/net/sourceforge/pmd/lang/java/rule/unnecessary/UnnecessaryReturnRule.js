var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":31,"id":20311,"methods":[{"el":21,"sc":5,"sl":15},{"el":29,"sc":5,"sl":23}],"name":"UnnecessaryReturnRule","sl":13}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_612":{"methods":[{"sl":15},{"sl":23}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":20},{"sl":24},{"sl":28}]},"test_627":{"methods":[{"sl":15}],"name":"testPmdOptions","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":20}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [627, 612], [], [627, 612], [627, 612], [], [627, 612], [], [], [612], [612], [], [], [], [612], [], [], []]
