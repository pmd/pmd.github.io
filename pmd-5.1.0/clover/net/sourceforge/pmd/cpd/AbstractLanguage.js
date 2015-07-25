var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":31,"id":2668,"methods":[{"el":18,"sc":2,"sl":15},{"el":22,"sc":2,"sl":20},{"el":26,"sc":2,"sl":24},{"el":30,"sc":2,"sl":28}],"name":"AbstractLanguage","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_11":{"methods":[{"sl":15},{"sl":24}],"name":"testSimple","pass":true,"statements":[{"sl":16},{"sl":17},{"sl":25}]},"test_410":{"methods":[{"sl":15},{"sl":20},{"sl":24}],"name":"testIgnoreIdentifiers","pass":true,"statements":[{"sl":16},{"sl":17},{"sl":21},{"sl":25}]},"test_59":{"methods":[{"sl":15},{"sl":24}],"name":"testBasic","pass":true,"statements":[{"sl":16},{"sl":17},{"sl":25}]},"test_60":{"methods":[{"sl":24}],"name":"testFileAddedWithRelativePath","pass":true,"statements":[{"sl":25}]},"test_621":{"methods":[{"sl":15},{"sl":20},{"sl":24}],"name":"testExcludes","pass":true,"statements":[{"sl":16},{"sl":17},{"sl":21},{"sl":25}]},"test_747":{"methods":[{"sl":15},{"sl":20},{"sl":24}],"name":"testEncodingOption","pass":true,"statements":[{"sl":16},{"sl":17},{"sl":21},{"sl":25}]},"test_909":{"methods":[{"sl":24}],"name":"testFileAddedAsSymlinkAndReal","pass":true,"statements":[{"sl":25}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [11, 747, 59, 410, 621], [11, 747, 59, 410, 621], [11, 747, 59, 410, 621], [], [], [747, 410, 621], [747, 410, 621], [], [], [909, 11, 747, 60, 59, 410, 621], [909, 11, 747, 60, 59, 410, 621], [], [], [], [], [], []]
