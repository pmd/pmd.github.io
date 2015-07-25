var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":34,"id":10105,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":23,"sc":5,"sl":21},{"el":33,"sc":5,"sl":31}],"name":"ASTBlockStatement","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":13},{"sl":21}],"name":"test_27","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_10":{"methods":[{"sl":13},{"sl":21}],"name":"testExplicitRuleInRuleSet","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_104":{"methods":[{"sl":13},{"sl":21}],"name":"testCastLookaheadProblem","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_112":{"methods":[{"sl":13},{"sl":21}],"name":"test_14","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_114":{"methods":[{"sl":13},{"sl":21}],"name":"testCompoundAssignmentPlusRecognized","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_124":{"methods":[{"sl":13},{"sl":21}],"name":"testInnerOuterClass","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_127":{"methods":[{"sl":13},{"sl":21}],"name":"test_20","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_133":{"methods":[{"sl":13},{"sl":21}],"name":"testNastyComplicatedMethod","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_142":{"methods":[{"sl":13},{"sl":21}],"name":"testClashingSymbols","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_143":{"methods":[{"sl":13},{"sl":21}],"name":"testIfStmtHasCorrectTypes","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_146":{"methods":[{"sl":13},{"sl":21}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_154":{"methods":[{"sl":13},{"sl":21}],"name":"testAlternateMarker","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_157":{"methods":[{"sl":13},{"sl":21}],"name":"testGenericsInMethodCall","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_170":{"methods":[{"sl":13},{"sl":21}],"name":"testSimpleVariableOccurrence","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_179":{"methods":[{"sl":13},{"sl":21}],"name":"test_2","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_18":{"methods":[{"sl":13},{"sl":21}],"name":"testBinaryStringPromotion","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_181":{"methods":[{"sl":13},{"sl":21}],"name":"testUnaryNumericOperators","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_184":{"methods":[{"sl":13},{"sl":21}],"name":"testForStmtHasCorrectTypes","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_186":{"methods":[{"sl":13},{"sl":21}],"name":"testMultDimArraySplitBraces","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_187":{"methods":[{"sl":13},{"sl":21}],"name":"testPrimitiveType","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_210":{"methods":[{"sl":13},{"sl":21}],"name":"testAssertAsIdentifierSucceedsWith1_3_test2","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_22":{"methods":[{"sl":13},{"sl":21}],"name":"testDontCrashOnBlockStatement","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_228":{"methods":[{"sl":13},{"sl":21}],"name":"testArrayIsReferenceType","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_229":{"methods":[{"sl":13},{"sl":21}],"name":"testNestedClassInMethodBug","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_236":{"methods":[{"sl":13},{"sl":21}],"name":"test_3","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_24":{"methods":[{"sl":13},{"sl":21}],"name":"test_10","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_242":{"methods":[{"sl":13},{"sl":21}],"name":"testGetFirstASTNameImageNew","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_243":{"methods":[{"sl":13},{"sl":21}],"name":"testDemo","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_249":{"methods":[{"sl":13},{"sl":21}],"name":"testGetFirstASTNameImageNull","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_254":{"methods":[{"sl":13},{"sl":21}],"name":"testDefaultOff","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_256":{"methods":[{"sl":13},{"sl":21}],"name":"testEnumAnonymousInnerClass","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_262":{"methods":[{"sl":13},{"sl":21}],"name":"testRemainingTestCases","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_266":{"methods":[{"sl":13},{"sl":21}],"name":"testAnonymousInnerClass","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_27":{"methods":[{"sl":13},{"sl":21}],"name":"test_19","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_271":{"methods":[{"sl":13},{"sl":21}],"name":"testParsersCases","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_281":{"methods":[{"sl":13},{"sl":21}],"name":"testWhileStmtHasCorrectTypes","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_282":{"methods":[{"sl":13},{"sl":21}],"name":"test_22","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_288":{"methods":[{"sl":13},{"sl":21}],"name":"testUnaryNumericPromotion","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_289":{"methods":[{"sl":13},{"sl":21}],"name":"testIsArray","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_292":{"methods":[{"sl":13},{"sl":21}],"name":"test_12","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_294":{"methods":[{"sl":13},{"sl":21}],"name":"test_30","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_299":{"methods":[{"sl":13},{"sl":21}],"name":"testSpecificSuppressionValue3","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_3":{"methods":[{"sl":13}],"name":"testImageOfPrimarySuffix","pass":true,"statements":[{"sl":14}]},"test_300":{"methods":[{"sl":13},{"sl":21}],"name":"testMethodName","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_301":{"methods":[{"sl":13},{"sl":21}],"name":"testNameLinkage","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_304":{"methods":[{"sl":13},{"sl":21}],"name":"testClassLevelSuppression","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_309":{"methods":[{"sl":13},{"sl":21}],"name":"test_23","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_311":{"methods":[{"sl":13},{"sl":21}],"name":"testInnerOuterClass","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_33":{"methods":[{"sl":13}],"name":"testJDK15ForLoopShouldFailWith14","pass":true,"statements":[{"sl":14}]},"test_330":{"methods":[{"sl":13},{"sl":21}],"name":"testFieldLevelSuppression","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_332":{"methods":[{"sl":13},{"sl":21}],"name":"testBinaryLogicalOperators","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_345":{"methods":[{"sl":13},{"sl":21}],"name":"testContainsNoInnerWithAnonInner","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_356":{"methods":[{"sl":13},{"sl":21}],"name":"test1","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_369":{"methods":[{"sl":13},{"sl":21}],"name":"testGenericsProblem","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_37":{"methods":[{"sl":13},{"sl":21}],"name":"testSingleDimArray","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_373":{"methods":[{"sl":13},{"sl":21}],"name":"testRemainingTestCases","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_385":{"methods":[{"sl":13},{"sl":21}],"name":"testPrimitiveTypeImage","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_386":{"methods":[{"sl":13},{"sl":21}],"name":"testScopesAreCreated","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_39":{"methods":[{"sl":13},{"sl":21}],"name":"testViolationMessage","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_394":{"methods":[{"sl":13},{"sl":21}],"name":"test_13","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_396":{"methods":[{"sl":9},{"sl":31}],"name":"testIsAllocation","pass":true,"statements":[{"sl":10},{"sl":32}]},"test_398":{"methods":[{"sl":13},{"sl":21}],"name":"test_26","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_4":{"methods":[{"sl":13},{"sl":21}],"name":"testMulticatch","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_400":{"methods":[{"sl":13},{"sl":21}],"name":"testParentMethods","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_408":{"methods":[{"sl":13},{"sl":21}],"name":"testbook","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_423":{"methods":[{"sl":13},{"sl":21}],"name":"testMethodUsageSeen","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_432":{"methods":[{"sl":13},{"sl":21}],"name":"test_15","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_438":{"methods":[{"sl":13},{"sl":21}],"name":"testGetFirstASTNameImageNull","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_442":{"methods":[{"sl":13},{"sl":21}],"name":"test_9","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_453":{"methods":[{"sl":13},{"sl":21}],"name":"testGenericINAnnotation","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_455":{"methods":[{"sl":13},{"sl":21}],"name":"testNastyComplicatedMethod","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_456":{"methods":[{"sl":13},{"sl":21}],"name":"testReturnValueComplexity","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_460":{"methods":[{"sl":13},{"sl":21}],"name":"testSpecificSuppressionValue2","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_467":{"methods":[{"sl":13},{"sl":21}],"name":"testIsSelfAssignment","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_469":{"methods":[{"sl":13},{"sl":21}],"name":"testSuper","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_47":{"methods":[{"sl":13},{"sl":21}],"name":"testJDK15ForLoopSyntaxShouldPassWith15","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_477":{"methods":[{"sl":13},{"sl":21}],"name":"testIncludeExcludeMultipleRuleSetWithRuleChainApplies","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_48":{"methods":[{"sl":13},{"sl":21}],"name":"testTwoUpdateDefs","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_480":{"methods":[{"sl":13},{"sl":21}],"name":"testEnumsClassScope","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_483":{"methods":[{"sl":13},{"sl":21}],"name":"testVariableDeclaratorParentChildLinks","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_485":{"methods":[{"sl":13},{"sl":21}],"name":"testEquality","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_490":{"methods":[{"sl":13},{"sl":21}],"name":"testCompoundAssignmentMultRecognized","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_496":{"methods":[{"sl":13},{"sl":21}],"name":"testAbstractNames","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_501":{"methods":[{"sl":13},{"sl":21}],"name":"testSimpleAssignmentRecognized","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_508":{"methods":[{"sl":13},{"sl":21}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_519":{"methods":[{"sl":13},{"sl":21}],"name":"testConstructor","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_52":{"methods":[{"sl":13},{"sl":21}],"name":"testCatchBlocks","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_520":{"methods":[{"sl":13},{"sl":21}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_521":{"methods":[{"sl":13},{"sl":21}],"name":"testAssertAsKeywordVariantsSucceedWith1_4","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_529":{"methods":[{"sl":13},{"sl":21}],"name":"test_8","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_532":{"methods":[{"sl":13}],"name":"testAssertAsKeywordFailsWith1_3","pass":true,"statements":[{"sl":14}]},"test_539":{"methods":[{"sl":13},{"sl":21}],"name":"test_11","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_553":{"methods":[{"sl":13},{"sl":21}],"name":"testFieldFinder","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_555":{"methods":[{"sl":13},{"sl":21}],"name":"testLocalVariableLevelSuppression","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_557":{"methods":[{"sl":13},{"sl":21}],"name":"test_29","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_559":{"methods":[{"sl":13},{"sl":21}],"name":"testInheritedSuppression","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_563":{"methods":[{"sl":13},{"sl":21}],"name":"test_6","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_564":{"methods":[{"sl":13},{"sl":21}],"name":"testSpecificSuppressionMulitpleValues2","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_570":{"methods":[{"sl":13},{"sl":21}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_574":{"methods":[{"sl":13},{"sl":21}],"name":"testNoSuppressionBlank","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_584":{"methods":[{"sl":13},{"sl":21}],"name":"testSpecificSuppressionValue1","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_585":{"methods":[{"sl":13},{"sl":21}],"name":"testJDK15ForLoopSyntaxWithModifiers","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_599":{"methods":[{"sl":13},{"sl":21}],"name":"testLabelledBreakLockup","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_608":{"methods":[{"sl":13},{"sl":21}],"name":"testStringInSwitch","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_610":{"methods":[{"sl":13},{"sl":21}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_612":{"methods":[{"sl":13},{"sl":21},{"sl":31}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":14},{"sl":22},{"sl":32}]},"test_615":{"methods":[{"sl":13},{"sl":21}],"name":"testAll","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_617":{"methods":[{"sl":13},{"sl":21}],"name":"testgetEnclosingMethodScope","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_622":{"methods":[{"sl":13},{"sl":21}],"name":"testMethodLevelSuppression","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_627":{"methods":[{"sl":13},{"sl":21},{"sl":31}],"name":"testPmdOptions","pass":true,"statements":[{"sl":14},{"sl":22},{"sl":32}]},"test_632":{"methods":[{"sl":9}],"name":"testFindDescendantsOfTypeMultiple","pass":true,"statements":[{"sl":10}]},"test_635":{"methods":[{"sl":13},{"sl":21}],"name":"testbuz","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_65":{"methods":[{"sl":13},{"sl":21}],"name":"testAcceptance","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_652":{"methods":[{"sl":13},{"sl":21}],"name":"testTryWithResourcesSemi","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_654":{"methods":[{"sl":13},{"sl":21}],"name":"testMethodUsageSeen2","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_656":{"methods":[{"sl":13},{"sl":21}],"name":"testBinaryNumericPromotion","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_662":{"methods":[{"sl":13},{"sl":21}],"name":"test_16","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_664":{"methods":[{"sl":13},{"sl":21}],"name":"testMethodDiffLines","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_666":{"methods":[{"sl":13},{"sl":21}],"name":"testMultDimArray","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_668":{"methods":[{"sl":13},{"sl":21}],"name":"runXPath","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_673":{"methods":[{"sl":13},{"sl":21}],"name":"test_24","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_674":{"methods":[{"sl":9},{"sl":31}],"name":"testIsAllocation2","pass":true,"statements":[{"sl":10},{"sl":32}]},"test_684":{"methods":[{"sl":13},{"sl":21}],"name":"test_28","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_70":{"methods":[{"sl":13},{"sl":21}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_700":{"methods":[{"sl":13},{"sl":21}],"name":"testBinaryNumericOperators","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_702":{"methods":[{"sl":13},{"sl":21}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_709":{"methods":[{"sl":13},{"sl":21}],"name":"testLambdaWithoutType","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_717":{"methods":[{"sl":13},{"sl":21}],"name":"testArrayDereference","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_719":{"methods":[{"sl":13},{"sl":21}],"name":"test_7","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_728":{"methods":[{"sl":13},{"sl":21}],"name":"testPostfixUsageIsRecorded","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_729":{"methods":[{"sl":13},{"sl":21}],"name":"testLocalVariableTypesAreRecorded","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_730":{"methods":[{"sl":13},{"sl":21}],"name":"testMethodUsageSeenWithThis","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_734":{"methods":[{"sl":13},{"sl":21}],"name":"testNastyComplicatedMethod","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_735":{"methods":[{"sl":13},{"sl":21}],"name":"testAssignmentOperators","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_743":{"methods":[{"sl":13},{"sl":21}],"name":"testLineNumbersAreSetOnAllSiblings","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_751":{"methods":[{"sl":13},{"sl":21}],"name":"test_4","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_752":{"methods":[{"sl":13},{"sl":21}],"name":"testMultipleExceptionCatching","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_754":{"methods":[{"sl":13},{"sl":21}],"name":"testUnaryLogicalOperators","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_757":{"methods":[{"sl":13},{"sl":21}],"name":"testTryWithResources","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_778":{"methods":[{"sl":13},{"sl":21}],"name":"testEnumStaticUsage","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_779":{"methods":[{"sl":13},{"sl":21}],"name":"acceptanceTest","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_79":{"methods":[{"sl":13},{"sl":21}],"name":"test_17","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_795":{"methods":[{"sl":13},{"sl":21}],"name":"test_21","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_797":{"methods":[{"sl":13},{"sl":21}],"name":"test_25","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_802":{"methods":[{"sl":13},{"sl":21}],"name":"testMethodParameterOccurrenceRecorded","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_806":{"methods":[{"sl":13},{"sl":21}],"name":"testEnum","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_81":{"methods":[{"sl":13},{"sl":21}],"name":"test_1","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_810":{"methods":[{"sl":13},{"sl":21}],"name":"testEq","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_816":{"methods":[{"sl":13},{"sl":21}],"name":"testQualifiedOccurrence","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_830":{"methods":[{"sl":13},{"sl":21}],"name":"testNoSuppressionSomethingElseS","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_85":{"methods":[{"sl":13},{"sl":21}],"name":"testLambdaWithType","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_860":{"methods":[{"sl":13},{"sl":21}],"name":"testGenericReturnType","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_862":{"methods":[{"sl":13}],"name":"testFollowingSibling","pass":true,"statements":[{"sl":14}]},"test_863":{"methods":[{"sl":13},{"sl":21}],"name":"testDefaultSet","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_864":{"methods":[{"sl":13},{"sl":21}],"name":"testGenerics","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_866":{"methods":[{"sl":13},{"sl":21}],"name":"testMulticatchWithAnnotations","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_886":{"methods":[{"sl":13},{"sl":21}],"name":"testLocalVariableDeclarationFound","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_893":{"methods":[{"sl":13},{"sl":21}],"name":"testConstructorLevelSuppression","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_894":{"methods":[{"sl":13},{"sl":21}],"name":"test_18","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_896":{"methods":[{"sl":13},{"sl":21}],"name":"testAnnotatedLocals","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_899":{"methods":[{"sl":13},{"sl":21}],"name":"testStatementExpressionParentChildLinks","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_90":{"methods":[{"sl":13},{"sl":21}],"name":"testRefTypeImage","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_906":{"methods":[{"sl":13},{"sl":21}],"name":"testSpecificSuppressionMulitpleValues1","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_912":{"methods":[{"sl":13},{"sl":21}],"name":"testQualifiedNameOccurrence","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_924":{"methods":[{"sl":13},{"sl":21}],"name":"testTryWithResourcesMulti","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_927":{"methods":[{"sl":13},{"sl":21}],"name":"testTryWithResourcesWithAnnotations","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_937":{"methods":[{"sl":13},{"sl":21}],"name":"testThis","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_938":{"methods":[{"sl":13},{"sl":21}],"name":"testSpecificSuppression","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_945":{"methods":[{"sl":13},{"sl":21}],"name":"testArguments","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_98":{"methods":[{"sl":13},{"sl":21}],"name":"testNestedClassFieldAndParameter","pass":true,"statements":[{"sl":14},{"sl":22}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [632, 674, 396], [632, 674, 396], [], [], [608, 743, 423, 81, 717, 662, 938, 330, 599, 236, 432, 400, 300, 408, 282, 520, 709, 627, 114, 508, 816, 157, 802, 294, 906, 332, 615, 937, 810, 24, 617, 112, 656, 309, 866, 539, 584, 557, 256, 98, 927, 779, 27, 39, 143, 243, 666, 3, 10, 229, 48, 90, 863, 79, 896, 22, 304, 356, 442, 467, 52, 553, 893, 477, 752, 945, 585, 924, 483, 622, 254, 299, 496, 521, 142, 385, 754, 85, 266, 864, 610, 559, 668, 438, 228, 485, 563, 394, 124, 501, 654, 292, 455, 555, 574, 719, 181, 564, 184, 886, 127, 460, 33, 684, 570, 369, 830, 281, 735, 730, 635, 469, 4, 0, 65, 862, 179, 734, 729, 210, 490, 529, 373, 345, 795, 104, 860, 186, 170, 289, 154, 133, 894, 532, 456, 652, 262, 288, 453, 912, 37, 480, 612, 751, 47, 70, 778, 398, 806, 700, 757, 673, 664, 301, 386, 899, 797, 519, 187, 311, 271, 242, 702, 249, 18, 146, 728], [608, 743, 423, 81, 717, 662, 938, 330, 599, 236, 432, 400, 300, 408, 282, 520, 709, 627, 114, 508, 816, 157, 802, 294, 906, 332, 615, 937, 810, 24, 617, 112, 656, 309, 866, 539, 584, 557, 256, 98, 927, 779, 27, 39, 143, 243, 666, 3, 10, 229, 48, 90, 863, 79, 896, 22, 304, 356, 442, 467, 52, 553, 893, 477, 752, 945, 585, 924, 483, 622, 254, 299, 496, 521, 142, 385, 754, 85, 266, 864, 610, 559, 668, 438, 228, 485, 563, 394, 124, 501, 654, 292, 455, 555, 574, 719, 181, 564, 184, 886, 127, 460, 33, 684, 570, 369, 830, 281, 735, 730, 635, 469, 4, 0, 65, 862, 179, 734, 729, 210, 490, 529, 373, 345, 795, 104, 860, 186, 170, 289, 154, 133, 894, 532, 456, 652, 262, 288, 453, 912, 37, 480, 612, 751, 47, 70, 778, 398, 806, 700, 757, 673, 664, 301, 386, 899, 797, 519, 187, 311, 271, 242, 702, 249, 18, 146, 728], [], [], [], [], [], [], [608, 743, 423, 81, 717, 662, 938, 330, 599, 236, 432, 400, 300, 408, 282, 520, 709, 627, 114, 508, 816, 157, 802, 294, 906, 332, 615, 937, 810, 24, 617, 112, 656, 309, 866, 539, 584, 557, 256, 98, 927, 779, 27, 39, 143, 243, 666, 10, 229, 48, 90, 863, 79, 896, 22, 304, 356, 442, 467, 52, 553, 893, 477, 752, 945, 585, 924, 483, 622, 254, 299, 496, 521, 142, 385, 754, 85, 266, 864, 610, 559, 668, 438, 228, 485, 563, 394, 124, 501, 654, 292, 455, 555, 574, 719, 181, 564, 184, 886, 127, 460, 684, 570, 369, 830, 281, 735, 730, 635, 469, 4, 0, 65, 179, 734, 729, 210, 490, 529, 373, 345, 795, 104, 860, 186, 170, 289, 154, 133, 894, 456, 652, 262, 288, 453, 912, 37, 480, 612, 751, 47, 70, 778, 398, 806, 700, 757, 673, 664, 301, 386, 899, 797, 519, 187, 311, 271, 242, 702, 249, 18, 146, 728], [608, 743, 423, 81, 717, 662, 938, 330, 599, 236, 432, 400, 300, 408, 282, 520, 709, 627, 114, 508, 816, 157, 802, 294, 906, 332, 615, 937, 810, 24, 617, 112, 656, 309, 866, 539, 584, 557, 256, 98, 927, 779, 27, 39, 143, 243, 666, 10, 229, 48, 90, 863, 79, 896, 22, 304, 356, 442, 467, 52, 553, 893, 477, 752, 945, 585, 924, 483, 622, 254, 299, 496, 521, 142, 385, 754, 85, 266, 864, 610, 559, 668, 438, 228, 485, 563, 394, 124, 501, 654, 292, 455, 555, 574, 719, 181, 564, 184, 886, 127, 460, 684, 570, 369, 830, 281, 735, 730, 635, 469, 4, 0, 65, 179, 734, 729, 210, 490, 529, 373, 345, 795, 104, 860, 186, 170, 289, 154, 133, 894, 456, 652, 262, 288, 453, 912, 37, 480, 612, 751, 47, 70, 778, 398, 806, 700, 757, 673, 664, 301, 386, 899, 797, 519, 187, 311, 271, 242, 702, 249, 18, 146, 728], [], [], [], [], [], [], [], [], [627, 674, 612, 396], [627, 674, 612, 396], [], []]
