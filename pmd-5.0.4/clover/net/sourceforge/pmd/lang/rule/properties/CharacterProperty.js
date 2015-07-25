var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":90,"id":23342,"methods":[{"el":27,"sc":3,"sl":21},{"el":39,"sc":2,"sl":37},{"el":51,"sc":5,"sl":49},{"el":63,"sc":5,"sl":57},{"el":71,"sc":2,"sl":69},{"el":81,"sc":2,"sl":79},{"el":89,"sc":5,"sl":87}],"name":"CharacterProperty","sl":17}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_100":{"methods":[{"sl":37}],"name":"testConstructors","pass":true,"statements":[{"sl":38}]},"test_200":{"methods":[{"sl":37},{"sl":69}],"name":"testType","pass":true,"statements":[{"sl":38},{"sl":70}]},"test_240":{"methods":[{"sl":37},{"sl":57},{"sl":79}],"name":"testValueFrom","pass":true,"statements":[{"sl":38},{"sl":59},{"sl":62},{"sl":80}]},"test_244":{"methods":[{"sl":21},{"sl":37},{"sl":57},{"sl":79}],"name":"testProps","pass":true,"statements":[{"sl":22},{"sl":38},{"sl":59},{"sl":62},{"sl":80}]},"test_254":{"methods":[{"sl":37},{"sl":57},{"sl":79}],"name":"testAll","pass":true,"statements":[{"sl":38},{"sl":59},{"sl":62},{"sl":80}]},"test_597":{"methods":[{"sl":37},{"sl":69}],"name":"testErrorFor","pass":true,"statements":[{"sl":38},{"sl":70}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [244], [244], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [254, 100, 244, 200, 597, 240], [254, 100, 244, 200, 597, 240], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [254, 244, 240], [], [254, 244, 240], [], [], [254, 244, 240], [], [], [], [], [], [], [200, 597], [200, 597], [], [], [], [], [], [], [], [], [254, 244, 240], [254, 244, 240], [], [], [], [], [], [], [], [], [], []]
