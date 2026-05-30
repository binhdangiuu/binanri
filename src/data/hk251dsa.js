const hk251DSA = [
  {
    "id": 1,
    "chapter": "Algorithm Analysis",
    "question": {
      "main": "What is the space complexity of the Iterative Binary Search algorithm?",
      "ask": "Select the correct complexity notation:"
    },
    "options": {
      "A": "O(1)",
      "B": "O(log n)",
      "C": "O(n)",
      "D": "O(n log n)"
    },
    "answer": "A"
  },
  {
    "id": 2,
    "chapter": "Advanced Data Structures",
    "question": {
      "main": "What is the time complexity of the Insert operation in an AVL Tree?",
      "ask": "Select the correct complexity notation:"
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
    "id": 3,
    "chapter": "Sorting Algorithms",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `void heapify(vector<int>& arr, int n, int i);

void heapSort(vector<int>& arr) {
    int n = arr.size();

    // Build heap
    for (int i = n / 2 - 1; i >= 0; i--) {
        /* Code1 */
    }

    // Extract elements
    for (int i = n - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        /* Code2 */
    }
}`,
      "ask": "Please fill in the missing logic for /* Code1 */ to correctly build a Max-Heap from the array nodes:"
    },
    "options": {
      "A": "heapify(arr, n, i);",
      "B": "heapify(arr, i, 0);",
      "C": "heapify(arr, n, 0);",
      "D": "heapify(arr, i, n);"
    },
    "answer": "A"
  },
  {
    "id": 4,
    "chapter": "Sorting Algorithms",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `void heapify(vector<int>& arr, int n, int i);

void heapSort(vector<int>& arr) {
    int n = arr.size();

    // Build heap
    for (int i = n / 2 - 1; i >= 0; i--) {
        /* Code1 */
    }

    // Extract elements
    for (int i = n - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        /* Code2 */
    }
}`,
      "ask": "Please fill in the missing logic for /* Code2 */ to restore the heap property from the root node after each element extraction swap:"
    },
    "options": {
      "A": "heapify(arr, n, i);",
      "B": "heapify(arr, i, 0);",
      "C": "heapify(arr, n, 0);",
      "D": "heapify(arr, 0, i);"
    },
    "answer": "B"
  },
  {
    "id": 5,
    "chapter": "Hashing",
    "question": {
      "main": "Given a hash table of size m = 19 using the hash function h(k) = k mod 19. Keys are inserted into the hash table in the following order: 15, 78, 56, 25, 19, 38, 57, 76, 34, 53, 72, 91. Assuming that Chaining is used to resolve collisions.",
      "ask": "Which hash table index will experience the maximum number of collisions?"
    },
    "options": {
      "A": "3",
      "B": "4",
      "C": "15",
      "D": "6"
    },
    "answer": "C"
  },
  {
    "id": 6,
    "chapter": "Hashing",
    "question": {
      "main": "Keys are inserted into an initially empty hash table of size 19 using the hash function h(k) = k % 19.",
      "ask": "Which of the following sequence of keys results in the absolute minimum number of collisions?"
    },
    "options": {
      "A": "0, 19, 57",
      "B": "19, 20, 21, 39, 40",
      "C": "19, 20, 21, 22, 23, 40, 41, 57",
      "D": "19, 20, 21, 22, 23, 46, 47, 57"
    },
    "answer": "D"
  },
  {
    "id": 7,
    "chapter": "Hashing",
    "question": {
      "main": "Keys 5, 7, 12, 25, 36, 58 are sequentially inserted into a hash table of size 11 using the hash function h(k) = k mod 11. Collisions are resolved using Open Addressing with the quadratic probing/linear probing style function p(k, i) = h(k) + 2 * i + 1.",
      "ask": "What is the final index position of key 58 in the hash table?"
    },
    "options": {
      "A": "0",
      "B": "3",
      "C": "6",
      "D": "9"
    },
    "answer": "C"
  },
  {
    "id": 8,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "If a graph has very few edges compared to its number of vertices (a sparse graph where E ≪ V²), which data structure is the most optimal in terms of memory space allocation?",
      "ask": "Select the best representation choice:"
    },
    "options": {
      "A": "Adjacency Matrix",
      "B": "Adjacency List",
      "C": "Both allocate identical memory space",
      "D": "Cannot be determined"
    },
    "answer": "B"
  },
  {
    "id": 9,
    "chapter": "Advanced Data Structures",
    "question": {
      "main": "A sequence of keys is sequentially inserted into an empty B-Tree of order m = 3:\n10, 20, 5, 6, 12, 30, 7, 17",
      "ask": "After completing all insertion processes, how many nodes in total contain more than 1 item (key)?"
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
    "id": 10,
    "chapter": "Advanced Data Structures",
    "question": {
      "main": "Given a B-Tree data structure with an order specification of m = 5.",
      "ask": "What is the maximum number of entries (keys) that any individual node can hold?"
    },
    "options": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "6"
    },
    "answer": "B"
  },
  {
    "id": 11,
    "chapter": "Advanced Data Structures",
    "question": {
      "main": "When the largest element (the root node) is removed from a Max-Heap structure,",
      "ask": "What is the immediate next required step to maintain and recover the heap properties?"
    },
    "options": {
      "A": "Insert a new element into the heap root location",
      "B": "Swap the root position with the smallest leaf value",
      "C": "Move the last element of the heap up to the root, then perform a heapify down operation",
      "D": "Re-sort the entire underlying structure array"
    },
    "answer": "C"
  },
  {
    "id": 12,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "An undirected graph is represented via an adjacency list as specified below (where adjacent neighbor vertices are traversed in ascending numeric label order):",
      "adjacencyList": {
        "1": [2, 3],
        "2": [1, 4, 5],
        "3": [1, 6],
        "4": [2],
        "5": [2, 6],
        "6": [3, 5]
      },
      "ask": "If a Breadth-First Search (BFS) traversal is executed starting from vertex 1, what is the exact resulting sequence of visited vertices?"
    },
    "options": {
      "A": "1, 2, 3, 4, 5, 6",
      "B": "1, 3, 2, 6, 5, 4",
      "C": "1, 2, 4, 5, 3, 6",
      "D": "1, 3, 6, 2, 5, 4"
    },
    "answer": "A"
  },
  {
    "id": 13,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given an undirected weighted graph represented by the following adjacency matrix (vertices are indexed from 1 to 5):\n[0, 2, 4, 0, 0]\n[2, 0, 1, 7, 0]\n[4, 1, 0, 0, 3]\n[0, 7, 0, 0, 1]\n[0, 0, 3, 1, 0]",
      "adjacencyMatrix": [
        [0, 2, 4, 0, 0],
        [2, 0, 1, 7, 0],
        [4, 1, 0, 0, 3],
        [0, 7, 0, 0, 1],
        [0, 0, 3, 1, 0]
      ],
      "ask": "What is the shortest path from vertex 1 to vertex 5?"
    },
    "options": {
      "A": "1 → 3 → 5",
      "B": "1 → 2 → 3 → 5",
      "C": "1 → 2 → 4 → 5",
      "D": "1 → 3 → 2 → 5"
    },
    "answer": "B"
  },
  {
    "id": 14,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given an undirected weighted graph represented by the following adjacency matrix (vertices are indexed from 1 to 5):\n[0, 2, 4, 0, 0]\n[2, 0, 1, 7, 0]\n[4, 1, 0, 0, 3]\n[0, 7, 0, 0, 1]\n[0, 0, 3, 1, 0]",
      "adjacencyMatrix": [
        [0, 2, 4, 0, 0],
        [2, 0, 1, 7, 0],
        [4, 1, 0, 0, 3],
        [0, 7, 0, 0, 1],
        [0, 0, 3, 1, 0]
      ],
      "ask": "What is the minimum total weight of the shortest path from vertex 1 to vertex 5?"
    },
    "options": {
      "A": "5",
      "B": "6",
      "C": "7",
      "D": "8"
    },
    "answer": "B"
  },
  {
    "id": 15,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given an undirected weighted graph represented by the following adjacency matrix (vertices are indexed from 1 to 5):\n[0, 2, 4, 0, 0]\n[2, 0, 1, 7, 0]\n[4, 1, 0, 0, 3]\n[0, 7, 0, 0, 1]\n[0, 0, 3, 1, 0]",
      "adjacencyMatrix": [
        [0, 2, 4, 0, 0],
        [2, 0, 1, 7, 0],
        [4, 1, 0, 0, 3],
        [0, 7, 0, 0, 1],
        [0, 0, 3, 1, 0]
      ],
      "ask": "What is the total weight of the Minimum Spanning Tree (MST) of this graph?"
    },
    "options": {
      "A": "6",
      "B": "7",
      "C": "8",
      "D": "9"
    },
    "answer": "B"
  },
  {
    "id": 16,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given a directed graph represented by an adjacency matrix A of size n × n.",
      "ask": "Select the correct mathematical expression to calculate the out-degree of a specific vertex u:"
    },
    "options": {
      "A": "∑_{i=1}^{n} A[i][u]",
      "B": "∑_{i=1}^{n} A[u][i]",
      "C": "∑_{i=1}^{n} A[i][i]",
      "D": "∑_{i=1}^{n} (A[u][i] + A[i][u])"
    },
    "answer": "B"
  },
  {
    "id": 17,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given a Directed Acyclic Graph (DAG) represented by the following adjacency matrix (vertices are indexed from 1 to 5):\n[0, 1, 1, 0, 0]\n[0, 0, 0, 1, 0]\n[0, 0, 0, 1, 1]\n[0, 0, 0, 0, 1]\n[0, 0, 0, 0, 0]",
      "adjacencyMatrix": [
        [0, 1, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0]
      ],
      "ask": "Which of the following sequences represents a valid topological sort order of this graph?"
    },
    "options": {
      "A": "1, 2, 3, 4, 5",
      "B": "1, 3, 2, 4, 5",
      "C": "2, 1, 3, 4, 5",
      "D": "Both A and B are correct"
    },
    "answer": "D"
  },
  {
    "id": 18,
    "chapter": "Searching Algorithms",
    "question": {
      "main": "Given an array sorted in ascending order:\n[2, 5, 8, 12, 16, 23, 38, 56, 72]",
      "ask": "Using the Binary Search algorithm to find the element 23, how many comparisons are required in the worst-case scenario to locate this element?"
    },
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "B"
  },
  {
    "id": 19,
    "chapter": "Advanced Data Structures",
    "question": {
      "main": "Given a binary heap stored in a 0-indexed array.",
      "ask": "Which of the following formulas is used to find the parent node index of a node located at index i?"
    },
    "options": {
      "A": "2i + 1",
      "B": "2i + 2",
      "C": "⌊i / 2⌋",
      "D": "⌊(i - 1) / 2⌋"
    },
    "answer": "D"
  },
  {
    "id": 20,
    "chapter": "Sorting Algorithms",
    "question": {
      "main": "What is the worst-case time complexity of the Heap Sort algorithm?",
      "ask": "Select the correct complexity notation:"
    },
    "options": {
      "A": "O(log n)",
      "B": "O(n)",
      "C": "O(n log n)",
      "D": "O(n^2)"
    },
    "answer": "C"
  },
  {
    "id": 21,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Consider checking whether an edge exists between two specific vertices u and v in a graph.",
      "ask": "What is the time complexity of this operation for both Adjacency Matrix and Adjacency List representations respectively?"
    },
    "options": {
      "A": "Adjacency Matrix: O(1) ; Adjacency List: O(deg(u))",
      "B": "Adjacency Matrix: O(n) ; Adjacency List: O(1)",
      "C": "Adjacency Matrix: O(log n) ; Adjacency List: O(n)",
      "D": "Adjacency Matrix: O(deg(u)) ; Adjacency List: O(1)"
    },
    "answer": "A"
  },
  {
    "id": 22,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Assume a graph can be represented by either an adjacency matrix or an adjacency list named \`adj\`.",
      "ask": "Select the correct statement/code block that accurately checks if there is a directed edge from vertex u to vertex v:"
    },
    "options": {
      "A": "return adj[u][v] == 1; (When using adjacency matrix)",
      "B": "for (int x : adj[u]) if (x == v) return true; return false; (When using adjacency list)",
      "C": "return adj[v][u] == 1; (When using adjacency matrix)",
      "D": "Both A and B are correct"
    },
    "answer": "D"
  },
  {
    "id": 23,
    "chapter": "Advanced Data Structures",
    "question": {
      "main": "Which of the following statements correctly describes the primary functionality and practical application of a B-Tree?",
      "ask": "Select the correct statement:"
    },
    "options": {
      "A": "It is used to store elements that have a high probability of being accessed frequently in the near future.",
      "B": "It is used to organize large data structures stored on external storage (disk) to minimize the number of disk I/O operations.",
      "C": "It is used to sort data collections within RAM significantly faster than QuickSort.",
      "D": "It is used for performing linear searches inside linked lists."
    },
    "answer": "B"
  },
  {
    "id": 24,
    "chapter": "Advanced Data Structures",
    "question": {
      "main": "Given an initially empty Splay Tree. We sequentially perform the following operations:\n• Insert keys: 10, 5, 15, 8, 3, 13, 14, 1\n• Search keys: 13, 10\n• Delete keys: 15, 10, 1",
      "ask": "What is the total number of remaining leaf nodes in the tree after executing all the above steps?"
    },
    "options": {
      "A": "18",
      "B": "19",
      "C": "4",
      "D": "5"
    },
    "answer": "A"
  },
  {
    "id": 25,
    "chapter": "Advanced Data Structures",
    "question": {
      "main": "The following code block is used to complete the \`countNodes\` function, which counts the total number of nodes inside a binary tree structure:",
      "context": `struct Node {
    int data;
    Node* left;
    Node* right;
};

int countNodes(Node* root) {
    if (/* Code1 */)
        return 0;
    return 1 + /* Code2 */ + /* Code3 */;
}`,
      "ask": "Please select the correct logical statements to fill in /* Code1 */, /* Code2 */, and /* Code3 */ respectively:"
    },
    "options": {
      "A": "Code1: root == NULL ; Code2: countNodes(root->left) ; Code3: countNodes(root->right)",
      "B": "Code1: root != NULL ; Code2: countNodes(root->left) ; Code3: countNodes(root->right)",
      "C": "Code1: root == NULL ; Code2: root->left ; Code3: root->right",
      "D": "Code1: root == NULL ; Code2: countNodes(root) ; Code3: countNodes(root)"
    },
    "answer": "A"
  },
  {
    "id": 26,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given a graph with n vertices and m edges represented by an adjacency matrix structure.",
      "ask": "What is the worst-case time complexity required to search and find all adjacent neighbor vertices of a single specific vertex u?"
    },
    "options": {
      "A": "O(1)",
      "B": "O(n)",
      "C": "O(m)",
      "D": "O(n + m)"
    },
    "answer": "B"
  },
  {
    "id": 27,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Suppose we perform a Breadth-First Search (BFS) traversal on a graph. During this traversal process, keys/vertices are sequentially pushed into a queue structure according to a pre-defined order.",
      "ask": "What is the maximum possible number of elements that can reside simultaneously in the queue at any single point in time?"
    },
    "options": {
      "A": "1",
      "B": "n + 1",
      "C": "n",
      "D": "n - 1"
    },
    "answer": "D"
  },
  {
    "id": 28,
    "chapter": "Advanced Data Structures",
    "question": {
      "main": "Keys are sequentially inserted into an initially empty AVL tree structure in the following order: 50, 23, 70, 19, 29, 65, 83, 25, 35, 53.",
      "ask": "After completing the AVL tree construction, which path of nodes must be traversed from the root to locate element 25?"
    },
    "options": {
      "A": "50 → 23 → 29 → 25",
      "B": "50 → 23 → 19 → 25",
      "C": "50 → 70 → 65 → 25",
      "D": "50 → 23 → 25"
    },
    "answer": "A"
  },
  {
    "id": 29,
    "chapter": "Advanced Data Structures",
    "question": {
      "main": "Keys are sequentially inserted into an initially empty Binary Search Tree (BST) structure in the following order: 50, 23, 70, 19, 29, 65, 83, 25, 35, 53.",
      "ask": "After completing the BST tree construction, which path of nodes must be traversed from the root to locate element 25?"
    },
    "options": {
      "A": "50 → 23 → 29 → 25",
      "B": "50 → 23 → 19 → 25",
      "C": "50 → 70 → 65 → 25",
      "D": "50 → 23 → 25"
    },
    "answer": "A"
  },
{
    "id": 30,
    "chapter": "Advanced Data Structures",
    "question": {
      "main": "Consider the following analytical statements regarding Heap structures:",
      "statements": [
        "A Heap is a complete binary tree.",
        "A Heap is a binary search tree (BST).",
        "In a max-heap, every parent node has a value greater than or equal to the values of its child nodes.",
        "A Heap is always a balanced binary tree."
      ],
      "ask": "How many of the above statements are CORRECT?"
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
    "id": 31,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Under which of the following graph scenario characteristics can the Breadth-First Search (BFS) algorithm guarantee finding the absolute shortest path (in terms of edge count / minimum total weight) from a source node?",
      "ask": "Select the correct scenario condition:"
    },
    "options": {
      "A": "Any arbitrary weighted graph structure",
      "B": "A directed graph with strictly positive edge weights",
      "C": "An undirected graph with any arbitrary edge weights",
      "D": "An unweighted graph (or a graph where all edge weights are exactly equal)"
    },
    "answer": "D"
  },
{
    "id": 32,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Consider the following analytical statements regarding an acyclic graph (a graph containing no cycles):",
      "statements": [
        "A Directed Acyclic Graph (DAG) always possesses at least one valid topological sort order.",
        "An unrooted undirected acyclic graph is a tree if it is completely connected.",
        "If a graph has a valid topological sort order, then it is guaranteed to be acyclic.",
        "Every single arbitrary acyclic graph structure is always connected."
      ],
      "ask": "How many of the above statements are CORRECT?"
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
    "id": 33,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "During the execution of a Depth-First Search (DFS) traversal on a graph structure, at what exact condition can a cycle (loop) be successfully detected?",
      "ask": "Select the correct detection state logic:"
    },
    "options": {
      "A": "Whenever the traversal encounters any previously visited vertex",
      "B": "Whenever the traversal encounters a previously visited vertex that is not the immediate parent node of the current vertex",
      "C": "When encountering a vertex whose vertex degree is strictly greater than 2",
      "D": "When the total number of edges in the component strictly exceeds the total number of vertices"
    },
    "answer": "B"
  },
  {
    "id": 34,
    "chapter": "Advanced Data Structures",
    "question": {
      "main": "Which of the following array internal sorting patterns will ALWAYS satisfy the strict structural definition of a min-heap?",
      "ask": "Select the correct pattern choice:"
    },
    "options": {
      "A": "An array sorted in strictly descending order",
      "B": "An array sorted in strictly ascending order",
      "C": "An array whose first element holds the smallest value",
      "D": "An array whose first element holds the largest value"
    },
    "answer": "B"
  },
{
    "id": 35,
    "chapter": "Hashing",
    "question": {
      "main": "To optimize and enhance the search efficiency within a hash table structure, which of the following implementation methodologies can be actively applied?",
      "statements": [
        "Design an efficient hash function to minimize initial collisions.",
        "Ensure clustering phenomena are completely avoided during collision resolution processes.",
        "Intentionally increase the overall load factor (α) value."
      ],
      "ask": "Which of the above optimization declarations are completely CORRECT?"
    },
    "options": {
      "A": "Only statement (a) is correct",
      "B": "Only statement (b) is correct",
      "C": "Both statements (a) and (b) are correct",
      "D": "Both statements (b) and (c) are correct"
    },
    "answer": "C"
  }
];

export default hk251DSA;