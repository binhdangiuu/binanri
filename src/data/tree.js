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
    "answer": "D"
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
    "answer": "D"
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
    "context": `Node insert (Node*& subroot, const T& value) {
    Node* pNew = new Node(value);
    if (!subroot) return pNew;
    if (value < subroot->data) {
        subroot->pLeft = insert(subroot->pLeft, value);
    } else if (value >= subroot->data) {
        subroot->pRight = insert(subroot->pRight, value);
    } else return subroot;

    int balance = getBalance(subroot);
    if (balance > 1 && value < subroot->pLeft->data) return /* Code */;
}`,
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
      "context": `template<typename E>
class BNode {
public:
    virtual E element() = 0; // return the node value
    virtual BNode<E>* left() const = 0; // return the node's left child
    virtual BNode<E>* right() const = 0; // return the node's right child
};

template<typename E>
bool checkNode(BNode<E>* node, bool &flag, Queue<BNode<E>*> &q) {
    if (node) {
        if (/* Code1 */) return false;
        /* Code2 */;
    } else flag = true;
    return true;
}

template<typename E>
bool isCompleteBinaryTree(BNode<E>* root) {
    if (root == nullptr) return true;
    Queue<BNode<E>*> q;
    q.push(root);
    bool flag = false;
    while (!q.empty()) {
        BNode<E>* temp = q.front();
        q.pop();
        if (!checkNode(temp->left(), flag, q)) return false;
        if (!checkNode(temp->right(), flag, q)) return false;
    }
    return true;
}`
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
      "context": `template<typename E>
class BNode {
public:
    virtual E element() = 0; // return the node value
    virtual BNode<E>* left() const = 0; // return the node's left child
    virtual BNode<E>* right() const = 0; // return the node's right child
};

template<typename E>
bool checkNode(BNode<E>* node, bool &flag, Queue<BNode<E>*> &q) {
    if (node) {
        if (/* Code1 */) return false;
        /* Code2 */;
    } else flag = true;
    return true;
}

template<typename E>
bool isCompleteBinaryTree(BNode<E>* root) {
    if (root == nullptr) return true;
    Queue<BNode<E>*> q;
    q.push(root);
    bool flag = false;
    while (!q.empty()) {
        BNode<E>* temp = q.front();
        q.pop();
        if (!checkNode(temp->left(), flag, q)) return false;
        if (!checkNode(temp->right(), flag, q)) return false;
    }
    return true;
}`
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
      "main": "Complete the missing code in bstInsert(). Duplicate keys are not allowed.",
      "context": `TreeNode* bstInsert(TreeNode* root, int val) {
    if (root == nullptr) return new TreeNode(val);
    TreeNode* curr = root;
    TreeNode* prev = nullptr;
    while (curr != nullptr) {
        prev = curr;
        // Code
    }
    if (val < prev->val) prev->left = new TreeNode(val);
    else { prev->right = new TreeNode(val); }
    return root;
}`
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
      "main": "Fill in the code to count leaf nodes in a binary tree.",
      "context": `int countLO(Node *root) {
    if (!root) return 0;
    // Code
    return countLO(root->left) + countLO(root->right);
}`
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
      "main": "Fill in Code1 for lowestCommonAncestor().",
      "context": `// Thông tin dùng cho câu 28 và 29:
template<typename E>
class BNode {
public:
    virtual E element() = 0; // return the node value
    virtual BNode<E>* left() const = 0; // return the node's left child
    virtual BNode<E>* right() const = 0; // return the node's right child
};

template<typename E>
BNode<E>* lowestCommonAncestor(BNode<E>* root, BNode<E>* p, BNode<E>* q) {
    if (root == nullptr || root == p || root == q) return root;
    BNode<E>* left = /* Code1 */;
    BNode<E>* right = lowestCommonAncestor(root->right(), p, q);
    if (left != nullptr && right != nullptr) return root;
    return /* Code2 */;
}`
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
      "main": "Fill in Code2 for lowestCommonAncestor().",
      "context": `// Thông tin dùng cho câu 28 và 29:
template<typename E>
class BNode {
public:
    virtual E element() = 0; // return the node value
    virtual BNode<E>* left() const = 0; // return the node's left child
    virtual BNode<E>* right() const = 0; // return the node's right child
};

template<typename E>
BNode<E>* lowestCommonAncestor(BNode<E>* root, BNode<E>* p, BNode<E>* q) {
    if (root == nullptr || root == p || root == q) return root;
    BNode<E>* left = /* Code1 */;
    BNode<E>* right = lowestCommonAncestor(root->right(), p, q);
    if (left != nullptr && right != nullptr) return root;
    return /* Code2 */;
}`
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
      "main": "Fill in Code1 for sumEvenDepthNodes().",
    "context": `// Thông tin dùng cho câu 30 và 31:
int sumEvenDepthNodes(Node* root) {
    if (!root) return 0;
    int sum = 0;
    queue<pair<Node*, int>> q;
    q.push({root, 0});
    while (!q.empty()) {
        auto [current, depth] = q.front();
        q.pop();
        if (/* Code1 */) {
            sum += current->val();
        }
        if (current->left()) {
            /* Code2 */
        }
        if (current->right()) {
            q.push({current->right(), depth + 1});
        }
    }
    return sum;
}`,
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
    "question": {
      "main": "Fill in Code2 for the sumEvenDepthNodes function.",
    "context": `// Thông tin dùng cho câu 30 và 31:
int sumEvenDepthNodes(Node* root) {
    if (!root) return 0;
    int sum = 0;
    queue<pair<Node*, int>> q;
    q.push({root, 0});
    while (!q.empty()) {
        auto [current, depth] = q.front();
        q.pop();
        if (/* Code1 */) {
            sum += current->val();
        }
        if (current->left()) {
            /* Code2 */
        }
        if (current->right()) {
            q.push({current->right(), depth + 1});
        }
    }
    return sum;
}`,
    },
    "options": {
      "A": "q.push({current->left(), depth + 1});",
      "B": "q.push({current->right(), depth - 1});",
      "C": "q.push(current->left(), depth + 1);",
      "D": "q.push(current->right(), depth - 1);"
    },
    "answer": "A"
  },
  {
    "id": 32,
    "chapter": "Tree",
    "question": {
      "main": "The AVL insert routine is missing CODE 1.",
    "context": `// Thông tin dùng cho câu từ 32 đến 36:
struct Node { int val; Node* left; Node* right; int height; };
int getHeight(Node* n);
int getBalance(Node* n);
void updateHeight(Node* n);
Node* rotateRight(Node* y);
Node* rotateLeft(Node* x);
Node* insert(Node* root, int key) {
    if (!root) return new Node(key);
    if (key < root->key) root->left = insert(root->left, key);
    else if (key > root->key) /* CODE 1 */
    else return root;

    updateHeight(root);
    int balance = getBalance(root);

    if (balance > 1 && key < root->left->val) /* CODE 2 */
    if (balance < -1 && key > root->right->val) /* CODE 3 */
    if (balance > 1 && key > root->left->val) { /* CODE 4 */ }
    if (balance < -1 && key < root->right->val) { /* CODE 5 */ }
    return root;
}`,
    },
    "options": {
      "A": "root->right = insert(root->right, key);",
      "B": "root->left = insert(root->right, key);",
      "C": "insert(root->right, key);",
      "D": "root->right = rotateLeft(root->right);"
    },
    "answer": "A"
  },
  {
    "id": 33,
    "chapter": "Tree",
    "question": {
      "main": "The AVL insert routine is missing CODE 2 for the Left-Left case.",
    "context": `// Thông tin dùng cho câu từ 32 đến 36:
struct Node { int val; Node* left; Node* right; int height; };
int getHeight(Node* n);
int getBalance(Node* n);
void updateHeight(Node* n);
Node* rotateRight(Node* y);
Node* rotateLeft(Node* x);
Node* insert(Node* root, int key) {
    if (!root) return new Node(key);
    if (key < root->key) root->left = insert(root->left, key);
    else if (key > root->key) /* CODE 1 */
    else return root;

    updateHeight(root);
    int balance = getBalance(root);

    if (balance > 1 && key < root->left->val) /* CODE 2 */
    if (balance < -1 && key > root->right->val) /* CODE 3 */
    if (balance > 1 && key > root->left->val) { /* CODE 4 */ }
    if (balance < -1 && key < root->right->val) { /* CODE 5 */ }
    return root;
}`,
    },
    "options": {
      "A": "return rotateLeft(root);",
      "B": "return rotateRight(root);",
      "C": "rotateLeft(root);",
      "D": "rotateRight(root);"
    },
    "answer": "B"
  },
  {
    "id": 34,
    "chapter": "Tree",
    "question": {
      "main": "The AVL insert routine is missing CODE 3 for the Right-Right case.",
    "context": `// Thông tin dùng cho câu từ 32 đến 36:
struct Node { int val; Node* left; Node* right; int height; };
int getHeight(Node* n);
int getBalance(Node* n);
void updateHeight(Node* n);
Node* rotateRight(Node* y);
Node* rotateLeft(Node* x);
Node* insert(Node* root, int key) {
    if (!root) return new Node(key);
    if (key < root->key) root->left = insert(root->left, key);
    else if (key > root->key) /* CODE 1 */
    else return root;

    updateHeight(root);
    int balance = getBalance(root);

    if (balance > 1 && key < root->left->val) /* CODE 2 */
    if (balance < -1 && key > root->right->val) /* CODE 3 */
    if (balance > 1 && key > root->left->val) { /* CODE 4 */ }
    if (balance < -1 && key < root->right->val) { /* CODE 5 */ }
    return root;
}`,
    },
    "options": {
      "A": "return rotateLeft(root);",
      "B": "return rotateRight(root);",
      "C": "rotateRight(root);",
      "D": "rotateLeft(root);"
    },
    "answer": "A"
  },
  {
    "id": 35,
    "chapter": "Tree",
    "question": {
      "main": "The AVL insert routine is missing CODE 4 for the Left-Right case.",
    "context": `// Thông tin dùng cho câu từ 32 đến 36:
struct Node { int val; Node* left; Node* right; int height; };
int getHeight(Node* n);
int getBalance(Node* n);
void updateHeight(Node* n);
Node* rotateRight(Node* y);
Node* rotateLeft(Node* x);
Node* insert(Node* root, int key) {
    if (!root) return new Node(key);
    if (key < root->key) root->left = insert(root->left, key);
    else if (key > root->key) /* CODE 1 */
    else return root;

    updateHeight(root);
    int balance = getBalance(root);

    if (balance > 1 && key < root->left->val) /* CODE 2 */
    if (balance < -1 && key > root->right->val) /* CODE 3 */
    if (balance > 1 && key > root->left->val) { /* CODE 4 */ }
    if (balance < -1 && key < root->right->val) { /* CODE 5 */ }
    return root;
}`,
    },
    "options": {
      "A": "root->left = rotateLeft(root->left); return rotateRight(root);",
      "B": "root->left = rotateRight(root->left); return rotateRight(root);",
      "C": "root->left = rotateRight(root->left); return rotateLeft(root);",
      "D": "root->left = rotateLeft(root->left); return rotateLeft(root);"
    },
    "answer": "A"
  },
  {
    "id": 36,
    "chapter": "Tree",
    "question": {
      "main": "The AVL insert routine is missing CODE 5 for the Right-Left case.",
    "context": `// Thông tin dùng cho câu từ 32 đến 36:
struct Node { int val; Node* left; Node* right; int height; };
int getHeight(Node* n);
int getBalance(Node* n);
void updateHeight(Node* n);
Node* rotateRight(Node* y);
Node* rotateLeft(Node* x);
Node* insert(Node* root, int key) {
    if (!root) return new Node(key);
    if (key < root->key) root->left = insert(root->left, key);
    else if (key > root->key) /* CODE 1 */
    else return root;

    updateHeight(root);
    int balance = getBalance(root);

    if (balance > 1 && key < root->left->val) /* CODE 2 */
    if (balance < -1 && key > root->right->val) /* CODE 3 */
    if (balance > 1 && key > root->left->val) { /* CODE 4 */ }
    if (balance < -1 && key < root->right->val) { /* CODE 5 */ }
    return root;
}`,
    },
    "options": {
      "A": "root->right = rotateRight(root->right); return rotateLeft(root);",
      "B": "root->right = rotateLeft(root->right); return rotateLeft(root);",
      "C": "root->right = rotateRight(root->right); return rotateRight(root);",
      "D": "root->right = rotateLeft(root->right); return rotateRight(root);"
    },
    "answer": "A"
  },
  {
    "id": 37,
    "chapter": "Tree",
    "question": {
      "main": "Which implementation correctly defines rotateRight(Node* y) in an AVL Tree?"
    },
    "options": {
      "A": "Node *x = y->left; Node *T2 = x->right; x->right = y; y->left = T2; updateHeight(y); updateHeight(x); return x;",
      "B": "Node *x = y->right; Node *T2 = x->left; x->left = y; y->right = T2; updateHeight(y); updateHeight(x); return x;",
      "C": "Node *x = y->left; y->left = x->left; x->right = y; return x;",
      "D": "swap(y, y->left); return y;"
    },
    "answer": "A"
  },
  {
    "id": 38,
    "chapter": "Tree",
    "question": {
      "main": "Which implementation correctly defines rotateLeft(Node* x) in an AVL Tree?"
    },
    "options": {
      "A": "Node *y = x->right; Node *T2 = y->left; y->left = x; x->right = T2; updateHeight(x); updateHeight(y); return y;",
      "B": "Node *y = x->left; Node *T2 = y->right; y->right = x; x->left = T2; updateHeight(x); updateHeight(y); return y;",
      "C": "Node *y = x->right; x->right = y->right; y->left = x; return y;",
      "D": "swap(x, x->right); return x;"
    },
    "answer": "A"
  },
  {
    "id": 39,
    "chapter": "Tree",
    "question": {
      "main": "Insert keys 10, 20, 30, 40, 50, 60, 70, 25 into an empty AVL tree. Which structure is correct after balancing?"
    },
    "options": {
      "A": "50 (20 (10, 30 (25, 40)), 60 (null, 70))",
      "B": "40 (20 (10, 30, 25), 60 (50, 70))",
      "C": "30 (20 (10, 25), 50 (40, 60, 70))",
      "D": "60 (40 (20 (10, 25), 50), 70)"
    },
    "answer": "B"
  },
  {
    "id": 40,
    "chapter": "Tree",
    "question": {
      "main": "Fill in CODE 1 and CODE 2 in rotateLeft() for the Rope structure."
    },
    "options": {
      "A": "CODE 1: x->right = y->left; CODE 2: updateHeight(x);",
      "B": "CODE 1: x->right = y; CODE 2: updateHeight(y);",
      "C": "CODE 1: x->left = y->right; CODE 2: updateHeight(x);",
      "D": "CODE 1: y->left = x->right; CODE 2: updateHeight(y);"
    },
    "answer": "A"
  },
  {
    "id": 41,
    "chapter": "Tree",
    "question": {
      "main": "Complete the missing sections within the Rope charAt() method."
    },
    "options": {
      "A": "CODE 1: return node->data[index]; CODE 2: index < node->weight; CODE 3: index - node->weight;",
      "B": "CODE 1: return node->data[index]; CODE 2: index > node->weight; CODE 3: index + node->weight;",
      "C": "CODE 1: return node->data[index]; CODE 2: index <= node->weight; CODE 3: index - node->weight;",
      "D": "CODE 1: return node->data[index]; CODE 2: index >= node->weight; CODE 3: index + node->weight;"
    },
    "answer": "A"
  },
  {
    "id": 42,
    "chapter": "Tree",
    "question": {
      "main": "What is the time complexity of findFirstChar() using Rope.charAt()?"
    },
    "options": {
      "A": "O(n)",
      "B": "O(n log n)",
      "C": "O(log n)",
      "D": "O(1)"
    },
    "answer": "B"
  },
  {
    "id": 43,
    "chapter": "Tree",
    "question": {
      "main": "Provide CODE 1 inside the Rope substringHelper() routine."
    },
    "options": {
      "A": "substringHelper(node->right, 0, end - leftWeight);",
      "B": "substringHelper(node->right, 0, end - leftWeight - 1);",
      "C": "substringHelper(node->left, start, leftWeight - 1);",
      "D": "substringHelper(node->left, start, leftWeight);"
    },
    "answer": "A"
  },
  {
    "id": 44,
    "chapter": "Tree",
    "question": {
      "main": "Provide CODE 1 inside the Rope split() routine.",
    "context": `// Thông tin dùng cho câu từ 44 đến 46:
void split(Node* node, int index, Node*& outLeft, Node*& outRight) {
    if (node->isLeaf) {
        /* CODE 1 */
        outLeft = node;
        outRight = new Node("");
        return;
    }
    if (index < node->weight) {
        split(node->left, index, outLeft, outRight);
        outRight = concatNodes(outRight, node->right);
    } else {
        Node *rightL = NULL, *rightR = NULL;
        /* CODE 2 */
        /* CODE 3 */
        outRight = rightR;
    }
}`,
    },
    "options": {
      "A": "node->data = node->data.substr(index); node->weight = node->data.size();",
      "B": "new Node(node->data.substr(0, index));",
      "C": "new Node(node->data);",
      "D": "new Node(node->data.substr(index + 1, node->data.size() - index));"
    },
    "answer": "A"
  },
  {
    "id": 45,
    "chapter": "Tree",
    "question": {
      "main": "Provide CODE 2 inside the Rope split() routine.",
    "context": `// Thông tin dùng cho câu từ 44 đến 46:
void split(Node* node, int index, Node*& outLeft, Node*& outRight) {
    if (node->isLeaf) {
        /* CODE 1 */
        outLeft = node;
        outRight = new Node("");
        return;
    }
    if (index < node->weight) {
        split(node->left, index, outLeft, outRight);
        outRight = concatNodes(outRight, node->right);
    } else {
        Node *rightL = NULL, *rightR = NULL;
        /* CODE 2 */
        /* CODE 3 */
        outRight = rightR;
    }
}`,
    },
    "options": {
      "A": "split(node->right, index - node->weight, rightL, rightR);",
      "B": "split(node->right, index, rightL, rightR);",
      "C": "split(node->left, index, rightL, rightR);",
      "D": "split(node->left, index - node->weight, rightL, rightR);"
    },
    "answer": "A"
  },
  {
    "id": 46,
    "chapter": "Tree",
    "question": {
      "main": "Provide CODE 3 inside the Rope split() routine.",
    "context": `// Thông tin dùng cho câu từ 44 đến 46:
void split(Node* node, int index, Node*& outLeft, Node*& outRight) {
    if (node->isLeaf) {
        /* CODE 1 */
        outLeft = node;
        outRight = new Node("");
        return;
    }
    if (index < node->weight) {
        split(node->left, index, outLeft, outRight);
        outRight = concatNodes(outRight, node->right);
    } else {
        Node *rightL = NULL, *rightR = NULL;
        /* CODE 2 */
        /* CODE 3 */
        outRight = rightR;
    }
}`,
    },
    "options": {
      "A": "outLeft = concatNodes(node->left, rightL);",
      "B": "outLeft = concatNodes(rightL, node->left);",
      "C": "outLeft = concatNodes(node->right, rightL);",
      "D": "outLeft = concatNodes(rightR, node->right);"
    },
    "answer": "A"
  },
  {
    "id": 47,
    "chapter": "Tree",
    "question": {
      "main": "Fill in CODE 1 for the Zig-Zig Right-Right case in a Splay Tree.",
    "context": `// Thông tin dùng cho câu từ 47 đến 50:
class SplayTree {
    Node* root;
    void insert(int key) {
        if (!root) { root = new Node(key); return; }
        Node* cur = root;
        Node* parent = NULL;
        while (cur) {
            parent = cur;
            if (key < cur->key) cur = cur->left;
            else if (key > cur->key) cur = cur->right;
        }
        Node* newNode = new Node(key);
        newNode->parent = parent;
        if (key < parent->key) parent->left = newNode;
        else parent->right = newNode;
        /* CODE 4 */
    }
};`,
    },
    "options": {
      "A": "rotateLeft(g); rotateLeft(p);",
      "B": "rotateRight(g); rotateRight(p);",
      "C": "rotateLeft(p); rotateRight(g);",
      "D": "rotateRight(p); rotateLeft(g);"
    },
    "answer": "A"
  },
  {
    "id": 48,
    "chapter": "Tree",
    "question": {
      "main": "Fill in CODE 2 for the Zig-Zag Right-Left case in a Splay Tree.",
    "context": `// Thông tin dùng cho câu từ 47 đến 50:
class SplayTree {
    Node* root;
    void insert(int key) {
        if (!root) { root = new Node(key); return; }
        Node* cur = root;
        Node* parent = NULL;
        while (cur) {
            parent = cur;
            if (key < cur->key) cur = cur->left;
            else if (key > cur->key) cur = cur->right;
        }
        Node* newNode = new Node(key);
        newNode->parent = parent;
        if (key < parent->key) parent->left = newNode;
        else parent->right = newNode;
        /* CODE 4 */
    }
};`,
    },
    "options": {
      "A": "rotateLeft(p); rotateRight(g);",
      "B": "rotateRight(p); rotateRight(g);",
      "C": "rotateLeft(g); rotateLeft(p);",
      "D": "rotateRight(g); rotateLeft(p);"
    },
    "answer": "A"
  },
  {
    "id": 49,
    "chapter": "Tree",
    "question": {
      "main": "Fill in CODE 3 for the Zig-Zag Left-Right case in a Splay Tree.",
    "context": `// Thông tin dùng cho câu từ 47 đến 50:
class SplayTree {
    Node* root;
    void insert(int key) {
        if (!root) { root = new Node(key); return; }
        Node* cur = root;
        Node* parent = NULL;
        while (cur) {
            parent = cur;
            if (key < cur->key) cur = cur->left;
            else if (key > cur->key) cur = cur->right;
        }
        Node* newNode = new Node(key);
        newNode->parent = parent;
        if (key < parent->key) parent->left = newNode;
        else parent->right = newNode;
        /* CODE 4 */
    }
};`,
    },
    "options": {
      "A": "rotateRight(g); rotateRight(p);",
      "B": "rotateLeft(g); rotateLeft(p);",
      "C": "rotateRight(p); rotateLeft(g);",
      "D": "rotateLeft(p); rotateRight(g);"
    },
    "answer": "A"
  },
  {
    "id": 50,
    "chapter": "Tree",
    "question": {
      "main": "Fill in CODE 4 at the end of the Splay Tree insert routine.",
    "context": `// Thông tin dùng cho câu từ 47 đến 50:
class SplayTree {
    Node* root;
    void insert(int key) {
        if (!root) { root = new Node(key); return; }
        Node* cur = root;
        Node* parent = NULL;
        while (cur) {
            parent = cur;
            if (key < cur->key) cur = cur->left;
            else if (key > cur->key) cur = cur->right;
        }
        Node* newNode = new Node(key);
        newNode->parent = parent;
        if (key < parent->key) parent->left = newNode;
        else parent->right = newNode;
        /* CODE 4 */
    }
};`,
    },
    "options": {
      "A": "splay(newNode);",
      "B": "splay(parent);",
      "C": "splay(root);",
      "D": "return;"
    },
    "answer": "A"
  },
  {
    "id": 51,
    "chapter": "Tree",
    "question": {
      "main": "Insert keys 15, 20, 25, 30, 10, 5 into an AVL tree. Which node becomes the final root?"
    },
    "options": {
      "A": "15",
      "B": "20",
      "C": "25",
      "D": "30"
    },
    "answer": "B"
  },
  {
    "id": 52,
    "chapter": "Tree",
    "question": {
      "main": "In an AVL tree, if a node has balance factor +2 and its left child has balance factor -1, which rotation is required?"
    },
    "options": {
      "A": "Single Right Rotation (LL)",
      "B": "Single Left Rotation (RR)",
      "C": "Left-Right Rotation (LR)",
      "D": "Right-Left Rotation (RL)"
    },
    "answer": "C"
  },
  {
    "id": 53,
    "chapter": "Tree",
    "question": {
      "main": "A BST has pre-order traversal: 10, 5, 3, 7, 15, 12, 18. What is the post-order traversal?"
    },
    "options": {
      "A": "3, 5, 7, 10, 12, 15, 18",
      "B": "3, 7, 5, 12, 18, 15, 10",
      "C": "18, 15, 12, 10, 7, 5, 3",
      "D": "7, 3, 5, 18, 12, 15, 10"
    },
    "answer": "B"
  },
  {
    "id": 54,
    "chapter": "Tree",
    "question": {
      "main": "What is the maximum number of keys inside an internal node of a B-Tree with order m = 4?"
    },
    "options": {
      "A": "4",
      "B": "3",
      "C": "2",
      "D": "1"
    },
    "answer": "B"
  },
  {
    "id": 55,
    "chapter": "Tree",
    "question": {
      "main": "Which architectural constraint is mandatory for any valid B-Tree?"
    },
    "options": {
      "A": "All leaf nodes must be at the same level",
      "B": "Every internal node must contain exactly m/2 keys",
      "C": "A B-Tree can only store integer data",
      "D": "The root node cannot have fewer than m/2 children"
    },
    "answer": "A"
  },
  {
    "id": 56,
    "chapter": "Tree",
    "question": {
      "main": "In a Rope structure, how is the weight of an internal node defined?"
    },
    "options": {
      "A": "Length of the right subtree",
      "B": "Length of left subtree plus current node",
      "C": "Total length of all leaf strings in the left subtree",
      "D": "Maximum height from the node to deepest leaf"
    },
    "answer": "C"
  },
  {
    "id": 57,
    "chapter": "Tree",
    "question": {
      "main": "In Rope.charAt(), node X has weight = 8 and index = 10. What happens next?"
    },
    "options": {
      "A": "Throw out-of-bounds error",
      "B": "Traverse left with index 10",
      "C": "Traverse right with index 2",
      "D": "Return character at position 2 in X"
    },
    "answer": "C"
  },
  {
    "id": 58,
    "chapter": "Tree",
    "question": {
      "main": "What feature distinguishes a Splay Tree from a normal BST?"
    },
    "options": {
      "A": "Strict balance factor enforcement",
      "B": "Recently accessed node is moved to the root via rotations",
      "C": "All nodes are reordered descending after deletion",
      "D": "Nodes split when key count exceeds threshold"
    },
    "answer": "B"
  },
  {
    "id": 59,
    "chapter": "Tree",
    "question": {
      "main": "When is the Zig-Zag operation performed in a Splay Tree?"
    },
    "options": {
      "A": "x is left child of p and p is left child of g",
      "B": "x has no grandparent",
      "C": "x is right child of p and p is left child of g (or vice versa)",
      "D": "x is right child of p and p is right child of g"
    },
    "answer": "C"
  },
  {
    "id": 60,
    "chapter": "Tree",
    "question": {
      "main": "What is the amortized complexity of Search, Insert, and Delete in a Splay Tree?"
    },
    "options": {
      "A": "O(1)",
      "B": "O(log n)",
      "C": "O(n)",
      "D": "O(n log n)"
    },
    "answer": "B"
  },
  {
    "id": 61,
    "chapter": "Tree",
    "question": {
      "main": "Identify the missing statement required to safely compute the height of an AVL node.",
    "context": `int updateHeight(Node* node) {
    if (!node) return 0;
    node->height = 1 + _______;
}`,
    },
    "options": {
      "A": "max(node->left->height, node->right->height)",
      "B": "max(getHeight(node->left), getHeight(node->right))",
      "C": "getHeight(node->left) + getHeight(node->right)",
      "D": "getHeight(node) + 1"
    },
    "answer": "B"
  },
  {
    "id": 62,
    "chapter": "Tree",
    "question": {
      "main": "When deleting an internal node with two child subtrees from a BST, what replacement strategy preserves BST order?"
    },
    "options": {
      "A": "Delete the entire right subtree",
      "B": "Replace with the minimum value in the left child",
      "C": "Replace with the In-order Predecessor or In-order Successor",
      "D": "Replace with the root of the tree"
    },
    "answer": "C"
  },
  {
    "id": 63,
    "chapter": "Tree",
    "question": {
      "main": "A Complete Binary Tree contains exactly 15 nodes. Assuming the root is at height 0, what is the total height of the tree?"
    },
    "options": {
      "A": "3",
      "B": "4",
      "C": "15",
      "D": "2"
    },
    "answer": "A"
  },
  {
    "id": 64,
    "chapter": "Tree",
    "question": {
      "main": "In a Rope structure, how does concatNodes(Node* R1, Node* R2) merge two ropes?"
    },
    "options": {
      "A": "Create a new parent node with R1 as left child and R2 as right child",
      "B": "Copy all data from R2 into the last leaf of R1",
      "C": "Move all nodes of R2 into the left subtree of R1",
      "D": "Rotate R1 left and attach R2"
    },
    "answer": "A"
  },
  {
    "id": 65,
    "chapter": "Tree",
    "question": {
      "main": "What happens in a Splay Tree when searching for a key that does not exist?"
    },
    "options": {
      "A": "The tree remains unchanged",
      "B": "The algorithm enters an infinite loop",
      "C": "The last accessed non-null node is splayed to the root",
      "D": "The old root is removed"
    },
    "answer": "C"
  },
  {
    "id": 66,
    "chapter": "Tree",
    "question": {
      "main": "In a B-Tree of order m = 5, what is the minimum number of child subtrees required for an internal node (excluding the root)?"
    },
    "options": {
      "A": "2",
      "B": "3",
      "C": "5",
      "D": "4"
    },
    "answer": "B"
  },
  {
    "id": 67,
    "chapter": "Tree",
    "question": {
      "main": "Which statement correctly compares AVL Trees and Red-Black Trees?"
    },
    "options": {
      "A": "AVL Trees are more strictly balanced, giving faster lookups but more insertion/deletion overhead",
      "B": "Red-Black Trees always have smaller height than AVL Trees",
      "C": "Both structures degrade to O(n) for all lookups",
      "D": "AVL Trees are multi-way search trees"
    },
    "answer": "A"
  },
  {
    "id": 68,
    "chapter": "Tree",
    "question": {
      "main": "Complete the AVL balance factor function.",
    "context": `int getBalance(Node* n) {
    if (!n) return 0;
    return _______;
}`,
    },
    "options": {
      "A": "getHeight(n->left) - getHeight(n->right)",
      "B": "getHeight(n->right) + getHeight(n->left)",
      "C": "n->left->height / n->right->height",
      "D": "max(getHeight(n->left), getHeight(n->right))"
    },
    "answer": "A"
  },
  {
    "id": 69,
    "chapter": "Tree",
    "question": {
      "main": "If values are inserted into a standard BST in sorted order (1, 2, 3, 4, 5), what happens?"
    },
    "options": {
      "A": "The tree becomes perfectly balanced",
      "B": "The tree degenerates into a skewed linear structure",
      "C": "The tree automatically performs B-Tree splits",
      "D": "The tree rejects the sequence"
    },
    "answer": "B"
  },
  {
    "id": 70,
    "chapter": "Tree",
    "question": {
      "main": "In a Rope split() operation, if the split index exactly equals the weight of the target internal node, what is the optimal pointer assignment?"
    },
    "options": {
      "A": "outLeft = node->left; outRight = node->right;",
      "B": "Recursively split all leaf nodes",
      "C": "outLeft = nullptr; outRight = node;",
      "D": "Create two entirely new Rope structures"
    },
    "answer": "A"
  }
];

export default tree;