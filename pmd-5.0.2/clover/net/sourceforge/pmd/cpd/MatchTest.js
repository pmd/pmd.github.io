var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":44,"id":30983,"methods":[{"el":32,"sc":5,"sl":18},{"el":39,"sc":5,"sl":34},{"el":43,"sc":5,"sl":41}],"name":"MatchTest","sl":16}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_255":{"methods":[{"sl":18}],"name":"testSimple","pass":true,"statements":[{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":30},{"sl":31}]},"test_332":{"methods":[{"sl":34}],"name":"testCompareTo","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [255], [], [255], [255], [255], [255], [255], [255], [255], [255], [255], [255], [255], [255], [], [], [332], [], [332], [332], [332], [], [], [], [], [], []]
