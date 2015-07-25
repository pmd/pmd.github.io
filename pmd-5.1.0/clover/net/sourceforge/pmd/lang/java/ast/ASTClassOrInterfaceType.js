var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":10127,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":23,"sc":5,"sl":21}],"name":"ASTClassOrInterfaceType","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_111":{"methods":[{"sl":13}],"name":"testVariousParserBugs","pass":true,"statements":[{"sl":14}]},"test_114":{"methods":[{"sl":13}],"name":"testVarargsShouldFailWith14","pass":true,"statements":[{"sl":14}]},"test_121":{"methods":[{"sl":13}],"name":"testAnnotationFailsWithJDK14","pass":true,"statements":[{"sl":14}]},"test_129":{"methods":[{"sl":13}],"name":"testGetFirstASTNameImageNull","pass":true,"statements":[{"sl":14}]},"test_131":{"methods":[{"sl":13}],"name":"testLambdaWithType","pass":true,"statements":[{"sl":14}]},"test_151":{"methods":[{"sl":13},{"sl":21}],"name":"testAll","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_160":{"methods":[{"sl":13}],"name":"testGenericReturnType","pass":true,"statements":[{"sl":14}]},"test_162":{"methods":[{"sl":13},{"sl":21}],"name":"testUnaryNumericPromotion","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_176":{"methods":[{"sl":13},{"sl":21}],"name":"testEnumAnonymousInnerClass","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_180":{"methods":[{"sl":13},{"sl":21}],"name":"testLineNumbersAreSetOnAllSiblings","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_2":{"methods":[{"sl":13},{"sl":21}],"name":"testUnaryNumericOperators","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_217":{"methods":[{"sl":13},{"sl":21}],"name":"testDemo","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_24":{"methods":[{"sl":13},{"sl":21}],"name":"testTwoParamsVararg","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_252":{"methods":[{"sl":13},{"sl":21}],"name":"testRefTypeImage","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_256":{"methods":[{"sl":13}],"name":"testVarargsShouldPassWith15","pass":true,"statements":[{"sl":14}]},"test_26":{"methods":[{"sl":13}],"name":"testParsersCases","pass":true,"statements":[{"sl":14}]},"test_260":{"methods":[{"sl":13},{"sl":21}],"name":"testAnonymousInnerClass","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_281":{"methods":[{"sl":13},{"sl":21}],"name":"testAssignmentOperators","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_310":{"methods":[{"sl":13},{"sl":21}],"name":"testContainsNoInnerWithAnonInner","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_315":{"methods":[{"sl":13},{"sl":21}],"name":"testAbstractNames","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_321":{"methods":[{"sl":13},{"sl":21}],"name":"testEnum","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_325":{"methods":[{"sl":13},{"sl":21}],"name":"testAnnotations","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_33":{"methods":[{"sl":13}],"name":"testTryWithResourcesWithAnnotations","pass":true,"statements":[{"sl":14}]},"test_345":{"methods":[{"sl":13},{"sl":21}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_346":{"methods":[{"sl":13},{"sl":21}],"name":"testAnnotationSucceedsWithJDK15","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_349":{"methods":[{"sl":13}],"name":"testLambdaWithoutType","pass":true,"statements":[{"sl":14}]},"test_354":{"methods":[{"sl":13},{"sl":21}],"name":"testGetFirstASTNameImageNew","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_36":{"methods":[{"sl":13},{"sl":21}],"name":"testUserData","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_360":{"methods":[{"sl":13},{"sl":21}],"name":"testHasExplicitImplements","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_361":{"methods":[{"sl":13}],"name":"testTryWithResourcesMulti","pass":true,"statements":[{"sl":14}]},"test_362":{"methods":[{"sl":13},{"sl":21}],"name":"testEq","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_378":{"methods":[{"sl":13},{"sl":21}],"name":"testIsStringLiteral","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_380":{"methods":[{"sl":13}],"name":"testGenericINAnnotation","pass":true,"statements":[{"sl":14}]},"test_393":{"methods":[{"sl":13},{"sl":21}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_395":{"methods":[{"sl":13},{"sl":21}],"name":"runXPath","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_398":{"methods":[{"sl":13},{"sl":21}],"name":"testPmdOptions","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_404":{"methods":[{"sl":13},{"sl":21}],"name":"testOneParamVararg","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_407":{"methods":[{"sl":13}],"name":"testMulticatchWithAnnotations","pass":true,"statements":[{"sl":14}]},"test_415":{"methods":[{"sl":13},{"sl":21}],"name":"testBinaryNumericPromotion","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_42":{"methods":[{"sl":13}],"name":"testTryWithResources","pass":true,"statements":[{"sl":14}]},"test_420":{"methods":[{"sl":13},{"sl":21}],"name":"testEnumStaticUsage","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_421":{"methods":[{"sl":13},{"sl":21}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_433":{"methods":[{"sl":13},{"sl":21}],"name":"testViolationMessage","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_435":{"methods":[{"sl":13},{"sl":21}],"name":"testBinaryLogicalOperators","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_442":{"methods":[{"sl":13},{"sl":21}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_451":{"methods":[{"sl":13},{"sl":21}],"name":"testTwoMethodsSameNameDiffArgs","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_461":{"methods":[{"sl":13}],"name":"testTryWithResourcesSemi","pass":true,"statements":[{"sl":14}]},"test_469":{"methods":[{"sl":13}],"name":"testIsArray","pass":true,"statements":[{"sl":14}]},"test_484":{"methods":[{"sl":13},{"sl":21}],"name":"testTypeNameNode","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_485":{"methods":[{"sl":13},{"sl":21}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_496":{"methods":[{"sl":13}],"name":"testMulticatch","pass":true,"statements":[{"sl":14}]},"test_505":{"methods":[{"sl":13}],"name":"testGenericDiamond","pass":true,"statements":[{"sl":14}]},"test_512":{"methods":[{"sl":13},{"sl":21}],"name":"testAnnotationSucceedsWithDefaultMode","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_52":{"methods":[{"sl":13},{"sl":21}],"name":"testInnerOuterClass","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_527":{"methods":[{"sl":13},{"sl":21}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_531":{"methods":[{"sl":13},{"sl":21}],"name":"testgetEnclosingMethodScope","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_536":{"methods":[{"sl":13},{"sl":21}],"name":"testHasExplicitExtends","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_538":{"methods":[{"sl":13},{"sl":21}],"name":"acceptanceTest","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_544":{"methods":[{"sl":13}],"name":"testInnerOuterClass","pass":true,"statements":[{"sl":14}]},"test_549":{"methods":[{"sl":13}],"name":"testMultipleExceptionCatching","pass":true,"statements":[{"sl":14}]},"test_555":{"methods":[{"sl":13}],"name":"testJDK15ForLoopSyntaxShouldPassWith15","pass":true,"statements":[{"sl":14}]},"test_568":{"methods":[{"sl":13},{"sl":21}],"name":"testUnaryLogicalOperators","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_570":{"methods":[{"sl":13},{"sl":21}],"name":"testTwoParams","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_597":{"methods":[{"sl":13}],"name":"testCastLookaheadProblem","pass":true,"statements":[{"sl":14}]},"test_604":{"methods":[{"sl":13},{"sl":21}],"name":"testLiterals","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_62":{"methods":[{"sl":13},{"sl":21}],"name":"testEnums","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_626":{"methods":[{"sl":13},{"sl":21}],"name":"testMethodArgumentTypesAreRecorded","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_634":{"methods":[{"sl":13}],"name":"testStringInSwitch","pass":true,"statements":[{"sl":14}]},"test_635":{"methods":[{"sl":13},{"sl":21}],"name":"testCatchBlocks","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_638":{"methods":[{"sl":13},{"sl":21}],"name":"testLocalVariableDeclarationFound","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_64":{"methods":[{"sl":13},{"sl":21}],"name":"testLocalVariableTypesAreRecorded","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_651":{"methods":[{"sl":13},{"sl":21}],"name":"testQualifiedNameOccurrence","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_661":{"methods":[{"sl":13},{"sl":21}],"name":"testExplicitRuleInRuleSet","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_669":{"methods":[{"sl":13}],"name":"testJDK15ForLoopShouldFailWith14","pass":true,"statements":[{"sl":14}]},"test_676":{"methods":[{"sl":13},{"sl":21}],"name":"testEnumsClassScope","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_680":{"methods":[{"sl":13},{"sl":21}],"name":"testInnerClass","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_686":{"methods":[{"sl":13}],"name":"testGenericsInMethodCall","pass":true,"statements":[{"sl":14}]},"test_722":{"methods":[{"sl":13}],"name":"testMultiDimensionalArray","pass":true,"statements":[{"sl":14}]},"test_727":{"methods":[{"sl":13},{"sl":21}],"name":"testOneParam","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_731":{"methods":[{"sl":13},{"sl":21}],"name":"testClashingSymbols","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_748":{"methods":[{"sl":13}],"name":"testMultipleGenerics","pass":true,"statements":[{"sl":14}]},"test_753":{"methods":[{"sl":13}],"name":"testJDK15ForLoopSyntaxWithModifiers","pass":true,"statements":[{"sl":14}]},"test_758":{"methods":[{"sl":13}],"name":"testNestedClassInMethodBug","pass":true,"statements":[{"sl":14}]},"test_783":{"methods":[{"sl":13}],"name":"testJDK15GenericsSyntaxShouldPassWith15","pass":true,"statements":[{"sl":14}]},"test_830":{"methods":[{"sl":13},{"sl":21}],"name":"testNestedClassFieldAndParameter","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_843":{"methods":[{"sl":13},{"sl":21}],"name":"testParamTypeImage","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_862":{"methods":[{"sl":13},{"sl":21}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_865":{"methods":[{"sl":13},{"sl":21}],"name":"testGenerics","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_872":{"methods":[{"sl":13}],"name":"testParentMethods","pass":true,"statements":[{"sl":14}]},"test_891":{"methods":[{"sl":13},{"sl":21}],"name":"testBinaryStringPromotion","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_902":{"methods":[{"sl":13},{"sl":21}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_914":{"methods":[{"sl":13}],"name":"testGenericsProblem","pass":true,"statements":[{"sl":14}]},"test_917":{"methods":[{"sl":13},{"sl":21}],"name":"testBinaryNumericOperators","pass":true,"statements":[{"sl":14},{"sl":22}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [731, 111, 26, 634, 555, 42, 433, 415, 830, 180, 361, 360, 260, 24, 783, 2, 484, 753, 536, 568, 315, 727, 544, 131, 485, 362, 121, 635, 404, 321, 420, 442, 597, 686, 680, 281, 162, 398, 407, 917, 676, 638, 872, 891, 349, 527, 176, 151, 129, 345, 865, 421, 114, 722, 451, 252, 626, 64, 538, 380, 393, 531, 378, 902, 310, 33, 669, 496, 36, 748, 651, 62, 217, 604, 505, 395, 256, 661, 325, 469, 512, 160, 435, 862, 354, 570, 461, 346, 758, 843, 52, 914, 549], [731, 111, 26, 634, 555, 42, 433, 415, 830, 180, 361, 360, 260, 24, 783, 2, 484, 753, 536, 568, 315, 727, 544, 131, 485, 362, 121, 635, 404, 321, 420, 442, 597, 686, 680, 281, 162, 398, 407, 917, 676, 638, 872, 891, 349, 527, 176, 151, 129, 345, 865, 421, 114, 722, 451, 252, 626, 64, 538, 380, 393, 531, 378, 902, 310, 33, 669, 496, 36, 748, 651, 62, 217, 604, 505, 395, 256, 661, 325, 469, 512, 160, 435, 862, 354, 570, 461, 346, 758, 843, 52, 914, 549], [], [], [], [], [], [], [731, 433, 415, 830, 180, 360, 260, 24, 2, 484, 536, 568, 315, 727, 485, 362, 635, 404, 321, 420, 442, 680, 281, 162, 398, 917, 676, 638, 891, 527, 176, 151, 345, 865, 421, 451, 252, 626, 64, 538, 393, 531, 378, 902, 310, 36, 651, 62, 217, 604, 395, 661, 325, 512, 435, 862, 354, 570, 346, 843, 52], [731, 433, 415, 830, 180, 360, 260, 24, 2, 484, 536, 568, 315, 727, 485, 362, 635, 404, 321, 420, 442, 680, 281, 162, 398, 917, 676, 638, 891, 527, 176, 151, 345, 865, 421, 451, 252, 626, 64, 538, 393, 531, 378, 902, 310, 36, 651, 62, 217, 604, 395, 661, 325, 512, 435, 862, 354, 570, 346, 843, 52], [], []]
