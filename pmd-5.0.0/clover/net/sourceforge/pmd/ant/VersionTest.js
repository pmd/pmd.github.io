var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":25,"id":51879,"methods":[{"el":20,"sc":5,"sl":14},{"el":24,"sc":5,"sl":22}],"name":"VersionTest","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_40":{"methods":[{"sl":14}],"name":"testHappyPath","pass":true,"statements":[{"sl":16},{"sl":17},{"sl":18},{"sl":19}]},"test_947":{"methods":[{"sl":14}],"name":"testHappyPath","pass":true,"statements":[{"sl":16},{"sl":17},{"sl":18},{"sl":19}]},"test_979":{"methods":[{"sl":14}],"name":"testHappyPath","pass":true,"statements":[{"sl":16},{"sl":17},{"sl":18},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [947, 979, 40], [], [947, 979, 40], [947, 979, 40], [947, 979, 40], [947, 979, 40], [], [], [], [], [], []]
