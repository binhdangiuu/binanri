const fs = require('fs');
const path = 'src/data/tree.js';
const text = fs.readFileSync(path, 'utf8');
const start = text.indexOf('  {\n    "id": 40,');
const end = text.indexOf('  {\n    "id": 47,');
if (start === -1 || end === -1) {
  throw new Error('Could not find replacement boundaries');
}
const before = text.slice(0, start);
const after = text.slice(end);
const replacement = `  {
    "id": 40,
    "chapter": "Tree",
    "question": {
      "main": "Fill in CODE 1 and CODE 2 in rotateLeft() for the Rope structure.",
      "context": `// Thông tin dùng cho câu từ 40 đến 46:
class Rope {
private:
    class Node {
    public:
        enum BalanceFactor { LH = 1, EH = 0, RH = -1 };
        friend class Rope;
    private:
        Node* left;
        Node* right;
        string data;
        int weight;
        int height;
        BalanceFactor balance;
        Node();
        explicit Node(const string &s);
        bool isLeaf() const;
    };
    Node* root;
    Node* rotateLeft(Node* x);
    Node* rebalance(Node* node);
    void split(Node* node, int index, Node*& outLeft, Node*& outRight);
    Node* concatNodes(Node* left, Node* right);
    char charAt(Node* node, int index) const;
public:
    Rope();
    ~Rope();
    char charAt(int index) const;
    int length() const;
    string substring(int start, int len) const;
    void insert(int index, const string &s);
};

Node* rotateLeft(Node* x) {
    Node* y = x->right;
    /* CODE 1 */
    y->left = x;
    /* CODE 2 */
    return y;
}`
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
      "main": "Complete the missing sections within the Rope charAt() method.",
      "context": `// Thông tin dùng cho câu từ 40 đến 46:
class Rope {
private:
    class Node {
    public:
        enum BalanceFactor { LH = 1, EH = 0, RH = -1 };
        friend class Rope;
    private:
        Node* left;
        Node* right;
        string data;
        int weight;
        int height;
        BalanceFactor balance;
        Node();
        explicit Node(const string &s);
        bool isLeaf() const;
    };
    Node* root;
    Node* rotateLeft(Node* x);
    Node* rebalance(Node* node);
    void split(Node* node, int index, Node*& outLeft, Node*& outRight);
    Node* concatNodes(Node* left, Node* right);
    char charAt(Node* node, int index) const;
public:
    Rope();
    ~Rope();
    char charAt(int index) const;
    int length() const;
    string substring(int start, int len) const;
    void insert(int index, const string &s);
};

char charAt(Node *node, int index) const {
    if (node->isLeaf()) {
        /* CODE 1 */
    }
    if (/* CODE 2 */) {
        return charAt(node->left, index);
    } else {
        return charAt(node->right, /* CODE 3 */);
    }
}`
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
      "main": "What is the time complexity of findFirstChar() using Rope.charAt()?",
      "context": `// Thông tin dùng cho câu từ 40 đến 46:
class Rope {
private:
    class Node {
    public:
        enum BalanceFactor { LH = 1, EH = 0, RH = -1 };
        friend class Rope;
    private:
        Node* left;
        Node* right;
        string data;
        int weight;
        int height;
        BalanceFactor balance;
        Node();
        explicit Node(const string &s);
        bool isLeaf() const;
    };
    Node* root;
    Node* rotateLeft(Node* x);
    Node* rebalance(Node* node);
    void split(Node* node, int index, Node*& outLeft, Node*& outRight);
    Node* concatNodes(Node* left, Node* right);
    char charAt(Node* node, int index) const;
public:
    Rope();
    ~Rope();
    char charAt(int index) const;
    int length() const;
    string substring(int start, int len) const;
    void insert(int index, const string &s);
};

char findFirstChar(const Rope &rope, char target) {
    int n = rope.length();
    for (int i = 0; i < n; ++i) {
        if (rope.charAt(i) == target) {
            return rope.charAt(i);
        }
    }
    return '\0'; // Không tìm thấy
}`
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
      "main": "Provide CODE 1 inside the Rope substringHelper() routine.",
      "context": `// Thông tin dùng cho câu từ 40 đến 46:
