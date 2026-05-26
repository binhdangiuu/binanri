const heap = [
{
    "id": 1,
    "chapter": "Heap",
    "question": {
      "main": "What is a Heap in data structures?"
    },
    "options": {
      "A": "A binary search tree where the keys are sorted in ascending order from left to right.",
      "B": "A complete binary tree that satisfies the heap property: each parent node is less than or equal to (or greater than or equal to) its children.",
      "C": "A linked list where the elements are sorted in ascending order.",
      "D": "A binary tree where each node has at most two children and there are no constraints on order."
    },
    "answer": "B"
  },
  {
    "id": 2,
    "chapter": "Heap",
    "question": {
      "main": "Given an array consisting of 9 elements [a1, a2, ..., a9]. Suppose that after the process of building it into a heap, we obtain the following array:",
      "sequence": [["a9", " a6", " a3", " a4", " a7", " a1", " a2", " a5", " a8"]],
      "ask": "Which of the following sequences could be the result of sorting the original array in ascending order?"
    },
    "options": {
      "A": "[a9, a6, a7, a3, a4, a2, a1, a8, a5]",
      "B": "[a9, a3, a1, a2, a4, a5, a6, a7, a8]",
      "C": "[a9, a6, a7, a3, a1, a2, a5, a4, a8]",
      "D": "[a6, a3, a9, a1, a4, a2, a7, a5, a8]"
    },
    "answer": "A"
  },
  {
    "id": 3,
    "chapter": "Heap",
    "question": {
      "main": "Given an array consisting of 10 elements [b1, b2, ..., b10]. Suppose that after the process of building it into a 3-ary max-heap (each node has at most 3 children), we obtain the following array:",
      "sequence": ["b2", " b4", " b1", " b6", " b7", " b5", " b8", " b9", " b10", " b3"],
      "ask": "Which of the following sequences could be the result of sorting the original array in descending order?"
    },
    "options": {
      "A": "[b2, b4, b7, b5, b1, b9, b8, b10, b6, b3]",
      "B": "[b2, b1, b3, b5, b4, b6, b7, b8, b9, b10]",
      "C": "[b2, b3, b6, b1, b4, b5, b7, b8, b9, b10]",
      "D": "[b4, b5, b3, b1, b2, b6, b7, b8, b9, b10]"
    },
    "answer": "A"
  },
  {
    "id": 4,
    "chapter": "Heap",
    "question": {
      "main": "Given that array A is used to represent a max-heap and an index i. Assuming that all element accesses in the array are valid, which of the following expressions is ALWAYS TRUE?",
      "ask": "Choose the correct expression:"
    },
    "options": {
      "A": "A[i] >= A[2i + 1]",
      "B": "A[i] < A[2i + 2]",
      "C": "A[i] > A[2i]",
      "D": "A[i] < A[2i - 1]"
    },
    "answer": "A"
  },
{
    "id": 5,
    "chapter": "Heap",
    "question": {
      "main": "Given a min-heap represented as an array:",
      "sequence": [1, 4, 7, 8, 10, 12, 13],
      "ask": "Which of the following is a CORRECT representation for the state of the min-heap after deleting an element from it?"
    },
    "options": {
      "A": "[4, 7, 8, 10, 13, 12]",
      "B": "[4, 7, 8, 13, 10, 12]",
      "C": "[4, 8, 13, 7, 10, 12]",
      "D": "[4, 8, 7, 13, 10, 12]"
    },
    "answer": "D"
  },
  {
    "id": 6,
    "chapter": "Heap",
    "question": {
      "main": "What is the time complexity of the ReHeapUp operation?",
      "ask": "Choose the correct time complexity:"
    },
    "options": {
      "A": "O(log n)",
      "B": "O(n)",
      "C": "O(n log n)",
      "D": "O(1)"
    },
    "answer": "A"
  },
  {
    "id": 7,
    "chapter": "Heap",
    "question": {
      "main": "What is the time complexity of the build heap operation?",
      "ask": "Choose the correct time complexity:"
    },
    "options": {
      "A": "O(log n)",
      "B": "O(n)",
      "C": "O(n log n)",
      "D": "O(1)"
    },
    "answer": "B"
  },
  {
    "id": 8,
    "chapter": "Heap",
    "question": {
      "main": "What is the time complexity of heap sort?",
      "ask": "Choose the correct time complexity:"
    },
    "options": {
      "A": "O(log n)",
      "B": "O(n)",
      "C": "O(n log n)",
      "D": "O(1)"
    },
    "answer": "C"
  },
  {
    "id": 9,
    "chapter": "Heap",
    "question": {
      "main": "What is the time complexity of the operation to delete 1 element from a heap?",
      "ask": "Choose the correct time complexity:"
    },
    "options": {
      "A": "O(log n)",
      "B": "O(n)",
      "C": "O(n log n)",
      "D": "O(1)"
    },
    "answer": "A"
  },
  {
    "id": 10,
    "chapter": "Heap",
    "question": {
      "main": "What is the time complexity of the Heapsort algorithm in the best-case scenario?",
      "ask": "Choose the correct time complexity:"
    },
    "options": {
      "A": "O(log n)",
      "B": "O(n)",
      "C": "O(n log n)",
      "D": "O(n^2)"
    },
    "answer": "C"
  },
// CÂU 11
  {
    "id": 11,
    "chapter": "Heap",
    "question": {
      "main": "Given a max-heap array:",
      "sequence": [29, 20, 10, 15, 18, 9, 5, 13, 2, 4, 15],
      "operations": [
        "Sequentially extract elements from the root of the heap one by one."
      ],
      "rule": "Let m be the maximum number of extracted elements such that their total sum does not exceed 70.",
      "ask": "What is the value of m?"
    },
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "B"
  },

  // CÂU 12
  {
    "id": 12,
    "chapter": "Heap",
    "question": {
      "main": "Given two max-heaps of size n, what is the minimum time complexity required to create a single max-heap from all the elements of both max-heaps?",
      "ask": "Choose the correct time complexity:"
    },
    "options": {
      "A": "O(log n)",
      "B": "O(n)",
      "C": "O(n log n)",
      "D": "O(n^2)"
    },
    "answer": "B"
  },

  // CÂU 13
  {
    "id": 13,
    "chapter": "Heap",
    "question": {
      "main": "In a binary max-heap containing n elements, the smallest element can be found in what time complexity?",
      "ask": "Choose the correct time complexity:"
    },
    "options": {
      "A": "O(log n)",
      "B": "O(n)",
      "C": "O(1)",
      "D": "O(n^2)"
    },
    "answer": "B"
  },

  // CÂU 14
  {
    "id": 14,
    "chapter": "Heap",
    "question": {
      "main": "A perfect binary min-heap is constructed by including each integer in the range [1, 1023] exactly once.",
      "operations": [
        "Construct a perfect binary tree with 1023 nodes.",
        "Fill the tree with values satisfying the min-heap property."
      ],
      "rule": "The depth of a node is the path length from the root. The root is at depth 0.",
      "ask": "What is the maximum depth at which the integer 9 can appear?"
    },
    "options": {
      "A": "6",
      "B": "7",
      "C": "8",
      "D": "9"
    },
    "answer": "C"
  },

  // CÂU 15
  {
    "id": 15,
    "chapter": "Heap",
    "question": {
      "main": "Given an array consisting of 7 variables [x0, ..., x6]. Suppose that after the process of converting this array into a min-heap, we obtain the following array:",
      "sequence": ["x6", "x4", "x2", "x3", "x1", "x5", "x0"],
      "ask": "Which of the following sequences could be the result of sorting the original array in ascending order?"
    },
    "options": {
      "A": "[x6, x1, x2, x3, x4, x5, x0]",
      "B": "[x6, x2, x5, x0, x3, x4, x1]",
      "C": "[x6, x4, x3, x2, x5, x0, x1]",
      "D": "[x6, x4, x1, x3, x5, x2, x0]"
    },
    "answer": "C"
  },

  // CÂU 16
  {
    "id": 16,
    "chapter": "Heap",
    "question": {
      "main": "Given a max-heap array:",
      "sequence": [90, 73, 41, 25, 36, 17, 1, 2, 3, 19, 26, 7],
      "operations": [
        "Delete the element 36 from the heap."
      ],
      "rule": "After deleting an internal node, replace it with the last element of the heap and perform reheapification to maintain the max-heap property.",
      "ask": "What is the state of the heap after the deletion?"
    },
    "options": {
      "A": "[90, 73, 41, 25, 26, 17, 1, 2, 3, 7, 19]",
      "B": "[90, 73, 41, 25, 19, 17, 1, 2, 3, 7, 26]",
      "C": "[90, 73, 41, 25, 26, 17, 1, 2, 3, 19, 7]",
      "D": "[90, 73, 41, 25, 19, 17, 1, 2, 3, 26, 7]"
    },
    "answer": "C"
  },

  // CÂU 17
  {
    "id": 17,
    "chapter": "Heap",
    "question": {
      "main": "Given an initial array:",
      "sequence": [1, 3, 5, 4, 6, 11, 10, 8, 7, 13, 15],
      "operations": [
        "Apply the bottom-up heapify algorithm to build a max-heap with O(N) complexity.",
        "Execute exactly two steps of the heapify process."
      ],
      "rule": "Iterate from index floor(n/2) - 1 down to 0, calling heapify() at each index.",
      "ask": "Which array represents the state after the first two heapify steps?"
    },
    "options": {
      "A": "[15, 13, 11, 8, 6, 5, 10, 4, 7, 3, 1]",
      "B": "[1, 15, 11, 8, 13, 5, 10, 4, 7, 3, 6]",
      "C": "[1, 3, 5, 8, 15, 11, 10, 4, 7, 13, 6]",
      "D": "All of the above are incorrect"
    },
    "answer": "C"
  },

  // CÂU 18
  {
    "id": 18,
    "chapter": "Heap",
    "question": {
      "main": "Given an initial array:",
      "sequence": [10, 7, 11, 5, 4, 13, 1, 2],
      "operations": [
        "Construct a min-heap by inserting elements from the array one by one in the original order."
      ],
      "rule": "For each insertion, append the element to the end of the heap and perform a reheap-up operation.",
      "ask": "What is the resulting min-heap array?"
    },
    "options": {
      "A": "[1, 2, 4, 5, 7, 13, 11, 10]",
      "B": "[1, 2, 5, 4, 7, 13, 11, 10]",
      "C": "[1, 2, 5, 4, 7, 11, 13, 10]",
      "D": "[1, 2, 4, 5, 7, 10, 11, 13]"
    },
    "answer": "A"
  },

  // CÂU 19
  {
    "id": 19,
    "chapter": "Heap",
    "question": {
      "main": "Given a min-heap array:",
      "sequence": [1, 2, 6, 4, 7, 13, 11, 10],
      "operations": [
        "Insert a new element with a value of 3 into this min-heap."
      ],
      "rule": "Place the new element at the first available position at the bottom level, then perform reheap-up.",
      "ask": "What is the state of the min-heap array after the insertion?"
    },
    "options": {
      "A": "[1, 2, 3, 4, 7, 13, 11, 10, 6]",
      "B": "[1, 2, 6, 3, 7, 13, 11, 10, 4]",
      "C": "[1, 2, 6, 4, 7, 13, 11, 10, 3]",
      "D": "[1, 2, 6, 4, 3, 13, 11, 10, 7]"
    },
    "answer": "B"
  },

  // CÂU 20
  {
    "id": 20,
    "chapter": "Heap",
    "question": {
      "main": "Which of the following statements is TRUE for a heap of height h?",
      "ask": "Choose the correct statement:"
    },
    "options": {
      "A": "The element with the largest key will always be the root of the heap.",
      "B": "The leaf nodes of the heap can only be located at height h.",
      "C": "A heap is a complete binary tree.",
      "D": "All of the other statements are correct."
    },
    "answer": "D"
  },

  // CÂU 21
  {
    "id": 21,
    "chapter": "Heap",
    "question": {
      "main": "What are the respective time complexities of the individual heapify operation and the bottom-up build heap algorithm?",
      "ask": "Select the correct complexity pair:"
    },
    "options": {
      "A": "O(log n) and O(n)",
      "B": "O(n) and O(log n)",
      "C": "O(n) and O(n)",
      "D": "O(log n) and O(log n)"
    },
    "answer": "A"
  },

  // CÂU 22
  {
    "id": 22,
    "chapter": "Heap",
    "question": {
      "main": "Consider a function 'minDistance' that repeatedly needs to retrieve the position of the vertex with the smallest weight and subsequently remove this root element from the list. Which data structure is the most appropriate to minimize the execution time complexity?",
      "ask": "Select the optimal data structure:"
    },
    "options": {
      "A": "Heap (Min-Heap)",
      "B": "Stack",
      "C": "Singly Linked List",
      "D": "AVL Tree"
    },
    "answer": "A"
  },

  // CÂU 23
  {
    "id": 23,
    "chapter": "Heap",
    "question": {
      "main": "Given a 3-ary max-heap array:",
      "sequence": [27, 21, 15, 18, 19, 11, 9, 10, 12, 14, 8],
      "operations": [
        "Delete the element 19 from this 3-ary max-heap."
      ],
      "rule": "In a 3-ary heap, each node has at most 3 children. Maintain the structural integrity and heap property post-deletion.",
      "ask": "What is the state of the heap array after removing the element 19?"
    },
    "options": {
      "A": "[27, 21, 15, 18, 14, 11, 9, 10, 12, 8]",
      "B": "[27, 21, 15, 18, 12, 11, 9, 10, 14, 8]",
      "C": "[27, 21, 15, 18, 8, 11, 9, 10, 14, 12]",
      "D": "[27, 21, 15, 18, 8, 11, 9, 10, 12, 14]"
    },
    "answer": "D"
  },
  // CÂU 24
  {
    "id": 24,
    "chapter": "Heap",
    "question": {
      "main": "Given an initial 3-ary max-heap array:",
      "sequence": [30, 20, 15, 18, 19, 11, 10],
      "operations": [
        "Insert the element 25 into the heap.",
        "Insert the element 5 into the heap."
      ],
      "rule": "In a 3-ary max-heap, each node has at most 3 children. For each insertion, place the element at the next available position and perform reheap-up to restore the max-heap property.",
      "ask": "What is the state of the heap array after inserting both elements?"
    },
    "options": {
      "A": "[30, 25, 15, 20, 19, 11, 10, 18, 5]",
      "B": "[30, 25, 15, 18, 19, 11, 10, 20, 5]",
      "C": "[30, 20, 25, 18, 19, 11, 10, 15, 5]",
      "D": "[30, 20, 15, 18, 19, 11, 10, 25, 5]"
    },
    "answer": "C"
  },
  // CÂU 25
  {
    "id": 25,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class Heap {
    int *harr; // pointer to array of elements in heap
    int heap_size; // Current number of elements.
public:
    bool isMinHeap() {
        // This function will return true if given level order traversal is Min Heap
        for (int i = (heap_size / 2 - 1); i >= 0; i--) {
            if (/*Code1*/)
                return false;
            if (/*Code2*/) {
                if (harr[i] > harr[2 * i + 2])
                    return false;
            }
        }
        return true;
    }
};`,
      "ask": "Please fill in the missing conditional logic for /*Code1*/:"
    },
    "options": {
      "A": "harr[i] < harr[2 * i + 1]",
      "B": "harr[i] > harr[2 * i + 2]",
      "C": "harr[i] < harr[2 * i + 2]",
      "D": "harr[i] > harr[2 * i + 1]"
    },
    "answer": "D"
  },

  // CÂU 26
  {
    "id": 26,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class Heap {
    int *harr; // pointer to array of elements in heap
    int heap_size; // Current number of elements.
public:
    bool isMinHeap() {
        // This function will return true if given level order traversal is Min Heap
        for (int i = (heap_size / 2 - 1); i >= 0; i--) {
            if (/*Code1*/)
                return false;
            if (/*Code2*/) {
                if (harr[i] > harr[2 * i + 2])
                    return false;
            }
        }
        return true;
    }
};`,
      "ask": "Please fill in the missing conditional logic for /*Code2*/:"
    },
    "options": {
      "A": "2*i + 1 < heap_size",
      "B": "2*i + 2 < heap_size",
      "C": "2*i + 2 <= heap_size",
      "D": "2*i + 1 == heap_size"
    },
    "answer": "B"
  },
  // CÂU 27
  {
    "id": 27,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class Heap {
    int *harr; // pointer to array of elements in heap
    int heap_size; // Current number of elements.
public:
    void buildHeap() {
        // This function will build a heap from the array
        for (int i = (heap_size / 2 - 1); i >= 0; i--) {
            heapify(i);
        }
    }

    void heapify(int i) {
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        int smallest = i;

        if (left < heap_size && /*Code1*/)
            smallest = left;
        if (right < heap_size && harr[right] < harr[smallest])
            smallest = right;
        if (smallest != i) {
            std::swap(harr[i], harr[smallest]);
            /*Code2*/
        }
    }
};`,
      "ask": "Please fill in the missing conditional logic for /*Code1*/:"
    },
    "options": {
      "A": "harr[left] < harr[smallest]",
      "B": "harr[left] < harr[smallest + 1]",
      "C": "harr[left] > harr[smallest]",
      "D": "harr[left] > harr[smallest + 1]"
    },
    "answer": "A"
  },

  // CÂU 28
  {
    "id": 28,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class Heap {
    int *harr; // pointer to array of elements in heap
    int heap_size; // Current number of elements.
public:
    void buildHeap() {
        // This function will build a heap from the array
        for (int i = (heap_size / 2 - 1); i >= 0; i--) {
            heapify(i);
        }
    }

    void heapify(int i) {
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        int smallest = i;

        if (left < heap_size && /*Code1*/)
            smallest = left;
        if (right < heap_size && harr[right] < harr[smallest])
            smallest = right;
        if (smallest != i) {
            std::swap(harr[i], harr[smallest]);
            /*Code2*/
        }
    }
};`,
      "ask": "Please fill in the missing recursive call for /*Code2*/:"
    },
    "options": {
      "A": "heapify(left);",
      "B": "heapify(right);",
      "C": "heapify(smallest);",
      "D": "heapify(smallest - 1);"
    },
    "answer": "C"
  },
  // CÂU 29
  {
    "id": 29,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class Heap {
    int *harr; // pointer to array of elements in heap
    int heap_size; // Current number of elements.
public:
    void buildHeap() {
        // This function will build a heap from the array using reheap up
        for (int i = 1; i < heap_size; i++) {
            reheapUp(i);
        }
    }

    void reheapUp(int i) {
        int parent = /*Code2*/;

        for (; i > 0 && /*Code1*/; i = parent) {
            std::swap(harr[i], harr[parent]);
            parent = (i - 1) / 2;
        }
    }
};`,
      "ask": "Please fill in the missing conditional logic for /*Code1*/:"
    },
    "options": {
      "A": "harr[parent] > harr[i + 1]",
      "B": "harr[parent] > harr[i - 1]",
      "C": "harr[parent] < harr[i]",
      "D": "harr[parent] < harr[i + 1]"
    },
    "answer": "C"
  },

  // CÂU 30
  {
    "id": 30,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class Heap {
    int *harr; // pointer to array of elements in heap
    int heap_size; // Current number of elements.
public:
    void buildHeap() {
        // This function will build a heap from the array using reheap up
        for (int i = 1; i < heap_size; i++) {
            reheapUp(i);
        }
    }

    void reheapUp(int i) {
        int parent = /*Code2*/;

        for (; i > 0 && /*Code1*/; i = parent) {
            std::swap(harr[i], harr[parent]);
            parent = (i - 1) / 2;
        }
    }
};`,
      "ask": "Please fill in the correct formula to calculate the parent's index for /*Code2*/:"
    },
    "options": {
      "A": "(i - 1) / 2",
      "B": "(i + 1) / 2",
      "C": "i / 2",
      "D": "i - 1"
    },
    "answer": "A"
  },
  // CÂU 31
  {
    "id": 31,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class Heap {
    int *harr; // pointer to array of elements in heap
    int heap_size; // Current number of elements.
public:
    // Constructor to initialize heap
    Heap(int arr[], int n) {
        // TODO
    }

    void heapSort() {
        // Build a max heap
        for (int i = /*Code1*/; i >= 0; i--) {
            heapify(i);
        }

        // Extract elements from heap one by one
        for (int i = heap_size - 1; i > 0; i--) {
            std::swap(harr[0], harr[i]);
            heap_size--;
            /*Code2*/
        }
    }

    // To maintain max-heap property
    void heapify(int i) {
        // TODO
    }
};`,
      "ask": "Please fill in the missing initialization logic for /*Code1*/:"
    },
    "options": {
      "A": "heap_size / 2 - 1",
      "B": "heap_size + 1",
      "C": "heap_size / 2 - 2",
      "D": "heap_size * 2"
    },
    "answer": "A"
  },

  // CÂU 32
  {
    "id": 32,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class Heap {
    int *harr; // pointer to array of elements in heap
    int heap_size; // Current number of elements.
public:
    // Constructor to initialize heap
    Heap(int arr[], int n) {
        // TODO
    }

    void heapSort() {
        // Build a max heap
        for (int i = /*Code1*/; i >= 0; i--) {
            heapify(i);
        }

        // Extract elements from heap one by one
        for (int i = heap_size - 1; i > 0; i--) {
            std::swap(harr[0], harr[i]);
            heap_size--;
            /*Code2*/
        }
    }

    // To maintain max-heap property
    void heapify(int i) {
        // TODO
    }
};`,
      "ask": "Please fill in the missing function call for /*Code2*/:"
    },
    "options": {
      "A": "heapify(0);",
      "B": "heapify(1);",
      "C": "heapify(i);",
      "D": "heapify(i-1);"
    },
    "answer": "A"
  },

  // CÂU 33 - CÂU LÝ THUYẾT ĐỘC LẬP
  {
    "id": 33,
    "chapter": "Heap",
    "question": {
      "main": "Given an array of N elements, we want to find the K smallest elements. If you build a heap from the entire array and then perform the pop operation K times, what is the total overall time complexity?",
      "ask": "Select the correct overall time complexity:"
    },
    "options": {
      "A": "O(N log K)",
      "B": "O(N + K log N)",
      "C": "O(N log N + K)",
      "D": "O(K log K)"
    },
    "answer": "B"
  },
  // CÂU 34
  {
    "id": 34,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class MaxHeap {
    int *harr;
    int heap_size;
public:
    void remove(int i) {
        harr[i] = harr[heap_size - 1];
        heap_size--;

        if (i > 0 && /*Code1*/) {
            heapUp(i);
        } else {
            heapDown(i);
        }
    }

    void heapUp(int i) { // TODO }

    void heapDown(int i) {
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        int largest = i;

        if (left < heap_size && harr[left] > harr[largest])
            largest = left;
        if (right < heap_size && harr[right] > harr[largest])
            largest = right;

        if (largest != i) {
            std::swap(harr[i], harr[largest]);
            /*Code2*/
        }
    }
};`,
      "ask": "Please fill in the missing conditional logic for /*Code1*/ to check if the replaced element is larger than its parent:"
    },
    "options": {
      "A": "harr[i] > harr[(i - 1) / 2]",
      "B": "harr[i] < harr[(i - 1) / 2]",
      "C": "harr[i] > harr[i - 1]",
      "D": "harr[i] < harr[i - 1]"
    },
    "answer": "A"
  },

  // CÂU 35
  {
    "id": 35,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class MaxHeap {
    int *harr;
    int heap_size;
public:
    void remove(int i) {
        harr[i] = harr[heap_size - 1];
        heap_size--;

        if (i > 0 && /*Code1*/) {
            heapUp(i);
        } else {
            heapDown(i);
        }
    }

    void heapUp(int i) { // TODO }

    void heapDown(int i) {
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        int largest = i;

        if (left < heap_size && harr[left] > harr[largest])
            largest = left;
        if (right < heap_size && harr[right] > harr[largest])
            largest = right;

        if (largest != i) {
            std::swap(harr[i], harr[largest]);
            /*Code2*/
        }
    }
};`,
      "ask": "Please fill in the missing recursive statement for /*Code2*/ inside the heapDown function:"
    },
    "options": {
      "A": "heapDown(largest);",
      "B": "heapDown(left);",
      "C": "heapDown(right);",
      "D": "heapDown(largest + 1);"
    },
    "answer": "A"
  },
  // CÂU 36
  {
    "id": 36,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class MaxHeap {
public:
    MaxHeap(const std::vector<int>& arr) {
        // Code to build MaxHeap from vector arr
    }

    void push(int x);
    void pop();
    int top();
    int size();
};

std::vector<int> findKSmallest(const std::vector<int>& arr, int K) {
    MaxHeap* heap = /* Code1 */;

    std::vector<int> res;
    while (heap->size() && /* Code2 */) {
        res.push_back(heap->top());
        heap->pop();
        K--;
    }

    delete heap;
    return res;
}`,
      "ask": "Please fill in the missing initialization logic for /* Code1 */:"
    },
    "options": {
      "A": "heap = new MaxHeap();",
      "B": "heap = new MaxHeap(K);",
      "C": "heap = new MaxHeap(arr);",
      "D": "heap = new MaxHeap(arr, K);"
    },
    "answer": "C"
  },

  // CÂU 37
  {
    "id": 37,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class MaxHeap {
public:
    MaxHeap(const std::vector<int>& arr) {
        // Code to build MaxHeap from vector arr
    }

    void push(int x);
    void pop();
    int top();
    int size();
};

std::vector<int> findKSmallest(const std::vector<int>& arr, int K) {
    MaxHeap* heap = /* Code1 */;

    std::vector<int> res;
    while (heap->size() && /* Code2 */) {
        res.push_back(heap->top());
        heap->pop();
        K--;
    }

    delete heap;
    return res;
}`,
      "ask": "Please fill in the missing loop continuation condition for /* Code2 */:"
    },
    "options": {
      "A": "heap->size() > K",
      "B": "K > 0",
      "C": "heap->top() < K",
      "D": "K >= heap->size()"
    },
    "answer": "B"
  },
  // CÂU 38
  {
    "id": 38,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class MinHeap {
    int *harr;
    int heap_size;
public:
    void decreaseKey(int i, int new_val) {
        harr[i] = new_val;
        while (i != 0 && /*Code1*/) {
            std::swap(harr[i], harr[(i - 1) / 2]);
            i = /*Code2*/;
        }
    }
};`,
      "ask": "Please fill in the missing conditional logic for /*Code1*/ in the decreaseKey function:"
    },
    "options": {
      "A": "harr[(i - 1) / 2] > harr[i]",
      "B": "harr[(i - 1) / 2] < harr[i]",
      "C": "harr[i] > new_val",
      "D": "harr[(i - 1) / 2] == harr[i]"
    },
    "answer": "A"
  },

  // CÂU 39
  {
    "id": 39,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class MinHeap {
    int *harr;
    int heap_size;
public:
    void decreaseKey(int i, int new_val) {
        harr[i] = new_val;
        while (i != 0 && /*Code1*/) {
            std::swap(harr[i], harr[(i - 1) / 2]);
            i = /*Code2*/;
        }
    }
};`,
      "ask": "Please fill in the missing index update for /*Code2*/ to traverse up the tree:"
    },
    "options": {
      "A": "i / 2",
      "B": "(i - 1) / 2",
      "C": "(i + 1) / 2",
      "D": "i - 1"
    },
    "answer": "B"
  },

  // CÂU 40
  {
    "id": 40,
    "chapter": "Heap",
    "question": {
      "main": "Given an initial binary min-heap array:",
      "sequence": [8, 12, 15, 20, 25, 30, 40],
      "operations": [
        "Perform a decreaseKey operation at index 4 (changing its value from 25 to 5)."
      ],
      "rule": "After updating the element's value, perform a reheap-up operation to maintain the min-heap property.",
      "ask": "What is the state of the min-heap array after the update?"
    },
    "options": {
      "A": "[5, 8, 15, 20, 12, 30, 40]",
      "B": "[5, 12, 15, 20, 8, 30, 40]",
      "C": "[8, 5, 15, 20, 12, 30, 40]",
      "D": "[5, 8, 15, 12, 20, 30, 40]"
    },
    "answer": "A"
  },

  // CÂU 41
  {
    "id": 41,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class MaxHeap {
    int *harr;
    int heap_size;
public:
    void increaseKey(int i, int new_val) {
        harr[i] = new_val;
        while (i != 0 && /*Code1*/) {
            std::swap(harr[i], harr[(i - 1) / 2]);
            i = /*Code2*/;
        }
    }
};`,
      "ask": "Please fill in the missing conditional logic for /*Code1*/ in the increaseKey function for a Max-Heap:"
    },
    "options": {
      "A": "harr[(i - 1) / 2] < harr[i]",
      "B": "harr[(i - 1) / 2] > harr[i]",
      "C": "harr[i] < harr[2 * i + 1]",
      "D": "harr[i] < harr[2 * i + 2]"
    },
    "answer": "A"
  },

  // CÂU 42
  {
    "id": 42,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class MaxHeap {
    int *harr;
    int heap_size;
public:
    void increaseKey(int i, int new_val) {
        harr[i] = new_val;
        while (i != 0 && /*Code1*/) {
            std::swap(harr[i], harr[(i - 1) / 2]);
            i = /*Code2*/;
        }
    }
};`,
      "ask": "Please fill in the missing index update for /*Code2*/ to move to the parent node:"
    },
    "options": {
      "A": "i / 2",
      "B": "(i - 1) / 2",
      "C": "i - 1",
      "D": "(i + 1) / 2"
    },
    "answer": "B"
  },

  // CÂU 43
  {
    "id": 43,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class Heap {
    int *harr;
    int heap_size;
public:
    bool verifyMaxHeap(int i) {
        if (i >= (heap_size - 1) / 2)
            return true;

        if (/*Code1*/)
            return false;
        if (/*Code2*/)
            return false;

        return verifyMaxHeap(2 * i + 1) && verifyMaxHeap(2 * i + 2);
    }
};`,
      "ask": "Please fill in the missing conditional validation check for the left child node in /*Code1*/:"
    },
    "options": {
      "A": "2 * i + 1 < heap_size && harr[i] < harr[2 * i + 1]",
      "B": "2 * i + 1 < heap_size && harr[i] > harr[2 * i + 1]",
      "C": "2 * i + 1 >= heap_size && harr[i] < harr[2 * i + 1]",
      "D": "harr[i] == harr[2 * i + 1]"
    },
    "answer": "A"
  },

  // CÂU 44
  {
    "id": 44,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class Heap {
    int *harr;
    int heap_size;
public:
    bool verifyMaxHeap(int i) {
        if (i >= (heap_size - 1) / 2)
            return true;

        if (/*Code1*/)
            return false;
        if (/*Code2*/)
            return false;

        return verifyMaxHeap(2 * i + 1) && verifyMaxHeap(2 * i + 2);
    }
};`,
      "ask": "Please fill in the missing conditional validation check for the right child node in /*Code2*/:"
    },
    "options": {
      "A": "2 * i + 2 < heap_size && harr[i] > harr[2 * i + 2]",
      "B": "2 * i + 2 < heap_size && harr[i] < harr[2 * i + 2]",
      "C": "2 * i + 2 >= heap_size && harr[i] < harr[2 * i + 2]",
      "D": "harr[i] == harr[2 * i + 2]"
    },
    "answer": "B"
  },

  // CÂU 45
  {
    "id": 45,
    "chapter": "Heap",
    "question": {
      "main": "In an array-based implementation of a d-ary heap, if a node is located at index i (0-indexed), what is the index formula for its first (leftmost) child node?",
      "ask": "Select the correct formula:"
    },
    "options": {
      "A": "d * i + 1",
      "B": "d * i + 2",
      "C": "d * (i - 1)",
      "D": "d * i"
    },
    "answer": "A"
  },

  // CÂU 46
  {
    "id": 46,
    "chapter": "Heap",
    "question": {
      "main": "In an array-based implementation of a d-ary heap, if a non-root node is located at index i (0-indexed), what is the index formula to locate its parent node?",
      "ask": "Select the correct formula:"
    },
    "options": {
      "A": "i / d",
      "B": "(i - 1) / d",
      "C": "(i + 1) / d",
      "D": "(i - d) / d"
    },
    "answer": "B"
  },

  // CÂU 47
  {
    "id": 47,
    "chapter": "Heap",
    "question": {
      "main": "What is the worst-case time complexity of the delete operation of an arbitrary node at a known index in a d-ary heap containing n elements?",
      "ask": "Select the correct time complexity:"
    },
    "options": {
      "A": "O(log_d n)",
      "B": "O(d * log_d n)",
      "C": "O(n)",
      "D": "O(d * n)"
    },
    "answer": "B"
  },

  // CÂU 48
  {
    "id": 48,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class MinHeap {
    int *harr;
    int heap_size;
public:
    int extractMin() {
        if (heap_size <= 0) return -1;
        if (heap_size == 1) {
            heap_size--;
            return harr[0];
        }
        int root = harr[0];
        harr[0] = /*Code1*/;
        /*Code2*/;
        MinHeapify(0);
        return root;
    }
    void MinHeapify(int i);
};`,
      "ask": "Please fill in the missing assignment statement for /*Code1*/ to prepare for extraction:"
    },
    "options": {
      "A": "harr[heap_size]",
      "B": "harr[heap_size - 1]",
      "C": "harr[1]",
      "D": "0"
    },
    "answer": "B"
  },

  // CÂU 49
  {
    "id": 49,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class MinHeap {
    int *harr;
    int heap_size;
public:
    int extractMin() {
        if (heap_size <= 0) return -1;
        if (heap_size == 1) {
            heap_size--;
            return harr[0];
        }
        int root = harr[0];
        harr[0] = /*Code1*/;
        /*Code2*/;
        MinHeapify(0);
        return root;
    }
    void MinHeapify(int i);
};`,
      "ask": "Please fill in the missing state modification operation for /*Code2*/:"
    },
    "options": {
      "A": "heap_size++",
      "B": "heap_size--",
      "C": "heap_size = 0",
      "D": "harr[heap_size - 1] = 0"
    },
    "answer": "B"
  },

  // CÂU 50
  {
    "id": 50,
    "chapter": "Heap",
    "question": {
      "main": "Given a min-heap array:",
      "sequence": [3, 5, 9, 6, 8, 20, 10, 12, 18],
      "operations": [
        "Extract the root element from the min-heap."
      ],
      "rule": "Replace the root with the last element of the array, decrease the heap size, and invoke the min-heapify operation on the root node.",
      "ask": "What is the state of the min-heap array after extracting the minimum element?"
    },
    "options": {
      "A": "[5, 6, 9, 12, 8, 20, 10, 18]",
      "B": "[5, 6, 9, 18, 8, 20, 10, 12]",
      "C": "[5, 8, 9, 6, 18, 20, 10, 12]",
      "D": "[5, 6, 9, 12, 18, 20, 10, 8]"
    },
    "answer": "A"
  },

  // CÂU 51
  {
    "id": 51,
    "chapter": "Heap",
    "question": {
      "main": "An array of size n is sorted in descending order. If we build a max-heap using the bottom-up buildHeap algorithm, what is the best-case time complexity?",
      "ask": "Choose the correct time complexity option:"
    },
    "options": {
      "A": "O(1)",
      "B": "O(n)",
      "C": "O(n log n)",
      "D": "O(log n)"
    },
    "answer": "B"
  },

  // CÂU 52
  {
    "id": 52,
    "chapter": "Heap",
    "question": {
      "main": "Which structural property is fundamentally required for a binary tree implementation to be represented efficiently as an array without storing explicit pointers?",
      "ask": "Choose the correct structural property:"
    },
    "options": {
      "A": "Full Binary Tree",
      "B": "Complete Binary Tree",
      "C": "Perfect Binary Tree",
      "D": "Balanced Binary Tree"
    },
    "answer": "B"
  },

  // CÂU 53
  {
    "id": 53,
    "chapter": "Heap",
    "question": {
      "main": "Given an initial max-heap array:",
      "sequence": [50, 30, 40, 20, 10, 15, 35],
      "operations": [
        "Insert a new node with a value of 45 into the max-heap."
      ],
      "rule": "Append the node at the end of the array representation, then perform a reheap-up operation.",
      "ask": "What is the array state after completing the insertion?"
    },
    "options": {
      "A": "[50, 45, 40, 30, 10, 15, 35, 20]",
      "B": "[50, 30, 45, 20, 10, 15, 35, 40]",
      "C": "[50, 45, 40, 20, 10, 15, 35, 30]",
      "D": "[50, 40, 45, 20, 10, 15, 35, 30]"
    },
    "answer": "A"
  },

  // CÂU 54
  {
    "id": 54,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class MaxHeap {
    int *harr;
    int heap_size;
public:
    void clearElement(int i) {
        // Replaces element at index i with negative infinity and pops it out
        harr[i] = -1e9; 
        while (i != 0 && harr[(i - 1) / 2] < harr[i]) {
            std::swap(harr[i], harr[(i - 1) / 2]);
            i = /*Code1*/;
        }
        /*Code2*/;
    }
    int extractMax();
};`,
      "ask": "Please fill in the missing index tracking logic for /*Code1*/:"
    },
    "options": {
      "A": "i / 2",
      "B": "(i - 1) / 2",
      "C": "i - 1",
      "D": "(i + 1) / 2"
    },
    "answer": "B"
  },

  // CÂU 55
  {
    "id": 55,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class MaxHeap {
    int *harr;
    int heap_size;
public:
    void clearElement(int i) {
        // Replaces element at index i with negative infinity and pops it out
        harr[i] = -1e9; 
        while (i != 0 && harr[(i - 1) / 2] < harr[i]) {
            std::swap(harr[i], harr[(i - 1) / 2]);
            i = /*Code1*/;
        }
        /*Code2*/;
    }
    int extractMax();
};`,
      "ask": "Please fill in the missing method invocation for /*Code2*/ to complete the continuous removal:"
    },
    "options": {
      "A": "extractMax()",
      "B": "heap_size--",
      "C": "this->extractMax()",
      "D": "Any of the other options can work depending on usage context"
    },
    "answer": "C"
  },

  // CÂU 56
  {
    "id": 56,
    "chapter": "Heap",
    "question": {
      "main": "In a max-heap stored as a 0-indexed array with n elements, what is the valid index range for all leaf nodes?",
      "ask": "Choose the correct range expression:"
    },
    "options": {
      "A": "From floor(n/2) to n - 1",
      "B": "From floor(n/2) + 1 to n - 1",
      "C": "From 0 to floor(n/2) - 1",
      "D": "From 0 to floor(n/2)"
    },
    "answer": "A"
  },

  // CÂU 57
  {
    "id": 57,
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class MinHeap {
    int *harr;
    int heap_size;
public:
    void mergeHeap(int otherArr[], int otherSize) {
        for (int i = 0; i < otherSize; i++) {
            /*Code1*/;
        }
        for (int i = /*Code2*/; i >= 0; i--) {
            MinHeapify(i);
        }
    }
    void MinHeapify(int i);
};`,
      "ask": "Please fill in the missing logic for /*Code1*/ to copy elements into the current buffer array allocation:"
    },
    "options": {
      "A": "harr[heap_size++] = otherArr[i]",
      "B": "harr[++heap_size] = otherArr[i]",
      "C": "harr[i] = otherArr[i]",
      "D": "std::swap(harr[i], otherArr[i])"
    },
    "answer": "A"
  },

  // CÂU 58
  {
    "id": 58,
    "chapter": "Heap",
    "chapter": "Heap",
    "question": {
      "main": "The following code block is used for the next 2 questions:",
      "context": `class MinHeap {
    int *harr;
    int heap_size;
public:
    void mergeHeap(int otherArr[], int otherSize) {
        for (int i = 0; i < otherSize; i++) {
            /*Code1*/;
        }
        for (int i = /*Code2*/; i >= 0; i--) {
            MinHeapify(i);
        }
    }
    void MinHeapify(int i);
};`,
      "ask": "Please fill in the initial loop tracking parameter statement for /*Code2*/ to rebuild the integrated structure via bottom-up heapify:"
    },
    "options": {
      "A": "heap_size / 2 - 1",
      "B": "heap_size - 1",
      "C": "heap_size / 2",
      "D": "otherSize / 2"
    },
    "answer": "A"
  },

  // CÂU 59
  {
    "id": 59,
    "chapter": "Heap",
    "question": {
      "main": "Given two separate min-heaps with sizes n and m respectively. What is the optimal time complexity to merge them into a single valid min-heap?",
      "ask": "Select the correct optimal complexity:"
    },
    "options": {
      "A": "O(n + m)",
      "B": "O(n log m)",
      "C": "O(m log n)",
      "D": "O(n * m)"
    },
    "answer": "A"
  },

  // CÂU 60
  {
    "id": 60,
    "chapter": "Heap",
    "question": {
      "main": "What is the space complexity of the in-place Heapsort algorithm when executed on a static data array?",
      "ask": "Select the correct space complexity:"
    },
    "options": {
      "A": "O(1)",
      "B": "O(log n)",
      "C": "O(n)",
      "D": "O(n log n)"
    },
    "answer": "A"
  }
]
export default heap