var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":33,"id":2067,"methods":[{"el":16,"sc":5,"sl":14},{"el":20,"sc":2,"sl":18},{"el":24,"sc":2,"sl":22},{"el":28,"sc":2,"sl":26},{"el":32,"sc":2,"sl":30}],"name":"SourceLanguage","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_195":{"methods":[{"sl":14},{"sl":18},{"sl":22},{"sl":26}],"name":"testEcmascript","pass":true,"statements":[{"sl":15},{"sl":19},{"sl":23},{"sl":27}]},"test_440":{"methods":[{"sl":14},{"sl":18},{"sl":22},{"sl":26},{"sl":30}],"name":"testInvalidLanguageVersion","pass":true,"statements":[{"sl":15},{"sl":19},{"sl":23},{"sl":27},{"sl":31}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [440, 195], [440, 195], [], [], [440, 195], [440, 195], [], [], [440, 195], [440, 195], [], [], [440, 195], [440, 195], [], [], [440], [440], [], []]
