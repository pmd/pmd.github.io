var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":39182,"methods":[{"el":41,"sc":5,"sl":20}],"name":"SourceCodePositionerTest","sl":13}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_123":{"methods":[{"sl":20}],"name":"testLineNumberFromOffset","pass":true,"statements":[{"sl":22},{"sl":24},{"sl":26},{"sl":27},{"sl":28},{"sl":30},{"sl":31},{"sl":32},{"sl":34},{"sl":35},{"sl":36},{"sl":38},{"sl":39},{"sl":40}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [123], [], [123], [], [123], [], [123], [123], [123], [], [123], [123], [123], [], [123], [123], [123], [], [123], [123], [123], [], []]
