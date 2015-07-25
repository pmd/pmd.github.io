var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":10,"id":1280,"methods":[{"el":9,"sc":5,"sl":7}],"name":"RuleSetNotFoundException","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_145":{"methods":[{"sl":7}],"name":"testRuleSetNotFound","pass":true,"statements":[{"sl":8}]},"test_276":{"methods":[{"sl":7}],"name":"testXmlSchema","pass":true,"statements":[{"sl":8}]},"test_309":{"methods":[{"sl":7}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":8}]},"test_387":{"methods":[{"sl":7}],"name":"testDtd","pass":true,"statements":[{"sl":8}]},"test_752":{"methods":[{"sl":7}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":8}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [387, 309, 752, 145, 276], [387, 309, 752, 145, 276], [], []]
