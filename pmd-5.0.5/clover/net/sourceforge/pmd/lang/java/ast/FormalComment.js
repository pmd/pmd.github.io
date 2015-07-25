var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":9,"id":11240,"methods":[{"el":7,"sc":5,"sl":5}],"name":"FormalComment","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_12":{"methods":[{"sl":5}],"name":"testIgnoredConstructorInvocation","pass":true,"statements":[{"sl":6}]},"test_169":{"methods":[{"sl":5}],"name":"testParsersCases","pass":true,"statements":[{"sl":6}]},"test_277":{"methods":[{"sl":5}],"name":"testFilteredCommentIn","pass":true,"statements":[{"sl":6}]},"test_456":{"methods":[{"sl":5}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":6}]},"test_476":{"methods":[{"sl":5}],"name":"testInnerOuterClass","pass":true,"statements":[{"sl":6}]},"test_479":{"methods":[{"sl":5}],"name":"testDefault","pass":true,"statements":[{"sl":6}]},"test_762":{"methods":[{"sl":5}],"name":"testIgnoreComments","pass":true,"statements":[{"sl":6}]},"test_77":{"methods":[{"sl":5}],"name":"testPmdOptions","pass":true,"statements":[{"sl":6}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [456, 277, 476, 77, 762, 12, 169, 479], [456, 277, 476, 77, 762, 12, 169, 479], [], [], []]
