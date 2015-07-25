var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":16,"id":2205,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13}],"name":"RuleSetWrapper","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_100":{"methods":[{"sl":9},{"sl":13}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":10},{"sl":14}]},"test_441":{"methods":[{"sl":9},{"sl":13}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":10},{"sl":14}]},"test_662":{"methods":[{"sl":9},{"sl":13}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":10},{"sl":14}]},"test_767":{"methods":[{"sl":9},{"sl":13}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":10},{"sl":14}]},"test_91":{"methods":[{"sl":9},{"sl":13}],"name":"testClasspath","pass":true,"statements":[{"sl":10},{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [91, 441, 100, 662, 767], [91, 441, 100, 662, 767], [], [], [91, 441, 100, 662, 767], [91, 441, 100, 662, 767], [], []]
