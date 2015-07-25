var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":132,"id":37389,"methods":[{"el":25,"sc":5,"sl":19},{"el":43,"sc":5,"sl":30},{"el":62,"sc":5,"sl":50},{"el":77,"sc":5,"sl":68},{"el":93,"sc":5,"sl":83},{"el":106,"sc":5,"sl":99}],"name":"CPDTest","sl":16},{"el":131,"id":37440,"methods":[{"el":117,"sc":9,"sl":114},{"el":123,"sc":9,"sl":118},{"el":126,"sc":9,"sl":124},{"el":130,"sc":9,"sl":127}],"name":"CPDTest.NoFileAssertListener","sl":111}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_184":{"methods":[{"sl":99},{"sl":114},{"sl":118},{"sl":127}],"name":"testFileAddedWithRelativePath","pass":true,"statements":[{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":115},{"sl":116},{"sl":119},{"sl":120},{"sl":128}]},"test_728":{"methods":[{"sl":83},{"sl":114},{"sl":118},{"sl":127}],"name":"testFileAddedAsSymlinkAndReal","pass":true,"statements":[{"sl":85},{"sl":86},{"sl":87},{"sl":89},{"sl":90},{"sl":91},{"sl":115},{"sl":116},{"sl":119},{"sl":120},{"sl":128}]},"test_929":{"methods":[{"sl":68},{"sl":114},{"sl":127}],"name":"testFileSectionWithBrokenSymlinks","pass":true,"statements":[{"sl":70},{"sl":71},{"sl":72},{"sl":74},{"sl":75},{"sl":115},{"sl":116},{"sl":128}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [929], [], [929], [929], [929], [], [929], [929], [], [], [], [], [], [], [], [728], [], [728], [728], [728], [], [728], [728], [728], [], [], [], [], [], [], [], [184], [], [184], [184], [], [184], [184], [], [], [], [], [], [], [], [], [929, 728, 184], [929, 728, 184], [929, 728, 184], [], [728, 184], [728, 184], [728, 184], [], [], [], [], [], [], [929, 728, 184], [929, 728, 184], [], [], [], []]
