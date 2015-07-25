var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":37,"id":14912,"methods":[{"el":25,"sc":5,"sl":22},{"el":36,"sc":5,"sl":34}],"name":"ExcessiveImportsRule","sl":20}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_513":{"methods":[{"sl":22}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":23},{"sl":24}]},"test_612":{"methods":[{"sl":22},{"sl":34}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":35}]},"test_627":{"methods":[{"sl":22},{"sl":34}],"name":"testPmdOptions","pass":true,"statements":[{"sl":23},{"sl":24},{"sl":35}]},"test_817":{"methods":[{"sl":22}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":23},{"sl":24}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [817, 627, 612, 513], [817, 627, 612, 513], [817, 627, 612, 513], [], [], [], [], [], [], [], [], [], [627, 612], [627, 612], [], []]
