var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":23251,"methods":[{"el":11,"sc":5,"sl":9},{"el":15,"sc":5,"sl":13},{"el":23,"sc":5,"sl":21}],"name":"ASTContent","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":13}],"name":"testTextInTag","pass":true,"statements":[{"sl":14}]},"test_104":{"methods":[{"sl":13}],"name":"testDirective","pass":true,"statements":[{"sl":14}]},"test_140":{"methods":[{"sl":13}],"name":"unclosedTagMultipleLevels","pass":true,"statements":[{"sl":14}]},"test_173":{"methods":[{"sl":13}],"name":"testParseDollar","pass":true,"statements":[{"sl":14}]},"test_19":{"methods":[{"sl":13}],"name":"testScriptlet","pass":true,"statements":[{"sl":14}]},"test_2":{"methods":[{"sl":13}],"name":"unclosedTagsWithELWithin","pass":true,"statements":[{"sl":14}]},"test_209":{"methods":[{"sl":13}],"name":"noQuoteAttrTab","pass":true,"statements":[{"sl":14}]},"test_218":{"methods":[{"sl":13},{"sl":21}],"name":"testExpressionMatching","pass":true,"statements":[{"sl":14},{"sl":22}]},"test_231":{"methods":[{"sl":13}],"name":"testExpression","pass":true,"statements":[{"sl":14}]},"test_233":{"methods":[{"sl":13}],"name":"unclosedTagsWithDollar","pass":true,"statements":[{"sl":14}]},"test_306":{"methods":[{"sl":13}],"name":"testSimplestJsp","pass":true,"statements":[{"sl":14}]},"test_391":{"methods":[{"sl":13}],"name":"quoteEL","pass":true,"statements":[{"sl":14}]},"test_399":{"methods":[{"sl":13}],"name":"noQuoteAttrCrLf","pass":true,"statements":[{"sl":14}]},"test_433":{"methods":[{"sl":13}],"name":"testComment","pass":true,"statements":[{"sl":14}]},"test_44":{"methods":[{"sl":13}],"name":"testImportHtmlScript","pass":true,"statements":[{"sl":14}]},"test_464":{"methods":[{"sl":13}],"name":"noSpacesBetweenTags","pass":true,"statements":[{"sl":14}]},"test_476":{"methods":[{"sl":13}],"name":"unclosedTagAndNoQuotesForAttribute","pass":true,"statements":[{"sl":14}]},"test_478":{"methods":[{"sl":13}],"name":"testElExpression","pass":true,"statements":[{"sl":14}]},"test_480":{"methods":[{"sl":13}],"name":"mixedExpressions","pass":true,"statements":[{"sl":14}]},"test_486":{"methods":[{"sl":13}],"name":"unclosedStartTagWithUnmatchedCloseOfDifferentTag","pass":true,"statements":[{"sl":14}]},"test_51":{"methods":[{"sl":13}],"name":"testJsfValueBinding","pass":true,"statements":[{"sl":14}]},"test_540":{"methods":[{"sl":13}],"name":"noQuoteAttrValue","pass":true,"statements":[{"sl":14}]},"test_566":{"methods":[{"sl":13}],"name":"nestedMultipleTags","pass":true,"statements":[{"sl":14}]},"test_582":{"methods":[{"sl":13}],"name":"testElExpressionInAttribute","pass":true,"statements":[{"sl":14}]},"test_597":{"methods":[{"sl":13}],"name":"unclosedParentTagClosedBeforeChild","pass":true,"statements":[{"sl":14}]},"test_609":{"methods":[{"sl":13}],"name":"noQuoteAttrWithJspEL","pass":true,"statements":[{"sl":14}]},"test_612":{"methods":[{"sl":13}],"name":"unmatchedTagDoesNotInfluenceStructure","pass":true,"statements":[{"sl":14}]},"test_62":{"methods":[{"sl":13}],"name":"testInlineCss","pass":true,"statements":[{"sl":14}]},"test_640":{"methods":[{"sl":13}],"name":"noQuoteAttrWithMalformedJspExpression","pass":true,"statements":[{"sl":14}]},"test_643":{"methods":[{"sl":13}],"name":"testDeclaration","pass":true,"statements":[{"sl":14}]},"test_674":{"methods":[{"sl":13}],"name":"unclosedTagsWithJspExpressionWithin","pass":true,"statements":[{"sl":14}]},"test_679":{"methods":[{"sl":13}],"name":"noQuoteAttrEmpty","pass":true,"statements":[{"sl":14}]},"test_680":{"methods":[{"sl":13}],"name":"textAfterOpenAndClosedTag","pass":true,"statements":[{"sl":14}]},"test_685":{"methods":[{"sl":13}],"name":"nestedEmptyTags","pass":true,"statements":[{"sl":14}]},"test_752":{"methods":[{"sl":13}],"name":"noQuoteAttrWithJspExpression","pass":true,"statements":[{"sl":14}]},"test_771":{"methods":[{"sl":13}],"name":"testComplexHtmlScript","pass":true,"statements":[{"sl":14}]},"test_777":{"methods":[{"sl":13}],"name":"testAttributeValueContainingHash","pass":true,"statements":[{"sl":14}]},"test_803":{"methods":[{"sl":13}],"name":"testElementAttributeAndNamespace","pass":true,"statements":[{"sl":14}]},"test_814":{"methods":[{"sl":13}],"name":"unclosedTag","pass":true,"statements":[{"sl":14}]},"test_823":{"methods":[{"sl":13}],"name":"testExpressionInAttribute","pass":true,"statements":[{"sl":14}]},"test_855":{"methods":[{"sl":13}],"name":"testCData","pass":true,"statements":[{"sl":14}]},"test_861":{"methods":[{"sl":13}],"name":"testComment","pass":true,"statements":[{"sl":14}]},"test_872":{"methods":[{"sl":13}],"name":"testHtmlScript","pass":true,"statements":[{"sl":14}]},"test_891":{"methods":[{"sl":13}],"name":"testDoctype","pass":true,"statements":[{"sl":14}]},"test_921":{"methods":[{"sl":13}],"name":"quoteExpression","pass":true,"statements":[{"sl":14}]},"test_93":{"methods":[{"sl":13}],"name":"testHtmlScriptWithAttribute","pass":true,"statements":[{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [823, 891, 921, 609, 640, 104, 464, 2, 540, 231, 861, 51, 306, 679, 140, 173, 771, 399, 480, 643, 486, 582, 478, 44, 685, 233, 777, 674, 680, 612, 814, 209, 752, 19, 476, 872, 218, 803, 433, 855, 597, 93, 10, 391, 62, 566], [823, 891, 921, 609, 640, 104, 464, 2, 540, 231, 861, 51, 306, 679, 140, 173, 771, 399, 480, 643, 486, 582, 478, 44, 685, 233, 777, 674, 680, 612, 814, 209, 752, 19, 476, 872, 218, 803, 433, 855, 597, 93, 10, 391, 62, 566], [], [], [], [], [], [], [218], [218], [], []]
