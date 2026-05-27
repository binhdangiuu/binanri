const hash = [
    {
    "id": 1,
    "chapter": "Search Algorithms",
    "question": {
      "main": "Use the interpolation search algorithm to find the position of 48 in the following array: [1,5,8,11,19,22,31,35,40,45,48,49,50]. How many comparisons need to be made?",
      "ask": "Select the correct option:"
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
      "main": "Given an empty hash table of size 19, using the chaining method and the hash function h(k) = k mod 19. Insert the following keys into the hash table in order: 19, 20, 21, 22, 23, 40, 41, 57. Which of the following slots has the fewest elements among the 4 given options?",
      "ask": "Select the correct option:"
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
      "main": "Given an empty hash table of size 10, using the Linear Probing method with the hash function: h(k) = k mod 10. Insert the following keys into the hash table in order: 12, 15, 1, 6, 22, 32, 42. What is the total number of collisions that occur during the insertion process?",
      "ask": "Select the correct option:"
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
      "main": "Given an empty hash table of size 10, using the Quadratic Probing method with the hash function: h(k) = k mod 10. Quadratic probing means that if the initial slot is occupied, we will try alternative positions with a quadratically increasing distance: h(k), (h(k) + 1^2) mod 10, (h(k) + 2^2) mod 10, (h(k) + 3^2) mod 10,... until an empty slot is found. Insert the following keys into the hash table in order: 12, 22, 32, 42, 52. What is the total number of collisions that occur during the insertion process?",
      "ask": "Select the correct option:"
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
    "insertion": [10, 22, 31, 4, 15],
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
      "insertion": [38, 35, 28, 45, 94, 71, 40, 80],
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
      "insertion": [15, 78, 56, 25, 19, 38, 57, 76, 34, 53, 72, 91],
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
      "insertion": [5, 7, 12, 25, 36, 58],
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
  }

]