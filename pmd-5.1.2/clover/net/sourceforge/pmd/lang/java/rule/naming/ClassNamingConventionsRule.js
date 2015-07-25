var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":17,"id":18383,"methods":[{"el":16,"sc":5,"sl":11}],"name":"ClassNamingConventionsRule","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_612":{"methods":[{"sl":11}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":12},{"sl":15}]},"test_627":{"methods":[{"sl":11}],"name":"testPmdOptions","pass":true,"statements":[{"sl":12},{"sl":15}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [627, 612], [627, 612], [], [], [627, 612], [], []]
