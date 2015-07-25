var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":628,"id":23811,"methods":[{"el":64,"sc":5,"sl":62},{"el":106,"sc":5,"sl":66},{"el":118,"sc":6,"sl":109},{"el":129,"sc":6,"sl":120},{"el":139,"sc":6,"sl":131},{"el":149,"sc":6,"sl":141},{"el":159,"sc":6,"sl":151},{"el":169,"sc":6,"sl":161},{"el":181,"sc":5,"sl":173},{"el":233,"sc":5,"sl":183},{"el":240,"sc":5,"sl":235},{"el":263,"sc":5,"sl":248},{"el":282,"sc":5,"sl":271},{"el":367,"sc":5,"sl":288},{"el":380,"sc":5,"sl":369},{"el":409,"sc":5,"sl":382},{"el":429,"sc":7,"sl":411},{"el":491,"sc":7,"sl":431},{"el":514,"sc":7,"sl":493},{"el":527,"sc":7,"sl":516},{"el":545,"sc":5,"sl":536},{"el":563,"sc":5,"sl":554},{"el":581,"sc":5,"sl":572},{"el":592,"sc":5,"sl":583},{"el":603,"sc":5,"sl":594},{"el":627,"sc":5,"sl":609}],"name":"StatementAndBraceFinder","sl":56}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_125":{"methods":[{"sl":62},{"sl":66}],"name":"testOnlyWorksForMethodsAndConstructors","pass":true,"statements":[{"sl":63},{"sl":67},{"sl":68}]},"test_231":{"methods":[{"sl":62},{"sl":66},{"sl":173},{"sl":183},{"sl":288},{"sl":369}],"name":"testVariableOrConstantDeclaratorParentChildLinks","pass":true,"statements":[{"sl":63},{"sl":67},{"sl":68},{"sl":74},{"sl":83},{"sl":84},{"sl":85},{"sl":87},{"sl":89},{"sl":91},{"sl":95},{"sl":96},{"sl":97},{"sl":105},{"sl":174},{"sl":177},{"sl":178},{"sl":179},{"sl":180},{"sl":184},{"sl":185},{"sl":189},{"sl":192},{"sl":193},{"sl":194},{"sl":232},{"sl":289},{"sl":290},{"sl":294},{"sl":296},{"sl":304},{"sl":315},{"sl":317},{"sl":334},{"sl":346},{"sl":358},{"sl":362},{"sl":366},{"sl":370},{"sl":373},{"sl":374},{"sl":375},{"sl":379}]},"test_273":{"methods":[{"sl":62},{"sl":66},{"sl":183},{"sl":288},{"sl":369}],"name":"testExpressionParentChildLinks","pass":true,"statements":[{"sl":63},{"sl":67},{"sl":68},{"sl":74},{"sl":83},{"sl":84},{"sl":85},{"sl":87},{"sl":89},{"sl":91},{"sl":95},{"sl":96},{"sl":97},{"sl":105},{"sl":184},{"sl":185},{"sl":189},{"sl":192},{"sl":193},{"sl":194},{"sl":197},{"sl":201},{"sl":206},{"sl":210},{"sl":214},{"sl":226},{"sl":232},{"sl":289},{"sl":290},{"sl":294},{"sl":296},{"sl":304},{"sl":315},{"sl":317},{"sl":334},{"sl":346},{"sl":358},{"sl":362},{"sl":366},{"sl":370},{"sl":373},{"sl":374},{"sl":375},{"sl":379}]},"test_28":{"methods":[{"sl":62},{"sl":66},{"sl":183},{"sl":288},{"sl":369},{"sl":382},{"sl":411},{"sl":493}],"name":"testSimpleCaseStmtHasCorrectTypes","pass":true,"statements":[{"sl":63},{"sl":67},{"sl":68},{"sl":74},{"sl":83},{"sl":84},{"sl":85},{"sl":87},{"sl":89},{"sl":91},{"sl":95},{"sl":96},{"sl":97},{"sl":105},{"sl":184},{"sl":185},{"sl":189},{"sl":192},{"sl":193},{"sl":194},{"sl":197},{"sl":201},{"sl":206},{"sl":210},{"sl":211},{"sl":212},{"sl":213},{"sl":214},{"sl":226},{"sl":232},{"sl":289},{"sl":290},{"sl":294},{"sl":296},{"sl":304},{"sl":315},{"sl":317},{"sl":318},{"sl":319},{"sl":334},{"sl":346},{"sl":358},{"sl":362},{"sl":366},{"sl":370},{"sl":373},{"sl":374},{"sl":375},{"sl":379},{"sl":383},{"sl":386},{"sl":396},{"sl":404},{"sl":406},{"sl":407},{"sl":408},{"sl":412},{"sl":415},{"sl":420},{"sl":421},{"sl":423},{"sl":426},{"sl":427},{"sl":428},{"sl":494},{"sl":497},{"sl":499},{"sl":507},{"sl":508},{"sl":511},{"sl":513}]},"test_289":{"methods":[{"sl":62},{"sl":66},{"sl":183},{"sl":288},{"sl":369},{"sl":609}],"name":"testForStmtHasCorrectTypes","pass":true,"statements":[{"sl":63},{"sl":67},{"sl":68},{"sl":74},{"sl":83},{"sl":84},{"sl":85},{"sl":87},{"sl":89},{"sl":91},{"sl":95},{"sl":96},{"sl":97},{"sl":105},{"sl":184},{"sl":185},{"sl":189},{"sl":192},{"sl":193},{"sl":194},{"sl":197},{"sl":201},{"sl":206},{"sl":210},{"sl":214},{"sl":219},{"sl":221},{"sl":222},{"sl":223},{"sl":225},{"sl":232},{"sl":289},{"sl":290},{"sl":294},{"sl":296},{"sl":297},{"sl":298},{"sl":300},{"sl":301},{"sl":302},{"sl":304},{"sl":315},{"sl":317},{"sl":334},{"sl":346},{"sl":347},{"sl":348},{"sl":349},{"sl":350},{"sl":353},{"sl":355},{"sl":356},{"sl":358},{"sl":362},{"sl":366},{"sl":370},{"sl":373},{"sl":374},{"sl":375},{"sl":379},{"sl":610},{"sl":611},{"sl":613},{"sl":614},{"sl":615},{"sl":619}]},"test_454":{"methods":[{"sl":62},{"sl":66},{"sl":183},{"sl":235},{"sl":288},{"sl":369}],"name":"testLabelledStmtHasCorrectTypes","pass":true,"statements":[{"sl":63},{"sl":67},{"sl":68},{"sl":74},{"sl":83},{"sl":84},{"sl":85},{"sl":87},{"sl":89},{"sl":91},{"sl":95},{"sl":96},{"sl":97},{"sl":105},{"sl":184},{"sl":185},{"sl":189},{"sl":192},{"sl":193},{"sl":194},{"sl":232},{"sl":236},{"sl":237},{"sl":238},{"sl":239},{"sl":289},{"sl":290},{"sl":294},{"sl":296},{"sl":304},{"sl":315},{"sl":317},{"sl":334},{"sl":346},{"sl":358},{"sl":362},{"sl":366},{"sl":370},{"sl":373},{"sl":374},{"sl":375},{"sl":376},{"sl":377},{"sl":379}]},"test_540":{"methods":[{"sl":62},{"sl":66},{"sl":183},{"sl":271},{"sl":288},{"sl":369}],"name":"testWhileStmtHasCorrectTypes","pass":true,"statements":[{"sl":63},{"sl":67},{"sl":68},{"sl":74},{"sl":83},{"sl":84},{"sl":85},{"sl":87},{"sl":89},{"sl":91},{"sl":95},{"sl":96},{"sl":97},{"sl":105},{"sl":184},{"sl":185},{"sl":189},{"sl":192},{"sl":193},{"sl":194},{"sl":197},{"sl":201},{"sl":206},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":214},{"sl":226},{"sl":232},{"sl":272},{"sl":273},{"sl":279},{"sl":281},{"sl":289},{"sl":290},{"sl":294},{"sl":296},{"sl":304},{"sl":315},{"sl":317},{"sl":334},{"sl":335},{"sl":336},{"sl":337},{"sl":338},{"sl":341},{"sl":343},{"sl":344},{"sl":346},{"sl":358},{"sl":362},{"sl":366},{"sl":370},{"sl":373},{"sl":374},{"sl":375},{"sl":379}]},"test_707":{"methods":[{"sl":62},{"sl":66},{"sl":183},{"sl":288},{"sl":369},{"sl":431}],"name":"testIfStmtHasCorrectTypes","pass":true,"statements":[{"sl":63},{"sl":67},{"sl":68},{"sl":74},{"sl":83},{"sl":84},{"sl":85},{"sl":87},{"sl":89},{"sl":91},{"sl":95},{"sl":96},{"sl":97},{"sl":105},{"sl":184},{"sl":185},{"sl":189},{"sl":192},{"sl":193},{"sl":194},{"sl":197},{"sl":198},{"sl":199},{"sl":200},{"sl":201},{"sl":206},{"sl":210},{"sl":214},{"sl":226},{"sl":232},{"sl":289},{"sl":290},{"sl":294},{"sl":296},{"sl":304},{"sl":315},{"sl":317},{"sl":334},{"sl":346},{"sl":358},{"sl":362},{"sl":366},{"sl":370},{"sl":373},{"sl":374},{"sl":375},{"sl":379},{"sl":432},{"sl":435},{"sl":436},{"sl":437},{"sl":447},{"sl":448},{"sl":449},{"sl":454},{"sl":455},{"sl":490}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [540, 289, 28, 273, 231, 707, 454, 125], [540, 289, 28, 273, 231, 707, 454, 125], [], [], [540, 289, 28, 273, 231, 707, 454, 125], [540, 289, 28, 273, 231, 707, 454, 125], [540, 289, 28, 273, 231, 707, 454, 125], [], [], [], [], [], [540, 289, 28, 273, 231, 707, 454], [], [], [], [], [], [], [], [], [540, 289, 28, 273, 231, 707, 454], [540, 289, 28, 273, 231, 707, 454], [540, 289, 28, 273, 231, 707, 454], [], [540, 289, 28, 273, 231, 707, 454], [], [540, 289, 28, 273, 231, 707, 454], [], [540, 289, 28, 273, 231, 707, 454], [], [], [], [540, 289, 28, 273, 231, 707, 454], [540, 289, 28, 273, 231, 707, 454], [540, 289, 28, 273, 231, 707, 454], [], [], [], [], [], [], [], [540, 289, 28, 273, 231, 707, 454], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [231], [231], [], [], [231], [231], [231], [231], [], [], [540, 289, 28, 273, 231, 707, 454], [540, 289, 28, 273, 231, 707, 454], [540, 289, 28, 273, 231, 707, 454], [], [], [], [540, 289, 28, 273, 231, 707, 454], [], [], [540, 289, 28, 273, 231, 707, 454], [540, 289, 28, 273, 231, 707, 454], [540, 289, 28, 273, 231, 707, 454], [], [], [540, 289, 28, 273, 707], [707], [707], [707], [540, 289, 28, 273, 707], [], [], [], [], [540, 289, 28, 273, 707], [540], [540], [540], [540, 289, 28, 273, 707], [28], [28], [28], [540, 289, 28, 273, 707], [], [], [], [], [289], [], [289], [289], [289], [], [289], [540, 28, 273, 707], [], [], [], [], [], [540, 289, 28, 273, 231, 707, 454], [], [], [454], [454], [454], [454], [454], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [540], [540], [540], [], [], [], [], [], [540], [], [540], [], [], [], [], [], [], [540, 289, 28, 273, 231, 707, 454], [540, 289, 28, 273, 231, 707, 454], [540, 289, 28, 273, 231, 707, 454], [], [], [], [540, 289, 28, 273, 231, 707, 454], [], [540, 289, 28, 273, 231, 707, 454], [289], [289], [], [289], [289], [289], [], [540, 289, 28, 273, 231, 707, 454], [], [], [], [], [], [], [], [], [], [], [540, 289, 28, 273, 231, 707, 454], [], [540, 289, 28, 273, 231, 707, 454], [28], [28], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [540, 289, 28, 273, 231, 707, 454], [540], [540], [540], [540], [], [], [540], [], [540], [540], [], [540, 289, 28, 273, 231, 707, 454], [289], [289], [289], [289], [], [], [289], [], [289], [289], [], [540, 289, 28, 273, 231, 707, 454], [], [], [], [540, 289, 28, 273, 231, 707, 454], [], [], [], [540, 289, 28, 273, 231, 707, 454], [], [], [540, 289, 28, 273, 231, 707, 454], [540, 289, 28, 273, 231, 707, 454], [], [], [540, 289, 28, 273, 231, 707, 454], [540, 289, 28, 273, 231, 707, 454], [540, 289, 28, 273, 231, 707, 454], [454], [454], [], [540, 289, 28, 273, 231, 707, 454], [], [], [28], [28], [], [], [28], [], [], [], [], [], [], [], [], [], [28], [], [], [], [], [], [], [], [28], [], [28], [28], [28], [], [], [28], [28], [], [], [28], [], [], [], [], [28], [28], [], [28], [], [], [28], [28], [28], [], [], [707], [707], [], [], [707], [707], [707], [], [], [], [], [], [], [], [], [], [707], [707], [707], [], [], [], [], [707], [707], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [707], [], [], [28], [28], [], [], [28], [], [28], [], [], [], [], [], [], [], [28], [28], [], [], [28], [], [28], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [289], [289], [289], [], [289], [289], [289], [], [], [], [289], [], [], [], [], [], [], [], [], []]
