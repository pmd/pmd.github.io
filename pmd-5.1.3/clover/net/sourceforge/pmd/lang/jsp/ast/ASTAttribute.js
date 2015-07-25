var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":73,"id":23205,"methods":[{"el":17,"sc":5,"sl":15},{"el":24,"sc":5,"sl":22},{"el":32,"sc":5,"sl":30},{"el":42,"sc":5,"sl":37},{"el":53,"sc":5,"sl":48},{"el":60,"sc":5,"sl":58},{"el":64,"sc":5,"sl":62},{"el":72,"sc":5,"sl":70}],"name":"ASTAttribute","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_140":{"methods":[{"sl":22},{"sl":62}],"name":"unclosedTagMultipleLevels","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_173":{"methods":[{"sl":22},{"sl":62}],"name":"testParseDollar","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_209":{"methods":[{"sl":22},{"sl":62}],"name":"noQuoteAttrTab","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_391":{"methods":[{"sl":22},{"sl":62}],"name":"quoteEL","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_399":{"methods":[{"sl":22},{"sl":62}],"name":"noQuoteAttrCrLf","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_44":{"methods":[{"sl":22},{"sl":62}],"name":"testImportHtmlScript","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_476":{"methods":[{"sl":22},{"sl":62}],"name":"unclosedTagAndNoQuotesForAttribute","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_51":{"methods":[{"sl":22},{"sl":62}],"name":"testJsfValueBinding","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_540":{"methods":[{"sl":22},{"sl":62}],"name":"noQuoteAttrValue","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_582":{"methods":[{"sl":22},{"sl":62}],"name":"testElExpressionInAttribute","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_609":{"methods":[{"sl":22},{"sl":62}],"name":"noQuoteAttrWithJspEL","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_640":{"methods":[{"sl":22},{"sl":62}],"name":"noQuoteAttrWithMalformedJspExpression","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_679":{"methods":[{"sl":22},{"sl":62}],"name":"noQuoteAttrEmpty","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_752":{"methods":[{"sl":22},{"sl":62}],"name":"noQuoteAttrWithJspExpression","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_771":{"methods":[{"sl":22},{"sl":62}],"name":"testComplexHtmlScript","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_777":{"methods":[{"sl":15},{"sl":22},{"sl":62}],"name":"testAttributeValueContainingHash","pass":true,"statements":[{"sl":16},{"sl":23},{"sl":63}]},"test_803":{"methods":[{"sl":15},{"sl":22},{"sl":30},{"sl":37},{"sl":48},{"sl":62}],"name":"testElementAttributeAndNamespace","pass":true,"statements":[{"sl":16},{"sl":23},{"sl":31},{"sl":38},{"sl":39},{"sl":49},{"sl":50},{"sl":63}]},"test_814":{"methods":[{"sl":22},{"sl":62}],"name":"unclosedTag","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_823":{"methods":[{"sl":22},{"sl":62}],"name":"testExpressionInAttribute","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_891":{"methods":[{"sl":22},{"sl":62}],"name":"testDoctype","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_921":{"methods":[{"sl":22},{"sl":62}],"name":"quoteExpression","pass":true,"statements":[{"sl":23},{"sl":63}]},"test_93":{"methods":[{"sl":22},{"sl":62}],"name":"testHtmlScriptWithAttribute","pass":true,"statements":[{"sl":23},{"sl":63}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [777, 803], [777, 803], [], [], [], [], [], [44, 823, 891, 921, 777, 609, 640, 814, 209, 752, 476, 540, 803, 51, 679, 140, 173, 93, 771, 399, 391, 582], [44, 823, 891, 921, 777, 609, 640, 814, 209, 752, 476, 540, 803, 51, 679, 140, 173, 93, 771, 399, 391, 582], [], [], [], [], [], [], [803], [803], [], [], [], [], [], [803], [803], [803], [], [], [], [], [], [], [], [], [803], [803], [803], [], [], [], [], [], [], [], [], [], [], [], [44, 823, 891, 921, 777, 609, 640, 814, 209, 752, 476, 540, 803, 51, 679, 140, 173, 93, 771, 399, 391, 582], [44, 823, 891, 921, 777, 609, 640, 814, 209, 752, 476, 540, 803, 51, 679, 140, 173, 93, 771, 399, 391, 582], [], [], [], [], [], [], [], [], [], []]
