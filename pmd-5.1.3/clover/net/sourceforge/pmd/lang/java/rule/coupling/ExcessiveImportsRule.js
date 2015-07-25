var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":37,"id":15016,"methods":[{"el":25,"sc":5,"sl":22},{"el":36,"sc":5,"sl":34}],"name":"ExcessiveImportsRule","sl":20}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_338":{"methods":[{"sl":22},{"sl":34}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":35}]},"test_445":{"methods":[{"sl":22},{"sl":34}],"name":"testPmdOptions","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":35}]},"test_76":{"methods":[{"sl":22}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":23},{"sl":24}]},"test_864":{"methods":[{"sl":22}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":23},{"sl":24}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [76, 864, 338, 445], [76, 864, 338, 445], [76, 864, 338, 445], [], [], [], [], [], [], [], [], [], [338, 445], [338, 445], [], []]
