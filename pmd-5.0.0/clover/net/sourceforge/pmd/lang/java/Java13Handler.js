var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":11,"id":11494,"methods":[{"el":10,"sc":5,"sl":8}],"name":"Java13Handler","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1122":{"methods":[{"sl":8}],"name":"testAssertAsIdentifierSucceedsWith1_3_test2","pass":true,"statements":[{"sl":9}]},"test_142":{"methods":[{"sl":8}],"name":"testAssertAsIdentifierSucceedsWith1_3","pass":true,"statements":[{"sl":9}]},"test_1644":{"methods":[{"sl":8}],"name":"testAssertAsKeywordFailsWith1_3","pass":true,"statements":[{"sl":9}]},"test_1663":{"methods":[{"sl":8}],"name":"testAssertAsIdentifierSucceedsWith1_3","pass":true,"statements":[{"sl":9}]},"test_1666":{"methods":[{"sl":8}],"name":"testAssertAsIdentifierSucceedsWith1_3","pass":true,"statements":[{"sl":9}]},"test_322":{"methods":[{"sl":8}],"name":"testAssertAsKeywordFailsWith1_3","pass":true,"statements":[{"sl":9}]},"test_340":{"methods":[{"sl":8}],"name":"testAssertAsKeywordFailsWith1_3","pass":true,"statements":[{"sl":9}]},"test_385":{"methods":[{"sl":8}],"name":"testAssertAsIdentifierSucceedsWith1_3_test2","pass":true,"statements":[{"sl":9}]},"test_973":{"methods":[{"sl":8}],"name":"testAssertAsIdentifierSucceedsWith1_3_test2","pass":true,"statements":[{"sl":9}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [142, 1666, 1644, 340, 1122, 1663, 385, 973, 322], [142, 1666, 1644, 340, 1122, 1663, 385, 973, 322], [], []]
