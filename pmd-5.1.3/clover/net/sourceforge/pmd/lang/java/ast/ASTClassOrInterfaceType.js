var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":10234,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":23,"sc":5,"sl":21}],"name":"ASTClassOrInterfaceType","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_100":{"methods":[{"sl":13},{"sl":21}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_103":{"methods":[{"sl":13},{"sl":21}],"name":"testUserData","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_111":{"methods":[{"sl":13},{"sl":21}],"name":"testTryWithResources","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_134":{"methods":[{"sl":13},{"sl":21}],"name":"testLambdaWithoutType","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_15":{"methods":[{"sl":13},{"sl":21}],"name":"testGenericsInMethodCall","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_150":{"methods":[{"sl":13}],"name":"testAnnotationFailsWithJDK14","pass":true,"statements":[{"sl":14}]},"test_165":{"methods":[{"sl":13},{"sl":21}],"name":"testNestedClassFieldAndParameter","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_175":{"methods":[{"sl":13},{"sl":21}],"name":"testTryWithResourcesSemi","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_18":{"methods":[{"sl":13},{"sl":21}],"name":"acceptanceTest","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_185":{"methods":[{"sl":13},{"sl":21}],"name":"testUnaryNumericOperators","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_188":{"methods":[{"sl":13},{"sl":21}],"name":"testGenericINAnnotation","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_193":{"methods":[{"sl":13},{"sl":21}],"name":"testBinaryLogicalOperators","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_202":{"methods":[{"sl":13},{"sl":21}],"name":"testUnaryNumericPromotion","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_217":{"methods":[{"sl":13},{"sl":21}],"name":"testContainsNoInnerWithAnonInner","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_227":{"methods":[{"sl":13},{"sl":21}],"name":"testGenerics","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_234":{"methods":[{"sl":13}],"name":"testVarargsShouldFailWith14","pass":true,"statements":[{"sl":14}]},"test_241":{"methods":[{"sl":13},{"sl":21}],"name":"testVarargsShouldPassWith15","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_256":{"methods":[{"sl":13},{"sl":21}],"name":"testTwoParams","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_264":{"methods":[{"sl":13},{"sl":21}],"name":"testAnnotationSucceedsWithDefaultMode","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_28":{"methods":[{"sl":13},{"sl":21}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_286":{"methods":[{"sl":13},{"sl":21}],"name":"testInnerClass","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_289":{"methods":[{"sl":13},{"sl":21}],"name":"testInnerOuterClass","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_29":{"methods":[{"sl":13},{"sl":21}],"name":"testLocalVariableTypesAreRecorded","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_291":{"methods":[{"sl":13},{"sl":21}],"name":"testHasExplicitImplements","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_299":{"methods":[{"sl":13},{"sl":21}],"name":"testNestedClassInMethodBug","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_332":{"methods":[{"sl":13},{"sl":21}],"name":"testVariousParserBugs","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_338":{"methods":[{"sl":13},{"sl":21}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_34":{"methods":[{"sl":13},{"sl":21}],"name":"testLineNumbersAreSetOnAllSiblings","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_344":{"methods":[{"sl":13},{"sl":21}],"name":"testHasExplicitExtends","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_347":{"methods":[{"sl":13},{"sl":21}],"name":"testJDK15ForLoopSyntaxShouldPassWith15","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_351":{"methods":[{"sl":13},{"sl":21}],"name":"testEnumAnonymousInnerClass","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_36":{"methods":[{"sl":13},{"sl":21}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_362":{"methods":[{"sl":13},{"sl":21}],"name":"testDemo","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_378":{"methods":[{"sl":13},{"sl":21}],"name":"testEnum","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_4":{"methods":[{"sl":13},{"sl":21}],"name":"testAnnotations","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_403":{"methods":[{"sl":13},{"sl":21}],"name":"testOneParam","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_413":{"methods":[{"sl":13},{"sl":21}],"name":"testStringInSwitch","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_421":{"methods":[{"sl":13},{"sl":21}],"name":"testGenericsProblem","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_422":{"methods":[{"sl":13},{"sl":21}],"name":"testgetEnclosingMethodScope","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_423":{"methods":[{"sl":13},{"sl":21}],"name":"testAssignmentOperators","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_428":{"methods":[{"sl":13},{"sl":21}],"name":"testOneParamVararg","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_429":{"methods":[{"sl":13},{"sl":21}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_437":{"methods":[{"sl":13},{"sl":21}],"name":"testMulticatch","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_441":{"methods":[{"sl":13},{"sl":21}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_445":{"methods":[{"sl":13},{"sl":21}],"name":"testPmdOptions","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_483":{"methods":[{"sl":13},{"sl":21}],"name":"testEnumsClassScope","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_497":{"methods":[{"sl":13},{"sl":21}],"name":"testBinaryNumericOperators","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_504":{"methods":[{"sl":13},{"sl":21}],"name":"testRefTypeImage","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_509":{"methods":[{"sl":13},{"sl":21}],"name":"testMultipleGenerics","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_515":{"methods":[{"sl":13},{"sl":21}],"name":"testMultipleExceptionCatching","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_528":{"methods":[{"sl":13},{"sl":21}],"name":"testParamTypeImage","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_54":{"methods":[{"sl":13},{"sl":21}],"name":"testInnerOuterClass","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_552":{"methods":[{"sl":13},{"sl":21}],"name":"testMethodArgumentTypesAreRecorded","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_560":{"methods":[{"sl":13},{"sl":21}],"name":"testGetFirstASTNameImageNew","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_576":{"methods":[{"sl":13},{"sl":21}],"name":"testJDK15GenericsSyntaxShouldPassWith15","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_594":{"methods":[{"sl":13},{"sl":21}],"name":"testAbstractNames","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_595":{"methods":[{"sl":13},{"sl":21}],"name":"testTryWithResourcesMulti","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_60":{"methods":[{"sl":13},{"sl":21}],"name":"testBinaryStringPromotion","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_614":{"methods":[{"sl":13},{"sl":21}],"name":"testIsStringLiteral","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_621":{"methods":[{"sl":13},{"sl":21}],"name":"testTwoParamsVararg","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_627":{"methods":[{"sl":13},{"sl":21}],"name":"testMulticatchWithAnnotations","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_63":{"methods":[{"sl":13},{"sl":21}],"name":"testTypeNameNode","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_659":{"methods":[{"sl":13},{"sl":21}],"name":"testParsersCases","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_662":{"methods":[{"sl":13},{"sl":21}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_667":{"methods":[{"sl":13},{"sl":21}],"name":"testGenericDiamond","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_69":{"methods":[{"sl":13},{"sl":21}],"name":"testTwoMethodsSameNameDiffArgs","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_692":{"methods":[{"sl":13},{"sl":21}],"name":"testEnumStaticUsage","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_71":{"methods":[{"sl":13},{"sl":21}],"name":"testUnaryLogicalOperators","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_711":{"methods":[{"sl":13},{"sl":21}],"name":"testGenericReturnType","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_713":{"methods":[{"sl":13},{"sl":21}],"name":"testExplicitRuleInRuleSet","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_716":{"methods":[{"sl":13},{"sl":21}],"name":"testClashingSymbols","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_725":{"methods":[{"sl":13},{"sl":21}],"name":"testMultiDimensionalArray","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_733":{"methods":[{"sl":13},{"sl":21}],"name":"testAnnotationSucceedsWithJDK15","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_749":{"methods":[{"sl":13},{"sl":21}],"name":"testLocalVariableDeclarationFound","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_756":{"methods":[{"sl":13},{"sl":21}],"name":"testParentMethods","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_760":{"methods":[{"sl":13},{"sl":21}],"name":"testLiterals","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_767":{"methods":[{"sl":13},{"sl":21}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_770":{"methods":[{"sl":13},{"sl":21}],"name":"testAll","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_781":{"methods":[{"sl":13},{"sl":21}],"name":"testCatchBlocks","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_791":{"methods":[{"sl":13},{"sl":21}],"name":"testCastLookaheadProblem","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_842":{"methods":[{"sl":13},{"sl":21}],"name":"testBinaryNumericPromotion","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_846":{"methods":[{"sl":13},{"sl":21}],"name":"testIsArray","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_847":{"methods":[{"sl":13},{"sl":21}],"name":"testEq","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_856":{"methods":[{"sl":13}],"name":"testFollowingSibling","pass":true,"statements":[{"sl":14}]},"test_860":{"methods":[{"sl":13},{"sl":21}],"name":"testGetFirstASTNameImageNull","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_863":{"methods":[{"sl":13}],"name":"testImageOfPrimarySuffix","pass":true,"statements":[{"sl":14}]},"test_873":{"methods":[{"sl":13},{"sl":21}],"name":"testTryWithResourcesWithAnnotations","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_88":{"methods":[{"sl":13},{"sl":21}],"name":"testEnums","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_880":{"methods":[{"sl":13},{"sl":21}],"name":"testQualifiedNameOccurrence","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_882":{"methods":[{"sl":13},{"sl":21}],"name":"testJDK15ForLoopSyntaxWithModifiers","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_903":{"methods":[{"sl":13},{"sl":21}],"name":"testLambdaWithType","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_913":{"methods":[{"sl":13}],"name":"testJDK15ForLoopShouldFailWith14","pass":true,"statements":[{"sl":14}]},"test_915":{"methods":[{"sl":13},{"sl":21}],"name":"testAnonymousInnerClass","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_99":{"methods":[{"sl":13},{"sl":21}],"name":"runXPath","pass":true,"statements":[{"sl":14},{"sl":22}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [299, 749, 347, 528, 36, 256, 344, 595, 614, 111, 378, 34, 217, 716, 29, 860, 15, 332, 873, 627, 413, 286, 767, 760, 165, 54, 60, 781, 63, 515, 560, 227, 576, 509, 103, 437, 903, 667, 882, 913, 842, 756, 188, 241, 100, 725, 28, 185, 134, 88, 202, 234, 351, 264, 692, 659, 856, 846, 441, 847, 338, 422, 421, 662, 770, 483, 291, 429, 863, 193, 69, 733, 621, 552, 594, 713, 18, 880, 71, 175, 150, 289, 423, 497, 428, 711, 504, 4, 362, 99, 915, 791, 445, 403], [299, 749, 347, 528, 36, 256, 344, 595, 614, 111, 378, 34, 217, 716, 29, 860, 15, 332, 873, 627, 413, 286, 767, 760, 165, 54, 60, 781, 63, 515, 560, 227, 576, 509, 103, 437, 903, 667, 882, 913, 842, 756, 188, 241, 100, 725, 28, 185, 134, 88, 202, 234, 351, 264, 692, 659, 856, 846, 441, 847, 338, 422, 421, 662, 770, 483, 291, 429, 863, 193, 69, 733, 621, 552, 594, 713, 18, 880, 71, 175, 150, 289, 423, 497, 428, 711, 504, 4, 362, 99, 915, 791, 445, 403], [], [], [], [], [], [], [299, 749, 347, 528, 36, 256, 344, 595, 614, 111, 378, 34, 217, 716, 29, 860, 15, 332, 873, 627, 413, 286, 767, 760, 165, 54, 60, 781, 63, 515, 560, 227, 576, 509, 103, 437, 903, 667, 882, 842, 756, 188, 241, 100, 725, 28, 185, 134, 88, 202, 351, 264, 692, 659, 846, 441, 847, 338, 422, 421, 662, 770, 483, 291, 429, 193, 69, 733, 621, 552, 594, 713, 18, 880, 71, 175, 289, 423, 497, 428, 711, 504, 4, 362, 99, 915, 791, 445, 403], [299, 749, 347, 528, 36, 256, 344, 595, 614, 111, 378, 34, 217, 716, 29, 860, 15, 332, 873, 627, 413, 286, 767, 760, 165, 54, 60, 781, 63, 515, 560, 227, 576, 509, 103, 437, 903, 667, 882, 842, 756, 188, 241, 100, 725, 28, 185, 134, 88, 202, 351, 264, 692, 659, 846, 441, 847, 338, 422, 421, 662, 770, 483, 291, 429, 193, 69, 733, 621, 552, 594, 713, 18, 880, 71, 175, 289, 423, 497, 428, 711, 504, 4, 362, 99, 915, 791, 445, 403], [], []]
