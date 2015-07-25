var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":28,"id":33912,"methods":[{"el":15,"sc":2,"sl":13},{"el":19,"sc":2,"sl":17},{"el":23,"sc":2,"sl":21},{"el":27,"sc":2,"sl":25}],"name":"NotFilter","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_122":{"methods":[{"sl":17}],"name":"testFieldLevelSuppression","pass":true,"statements":[{"sl":18}]},"test_136":{"methods":[{"sl":17},{"sl":21}],"name":"usingDebug","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_149":{"methods":[{"sl":17}],"name":"testConstructorLevelSuppression","pass":true,"statements":[{"sl":18}]},"test_151":{"methods":[{"sl":17}],"name":"testAll","pass":true,"statements":[{"sl":18}]},"test_172":{"methods":[{"sl":17}],"name":"testReturnValueComplexity","pass":true,"statements":[{"sl":18}]},"test_189":{"methods":[{"sl":17}],"name":"testNastyComplicatedMethod","pass":true,"statements":[{"sl":18}]},"test_202":{"methods":[{"sl":17}],"name":"testRemainingTestCases","pass":true,"statements":[{"sl":18}]},"test_21":{"methods":[{"sl":17}],"name":"testLocalVariableLevelSuppression","pass":true,"statements":[{"sl":18}]},"test_229":{"methods":[{"sl":17}],"name":"testSuppressAll","pass":true,"statements":[{"sl":18}]},"test_241":{"methods":[{"sl":17}],"name":"testLessComplicatedThanReportLevel","pass":true,"statements":[{"sl":18}]},"test_27":{"methods":[{"sl":17}],"name":"testExclusionsInReportWithNOPMDEcmascript","pass":true,"statements":[{"sl":18}]},"test_285":{"methods":[{"sl":17},{"sl":21}],"name":"useEcmaScript","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_29":{"methods":[{"sl":17}],"name":"testSpecificSuppressionMulitpleValues1","pass":true,"statements":[{"sl":18}]},"test_290":{"methods":[{"sl":17},{"sl":21}],"name":"minimalArgs","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_292":{"methods":[{"sl":17}],"name":"testPluginname","pass":true,"statements":[{"sl":18}]},"test_3":{"methods":[{"sl":17}],"name":"testParameterLevelSuppression","pass":true,"statements":[{"sl":18}]},"test_305":{"methods":[{"sl":17}],"name":"testSpecificSuppressionValue2","pass":true,"statements":[{"sl":18}]},"test_306":{"methods":[{"sl":17}],"name":"testOneMethod","pass":true,"statements":[{"sl":18}]},"test_315":{"methods":[{"sl":17},{"sl":21}],"name":"testAbstractNames","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_345":{"methods":[{"sl":17},{"sl":21}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_347":{"methods":[{"sl":17}],"name":"testNoSuppressionBlank","pass":true,"statements":[{"sl":18}]},"test_351":{"methods":[{"sl":17}],"name":"testAcceptance","pass":true,"statements":[{"sl":18}]},"test_393":{"methods":[{"sl":17},{"sl":21}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_394":{"methods":[{"sl":17}],"name":"testSpecificSuppressionAtTopLevel","pass":true,"statements":[{"sl":18}]},"test_395":{"methods":[{"sl":17},{"sl":21}],"name":"runXPath","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_397":{"methods":[{"sl":17}],"name":"testSpecificSuppression","pass":true,"statements":[{"sl":18}]},"test_398":{"methods":[{"sl":17},{"sl":21}],"name":"testPmdOptions","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_4":{"methods":[{"sl":17},{"sl":21}],"name":"testEcmascript","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_421":{"methods":[{"sl":17},{"sl":21}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_433":{"methods":[{"sl":17}],"name":"testViolationMessage","pass":true,"statements":[{"sl":18}]},"test_442":{"methods":[{"sl":17},{"sl":21}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_468":{"methods":[{"sl":17}],"name":"testMethodLevelSuppression","pass":true,"statements":[{"sl":18}]},"test_485":{"methods":[{"sl":17},{"sl":21}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_495":{"methods":[{"sl":17}],"name":"testExclusionsInReportWithRuleViolationSuppressRegex","pass":true,"statements":[{"sl":18}]},"test_502":{"methods":[{"sl":17},{"sl":21}],"name":"testXML","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_506":{"methods":[{"sl":17}],"name":"testExpressionMatching","pass":true,"statements":[{"sl":18}]},"test_507":{"methods":[{"sl":17}],"name":"testSpecificSuppressionValue3","pass":true,"statements":[{"sl":18}]},"test_514":{"methods":[{"sl":17},{"sl":21}],"name":"testIncludeExcludeMultipleRuleSetWithRuleChainApplies","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_527":{"methods":[{"sl":17},{"sl":21}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_55":{"methods":[{"sl":17}],"name":"testBasic","pass":true,"statements":[{"sl":18}]},"test_596":{"methods":[{"sl":17}],"name":"testConstructor","pass":true,"statements":[{"sl":18}]},"test_631":{"methods":[{"sl":17}],"name":"testClassLevelSuppression","pass":true,"statements":[{"sl":18}]},"test_642":{"methods":[{"sl":17}],"name":"testInheritedSuppression","pass":true,"statements":[{"sl":18}]},"test_643":{"methods":[{"sl":17}],"name":"testTwoFiles","pass":true,"statements":[{"sl":18}]},"test_661":{"methods":[{"sl":17},{"sl":21}],"name":"testExplicitRuleInRuleSet","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_68":{"methods":[{"sl":17}],"name":"testExclusionsInReportWithAnnotationsFullName","pass":true,"statements":[{"sl":18}]},"test_694":{"methods":[{"sl":17}],"name":"testDoubleReport","pass":true,"statements":[{"sl":18}]},"test_698":{"methods":[{"sl":17},{"sl":21}],"name":"changeJavaVersion","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_708":{"methods":[{"sl":17}],"name":"testNoSuppressionSomethingElseS","pass":true,"statements":[{"sl":18}]},"test_730":{"methods":[{"sl":17}],"name":"testSimple","pass":true,"statements":[{"sl":18}]},"test_757":{"methods":[{"sl":17}],"name":"testExclusionsInReportWithRuleViolationSuppressXPath","pass":true,"statements":[{"sl":18}]},"test_767":{"methods":[{"sl":17}],"name":"testExclusionsInReportWithAnnotations","pass":true,"statements":[{"sl":18}]},"test_777":{"methods":[{"sl":17}],"name":"testSpecificSuppressionValue1","pass":true,"statements":[{"sl":18}]},"test_801":{"methods":[{"sl":17}],"name":"testSpecificSuppressionMulitpleValues2","pass":true,"statements":[{"sl":18}]},"test_817":{"methods":[{"sl":17}],"name":"testSingleReport","pass":true,"statements":[{"sl":18}]},"test_831":{"methods":[{"sl":17},{"sl":21}],"name":"testIncludeExcludeApplies","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_838":{"methods":[{"sl":17}],"name":"testExclusionsInReportWithNOPMD","pass":true,"statements":[{"sl":18}]},"test_862":{"methods":[{"sl":17},{"sl":21}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":18},{"sl":22}]},"test_898":{"methods":[{"sl":17}],"name":"testVariables","pass":true,"statements":[{"sl":18}]},"test_899":{"methods":[{"sl":17}],"name":"testAlternateMarker","pass":true,"statements":[{"sl":18}]},"test_902":{"methods":[{"sl":17},{"sl":21}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":18},{"sl":22}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [631, 801, 347, 468, 305, 394, 433, 899, 149, 4, 315, 485, 643, 757, 442, 55, 694, 397, 68, 817, 29, 136, 495, 398, 831, 777, 730, 172, 151, 527, 345, 421, 27, 122, 767, 642, 506, 202, 351, 838, 393, 241, 3, 902, 502, 514, 306, 898, 395, 708, 290, 661, 507, 862, 21, 596, 189, 698, 285, 229, 292], [631, 801, 347, 468, 305, 394, 433, 899, 149, 4, 315, 485, 643, 757, 442, 55, 694, 397, 68, 817, 29, 136, 495, 398, 831, 777, 730, 172, 151, 527, 345, 421, 27, 122, 767, 642, 506, 202, 351, 838, 393, 241, 3, 902, 502, 514, 306, 898, 395, 708, 290, 661, 507, 862, 21, 596, 189, 698, 285, 229, 292], [], [], [4, 315, 485, 442, 136, 398, 831, 527, 345, 421, 393, 902, 502, 514, 395, 290, 661, 862, 698, 285], [4, 315, 485, 442, 136, 398, 831, 527, 345, 421, 393, 902, 502, 514, 395, 290, 661, 862, 698, 285], [], [], [], [], [], []]
