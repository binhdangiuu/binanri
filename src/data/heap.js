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
  }

]
export default heap