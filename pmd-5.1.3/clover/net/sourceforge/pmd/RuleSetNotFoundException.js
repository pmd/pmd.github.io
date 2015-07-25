var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":10,"id":1313,"methods":[{"el":9,"sc":5,"sl":7}],"name":"RuleSetNotFoundException","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_410":{"methods":[{"sl":7}],"name":"testWrongRulesetWithRulename","pass":true,"statements":[{"sl":8}]},"test_420":{"methods":[{"sl":7}],"name":"testWrongRuleset","pass":true,"statements":[{"sl":8}]},"test_550":{"methods":[{"sl":7}],"name":"testBug1202","pass":true,"statements":[{"sl":8}]},"test_668":{"methods":[{"sl":7}],"name":"testXmlSchema","pass":true,"statements":[{"sl":8}]},"test_669":{"methods":[{"sl":7}],"name":"testRuleSetNotFound","pass":true,"statements":[{"sl":8}]},"test_76":{"methods":[{"sl":7}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":8}]},"test_833":{"methods":[{"sl":7}],"name":"testDtd","pass":true,"statements":[{"sl":8}]},"test_864":{"methods":[{"sl":7}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":8}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [668, 550, 669, 76, 410, 833, 864, 420], [668, 550, 669, 76, 410, 833, 864, 420], [], []]
