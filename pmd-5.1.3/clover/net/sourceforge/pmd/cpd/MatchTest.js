var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":38337,"methods":[{"el":30,"sc":5,"sl":16},{"el":37,"sc":5,"sl":32},{"el":41,"sc":5,"sl":39}],"name":"MatchTest","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_496":{"methods":[{"sl":32}],"name":"testCompareTo","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36}]},"test_905":{"methods":[{"sl":16}],"name":"testSimple","pass":true,"statements":[{"sl":18},{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [905], [], [905], [905], [905], [905], [905], [905], [905], [905], [905], [905], [905], [905], [], [], [496], [], [496], [496], [496], [], [], [], [], [], []]
