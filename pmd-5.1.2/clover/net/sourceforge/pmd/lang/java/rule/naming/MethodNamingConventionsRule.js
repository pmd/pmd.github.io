var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":18389,"methods":[{"el":22,"sc":5,"sl":11}],"name":"MethodNamingConventionsRule","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_612":{"methods":[{"sl":11}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":13},{"sl":15},{"sl":16},{"sl":18},{"sl":19},{"sl":21}]},"test_627":{"methods":[{"sl":11}],"name":"testPmdOptions","pass":true,"statements":[{"sl":13},{"sl":15},{"sl":18},{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [627, 612], [], [627, 612], [], [627, 612], [612], [], [627, 612], [612], [], [627, 612], [], [], []]
