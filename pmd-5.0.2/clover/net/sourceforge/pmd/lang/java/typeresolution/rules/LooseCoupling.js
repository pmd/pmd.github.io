var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":30,"id":20806,"methods":[{"el":29,"sc":5,"sl":19}],"name":"LooseCoupling","sl":17}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_369":{"methods":[{"sl":19}],"name":"testPmdOptions","pass":true,"statements":[{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":28}]},"test_751":{"methods":[{"sl":19}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":26},{"sl":28}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [751, 369], [], [751, 369], [751, 369], [751, 369], [751, 369], [], [751], [], [751, 369], [], []]
