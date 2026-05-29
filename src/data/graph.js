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
  {
    "id": 13,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `void DFS(int u) {
    visited[u] = true;
    for (int v : adj[u]) {
        if (!visited[v]) {
            /*Code1*/
        }
    }
}`,
      "ask": "Please fill in the missing logic for /*Code1*/ to correctly traverse the undirected graph using recursive DFS:"
    },
    "options": {
      "A": "DFS(v);",
      "B": "visited[v] = true;",
      "C": "DFS(u);",
      "D": "continue;"
    },
    "answer": "A"
  },
  {
    "id": 14,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `int cnt = 0;
for (int u = 1; u <= n; ++u) {
    if (!visited[u]) {
        /*Code2*/
        ++cnt;
    }
}`,
      "ask": "Please fill in the missing logic for /*Code2*/ to correctly count the total number of connected components using recursive DFS:"
    },
    "options": {
      "A": "DFS(cnt);",
      "B": "visited[u] = true;",
      "C": "DFS(u);",
      "D": "cnt = 0;"
    },
    "answer": "C"
  },
  {
    "id": 15,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `// Giả sử MAX đã được khai báo
vector<int> adj[MAX];
bool visited[MAX];

void DFS(int start) {
    stack<int> st;
    st.push(start);

    while (!st.empty()) {
        int u = /*Code1*/;
        st.pop();

        if (!visited[u]) {
            visited[u] = true;
            cout << u << " ";

            for (int i = adj[u].size() - 1; i >= 0; --i) {
                int v = /*Code2*/;
                if (!visited[v]) {
                    st.push(v);
                }
            }
        }
    }
}`,
      "ask": "Please fill in the missing logic for /*Code1*/ to correctly fetch the top element from the stack:"
    },
    "options": {
      "A": "st.push(u)",
      "B": "true",
      "C": "st.pop()",
      "D": "st.top()"
    },
    "answer": "D"
  },
  {
    "id": 16,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `// Giả sử MAX đã được khai báo
vector<int> adj[MAX];
bool visited[MAX];

void DFS(int start) {
    stack<int> st;
    st.push(start);

    while (!st.empty()) {
        int u = /*Code1*/;
        st.pop();

        if (!visited[u]) {
            visited[u] = true;
            cout << u << " ";

            for (int i = adj[u].size() - 1; i >= 0; --i) {
                int v = /*Code2*/;
                if (!visited[v]) {
                    st.push(v);
                }
            }
        }
    }
}`,
      "ask": "Please fill in the missing logic for /*Code2*/ to correctly get the adjacent vertex from the adjacency list:"
    },
    "options": {
      "A": "adj[u][U]",
      "B": "adj[u][i]",
      "C": "adj[u+1][i]",
      "D": "adj[u][i+1]"
    },
    "answer": "B"
  },
  {
    "id": 17,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `// Giả sử MAX đã được khai báo
vector<int> adj[MAX];
bool visited[MAX];

void BFS(int start) {
    queue<int> q;
    visited[start] = true;
    q.push(start);

    while (!q.empty()) {
        int u = /*Code1*/;
        q.pop();
        cout << u << " ";

        for (int i = 0; i < adj[u].size(); ++i) {
            int v = /*Code2*/;
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}`,
      "ask": "Please fill in the missing logic for /*Code1*/ to correctly retrieve the first element from the queue:"
    },
    "options": {
      "A": "q.size();",
      "B": "q.front();",
      "C": "q.pop();",
      "D": "q.back();"
    },
    "answer": "B"
  },
  {
    "id": 18,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `// Giả sử MAX đã được khai báo
vector<int> adj[MAX];
bool visited[MAX];

void BFS(int start) {
    queue<int> q;
    visited[start] = true;
    q.push(start);

    while (!q.empty()) {
        int u = /*Code1*/;
        q.pop();
        cout << u << " ";

        for (int i = 0; i < adj[u].size(); ++i) {
            int v = /*Code2*/;
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}`,
      "ask": "Please fill in the missing logic for /*Code2*/ to correctly access the adjacent vertex of the current vertex being processed:"
    },
    "options": {
      "A": "adj[u][i]",
      "B": "adj[i][u]",
      "C": "adj[u+i]",
      "D": "adj[u][u]"
    },
    "answer": "A"
  },
  {
    "id": 19,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "The following code block demonstrates how to perform Topological Sort using `std::queue` (Kahn's Algorithm):",
      "context": `vector<int> topoSort(int V, vector<int> adj[]) {
    vector<int> inDegree(V, 0);
    for (int u = 0; u < V; u++) {
        for (int v : adj[u]) {
            inDegree[v]++;
        }
    }

    queue<int> q;
    for (int i = 0; i < V; i++) {
        if (inDegree[i] == 0) {
            q.push(i);
        }
    }

    vector<int> topoOrder;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        topoOrder.push_back(u);

        for (int v : adj[u]) {
            inDegree[v]--;
            /*Code1*/
        }
    }
    return topoOrder;
}`,
      "ask": "Please fill in the missing logic for /*Code1*/ to correctly push the vertex into the queue when its in-degree becomes 0:"
    },
    "options": {
      "A": "if (inDegree[v] == 0) q.push(v);",
      "B": "if (inDegree[v] != 0) q.push(v);",
      "C": "if (inDegree[v] == 1) q.push(v);",
      "D": "if (inDegree[v] < 0) q.push(v);"
    },
    "answer": "A"
  },
  {
    "id": 20,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "The following code block is used for the next 5 questions (implementing Dijkstra's Algorithm using an adjacency matrix):",
      "context": `class Graph {
private:
    int nover; // number of vertices in the graph
    int **wm;  // adjacency matrix representing weights
    int minDistance(int dist[], bool sptSet[]) {
        int min = INT_MAX, min_index;
        for (int v = 0; v < nover; v++)
            if (sptSet[v] == false && dist[v] <= min)
                min = dist[v], min_index = v;
        return min_index;
    }
public:
    void dijkstra(int src) {
        int dist[nover];
        bool sptSet[nover];
        for (int i = 0; i < nover; i++)
            dist[i] = INT_MAX, sptSet[i] = false;
        dist[src] = 0;
        for (int count = 0; count < /*Code1*/; count++) {
            int u = minDistance(dist, sptSet);
            /*Code2*/ = true;
            for (int v = 0; v < nover; v++)
                if (!sptSet[v] && dist[u] != INT_MAX && /*Code3*/)
                    dist[v] = /*Code4*/;
        }
        // printSolution(dist);
    }
};`,
      "ask": "Please fill in the missing logic for /*Code1*/ to ensure the outer loop runs the correct number of iterations to process the remaining vertices:"
    },
    "options": {
      "A": "nover",
      "B": "nover - 1",
      "C": "src",
      "D": "src - 1"
    },
    "answer": "B"
  },
  {
    "id": 21,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "The following code block is used for the next 5 questions (implementing Dijkstra's Algorithm using an adjacency matrix):",
      "context": `class Graph {
private:
    int nover; // number of vertices in the graph
    int **wm;  // adjacency matrix representing weights
    int minDistance(int dist[], bool sptSet[]) {
        int min = INT_MAX, min_index;
        for (int v = 0; v < nover; v++)
            if (sptSet[v] == false && dist[v] <= min)
                min = dist[v], min_index = v;
        return min_index;
    }
public:
    void dijkstra(int src) {
        int dist[nover];
        bool sptSet[nover];
        for (int i = 0; i < nover; i++)
            dist[i] = INT_MAX, sptSet[i] = false;
        dist[src] = 0;
        for (int count = 0; count < /*Code1*/; count++) {
            int u = minDistance(dist, sptSet);
            /*Code2*/ = true;
            for (int v = 0; v < nover; v++)
                if (!sptSet[v] && dist[u] != INT_MAX && /*Code3*/)
                    dist[v] = /*Code4*/;
        }
        // printSolution(dist);
    }
};`,
      "ask": "Please fill in the missing logic for /*Code2*/ to mark the newly selected vertex `u` as processed in the shortest path tree set:"
    },
    "options": {
      "A": "sptSet[u]",
      "B": "sptSet[src]",
      "C": "sptSet[count]",
      "D": "sptSet[nover]"
    },
    "answer": "A"
  },
  {
    "id": 22,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "The following code block is used for the next 5 questions (implementing Dijkstra's Algorithm using an adjacency matrix):",
      "context": `class Graph {
private:
    int nover; // number of vertices in the graph
    int **wm;  // adjacency matrix representing weights
    int minDistance(int dist[], bool sptSet[]) {
        int min = INT_MAX, min_index;
        for (int v = 0; v < nover; v++)
            if (sptSet[v] == false && dist[v] <= min)
                min = dist[v], min_index = v;
        return min_index;
    }
public:
    void dijkstra(int src) {
        int dist[nover];
        bool sptSet[nover];
        for (int i = 0; i < nover; i++)
            dist[i] = INT_MAX, sptSet[i] = false;
        dist[src] = 0;
        for (int count = 0; count < /*Code1*/; count++) {
            int u = minDistance(dist, sptSet);
            /*Code2*/ = true;
            for (int v = 0; v < nover; v++)
                if (!sptSet[v] && dist[u] != INT_MAX && /*Code3*/)
                    dist[v] = /*Code4*/;
        }
        // printSolution(dist);
    }
};`,
      "ask": "Please fill in the missing logic for /*Code3*/ to check if the path through vertex `u` to vertex `v` is shorter than the currently recorded distance to vertex `v`:"
    },
    "options": {
      "A": "wm[u][v] < dist[v]",
      "B": "dist[v] + wm[u][v] < dist[u]",
      "C": "wm[u][v] < dist[u]",
      "D": "dist[u] + wm[u][v] < dist[v]"
    },
    "answer": "D"
  },
  {
    "id": 23,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "The following code block is used for the next 5 questions (implementing Dijkstra's Algorithm using an adjacency matrix):",
      "context": `class Graph {
private:
    int nover; // number of vertices in the graph
    int **wm;  // adjacency matrix representing weights
    int minDistance(int dist[], bool sptSet[]) {
        int min = INT_MAX, min_index;
        for (int v = 0; v < nover; v++)
            if (sptSet[v] == false && dist[v] <= min)
                min = dist[v], min_index = v;
        return min_index;
    }
public:
    void dijkstra(int src) {
        int dist[nover];
        bool sptSet[nover];
        for (int i = 0; i < nover; i++)
            dist[i] = INT_MAX, sptSet[i] = false;
        dist[src] = 0;
        for (int count = 0; count < /*Code1*/; count++) {
            int u = minDistance(dist, sptSet);
            /*Code2*/ = true;
            for (int v = 0; v < nover; v++)
                if (!sptSet[v] && dist[u] != INT_MAX && /*Code3*/)
                    dist[v] = /*Code4*/;
        }
        // printSolution(dist);
    }
};`,
      "ask": "Please fill in the missing logic for /*Code4*/ to correctly update the shortest distance value to vertex `v`:"
    },
    "options": {
      "A": "dist[u]",
      "B": "wm[u][v]",
      "C": "dist[u] + wm[u][v]",
      "D": "dist[v] + wm[u][v]"
    },
    "answer": "C"
  },
  {
    "id": 24,
    "chapter": "Graph Algorithms",
    "question": {
      "main": "The following code block is used for the next 5 questions (implementing Dijkstra's Algorithm using an adjacency matrix):",
      "context": `class Graph {
private:
    int nover; // number of vertices in the graph
    int **wm;  // adjacency matrix representing weights
    int minDistance(int dist[], bool sptSet[]) {
        int min = INT_MAX, min_index;
        for (int v = 0; v < nover; v++)
            if (sptSet[v] == false && dist[v] <= min)
                min = dist[v], min_index = v;
        return min_index;
    }
public:
    void dijkstra(int src) {
        int dist[nover];
        bool sptSet[nover];
        for (int i = 0; i < nover; i++)
            dist[i] = INT_MAX, sptSet[i] = false;
        dist[src] = 0;
        for (int count = 0; count < /*Code1*/; count++) {
            int u = minDistance(dist, sptSet);
            /*Code2*/ = true;
            for (int v = 0; v < nover; v++)
                if (!sptSet[v] && dist[u] != INT_MAX && /*Code3*/)
                    dist[v] = /*Code4*/;
        }
        // printSolution(dist);
    }
};`,
      "ask": "To optimize the execution time of the `minDistance` function (which returns the vertex with the minimum weight and removes it from the list during each iteration), which data structure would be most appropriate to reduce the overall time complexity of the algorithm?"
    },
    "options": {
      "A": "Heap (Priority Queue)",
      "B": "Stack",
      "C": "Singly Linked List",
      "D": "AVL Tree"
    },
    "answer": "A"
  },
  
]
export default graph;