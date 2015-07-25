var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":14,"id":9915,"methods":[{"el":13,"sc":5,"sl":11}],"name":"Java13Handler","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_165":{"methods":[{"sl":11}],"name":"testAssertAsIdentifierSucceedsWith1_3","pass":true,"statements":[{"sl":12}]},"test_210":{"methods":[{"sl":11}],"name":"testAssertAsIdentifierSucceedsWith1_3_test2","pass":true,"statements":[{"sl":12}]},"test_285":{"methods":[{"sl":11}],"name":"testCopyXmlToClipboard","pass":true,"statements":[{"sl":12}]},"test_532":{"methods":[{"sl":11}],"name":"testAssertAsKeywordFailsWith1_3","pass":true,"statements":[{"sl":12}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [165, 210, 532, 285], [165, 210, 532, 285], [], []]
