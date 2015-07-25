var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":26988,"methods":[{"el":25,"sc":5,"sl":23},{"el":34,"sc":5,"sl":31},{"el":41,"sc":5,"sl":39}],"name":"AbstractMultiPackagedProperty","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_109":{"methods":[{"sl":23}],"name":"testAsDelimitedString","pass":true,"statements":[{"sl":24}]},"test_223":{"methods":[{"sl":23},{"sl":31}],"name":"testErrorFor","pass":true,"statements":[{"sl":24},{"sl":33}]},"test_386":{"methods":[{"sl":23},{"sl":31}],"name":"testErrorFor","pass":true,"statements":[{"sl":24},{"sl":33}]},"test_497":{"methods":[{"sl":23},{"sl":31}],"name":"testErrorForBad","pass":true,"statements":[{"sl":24},{"sl":33}]},"test_629":{"methods":[{"sl":23},{"sl":31}],"name":"testErrorForBad","pass":true,"statements":[{"sl":24},{"sl":33}]},"test_83":{"methods":[{"sl":23}],"name":"testAsDelimitedString","pass":true,"statements":[{"sl":24}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [386, 629, 83, 109, 497, 223], [386, 629, 83, 109, 497, 223], [], [], [], [], [], [], [386, 629, 497, 223], [], [386, 629, 497, 223], [], [], [], [], [], [], [], [], []]
