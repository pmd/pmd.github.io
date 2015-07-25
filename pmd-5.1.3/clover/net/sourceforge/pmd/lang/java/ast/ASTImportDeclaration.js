var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":73,"id":10561,"methods":[{"el":15,"sc":5,"sl":13},{"el":19,"sc":5,"sl":17},{"el":23,"sc":5,"sl":21},{"el":27,"sc":5,"sl":25},{"el":31,"sc":5,"sl":29},{"el":35,"sc":5,"sl":33},{"el":40,"sc":5,"sl":38},{"el":44,"sc":5,"sl":42},{"el":56,"sc":5,"sl":46},{"el":63,"sc":5,"sl":61},{"el":68,"sc":5,"sl":66},{"el":72,"sc":5,"sl":70}],"name":"ASTImportDeclaration","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_100":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_18":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66},{"sl":70}],"name":"acceptanceTest","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67},{"sl":71}]},"test_185":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testUnaryNumericOperators","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_193":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testBinaryLogicalOperators","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_28":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_322":{"methods":[{"sl":17},{"sl":29},{"sl":33},{"sl":61}],"name":"testStaticImport","pass":true,"statements":[{"sl":18},{"sl":30},{"sl":34},{"sl":62}]},"test_338":{"methods":[{"sl":17},{"sl":21},{"sl":25},{"sl":29},{"sl":33},{"sl":38},{"sl":42},{"sl":46},{"sl":61},{"sl":66},{"sl":70}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":18},{"sl":22},{"sl":26},{"sl":30},{"sl":34},{"sl":39},{"sl":43},{"sl":47},{"sl":48},{"sl":49},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67},{"sl":71}]},"test_36":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_423":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testAssignmentOperators","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_429":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_436":{"methods":[{"sl":17}],"name":"testStaticImportFailsWithJDK14","pass":true,"statements":[{"sl":18}]},"test_441":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_445":{"methods":[{"sl":17},{"sl":25},{"sl":33},{"sl":38},{"sl":42},{"sl":46},{"sl":61},{"sl":66},{"sl":70}],"name":"testPmdOptions","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":34},{"sl":39},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67},{"sl":71}]},"test_497":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testBinaryNumericOperators","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_594":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testAbstractNames","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_608":{"methods":[{"sl":17},{"sl":61}],"name":"testColumnsOnQualifiedName","pass":true,"statements":[{"sl":18},{"sl":62}]},"test_659":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":61}],"name":"testParsersCases","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":62}]},"test_662":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_698":{"methods":[{"sl":17},{"sl":42},{"sl":61}],"name":"testGetImportedNameNode","pass":true,"statements":[{"sl":18},{"sl":43},{"sl":62}]},"test_71":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testUnaryLogicalOperators","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_710":{"methods":[{"sl":17},{"sl":21},{"sl":25},{"sl":61}],"name":"testImportOnDemand","pass":true,"statements":[{"sl":18},{"sl":22},{"sl":26},{"sl":62}]},"test_713":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testExplicitRuleInRuleSet","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_716":{"methods":[{"sl":17},{"sl":21},{"sl":25},{"sl":42},{"sl":61}],"name":"testClashingSymbols","pass":true,"statements":[{"sl":18},{"sl":22},{"sl":26},{"sl":43},{"sl":62}]},"test_753":{"methods":[{"sl":17},{"sl":61}],"name":"testLineNumbersForNameSplitOverTwoLines","pass":true,"statements":[{"sl":18},{"sl":62}]},"test_767":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_863":{"methods":[{"sl":17}],"name":"testImageOfPrimarySuffix","pass":true,"statements":[{"sl":18}]},"test_915":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":46},{"sl":61},{"sl":66}],"name":"testAnonymousInnerClass","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":47},{"sl":48},{"sl":51},{"sl":54},{"sl":55},{"sl":62},{"sl":67}]},"test_99":{"methods":[{"sl":17},{"sl":25},{"sl":42},{"sl":61}],"name":"runXPath","pass":true,"statements":[{"sl":18},{"sl":26},{"sl":43},{"sl":62}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [659, 36, 441, 338, 716, 710, 662, 429, 767, 863, 753, 193, 436, 594, 322, 713, 18, 71, 423, 608, 497, 698, 100, 99, 915, 28, 185, 445], [659, 36, 441, 338, 716, 710, 662, 429, 767, 863, 753, 193, 436, 594, 322, 713, 18, 71, 423, 608, 497, 698, 100, 99, 915, 28, 185, 445], [], [], [338, 716, 710], [338, 716, 710], [], [], [659, 36, 441, 338, 716, 710, 662, 429, 767, 193, 594, 713, 18, 71, 423, 497, 100, 99, 915, 28, 185, 445], [659, 36, 441, 338, 716, 710, 662, 429, 767, 193, 594, 713, 18, 71, 423, 497, 100, 99, 915, 28, 185, 445], [], [], [338, 322], [338, 322], [], [], [338, 322, 445], [338, 322, 445], [], [], [], [338, 445], [338, 445], [], [], [659, 36, 441, 338, 716, 662, 429, 767, 193, 594, 713, 18, 71, 423, 497, 698, 100, 99, 915, 28, 185, 445], [659, 36, 441, 338, 716, 662, 429, 767, 193, 594, 713, 18, 71, 423, 497, 698, 100, 99, 915, 28, 185, 445], [], [], [36, 441, 338, 662, 429, 767, 193, 594, 713, 18, 71, 423, 497, 100, 915, 28, 185, 445], [36, 441, 338, 662, 429, 767, 193, 594, 713, 18, 71, 423, 497, 100, 915, 28, 185, 445], [36, 441, 338, 662, 429, 767, 193, 594, 713, 18, 71, 423, 497, 100, 915, 28, 185, 445], [338], [], [36, 441, 338, 662, 429, 767, 193, 594, 713, 18, 71, 423, 497, 100, 915, 28, 185, 445], [], [], [36, 441, 338, 662, 429, 767, 193, 594, 713, 18, 71, 423, 497, 100, 915, 28, 185, 445], [36, 441, 338, 662, 429, 767, 193, 594, 713, 18, 71, 423, 497, 100, 915, 28, 185, 445], [], [], [], [], [], [659, 36, 441, 338, 716, 710, 662, 429, 767, 753, 193, 594, 322, 713, 18, 71, 423, 608, 497, 698, 100, 99, 915, 28, 185, 445], [659, 36, 441, 338, 716, 710, 662, 429, 767, 753, 193, 594, 322, 713, 18, 71, 423, 608, 497, 698, 100, 99, 915, 28, 185, 445], [], [], [], [36, 441, 338, 662, 429, 767, 193, 594, 713, 18, 71, 423, 497, 100, 915, 28, 185, 445], [36, 441, 338, 662, 429, 767, 193, 594, 713, 18, 71, 423, 497, 100, 915, 28, 185, 445], [], [], [338, 18, 445], [338, 18, 445], [], []]
