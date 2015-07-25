var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":90,"id":34373,"methods":[{"el":46,"sc":5,"sl":43},{"el":50,"sc":5,"sl":48},{"el":54,"sc":5,"sl":52},{"el":73,"sc":5,"sl":56},{"el":84,"sc":5,"sl":75},{"el":89,"sc":5,"sl":86}],"name":"RegexStringFilter","sl":19}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_111":{"methods":[{"sl":43},{"sl":56},{"sl":75}],"name":"minimalArgs","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":57},{"sl":58},{"sl":67},{"sl":68},{"sl":76},{"sl":78},{"sl":79}]},"test_215":{"methods":[{"sl":43},{"sl":56},{"sl":75}],"name":"changeJavaVersion","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":57},{"sl":58},{"sl":67},{"sl":68},{"sl":76},{"sl":78},{"sl":79}]},"test_353":{"methods":[{"sl":43},{"sl":56},{"sl":75}],"name":"usingDebug","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":57},{"sl":58},{"sl":67},{"sl":68},{"sl":76},{"sl":78},{"sl":79}]},"test_384":{"methods":[{"sl":43},{"sl":52},{"sl":56}],"name":"testEndsWith","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":53},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":64},{"sl":67},{"sl":68}]},"test_458":{"methods":[{"sl":43},{"sl":56},{"sl":75}],"name":"testFilterRelativeWithoutExtension","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":64},{"sl":76},{"sl":77}]},"test_477":{"methods":[{"sl":43},{"sl":56},{"sl":75}],"name":"testIncludeExcludeMultipleRuleSetWithRuleChainApplies","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":57},{"sl":58},{"sl":67},{"sl":68},{"sl":76},{"sl":78},{"sl":79}]},"test_547":{"methods":[{"sl":43},{"sl":56},{"sl":75}],"name":"testFilterAbsoluteWithoutExtension","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":57},{"sl":58},{"sl":67},{"sl":68},{"sl":76},{"sl":78},{"sl":79}]},"test_593":{"methods":[{"sl":43},{"sl":56},{"sl":75}],"name":"testIncludeExcludeApplies","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":57},{"sl":58},{"sl":67},{"sl":68},{"sl":76},{"sl":78},{"sl":79}]},"test_612":{"methods":[{"sl":43},{"sl":56},{"sl":75}],"name":"testResourceFileCommands","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":57},{"sl":58},{"sl":67},{"sl":68},{"sl":76},{"sl":78},{"sl":79}]},"test_627":{"methods":[{"sl":43},{"sl":56}],"name":"testPmdOptions","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":57},{"sl":58},{"sl":67},{"sl":68}]},"test_651":{"methods":[{"sl":43},{"sl":56},{"sl":75}],"name":"minimumPriority","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":57},{"sl":58},{"sl":67},{"sl":68},{"sl":76},{"sl":78},{"sl":79}]},"test_772":{"methods":[{"sl":43},{"sl":56},{"sl":75}],"name":"useEcmaScript","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":57},{"sl":58},{"sl":67},{"sl":68},{"sl":76},{"sl":78},{"sl":79}]},"test_947":{"methods":[{"sl":43},{"sl":56},{"sl":75}],"name":"testFilterAbsoluteWithExtension","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":57},{"sl":58},{"sl":67},{"sl":68},{"sl":76},{"sl":78},{"sl":79}]},"test_97":{"methods":[{"sl":43},{"sl":56},{"sl":75}],"name":"testFilterRelativeWithExtension","pass":true,"statements":[{"sl":44},{"sl":45},{"sl":57},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":76},{"sl":77}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [947, 215, 384, 458, 111, 477, 651, 772, 97, 353, 627, 593, 612, 547], [947, 215, 384, 458, 111, 477, 651, 772, 97, 353, 627, 593, 612, 547], [947, 215, 384, 458, 111, 477, 651, 772, 97, 353, 627, 593, 612, 547], [], [], [], [], [], [], [384], [384], [], [], [947, 215, 384, 458, 111, 477, 651, 772, 97, 353, 627, 593, 612, 547], [947, 215, 384, 458, 111, 477, 651, 772, 97, 353, 627, 593, 612, 547], [947, 215, 384, 458, 111, 477, 651, 772, 97, 353, 627, 593, 612, 547], [384, 458, 97], [384, 458, 97], [384, 458, 97], [384, 97], [], [384, 458], [], [], [947, 215, 384, 111, 477, 651, 772, 353, 627, 593, 612, 547], [947, 215, 384, 111, 477, 651, 772, 353, 627, 593, 612, 547], [], [], [], [], [], [], [947, 215, 458, 111, 477, 651, 772, 97, 353, 593, 612, 547], [947, 215, 458, 111, 477, 651, 772, 97, 353, 593, 612, 547], [458, 97], [947, 215, 111, 477, 651, 772, 353, 593, 612, 547], [947, 215, 111, 477, 651, 772, 353, 593, 612, 547], [], [], [], [], [], [], [], [], [], [], []]
