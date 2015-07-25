var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":27211,"methods":[{"el":25,"sc":5,"sl":23},{"el":34,"sc":5,"sl":31},{"el":41,"sc":5,"sl":39}],"name":"AbstractMultiPackagedProperty","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_171":{"methods":[{"sl":23},{"sl":31}],"name":"testErrorForBad","pass":true,"statements":[{"sl":24},{"sl":33}]},"test_335":{"methods":[{"sl":23},{"sl":31}],"name":"testErrorFor","pass":true,"statements":[{"sl":24},{"sl":33}]},"test_428":{"methods":[{"sl":23}],"name":"testAsDelimitedString","pass":true,"statements":[{"sl":24}]},"test_770":{"methods":[{"sl":23},{"sl":31}],"name":"testErrorFor","pass":true,"statements":[{"sl":24},{"sl":33}]},"test_803":{"methods":[{"sl":23},{"sl":31}],"name":"testErrorForBad","pass":true,"statements":[{"sl":24},{"sl":33}]},"test_831":{"methods":[{"sl":23}],"name":"testAsDelimitedString","pass":true,"statements":[{"sl":24}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [831, 335, 428, 770, 171, 803], [831, 335, 428, 770, 171, 803], [], [], [], [], [], [], [335, 770, 171, 803], [], [335, 770, 171, 803], [], [], [], [], [], [], [], [], []]
