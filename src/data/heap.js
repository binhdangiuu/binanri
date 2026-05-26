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
  {
    "id": 11,
    "chapter": "Heap",
    "question": {
      "main": "Given a max-heap containing the following integer values:",
      "sequence": [29, 20, 10, 15, 18, 9, 5, 13, 2, 4, 15],
      "ask": "Elements are sequentially extracted from the root of the max-heap one by one. Let m be the maximum number of elements that can be extracted such that their total sum does not exceed 70. What is the value of m?"
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
  {
    "id": 14,
    "chapter": "Heap",
    "question": {
      "main": "A perfect binary min-heap is constructed by including each integer in the range [1, 1023] exactly once. The depth of a node in the heap is defined as the length of the path from the root of the heap to that node (thus, the root is at depth 0). What is the maximum depth at which the integer 9 can appear?",
      "ask": "Choose the correct maximum depth:"
    },
    "options": {
      "A": "6",
      "B": "7",
      "C": "8",
      "D": "9"
    },
    "answer": "C"
  }

]
export default heap