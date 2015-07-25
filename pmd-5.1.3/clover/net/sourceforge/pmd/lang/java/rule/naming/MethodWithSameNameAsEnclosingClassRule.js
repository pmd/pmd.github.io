var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":18529,"methods":[{"el":23,"sc":5,"sl":14}],"name":"MethodWithSameNameAsEnclosingClassRule","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_338":{"methods":[{"sl":14}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":16},{"sl":17},{"sl":18},{"sl":22}]},"test_445":{"methods":[{"sl":14}],"name":"testPmdOptions","pass":true,"statements":[{"sl":16},{"sl":17},{"sl":18},{"sl":22}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [338, 445], [], [338, 445], [338, 445], [338, 445], [], [], [], [338, 445], [], []]
