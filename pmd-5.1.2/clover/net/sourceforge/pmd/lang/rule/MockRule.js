var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":26805,"methods":[{"el":24,"sc":5,"sl":21},{"el":29,"sc":5,"sl":26},{"el":38,"sc":5,"sl":31},{"el":41,"sc":5,"sl":40}],"name":"MockRule","sl":19}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_134":{"methods":[{"sl":21}],"name":"testLanguageApplies","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_138":{"methods":[{"sl":31}],"name":"testSortedReport_File","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_147":{"methods":[{"sl":21}],"name":"testSetPriority","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_193":{"methods":[{"sl":21}],"name":"testSingleRuleWithPriority","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_194":{"methods":[{"sl":21}],"name":"testXPath","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_209":{"methods":[{"sl":21}],"name":"testDirectDeprecatedRule","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_234":{"methods":[{"sl":21}],"name":"testIncorrectLanguage","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_235":{"methods":[{"sl":31}],"name":"testAddRuleSetByReferenceAllRule","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_258":{"methods":[{"sl":21}],"name":"testMaximumLanugageVersion","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_26":{"methods":[{"sl":31}],"name":"testGetRuleByName","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_268":{"methods":[{"sl":31}],"name":"testIncludesRuleWithDFA","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_312":{"methods":[{"sl":21}],"name":"testMultipleRules","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_316":{"methods":[{"sl":31}],"name":"testTreeIterator","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_326":{"methods":[{"sl":31}],"name":"testSortedReport_Line","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_370":{"methods":[{"sl":21}],"name":"testInvertedMinimumMaximumLanugageVersions","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_376":{"methods":[{"sl":21}],"name":"testMinimumLanugageVersion","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_409":{"methods":[{"sl":31}],"name":"testAddRuleSetByReferenceBad","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_43":{"methods":[{"sl":21}],"name":"testFacadesOffByDefault","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_430":{"methods":[{"sl":21}],"name":"testOverride","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_524":{"methods":[{"sl":21}],"name":"testNotOverride","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_527":{"methods":[{"sl":21}],"name":"testProps","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_55":{"methods":[{"sl":21}],"name":"testLanguage","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_562":{"methods":[{"sl":21}],"name":"testIncorrectMaximumLanugageVersion","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_58":{"methods":[{"sl":31}],"name":"testSummary","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_590":{"methods":[{"sl":31}],"name":"testAddRuleSet","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_643":{"methods":[{"sl":31}],"name":"testRuleList","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_663":{"methods":[{"sl":31}],"name":"testNoDFA","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_68":{"methods":[{"sl":21}],"name":"testDFAFlag","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_680":{"methods":[{"sl":31}],"name":"testGetRuleByName2","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_710":{"methods":[{"sl":21}],"name":"testReferencePriority","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_714":{"methods":[{"sl":31}],"name":"testComparator","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_748":{"methods":[{"sl":31}],"name":"testEquals4","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_749":{"methods":[{"sl":31}],"name":"testAddRuleSetByReferenceSingleRule","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_759":{"methods":[{"sl":21}],"name":"testIncorrectMinimumLanugageVersion","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_793":{"methods":[{"sl":31}],"name":"testEquals6","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_794":{"methods":[{"sl":21}],"name":"testReferenceInternalToInternalChain","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_801":{"methods":[{"sl":21}],"name":"testReferenceInternalToInternal","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_815":{"methods":[{"sl":21}],"name":"testSingleRule","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_859":{"methods":[{"sl":31}],"name":"testListener","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]},"test_871":{"methods":[{"sl":31}],"name":"testEquals5","pass":true,"statements":[{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":36},{"sl":37}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [430, 524, 794, 193, 258, 234, 370, 134, 55, 68, 312, 710, 562, 801, 43, 209, 194, 759, 147, 815, 376, 527], [430, 524, 794, 193, 258, 234, 370, 134, 55, 68, 312, 710, 562, 801, 43, 209, 194, 759, 147, 815, 376, 527], [430, 524, 794, 193, 258, 234, 370, 134, 55, 68, 312, 710, 562, 801, 43, 209, 194, 759, 147, 815, 376, 527], [], [], [], [], [], [], [], [643, 749, 871, 590, 138, 268, 748, 859, 409, 316, 26, 58, 793, 680, 663, 235, 714, 326], [643, 749, 871, 590, 138, 268, 748, 859, 409, 316, 26, 58, 793, 680, 663, 235, 714, 326], [643, 749, 871, 590, 138, 268, 748, 859, 409, 316, 26, 58, 793, 680, 663, 235, 714, 326], [643, 749, 871, 590, 138, 268, 748, 859, 409, 316, 26, 58, 793, 680, 663, 235, 714, 326], [643, 749, 871, 590, 138, 268, 748, 859, 409, 316, 26, 58, 793, 680, 663, 235, 714, 326], [643, 749, 871, 590, 138, 268, 748, 859, 409, 316, 26, 58, 793, 680, 663, 235, 714, 326], [643, 749, 871, 590, 138, 268, 748, 859, 409, 316, 26, 58, 793, 680, 663, 235, 714, 326], [], [], [], [], []]
