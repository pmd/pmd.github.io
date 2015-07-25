var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":12,"id":11943,"methods":[{"el":10,"sc":5,"sl":8}],"name":"MultiLineComment","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_26":{"methods":[{"sl":8}],"name":"testParsersCases","pass":true,"statements":[{"sl":9}]},"test_315":{"methods":[{"sl":8}],"name":"testAbstractNames","pass":true,"statements":[{"sl":9}]},"test_345":{"methods":[{"sl":8}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":9}]},"test_393":{"methods":[{"sl":8}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":9}]},"test_421":{"methods":[{"sl":8}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":9}]},"test_442":{"methods":[{"sl":8}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":9}]},"test_485":{"methods":[{"sl":8}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":9}]},"test_527":{"methods":[{"sl":8}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":9}]},"test_59":{"methods":[{"sl":8}],"name":"testBasic","pass":true,"statements":[{"sl":9}]},"test_632":{"methods":[{"sl":8}],"name":"testFilteredCommentIn","pass":true,"statements":[{"sl":9}]},"test_661":{"methods":[{"sl":8}],"name":"testExplicitRuleInRuleSet","pass":true,"statements":[{"sl":9}]},"test_862":{"methods":[{"sl":8}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":9}]},"test_902":{"methods":[{"sl":8}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":9}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [527, 345, 485, 421, 26, 661, 59, 442, 862, 393, 632, 902, 315], [527, 345, 485, 421, 26, 661, 59, 442, 862, 393, 632, 902, 315], [], [], []]
