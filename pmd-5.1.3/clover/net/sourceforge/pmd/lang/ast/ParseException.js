var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":23,"id":6728,"methods":[{"el":10,"sc":5,"sl":8},{"el":14,"sc":5,"sl":12},{"el":18,"sc":5,"sl":16},{"el":22,"sc":5,"sl":20}],"name":"ParseException","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_143":{"methods":[{"sl":12}],"name":"testEnumAsKeywordShouldFailWith14","pass":true,"statements":[{"sl":13}]},"test_150":{"methods":[{"sl":12}],"name":"testAnnotationFailsWithJDK14","pass":true,"statements":[{"sl":13}]},"test_234":{"methods":[{"sl":12}],"name":"testVarargsShouldFailWith14","pass":true,"statements":[{"sl":13}]},"test_338":{"methods":[{"sl":12}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":13}]},"test_436":{"methods":[{"sl":12}],"name":"testStaticImportFailsWithJDK14","pass":true,"statements":[{"sl":13}]},"test_515":{"methods":[{"sl":12}],"name":"testMultipleExceptionCatching","pass":true,"statements":[{"sl":13}]},"test_801":{"methods":[{"sl":12}],"name":"testAssertAsKeywordFailsWith1_3","pass":true,"statements":[{"sl":13}]},"test_834":{"methods":[{"sl":12}],"name":"testEnumAsIdentifierShouldFailWith15","pass":true,"statements":[{"sl":13}]},"test_857":{"methods":[{"sl":12}],"name":"testAssertAsVariableDeclIdentifierFailsWith1_4","pass":true,"statements":[{"sl":13}]},"test_913":{"methods":[{"sl":12}],"name":"testJDK15ForLoopShouldFailWith14","pass":true,"statements":[{"sl":13}]},"test_936":{"methods":[{"sl":12}],"name":"testAssertAsMethodNameIdentifierFailsWith1_4","pass":true,"statements":[{"sl":13}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [515, 436, 936, 834, 857, 338, 234, 143, 913, 150, 801], [515, 436, 936, 834, 857, 338, 234, 143, 913, 150, 801], [], [], [], [], [], [], [], [], [], []]
