var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":9,"id":11476,"methods":[{"el":7,"sc":5,"sl":5}],"name":"SingleLineComment","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":5}],"name":"testCommentsIgnored","pass":true,"statements":[{"sl":6}]},"test_12":{"methods":[{"sl":5}],"name":"testIgnoredConstructorInvocation","pass":true,"statements":[{"sl":6}]},"test_169":{"methods":[{"sl":5}],"name":"testParsersCases","pass":true,"statements":[{"sl":6}]},"test_246":{"methods":[{"sl":5}],"name":"testAnnotationSucceedsWithJDK15","pass":true,"statements":[{"sl":6}]},"test_274":{"methods":[{"sl":5}],"name":"testAcceptance","pass":true,"statements":[{"sl":6}]},"test_431":{"methods":[{"sl":5}],"name":"testExclusionsInReportWithNOPMD","pass":true,"statements":[{"sl":6}]},"test_456":{"methods":[{"sl":5}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":6}]},"test_479":{"methods":[{"sl":5}],"name":"testDefault","pass":true,"statements":[{"sl":6}]},"test_496":{"methods":[{"sl":5}],"name":"testAlternateMarker","pass":true,"statements":[{"sl":6}]},"test_575":{"methods":[{"sl":5}],"name":"testAnnotationSucceedsWithDefaultMode","pass":true,"statements":[{"sl":6}]},"test_77":{"methods":[{"sl":5}],"name":"testPmdOptions","pass":true,"statements":[{"sl":6}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [274, 456, 246, 431, 496, 77, 575, 12, 169, 1, 479], [274, 456, 246, 431, 496, 77, 575, 12, 169, 1, 479], [], [], []]
