var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":23,"id":6667,"methods":[{"el":10,"sc":5,"sl":8},{"el":14,"sc":5,"sl":12},{"el":18,"sc":5,"sl":16},{"el":22,"sc":5,"sl":20}],"name":"ParseException","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_265":{"methods":[{"sl":12}],"name":"testEnumAsKeywordShouldFailWith14","pass":true,"statements":[{"sl":13}]},"test_309":{"methods":[{"sl":12}],"name":"testAnnotationFailsWithJDK14","pass":true,"statements":[{"sl":13}]},"test_411":{"methods":[{"sl":12}],"name":"testVarargsShouldFailWith14","pass":true,"statements":[{"sl":13}]},"test_424":{"methods":[{"sl":12}],"name":"testJDK15ForLoopShouldFailWith14","pass":true,"statements":[{"sl":13}]},"test_438":{"methods":[{"sl":12}],"name":"testMultipleExceptionCatching","pass":true,"statements":[{"sl":13}]},"test_567":{"methods":[{"sl":12}],"name":"testAssertAsVariableDeclIdentifierFailsWith1_4","pass":true,"statements":[{"sl":13}]},"test_656":{"methods":[{"sl":12}],"name":"testAssertAsKeywordFailsWith1_3","pass":true,"statements":[{"sl":13}]},"test_68":{"methods":[{"sl":12}],"name":"testStaticImportFailsWithJDK14","pass":true,"statements":[{"sl":13}]},"test_722":{"methods":[{"sl":12}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":13}]},"test_833":{"methods":[{"sl":12}],"name":"testEnumAsIdentifierShouldFailWith15","pass":true,"statements":[{"sl":13}]},"test_876":{"methods":[{"sl":12}],"name":"testAssertAsMethodNameIdentifierFailsWith1_4","pass":true,"statements":[{"sl":13}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [424, 567, 876, 68, 438, 411, 722, 265, 309, 656, 833], [424, 567, 876, 68, 438, 411, 722, 265, 309, 656, 833], [], [], [], [], [], [], [], [], [], []]
