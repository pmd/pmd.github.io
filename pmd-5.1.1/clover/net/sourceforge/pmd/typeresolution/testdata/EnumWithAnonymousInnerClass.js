var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":9,"id":42967,"methods":[{"el":7,"sc":9,"sl":7}],"name":"EnumWithAnonymousInnerClass","sl":3},{"el":5,"id":42967,"methods":[],"name":"EnumWithAnonymousInnerClass.Inner","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], []]
