const hash = [
    {
    "id": 1,
    "chapter": "Search Algorithms",
    "question": {
      "main": "Use the interpolation search algorithm to find the position of the target value in the given array:",
      "sequence": [1, 5, 8, 11, 19, 22, 31, 35, 40, 45, 48, 49, 50],
      "rule": "Target value to find: 48",
      "ask": "How many comparisons need to be made?"
    },
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "A"
  },
  {
    "id": 2,
    "chapter": "Hashing",
    "question": {
      "main": "Given an empty hash table of size 19, using the chaining method and the following hash function:",
      "operations": [
        "h(k) = k mod 19"
      ],
      "sequence": [19, 20, 21, 22, 23, 40, 41, 57],
      "ask": "Which of the following slots has the fewest elements among the 4 given options?"
    },
    "options": {
      "A": "Slot 0",
      "B": "Slot 1",
      "C": "Slot 2",
      "D": "Slot 3"
    },
    "answer": "B"
  },
  {
    "id": 3,
    "chapter": "Hashing",
    "question": {
      "main": "Given an empty hash table of size 10, using the Linear Probing method with the following hash function:",
      "operations": [
        "h(k) = k mod 10"
      ],
      "sequence": [12, 15, 1, 6, 22, 32, 42],
      "ask": "What is the total number of collisions that occur during the insertion process?"
    },
    "options": {
      "A": "3",
      "B": "8",
      "C": "5",
      "D": "7"
    },
    "answer": "B"
  },
  {
    "id": 4,
    "chapter": "Hashing",
    "question": {
      "main": "Given an empty hash table of size 10, using the Quadratic Probing method with the following hash function:",
      "operations": [
        "h(k) = k mod 10"
      ],
      "rule": "Quadratic probing means that if the initial slot is occupied, we will try alternative positions with a quadratically increasing distance: h(k), (h(k) + 1^2) mod 10, (h(k) + 2^2) mod 10, (h(k) + 3^2) mod 10,... until an empty slot is found.",
      "sequence": [12, 22, 32, 42, 52],
      "ask": "What is the total number of collisions that occur during the insertion process?"
    },
    "options": {
      "A": "7",
      "B": "8",
      "C": "9",
      "D": "10"
    },
    "answer": "D"
  },
  {
  "id": 5,
  "chapter": "Hashing",
  "question": {
    "main": "Given an empty hash table of size 11, using the Double Hashing method with the primary and secondary hash functions as follows:",
    "operations": [
      "h1(k) = k mod 11",
      "h2(k) = 7 - (k mod 7)"
    ],
    "rule": "The probing formula for finding a new position when a collision occurs is: Index = (h1(k) + i * h2(k)) mod 11, with i = 1, 2, ...",
    "sequence": [10, 22, 31, 4, 15],
    "ask": "What is the total number of collisions that occur during the insertion process of these keys?"
  },
  "options": {
    "A": "1",
    "B": "2",
    "C": "3",
    "D": "4"
  },
  "answer": "B"
  },
  {
    "id": 6,
    "chapter": "Hashing",
    "question": {
      "main": "A hash table of size 11 uses an open addressing method to resolve collisions, specifically Quadratic Probing. Given that the initial hash function is h'(k) = k % 11 and the quadratic probing function is as follows:",
      "operations": [
        "h(k, i) = (h'(k) + 2 * i^2) % 11"
      ],
      "sequence": [38, 35, 28, 45, 94, 71, 40, 80],
      "ask": "Insert the keys sequentially into the hash table. What is the total sum of the keys contained in the last 5 slots of the table?"
    },
    "options": {
      "A": "100",
      "B": "110",
      "C": "120",
      "D": "233"
    },
    "answer": "D"
  },
  {
    "id": 7,
    "chapter": "Hashing",
    "question": {
      "main": "Given a hash table of size m = 19 using the hash function h(k) = k mod 19. Insert the following keys into the hash table sequentially under the assumption that the Chaining method is used to resolve collisions:",
      "sequence": [15, 78, 56, 25, 19, 38, 57, 76, 34, 53, 72, 91],
      "ask": "Count the total number of keys at the slot that experiences the most collisions:"
    },
    "options": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "6"
    },
    "answer": "C"
  },
  {
    "id": 8,
    "chapter": "Hashing",
    "question": {
      "main": "For each sequence of keys below, when inserted sequentially into an empty hash table of size 19 with the hash function h(k) = k % 19:",
      "sequence": ["0, 19, 57"],
      "ask": "Which sequence of keys results in the fewest collisions?"
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
    "id": 9,
    "chapter": "Hashing",
    "question": {
      "main": "Insert the following keys sequentially into a hash table of size 11 using the hash function h(k) = k mod 11. If a collision occurs, the open addressing resolution method is chosen with the probing function as follows:",
      "operations": [
        "p(k, i) = h(k) + 2 * i + 1"
      ],
      "sequence": [5, 7, 12, 25, 36, 58],
      "ask": "What is the final position (index) of the key 58 in the hash table?"
    },
    "options": {
      "A": "0",
      "B": "3",
      "C": "6",
      "D": "9"
    },
    "answer": "D"
  },
  {
    "id": 10,
    "chapter": "Hashing",
    "question": {
      "main": "Which of the following statements is true regarding Quadratic probing?",
      "ask": "Select the correct statement:"
    },
    "options": {
      "A": "It is a method used to implement a hash function.",
      "B": "It can lead to Primary clustering.",
      "C": "It can lead to Secondary clustering.",
      "D": "It can lead to both Linear clustering and Secondary clustering."
    },
    "answer": "C"
  },
  {
    "id": 11,
    "chapter": "Hashing",
    "question": {
      "main": "Which of the following statements is true regarding a collision in a hashing method?",
      "ask": "Select the correct statement:"
    },
    "options": {
      "A": "A collision is a situation where two different keys result in two different hash values.",
      "B": "A collision is a situation where two identical keys result in two different hash values.",
      "C": "A collision is a situation where two identical keys result in two identical hash values.",
      "D": "A collision is a situation where two different keys result in two identical hash values."
    },
    "answer": "D"
  },
  {
    "id": 12,
    "chapter": "Hashing",
    "question": {
      "main": "Which of the following methods has the capability to effectively reduce the primary clustering phenomenon when using open addressing to resolve collisions?",
      "ask": "Select the correct method:"
    },
    "options": {
      "A": "Linear Probing",
      "B": "Quadratic Probing",
      "C": "Double Hashing",
      "D": "Chaining"
    },
    "answer": "C"
  },
  {
    "id": 13,
    "chapter": "Hashing",
    "question": {
      "main": "When using the Linear Probing method in a hash table with the hash function h(k) = k mod 19 and a table size of m = 19, under which condition will primary clustering occur?",
      "ask": "Select the correct condition:"
    },
    "options": {
      "A": "When all elements have the exact same hash value.",
      "B": "When elements have hash values that are close to each other and experience consecutive collisions.",
      "C": "When elements have hash values that are evenly distributed across the table.",
      "D": "Primary clustering does not occur in this case."
    },
    "answer": "B"
  },
  {
    "id": 14,
    "chapter": "Hashing",
    "question": {
      "main": "When using Linear Probing or Quadratic Probing in a hash table with the hash function h(k) = k mod 19 and a table size of m = 19, under which condition will secondary clustering occur?",
      "ask": "Select the correct condition:"
    },
    "options": {
      "A": "When all elements have the exact same hash value.",
      "B": "When elements have hash values that are close to each other and experience consecutive collisions.",
      "C": "When elements have the same initial hash value, leading them to probe through the exact same sequence of fixed positions.",
      "D": "Secondary clustering does not occur in this case."
    },
    "answer": "C"
  },
  {
    "id": 15,
    "chapter": "Hashing",
    "question": {
      "main": "With the Double Hashing method, when the secondary hash function is h2(k) = 1 + (k % (m - 1)), how does this method help in resolving collisions compared to Linear Probing or Quadratic Probing?",
      "ask": "Select the correct benefit:"
    },
    "options": {
      "A": "It significantly reduces clustering and distributes elements more evenly.",
      "B": "It only reduces secondary clustering and does not affect primary clustering.",
      "C": "It enhances the search capability for elements that have already collided.",
      "D": "It has no effect on the clustering phenomenon."
    },
    "answer": "A"
  },
  {
    "id": 16,
    "chapter": "Hashing",
    "question": {
      "main": "Which of the following methods has the ability to reduce dependence on the hash table size when used in a system where the table size may change over time?",
      "ask": "Select the correct method:"
    },
    "options": {
      "A": "Double Hashing",
      "B": "Chaining",
      "C": "Quadratic Probing",
      "D": "Linear Probing"
    },
    "answer": "B"
  },

]
export default hash