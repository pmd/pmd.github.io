var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":29,"id":9899,"methods":[{"el":21,"sc":5,"sl":19},{"el":28,"sc":5,"sl":23}],"name":"Java14Parser","sl":17}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_126":{"methods":[{"sl":19}],"name":"testIgnoreBetweenSpecialAnnotation","pass":true,"statements":[{"sl":20}]},"test_128":{"methods":[{"sl":19}],"name":"testSimple","pass":true,"statements":[{"sl":20}]},"test_173":{"methods":[{"sl":19},{"sl":23}],"name":"testCastLookaheadProblem","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_174":{"methods":[{"sl":19},{"sl":23}],"name":"testGetFirstASTNameImageNull","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_184":{"methods":[{"sl":19}],"name":"testFileAddedWithRelativePath","pass":true,"statements":[{"sl":20}]},"test_288":{"methods":[{"sl":19},{"sl":23}],"name":"testDecodingOfUTF8","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_292":{"methods":[{"sl":19},{"sl":23}],"name":"testMultDimArraySplitBraces","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_296":{"methods":[{"sl":19}],"name":"testExcludes","pass":true,"statements":[{"sl":20}]},"test_3":{"methods":[{"sl":19},{"sl":23}],"name":"testSingleDimArray","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_303":{"methods":[{"sl":19},{"sl":23}],"name":"testMultiDimensionalArray","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_309":{"methods":[{"sl":19},{"sl":23}],"name":"testAnnotationFailsWithJDK14","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_317":{"methods":[{"sl":19}],"name":"testDiscardPkgStmts","pass":true,"statements":[{"sl":20}]},"test_330":{"methods":[{"sl":19}],"name":"testBrokenAndValidFile","pass":true,"statements":[{"sl":20}]},"test_339":{"methods":[{"sl":19}],"name":"testDiscardSimpleOneLineAnnotation","pass":true,"statements":[{"sl":20}]},"test_378":{"methods":[{"sl":19}],"name":"testBasic","pass":true,"statements":[{"sl":20}]},"test_385":{"methods":[{"sl":19},{"sl":23}],"name":"testTwoFiles","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_411":{"methods":[{"sl":19},{"sl":23}],"name":"testVarargsShouldFailWith14","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_419":{"methods":[{"sl":19}],"name":"testCommentsIgnored","pass":true,"statements":[{"sl":20}]},"test_424":{"methods":[{"sl":19},{"sl":23}],"name":"testJDK15ForLoopShouldFailWith14","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_46":{"methods":[{"sl":19}],"name":"testSimple","pass":true,"statements":[{"sl":20}]},"test_465":{"methods":[{"sl":19}],"name":"testDiscardImports","pass":true,"statements":[{"sl":20}]},"test_479":{"methods":[{"sl":19}],"name":"test1","pass":true,"statements":[{"sl":20}]},"test_567":{"methods":[{"sl":19},{"sl":23}],"name":"testAssertAsVariableDeclIdentifierFailsWith1_4","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_596":{"methods":[{"sl":19}],"name":"testEncodingOption","pass":true,"statements":[{"sl":20}]},"test_599":{"methods":[{"sl":19}],"name":"testIgnoreComments","pass":true,"statements":[{"sl":20}]},"test_631":{"methods":[{"sl":19}],"name":"testIgnore","pass":true,"statements":[{"sl":20}]},"test_65":{"methods":[{"sl":19},{"sl":23}],"name":"testIsArray","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_68":{"methods":[{"sl":19},{"sl":23}],"name":"testStaticImportFailsWithJDK14","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_69":{"methods":[{"sl":19},{"sl":23}],"name":"testAssertAsKeywordVariantsSucceedWith1_4","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_690":{"methods":[{"sl":19},{"sl":23}],"name":"testIsSyntacticallyPublic","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_694":{"methods":[{"sl":19}],"name":"testIgnoreIdentifiers","pass":true,"statements":[{"sl":20}]},"test_695":{"methods":[{"sl":19}],"name":"testDiscardSemicolons","pass":true,"statements":[{"sl":20}]},"test_703":{"methods":[{"sl":19}],"name":"testCopyXmlToClipboard","pass":true,"statements":[{"sl":20}]},"test_708":{"methods":[{"sl":19}],"name":"testDiscardOneLineAnnotationWithParams","pass":true,"statements":[{"sl":20}]},"test_728":{"methods":[{"sl":19}],"name":"testFileAddedAsSymlinkAndReal","pass":true,"statements":[{"sl":20}]},"test_731":{"methods":[{"sl":19}],"name":"test2","pass":true,"statements":[{"sl":20}]},"test_755":{"methods":[{"sl":19},{"sl":23}],"name":"testEnumAsIdentifierShouldPassWith14","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_763":{"methods":[{"sl":19},{"sl":23}],"name":"testMultDimArray","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_835":{"methods":[{"sl":19},{"sl":23}],"name":"testParentMethods","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_876":{"methods":[{"sl":19},{"sl":23}],"name":"testAssertAsMethodNameIdentifierFailsWith1_4","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_900":{"methods":[{"sl":19}],"name":"testIgnoreBetweenSpecialAnnotationAndIgnoreAnnotations","pass":true,"statements":[{"sl":20}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [296, 65, 695, 128, 465, 728, 479, 330, 703, 46, 317, 755, 68, 3, 599, 173, 631, 309, 69, 126, 378, 708, 174, 303, 385, 411, 731, 288, 339, 694, 424, 835, 567, 292, 419, 876, 690, 596, 900, 763, 184], [296, 65, 695, 128, 465, 728, 479, 330, 703, 46, 317, 755, 68, 3, 599, 173, 631, 309, 69, 126, 378, 708, 174, 303, 385, 411, 731, 288, 339, 694, 424, 835, 567, 292, 419, 876, 690, 596, 900, 763, 184], [], [], [65, 755, 68, 3, 173, 309, 69, 174, 303, 385, 411, 288, 424, 835, 567, 292, 876, 690, 763], [], [65, 755, 68, 3, 173, 309, 69, 174, 303, 385, 411, 288, 424, 835, 567, 292, 876, 690, 763], [65, 755, 68, 3, 173, 309, 69, 174, 303, 385, 411, 288, 424, 835, 567, 292, 876, 690, 763], [65, 755, 68, 3, 173, 309, 69, 174, 303, 385, 411, 288, 424, 835, 567, 292, 876, 690, 763], [], []]
