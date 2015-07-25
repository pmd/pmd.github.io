var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":10,"id":1304,"methods":[{"el":9,"sc":5,"sl":7}],"name":"RuleSetNotFoundException","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_35":{"methods":[{"sl":7}],"name":"testBug1202","pass":true,"statements":[{"sl":8}]},"test_513":{"methods":[{"sl":7}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":8}]},"test_657":{"methods":[{"sl":7}],"name":"testRuleSetNotFound","pass":true,"statements":[{"sl":8}]},"test_695":{"methods":[{"sl":7}],"name":"testXmlSchema","pass":true,"statements":[{"sl":8}]},"test_817":{"methods":[{"sl":7}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":8}]},"test_84":{"methods":[{"sl":7}],"name":"testDtd","pass":true,"statements":[{"sl":8}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [35, 817, 695, 657, 513, 84], [35, 817, 695, 657, 513, 84], [], []]
