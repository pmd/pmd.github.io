var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":14,"id":9889,"methods":[{"el":13,"sc":5,"sl":11}],"name":"Java13Handler","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_656":{"methods":[{"sl":11}],"name":"testAssertAsKeywordFailsWith1_3","pass":true,"statements":[{"sl":12}]},"test_703":{"methods":[{"sl":11}],"name":"testCopyXmlToClipboard","pass":true,"statements":[{"sl":12}]},"test_733":{"methods":[{"sl":11}],"name":"testAssertAsIdentifierSucceedsWith1_3_test2","pass":true,"statements":[{"sl":12}]},"test_878":{"methods":[{"sl":11}],"name":"testAssertAsIdentifierSucceedsWith1_3","pass":true,"statements":[{"sl":12}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [733, 878, 656, 703], [733, 878, 656, 703], [], []]
