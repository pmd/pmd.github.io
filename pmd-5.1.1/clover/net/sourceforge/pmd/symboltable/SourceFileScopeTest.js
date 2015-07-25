var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":66,"id":42069,"methods":[{"el":23,"sc":5,"sl":17},{"el":30,"sc":5,"sl":25},{"el":37,"sc":5,"sl":32},{"el":47,"sc":5,"sl":39},{"el":65,"sc":5,"sl":63}],"name":"SourceFileScopeTest","sl":15}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_103":{"methods":[{"sl":39}],"name":"testNestedClasses","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":46}]},"test_12":{"methods":[{"sl":32}],"name":"testPackageNameFound","pass":true,"statements":[{"sl":34},{"sl":35},{"sl":36}]},"test_426":{"methods":[{"sl":25}],"name":"testPackageIsEmptyString","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":29}]},"test_613":{"methods":[{"sl":17}],"name":"testClassDeclAppears","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [613], [], [613], [613], [613], [613], [], [], [426], [], [426], [426], [426], [], [], [12], [], [12], [12], [12], [], [], [103], [], [103], [103], [103], [103], [103], [103], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
