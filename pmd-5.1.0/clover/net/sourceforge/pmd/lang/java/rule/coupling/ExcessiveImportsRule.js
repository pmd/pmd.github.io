var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":37,"id":14822,"methods":[{"el":25,"sc":5,"sl":22},{"el":36,"sc":5,"sl":34}],"name":"ExcessiveImportsRule","sl":20}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_309":{"methods":[{"sl":22}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":23},{"sl":24}]},"test_398":{"methods":[{"sl":22},{"sl":34}],"name":"testPmdOptions","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":35}]},"test_752":{"methods":[{"sl":22}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":23},{"sl":24}]},"test_902":{"methods":[{"sl":22},{"sl":34}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":35}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [309, 752, 902, 398], [309, 752, 902, 398], [309, 752, 902, 398], [], [], [], [], [], [], [], [], [], [902, 398], [902, 398], [], []]
