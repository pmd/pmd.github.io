var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":15,"id":7257,"methods":[{"el":14,"sc":5,"sl":12}],"name":"IdGenerator","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_3":{"methods":[{"sl":12}],"name":"testImageOfPrimarySuffix","pass":true,"statements":[{"sl":13}]},"test_509":{"methods":[{"sl":12}],"name":"testXPathRule1Compatibility","pass":true,"statements":[{"sl":13}]},"test_612":{"methods":[{"sl":12}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":13}]},"test_627":{"methods":[{"sl":12}],"name":"testPmdOptions","pass":true,"statements":[{"sl":13}]},"test_783":{"methods":[{"sl":12}],"name":"testXPathRule2","pass":true,"statements":[{"sl":13}]},"test_862":{"methods":[{"sl":12}],"name":"testFollowingSibling","pass":true,"statements":[{"sl":13}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [509, 862, 783, 627, 3, 612], [509, 862, 783, 627, 3, 612], [], []]