class Rope {
private:
    class Node {
    public:
        enum BalanceFactor { LH = 1, EH = 0, RH = -1 };
        friend class Rope;
    private:
        Node* left;
        Node* right;
        string data;
        int weight;
        int height;
        BalanceFactor balance;
        Node();
        explicit Node(const string &s);
        bool isLeaf() const;
    };
    Node* root;
    Node* rotateLeft(Node* x);
    Node* rebalance(Node* node);
    void split(Node* node, int index, Node*& outLeft, Node*& outRight);
    Node* concatNodes(Node* left, Node* right);
    char charAt(Node* node, int index) const;
public:
    Rope();
    ~Rope();
    char charAt(int index) const;
    int length() const;
    string substring(int start, int len) const;
    void insert(int index, const string &s);
};

string substringHelper(Node *node, int start, int end) const {
    if (end < leftWeight) {
        return substringHelper(node->left, start, end);
    } else if (start >= leftWeight) {
        return substringHelper(node->right, start - leftWeight, end - leftWeight);
    } else {
        return substringHelper(node->left, start, leftWeight - 1) + /* CODE 1 */;
    }
}`
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
      "context": `// Thông tin dùng cho câu từ 40 đến 46:
class Rope {
private:
    class Node {
    public:
        enum BalanceFactor { LH = 1, EH = 0, RH = -1 };
        friend class Rope;
    private:
        Node* left;
        Node* right;
        string data;
        int weight;
        int height;
        BalanceFactor balance;
        Node();
        explicit Node(const string &s);
        bool isLeaf() const;
    };
    Node* root;
    Node* rotateLeft(Node* x);
    Node* rebalance(Node* node);
    void split(Node* node, int index, Node*& outLeft, Node*& outRight);
    Node* concatNodes(Node* left, Node* right);
    char charAt(Node* node, int index) const;
public:
    Rope();
    ~Rope();
    char charAt(int index) const;
    int length() const;
    string substring(int start, int len) const;
    void insert(int index, const string &s);
};

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
}`
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
      "context": `// Thông tin dùng cho câu từ 40 đến 46:
class Rope {
private:
    class Node {
    public:
        enum BalanceFactor { LH = 1, EH = 0, RH = -1 };
        friend class Rope;
    private:
        Node* left;
        Node* right;
        string data;
        int weight;
        int height;
        BalanceFactor balance;
        Node();
        explicit Node(const string &s);
        bool isLeaf() const;
    };
    Node* root;
    Node* rotateLeft(Node* x);
    Node* rebalance(Node* node);
    void split(Node* node, int index, Node*& outLeft, Node*& outRight);
    Node* concatNodes(Node* left, Node* right);
    char charAt(Node* node, int index) const;
public:
    Rope();
    ~Rope();
    char charAt(int index) const;
    int length() const;
    string substring(int start, int len) const;
    void insert(int index, const string &s);
};

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
}`
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
      "context": `// Thông tin dùng cho câu từ 40 đến 46:
class Rope {
private:
    class Node {
    public:
        enum BalanceFactor { LH = 1, EH = 0, RH = -1 };
        friend class Rope;
    private:
        Node* left;
        Node* right;
        string data;
        int weight;
        int height;
        BalanceFactor balance;
        Node();
        explicit Node(const string &s);
        bool isLeaf() const;
    };
    Node* root;
    Node* rotateLeft(Node* x);
    Node* rebalance(Node* node);
    void split(Node* node, int index, Node*& outLeft, Node*& outRight);
    Node* concatNodes(Node* left, Node* right);
    char charAt(Node* node, int index) const;
public:
    Rope();
    ~Rope();
    char charAt(int index) const;
    int length() const;
    string substring(int start, int len) const;
    void insert(int index, const string &s);
};

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
}`
    },
    "options": {
      "A": "outLeft = concatNodes(node->left, rightL);",
      "B": "outLeft = concatNodes(rightL, node->left);",
      "C": "outLeft = concatNodes(node->right, rightL);",
      "D": "outLeft = concatNodes(rightR, node->right);"
    },
    "answer": "A"
  },`;
fs.writeFileSync(path, before + replacement + after, 'utf8');
console.log('replaced 40-46 block');
