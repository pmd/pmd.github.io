var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":111,"id":37250,"methods":[{"el":24,"sc":5,"sl":20},{"el":30,"sc":5,"sl":26},{"el":41,"sc":5,"sl":32},{"el":57,"sc":5,"sl":43},{"el":63,"sc":5,"sl":59},{"el":69,"sc":5,"sl":65},{"el":76,"sc":5,"sl":72},{"el":82,"sc":5,"sl":78},{"el":88,"sc":5,"sl":84},{"el":106,"sc":5,"sl":90},{"el":110,"sc":5,"sl":108}],"name":"CsTokenizerTest","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_20":{"methods":[{"sl":65},{"sl":108}],"name":"testOpenString","pass":true,"statements":[{"sl":67},{"sl":68},{"sl":109}]},"test_25":{"methods":[{"sl":84},{"sl":108}],"name":"testCommentsIgnored3","pass":true,"statements":[{"sl":86},{"sl":87},{"sl":109}]},"test_298":{"methods":[{"sl":32},{"sl":108}],"name":"testSimpleClassDuplicatedTokens","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":109}]},"test_437":{"methods":[{"sl":78},{"sl":108}],"name":"testCommentsIgnored2","pass":true,"statements":[{"sl":80},{"sl":81},{"sl":109}]},"test_729":{"methods":[{"sl":72},{"sl":108}],"name":"testCommentsIgnored1","pass":true,"statements":[{"sl":74},{"sl":75},{"sl":109}]},"test_77":{"methods":[{"sl":90},{"sl":108}],"name":"testMoreTokens","pass":true,"statements":[{"sl":92},{"sl":105},{"sl":109}]},"test_798":{"methods":[{"sl":26},{"sl":108}],"name":"testSimpleClass","pass":true,"statements":[{"sl":28},{"sl":29},{"sl":109}]},"test_806":{"methods":[{"sl":43},{"sl":108}],"name":"testSimpleClassMethodMultipleLines","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":56},{"sl":109}]},"test_875":{"methods":[{"sl":59},{"sl":108}],"name":"testStrings","pass":true,"statements":[{"sl":61},{"sl":62},{"sl":109}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [798], [], [798], [798], [], [], [298], [], [298], [298], [298], [298], [298], [298], [298], [], [], [806], [], [806], [], [], [], [], [], [], [806], [806], [806], [806], [806], [], [], [875], [], [875], [875], [], [], [20], [], [20], [20], [], [], [], [729], [], [729], [729], [], [], [437], [], [437], [437], [], [], [25], [], [25], [25], [], [], [77], [], [77], [], [], [], [], [], [], [], [], [], [], [], [], [77], [], [], [437, 729, 20, 806, 798, 77, 25, 875, 298], [437, 729, 20, 806, 798, 77, 25, 875, 298], [], []]
