var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":16,"id":2158,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13}],"name":"RuleSetWrapper","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_377":{"methods":[{"sl":9},{"sl":13}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":10},{"sl":14}]},"test_500":{"methods":[{"sl":9},{"sl":13}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":10},{"sl":14}]},"test_70":{"methods":[{"sl":9},{"sl":13}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":10},{"sl":14}]},"test_734":{"methods":[{"sl":9},{"sl":13}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":10},{"sl":14}]},"test_781":{"methods":[{"sl":9},{"sl":13}],"name":"testClasspath","pass":true,"statements":[{"sl":10},{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [500, 781, 377, 734, 70], [500, 781, 377, 734, 70], [], [], [500, 781, 377, 734, 70], [500, 781, 377, 734, 70], [], []]
