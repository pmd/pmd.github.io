var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":17443,"methods":[{"el":20,"sc":5,"sl":11}],"name":"MethodWithSameNameAsEnclosingClassRule","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_456":{"methods":[{"sl":11}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":13},{"sl":14},{"sl":15},{"sl":19}]},"test_77":{"methods":[{"sl":11}],"name":"testPmdOptions","pass":true,"statements":[{"sl":13},{"sl":14},{"sl":15},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [456, 77], [], [456, 77], [456, 77], [456, 77], [], [], [], [456, 77], [], []]
