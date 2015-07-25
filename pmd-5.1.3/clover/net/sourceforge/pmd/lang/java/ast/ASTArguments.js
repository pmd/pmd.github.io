var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":31,"id":10099,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":23,"sc":5,"sl":18},{"el":30,"sc":5,"sl":28}],"name":"ASTArguments","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_100":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_111":{"methods":[{"sl":13},{"sl":28}],"name":"testTryWithResources","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_132":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testMethodUsageSeenWithThis","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":29}]},"test_134":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testLambdaWithoutType","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_15":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testGenericsInMethodCall","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":29}]},"test_165":{"methods":[{"sl":13},{"sl":28}],"name":"testNestedClassFieldAndParameter","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_175":{"methods":[{"sl":13},{"sl":28}],"name":"testTryWithResourcesSemi","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_183":{"methods":[{"sl":13},{"sl":28}],"name":"testArguments","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_217":{"methods":[{"sl":13},{"sl":28}],"name":"testContainsNoInnerWithAnonInner","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_227":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testGenerics","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":29}]},"test_244":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testEquality","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":22},{"sl":29}]},"test_28":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_289":{"methods":[{"sl":13},{"sl":28}],"name":"testInnerOuterClass","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_29":{"methods":[{"sl":13},{"sl":28}],"name":"testLocalVariableTypesAreRecorded","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_299":{"methods":[{"sl":13},{"sl":28}],"name":"testNestedClassInMethodBug","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_308":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"test1","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":22},{"sl":29}]},"test_338":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_351":{"methods":[{"sl":13},{"sl":28}],"name":"testEnumAnonymousInnerClass","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_36":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_362":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testDemo","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":22},{"sl":29}]},"test_378":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testEnum","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_419":{"methods":[{"sl":13},{"sl":28}],"name":"testWithEnum","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_421":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testGenericsProblem","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":22},{"sl":29}]},"test_429":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_441":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_445":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testPmdOptions","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_483":{"methods":[{"sl":13},{"sl":28}],"name":"testEnumsClassScope","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_515":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testMultipleExceptionCatching","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":29}]},"test_521":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testMethodUsageSeen","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":29}]},"test_531":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testAssertAsIdentifierSucceedsWith1_3_test2","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":29}]},"test_537":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testMethodUsageSeen2","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":22},{"sl":29}]},"test_54":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testInnerOuterClass","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":29}]},"test_560":{"methods":[{"sl":13},{"sl":28}],"name":"testGetFirstASTNameImageNew","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_576":{"methods":[{"sl":13},{"sl":28}],"name":"testJDK15GenericsSyntaxShouldPassWith15","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_594":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testAbstractNames","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_595":{"methods":[{"sl":13},{"sl":28}],"name":"testTryWithResourcesMulti","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_659":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testParsersCases","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_662":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_667":{"methods":[{"sl":13},{"sl":28}],"name":"testGenericDiamond","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_692":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testEnumStaticUsage","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_713":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testExplicitRuleInRuleSet","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_716":{"methods":[{"sl":13},{"sl":28}],"name":"testClashingSymbols","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_749":{"methods":[{"sl":13},{"sl":28}],"name":"testLocalVariableDeclarationFound","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_756":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testParentMethods","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":29}]},"test_767":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_770":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testAll","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":22},{"sl":29}]},"test_781":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testCatchBlocks","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":29}]},"test_801":{"methods":[{"sl":13}],"name":"testAssertAsKeywordFailsWith1_3","pass":true,"statements":[{"sl":14}]},"test_860":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testGetFirstASTNameImageNull","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":29}]},"test_863":{"methods":[{"sl":13}],"name":"testImageOfPrimarySuffix","pass":true,"statements":[{"sl":14}]},"test_873":{"methods":[{"sl":13},{"sl":28}],"name":"testTryWithResourcesWithAnnotations","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_880":{"methods":[{"sl":13},{"sl":28}],"name":"testQualifiedNameOccurrence","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_903":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"testLambdaWithType","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]},"test_915":{"methods":[{"sl":13},{"sl":28}],"name":"testAnonymousInnerClass","pass":true,"statements":[{"sl":14},{"sl":29}]},"test_99":{"methods":[{"sl":13},{"sl":18},{"sl":28}],"name":"runXPath","pass":true,"statements":[{"sl":14},{"sl":19},{"sl":20},{"sl":22},{"sl":29}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [299, 749, 36, 183, 595, 378, 111, 419, 217, 537, 716, 29, 860, 15, 873, 54, 165, 767, 781, 801, 515, 531, 227, 560, 576, 903, 667, 756, 100, 28, 134, 351, 659, 692, 441, 338, 308, 421, 521, 662, 483, 770, 429, 863, 594, 713, 880, 244, 175, 289, 132, 362, 99, 915, 445], [299, 749, 36, 183, 595, 378, 111, 419, 217, 537, 716, 29, 860, 15, 873, 54, 165, 767, 781, 801, 515, 531, 227, 560, 576, 903, 667, 756, 100, 28, 134, 351, 659, 692, 441, 338, 308, 421, 521, 662, 483, 770, 429, 863, 594, 713, 880, 244, 175, 289, 132, 362, 99, 915, 445], [], [], [], [36, 378, 537, 860, 15, 54, 767, 781, 515, 531, 227, 903, 756, 100, 28, 134, 659, 692, 441, 338, 308, 421, 521, 662, 770, 429, 594, 713, 244, 132, 362, 99, 445], [36, 378, 537, 860, 15, 54, 767, 781, 515, 531, 227, 903, 756, 100, 28, 134, 659, 692, 441, 338, 308, 421, 521, 662, 770, 429, 594, 713, 244, 132, 362, 99, 445], [36, 378, 860, 15, 54, 767, 781, 515, 531, 227, 903, 756, 100, 28, 134, 659, 692, 441, 338, 521, 662, 429, 594, 713, 132, 99, 445], [], [36, 378, 537, 767, 903, 100, 28, 134, 659, 692, 441, 338, 308, 421, 662, 770, 429, 594, 713, 244, 362, 99, 445], [], [], [], [], [], [299, 749, 36, 183, 595, 378, 111, 419, 217, 537, 716, 29, 860, 15, 873, 54, 165, 767, 781, 515, 531, 227, 560, 576, 903, 667, 756, 100, 28, 134, 351, 659, 692, 441, 338, 308, 421, 521, 662, 483, 770, 429, 594, 713, 880, 244, 175, 289, 132, 362, 99, 915, 445], [299, 749, 36, 183, 595, 378, 111, 419, 217, 537, 716, 29, 860, 15, 873, 54, 165, 767, 781, 515, 531, 227, 560, 576, 903, 667, 756, 100, 28, 134, 351, 659, 692, 441, 338, 308, 421, 521, 662, 483, 770, 429, 594, 713, 880, 244, 175, 289, 132, 362, 99, 915, 445], [], []]
