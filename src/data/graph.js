const graph = [
    {
    "id": 1,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Let G be a simple graph with 20 vertices and 8 connected components. If one vertex of G is removed,",
      "ask": "then the number of connected components of G will lie within the range . . . ."
    },
    "options": {
      "A": "8 and 20",
      "B": "8 and 19",
      "C": "7 and 19",
      "D": "7 and 20"
    },
    "answer": "C"
  },
  {
    "id": 2,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given a directed graph with the following edges: (A, B, 6), (A, D, 3), (B, C, 2), (C, E, 5), (D, E, 7). If the DFS algorithm is executed starting from vertex A, with priority given in ascending alphabetical order,",
      "ask": "what is the traversal order of the vertices?"
    },
    "options": {
      "A": "A B C E D",
      "B": "A D E B C",
      "C": "A B D C E",
      "D": "A D B C E"
    },
    "answer": "A"
  },
  {
    "id": 3,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given a directed graph with the following edges: (A, B, 6), (A, D, 3), (B, C, 2), (C, E, 5), (D, E, 7). If the BFS algorithm is executed starting from vertex A, with priority given in ascending alphabetical order,",
      "ask": "what is the traversal order of the vertices?"
    },
    "options": {
      "A": "A B D C E",
      "B": "A D B C E",
      "C": "A B C D E",
      "D": "A D E B C"
    },
    "answer": "A"
  },
  {
    "id": 4,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given a directed graph with the following edges: (A, B), (A, C), (B, D), (C, E), (E, D), (E, F). Execute the DFS algorithm (traversing in ascending lexicographical order) starting from vertex A. When the algorithm has just reached vertex C,",
      "ask": "which vertices are contained in the DFS stack?"
    },
    "options": {
      "A": "A, B, C",
      "B": "A, B, D, C",
      "C": "A, B, D, E, C",
      "D": "A, C"
    },
    "answer": "D"
  },
  {
    "id": 5,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given a directed graph with the following edges: (A, B), (A, C), (B, D), (C, E), (E, D), (E, F). Execute the BFS algorithm (traversing in ascending lexicographical order) starting from vertex A. When the algorithm has just reached vertex C,",
      "ask": "which vertices are contained in the BFS queue?"
    },
    "options": {
      "A": "C, D",
      "B": "B, D, C",
      "C": "D, E, F",
      "D": "D, C"
    },
    "answer": "A"
  },
  {
    "id": 6,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given a directed graph represented by the following adjacency matrix (indexing starts at 1):",
      "matrix": [
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [0, 0, 0, 1],
        [1, 1, 0, 0]
      ],
      "ask": "What are the in-degree and out-degree of vertex 2?"
    },
    "options": {
      "A": "In-degree = 1, Out-degree = 2",
      "B": "In-degree = 2, Out-degree = 2",
      "C": "In-degree = 2, Out-degree = 1",
      "D": "In-degree = 1, Out-degree = 1"
    },
    "answer": "B"
  },
  {
    "id": 7,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given a weighted undirected graph represented by the following edge list: (A, B, 4), (A, C, 2), (B, D, 5), (C, E, 1), (E, D, 3), (E, F, 7), (D, F, 6), (B, E, 8).",
      "ask": "What is the total minimum weight of the Minimum Spanning Tree (MST)?"
    },
    "options": {
      "A": "13",
      "B": "15",
      "C": "16",
      "D": "17"
    },
    "answer": "C"
  },
  {
    "id": 8,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given a graph with V vertices and E edges.",
      "ask": "What is the time complexity of the Depth First Search (DFS) and Breadth First Search (BFS) algorithms respectively?"
    },
    "options": {
      "A": "O(V^2) for both DFS and BFS",
      "B": "O(V + E) for both DFS and BFS",
      "C": "O(E log V) for DFS, O(V log V) for BFS",
      "D": "O(V) for DFS, O(E) for BFS"
    },
    "answer": "B"
  },
  {
    "id": 9,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given an undirected graph with the following edges: (A, B), (A, C), (B, D), (E, F). Execute the DFS algorithm (traversing in ascending lexicographical order) starting from vertex A.",
      "ask": "What is the traversal order of the vertices?"
    },
    "options": {
      "A": "A, B, D, C, E, F",
      "B": "A, C, B, D, E, F",
      "C": "A, B, C, D, F, E",
      "D": "A, D, B, C, E, F"
    },
    "answer": "A"
  },
  {
    "id": 10,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given a Directed Acyclic Graph (DAG) with the following edges: (A, B), (A, C), (B, D), (C, D), (D, E). When applying the Topological Sort algorithm (using BFS with a queue),",
      "ask": "which of the following sequences is a valid result?"
    },
    "options": {
      "A": "A → B → C → D → E",
      "B": "A → C → B → E → C",
      "C": "A → B → D → C → E",
      "D": "A → C → D → B → E"
    },
    "answer": "A"
  },
  {
    "id": 11,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given a directed graph G(V, E) with V = {A, B, C, D, E, F} and the following adjacency matrix E:",
      "matrix": [
        [0, 1, 1, 0, 1, 0],
        [1, 0, 0, 1, 1, 0],
        [1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 1, 0],
        [1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ],
      "ask": "What is the result of traversing the graph using the DFS (Depth-First Search) algorithm starting from vertex A (with alphabetical priority)?"
    },
    "options": {
      "A": "A B C D E F",
      "B": "A B D C E F",
      "C": "A C D B E F",
      "D": "A E D C B F"
    },
    "answer": "B"
  },
  {
    "id": 12,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "Given a directed graph G(V, E) with V = {A, B, C, D, E, F} and the following adjacency matrix:",
      "matrix": [
        [0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
      ],
      "ask": "Which vertices are visited to find a path from A to F using the BFS (Breadth-First Search) algorithm?"
    },
    "options": {
      "A": "A E F",
      "B": "A B D F",
      "C": "A B C E D F",
      "D": "A B C D E F"
    },
    "answer": "C"
  },
]
export default graph;