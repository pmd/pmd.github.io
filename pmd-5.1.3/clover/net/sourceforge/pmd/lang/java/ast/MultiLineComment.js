var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":12,"id":12097,"methods":[{"el":10,"sc":5,"sl":8}],"name":"MultiLineComment","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_100":{"methods":[{"sl":8}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":9}]},"test_28":{"methods":[{"sl":8}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":9}]},"test_338":{"methods":[{"sl":8}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":9}]},"test_36":{"methods":[{"sl":8}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":9}]},"test_429":{"methods":[{"sl":8}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":9}]},"test_441":{"methods":[{"sl":8}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":9}]},"test_594":{"methods":[{"sl":8}],"name":"testAbstractNames","pass":true,"statements":[{"sl":9}]},"test_659":{"methods":[{"sl":8}],"name":"testParsersCases","pass":true,"statements":[{"sl":9}]},"test_662":{"methods":[{"sl":8}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":9}]},"test_713":{"methods":[{"sl":8}],"name":"testExplicitRuleInRuleSet","pass":true,"statements":[{"sl":9}]},"test_724":{"methods":[{"sl":8}],"name":"testFilteredCommentIn","pass":true,"statements":[{"sl":9}]},"test_767":{"methods":[{"sl":8}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":9}]},"test_887":{"methods":[{"sl":8}],"name":"testBasic","pass":true,"statements":[{"sl":9}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [659, 36, 441, 594, 713, 724, 338, 887, 100, 28, 662, 429, 767], [659, 36, 441, 594, 713, 724, 338, 887, 100, 28, 662, 429, 767], [], [], []]
