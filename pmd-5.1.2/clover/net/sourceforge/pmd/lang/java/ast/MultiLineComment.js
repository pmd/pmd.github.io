var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":12,"id":12006,"methods":[{"el":10,"sc":5,"sl":8}],"name":"MultiLineComment","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":8}],"name":"testExplicitRuleInRuleSet","pass":true,"statements":[{"sl":9}]},"test_146":{"methods":[{"sl":8}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":9}]},"test_271":{"methods":[{"sl":8}],"name":"testParsersCases","pass":true,"statements":[{"sl":9}]},"test_496":{"methods":[{"sl":8}],"name":"testAbstractNames","pass":true,"statements":[{"sl":9}]},"test_508":{"methods":[{"sl":8}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":9}]},"test_520":{"methods":[{"sl":8}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":9}]},"test_556":{"methods":[{"sl":8}],"name":"testBasic","pass":true,"statements":[{"sl":9}]},"test_570":{"methods":[{"sl":8}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":9}]},"test_610":{"methods":[{"sl":8}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":9}]},"test_612":{"methods":[{"sl":8}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":9}]},"test_70":{"methods":[{"sl":8}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":9}]},"test_702":{"methods":[{"sl":8}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":9}]},"test_832":{"methods":[{"sl":8}],"name":"testFilteredCommentIn","pass":true,"statements":[{"sl":9}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [556, 271, 520, 610, 832, 702, 508, 496, 612, 10, 570, 146, 70], [556, 271, 520, 610, 832, 702, 508, 496, 612, 10, 570, 146, 70], [], [], []]
