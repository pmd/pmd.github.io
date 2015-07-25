var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":151,"id":42313,"methods":[{"el":38,"sc":5,"sl":27},{"el":51,"sc":5,"sl":40},{"el":62,"sc":5,"sl":53},{"el":73,"sc":5,"sl":64},{"el":85,"sc":5,"sl":75},{"el":94,"sc":5,"sl":87},{"el":103,"sc":5,"sl":96},{"el":112,"sc":5,"sl":105},{"el":150,"sc":5,"sl":148}],"name":"LocalScopeTest","sl":25}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_322":{"methods":[{"sl":96}],"name":"testMethodArgumentTypesAreRecorded","pass":true,"statements":[{"sl":98},{"sl":99},{"sl":100},{"sl":101},{"sl":102}]},"test_517":{"methods":[{"sl":40}],"name":"testNameWithSuperIsNotFlaggedAsUnused","pass":true,"statements":[{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50}]},"test_617":{"methods":[{"sl":105}],"name":"testgetEnclosingMethodScope","pass":true,"statements":[{"sl":107},{"sl":108},{"sl":109},{"sl":110},{"sl":111}]},"test_649":{"methods":[{"sl":27}],"name":"testNameWithThisOrSuperIsNotFlaggedAsUnused","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_728":{"methods":[{"sl":75}],"name":"testPostfixUsageIsRecorded","pass":true,"statements":[{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84}]},"test_729":{"methods":[{"sl":87}],"name":"testLocalVariableTypesAreRecorded","pass":true,"statements":[{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93}]},"test_886":{"methods":[{"sl":53}],"name":"testLocalVariableDeclarationFound","pass":true,"statements":[{"sl":55},{"sl":56},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61}]},"test_912":{"methods":[{"sl":64}],"name":"testQualifiedNameOccurrence","pass":true,"statements":[{"sl":66},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [649], [], [649], [649], [649], [649], [649], [649], [649], [649], [649], [], [], [517], [], [517], [517], [517], [517], [517], [517], [517], [517], [517], [], [], [886], [], [886], [886], [886], [886], [886], [886], [886], [], [], [912], [], [912], [912], [912], [912], [912], [912], [912], [], [], [728], [], [728], [728], [728], [728], [728], [728], [728], [728], [], [], [729], [], [729], [729], [729], [729], [729], [], [], [322], [], [322], [322], [322], [322], [322], [], [], [617], [], [617], [617], [617], [617], [617], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
