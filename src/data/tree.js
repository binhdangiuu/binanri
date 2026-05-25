const tree = [
   {
    "id": 1,
    "chapter": "Tree",
    "question": {
      "main": "Consider the following scenarios when inserting keys into an empty AVL tree:",
      "statements": [
        "a. Insert 3, 2, 1 sequentially → the tree becomes Left-heavy.",
        "b. Insert 1, 2, 3 sequentially → the tree becomes Right-heavy.",
        "c. Insert 3, 1, 2 sequentially → the tree becomes Left-Right-heavy.",
        "d. Insert 1, 3, 2 sequentially → the tree becomes Right-Left-heavy."
      ],
      "ask": "How many statements are correct?"
    },
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "C"
  },
  {
    "id": 2,
    "chapter": "Tree",
    "question": {
      "main": "Given an initially empty AVL tree, insert the keys sequentially: 1, 2, 3. After rebalancing, the resulting tree becomes 2(1,3).",
      "statements": [
        "a. Insert 3, 2, 1 → Left-heavy → Right rotation.",
        "b. Insert 1, 2, 3 → Right-heavy → Left rotation.",
        "c. Insert 3, 1, 2 → Left-Right-heavy → LR rotation.",
        "d. Insert 1, 3, 2 → Right-Left-heavy → RL rotation."
      ],
      "ask": "How many statements are correct?"
    },
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "C"
  },
  {
    "id": 3,
    "chapter": "Tree",
    "question": {
      "main": "Given AVL tree:",
      "tree": "5(3(1,4),6)",
      "ask": "Delete node 6. After rebalancing (prioritize LL before LR), what is the resulting AVL tree?"
    },
    "options": {
      "A": "3(1,5(4,N))",
      "B": "4(3(1,N),5)",
      "C": "3(1,4)",
      "D": "5(3(1,N),4)"
    },
    "answer": "A"
  },
  {
    "id": 4,
    "chapter": "Tree",
    "question": {
      "main": "Insert the following keys into an empty AVL tree in order:",
      "sequence": [10, 15, 12, 5, 2, 1, 11, 4, 17, 18],
      "ask": "Which representation is the correct final AVL tree?"
    },
    "options": {
      "A": "5(2(1,4),12(10,17(15,18)))",
      "B": "5(2(1,4),12(10(NULL,11),17(15,18)))",
      "C": "5(2(1,4),11(10,17(15,18)))",
      "D": "5(1(NULL,2(4)),12(10,17(15,18)))"
    },
    "answer": "B"
  },
  {
    "id": 5,
    "chapter": "Tree",
    "question": {
      "main": "Starting from AVL tree:",
      "tree": "5(2(1,4),12(10(NULL,11),17(15,18)))",
      "operations": [
        "Delete node 2",
        "Delete node 4"
      ],
      "ask": "What is the final AVL tree?"
    },
    "options": {
      "A": "5(1,12(10(NULL,11),17(15,18)))",
      "B": "12(5(1,10(NULL,11)),17(15,18))",
      "C": "5(1,11(10,17(15,18)))",
      "D": "12(5(1,11),17(15,18))"
    },
    "answer": "B"
  },
  {
    "id": 6,
    "chapter": "Tree",
    "question": {
      "main": "How do you verify whether a binary tree is a valid Binary Search Tree (BST)?"
    },
    "options": {
      "A": "Perform a pre-order traversal and check if the sequence is sorted",
      "B": "Perform an in-order traversal and check if the sequence is sorted",
      "C": "Perform a post-order traversal and check if the sequence is sorted",
      "D": "Perform a breadth-first traversal and check if the sequence is sorted"
    },
    "answer": "B"
  },
  {
    "id": 7,
    "chapter": "Tree",
    "question": {
      "main": "When a database contains a huge number of records and multiple keys per record, which solution is most suitable for efficient real-time searching?"
    },
    "options": {
      "A": "Use multiple AVL or Red-Black trees",
      "B": "Use multiple B-Trees or advanced B-Tree variants",
      "C": "Use hashing with heuristic combined keys",
      "D": "Use a k-D tree"
    },
    "answer": "D"
  },
  {
    "id": 8,
    "chapter": "Tree",
    "question": {
      "main": "What is a disadvantage of using a Splay Tree?"
    },
    "options": {
      "A": "The splay operation is difficult to execute",
      "B": "There are no disadvantages",
      "C": "The tree performs unnecessary splay operations even for read access",
      "D": "The height can become linear with sequential accesses"
    },
    "answer": "D"
  },
  {
    "id": 9,
    "chapter": "Tree",
    "question": {
      "main": "What is the worst-case time complexity of inserting n² elements into an AVL tree initially containing n elements?"
    },
    "options": {
      "A": "O(n log n)",
      "B": "O(n² log n)",
      "C": "O(n³)",
      "D": "O(n³ log n)"
    },
    "answer": "B"
  },
  {
    "id": 10,
    "chapter": "Tree",
    "question": {
      "main": "Choose the correct statement."
    },
    "options": {
      "A": "A BST always guarantees O(log N) search",
      "B": "A Heap supports O(log N) search",
      "C": "Hashing allows O(1) search in the best case",
      "D": "All statements above are correct"
    },
    "answer": "C"
  },
  {
    "id": 11,
    "chapter": "Tree",
    "question": {
      "main": "In a binary tree, the depth of a node is defined as:"
    },
    "options": {
      "A": "The number of direct child nodes",
      "B": "The number of direct parent nodes",
      "C": "The number of direct and indirect child nodes",
      "D": "The number of direct and indirect ancestor nodes above it"
    },
    "answer": "D"
  },
  {
    "id": 12,
    "chapter": "Tree",
    "question": {
      "main": "How do you find the Lowest Common Ancestor (LCA) of two nodes in a BST?"
    },
    "options": {
      "A": "Traverse until both nodes are on the same side",
      "B": "Traverse until both nodes equal the current node",
      "C": "Traverse until both nodes are strictly smaller or larger",
      "D": "Traverse until the nodes diverge to different sides or one matches the current node"
    },
    "answer": "D"
  },
  {
    "id": 13,
    "chapter": "Tree",
    "question": {
      "main": "Insert the following keys into an empty BST:",
      "sequence": [7, 5, 1, 8, 3, 6, 0, 9, 4, 2],
      "ask": "What is the in-order traversal result?"
    },
    "options": {
      "A": "0123456789",
      "B": "0243165987",
      "C": "7510324689",
      "D": "9864230157"
    },
    "answer": "A"
  },
  {
    "id": 14,
    "chapter": "Tree",
    "question": {
      "main": "Construct a B-Tree of order 3 using keys:",
      "sequence": [18, 4, 2, 46, 48, 29, 30],
      "ask": "Which inserted set of keys will trigger a node split?"
    },
    "options": {
      "A": "1, 32, 53",
      "B": "1, 19, 20",
      "C": "1, 19, 32",
      "D": "1, 19, 32, 53"
    },
    "answer": "B"
  },
  {
    "id": 15,
    "chapter": "Tree",
    "question": {
      "main": "Which statement about a B-Tree of order m is INCORRECT?"
    },
    "options": {
      "A": "The root has at most m subtrees",
      "B": "All leaf nodes are on the same level",
      "C": "Keys in the root are sorted",
      "D": "An internal node has at least m/2+1 children if m is even, or m/2-1 if m is odd"
    },
    "answer": "D"
  },
  {
    "id": 16,
    "chapter": "Tree",
    "question": {
      "main": "Insert sequentially into an AVL tree:",
      "insertions": [50, 23, 70, 19, 29, 65, 83, 25, 35, 53],
      "deletions": [19, 23, 83],
      "ask": "List the nodes at level 2 from left to right in the final tree."
    },
    "options": {
      "A": "25, 29, 50, 70",
      "B": "25, 35, 53, 70",
      "C": "25, 50, 53, 70",
      "D": "29, 35, 65, 70"
    },
    "answer": "B"
  },
  {
    "id": 17,
    "chapter": "Tree",
    "question": {
      "main": "What is the maximum number of keys in a B-Tree of order 4 and height 4?"
    },
    "options": {
      "A": "255",
      "B": "160",
      "C": "127",
      "D": "64"
    },
    "answer": "A"
  },
  {
    "id": 18,
    "chapter": "Tree",
    "question": {
      "main": "Which assertion about AVL trees is FALSE?",
      "statements": [
        "i) AVL tree is a BST",
        "ii) AVL tree is balanced",
        "iii) AVL tree must be complete or nearly complete"
      ]
    },
    "options": {
      "A": "i is incorrect",
      "B": "ii is incorrect",
      "C": "iii is incorrect",
      "D": "None are incorrect"
    },
    "answer": "C"
  },
  {
    "id": 19,
    "chapter": "Tree",
    "question": {
      "main": "Which statements about a B-Tree of order m are TRUE?",
      "statements": [
        "i) Every node must contain at least 2 non-empty child subtrees",
        "ii) Each node can hold at most m - 1 keys",
        "iii) All leaf nodes are on the same level"
      ]
    },
    "options": {
      "A": "Only i and iii",
      "B": "Only i and ii",
      "C": "Only ii and iii",
      "D": "All are true"
    },
    "answer": "C"
  },
  {
    "id": 20,
    "chapter": "Tree",
    "question": {
      "main": "In a valid AVL tree, the balance factor of every node must be within:"
    },
    "options": {
      "A": "[0,1]",
      "B": "[-1,1]",
      "C": "[1,2]",
      "D": "[-2,2]"
    },
    "answer": "B"
  },
  {
    "id": 21,
    "chapter": "Tree",
    "question": {
      "main": "A BST has the following post-order traversal:",
      "sequence": [28, 30, 29, 33, 35, 34, 31],
      "ask": "Find the sum of all leaf node keys."
    },
    "options": {
      "A": "126",
      "B": "127",
      "C": "125",
      "D": "128"
    },
    "answer": "A"
  },
  {
    "id": 22,
    "chapter": "Tree",
    "question": {
      "main": "Given AVL tree:",
      "tree": "44(38(31(27,34),41(39,N)),109(89,114))",
      "operations": [
        "Delete 109",
        "Delete 89"
      ],
      "rule": "Always replace using the largest element in the left subtree.",
      "ask": "Find the sum of keys at level 0 and level 1."
    },
    "options": {
      "A": "83",
      "B": "81",
      "C": "85",
      "D": "84"
    },
    "answer": "A"
  },
  {
    "id": 23,
    "chapter": "Tree",
    "question": {
      "main": "Fill in the missing code for AVL insertion.",
      "context": "if (balance > 1 && value < subroot->pLeft->data) return /* Code */;"
    },
    "options": {
      "A": "rotateLeft(subroot)",
      "B": "rotateLeft(subroot->pLeft)",
      "C": "rotateRight(subroot)",
      "D": "rotateRight(root)"
    },
    "answer": "C"
  },
  {
    "id": 24,
    "chapter": "Tree",
    "question": {
      "main": "Fill in Code1 for checking whether a binary tree is complete.",
      "context": "if (/* Code1 */) return false;"
    },
    "options": {
      "A": "flag",
      "B": "flag == false",
      "C": "q.empty()",
      "D": "q.empty() == false"
    },
    "answer": "A"
  },
  {
    "id": 25,
    "chapter": "Tree",
    "question": {
      "main": "Fill in Code2 for the complete tree checking function.",
      "context": "/* Code2 */;"
    },
    "options": {
      "A": "node = q.front()",
      "B": "flag = false",
      "C": "q.push(node)",
      "D": "q.pop()"
    },
    "answer": "C"
  },
  {
    "id": 26,
    "chapter": "Tree",
    "question": {
      "main": "Complete the missing code in bstInsert(). Duplicate keys are not allowed."
    },
    "options": {
      "A": "if (val < curr->val) curr = curr->left; else curr = curr->right;",
      "B": "if (val < curr->val) curr = curr->left; else if (val > curr->val) curr = curr->right; else break;",
      "C": "if (val < curr->val) curr = curr->left; else if (val > curr->val) curr = curr->right;",
      "D": "if (val < curr->val) curr = curr->left; else if (val > curr->val) curr = curr->right; else return root;"
    },
    "answer": "D"
  },
  {
    "id": 27,
    "chapter": "Tree",
    "question": {
      "main": "Fill in the code to count leaf nodes in a binary tree."
    },
    "options": {
      "A": "if (!root->left && !root->right) return 1;",
      "B": "if (!root->left || !root->right) return 1;",
      "C": "if (!root->left && !root->right) return 0;",
      "D": "if (!root->left || !root->right) return 0;"
    },
    "answer": "A"
  },
  {
    "id": 28,
    "chapter": "Tree",
    "question": {
      "main": "Fill in Code1 for lowestCommonAncestor()."
    },
    "options": {
      "A": "lowestCommonAncestor(root->left(), p->left, q)",
      "B": "lowestCommonAncestor(root->left(), p, q)",
      "C": "lowestCommonAncestor(root->left(), p, q->left)",
      "D": "lowestCommonAncestor(root->left(), p->left, q->left)"
    },
    "answer": "B"
  },
  {
    "id": 29,
    "chapter": "Tree",
    "question": {
      "main": "Fill in Code2 for lowestCommonAncestor()."
    },
    "options": {
      "A": "left != nullptr ? left : right",
      "B": "left == nullptr ? left : right",
      "C": "left != nullptr ? right : left",
      "D": "all three are incorrect"
    },
    "answer": "A"
  },
  {
    "id": 30,
    "chapter": "Tree",
    "question": {
      "main": "Fill in Code1 for sumEvenDepthNodes()."
    },
    "options": {
      "A": "depth % 2 == 0",
      "B": "depth % 2 != 0",
      "C": "depth == 0",
      "D": "depth != 0"
    },
    "answer": "A"
  },
  {
    "id": 31,
    "chapter": "Tree",
    "question": "This data is used for questions 30 to 31. Fill in Code 2 for the sumEvenDepthNodes function:",
    "context": "template<typename E>\nint sumEvenDepthNodes(BNode<E>* root) {\n  if (root == nullptr) return 0;\n  std::queue<std::pair<BNode<E>*, int>> q;\n  q.push({root, 0});\n  int sum = 0;\n  while (!q.empty()) {\n    auto [current, depth] = q.front();\n    q.pop();\n    if (/* Code 1 */) {\n      // TODO\n    }\n    if (current->left()) {\n      /* Code 2 */\n    }\n    if (current->right()) {\n      // TODO\n    }\n  }\n  return sum;\n}",
    "options": [
      "q.push({current->left(), depth + 1});",
      "q.push({current->right(), depth - 1});",
      "q.push(current->left(), depth + 1);",
      "q.push(current->right(), depth - 1);"
    ],
    "answer": 0
  },
  {
    "id": 32,
    "chapter": "Tree",
    "question": "This data is used for questions 32 to 36. The code is currently missing CODE 1 in the complete insert routine for an AVL Tree:",
    "context": "Node* insert(Node* root, int key) {\n  if (!root) return new Node(key);\n  if (key < root->val)\n    root->left = insert(root->left, key);\n  else if (key > root->val)\n    /* CODE 1 */\n  else\n    return root;\n\n  updateHeight(root);\n  int balance = getBalance(root);\n\n  if (balance > 1 && key < root->left->val)\n    /* CODE 2 */\n  if (balance < -1 && key > root->right->val)\n    /* CODE 3 */\n  if (balance > 1 && key > root->left->val) {\n    /* CODE 4 */\n  }\n  if (balance < -1 && key < root->right->val) {\n    /* CODE 5 */\n  }\n  return root;\n}",
    "options": [
      "root->right = insert(root->right, key);",
      "root->left = insert(root->right, key);",
      "insert(root->right, key);",
      "root->right = rotateLeft(root->right);"
    ],
    "answer": 0
  },
  {
    "id": 33,
    "chapter": "Tree",
    "question": "This data is used for questions 32 to 36. The code is currently missing CODE 2 (Left-Left condition) in the AVL tree insert function:",
    "context": "Node* insert(Node* root, int key) {\n  if (!root) return new Node(key);\n  if (key < root->val)\n    root->left = insert(root->left, key);\n  else if (key > root->val)\n    root->right = insert(root->right, key);\n  else\n    return root;\n\n  updateHeight(root);\n  int balance = getBalance(root);\n\n  if (balance > 1 && key < root->left->val)\n    /* CODE 2 */\n  if (balance < -1 && key > root->right->val)\n    /* CODE 3 */\n  if (balance > 1 && key > root->left->val) {\n    /* CODE 4 */\n  }\n  if (balance < -1 && key < root->right->val) {\n    /* CODE 5 */\n  }\n  return root;\n}",
    "options": [
      "return rotateLeft(root);",
      "return rotateRight(root);",
      "rotateLeft(root);",
      "rotateRight(root);"
    ],
    "answer": 1
  },
  {
    "id": 34,
    "chapter": "Tree",
    "question": "This data is used for questions 32 to 36. The code is currently missing CODE 3 (Right-Right condition) in the AVL tree insert function:",
    "context": "Node* insert(Node* root, int key) {\n  if (!root) return new Node(key);\n  if (key < root->val)\n    root->left = insert(root->left, key);\n  else if (key > root->val)\n    root->right = insert(root->right, key);\n  else\n    return root;\n\n  updateHeight(root);\n  int balance = getBalance(root);\n\n  if (balance > 1 && key < root->left->val)\n    /* CODE 2 */\n  if (balance < -1 && key > root->right->val)\n    /* CODE 3 */\n  if (balance > 1 && key > root->left->val) {\n    /* CODE 4 */\n  }\n  if (balance < -1 && key < root->right->val) {\n    /* CODE 5 */\n  }\n  return root;\n}",
    "options": [
      "return rotateLeft(root);",
      "return rotateRight(root);",
      "rotateRight(root);",
      "rotateLeft(root);"
    ],
    "answer": 0
  },
  {
    "id": 35,
    "chapter": "Tree",
    "question": "This data is used for questions 32 to 36. The code is currently missing CODE 4 (Left-Right condition) in the AVL tree insert function:",
    "context": "Node* insert(Node* root, int key) {\n  if (!root) return new Node(key);\n  if (key < root->val)\n    root->left = insert(root->left, key);\n  else if (key > root->val)\n    root->right = insert(root->right, key);\n  else\n    return root;\n\n  updateHeight(root);\n  int balance = getBalance(root);\n\n  if (balance > 1 && key < root->left->val)\n    /* CODE 2 */\n  if (balance < -1 && key > root->right->val)\n    /* CODE 3 */\n  if (balance > 1 && key > root->left->val) {\n    /* CODE 4 */\n  }\n  if (balance < -1 && key < root->right->val) {\n    /* CODE 5 */\n  }\n  return root;\n}",
    "options": [
      "root->left = rotateLeft(root->left); return rotateRight(root);",
      "root->left = rotateRight(root->left); return rotateRight(root);",
      "root->left = rotateRight(root->left); return rotateLeft(root);",
      "root->left = rotateLeft(root->left); return rotateLeft(root);"
    ],
    "answer": 0
  },
  {
    "id": 36,
    "chapter": "Tree",
    "question": "This data is used for questions 32 to 36. The code is currently missing CODE 5 (Right-Left condition) in the AVL tree insert function:",
    "context": "Node* insert(Node* root, int key) {\n  if (!root) return new Node(key);\n  if (key < root->val)\n    root->left = insert(root->left, key);\n  else if (key > root->val)\n    root->right = insert(root->right, key);\n  else\n    return root;\n\n  updateHeight(root);\n  int balance = getBalance(root);\n\n  if (balance > 1 && key < root->left->val)\n    /* CODE 2 */\n  if (balance < -1 && key > root->right->val)\n    /* CODE 3 */\n  if (balance > 1 && key > root->left->val) {\n    /* CODE 4 */\n  }\n  if (balance < -1 && key < root->right->val) {\n    /* CODE 5 */\n  }\n  return root;\n}",
    "options": [
      "root->right = rotateRight(root->right); return rotateLeft(root);",
      "root->right = rotateLeft(root->right); return rotateLeft(root);",
      "root->right = rotateRight(root->right); return rotateRight(root);",
      "root->right = rotateLeft(root->right); return rotateRight(root);"
    ],
    "answer": 0
  },
  {
    "id": 37,
    "chapter": "Tree",
    "question": "Which of the following implementations correctly defines the rotateRight(Node* y) transformation inside an AVL Tree?",
    "options": [
      "Node *x = y->left; Node *T2 = x->right; x->right = y; y->left = T2; updateHeight(y); updateHeight(x); return x;",
      "Node *x = y->right; Node *T2 = x->left; x->left = y; y->right = T2; updateHeight(y); updateHeight(x); return x;",
      "Node *x = y->left; y->left = x->left; x->right = y; return x;",
      "swap(y, y->left); return y;"
    ],
    "answer": 0
  },
  {
    "id": 38,
    "chapter": "Tree",
    "question": "Which of the following implementations correctly defines the rotateLeft(Node* x) transformation inside an AVL Tree?",
    "options": [
      "Node *y = x->right; Node *T2 = y->left; y->left = x; x->right = T2; updateHeight(x); updateHeight(y); return y;",
      "Node *y = x->left; Node *T2 = y->right; y->right = x; x->left = T2; updateHeight(x); updateHeight(y); return y;",
      "Node *y = x->right; x->right = y->right; y->left = x; return y;",
      "swap(x, x->right); return x;"
    ],
    "answer": 0
  },
  {
    "id": 39,
    "chapter": "Tree",
    "question": "Given an initially empty AVL tree, insert the keys in this exact order: 10, 20, 30, 40, 50, 60, 70, 25. After all balanced insertions, what does the layout resemble?",
    "options": [
      "50 (20 (10, 30 (25, 40)), 60 (null, 70))",
      "40 (20 (10, 30, 25), 60 (50, 70))",
      "30 (20 (10, 25), 50 (40, 60, 70))",
      "60 (40 (20 (10, 25), 50), 70)"
    ],
    "answer": 1
  },
  {
    "id": 40,
    "chapter": "Tree",
    "question": "This data is used for questions 40 to 46. Fill in the code blanks CODE 1 and CODE 2 in the left rotation function (rotateLeft) of the Rope structure below:",
    "context": "Node *rotateLeft(Node *x) {\n  Node *y = x->right;\n  /* CODE 1 */\n  y->left = x;\n  /* CODE 2 */\n  return y;\n}",
    "options": [
      "CODE 1: x->right = y->left; CODE 2: updateHeight(x);",
      "CODE 1: x->right = y; CODE 2: updateHeight(y);",
      "CODE 1: x->left = y->right; CODE 2: updateHeight(x);",
      "CODE 1: y->left = x->right; CODE 2: updateHeight(y);"
    ],
    "answer": 0
  },
  {
    "id": 41,
    "chapter": "Tree",
    "question": "This data is used for questions 40 to 46. Complete the missing sections within the charAt method for this Rope structure:",
    "context": "char charAt(Node *node, int index) const {\n  if (node->isLeaf()) {\n    /* CODE 1 */\n  }\n  if (/* CODE 2 */)\n    // TODO\n  else\n    return charAt(node->right, /* CODE 3 */);\n}",
    "options": [
      "CODE 1: return node->data[index]; CODE 2: index < node->weight; CODE 3: index - node->weight;",
      "CODE 1: return node->data[index]; CODE 2: index > node->weight; CODE 3: index + node->weight;",
      "CODE 1: return node->data[index]; CODE 2: index <= node->weight; CODE 3: index - node->weight;",
      "CODE 1: return node->data[index]; CODE 2: index >= node->weight; CODE 3: index + node->weight;"
    ],
    "answer": 0
  },
  {
    "id": 42,
    "chapter": "Tree",
    "question": "This data is used for questions 40 to 46. Analyze the following logic that utilizes a for loop to search for the first occurrence of a target character in the Rope structure:\nchar findFirstChar(const Rope &rope, char target) {\n  int n = rope.length();\n  for (int i = 0; i < n; ++i) {\n    if (rope.charAt(i) == target) return rope.charAt(i);\n  }\n  return '\\0';\n}\nWhat is the time complexity of the findFirstChar function?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1
  },
  {
    "id": 43,
    "chapter": "Tree",
    "question": "This data is used for questions 40 to 46. Provide the missing expression for CODE 1 within the Rope's helper substring routine:",
    "context": "string substringHelper(Node *node, int start, int end) const {\n  if (end < leftWeight) {\n    // TODO\n  } else if (start >= leftWeight) {\n    // TODO\n  } else {\n    return /* TODO */ + /* CODE 1 */;\n  }\n}\nstring Rope::substring(int start, int len) const {\n  return substringHelper(root, start, start + len - 1);\n}",
    "options": [
      "substringHelper(node->right, 0, end - leftWeight);",
      "substringHelper(node->right, 0, end - leftWeight - 1);",
      "substringHelper(node->left, start, leftWeight - 1);",
      "substringHelper(node->left, start, leftWeight);"
    ],
    "answer": 0
  },
  {
    "id": 44,
    "chapter": "Tree",
    "question": "This data is used for questions 40 to 46. Provide the missing expression for CODE 1 within the Rope split routine:",
    "context": "void Rope::split(Node *node, int index, Node *&outLeft, Node *&outRight) {\n  if (node->isLeaf()) {\n    if (index <= 0) // TODO\n    else if (index >= (int)node->data.size()) {\n      outLeft = node->data; outRight = nullptr;\n    } else {\n      outLeft = // TODO;\n      outRight = /* CODE 1 */;\n    }\n    return;\n  }\n}",
    "options": [
      "node->data = node->data.substr(index); node->weight = node->data.size();",
      "new Node(node->data.substr(0, index));",
      "new Node(node->data);",
      "new Node(node->data.substr(index + 1, node->data.size() - index));"
    ],
    "answer": 0
  },
  {
    "id": 45,
    "chapter": "Tree",
    "question": "This data is used for questions 40 to 46. Provide the missing expression for CODE 2 within the Rope split routine:",
    "context": "void Rope::split(Node *node, int index, Node *&outLeft, Node *&outRight) {\n  if (index > node->weight) {\n    Node *rightL = nullptr, *rightR = nullptr;\n    /* CODE 2 */\n    /* CODE 3 */\n    outRight = rightR;\n  }\n}",
    "options": [
      "split(node->right, index - node->weight, rightL, rightR);",
      "split(node->right, index, rightL, rightR);",
      "split(node->left, index, rightL, rightR);",
      "split(node->left, index - node->weight, rightL, rightR);"
    ],
    "answer": 0
  },
  {
    "id": 46,
    "chapter": "Tree",
    "question": "This data is used for questions 40 to 46. Provide the missing expression for CODE 3 within the Rope split routine:",
    "context": "void Rope::split(Node *node, int index, Node *&outLeft, Node *&outRight) {\n  if (index > node->weight) {\n    Node *rightL = nullptr, *rightR = nullptr;\n    /* CODE 2 */\n    /* CODE 3 */\n    outRight = rightR;\n  }\n}",
    "options": [
      "outLeft = concatNodes(node->left, rightL);",
      "outLeft = concatNodes(rightL, node->left);",
      "outLeft = concatNodes(node->right, rightL);",
      "outLeft = concatNodes(rightR, node->right);"
    ],
    "answer": 0
  },
  {
    "id": 47,
    "chapter": "Tree",
    "question": "This data is used for questions 47 to 50. The code is currently missing CODE 1 in the Zig-Zig Right-Right scenario of a Splay Tree implementation:",
    "context": "class SplayTree {\n  // Splay implementation\n};",
    "options": [
      "rotateLeft(g); rotateLeft(p);",
      "rotateRight(g); rotateRight(p);",
      "rotateLeft(p); rotateRight(g);",
      "rotateRight(p); rotateLeft(g);"
    ],
    "answer": 0
  },
  {
    "id": 48,
    "chapter": "Tree",
    "question": "This data is used for questions 47 to 50. The code is currently missing CODE 2 in the Zig-Zag Right-Left scenario of a Splay Tree implementation:",
    "context": "class SplayTree {\n  // Splay implementation\n};",
    "options": [
      "rotateLeft(p); rotateRight(g);",
      "rotateRight(p); rotateRight(g);",
      "rotateLeft(g); rotateLeft(p);",
      "rotateRight(g); rotateLeft(p);"
    ],
    "answer": 0
  },
  {
    "id": 49,
    "chapter": "Tree",
    "question": "This data is used for questions 47 to 50. The code is currently missing CODE 3 in the Zig-Zag Left-Right scenario of a Splay Tree implementation:",
    "context": "class SplayTree {\n  // Splay implementation\n};",
    "options": [
      "rotateRight(g); rotateRight(p);",
      "rotateLeft(g); rotateLeft(p);",
      "rotateRight(p); rotateLeft(g);",
      "rotateLeft(p); rotateRight(g);"
    ],
    "answer": 0
  },
  {
    "id": 50,
    "chapter": "Tree",
    "question": "This data is used for questions 47 to 50. The code is currently missing CODE 4 at the very end of the insert routine for a Splay Tree:",
    "context": "void insert(int key) {\n  if (!root) { root = new Node(key); return; }\n  Node* cur = root; Node* parent = NULL;\n  while (cur) {\n    parent = cur;\n    if (key < cur->key) cur = cur->left;\n    else if (key > cur->key) cur = cur->right;\n  }\n  Node* newNode = new Node(key);\n  newNode->parent = parent;\n  if (key < parent->key) parent->left = newNode;\n  else parent->right = newNode;\n  /* CODE 4 */\n}",
    "options": [
      "splay(newNode);",
      "splay(parent);",
      "splay(root);",
      "return;"
    ],
    "answer": 0
  },
  {
    "id": 51,
    "chapter": "Tree",
    "question": "Given an initially empty AVL tree, insert the keys sequentially in this exact order: 15, 20, 25, 30, 10, 5. After performing all necessary rebalancing rotations, which node becomes the absolute root of the final tree?",
    "options": [
      "15",
      "20",
      "25",
      "30"
    ],
    "answer": 1
  },
  {
    "id": 52,
    "chapter": "Tree",
    "question": "In an AVL tree, if a node has a balance factor of +2 and its left child node has a balance factor of -1, which rotation scenario must be applied to rebalance the tree?",
    "options": [
      "Single Right Rotation (LL)",
      "Single Left Rotation (RR)",
      "Left-Right Rotation (LR)",
      "Right-Left Rotation (RL)"
    ],
    "answer": 2
  },
  {
    "id": 53,
    "chapter": "Tree",
    "question": "A Binary Search Tree (BST) yields the following Pre-order traversal sequence: 10, 5, 3, 7, 15, 12, 18. Which of the following sequences represents the correct Post-order traversal of this tree?",
    "options": [
      "3, 5, 7, 10, 12, 15, 18",
      "3, 7, 5, 12, 18, 15, 10",
      "18, 15, 12, 10, 7, 5, 3",
      "7, 3, 5, 18, 12, 15, 10"
    ],
    "answer": 1
  },
  {
    "id": 54,
    "chapter": "Tree",
    "question": "What is the maximum number of entries (keys) that a single internal node (excluding the root) can contain within a B-Tree of order m = 4?",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "answer": 1
  },
  {
    "id": 55,
    "chapter": "Tree",
    "question": "Which of the following architectural constraints is MANDATORY for any standard valid B-Tree?",
    "options": [
      "All leaf nodes must reside at exactly the same level (depth)",
      "Every internal node must contain exactly m/2 keys",
      "A B-Tree can only store integer data types",
      "The root node cannot have fewer than m/2 child subtrees"
    ],
    "answer": 0
  },
  {
    "id": 56,
    "chapter": "Tree",
    "question": "In a Rope data structure, how is the 'weight' property of an internal node defined?",
    "options": [
      "The total length of the string character sequence located in its right subtree",
      "The total length of the string sequence in its left subtree plus the current node length",
      "The sum of the lengths of all string character segments contained within the leaf nodes of its left subtree",
      "The maximum geometrical height calculated from that specific node down to the deepest leaf"
    ],
    "answer": 2
  },
  {
    "id": 57,
    "chapter": "Tree",
    "question": "Suppose the charAt(index) method on a Rope data structure is currently processing an internal node X with weight = 8. If the method is invoked with index = 10, what is the next logical step in the traversal?",
    "options": [
      "Throw an index out of bounds error exception",
      "Traverse to the left child node of X keeping the query index as 10",
      "Traverse to the right child node of X adjusting the query index to 10 - 8 = 2",
      "Immediately return the character located at string position 2 inside node X"
    ],
    "answer": 2
  },
  {
    "id": 58,
    "chapter": "Tree",
    "question": "What is the core operational feature that distinguishes a Splay Tree from a standard Binary Search Tree?",
    "options": [
      "It maintains a strict structural height balance limit of 1 after insertions",
      "It moves the most recently accessed or inserted node to the root position via a sequence of specialized rotations",
      "It reorders all existing nodes in descending sequence after any deletion step",
      "It splits a node into two equal parts whenever the key count exceeds the order threshold"
    ],
    "answer": 1
  },
  {
    "id": 59,
    "chapter": "Tree",
    "question": "In a Splay Tree structure, under what specific node layout condition is the 'Zig-Zag' rotation step performed?",
    "options": [
      "Node x is the left child of parent p, and p is the left child of grandparent g",
      "Node x has no grandparent node g, and parent p is the absolute root of the tree",
      "Node x is the right child of parent p, and p is the left child of grandparent g (or vice versa)",
      "Node x is the right child of parent p, and p is the right child of grandparent g"
    ],
    "answer": 2
  },
  {
    "id": 60,
    "chapter": "Tree",
    "question": "What is the amortized time complexity for Search, Insert, and Delete operations on a Splay Tree containing n elements?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1
  },
  {
    "id": 61,
    "chapter": "Tree",
    "question": "Identify the missing statement required to safely compute the height of an AVL node:\nint updateHeight(Node* node) {\n  if (!node) return 0;\n  node->height = 1 + _______;\n}",
    "options": [
      "max(node->left->height, node->right->height)",
      "max(getHeight(node->left), getHeight(node->right))",
      "getHeight(node->left) + getHeight(node->right)",
      "getHeight(node) + 1"
    ],
    "answer": 1
  },
  {
    "id": 62,
    "chapter": "Tree",
    "question": "When deleting an internal node with two active child subtrees from a Binary Search Tree (BST), what is the standard value replacement methodology used to preserve structural sorting integrity?",
    "options": [
      "Completely purge the entire right subtree branch below that node",
      "Replace its value with the minimum key found in the left child node",
      "Replace its value with either its In-order Predecessor (maximum of left subtree) or its In-order Successor (minimum of right subtree)",
      "Shift the root node of the entire tree down into the slot of the deleted element"
    ],
    "answer": 2
  },
  {
    "id": 63,
    "chapter": "Tree",
    "question": "A Complete Binary Tree contains exactly 15 nodes. Assuming the root node resides at height = 0, what is the exact total height of this tree?",
    "options": [
      "3",
      "4",
      "15",
      "2"
    ],
    "answer": 0
  },
  {
    "id": 64,
    "chapter": "Tree",
    "question": "In a Rope structure, how does the concatNodes(Node* R1, Node* R2) helper method merge two separate string trees into one single tree?",
    "options": [
      "It allocates a new parent internal node, assigning R1 as its left pointer and R2 as its right pointer",
      "It locates the terminal leaf of R1 and overwrites its memory space with a full copy of R2's data",
      "It shifts all individual nodes belonging to tree R2 so they become left-side child nodes of R1",
      "It applies a left rotation to R1 and attaches R2 into the empty position"
    ],
    "answer": 0
  },
  {
    "id": 65,
    "chapter": "Tree",
    "question": "What structural modification takes place in a Splay Tree when a search query is executed for a key that does not exist anywhere in the tree?",
    "options": [
      "The tree structure remains entirely unchanged and simply outputs a NULL pointer",
      "The execution routine stalls into an infinite looping runtime state",
      "The last non-NULL node accessed along the search path before failure is splayed to the root position",
      "The old root node is systematically stripped out of the tree structure"
    ],
    "answer": 2
  },
  {
    "id": 66,
    "chapter": "Tree",
    "question": "In an internal node of a B-Tree with order m = 5 (excluding the root node), what is the minimum number of child subtrees it must maintain?",
    "options": [
      "2",
      "3",
      "5",
      "4"
    ],
    "answer": 1
  },
  {
    "id": 67,
    "chapter": "Tree",
    "question": "Which statement correctly evaluates the performative trade-offs between an AVL Tree and a Red-Black Tree?",
    "options": [
      "An AVL Tree is more strictly balanced than a Red-Black Tree, yielding faster lookups but requiring higher modification overhead during insertion/deletion",
      "A Red-Black Tree maintains a strictly shorter total height profile than an AVL Tree for any matching dataset",
      "Both structures degrade to a worst-case time complexity of O(n) during intensive lookups",
      "An AVL Tree belongs to a class of multi-way search structures rather than binary search formats"
    ],
    "answer": 0
  },
  {
    "id": 68,
    "chapter": "Tree",
    "question": "Complete the balance factor query function for an AVL tree node execution:\nint getBalance(Node* n) {\n  if (!n) return 0;\n  return _______;\n}",
    "options": [
      "getHeight(n->left) - getHeight(n->right)",
      "getHeight(n->right) + getHeight(n->left)",
      "n->left->height / n->right->height",
      "max(getHeight(n->left), getHeight(n->right))"
    ],
    "answer": 0
  },
  {
    "id": 69,
    "chapter": "Tree",
    "question": "If elements are inserted into a standard unweighted Binary Search Tree (BST) in a strictly pre-sorted order (e.g., 1, 2, 3, 4, 5), what is the resulting state of the tree structure?",
    "options": [
      "The tree achieves a perfectly symmetrical log-height balance profile",
      "The tree degenerates into a linear Skewed Tree structure, driving operational complexity up to O(n)",
      "The structure triggers a proactive multi-way node split routine similar to a B-Tree setup",
      "The tree rejects the entry sequence entirely and triggers a structural violation alert"
    ],
    "answer": 1
  },
  {
    "id": 70,
    "chapter": "Tree",
    "question": "In the split method of a Rope structure, when the specified splitting index matches the weight value of the target internal node exactly, what is the most efficient pointer assignment to form outLeft and outRight?",
    "options": [
      "outLeft = node->left; outRight = node->right;",
      "Execute a recursive traversal down to all individual leaf nodes to split the data array directly",
      "outLeft = nullptr; outRight = node;",
      "Allocate two entirely new independent Rope instances from scratch based on text streaming"
    ],
    "answer": 0
  }
]
export default tree;