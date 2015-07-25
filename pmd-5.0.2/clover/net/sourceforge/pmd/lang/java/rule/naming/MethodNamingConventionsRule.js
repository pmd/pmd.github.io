var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":17072,"methods":[{"el":22,"sc":5,"sl":11}],"name":"MethodNamingConventionsRule","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_369":{"methods":[{"sl":11}],"name":"testPmdOptions","pass":true,"statements":[{"sl":13},{"sl":15},{"sl":18},{"sl":21}]},"test_751":{"methods":[{"sl":11}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":13},{"sl":15},{"sl":18},{"sl":19},{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [751, 369], [], [751, 369], [], [751, 369], [], [], [751, 369], [751], [], [751, 369], [], [], []]
