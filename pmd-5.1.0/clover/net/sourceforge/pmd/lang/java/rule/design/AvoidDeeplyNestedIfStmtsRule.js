var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":45,"id":15344,"methods":[{"el":26,"sc":5,"sl":24},{"el":32,"sc":5,"sl":28},{"el":44,"sc":5,"sl":34}],"name":"AvoidDeeplyNestedIfStmtsRule","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_136":{"methods":[{"sl":24}],"name":"usingDebug","pass":true,"statements":[{"sl":25}]},"test_266":{"methods":[{"sl":24}],"name":"testExtendedReferences","pass":true,"statements":[{"sl":25}]},"test_290":{"methods":[{"sl":24}],"name":"minimalArgs","pass":true,"statements":[{"sl":25}]},"test_309":{"methods":[{"sl":24}],"name":"testAllPMDBuiltInRulesMeetConventions","pass":true,"statements":[{"sl":25}]},"test_315":{"methods":[{"sl":24},{"sl":28},{"sl":34}],"name":"testAbstractNames","pass":true,"statements":[{"sl":25},{"sl":29},{"sl":30},{"sl":31},{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":42},{"sl":43}]},"test_345":{"methods":[{"sl":24},{"sl":28},{"sl":34}],"name":"testAbstractNamesInNestedRuleset","pass":true,"statements":[{"sl":25},{"sl":29},{"sl":30},{"sl":31},{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":42},{"sl":43}]},"test_393":{"methods":[{"sl":24},{"sl":28},{"sl":34}],"name":"testNestedRuleset","pass":true,"statements":[{"sl":25},{"sl":29},{"sl":30},{"sl":31},{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":42},{"sl":43}]},"test_398":{"methods":[{"sl":24},{"sl":28},{"sl":34}],"name":"testPmdOptions","pass":true,"statements":[{"sl":25},{"sl":29},{"sl":30},{"sl":31},{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":40},{"sl":42},{"sl":43}]},"test_421":{"methods":[{"sl":24},{"sl":28},{"sl":34}],"name":"testRelativeRulesetsInRulesetfiles","pass":true,"statements":[{"sl":25},{"sl":29},{"sl":30},{"sl":31},{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":42},{"sl":43}]},"test_442":{"methods":[{"sl":24},{"sl":28},{"sl":34}],"name":"testFormatterWithProperties","pass":true,"statements":[{"sl":25},{"sl":29},{"sl":30},{"sl":31},{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":42},{"sl":43}]},"test_485":{"methods":[{"sl":24},{"sl":28},{"sl":34}],"name":"testNoFormattersValidation","pass":true,"statements":[{"sl":25},{"sl":29},{"sl":30},{"sl":31},{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":42},{"sl":43}]},"test_527":{"methods":[{"sl":24},{"sl":28},{"sl":34}],"name":"testCommaInRulesetfiles","pass":true,"statements":[{"sl":25},{"sl":29},{"sl":30},{"sl":31},{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":42},{"sl":43}]},"test_698":{"methods":[{"sl":24}],"name":"changeJavaVersion","pass":true,"statements":[{"sl":25}]},"test_752":{"methods":[{"sl":24}],"name":"testReadWriteRoundTrip","pass":true,"statements":[{"sl":25}]},"test_862":{"methods":[{"sl":24},{"sl":28},{"sl":34}],"name":"testRelativeRulesets","pass":true,"statements":[{"sl":25},{"sl":29},{"sl":30},{"sl":31},{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":42},{"sl":43}]},"test_902":{"methods":[{"sl":24},{"sl":28},{"sl":34}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":25},{"sl":29},{"sl":30},{"sl":31},{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":40},{"sl":42},{"sl":43}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [309, 527, 345, 485, 421, 266, 290, 442, 862, 752, 698, 136, 393, 902, 398, 315], [309, 527, 345, 485, 421, 266, 290, 442, 862, 752, 698, 136, 393, 902, 398, 315], [], [], [527, 345, 485, 421, 442, 862, 393, 902, 398, 315], [527, 345, 485, 421, 442, 862, 393, 902, 398, 315], [527, 345, 485, 421, 442, 862, 393, 902, 398, 315], [527, 345, 485, 421, 442, 862, 393, 902, 398, 315], [], [], [527, 345, 485, 421, 442, 862, 393, 902, 398, 315], [527, 345, 485, 421, 442, 862, 393, 902, 398, 315], [527, 345, 485, 421, 442, 862, 393, 902, 398, 315], [], [527, 345, 485, 421, 442, 862, 393, 902, 398, 315], [527, 345, 485, 421, 442, 862, 393, 902, 398, 315], [902, 398], [], [527, 345, 485, 421, 442, 862, 393, 902, 398, 315], [527, 345, 485, 421, 442, 862, 393, 902, 398, 315], [], []]
