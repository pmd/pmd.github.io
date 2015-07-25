var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":38,"id":17451,"methods":[{"el":36,"sc":5,"sl":12}],"name":"SuspiciousHashcodeMethodNameRule","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_456":{"methods":[{"sl":12}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":25},{"sl":26},{"sl":35}]},"test_77":{"methods":[{"sl":12}],"name":"testPmdOptions","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":25},{"sl":26},{"sl":35}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [456, 77], [], [], [], [], [], [], [], [], [], [], [456, 77], [456, 77], [456, 77], [456, 77], [], [], [], [], [], [], [], [], [456, 77], [], [], []]
