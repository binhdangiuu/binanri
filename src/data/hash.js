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
  {
    "id": 17,
    "chapter": "Search Algorithms",
    "question": {
      "main": "The following algorithm searches for a target value within an ascending array a. Given that n = 13 and target > a[n-1], find the total number of comparisons performed inside the 'if' statements.",
      "context": `int i, low = 0, high = n - 1;
while (low < high) {
    i = (low + high) / 2;
    if (a[i] == target) return i;
    else if (a[i] < target) low = i + 1;
    else high = i - 1;
}
return -1;`
    },
    "options": {
      "A": "4",
      "B": "6",
      "C": "7",
      "D": "8"
    },
    "answer": "B"
  },
  {
    "id": 18,
    "chapter": "Search Algorithms",
    "question": {
      "main": "Given the function foo3 which implements the Interpolation Search algorithm. Which statement(s) is/are suitable to fill into the position of Line 1?",
      "context": `int foo3(int *arr, int n, int x) {
    int i1 = 0, i2 = (n - 1), pos;
    while (i1 <= i2 && x >= arr[i1] && x <= arr[i2]) {
        if (i1 == i2) {
            if (arr[i1] == x) return i1;
            return -1;
        }
        //Line 1
        if (arr[pos] == x) return pos;
        if (arr[pos] < x) i1 = pos + 1;
        else i2 = pos - 1;
    }
    return -1;
}`,
      "rule": "Consider the following options for Line 1:\n(a) pos = i1 + float(i2 - i1) * (x - arr[i1]) / (arr[i2] - arr[i1]);\n(b) pos = i1 + float(i2 - i1) * (x - arr[i1]) / (arr[i1] - arr[i2]);\n(c) pos = i1 + float(i2 - i1) * (arr[i1] - x) / (arr[i1] - arr[i2]);"
    },
    "options": {
      "A": "There is exactly 1 statement that can be chosen.",
      "B": "There are exactly 2 statements that can be chosen.",
      "C": "There are exactly 3 statements that can be chosen.",
      "D": "No statements are suitable."
    },
    "answer": "B"
  },
  {
    "id": 19,
    "chapter": "Search Algorithms",
    "question": {
      "main": "Given the function fun1:",
      "context": `int fun1(int arr[], int size, int key, int k) {
    int s = 0, e = size - 1, mid = s + (e - s) / 2;
    int ans = -1;
    while (s <= e) {
        if (arr[mid] == key) {
            if (arr[mid - k] == arr[mid]) e = mid - 1;
            else if (arr[mid - (k - 1)] == arr[mid]) {
                ans = mid;
                break;
            } else s = mid + 1;
        } else if (key < arr[mid]) e = mid - 1;
        else if (key > arr[mid]) s = mid + 1;
        mid = s + (e - s) / 2;
    }
    return ans;
}
//execution
int arr[] = {1, 5, 5, 11, 19, 22, 22, 22, 22, 45, 48, 48, 48};
cout << fun1(arr, 13, 22, 4);`,
      "ask": "What will be the output displayed on the screen after the above code snippet is executed?"
    },
    "options": {
      "A": "5",
      "B": "6",
      "C": "7",
      "D": "8"
    },
    "answer": "D"
  },
  {
    "id": 20,
    "chapter": "Search Algorithms",
    "question": {
      "main": "Given the function foo:",
      "context": `int foo(int arr[], int left, int right, int x) {
    if (right < left) return -1;
    int mid = left + (right - left) / 2;
    if (arr[mid] == x) return mid;
    if (arr[mid] > x)
        return foo(arr, left, mid - 1, x);
    return foo(arr, mid + 1, right, x);
}
//execution
int arr[] = {2, 3, 4, 10, 40};
cout << foo(arr, 0, sizeof(arr) / sizeof(arr[0]) - 1, 10);`,
      "ask": "What will be the output displayed on the screen after the above code snippet finishes execution?"
    },
    "options": {
      "A": "0",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "B"
  },
  {
    "id": 21,
    "chapter": "Search Algorithms",
    "question": {
      "main": "If an array is unsorted, which of the following search algorithms is appropriate to find an element?",
      "ask": "Select the correct algorithm:"
    },
    "options": {
      "A": "Binary Search",
      "B": "Interpolation Search",
      "C": "Linear Search",
      "D": "Jump Search"
    },
    "answer": "C"
  },
  {
    "id": 22,
    "chapter": "Search Algorithms",
    "question": {
      "main": "Given a sorted array containing n elements, what is the time complexity of the Binary Search algorithm?",
      "ask": "Select the correct complexity:"
    },
    "options": {
      "A": "O(n)",
      "B": "O(log n)",
      "C": "O(n log n)",
      "D": "O(1)"
    },
    "answer": "B"
  },
  {
    "id": 23,
    "chapter": "Search Algorithms",
    "question": {
      "main": "Use the interpolation search algorithm to find the position of the target value in the given array:",
      "sequence": [2, 4, 7, 10, 15, 18, 23, 29, 35, 42, 50, 55, 60],
      "rule": "Target value to find: 42",
      "ask": "How many comparisons need to be made?"
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
    "id": 24,
    "chapter": "Hashing",
    "question": {
      "main": "Given an empty hash table of size 13, using the chaining method and the following hash function:",
      "operations": [
        "h(k) = k mod 13"
      ],
      "insertions": [13, 26, 39, 14, 27, 40, 5, 18],
      "ask": "Which of the following slots has the most elements after completing all insertions?"
    },
    "options": {
      "A": "Slot 0",
      "B": "Slot 1",
      "C": "Slot 5",
      "D": "Slot 12"
    },
    "answer": "A"
  },
  {
    "id": 25,
    "chapter": "Hashing",
    "question": {
      "main": "Given an empty hash table of size m = 11, using the Linear Probing method with the following hash function:",
      "operations": [
        "h(k) = k mod 11"
      ],
      "insertions": [11, 22, 33, 4, 15, 26],
      "ask": "What is the total number of collisions that occur during the insertion process?"
    },
    "options": {
      "A": "3",
      "B": "4",
      "C": "5",
      "D": "6"
    },
    "answer": "D"
  },
  {
    "id": 26,
    "chapter": "Hashing",
    "question": {
      "main": "Given an empty hash table of size 11, using the Quadratic Probing method with the following hash function:",
      "operations": [
        "h(k) = k mod 11"
      ],
      "rule": "The alternative positions are checked using the formula: (h(k) + i^2) mod 11, with i = 1, 2, 3...",
      "insertions": [12, 23, 34, 45],
      "ask": "What is the total number of collisions that occur during the insertion process?"
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
    "id": 27,
    "chapter": "Hashing",
    "question": {
      "main": "Given an empty hash table of size 13, using the Double Hashing method with the primary and secondary hash functions as follows:",
      "operations": [
        "h1(k) = k mod 13",
        "h2(k) = 5 - (k mod 5)"
      ],
      "rule": "The probing formula for finding an alternative slot when a collision occurs is: Index = (h1(k) + i * h2(k)) mod 13, with i = 1, 2, ...",
      "insertions": [13, 26, 39],
      "ask": "What is the final position (index) of the key 39 in the hash table?"
    },
    "options": {
      "A": "0",
      "B": "5",
      "C": "10",
      "D": "8"
    },
    "answer": "C"
  },
  {
    "id": 28,
    "chapter": "Search Algorithms",
    "question": {
      "main": "Given the recursive function mysterySearch:",
      "context": `int mysterySearch(int arr[], int low, int high, int key) {
    if (low > high) return -1;
    int mid1 = low + (high - low) / 3;
    int mid2 = high - (high - low) / 3;
    if (arr[mid1] == key) return mid1;
    if (arr[mid2] == key) return mid2;
    if (key < arr[mid1]) 
        return mysterySearch(arr, low, mid1 - 1, key);
    else if (key > arr[mid2]) 
        return mysterySearch(arr, mid2 + 1, high, key);
    else 
        return mysterySearch(arr, mid1 + 1, mid2 - 1, key);
}
//execution
int arr[] = {1, 4, 7, 9, 12, 15, 18, 21, 24};
cout << mysterySearch(arr, 0, 8, 15);`,
      "ask": "What will be the output displayed on the screen after the above code snippet finishes execution?"
    },
    "options": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "-1"
    },
    "answer": "B"
  },
  {
    "id": 29,
    "chapter": "Hashing",
    "question": {
      "main": "Which of the following statements describes the main disadvantage of Linear Probing compared to Quadratic Probing and Double Hashing?",
      "ask": "Select the correct statement:"
    },
    "options": {
      "A": "It requires more memory space for storing data elements.",
      "B": "It suffers heavily from Primary Clustering, where long blocks of occupied slots build up.",
      "C": "It cannot resolve collisions if the table is more than 50% full.",
      "D": "It results in a high number of Secondary Clustering issues."
    },
    "answer": "B"
  },
  {
    "id": 30,
    "chapter": "Hashing",
    "question": {
      "main": "A hash table of size 11 uses an open addressing method to resolve collisions, specifically Quadratic Probing. Given that the initial hash function is h'(k) = k % 11 and the quadratic probing function is as follows:",
      "operations": [
        "h(k, i) = (h'(k) + i^2) % 11"
      ],
      "insertions": [11, 22, 33, 44],
      "ask": "Insert the keys sequentially into the hash table. What is the final index position of the key 44?"
    },
    "options": {
      "A": "0",
      "B": "1",
      "C": "4",
      "D": "9"
    },
    "answer": "D"
  },
  {
    "id": 31,
    "chapter": "Hashing",
    "question": {
      "main": "In a hash table that utilizes the Chaining method for collision resolution, what is the worst-case time complexity for searching an element if all n keys hash to the same slot?",
      "ask": "Select the correct complexity:"
    },
    "options": {
      "A": "O(1)",
      "B": "O(log n)",
      "C": "O(n)",
      "D": "O(n log n)"
    },
    "answer": "C"
  },
  {
    "id": 32,
    "chapter": "Hashing",
    "question": {
      "main": "Given a hash table of size m = 11 using the hash function h(k) = k mod 11. Insert the following keys into the hash table sequentially under the assumption that the Chaining method is used to resolve collisions:",
      "insertions": [5, 16, 27, 38, 7, 18],
      "ask": "Count the total number of keys at Slot 5 after all insertions are completed:"
    },
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "D"
  },
  {
    "id": 33,
    "chapter": "Hashing",
    "question": {
      "main": "Insert the following keys sequentially into a hash table of size 11 using the hash function h(k) = k mod 11. If a collision occurs, the open addressing resolution method is chosen with the probing function as follows:",
      "operations": [
        "p(k, i) = h(k) + i"
      ],
      "insertions": [10, 21, 32],
      "ask": "What is the final position (index) of the key 32 in the hash table?"
    },
    "options": {
      "A": "10",
      "B": "0",
      "C": "1",
      "D": "2"
    },
    "answer": "C"
  },
  {
    "id": 34,
    "chapter": "Hashing",
    "question": {
      "main": "What is the primary condition required for a secondary hash function h2(k) in Double Hashing to ensure that all slots in the hash table can be probed?",
      "ask": "Select the correct condition:"
    },
    "options": {
      "A": "h2(k) must always evaluate to 0.",
      "B": "h2(k) must be relatively prime (coprime) to the size of the hash table m.",
      "C": "h2(k) must generate values strictly greater than the size of the table m.",
      "D": "h2(k) must be an even function."
    },
    "answer": "B"
  },
  {
    "id": 35,
    "chapter": "Search Algorithms",
    "question": {
      "main": "Given the function checkIndex:",
      "context": `int checkIndex(int arr[], int n) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == mid) return mid;
        if (arr[mid] > mid) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}
//execution
int arr[] = {-10, -5, 0, 3, 7, 9, 12};
cout << checkIndex(arr, 7);`,
      "ask": "What will be the output displayed on the screen after the above code snippet finishes execution?"
    },
    "options": {
      "A": "0",
      "B": "3",
      "C": "7",
      "D": "-1"
    },
    "answer": "B"
  },
  {
    "id": 36,
    "chapter": "Hashing",
    "question": {
      "main": "Which of the following statements is true regarding Secondary Clustering in hashing?",
      "ask": "Select the correct statement:"
    },
    "options": {
      "A": "It is caused by having multiple different initial hash values mapping to adjacent slots.",
      "B": "It occurs when keys with the same initial hash value follow the exact same probe sequence.",
      "C": "It is completely eliminated by using the Linear Probing method.",
      "D": "It only happens when using Separate Chaining."
    },
    "answer": "B"
  },
  {
    "id": 37,
    "chapter": "Search Algorithms",
    "question": {
      "main": "For an array that is sorted in ascending order, which of the following statements represents the worst-case scenario for the Interpolation Search algorithm?",
      "ask": "Select the correct statement:"
    },
    "options": {
      "A": "The elements are distributed uniformly throughout the array range.",
      "B": "The target key is located exactly in the middle of the array.",
      "C": "The elements increase exponentially, causing highly non-uniform distribution.",
      "D": "The target key is equal to the first element of the array."
    },
    "options": {
      "A": "Uniform distribution of keys.",
      "B": "Keys growing exponentially or non-uniformly.",
      "C": "Target element being at the maximum boundary.",
      "D": "Target element being at the minimum boundary."
    },
    "answer": "B"
  },
  {
    "id": 38,
    "chapter": "Hashing",
    "question": {
      "main": "Given an empty hash table of size 11, using the Double Hashing method with the primary and secondary hash functions as follows:",
      "operations": [
        "h1(k) = k mod 11",
        "h2(k) = 5 - (k mod 5)"
      ],
      "rule": "Probe function: (h1(k) + i * h2(k)) mod 11, with i = 1, 2, ...",
      "insertions": [3, 14, 25],
      "ask": "What is the total number of collisions that occur during the insertion process of these keys?"
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
    "id": 39,
    "chapter": "Search Algorithms",
    "question": {
      "main": "Given the function countOccurrences:",
      "context": `int countOccurrences(int arr[], int n, int x) {
    int low = 0, high = n - 1, res = 0;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == x) {
            res++;
            int left = mid - 1;
            while (left >= 0 && arr[left] == x) { res++; left--; }
            int right = mid + 1;
            while (right < n && arr[right] == x) { res++; right++; }
            return res;
        }
        if (arr[mid] < x) low = mid + 1;
        else high = mid - 1;
    }
    return res;
}
//execution
int arr[] = {1, 2, 2, 2, 2, 3, 4};
cout << countOccurrences(arr, 7, 2);`,
      "ask": "What will be the output displayed on the screen after the above code snippet finishes execution?"
    },
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "C"
  },
  {
    "id": 40,
    "chapter": "Hashing",
    "question": {
      "main": "What happens when the load factor (lambda = n / m) of an open-addressing hash table approaches 1?",
      "ask": "Select the correct statement:"
    },
    "options": {
      "A": "The number of collisions decreases significantly.",
      "B": "The search and insertion operations approach O(1) time complexity.",
      "C": "The probe sequences become extremely long, drastically decreasing performance.",
      "D": "The hash table automatically shifts to a chaining model."
    },
    "answer": "C"
  }

]
export default hash