var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":26,"id":22542,"methods":[{"el":13,"sc":5,"sl":11},{"el":17,"sc":5,"sl":15},{"el":25,"sc":5,"sl":23}],"name":"ASTCompilationUnit","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":15}],"name":"testHtmlScriptWithAttribute","pass":true,"statements":[{"sl":16}]},"test_103":{"methods":[{"sl":15}],"name":"testComplexHtmlScript","pass":true,"statements":[{"sl":16}]},"test_126":{"methods":[{"sl":15}],"name":"testJsfValueBinding","pass":true,"statements":[{"sl":16}]},"test_141":{"methods":[{"sl":15}],"name":"testAttributeValueContainingHash","pass":true,"statements":[{"sl":16}]},"test_148":{"methods":[{"sl":15}],"name":"nestedEmptyTags","pass":true,"statements":[{"sl":16}]},"test_159":{"methods":[{"sl":15}],"name":"testParseDollar","pass":true,"statements":[{"sl":16}]},"test_170":{"methods":[{"sl":15}],"name":"noSpacesBetweenTags","pass":true,"statements":[{"sl":16}]},"test_211":{"methods":[{"sl":15}],"name":"testElExpressionInAttribute","pass":true,"statements":[{"sl":16}]},"test_224":{"methods":[{"sl":15}],"name":"testDeclaration","pass":true,"statements":[{"sl":16}]},"test_238":{"methods":[{"sl":15}],"name":"unclosedTagsWithELWithin","pass":true,"statements":[{"sl":16}]},"test_245":{"methods":[{"sl":15}],"name":"unmatchedTagDoesNotInfluenceStructure","pass":true,"statements":[{"sl":16}]},"test_271":{"methods":[{"sl":15}],"name":"testExpressionInAttribute","pass":true,"statements":[{"sl":16}]},"test_272":{"methods":[{"sl":15}],"name":"noQuoteAttrTab","pass":true,"statements":[{"sl":16}]},"test_293":{"methods":[{"sl":15}],"name":"testInlineCss","pass":true,"statements":[{"sl":16}]},"test_299":{"methods":[{"sl":15}],"name":"nestedMultipleTags","pass":true,"statements":[{"sl":16}]},"test_324":{"methods":[{"sl":15}],"name":"unclosedTagAndNoQuotesForAttribute","pass":true,"statements":[{"sl":16}]},"test_327":{"methods":[{"sl":15}],"name":"testCData","pass":true,"statements":[{"sl":16}]},"test_406":{"methods":[{"sl":15}],"name":"mixedExpressions","pass":true,"statements":[{"sl":16}]},"test_423":{"methods":[{"sl":15}],"name":"unclosedTagsWithJspExpressionWithin","pass":true,"statements":[{"sl":16}]},"test_426":{"methods":[{"sl":15}],"name":"unclosedTagsWithDollar","pass":true,"statements":[{"sl":16}]},"test_458":{"methods":[{"sl":15}],"name":"testImportHtmlScript","pass":true,"statements":[{"sl":16}]},"test_476":{"methods":[{"sl":15}],"name":"noQuoteAttrValue","pass":true,"statements":[{"sl":16}]},"test_486":{"methods":[{"sl":15}],"name":"noQuoteAttrWithJspEL","pass":true,"statements":[{"sl":16}]},"test_492":{"methods":[{"sl":15}],"name":"textAfterOpenAndClosedTag","pass":true,"statements":[{"sl":16}]},"test_506":{"methods":[{"sl":15}],"name":"testExpressionMatching","pass":true,"statements":[{"sl":16}]},"test_532":{"methods":[{"sl":15}],"name":"noQuoteAttrWithMalformedJspExpression","pass":true,"statements":[{"sl":16}]},"test_537":{"methods":[{"sl":15}],"name":"testDoctype","pass":true,"statements":[{"sl":16}]},"test_558":{"methods":[{"sl":15}],"name":"testHtmlScript","pass":true,"statements":[{"sl":16}]},"test_560":{"methods":[{"sl":15}],"name":"noQuoteAttrEmpty","pass":true,"statements":[{"sl":16}]},"test_572":{"methods":[{"sl":15}],"name":"testTextInTag","pass":true,"statements":[{"sl":16}]},"test_640":{"methods":[{"sl":15}],"name":"testScriptlet","pass":true,"statements":[{"sl":16}]},"test_648":{"methods":[{"sl":15}],"name":"testElExpression","pass":true,"statements":[{"sl":16}]},"test_66":{"methods":[{"sl":15}],"name":"testElementAttributeAndNamespace","pass":true,"statements":[{"sl":16}]},"test_665":{"methods":[{"sl":15}],"name":"testDirective","pass":true,"statements":[{"sl":16}]},"test_734":{"methods":[{"sl":15}],"name":"testSimplestJsp","pass":true,"statements":[{"sl":16}]},"test_784":{"methods":[{"sl":15}],"name":"unclosedTagMultipleLevels","pass":true,"statements":[{"sl":16}]},"test_786":{"methods":[{"sl":15}],"name":"noQuoteAttrWithJspExpression","pass":true,"statements":[{"sl":16}]},"test_795":{"methods":[{"sl":15}],"name":"unclosedParentTagClosedBeforeChild","pass":true,"statements":[{"sl":16}]},"test_811":{"methods":[{"sl":15}],"name":"noQuoteAttrCrLf","pass":true,"statements":[{"sl":16}]},"test_832":{"methods":[{"sl":15}],"name":"testExpression","pass":true,"statements":[{"sl":16}]},"test_848":{"methods":[{"sl":15}],"name":"unclosedTag","pass":true,"statements":[{"sl":16}]},"test_86":{"methods":[{"sl":15}],"name":"quoteExpression","pass":true,"statements":[{"sl":16}]},"test_869":{"methods":[{"sl":15}],"name":"testComment","pass":true,"statements":[{"sl":16}]},"test_873":{"methods":[{"sl":15}],"name":"quoteEL","pass":true,"statements":[{"sl":16}]},"test_886":{"methods":[{"sl":15}],"name":"unclosedStartTagWithUnmatchedCloseOfDifferentTag","pass":true,"statements":[{"sl":16}]},"test_96":{"methods":[{"sl":15}],"name":"testComment","pass":true,"statements":[{"sl":16}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [211, 458, 832, 873, 148, 141, 886, 506, 159, 811, 426, 665, 537, 560, 476, 869, 245, 572, 170, 86, 423, 406, 640, 299, 848, 96, 486, 293, 126, 532, 648, 1, 784, 492, 271, 734, 558, 272, 786, 103, 327, 795, 224, 238, 324, 66], [211, 458, 832, 873, 148, 141, 886, 506, 159, 811, 426, 665, 537, 560, 476, 869, 245, 572, 170, 86, 423, 406, 640, 299, 848, 96, 486, 293, 126, 532, 648, 1, 784, 492, 271, 734, 558, 272, 786, 103, 327, 795, 224, 238, 324, 66], [], [], [], [], [], [], [], [], [], []]
