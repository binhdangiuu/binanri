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
];

export default hk251DSA;