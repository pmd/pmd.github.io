var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":70,"id":9965,"methods":[{"el":23,"sc":5,"sl":21},{"el":27,"sc":5,"sl":25},{"el":40,"sc":5,"sl":29},{"el":61,"sc":5,"sl":42},{"el":69,"sc":5,"sl":66}],"name":"ASTAnnotation","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_130":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testSpecificSuppressionValue1","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":35},{"sl":36},{"sl":37},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_151":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testSpecificSuppressionValue3","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":35},{"sl":36},{"sl":37},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_155":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testInheritedSuppression","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_167":{"methods":[{"sl":25},{"sl":66}],"name":"testInnerOuterClass","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_200":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testSpecificSuppressionMulitpleValues1","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_201":{"methods":[{"sl":25},{"sl":66}],"name":"testAnnotatedLocals","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_207":{"methods":[{"sl":25},{"sl":66}],"name":"testAnonymousInnerClass","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_210":{"methods":[{"sl":25},{"sl":66}],"name":"testAnnotationSucceedsWithDefaultMode","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_218":{"methods":[{"sl":25},{"sl":66}],"name":"testTryWithResourcesWithAnnotations","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_222":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testExclusionsInReportWithAnnotationsFullName","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_230":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testNoSuppressionSomethingElseS","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":60},{"sl":68}]},"test_271":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testSuppressAll","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_272":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testConstructorLevelSuppression","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_302":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testSpecificSuppressionAtTopLevel","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_309":{"methods":[{"sl":25}],"name":"testAnnotationFailsWithJDK14","pass":true,"statements":[{"sl":26}]},"test_332":{"methods":[{"sl":25},{"sl":66}],"name":"testAnnotations","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_377":{"methods":[{"sl":25},{"sl":66}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_406":{"methods":[{"sl":25},{"sl":66}],"name":"testVariousParserBugs","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_435":{"methods":[{"sl":25},{"sl":66}],"name":"testMulticatchWithAnnotations","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_466":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testSpecificSuppressionMulitpleValues2","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":35},{"sl":36},{"sl":37},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_488":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testLocalVariableLevelSuppression","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_500":{"methods":[{"sl":25},{"sl":66}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_525":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testNoSuppressionBlank","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":60},{"sl":68}]},"test_541":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testFieldLevelSuppression","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_543":{"methods":[{"sl":25},{"sl":66}],"name":"testPackageName","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_565":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testSpecificSuppression","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_583":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testAll","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":60},{"sl":68}]},"test_586":{"methods":[{"sl":25},{"sl":66}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_598":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testClassLevelSuppression","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_635":{"methods":[{"sl":25},{"sl":66}],"name":"testAbstractNames","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_638":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testPmdOptions","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":39},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":60},{"sl":68}]},"test_7":{"methods":[{"sl":25},{"sl":66}],"name":"testAnnotatedParams","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_70":{"methods":[{"sl":25},{"sl":66}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_721":{"methods":[{"sl":25},{"sl":66}],"name":"testAnnotationSucceedsWithJDK15","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_722":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":39},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":60},{"sl":68}]},"test_729":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testMethodLevelSuppression","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_734":{"methods":[{"sl":25},{"sl":66}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_735":{"methods":[{"sl":25},{"sl":66}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_742":{"methods":[{"sl":25},{"sl":66}],"name":"testEnumAnonymousInnerClass","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_759":{"methods":[{"sl":25},{"sl":66}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_782":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testExclusionsInReportWithAnnotations","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_796":{"methods":[{"sl":25},{"sl":66}],"name":"runXPath","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_812":{"methods":[{"sl":25},{"sl":66}],"name":"testRemainingTestCases","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_853":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testParameterLevelSuppression","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_866":{"methods":[{"sl":25},{"sl":29},{"sl":42},{"sl":66}],"name":"testSpecificSuppressionValue2","pass":true,"statements":[{"sl":26},{"sl":30},{"sl":32},{"sl":33},{"sl":34},{"sl":43},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":50},{"sl":55},{"sl":68}]},"test_886":{"methods":[{"sl":25},{"sl":66}],"name":"testParsersCases","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_90":{"methods":[{"sl":25},{"sl":66}],"name":"testExplicitRuleInRuleSet","pass":true,"statements":[{"sl":26},{"sl":68}]},"test_918":{"methods":[{"sl":25},{"sl":66}],"name":"acceptanceTest","pass":true,"statements":[{"sl":26},{"sl":68}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [500, 812, 586, 222, 866, 332, 742, 210, 130, 230, 598, 918, 488, 200, 886, 565, 735, 466, 796, 543, 377, 722, 525, 406, 201, 309, 635, 151, 853, 541, 721, 167, 218, 734, 7, 271, 435, 70, 782, 583, 272, 729, 207, 90, 302, 155, 759, 638], [500, 812, 586, 222, 866, 332, 742, 210, 130, 230, 598, 918, 488, 200, 886, 565, 735, 466, 796, 543, 377, 722, 525, 406, 201, 309, 635, 151, 853, 541, 721, 167, 218, 734, 7, 271, 435, 70, 782, 583, 272, 729, 207, 90, 302, 155, 759, 638], [], [], [222, 866, 130, 230, 598, 488, 200, 565, 466, 722, 525, 151, 853, 541, 271, 782, 583, 272, 729, 302, 155, 638], [222, 866, 130, 230, 598, 488, 200, 565, 466, 722, 525, 151, 853, 541, 271, 782, 583, 272, 729, 302, 155, 638], [], [222, 866, 130, 230, 598, 488, 200, 565, 466, 722, 525, 151, 853, 541, 271, 782, 583, 272, 729, 302, 155, 638], [222, 866, 230, 598, 488, 200, 565, 722, 525, 853, 541, 271, 782, 583, 272, 729, 302, 155, 638], [222, 866, 230, 598, 488, 200, 565, 722, 525, 853, 541, 271, 782, 583, 272, 729, 302, 155, 638], [130, 466, 722, 151, 638], [130, 466, 722, 151], [130, 466, 722, 151], [], [722, 638], [], [], [222, 866, 130, 230, 598, 488, 200, 565, 466, 722, 525, 151, 853, 541, 271, 782, 583, 272, 729, 302, 155, 638], [222, 866, 130, 230, 598, 488, 200, 565, 466, 722, 525, 151, 853, 541, 271, 782, 583, 272, 729, 302, 155, 638], [222, 866, 130, 230, 598, 488, 200, 565, 466, 722, 525, 151, 853, 541, 271, 782, 583, 272, 729, 302, 155, 638], [], [222, 866, 130, 230, 598, 488, 200, 565, 466, 722, 525, 151, 853, 541, 271, 782, 583, 272, 729, 302, 155, 638], [], [222, 866, 130, 230, 598, 488, 200, 565, 466, 722, 525, 151, 853, 541, 271, 782, 583, 272, 729, 302, 155, 638], [222, 866, 130, 230, 598, 488, 200, 565, 466, 722, 525, 151, 853, 541, 271, 782, 583, 272, 729, 302, 155, 638], [222, 866, 130, 230, 598, 488, 200, 565, 466, 722, 525, 151, 853, 541, 271, 782, 583, 272, 729, 302, 155, 638], [], [], [], [], [222, 866, 130, 598, 488, 200, 565, 466, 722, 151, 853, 541, 271, 782, 272, 729, 302, 155, 638], [], [], [], [], [230, 722, 525, 583, 638], [], [], [], [], [], [500, 812, 586, 222, 866, 332, 742, 210, 130, 230, 598, 918, 488, 200, 886, 565, 735, 466, 796, 543, 377, 722, 525, 406, 201, 635, 151, 853, 541, 721, 167, 218, 734, 7, 271, 435, 70, 782, 583, 272, 729, 207, 90, 302, 155, 759, 638], [], [500, 812, 586, 222, 866, 332, 742, 210, 130, 230, 598, 918, 488, 200, 886, 565, 735, 466, 796, 543, 377, 722, 525, 406, 201, 635, 151, 853, 541, 721, 167, 218, 734, 7, 271, 435, 70, 782, 583, 272, 729, 207, 90, 302, 155, 759, 638], [], []]
