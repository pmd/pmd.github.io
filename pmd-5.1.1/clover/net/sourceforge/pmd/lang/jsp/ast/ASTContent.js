var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":22711,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":23,"sc":5,"sl":21}],"name":"ASTContent","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_100":{"methods":[{"sl":13}],"name":"testScriptlet","pass":true,"statements":[{"sl":14}]},"test_112":{"methods":[{"sl":13}],"name":"nestedMultipleTags","pass":true,"statements":[{"sl":14}]},"test_116":{"methods":[{"sl":13}],"name":"testDeclaration","pass":true,"statements":[{"sl":14}]},"test_129":{"methods":[{"sl":13}],"name":"noQuoteAttrWithJspExpression","pass":true,"statements":[{"sl":14}]},"test_182":{"methods":[{"sl":13}],"name":"quoteExpression","pass":true,"statements":[{"sl":14}]},"test_214":{"methods":[{"sl":13}],"name":"testCData","pass":true,"statements":[{"sl":14}]},"test_28":{"methods":[{"sl":13},{"sl":21}],"name":"testExpressionMatching","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_282":{"methods":[{"sl":13}],"name":"unclosedTagsWithDollar","pass":true,"statements":[{"sl":14}]},"test_307":{"methods":[{"sl":13}],"name":"testElExpression","pass":true,"statements":[{"sl":14}]},"test_369":{"methods":[{"sl":13}],"name":"nestedEmptyTags","pass":true,"statements":[{"sl":14}]},"test_374":{"methods":[{"sl":13}],"name":"testExpressionInAttribute","pass":true,"statements":[{"sl":14}]},"test_383":{"methods":[{"sl":13}],"name":"testDirective","pass":true,"statements":[{"sl":14}]},"test_389":{"methods":[{"sl":13}],"name":"unclosedParentTagClosedBeforeChild","pass":true,"statements":[{"sl":14}]},"test_412":{"methods":[{"sl":13}],"name":"noQuoteAttrWithMalformedJspExpression","pass":true,"statements":[{"sl":14}]},"test_43":{"methods":[{"sl":13}],"name":"noQuoteAttrValue","pass":true,"statements":[{"sl":14}]},"test_451":{"methods":[{"sl":13}],"name":"unclosedTagAndNoQuotesForAttribute","pass":true,"statements":[{"sl":14}]},"test_459":{"methods":[{"sl":13}],"name":"noQuoteAttrWithJspEL","pass":true,"statements":[{"sl":14}]},"test_509":{"methods":[{"sl":13}],"name":"testElementAttributeAndNamespace","pass":true,"statements":[{"sl":14}]},"test_520":{"methods":[{"sl":13}],"name":"testDoctype","pass":true,"statements":[{"sl":14}]},"test_553":{"methods":[{"sl":13}],"name":"testExpression","pass":true,"statements":[{"sl":14}]},"test_555":{"methods":[{"sl":13}],"name":"unmatchedTagDoesNotInfluenceStructure","pass":true,"statements":[{"sl":14}]},"test_580":{"methods":[{"sl":13}],"name":"mixedExpressions","pass":true,"statements":[{"sl":14}]},"test_584":{"methods":[{"sl":13}],"name":"testInlineCss","pass":true,"statements":[{"sl":14}]},"test_620":{"methods":[{"sl":13}],"name":"testComment","pass":true,"statements":[{"sl":14}]},"test_624":{"methods":[{"sl":13}],"name":"testImportHtmlScript","pass":true,"statements":[{"sl":14}]},"test_630":{"methods":[{"sl":13}],"name":"testParseDollar","pass":true,"statements":[{"sl":14}]},"test_636":{"methods":[{"sl":13}],"name":"testComplexHtmlScript","pass":true,"statements":[{"sl":14}]},"test_669":{"methods":[{"sl":13}],"name":"unclosedStartTagWithUnmatchedCloseOfDifferentTag","pass":true,"statements":[{"sl":14}]},"test_67":{"methods":[{"sl":13}],"name":"noQuoteAttrCrLf","pass":true,"statements":[{"sl":14}]},"test_670":{"methods":[{"sl":13}],"name":"testJsfValueBinding","pass":true,"statements":[{"sl":14}]},"test_677":{"methods":[{"sl":13}],"name":"unclosedTagsWithJspExpressionWithin","pass":true,"statements":[{"sl":14}]},"test_746":{"methods":[{"sl":13}],"name":"textAfterOpenAndClosedTag","pass":true,"statements":[{"sl":14}]},"test_753":{"methods":[{"sl":13}],"name":"unclosedTagsWithELWithin","pass":true,"statements":[{"sl":14}]},"test_766":{"methods":[{"sl":13}],"name":"testComment","pass":true,"statements":[{"sl":14}]},"test_769":{"methods":[{"sl":13}],"name":"noSpacesBetweenTags","pass":true,"statements":[{"sl":14}]},"test_784":{"methods":[{"sl":13}],"name":"testAttributeValueContainingHash","pass":true,"statements":[{"sl":14}]},"test_785":{"methods":[{"sl":13}],"name":"testHtmlScript","pass":true,"statements":[{"sl":14}]},"test_811":{"methods":[{"sl":13}],"name":"unclosedTagMultipleLevels","pass":true,"statements":[{"sl":14}]},"test_818":{"methods":[{"sl":13}],"name":"noQuoteAttrEmpty","pass":true,"statements":[{"sl":14}]},"test_829":{"methods":[{"sl":13}],"name":"testSimplestJsp","pass":true,"statements":[{"sl":14}]},"test_841":{"methods":[{"sl":13}],"name":"noQuoteAttrTab","pass":true,"statements":[{"sl":14}]},"test_848":{"methods":[{"sl":13}],"name":"testElExpressionInAttribute","pass":true,"statements":[{"sl":14}]},"test_875":{"methods":[{"sl":13}],"name":"unclosedTag","pass":true,"statements":[{"sl":14}]},"test_880":{"methods":[{"sl":13}],"name":"testHtmlScriptWithAttribute","pass":true,"statements":[{"sl":14}]},"test_894":{"methods":[{"sl":13}],"name":"testTextInTag","pass":true,"statements":[{"sl":14}]},"test_921":{"methods":[{"sl":13}],"name":"quoteEL","pass":true,"statements":[{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [894, 389, 43, 620, 182, 520, 374, 509, 129, 116, 580, 841, 369, 307, 28, 584, 921, 282, 383, 875, 669, 766, 753, 412, 677, 112, 100, 746, 67, 451, 880, 555, 670, 829, 636, 459, 630, 785, 769, 811, 784, 624, 818, 214, 553, 848], [894, 389, 43, 620, 182, 520, 374, 509, 129, 116, 580, 841, 369, 307, 28, 584, 921, 282, 383, 875, 669, 766, 753, 412, 677, 112, 100, 746, 67, 451, 880, 555, 670, 829, 636, 459, 630, 785, 769, 811, 784, 624, 818, 214, 553, 848], [], [], [], [], [], [], [28], [28], [], []]
