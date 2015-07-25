var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":29,"id":9370,"methods":[{"el":21,"sc":5,"sl":19},{"el":28,"sc":5,"sl":23}],"name":"Java13Parser","sl":17}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_304":{"methods":[{"sl":19},{"sl":23}],"name":"testAssertAsKeywordFailsWith1_3","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_317":{"methods":[{"sl":19},{"sl":23}],"name":"testAssertAsIdentifierSucceedsWith1_3","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]},"test_756":{"methods":[{"sl":19},{"sl":23}],"name":"testAssertAsIdentifierSucceedsWith1_3_test2","pass":true,"statements":[{"sl":20},{"sl":25},{"sl":26},{"sl":27}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [317, 756, 304], [317, 756, 304], [], [], [317, 756, 304], [], [317, 756, 304], [317, 756, 304], [317, 756, 304], [], []]
