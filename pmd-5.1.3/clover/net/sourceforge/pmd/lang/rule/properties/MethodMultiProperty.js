var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":142,"id":28101,"methods":[{"el":33,"sc":3,"sl":26},{"el":48,"sc":5,"sl":46},{"el":62,"sc":5,"sl":60},{"el":76,"sc":5,"sl":74},{"el":91,"sc":5,"sl":82},{"el":103,"sc":5,"sl":100},{"el":114,"sc":5,"sl":109},{"el":122,"sc":5,"sl":119},{"el":131,"sc":5,"sl":129},{"el":141,"sc":5,"sl":139}],"name":"MethodMultiProperty","sl":22}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_465":{"methods":[{"sl":46},{"sl":109},{"sl":119},{"sl":129}],"name":"testErrorForBad","pass":true,"statements":[{"sl":47},{"sl":112},{"sl":113},{"sl":121},{"sl":130}]},"test_505":{"methods":[{"sl":46},{"sl":109},{"sl":129}],"name":"testErrorFor","pass":true,"statements":[{"sl":47},{"sl":112},{"sl":113},{"sl":130}]},"test_551":{"methods":[{"sl":46},{"sl":82},{"sl":100},{"sl":109},{"sl":139}],"name":"testAsDelimitedString","pass":true,"statements":[{"sl":47},{"sl":84},{"sl":86},{"sl":87},{"sl":88},{"sl":90},{"sl":102},{"sl":112},{"sl":113},{"sl":140}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [505, 465, 551], [505, 465, 551], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [551], [], [551], [], [551], [551], [551], [], [551], [], [], [], [], [], [], [], [], [], [551], [], [551], [], [], [], [], [], [], [505, 465, 551], [], [], [505, 465, 551], [505, 465, 551], [], [], [], [], [], [465], [], [465], [], [], [], [], [], [], [], [505, 465], [505, 465], [], [], [], [], [], [], [], [], [551], [551], [], []]
