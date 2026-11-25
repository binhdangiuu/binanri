const storage = [
  {
    "question": "Trong cơ chế bảo vệ phần cứng bằng thanh ghi base và limit, nếu một tiến trình có base = 1200, limit = 400 thì địa chỉ luận lý nào sau đây là hợp lệ?",
    "options": [
      "1600",
      "0",
      "1400",
      "1100"
    ],
    "answer": "B",
    "en": {
      "question": "In hardware protection using base and limit registers, if a process has base = 1200 and limit = 400, which of the following logical addresses is valid?",
      "options": [
        "1600",
        "0",
        "1400",
        "1100"
      ]
    }
  },
  {
    "question": "Trong cơ chế bảo vệ phần cứng bằng thanh ghi base và limit, nếu một tiến trình có base = 1200, limit = 400 thì địa chỉ vật lý nào sau đây được tạo ra từ địa chỉ luận lý 250?",
    "options": [
      "1450",
      "1200",
      "250",
      "Không hợp lệ"
    ],
    "answer": "A",
    "en": {
      "question": "In hardware protection using base and limit registers, if a process has base = 1200 and limit = 400, which physical address is produced from logical address 250?",
      "options": [
        "1450",
        "1200",
        "250",
        "Invalid"
      ]
    }
  },
  {
    "question": "Chương trình sinh địa chỉ luận lý 500 nhưng trong hai lần chạy khác nhau, địa chỉ vật lý lần lượt là 4500 và 8500. Điều này cho thấy điều gì?",
    "options": [
      "Địa chỉ luận lý và địa chỉ vật lý luôn giống nhau.",
      "Chương trình đã bị biên dịch lại giữa hai lần chạy.",
      "Hệ điều hành có thể nạp tiến trình vào các vị trí vật lý khác nhau mà không cần thay đổi mã chương trình.",
      "Chương trình chỉ hoạt động khi được nạp tại địa chỉ vật lý cố định."
    ],
    "answer": "C",
    "en": {
      "question": "A program generates logical address 500, but in two different runs the physical addresses are 4500 and 8500. What does this show?",
      "options": [
        "Logical and physical addresses are always identical.",
        "The program was recompiled between the two runs.",
        "The OS can load the process at different physical locations without changing the program code.",
        "The program only works when loaded at a fixed physical address."
      ]
    }
  },
  {
    "question": "Trong giai đoạn nào của Address Binding, địa chỉ luận lý và địa chỉ vật lý có thể khác nhau trong suốt thời gian thực thi của chương trình?",
    "options": [
      "Compile-time binding.",
      "Load-time binding.",
      "Execution-time binding.",
      "Static-time binding."
    ],
    "answer": "C",
    "en": {
      "question": "In which stage of address binding can the logical and physical addresses differ throughout the program's execution?",
      "options": [
        "Compile-time binding.",
        "Load-time binding.",
        "Execution-time binding.",
        "Static-time binding."
      ]
    }
  },
  {
    "question": "Điểm khác biệt quan trọng nhất giữa Static Loading và Dynamic Loading là gì?",
    "options": [
      "Static Loading cho phép chương trình sử dụng bộ nhớ không liên tục.",
      "Dynamic Loading chỉ nạp các routine vào bộ nhớ khi thật sự cần sử dụng.",
      "Static Loading luôn nhanh hơn Dynamic Loading trong mọi trường hợp.",
      "Dynamic Loading không cần hệ điều hành hỗ trợ quản lý bộ nhớ."
    ],
    "answer": "B",
    "en": {
      "question": "What is the most important difference between static loading and dynamic loading?",
      "options": [
        "Static loading lets a program use non-contiguous memory.",
        "Dynamic loading loads a routine into memory only when it is actually needed.",
        "Static loading is always faster than dynamic loading in every case.",
        "Dynamic loading needs no operating-system support for memory management."
      ]
    }
  },
  {
    "question": "Vì sao Dynamic Loading giúp tiết kiệm bộ nhớ?",
    "options": [
      "Vì toàn bộ chương trình được nạp vào RAM ngay từ đầu.",
      "Vì các module chỉ được nạp vào bộ nhớ khi cần sử dụng.",
      "Vì hệ điều hành tự động nén chương trình trong RAM.",
      "Vì chương trình luôn sử dụng ít CPU hơn."
    ],
    "answer": "B",
    "en": {
      "question": "Why does dynamic loading save memory?",
      "options": [
        "Because the whole program is loaded into RAM from the start.",
        "Because modules are loaded into memory only when they are needed.",
        "Because the OS automatically compresses the program in RAM.",
        "Because the program always uses less CPU."
      ]
    }
  },
  {
    "question": "Một hệ thống quản lý bộ nhớ sử dụng danh sách cấp phát (Allocated List) và danh sách vùng trống (Free List). Ban đầu bộ nhớ trống hoàn toàn gồm một khối 1000KB. Quá trình cấp phát và giải phóng diễn ra như trong phần dữ liệu. Tại thời điểm sau khi giải phóng P2, trạng thái bộ nhớ nào sau đây đúng nhất?",
    "options": [
      "Allocated List: P1(0-199), P3(500-599); Free List: (200-499), (600-999)",
      "Allocated List: P1(0-199), P3(500-599); Free List: (200-499)",
      "Allocated List: P1(0-199), P2(200-499), P3(500-599); Free List: (600-999)",
      "Allocated List: P1(0-199), P3(300-399); Free List: (200-299), (400-999)"
    ],
    "answer": "A",
    "en": {
      "question": "A memory manager uses an Allocated List and a Free List. Memory is initially one completely free 1000KB block. Allocation and release happen as shown in the data. After P2 is released, which memory state is the most accurate?",
      "options": [
        "Allocated List: P1(0-199), P3(500-599); Free List: (200-499), (600-999)",
        "Allocated List: P1(0-199), P3(500-599); Free List: (200-499)",
        "Allocated List: P1(0-199), P2(200-499), P3(500-599); Free List: (600-999)",
        "Allocated List: P1(0-199), P3(300-399); Free List: (200-299), (400-999)"
      ]
    },
    "context": "Cấp phát P1: 200KB\nCấp phát P2: 300KB\nCấp phát P3: 100KB\nGiải phóng P2"
  },
  {
    "question": "Các hole ban đầu (từ thấp → cao): 100K, 500K, 200K, 300K, 600K. Yêu cầu cấp phát lần lượt: 290K, 420K, 110K, 350K. Sử dụng giải thuật First Fit, thứ tự cấp phát là:",
    "options": [
      "290K, 110K, 420K, còn 350K không cấp phát được",
      "290K, 420K, 110K, còn 350K không cấp phát được",
      "420K, 110K, 290K, 350K",
      "420K, 290K, 100K, còn 350K không cấp phát được"
    ],
    "answer": "A",
    "en": {
      "question": "Initial holes (low → high): 100K, 500K, 200K, 300K, 600K. Allocation requests in order: 290K, 420K, 110K, 350K. Using the First Fit algorithm, the allocation order is:",
      "options": [
        "290K, 110K, 420K, and 350K cannot be allocated",
        "290K, 420K, 110K, and 350K cannot be allocated",
        "420K, 110K, 290K, 350K",
        "420K, 290K, 100K, and 350K cannot be allocated"
      ]
    }
  },
  {
    "question": "Các hole ban đầu (từ thấp → cao): 100K, 500K, 200K, 300K, 600K. Yêu cầu cấp phát lần lượt: 290K, 420K, 110K, 350K. Sử dụng giải thuật Best Fit, thứ tự cấp phát là:",
    "options": [
      "290K, 110K, 420K, còn 350K không cấp phát được",
      "290K, 420K, 110K, còn 350K không cấp phát được",
      "420K, 110K, 290K, 350K",
      "420K, 290K, 100K, còn 350K không cấp phát được"
    ],
    "answer": "C",
    "en": {
      "question": "Initial holes (low → high): 100K, 500K, 200K, 300K, 600K. Allocation requests in order: 290K, 420K, 110K, 350K. Using the Best Fit algorithm, the allocation order is:",
      "options": [
        "290K, 110K, 420K, and 350K cannot be allocated",
        "290K, 420K, 110K, and 350K cannot be allocated",
        "420K, 110K, 290K, 350K",
        "420K, 290K, 100K, and 350K cannot be allocated"
      ]
    }
  },
  {
    "question": "Các hole ban đầu (từ thấp → cao): 100K, 500K, 200K, 300K, 600K. Yêu cầu cấp phát lần lượt: 290K, 420K, 110K, 350K. Sử dụng giải thuật Worst Fit, thứ tự cấp phát là:",
    "options": [
      "290K, 110K, 420K, còn 350K không cấp phát được",
      "420K, 290K, 110K, còn 350K không cấp phát được",
      "420K, 110K, 290K, 350K",
      "420K, 290K, 100K, còn 350K không cấp phát được"
    ],
    "answer": "B",
    "en": {
      "question": "Initial holes (low → high): 100K, 500K, 200K, 300K, 600K. Allocation requests in order: 290K, 420K, 110K, 350K. Using the Worst Fit algorithm, the allocation order is:",
      "options": [
        "290K, 110K, 420K, and 350K cannot be allocated",
        "420K, 290K, 110K, and 350K cannot be allocated",
        "420K, 110K, 290K, 350K",
        "420K, 290K, 100K, and 350K cannot be allocated"
      ]
    }
  },
  {
    "question": "Cho ba vùng nhớ trống lần lượt là 500K, 100K, 300K. Sử dụng giải thuật Best Fit để cấp phát các tiến trình có kích thước 250K, 120K. Hãy xác định tổng phân mảnh nội (internal fragmentation) và phân mảnh ngoại (external fragmentation).",
    "options": [
      "Internal = 430K, External = 100K",
      "Internal = 30K, External = 280K",
      "Internal = 50K, External = 300K",
      "Internal = 20K, External = 300K"
    ],
    "answer": "A",
    "en": {
      "question": "Three free memory regions are 500K, 100K and 300K. Using Best Fit, allocate processes of size 250K and 120K. Determine the total internal fragmentation and external fragmentation.",
      "options": [
        "Internal = 430K, External = 100K",
        "Internal = 30K, External = 280K",
        "Internal = 50K, External = 300K",
        "Internal = 20K, External = 300K"
      ]
    }
  },
  {
    "question": "Nhận định nào sau đây là đúng nhất về phân mảnh trong hệ thống bộ nhớ?",
    "options": [
      "Chỉ bộ nhớ RAM mới bị phân mảnh, còn bộ nhớ phụ (disk) thì không bị ảnh hưởng.",
      "Bộ nhớ phụ (backing store) không cần quản lý cấp phát nên không có phân mảnh.",
      "Bộ nhớ phụ (backing store) cũng có thể bị phân mảnh tương tự RAM.",
      "Phân mảnh chỉ xảy ra trong hệ thống sử dụng segmentation, không xảy ra với paging."
    ],
    "answer": "C",
    "en": {
      "question": "Which statement about fragmentation in a memory system is the most accurate?",
      "options": [
        "Only RAM suffers fragmentation; secondary storage (disk) is unaffected.",
        "The backing store needs no allocation management, so it has no fragmentation.",
        "The backing store can also be fragmented, just like RAM.",
        "Fragmentation only occurs in systems using segmentation, never with paging."
      ]
    }
  },
  {
    "question": "Một hệ thống sử dụng cơ chế phân trang (Paging) với kích thước trang = 1KB = 2^10 bytes và không gian địa chỉ luận lý 2^16 bytes. Địa chỉ luận lý được chia thành số bit cho page number và offset lần lượt là:",
    "options": [
      "6 bit và 10 bit",
      "10 bit và 6 bit",
      "8 bit và 8 bit",
      "12 bit và 4 bit"
    ],
    "answer": "A",
    "en": {
      "question": "A paging system has page size = 1KB = 2^10 bytes and a logical address space of 2^16 bytes. The number of bits for the page number and the offset are, respectively:",
      "options": [
        "6 bits and 10 bits",
        "10 bits and 6 bits",
        "8 bits and 8 bits",
        "12 bits and 4 bits"
      ]
    }
  },
  {
    "question": "Một hệ thống sử dụng cơ chế phân trang (Paging) với địa chỉ luận lý 32 bit. Phần offset chiếm 12 bit. Kích thước của một frame là bao nhiêu?",
    "options": [
      "2KB",
      "4KB",
      "8KB",
      "16KB"
    ],
    "answer": "B",
    "en": {
      "question": "A paging system uses 32-bit logical addresses. The offset takes 12 bits. What is the size of one frame?",
      "options": [
        "2KB",
        "4KB",
        "8KB",
        "16KB"
      ]
    }
  },
  {
    "question": "Một hệ thống sử dụng cơ chế phân trang với kích thước trang là 1KB. Bảng trang của tiến trình như trong phần dữ liệu. Địa chỉ vật lý tương ứng với địa chỉ luận lý 2500 là bao nhiêu?",
    "options": [
      "1476",
      "4548",
      "8644",
      "2500"
    ],
    "answer": "C",
    "en": {
      "question": "A paging system uses a 1KB page size. The process's page table is shown in the data. What physical address corresponds to logical address 2500?",
      "options": [
        "1476",
        "4548",
        "8644",
        "2500"
      ]
    },
    "context": "Page Number | Frame Number\n     0      |      5\n     1      |      2\n     2      |      8\n     3      |      1"
  },
  {
    "question": "Một hệ thống sử dụng cơ chế phân trang với Page size = 4 bytes = 2^2, Logical address space = 16 bytes = 2^4, Physical memory = 32 bytes = 2^5. Phát biểu nào sau đây là đúng?",
    "options": [
      "Hệ thống có 4 pages, 8 frames và offset chiếm 2 bit.",
      "Hệ thống có 8 pages, 4 frames và offset chiếm 4 bit.",
      "Hệ thống có 16 pages, 32 frames và offset chiếm 5 bit.",
      "Hệ thống có 2 pages, 4 frames và offset chiếm 1 bit."
    ],
    "answer": "A",
    "en": {
      "question": "A paging system has page size = 4 bytes = 2^2, logical address space = 16 bytes = 2^4, physical memory = 32 bytes = 2^5. Which statement is correct?",
      "options": [
        "The system has 4 pages, 8 frames and the offset takes 2 bits.",
        "The system has 8 pages, 4 frames and the offset takes 4 bits.",
        "The system has 16 pages, 32 frames and the offset takes 5 bits.",
        "The system has 2 pages, 4 frames and the offset takes 1 bit."
      ]
    }
  },
  {
    "question": "Phát biểu nào sau đây mô tả đúng đặc điểm của Free Frames List trong cơ chế phân trang (Paging)?",
    "options": [
      "Các frame trống trong Free Frames List phải nằm liên tục trong bộ nhớ vật lý.",
      "Các frame trống có thể nằm rải rác, không cần liên tục trong bộ nhớ vật lý.",
      "Free Frames List chỉ chứa các frame của cùng một tiến trình.",
      "Các frame trong Free Frames List luôn có kích thước khác nhau."
    ],
    "answer": "B",
    "en": {
      "question": "Which statement correctly describes the Free Frames List in paging?",
      "options": [
        "Free frames in the list must be contiguous in physical memory.",
        "Free frames may be scattered; they need not be contiguous in physical memory.",
        "The list only contains frames belonging to the same process.",
        "Frames in the list always have different sizes."
      ]
    }
  },
  {
    "question": "Translation Look-aside Buffer (TLB) thường được thiết kế dựa trên cấu trúc dữ liệu nào để tăng tốc quá trình tra cứu địa chỉ?",
    "options": [
      "Stack",
      "Queue",
      "Associative memory (Content-addressable memory)",
      "Linked List"
    ],
    "answer": "C",
    "en": {
      "question": "Which data structure is the Translation Look-aside Buffer (TLB) typically built on to speed up address translation?",
      "options": [
        "Stack",
        "Queue",
        "Associative memory (content-addressable memory)",
        "Linked List"
      ]
    }
  },
  {
    "question": "Một hệ thống sử dụng TLB có thời gian truy cập bộ nhớ là 100ns. Nếu không tìm thấy trong TLB, hệ thống phải truy cập page table trong RAM rồi mới truy cập dữ liệu, tổng cộng mất 200ns. Biết Effective Access Time (EAT) là 110ns. Hit ratio của TLB là bao nhiêu?",
    "options": [
      "80%",
      "85%",
      "90%",
      "95%"
    ],
    "answer": "C",
    "en": {
      "question": "A system uses a TLB with a memory access time of 100ns. On a TLB miss, the system must access the page table in RAM and then the data, taking 200ns in total. The Effective Access Time (EAT) is 110ns. What is the TLB hit ratio?",
      "options": [
        "80%",
        "85%",
        "90%",
        "95%"
      ]
    }
  },
  {
    "question": "Trong cơ chế phân trang (Paging), nếu một tiến trình truy cập vào page có valid-invalid bit = invalid, điều gì sẽ xảy ra?",
    "options": [
      "Hệ thống tự động cấp thêm frame mới cho page đó.",
      "CPU bỏ qua page đó và tiếp tục thực thi.",
      "Hệ điều hành phát sinh trap (exception) để xử lý truy cập không hợp lệ.",
      "Page sẽ được chuyển sang trạng thái read-only."
    ],
    "answer": "C",
    "en": {
      "question": "In paging, if a process accesses a page whose valid-invalid bit = invalid, what happens?",
      "options": [
        "The system automatically allocates a new frame for that page.",
        "The CPU skips that page and continues executing.",
        "The OS raises a trap (exception) to handle the illegal access.",
        "The page is switched to read-only."
      ]
    }
  },
  {
    "question": "Một hệ thống có 4 tiến trình cùng sử dụng chung một chương trình soạn thảo văn bản. Phần mã lệnh (code) của chương trình có kích thước 20MB và được cài đặt dưới dạng shared read-only pages. Mỗi tiến trình ngoài ra còn có 5MB dữ liệu riêng. Tổng dung lượng RAM cần dùng cho 4 tiến trình là bao nhiêu?",
    "options": [
      "25MB",
      "40MB",
      "80MB",
      "100MB"
    ],
    "answer": "B",
    "en": {
      "question": "Four processes share one text-editor program. Its code is 20MB and is installed as shared read-only pages. Each process also has 5MB of private data. How much RAM is needed in total for the 4 processes?",
      "options": [
        "25MB",
        "40MB",
        "80MB",
        "100MB"
      ]
    }
  },
  {
    "question": "Trên hệ thống 32-bit sử dụng phân trang hai mức (two-level paging), giả sử kích thước địa chỉ luận lý là 32 bit, kích thước trang là 1KB = 2^10 byte, bảng trang ngoài có 2^8 entry. Số bit dành cho (a) Page offset, (b) Chỉ số bảng trang ngoài (p1), (c) Chỉ số bảng trang trong (p2) lần lượt là:",
    "options": [
      "10, 8, 14",
      "12, 8, 12",
      "10, 14, 8",
      "8, 10, 14"
    ],
    "answer": "A",
    "en": {
      "question": "On a 32-bit system using two-level paging, assume a 32-bit logical address, a page size of 1KB = 2^10 bytes, and an outer page table with 2^8 entries. The number of bits for (a) page offset, (b) outer page-table index (p1), (c) inner page-table index (p2) are, respectively:",
      "options": [
        "10, 8, 14",
        "12, 8, 12",
        "10, 14, 8",
        "8, 10, 14"
      ]
    }
  },
  {
    "question": "So sánh giữa Hashed Page Table và Inverted Page Table trong hệ thống quản lý bộ nhớ:",
    "options": [
      "Hashed Page Table sử dụng một bảng trang cho mỗi tiến trình, còn Inverted Page Table sử dụng một bảng trang duy nhất cho toàn hệ thống.",
      "Hashed Page Table chỉ phù hợp với hệ thống 32-bit, còn Inverted Page Table chỉ dùng cho 64-bit.",
      "Hashed Page Table lưu toàn bộ mapping page → frame trong một mảng tuyến tính, còn Inverted Page Table dùng hash function để giảm thời gian tìm kiếm.",
      "Inverted Page Table lưu một entry cho mỗi page của mỗi tiến trình, còn Hashed Page Table lưu một entry cho mỗi frame vật lý."
    ],
    "answer": "A",
    "en": {
      "question": "Compare the Hashed Page Table and the Inverted Page Table in memory management:",
      "options": [
        "A hashed page table uses one page table per process, while an inverted page table uses a single page table for the whole system.",
        "A hashed page table only suits 32-bit systems, while an inverted page table is only for 64-bit.",
        "A hashed page table stores the entire page → frame mapping in a linear array, while an inverted page table uses a hash function to cut search time.",
        "An inverted page table stores one entry per page of each process, while a hashed page table stores one entry per physical frame."
      ]
    }
  },
  {
    "question": "Một hệ thống sử dụng Inverted Page Table với kích thước page/frame = 4KB và RAM vật lý có 8 frame (đánh số từ 0 đến 7). Tiến trình có PID = 1 muốn truy cập địa chỉ ảo thuộc (Page = 5, Offset = 120). Địa chỉ vật lý tương ứng là (Frame, Offset):",
    "options": [
      "(1, 120)",
      "(3, 120)",
      "(5, 120)",
      "(6, 120)"
    ],
    "answer": "B",
    "en": {
      "question": "A system uses an Inverted Page Table with page/frame size = 4KB and 8 physical frames (numbered 0 to 7). The process with PID = 1 wants to access virtual address (Page = 5, Offset = 120). The corresponding physical address (Frame, Offset) is:",
      "options": [
        "(1, 120)",
        "(3, 120)",
        "(5, 120)",
        "(6, 120)"
      ]
    },
    "context": "Frame | PID | Page\n  0   |  2  |  1\n  1   |  1  |  3\n  2   |  4  |  0\n  3   |  1  |  5\n  4   |  3  |  2\n  5   |  2  |  7\n  6   |  1  |  1\n  7   |  4  |  6"
  },
  {
    "question": "Một hệ thống sử dụng Inverted Page Table với bộ nhớ vật lý 8GB, kích thước trang (page size) là 4KB, mỗi entry trong Inverted Page Table có kích thước 16 bytes. Hỏi kích thước bộ nhớ cần dùng cho Inverted Page Table là bao nhiêu?",
    "options": [
      "8MB",
      "16MB",
      "32MB",
      "64MB"
    ],
    "answer": "C",
    "en": {
      "question": "A system uses an Inverted Page Table with 8GB of physical memory, a 4KB page size, and 16-byte table entries. How much memory does the Inverted Page Table need?",
      "options": [
        "8MB",
        "16MB",
        "32MB",
        "64MB"
      ]
    }
  },
  {
    "question": "Một hệ thống sử dụng cơ chế hoán vị (swapping). Một tiến trình có kích thước 300MB cần được swap ra khỏi bộ nhớ chính và sau đó swap vào lại từ backing store. Tốc độ truyền của ổ đĩa là 60MB/s. Hỏi tổng thời gian để hoàn tất quá trình swapping là bao nhiêu?",
    "options": [
      "5 giây",
      "10 giây",
      "15 giây",
      "20 giây"
    ],
    "answer": "B",
    "en": {
      "question": "A system uses swapping. A 300MB process must be swapped out of main memory and later swapped back in from the backing store. The disk transfer rate is 60MB/s. What is the total time to complete swapping?",
      "options": [
        "5 seconds",
        "10 seconds",
        "15 seconds",
        "20 seconds"
      ]
    }
  },
  {
    "question": "Một hệ thống sử dụng Virtual Memory với Physical memory (RAM) 4KB và Backing store (swap space) 16KB. Hiện tại tiến trình P1 đang sử dụng 6KB bộ nhớ ảo và toàn bộ các trang của P1 đều đã được ánh xạ hợp lệ xuống RAM hoặc swap. Hỏi tiến trình P2 có thể có tối đa bao nhiêu KB không gian địa chỉ ảo để vẫn có thể được ánh xạ hợp lệ mà không vượt quá tổng khả năng lưu trữ của hệ thống?",
    "options": [
      "4KB",
      "10KB",
      "14KB",
      "16KB"
    ],
    "answer": "C",
    "en": {
      "question": "A virtual-memory system has 4KB of physical memory (RAM) and 16KB of backing store (swap space). Process P1 currently uses 6KB of virtual memory, and all of P1's pages are validly mapped to RAM or swap. What is the maximum virtual address space (in KB) P2 can have while still being validly mapped without exceeding the system's total storage capacity?",
      "options": [
        "4KB",
        "10KB",
        "14KB",
        "16KB"
      ]
    }
  },
  {
    "question": "Phát biểu nào sau đây đúng về mối quan hệ giữa process và Virtual Address Space?",
    "options": [
      "Mọi process đều dùng chung một Virtual Address Space duy nhất.",
      "Mỗi process thường có một Virtual Address Space riêng biệt để bảo vệ và cô lập bộ nhớ.",
      "Virtual Address Space chỉ tồn tại khi process được swap ra đĩa.",
      "Chỉ các process ở kernel mode mới có Virtual Address Space."
    ],
    "answer": "B",
    "en": {
      "question": "Which statement about the relationship between a process and its virtual address space is correct?",
      "options": [
        "All processes share a single virtual address space.",
        "Each process normally has its own separate virtual address space for memory protection and isolation.",
        "A virtual address space exists only when the process is swapped out to disk.",
        "Only kernel-mode processes have a virtual address space."
      ]
    }
  },
  {
    "question": "Điểm khác biệt quan trọng nhất giữa Demand Paging và Demand Segmentation là gì?",
    "options": [
      "Demand Paging nạp dữ liệu theo page kích thước cố định, còn Demand Segmentation nạp theo segment có kích thước biến đổi.",
      "Demand Paging chỉ hoạt động trên RAM, còn Demand Segmentation chỉ hoạt động trên swap space.",
      "Demand Segmentation không cần MMU để ánh xạ địa chỉ.",
      "Demand Paging luôn loại bỏ hoàn toàn internal fragmentation."
    ],
    "answer": "A",
    "en": {
      "question": "What is the most important difference between demand paging and demand segmentation?",
      "options": [
        "Demand paging loads data in fixed-size pages, while demand segmentation loads variable-size segments.",
        "Demand paging works only in RAM, while demand segmentation works only in swap space.",
        "Demand segmentation needs no MMU for address translation.",
        "Demand paging always completely eliminates internal fragmentation."
      ]
    }
  },
  {
    "question": "Trong cơ chế Demand Paging, tại sao bộ nạp trang thường được gọi là lazy swapper?",
    "options": [
      "Vì hệ thống luôn swap toàn bộ tiến trình vào RAM trước khi thực thi.",
      "Vì các trang chỉ được nạp vào bộ nhớ khi thật sự được truy cập.",
      "Vì hệ điều hành trì hoãn việc cập nhật page table đến khi tiến trình kết thúc.",
      "Vì swapper chỉ hoạt động khi RAM hoàn toàn đầy."
    ],
    "answer": "B",
    "en": {
      "question": "In demand paging, why is the page loader often called a lazy swapper?",
      "options": [
        "Because the system always swaps the whole process into RAM before execution.",
        "Because pages are brought into memory only when they are actually accessed.",
        "Because the OS postpones updating the page table until the process ends.",
        "Because the swapper only works when RAM is completely full."
      ]
    }
  },
  {
    "question": "Phát biểu nào sau đây sai về Demand Paging?",
    "options": [
      "Trong pure demand paging, tiến trình có thể bắt đầu thực thi mà chưa có page nào nằm trong RAM.",
      "Một lệnh máy có thể gây ra nhiều page fault nếu truy cập nhiều page khác nhau.",
      "Demand Paging yêu cầu phần cứng hỗ trợ valid-invalid bit trong page table.",
      "Với Demand Paging, toàn bộ các page của tiến trình luôn phải được nạp vào RAM trước khi tiến trình bắt đầu chạy."
    ],
    "answer": "D",
    "en": {
      "question": "Which of the following statements about demand paging is FALSE?",
      "options": [
        "In pure demand paging, a process can start executing with no pages in RAM.",
        "One machine instruction can cause several page faults if it touches several different pages.",
        "Demand paging requires hardware support for the valid-invalid bit in the page table.",
        "With demand paging, all of a process's pages must always be loaded into RAM before it starts running."
      ]
    }
  },
  {
    "question": "Mục đích chính của kỹ thuật zero-fill-on-demand trong quản lý bộ nhớ là gì?",
    "options": [
      "Tăng tốc độ truy xuất TLB bằng cách lưu các frame dưới dạng số 0.",
      "Xóa sạch nội dung cũ của frame trước khi cấp phát cho tiến trình mới nhằm đảm bảo an toàn và tránh rò rỉ dữ liệu.",
      "Nén dữ liệu trong RAM để tiết kiệm bộ nhớ vật lý.",
      "Giảm số lượng page fault bằng cách ánh xạ nhiều page vào cùng một frame."
    ],
    "answer": "B",
    "en": {
      "question": "What is the main purpose of zero-fill-on-demand in memory management?",
      "options": [
        "Speed up TLB access by storing frames as zeros.",
        "Wipe a frame's old contents before giving it to a new process, ensuring safety and preventing data leaks.",
        "Compress data in RAM to save physical memory.",
        "Reduce page faults by mapping many pages onto the same frame."
      ]
    }
  },
  {
    "question": "Một hệ thống sử dụng Demand Paging có thời gian truy cập bộ nhớ 1ms, xác suất page fault p = 0.01, thời gian xử lý page fault (không tính swap) 1ms, thời gian swap page out 4ms, thời gian swap page in 5ms. Bỏ qua các chi phí khác, Effective Access Time (EAT) gần đúng là bao nhiêu?",
    "options": [
      "100ns",
      "1.1ms",
      "1.05ms",
      "1.0ms"
    ],
    "answer": "B",
    "en": {
      "question": "A demand-paging system has a memory access time of 1ms, page-fault probability p = 0.01, page-fault handling time (excluding swap) of 1ms, swap-out time of 4ms and swap-in time of 5ms. Ignoring other costs, the Effective Access Time (EAT) is approximately:",
      "options": [
        "100ns",
        "1.1ms",
        "1.05ms",
        "1.0ms"
      ]
    },
    "context": "EAT = (1 − p) × memory_access + p × (page_fault_overhead + swap_page_out + swap_page_in)\n    = 0.99 × 1 + 0.01 × (1 + 4 + 5) = 1.09 ms ≈ 1.1 ms"
  },
  {
    "question": "Trong cơ chế Copy-on-Write (COW), điều gì xảy ra khi process con (child) cố gắng ghi lên một page đang được chia sẻ với process cha (parent)?",
    "options": [
      "Hệ điều hành cho phép ghi trực tiếp lên page dùng chung để tiết kiệm RAM.",
      "Hệ điều hành tạo một bản sao mới của page đó cho process đang ghi.",
      "Toàn bộ không gian địa chỉ của parent sẽ được copy lại ngay lập tức.",
      "Process bị kết thúc do vi phạm quyền truy cập bộ nhớ."
    ],
    "answer": "B",
    "en": {
      "question": "In Copy-on-Write (COW), what happens when the child process tries to write to a page shared with its parent?",
      "options": [
        "The OS lets it write directly to the shared page to save RAM.",
        "The OS creates a new copy of that page for the writing process.",
        "The parent's entire address space is copied immediately.",
        "The process is terminated for a memory-access violation."
      ]
    }
  },
  {
    "question": "Điểm khác biệt quan trọng nhất giữa fork() và vfork() là gì?",
    "options": [
      "vfork() luôn tạo một bản sao độc lập của toàn bộ address space trước khi child chạy.",
      "Với vfork(), child tạm thời dùng chung address space của parent và parent bị tạm dừng cho đến khi child gọi exec() hoặc exit().",
      "fork() không cho phép child tạo process mới.",
      "vfork() chỉ hoạt động trên hệ điều hành Windows."
    ],
    "answer": "B",
    "en": {
      "question": "What is the most important difference between fork() and vfork()?",
      "options": [
        "vfork() always creates an independent copy of the whole address space before the child runs.",
        "With vfork(), the child temporarily shares the parent's address space and the parent is suspended until the child calls exec() or exit().",
        "fork() does not let the child create new processes.",
        "vfork() only works on Windows."
      ]
    }
  },
  {
    "question": "Hai process P1 và P2 đang sử dụng cơ chế Copy-on-Write (COW) và cùng chia sẻ các page A, B, C. Nếu P1 thực hiện thao tác ghi lên page B, điều gì sẽ xảy ra?",
    "options": [
      "Page B được sửa trực tiếp và cả P1, P2 đều nhìn thấy dữ liệu mới.",
      "Hệ điều hành tạo một bản sao riêng của page B cho P1, còn P2 tiếp tục dùng page cũ.",
      "Toàn bộ các page A, B, C đều bị copy sang vùng nhớ mới.",
      "Cả hai process đều bị page fault và phải nạp lại toàn bộ address space."
    ],
    "answer": "B",
    "en": {
      "question": "Two processes P1 and P2 use Copy-on-Write and share pages A, B, C. If P1 writes to page B, what happens?",
      "options": [
        "Page B is modified in place and both P1 and P2 see the new data.",
        "The OS creates a private copy of page B for P1, while P2 keeps using the old page.",
        "Pages A, B and C are all copied to new memory.",
        "Both processes take a page fault and must reload their entire address space."
      ]
    }
  },
  {
    "question": "Khi hệ thống không còn free frame trong RAM và xảy ra page fault, hệ điều hành thường làm gì?",
    "options": [
      "Tăng kích thước RAM vật lý ngay lập tức.",
      "Chọn một page đang nằm trong bộ nhớ nhưng ít sử dụng để thay thế (page replacement).",
      "Xóa toàn bộ page table của tiến trình hiện tại.",
      "Bắt buộc kết thúc mọi tiến trình đang chạy để giải phóng bộ nhớ."
    ],
    "answer": "B",
    "en": {
      "question": "When RAM has no free frame left and a page fault occurs, what does the OS usually do?",
      "options": [
        "Immediately increase the size of physical RAM.",
        "Pick a page currently in memory that is little used and replace it (page replacement).",
        "Delete the current process's entire page table.",
        "Force-terminate every running process to free memory."
      ]
    }
  },
  {
    "question": "Cho chuỗi tham chiếu trang: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1. Sử dụng giải thuật thay trang FIFO với 3 frame, số lỗi trang (page fault) là:",
    "options": [
      "10",
      "12",
      "15",
      "18"
    ],
    "answer": "C",
    "en": {
      "question": "Given the page reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1. Using the FIFO page-replacement algorithm with 3 frames, the number of page faults is:",
      "options": [
        "10",
        "12",
        "15",
        "18"
      ]
    }
  },
  {
    "question": "Cho chuỗi tham chiếu trang: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1. Sử dụng giải thuật thay trang Optimal (OPT) với 3 frame, số lỗi trang (page fault) là:",
    "options": [
      "7",
      "9",
      "11",
      "15"
    ],
    "answer": "B",
    "en": {
      "question": "Given the page reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1. Using the Optimal (OPT) page-replacement algorithm with 3 frames, the number of page faults is:",
      "options": [
        "7",
        "9",
        "11",
        "15"
      ]
    }
  },
  {
    "question": "Cho chuỗi tham chiếu trang: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1. Sử dụng giải thuật thay trang Least Recently Used (LRU) với 3 frame, số lỗi trang (page fault) là:",
    "options": [
      "9",
      "10",
      "12",
      "15"
    ],
    "answer": "C",
    "en": {
      "question": "Given the page reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1. Using the Least Recently Used (LRU) page-replacement algorithm with 3 frames, the number of page faults is:",
      "options": [
        "9",
        "10",
        "12",
        "15"
      ]
    }
  },
  {
    "question": "Cho chuỗi tham chiếu trang: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1. Sử dụng giải thuật thay trang CLOCK (Second Chance) với 3 frame, số lỗi trang (page fault) là:",
    "options": [
      "11",
      "13",
      "14",
      "15"
    ],
    "answer": "C",
    "en": {
      "question": "Given the page reference string: 7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1. Using the CLOCK (Second Chance) page-replacement algorithm with 3 frames, the number of page faults is:",
      "options": [
        "11",
        "13",
        "14",
        "15"
      ]
    }
  },
  {
    "question": "Trong giải thuật Enhanced Second-Chance (Enhanced CLOCK), nếu một page có cặp bit (0, 1) thì điều đó có ý nghĩa gì?",
    "options": [
      "Page vừa được sử dụng gần đây và chưa bị chỉnh sửa.",
      "Page chưa được sử dụng gần đây nhưng đã bị chỉnh sửa.",
      "Page vừa được sử dụng gần đây và đã bị chỉnh sửa.",
      "Page chưa được sử dụng gần đây và chưa bị chỉnh sửa."
    ],
    "answer": "B",
    "en": {
      "question": "In the Enhanced Second-Chance (Enhanced CLOCK) algorithm, what does a page with the bit pair (0, 1) mean?",
      "options": [
        "The page was recently used and has not been modified.",
        "The page was not recently used but has been modified.",
        "The page was recently used and has been modified.",
        "The page was not recently used and has not been modified."
      ]
    }
  },
  {
    "question": "Hiện tượng Belady's Anomaly thường xảy ra nhiều nhất trong giải thuật thay trang nào sau đây?",
    "options": [
      "LRU",
      "Optimal (OPT)",
      "FIFO",
      "CLOCK"
    ],
    "answer": "C",
    "en": {
      "question": "In which of the following page-replacement algorithms does Belady's Anomaly occur most often?",
      "options": [
        "LRU",
        "Optimal (OPT)",
        "FIFO",
        "CLOCK"
      ]
    }
  },
  {
    "question": "Một hệ thống có tổng cộng 120 frame trong bộ nhớ. Hệ điều hành sử dụng 20 frame cho kernel. Còn lại các frame được phân bổ theo chiến lược Equal Allocation cho 4 tiến trình. Hỏi mỗi tiến trình được cấp bao nhiêu frame?",
    "options": [
      "20",
      "25",
      "30",
      "40"
    ],
    "answer": "B",
    "en": {
      "question": "A system has 120 frames in total. The OS uses 20 frames for the kernel. The remaining frames are distributed to 4 processes using Equal Allocation. How many frames does each process get?",
      "options": [
        "20",
        "25",
        "30",
        "40"
      ]
    }
  },
  {
    "question": "Một hệ thống có tổng cộng 90 frame để phân bổ cho 2 tiến trình theo chiến lược Proportional Allocation. Kích thước hai tiến trình lần lượt là s1 = 20, s2 = 40. Hỏi mỗi tiến trình được cấp bao nhiêu frame (làm tròn gần đúng)?",
    "options": [
      "a1 = 30, a2 = 60",
      "a1 = 20, a2 = 70",
      "a1 = 25, a2 = 65",
      "a1 = 28, a2 = 62"
    ],
    "answer": "A",
    "en": {
      "question": "A system has 90 frames to distribute to 2 processes using Proportional Allocation. The process sizes are s1 = 20 and s2 = 40. How many frames does each process get (rounded approximately)?",
      "options": [
        "a1 = 30, a2 = 60",
        "a1 = 20, a2 = 70",
        "a1 = 25, a2 = 65",
        "a1 = 28, a2 = 62"
      ]
    }
  },
  {
    "question": "So sánh giữa Global Replacement và Local Replacement trong quản lý bộ nhớ, phát biểu nào sau đây là đúng?",
    "options": [
      "Global Replacement cho phép tiến trình chỉ thay trang trong bộ khung của chính nó.",
      "Local Replacement cho phép tiến trình lấy frame từ tiến trình khác khi thiếu bộ nhớ.",
      "Global Replacement có thể làm thay đổi hiệu năng của các tiến trình khác trong hệ thống.",
      "Local Replacement luôn tận dụng bộ nhớ tốt hơn Global Replacement."
    ],
    "answer": "C",
    "en": {
      "question": "Comparing Global Replacement and Local Replacement in memory management, which statement is correct?",
      "options": [
        "Global replacement lets a process replace pages only within its own set of frames.",
        "Local replacement lets a process take frames from other processes when memory is short.",
        "Global replacement can change the performance of other processes in the system.",
        "Local replacement always uses memory better than global replacement."
      ]
    }
  },
  {
    "question": "Một hệ thống có 4 frame đang được quản lý theo FIFO và chứa các trang theo thứ tự 0, 1, 2, 3. Process P1 đang giữ các trang 1, 3; Process P2 đang giữ các trang 0, 2. Nếu P1 cần nạp thêm một trang mới (xảy ra page fault), với cơ chế Global Replacement và Local Replacement, trang nào sẽ bị thay thế đầu tiên?",
    "options": [
      "Global: 0; Local: 1",
      "Global: 0; Local: 3",
      "Global: 0; Local: 2",
      "Global: 2; Local: 3"
    ],
    "answer": "A",
    "en": {
      "question": "A system has 4 frames managed by FIFO holding pages in the order 0, 1, 2, 3. Process P1 holds pages 1 and 3; process P2 holds pages 0 and 2. If P1 needs to load a new page (page fault), which page is replaced first under Global Replacement and Local Replacement?",
      "options": [
        "Global: 0; Local: 1",
        "Global: 0; Local: 3",
        "Global: 0; Local: 2",
        "Global: 2; Local: 3"
      ]
    }
  },
  {
    "question": "Hiện tượng Thrashing trong hệ thống quản lý bộ nhớ xảy ra khi nào?",
    "options": [
      "Hệ thống có quá nhiều tiến trình chạy song song nên CPU bị quá tải.",
      "Hệ thống dành quá ít frame cho mỗi tiến trình, dẫn đến page fault xảy ra liên tục.",
      "Các trang dữ liệu được truy cập theo tính cục bộ (locality) tốt nên giảm page fault.",
      "Bộ nhớ vật lý lớn hơn nhiều so với nhu cầu của các tiến trình."
    ],
    "answer": "B",
    "en": {
      "question": "When does thrashing occur in a memory-management system?",
      "options": [
        "The system has too many processes running in parallel, so the CPU is overloaded.",
        "The system gives each process too few frames, causing page faults to occur continuously.",
        "Data pages are accessed with good locality, which reduces page faults.",
        "Physical memory is far larger than the processes' needs."
      ]
    }
  },
  {
    "question": "Trong quản lý bộ nhớ, việc cấp phát bộ nhớ cho Kernel có đặc điểm nào sau đây?",
    "options": [
      "Kernel memory luôn được cấp phát giống hệt user memory theo paging và không có khác biệt.",
      "Kernel memory thường được cấp phát từ một free-memory pool và có thể yêu cầu vùng nhớ liên tục cho một số tác vụ như I/O.",
      "Kernel memory chỉ sử dụng segmentation và không thể dùng paging.",
      "Kernel memory không bao giờ cần vùng nhớ liên tục vì không liên quan đến phần cứng."
    ],
    "answer": "B",
    "en": {
      "question": "In memory management, which characteristic applies to memory allocation for the kernel?",
      "options": [
        "Kernel memory is always allocated exactly like user memory using paging, with no difference.",
        "Kernel memory is usually allocated from a free-memory pool and may require contiguous memory for some tasks such as I/O.",
        "Kernel memory only uses segmentation and cannot use paging.",
        "Kernel memory never needs contiguous memory because it has nothing to do with hardware."
      ]
    }
  },
  {
    "question": "Hệ thống sử dụng Buddy System với một khối bộ nhớ ban đầu 256KB. Các yêu cầu cấp phát đến theo thứ tự: 20KB, 35KB, 15KB, 80KB. Sử dụng cơ chế Buddy System (làm tròn lên lũy thừa của 2), hỏi tổng dung lượng bộ nhớ KHÔNG được cấp phát (do không còn đủ khối phù hợp hoặc bị phân mảnh) là bao nhiêu?",
    "options": [
      "0KB",
      "16KB",
      "32KB",
      "48KB"
    ],
    "answer": "B",
    "en": {
      "question": "A system uses the Buddy System with an initial 256KB block. Allocation requests arrive in this order: 20KB, 35KB, 15KB, 80KB. Using the Buddy System (rounding up to a power of 2), how much memory in total is NOT allocated (because no suitable block remains or due to fragmentation)?",
      "options": [
        "0KB",
        "16KB",
        "32KB",
        "48KB"
      ]
    },
    "context": "20 → 32KB,  35 → 64KB,  15 → 16KB,  80 → 128KB\n256 − (32 + 64 + 16 + 128) = 256 − 240 = 16KB"
  },
  {
    "question": "Trong cơ chế Slab Allocator, một cache quản lý đối tượng task_struct có kích thước 2KB. Mỗi slab chứa 8 đối tượng. Hiện tại hệ thống có 1 slab full (đã dùng hết 8/8 object), 1 slab partial (đang dùng 5/8 object) và không có slab empty. Khi có yêu cầu tạo thêm 4 tiến trình mới (4 objects), Slab Allocator sẽ xử lý như thế nào và số slab mới cần cấp thêm tối thiểu là bao nhiêu?",
    "options": [
      "Dùng hoàn toàn slab partial, không cần cấp thêm slab mới",
      "Dùng 3 object từ slab partial, cần cấp thêm 1 slab mới cho 1 object còn lại",
      "Không dùng slab partial, cấp mới 1 slab chứa đủ 4 object",
      "Cần cấp thêm 2 slab mới"
    ],
    "answer": "B",
    "en": {
      "question": "In a Slab Allocator, a cache manages task_struct objects of 2KB each, with 8 objects per slab. The system currently has 1 full slab (8/8 objects used), 1 partial slab (5/8 used) and no empty slabs. When 4 new processes (4 objects) are requested, how does the Slab Allocator handle it and what is the minimum number of new slabs needed?",
      "options": [
        "Use only the partial slab; no new slab is needed",
        "Use 3 objects from the partial slab and allocate 1 new slab for the remaining object",
        "Skip the partial slab and allocate 1 new slab holding all 4 objects",
        "Allocate 2 new slabs"
      ]
    }
  },
  {
    "question": "Trong các kỹ thuật cấp phát bộ nhớ sau, kỹ thuật nào yêu cầu vùng bộ nhớ được cấp phát phải là physically contiguous (liên tục trong bộ nhớ vật lý)?",
    "options": [
      "Paging",
      "Segmentation",
      "Buddy System",
      "Demand Paging"
    ],
    "answer": "C",
    "en": {
      "question": "Which of the following memory-allocation techniques requires the allocated region to be physically contiguous?",
      "options": [
        "Paging",
        "Segmentation",
        "Buddy System",
        "Demand Paging"
      ]
    }
  },
  {
    "question": "Mục đích chính của Slab Allocator trong hệ điều hành là gì?",
    "options": [
      "Giảm phân mảnh bộ nhớ và tăng tốc độ cấp phát các đối tượng kernel có kích thước cố định",
      "Tăng số lượng page fault trong hệ thống để tối ưu swapping",
      "Thay thế hoàn toàn cơ chế paging trong quản lý bộ nhớ",
      "Đảm bảo mọi tiến trình đều có bộ nhớ liên tục trong RAM"
    ],
    "answer": "A",
    "en": {
      "question": "What is the main purpose of the Slab Allocator in an operating system?",
      "options": [
        "Reduce memory fragmentation and speed up allocation of fixed-size kernel objects",
        "Increase the number of page faults to optimize swapping",
        "Completely replace paging in memory management",
        "Ensure every process has contiguous memory in RAM"
      ]
    }
  },
  {
    "question": "Trong các thuộc tính sau của file, thuộc tính nào không thuộc metadata của file trong hệ điều hành?",
    "options": [
      "Name (tên file)",
      "Size (kích thước file)",
      "Location (vị trí trên đĩa)",
      "CPU Scheduling Priority (độ ưu tiên CPU)"
    ],
    "answer": "D",
    "en": {
      "question": "Which of the following file attributes is NOT part of a file's metadata in an operating system?",
      "options": [
        "Name (file name)",
        "Size (file size)",
        "Location (position on disk)",
        "CPU Scheduling Priority"
      ]
    }
  },
  {
    "question": "Trong các phương pháp truy cập file sau, phương pháp nào bị mô tả sai?",
    "options": [
      "Sequential Access: truy cập dữ liệu theo thứ tự từ đầu đến cuối",
      "Direct Access: truy cập trực tiếp đến một khối dữ liệu bất kỳ có kích thước cố định",
      "Indexed Access: sử dụng bảng chỉ mục để ánh xạ trực tiếp đến từng byte dữ liệu trong file",
      "Indexed Access: sử dụng bảng chỉ mục để tìm vị trí các khối dữ liệu trong file"
    ],
    "answer": "C",
    "en": {
      "question": "Which of the following file-access methods is described INCORRECTLY?",
      "options": [
        "Sequential Access: data is accessed in order from beginning to end",
        "Direct Access: any fixed-size block of data can be accessed directly",
        "Indexed Access: an index table maps directly to each individual byte of data in the file",
        "Indexed Access: an index table is used to locate the data blocks of the file"
      ]
    }
  },
  {
    "question": "Chọn phát biểu đúng về cấu trúc hệ thống tập tin:",
    "options": [
      "Các thiết bị lưu trữ không cần phải có boot block",
      "Partition control block (PCB) lưu các thông tin về file và thông tin về data block",
      "File control block có thông tin về những partition trên đĩa",
      "Các thông tin về những file trong hệ thống thường bị swap out khi xảy ra page fault"
    ],
    "answer": "A",
    "en": {
      "question": "Choose the correct statement about file-system structure:",
      "options": [
        "Storage devices do not need to have a boot block",
        "The partition control block (PCB) stores information about files and about data blocks",
        "The file control block holds information about the partitions on the disk",
        "Information about files in the system is usually swapped out when a page fault occurs"
      ]
    }
  },
  {
    "question": "Trong hệ thống tập tin UNIX, i-node KHÔNG chứa thông tin nào sau đây?",
    "options": [
      "Kích thước tập tin",
      "Quyền truy cập tập tin",
      "Địa chỉ các block dữ liệu của tập tin",
      "Tên tập tin"
    ],
    "answer": "D",
    "en": {
      "question": "In the UNIX file system, which of the following does an i-node NOT contain?",
      "options": [
        "File size",
        "File access permissions",
        "Addresses of the file's data blocks",
        "File name"
      ]
    }
  },
  {
    "question": "Giả sử file được quản lý bởi i-node có 11 entry con trỏ, mỗi con trỏ 32-bit. Trong đó 10 entry đầu là con trỏ trực tiếp đến data block, entry thứ 11 là con trỏ đến single indirect block, và kích thước mỗi block = 1024 bytes. Hỏi kích thước tối đa của file là:",
    "options": [
      "11 KB",
      "256 KB",
      "266 KB",
      "512 KB"
    ],
    "answer": "C",
    "en": {
      "question": "Suppose a file is managed by an i-node with 11 pointer entries, each 32 bits. The first 10 are direct pointers to data blocks, the 11th points to a single indirect block, and each block is 1024 bytes. The maximum file size is:",
      "options": [
        "11 KB",
        "256 KB",
        "266 KB",
        "512 KB"
      ]
    }
  },
  {
    "question": "Chọn phát biểu SAI về các phương pháp cấp phát trong hệ thống file:",
    "options": [
      "Cấp phát liên tục gây ra phân mảnh ngoại",
      "Khi kích thước file thay đổi động, cấp phát liên tục không hiệu quả bằng cấp phát liên kết",
      "Cấp phát dùng chỉ mục giải quyết được phân mảnh nội",
      "Cấp phát dùng danh sách liên kết không hiệu quả khi truy cập ngẫu nhiên"
    ],
    "answer": "C",
    "en": {
      "question": "Choose the FALSE statement about allocation methods in a file system:",
      "options": [
        "Contiguous allocation causes external fragmentation",
        "When file size changes dynamically, contiguous allocation is less efficient than linked allocation",
        "Indexed allocation solves internal fragmentation",
        "Linked-list allocation is inefficient for random access"
      ]
    }
  },
  {
    "question": "Ưu điểm chính của hệ thống thư mục Hai cấp (Two-Level Directory) so với Một cấp (Single-Level Directory) là gì?",
    "options": [
      "Giảm hoàn toàn nhu cầu lưu trữ tên file",
      "Cho phép nhiều người dùng có thể có file trùng tên mà không xung đột",
      "Loại bỏ hoàn toàn việc tìm kiếm file trong thư mục",
      "Không cần cấu trúc thư mục để quản lý file"
    ],
    "answer": "B",
    "en": {
      "question": "What is the main advantage of a Two-Level Directory over a Single-Level Directory?",
      "options": [
        "Completely eliminates the need to store file names",
        "Lets multiple users have files with the same name without conflict",
        "Completely removes the need to search for files in a directory",
        "No directory structure is needed to manage files"
      ]
    }
  },
  {
    "question": "Một hệ thống sử dụng phân trang hai mức (two-level paging) với địa chỉ ảo dài 16 bit, kích thước trang = 256 bytes, và page number được chia đều cho bảng trang mức 1 và mức 2. Hỏi mỗi bảng trang mức 2 có bao nhiêu entry?",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answer": "C",
    "en": {
      "question": "A system uses two-level paging with 16-bit virtual addresses, a page size of 256 bytes, and the page number split evenly between level-1 and level-2 page tables. How many entries does each level-2 page table have?",
      "options": [
        "4",
        "8",
        "16",
        "32"
      ]
    }
  },
  {
    "question": "Một hệ thống sử dụng phân trang hai mức với địa chỉ ảo dài 16 bit, kích thước trang = 256 bytes, page number gồm p1 = 4 bits, p2 = 4 bits, offset = 8 bits. Địa chỉ ảo cần truy cập là 0x4A3C. Biết entry số 4 của page table mức 1 trỏ đến page table mức 2 tại frame 7, và entry số A (hex) của page table mức 2 chứa frame vật lý 12. Địa chỉ vật lý tương ứng là:",
    "options": [
      "0x0C3C",
      "0x123C",
      "0x073C",
      "0x4A3C"
    ],
    "answer": "A",
    "en": {
      "question": "A system uses two-level paging with 16-bit virtual addresses, a 256-byte page size, page number p1 = 4 bits, p2 = 4 bits, and offset = 8 bits. The virtual address to access is 0x4A3C. Entry 4 of the level-1 page table points to a level-2 page table at frame 7, and entry A (hex) of the level-2 page table holds physical frame 12. The corresponding physical address is:",
      "options": [
        "0x0C3C",
        "0x123C",
        "0x073C",
        "0x4A3C"
      ]
    },
    "context": "PA = (f × Page size) + d = (12 × 256) + 60 = 3132 (decimal) = 0x0C3C"
  },
  {
    "question": "So sánh giữa cấu trúc thư mục dạng Cây (Tree-Structured) và Đồ thị không chu trình (Acyclic-Graph), phát biểu nào sau đây đúng?",
    "options": [
      "Tree-Structured cho phép chia sẻ cùng một file giữa nhiều thư mục thông qua liên kết (link)",
      "Acyclic-Graph cho phép tạo liên kết để nhiều thư mục cùng tham chiếu một file/thư mục",
      "Tree-Structured không có thư mục gốc (root directory)",
      "Acyclic-Graph cho phép chu trình (cycle) trong cấu trúc thư mục"
    ],
    "answer": "B",
    "en": {
      "question": "Comparing tree-structured directories with acyclic-graph directories, which statement is correct?",
      "options": [
        "Tree-structured lets the same file be shared among multiple directories through links",
        "Acyclic-graph lets you create links so that several directories reference the same file/directory",
        "Tree-structured has no root directory",
        "Acyclic-graph allows cycles in the directory structure"
      ]
    }
  },
  {
    "question": "Ưu điểm của cấu trúc thư mục acyclic graph là gì?",
    "options": [
      "Dễ chia sẻ file giữa nhiều người dùng",
      "Giảm hoàn toàn phân mảnh ngoại",
      "Không cần sử dụng FCB (File Control Block)",
      "Luôn đơn giản hơn cấu trúc cây thư mục"
    ],
    "answer": "A",
    "en": {
      "question": "What is the advantage of an acyclic-graph directory structure?",
      "options": [
        "Easy sharing of files among multiple users",
        "Completely eliminates external fragmentation",
        "No need to use an FCB (File Control Block)",
        "Always simpler than a tree-structured directory"
      ]
    }
  },
  {
    "question": "Một hệ thống sử dụng Access Control List (ACL) với các quyền đọc (R), ghi (W), thực thi (X) như sau: User A: R, W; User B: R; User C: không có quyền; Default: R. Các thao tác truy cập file: A:W, B:W, C:R, D:R. Hỏi có bao nhiêu thao tác hợp lệ?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "B",
    "en": {
      "question": "A system uses an Access Control List (ACL) with read (R), write (W) and execute (X) permissions: User A: R, W; User B: R; User C: no permissions; Default: R. The file access operations are A:W, B:W, C:R, D:R. How many operations are valid?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ]
    },
    "context": "A: W ∈ {R,W}      → hợp lệ / valid\nB: W ∉ {R}        → không hợp lệ / invalid\nC: R ∉ ∅          → không hợp lệ / invalid\nD: R ∈ Default {R} → hợp lệ / valid"
  },
  {
    "question": "Trong kiến trúc hệ thống tập tin phân tầng (Layered File System), chức năng nào thuộc tầng \"Logical File System\"?",
    "options": [
      "Điều khiển trực tiếp thiết bị I/O",
      "Ánh xạ block vật lý sang sector trên đĩa",
      "Quản lý metadata, directory và bảo vệ file",
      "Quản lý buffer cache và bộ nhớ tạm"
    ],
    "answer": "C",
    "en": {
      "question": "In a layered file-system architecture, which function belongs to the \"Logical File System\" layer?",
      "options": [
        "Directly controlling I/O devices",
        "Mapping physical blocks to disk sectors",
        "Managing metadata, directories and file protection",
        "Managing the buffer cache and temporary memory"
      ]
    }
  },
  {
    "question": "File Control Block (FCB) là gì?",
    "options": [
      "Một cấu trúc lưu nội dung dữ liệu của file trên đĩa",
      "Một cấu trúc lưu thông tin về file như kích thước, quyền truy cập, vị trí dữ liệu",
      "Một bảng ánh xạ giữa địa chỉ logic và địa chỉ vật lý của bộ nhớ",
      "Một cơ chế quản lý tiến trình truy cập file đồng thời"
    ],
    "answer": "B",
    "en": {
      "question": "What is a File Control Block (FCB)?",
      "options": [
        "A structure that stores the file's data content on disk",
        "A structure that stores information about a file such as size, access permissions and data location",
        "A table mapping logical addresses to physical memory addresses",
        "A mechanism for managing processes that access a file concurrently"
      ]
    }
  },
  {
    "question": "Đặc điểm nào sau đây đúng với phương pháp cấp phát liên tục (Contiguous Allocation)?",
    "options": [
      "File được chia thành các khối rời rạc nằm bất kỳ trên đĩa",
      "Mỗi file được lưu như một danh sách liên kết các block",
      "File được lưu trong các block liên tiếp nhau trên đĩa",
      "Mỗi file có một bảng chỉ mục chứa con trỏ đến các block dữ liệu"
    ],
    "answer": "C",
    "en": {
      "question": "Which characteristic is correct for Contiguous Allocation?",
      "options": [
        "The file is split into scattered blocks located anywhere on disk",
        "Each file is stored as a linked list of blocks",
        "The file is stored in consecutive blocks on disk",
        "Each file has an index table holding pointers to its data blocks"
      ]
    }
  },
  {
    "question": "Ưu điểm chính của Extent-Based Allocation so với Contiguous Allocation truyền thống là gì?",
    "options": [
      "Loại bỏ hoàn toàn phân mảnh ngoại",
      "Cho phép file được tạo bởi nhiều vùng liên tục (extent), giúp mở rộng file linh hoạt hơn",
      "Mỗi block dữ liệu đều chứa con trỏ đến block tiếp theo",
      "Không cần quản lý metadata cho file"
    ],
    "answer": "B",
    "en": {
      "question": "What is the main advantage of Extent-Based Allocation over traditional Contiguous Allocation?",
      "options": [
        "Completely eliminates external fragmentation",
        "Lets a file be made of several contiguous areas (extents), allowing more flexible file growth",
        "Every data block holds a pointer to the next block",
        "No metadata management is needed for files"
      ]
    }
  },
  {
    "question": "Ưu điểm của cấp phát liên kết (Linked Allocation) so với cấp phát liên tục (Contiguous Allocation) là gì?",
    "options": [
      "Truy cập ngẫu nhiên nhanh hơn",
      "Không bị phân mảnh ngoại (external fragmentation)",
      "Không cần con trỏ liên kết giữa các block",
      "Luôn cho hiệu năng truy xuất cao hơn"
    ],
    "answer": "B",
    "en": {
      "question": "What is the advantage of Linked Allocation over Contiguous Allocation?",
      "options": [
        "Faster random access",
        "No external fragmentation",
        "No link pointers needed between blocks",
        "Always gives higher access performance"
      ]
    }
  },
  {
    "question": "Trong hệ thống file sử dụng Indexed Allocation, mỗi con trỏ 4 bytes. Kích thước block dữ liệu là 4KB. Hỏi kích thước tối đa của file (chỉ xét 1 mức chỉ mục)?",
    "options": [
      "512KB",
      "1MB",
      "2MB",
      "4MB"
    ],
    "answer": "D",
    "en": {
      "question": "A file system uses Indexed Allocation with 4-byte pointers and a 4KB data block. What is the maximum file size (considering only 1 index level)?",
      "options": [
        "512KB",
        "1MB",
        "2MB",
        "4MB"
      ]
    }
  },
  {
    "question": "Trong hệ thống File Allocation Table (FAT), đặc điểm nào sau đây đúng nhất?",
    "options": [
      "Mỗi file được lưu trong các block liên tiếp nhau trên đĩa",
      "Mỗi block chứa con trỏ trỏ đến block tiếp theo của file",
      "Mỗi file có một bảng chỉ mục riêng chứa danh sách block dữ liệu",
      "File được ánh xạ trực tiếp bằng địa chỉ logic sang địa chỉ vật lý cố định"
    ],
    "answer": "B",
    "en": {
      "question": "In the File Allocation Table (FAT) system, which characteristic is the most accurate?",
      "options": [
        "Each file is stored in consecutive blocks on disk",
        "Each block holds a pointer to the file's next block",
        "Each file has its own index table listing its data blocks",
        "Files are mapped directly from logical addresses to fixed physical addresses"
      ]
    }
  },
  {
    "question": "Một hệ thống quản lý không gian trống bằng Bit Vector (Bit Map). Giả sử kích thước block = 4KB, dung lượng đĩa = 1TB = 2^40 bytes, mỗi block tương ứng 1 bit trong bit vector. Hỏi kích thước bộ nhớ cần để lưu bit vector là bao nhiêu?",
    "options": [
      "8MB",
      "16MB",
      "32MB",
      "64MB"
    ],
    "answer": "C",
    "en": {
      "question": "A system manages free space with a Bit Vector (Bit Map). Assume block size = 4KB, disk capacity = 1TB = 2^40 bytes, and each block corresponds to 1 bit in the vector. How much memory is needed to store the bit vector?",
      "options": [
        "8MB",
        "16MB",
        "32MB",
        "64MB"
      ]
    }
  },
  {
    "question": "Ưu điểm của phương pháp danh sách liên kết (Linked List) so với phương pháp nhóm (Grouping) trong quản lý không gian trống là gì?",
    "options": [
      "Truy xuất danh sách khối trống nhanh hơn",
      "Có thể cấp phát khối liên tục dễ dàng hơn",
      "Không cần thêm cấu trúc phụ để chứa nhóm block",
      "Luôn đảm bảo giảm phân mảnh ngoại"
    ],
    "answer": "C",
    "en": {
      "question": "What is the advantage of the Linked List method over the Grouping method in free-space management?",
      "options": [
        "Faster access to the list of free blocks",
        "Easier to allocate contiguous blocks",
        "No extra structure is needed to hold groups of blocks",
        "Always guarantees reduced external fragmentation"
      ]
    }
  },
  {
    "question": "So sánh giữa phương pháp Counting và Grouping trong quản lý không gian trống, phát biểu nào đúng?",
    "options": [
      "Counting lưu danh sách từng block trống, Grouping lưu số lượng block liên tiếp",
      "Counting lưu (địa chỉ bắt đầu, số lượng block liên tiếp), Grouping lưu các block chứa danh sách block trống",
      "Counting và Grouping đều yêu cầu duyệt toàn bộ danh sách khi cấp phát",
      "Grouping chỉ áp dụng cho cấp phát liên tục, còn Counting dùng cho linked allocation"
    ],
    "answer": "B",
    "en": {
      "question": "Comparing Counting and Grouping in free-space management, which statement is correct?",
      "options": [
        "Counting stores a list of each free block, Grouping stores the number of consecutive blocks",
        "Counting stores (start address, number of consecutive blocks), Grouping stores blocks that hold lists of free blocks",
        "Counting and Grouping both require scanning the entire list on allocation",
        "Grouping only applies to contiguous allocation, while Counting is for linked allocation"
      ]
    }
  },
  {
    "question": "Trong Log-Structured File System (LFS), mục tiêu chính của việc ghi dữ liệu theo dạng log là gì?",
    "options": [
      "Giảm dung lượng file trên đĩa bằng cách nén dữ liệu",
      "Tăng tốc độ đọc dữ liệu bằng cách giảm số lần truy cập RAM",
      "Cải thiện hiệu năng ghi và hỗ trợ phục hồi hệ thống sau sự cố",
      "Loại bỏ hoàn toàn nhu cầu quản lý metadata"
    ],
    "answer": "C",
    "en": {
      "question": "In a Log-Structured File System (LFS), what is the main goal of writing data in log form?",
      "options": [
        "Reduce file size on disk by compressing data",
        "Speed up reads by reducing RAM accesses",
        "Improve write performance and support system recovery after failures",
        "Completely remove the need to manage metadata"
      ]
    }
  },
  {
    "question": "Điểm khác biệt quan trọng nhất giúp NVM/SSD có tốc độ truy cập nhanh hơn HDD là gì?",
    "options": [
      "SSD có tốc độ quay đĩa cao hơn HDD",
      "SSD loại bỏ seek time và rotational latency do không có bộ phận cơ khí",
      "HDD sử dụng bộ nhớ flash nên chậm hơn SSD",
      "HDD không hỗ trợ truy cập ngẫu nhiên"
    ],
    "answer": "B",
    "en": {
      "question": "What is the key difference that makes NVM/SSD faster to access than an HDD?",
      "options": [
        "SSDs spin their platters faster than HDDs",
        "SSDs eliminate seek time and rotational latency because they have no mechanical parts",
        "HDDs use flash memory, so they are slower than SSDs",
        "HDDs do not support random access"
      ]
    }
  },
  {
    "question": "Chọn phát biểu đúng:",
    "options": [
      "Để phân biệt kiểu file, dùng extension chính xác hơn dùng magic number",
      "Đối với mọi hệ điều hành, trước khi đọc ghi trên file, người dùng phải thực hiện tác vụ mở file",
      "Hệ điều hành có thể không hỗ trợ bất kỳ loại file nào, kể cả file thực thi, để giảm kích thước hệ điều hành",
      "Hai phương pháp truy cập file cơ bản là truy cập tuần tự và truy cập ngẫu nhiên"
    ],
    "answer": "D",
    "en": {
      "question": "Choose the correct statement:",
      "options": [
        "To tell file types apart, an extension is more accurate than a magic number",
        "On every operating system, the user must open a file before reading or writing it",
        "An operating system may support no file types at all, not even executables, to reduce OS size",
        "The two basic file-access methods are sequential access and random access"
      ]
    }
  },
  {
    "question": "Một ổ đĩa có các yêu cầu truy xuất cylinder theo thứ tự: 98, 183, 37, 122, 14, 124, 65, 67. Đầu đọc hiện tại đang ở cylinder 53. Sử dụng giải thuật lập lịch đĩa FCFS (First Come First Served), tổng số cylinder mà đầu đọc phải di chuyển là bao nhiêu?",
    "options": [
      "640",
      "236",
      "183",
      "122"
    ],
    "answer": "A",
    "en": {
      "question": "A disk has cylinder requests in this order: 98, 183, 37, 122, 14, 124, 65, 67. The head is currently at cylinder 53. Using FCFS (First Come First Served) disk scheduling, how many cylinders must the head move in total?",
      "options": [
        "640",
        "236",
        "183",
        "122"
      ]
    },
    "context": "|98−53| + |183−98| + |37−183| + |122−37| + |14−122| + |124−14| + |65−124| + |67−65|\n= 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640"
  },
  {
    "question": "Một ổ đĩa có các yêu cầu truy xuất cylinder theo thứ tự: 98, 183, 37, 122, 14, 124, 65, 67. Đầu đọc hiện tại ở cylinder 53 và đang di chuyển theo chiều tăng cylinder. Biết đĩa có các cylinder từ 0 đến 199. Sử dụng giải thuật SCAN, tổng số cylinder mà đầu đọc phải di chuyển là bao nhiêu?",
    "options": [
      "331",
      "236",
      "640",
      "183"
    ],
    "answer": "A",
    "en": {
      "question": "A disk has cylinder requests in this order: 98, 183, 37, 122, 14, 124, 65, 67. The head is at cylinder 53 and moving toward increasing cylinders. The disk has cylinders 0 to 199. Using SCAN, how many cylinders must the head move in total?",
      "options": [
        "331",
        "236",
        "640",
        "183"
      ]
    },
    "context": "53 → 199: 146\n199 → 14: 185\nTổng / Total = 146 + 185 = 331"
  },
  {
    "question": "Một ổ đĩa có các yêu cầu truy xuất cylinder: 98, 183, 37, 122, 14, 124, 65, 67. Đầu đọc hiện tại ở cylinder 53 và đang di chuyển theo chiều tăng cylinder. Biết đĩa có các cylinder từ 0 đến 199. Sử dụng giải thuật C-SCAN, tổng số cylinder mà đầu đọc phải di chuyển gần đúng là:",
    "options": [
      "183",
      "322",
      "382",
      "640"
    ],
    "answer": "C",
    "en": {
      "question": "A disk has cylinder requests: 98, 183, 37, 122, 14, 124, 65, 67. The head is at cylinder 53 moving toward increasing cylinders. The disk has cylinders 0 to 199. Using C-SCAN, the approximate total head movement is:",
      "options": [
        "183",
        "322",
        "382",
        "640"
      ]
    },
    "context": "53 → 199: 146\n199 → 0 (quay về / wrap-around): 199\n0 → 37: 37\nTổng / Total = 146 + 199 + 37 = 382"
  },
  {
    "question": "Phát biểu nào sau đây đúng về lập lịch I/O cho thiết bị NVM/SSD?",
    "options": [
      "SSD cần các giải thuật SCAN/C-SCAN để giảm seek time giống HDD",
      "NVM không có seek time và rotational latency nên thường dùng NOOP scheduler",
      "HDD có số IOPS cao hơn SSD do truy cập tuần tự hiệu quả hơn",
      "Write amplification giúp SSD ghi dữ liệu nhanh hơn đáng kể"
    ],
    "answer": "B",
    "en": {
      "question": "Which statement about I/O scheduling for NVM/SSD devices is correct?",
      "options": [
        "SSDs need SCAN/C-SCAN algorithms to reduce seek time like HDDs",
        "NVM has no seek time or rotational latency, so it commonly uses the NOOP scheduler",
        "HDDs have higher IOPS than SSDs because sequential access is more efficient",
        "Write amplification makes SSDs write data significantly faster"
      ]
    }
  },
  {
    "question": "Mục đích chính của kỹ thuật Cyclic Redundancy Check (CRC) là gì?",
    "options": [
      "Nén dữ liệu để giảm dung lượng lưu trữ",
      "Phát hiện lỗi trong quá trình truyền hoặc lưu trữ dữ liệu",
      "Mã hóa dữ liệu để tăng tính bảo mật",
      "Tăng tốc độ truy xuất dữ liệu trên đĩa"
    ],
    "answer": "B",
    "en": {
      "question": "What is the main purpose of the Cyclic Redundancy Check (CRC)?",
      "options": [
        "Compress data to reduce storage size",
        "Detect errors during data transmission or storage",
        "Encrypt data to increase security",
        "Speed up data access on disk"
      ]
    }
  },
  {
    "question": "Phát biểu nào sau đây đúng khi so sánh NFS và CIFS?",
    "options": [
      "NFS chủ yếu được dùng trong hệ UNIX/Linux, còn CIFS phổ biến trên Windows",
      "CIFS không hỗ trợ chia sẻ tập tin qua mạng",
      "NFS yêu cầu hệ thống tập tin FAT để hoạt động",
      "CIFS nhanh hơn NFS vì không dùng giao thức mạng"
    ],
    "answer": "A",
    "en": {
      "question": "Which statement is correct when comparing NFS and CIFS?",
      "options": [
        "NFS is mainly used in UNIX/Linux systems, while CIFS is common on Windows",
        "CIFS does not support sharing files over a network",
        "NFS requires the FAT file system to work",
        "CIFS is faster than NFS because it does not use a network protocol"
      ]
    }
  },
  {
    "question": "Điểm khác biệt quan trọng nhất giữa RAID 0 và RAID 1 là gì?",
    "options": [
      "RAID 0 cung cấp khả năng chịu lỗi tốt hơn RAID 1",
      "RAID 1 sử dụng striping để tăng tốc độ truy xuất",
      "RAID 0 tăng hiệu năng nhưng không có khả năng dự phòng dữ liệu",
      "RAID 1 yêu cầu ít số lượng đĩa hơn RAID 0"
    ],
    "answer": "C",
    "en": {
      "question": "What is the most important difference between RAID 0 and RAID 1?",
      "options": [
        "RAID 0 provides better fault tolerance than RAID 1",
        "RAID 1 uses striping to increase access speed",
        "RAID 0 improves performance but provides no data redundancy",
        "RAID 1 requires fewer disks than RAID 0"
      ]
    }
  },
  {
    "question": "Chọn phát biểu đúng:",
    "options": [
      "Để phân biệt kiểu file, dùng extension chính xác hơn dùng magic number",
      "Đối với mọi hệ điều hành, trước khi đọc ghi trên file, người dùng phải thực hiện tác vụ mở file",
      "Hệ điều hành có thể không hỗ trợ bất kỳ loại file nào, kể cả file thực thi, để giảm kích thước hệ điều hành",
      "Hai phương pháp truy cập file cơ bản là truy cập tuần tự và truy cập ngẫu nhiên"
    ],
    "answer": "D",
    "en": {
      "question": "Choose the correct statement:",
      "options": [
        "To tell file types apart, an extension is more accurate than a magic number",
        "On every operating system, the user must open a file before reading or writing it",
        "An operating system may support no file types at all, not even executables, to reduce OS size",
        "The two basic file-access methods are sequential access and random access"
      ]
    }
  },
  {
    "question": "[HK242] Cho bộ nhớ có các ô nhớ có kích thước lần lượt là 100KB, 200KB và 400KB. Có một quá trình thực thi đến hệ thống cần được cấp bộ nhớ 250KB. Giải pháp First Fit được áp dụng, vùng nhớ nào được cấp phát và kích thước vùng nhớ bị phân mảnh ngoại và phân mảnh nội?",
    "options": [
      "Cấp vùng 200KB, bị phân mảnh nội 50KB, phân mảnh ngoại 500KB.",
      "Cấp vùng 200KB, bị phân mảnh nội 500KB, phân mảnh ngoại 50KB.",
      "Cấp vùng 400KB, bị phân mảnh nội 150KB, phân mảnh ngoại 300KB.",
      "Cấp vùng 400KB, bị phân mảnh nội 300KB, phân mảnh ngoại 150KB."
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] Memory has blocks of 100KB, 200KB and 400KB. A process arrives needing 250KB. With First Fit, which block is allocated, and what are the internal and external fragmentation?",
      "options": [
        "Allocate the 200KB block; internal fragmentation 50KB, external fragmentation 500KB.",
        "Allocate the 200KB block; internal fragmentation 500KB, external fragmentation 50KB.",
        "Allocate the 400KB block; internal fragmentation 150KB, external fragmentation 300KB.",
        "Allocate the 400KB block; internal fragmentation 300KB, external fragmentation 150KB."
      ]
    }
  },
  {
    "question": "[HK242] Ưu điểm nào sau đây của phương pháp cấp phát theo vùng (Extent-based allocation) so với cấp phát theo chỉ mục (Indexed allocation)?",
    "options": [
      "Giảm phân mảnh.",
      "Loại bỏ nhu cầu lưu trữ siêu dữ liệu.",
      "Cải thiện hiệu suất truy cập tuần tự.",
      "Sử dụng số lượng khối đĩa cố định cho mỗi tập tin."
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] Which of the following is an advantage of extent-based allocation over indexed allocation?",
      "options": [
        "Reduces fragmentation.",
        "Removes the need to store metadata.",
        "Improves sequential-access performance.",
        "Uses a fixed number of disk blocks per file."
      ]
    }
  },
  {
    "question": "[HK242] Cơ chế quản lý bộ nhớ segmentation có ưu điểm gì?",
    "options": [
      "Hiện thực bộ nhớ không liên tục.",
      "Tìm nhanh ô nhớ trống phù hợp với kích thước segment.",
      "Tối ưu khung bộ nhớ tiến trình thực thi (process memory layout).",
      "Cấp phát các vùng nhớ to nhỏ tùy ý."
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] What is an advantage of the segmentation memory-management mechanism?",
      "options": [
        "Implements non-contiguous memory.",
        "Quickly finds a free slot matching the segment size.",
        "Optimizes the process memory layout.",
        "Allocates memory regions of arbitrary size."
      ]
    }
  },
  {
    "question": "[HK242] Loại hoạt động nào sau đây yêu cầu phải được thực hiện ở chế độ kernel?",
    "options": [
      "Thực hiện các phép tính số học.",
      "Chạy các ứng dụng của người dùng.",
      "Xem và chỉnh sửa nội dung tập tin.",
      "Truy cập trực tiếp vào các thiết bị phần cứng."
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] Which of the following kinds of operations must be performed in kernel mode?",
      "options": [
        "Performing arithmetic operations.",
        "Running user applications.",
        "Viewing and editing file contents.",
        "Directly accessing hardware devices."
      ]
    }
  },
  {
    "question": "[HK242] Tại sao FAT vẫn được sử dụng trên USB và thẻ nhớ thay vì NTFS?",
    "options": [
      "Vì FAT có tính tương thích cao với nhiều hệ điều hành và thiết bị.",
      "Vì FAT nhanh hơn NTFS trên tất cả các thiết bị.",
      "Vì NTFS không hỗ trợ trên Windows.",
      "Vì FAT có bảo mật tốt hơn NTFS."
    ],
    "answer": "A",
    "en": {
      "question": "[HK242] Why is FAT still used on USB drives and memory cards instead of NTFS?",
      "options": [
        "Because FAT is highly compatible with many operating systems and devices.",
        "Because FAT is faster than NTFS on all devices.",
        "Because NTFS is not supported on Windows.",
        "Because FAT has better security than NTFS."
      ]
    }
  },
  {
    "question": "[HK242] Trong một hệ thống cần thực hiện swap vùng bộ nhớ 2GB đang được sử dụng bởi một quá trình thực thi để swap in một quá trình thực thi khác vào vùng bộ nhớ này. Giả sử tốc độ truy xuất đĩa là 50MB/s. Thời gian cần thiết để hoàn tất bước swap là bao nhiêu?",
    "options": [
      "10 giây.",
      "40 giây.",
      "60 giây.",
      "80 giây."
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] A system must swap a 2GB memory region used by one running process in order to swap another process into this region. Assume the disk transfer rate is 50MB/s. How long does the swap take to complete?",
      "options": [
        "10 seconds.",
        "40 seconds.",
        "60 seconds.",
        "80 seconds."
      ]
    },
    "context": "Swap-out: 2048 / 50 ≈ 40 s\nSwap-in : 2048 / 50 ≈ 40 s\nTổng / Total ≈ 80 s"
  },
  {
    "question": "[HK242] Cho dữ liệu sau của bộ nhớ phân đoạn (segmentation). Địa chỉ luận lý (4, 200) có địa chỉ vật lý tương ứng là:",
    "options": [
      "600.",
      "1400.",
      "1800.",
      "Không hợp lệ."
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] Given the following segmentation data, the logical address (4, 200) corresponds to which physical address?",
      "options": [
        "600.",
        "1400.",
        "1800.",
        "Invalid."
      ]
    },
    "context": "Segment | Base | Length\n   0    | 100  |  100\n   1    | 200  |  200\n   2    | 500  |  100\n   3    | 1400 |  500\n   4    | 1950 |  100"
  },
  {
    "question": "[HK242] Cho chuỗi tham chiếu trang \"0, 2, 1, 6, 4, 0, 1, 0, 3, 1, 2, 1\" và sử dụng FIFO để thay trang, khi tăng từ 3 khung frame lên 4 khung frame, điều gì đã xảy ra:",
    "options": [
      "Số lỗi trang giảm đi.",
      "Số lỗi trang không thay đổi.",
      "Xảy ra hiện tượng bất thường Belady.",
      "Không thể so sánh."
    ],
    "answer": "B",
    "en": {
      "question": "[HK242] Given the page reference string \"0, 2, 1, 6, 4, 0, 1, 0, 3, 1, 2, 1\" and FIFO replacement, what happens when going from 3 frames to 4 frames?",
      "options": [
        "The number of page faults decreases.",
        "The number of page faults does not change.",
        "Belady's anomaly occurs.",
        "They cannot be compared."
      ]
    },
    "context": "3 frames: 9 page faults\n4 frames: 9 page faults"
  },
  {
    "question": "[HK242] Cho chuỗi tham chiếu trang 0, 2, 1, 6, 4, 0, 1, 0, 3, 1, 2, 1 với 3 frame trống ban đầu. So sánh số lỗi trang (page fault) của giải thuật FIFO với LRU.",
    "options": [
      "Ít hơn LRU",
      "Bằng với LRU",
      "Không thể so sánh",
      "Nhiều hơn LRU"
    ],
    "answer": "B",
    "en": {
      "question": "[HK242] Given the page reference string 0, 2, 1, 6, 4, 0, 1, 0, 3, 1, 2, 1 with 3 initially empty frames, compare the page faults of FIFO with LRU.",
      "options": [
        "Fewer than LRU",
        "Equal to LRU",
        "Cannot be compared",
        "More than LRU"
      ]
    },
    "context": "FIFO = 9 page faults,  LRU = 9 page faults"
  },
  {
    "question": "[HK242] Chọn phương án đúng về lợi ích khi sử dụng thư viện liên kết động (dynamic linking):",
    "options": [
      "Tăng tốc độ xử lý của ứng dụng khi có yêu cầu gọi hàm thư viện",
      "Tích hợp mã nguồn thư viện vào bản phân phối chương trình",
      "Tiết kiệm bộ nhớ",
      "Dễ hiện thực"
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] Choose the correct benefit of using dynamically linked libraries (dynamic linking):",
      "options": [
        "Speeds up the application when library functions are called",
        "Integrates the library source code into the program distribution",
        "Saves memory",
        "Easy to implement"
      ]
    }
  },
  {
    "question": "[HK242] Trong các giải thuật FIFO, LRU, Clock và Optimal, thuật toán nào tạo ra ít lỗi trang nhất với 3 frame và chuỗi tham chiếu: 0, 2, 1, 6, 4, 0, 1, 0, 3, 1, 2, 1",
    "options": [
      "FIFO",
      "LRU",
      "Clock",
      "Optimal"
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] Among FIFO, LRU, Clock and Optimal, which algorithm produces the fewest page faults with 3 frames and the reference string: 0, 2, 1, 6, 4, 0, 1, 0, 3, 1, 2, 1",
      "options": [
        "FIFO",
        "LRU",
        "Clock",
        "Optimal"
      ]
    },
    "context": "FIFO = 9,  LRU = 9,  Clock = 9,  Optimal = 7"
  },
  {
    "question": "[HK242] Sử dụng bảng phân trang đảo ngược (Inverted Page Table), mỗi entry có kích thước 8 bytes (64-bit), và hệ thống có 2^21 frame vật lý. Hỏi kích thước bộ nhớ cần cấp cho bảng phân trang là bao nhiêu?",
    "options": [
      "8MB",
      "64MB",
      "128MB",
      "16MB"
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] Using an Inverted Page Table where each entry is 8 bytes (64-bit) and the system has 2^21 physical frames, how much memory must be allocated for the page table?",
      "options": [
        "8MB",
        "64MB",
        "128MB",
        "16MB"
      ]
    },
    "context": "2^21 × 8 bytes = 2^24 bytes = 16MB"
  },
  {
    "question": "[HK242] Trong hệ thống hỗ trợ MMU với kích thước trang nhớ 2KB, địa chỉ luận lý cần truy xuất là 0x10000034, giá trị entry trong page table của trang tương ứng là 0x000010. Địa chỉ vật lý tương ứng là:",
    "options": [
      "0x00004034",
      "0x10001034",
      "0x00008034",
      "0x10000434"
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] In a system with an MMU and a 2KB page size, the logical address to access is 0x10000034 and the page-table entry of the corresponding page is 0x000010. The corresponding physical address is:",
      "options": [
        "0x00004034",
        "0x10001034",
        "0x00008034",
        "0x10000434"
      ]
    },
    "context": "2KB = 2^11 = 0x800  →  offset = 0x034, frame = 0x10\n0x10 × 0x800 + 0x34 = 0x8000 + 0x34 = 0x00008034"
  },
  {
    "question": "[HK242] Trong quá trình thực thi của process, MMU có vai trò:",
    "options": [
      "Tạo ra địa chỉ tuyệt đối của chương trình",
      "Gán địa chỉ vật lý cho chương trình trong quá trình biên dịch",
      "Dịch địa chỉ luận lý thành địa chỉ vật lý",
      "Lưu trữ giá trị ô nhớ của chương trình vào bộ nhớ vật lý"
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] During process execution, the role of the MMU is to:",
      "options": [
        "Generate the program's absolute addresses",
        "Assign physical addresses to the program at compile time",
        "Translate logical addresses into physical addresses",
        "Store the program's memory-cell values in physical memory"
      ]
    }
  },
  {
    "question": "[HK242] Trong hệ thống tập tin sử dụng i-node, yếu tố nào sau đây không ảnh hưởng đến kích thước tập tin tối đa?",
    "options": [
      "Số lượng con trỏ trực tiếp, gián tiếp và gián tiếp gấp đôi",
      "Kích thước khối của hệ thống tập tin",
      "Số lượng tập tin trong thư mục",
      "Độ rộng địa chỉ con trỏ"
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] In a file system that uses i-nodes, which of the following does NOT affect the maximum file size?",
      "options": [
        "The number of direct, indirect and double-indirect pointers",
        "The file system's block size",
        "The number of files in a directory",
        "The width of the pointer addresses"
      ]
    }
  },
  {
    "question": "[HK242] Trong một hệ thống tập tin, inode chứa thông tin gì về tập tin?",
    "options": [
      "Nội dung dữ liệu của tập tin",
      "Đường dẫn đầy đủ tới tập tin trong hệ thống tập tin",
      "Metadata như kích thước, quyền truy cập, và vị trí khối dữ liệu của tập tin",
      "Danh sách các quá trình đang sử dụng tập tin đó"
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] In a file system, what information about a file does the inode contain?",
      "options": [
        "The file's data content",
        "The file's full path in the file system",
        "Metadata such as size, access permissions and the location of the file's data blocks",
        "A list of the processes currently using that file"
      ]
    }
  },
  {
    "question": "[HK242] Phương pháp cấp phát tập tin nào bị ảnh hưởng nhiều nhất bởi phân mảnh ngoại (external fragmentation)?",
    "options": [
      "Cấp phát liên kết (Linked allocation)",
      "Cấp phát theo chỉ mục (Indexed allocation)",
      "Cấp phát theo băm (Hashed allocation)",
      "Cấp phát liên tục (Contiguous allocation)"
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] Which file-allocation method is most affected by external fragmentation?",
      "options": [
        "Linked allocation",
        "Indexed allocation",
        "Hashed allocation",
        "Contiguous allocation"
      ]
    }
  },
  {
    "question": "[HK242] Cho hệ thống phân trang hai mức với không gian địa chỉ luận lý 256 bytes, kích thước trang 16 bytes, và số bit page number được chia đều cho 2 mức bảng trang. Hỏi mỗi bảng phân trang mức 1 và mức 2 có bao nhiêu entry?",
    "options": [
      "8",
      "16",
      "2",
      "4"
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] A two-level paging system has a 256-byte logical address space, a 16-byte page size, and the page-number bits are split evenly between the 2 page-table levels. How many entries does each level-1 and level-2 page table have?",
      "options": [
        "8",
        "16",
        "2",
        "4"
      ]
    },
    "context": "256 = 2^8,  page = 16 = 2^4 → offset 4 bit\nPage number = 8 − 4 = 4 bit → 2 bit mỗi mức / 2 bits per level → 2^2 = 4 entry"
  },
  {
    "question": "[HK242] Trong hệ thống tập tin trên UNIX, cấu trúc dữ liệu nào chịu trách nhiệm theo dõi thuộc tính tập tin, quyền truy cập và con trỏ đến các khối đĩa?",
    "options": [
      "Superblock",
      "File Allocation Table (FAT)",
      "Mục thư mục (Directory entry)",
      "i-node"
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] In a UNIX file system, which data structure is responsible for tracking file attributes, access permissions and pointers to disk blocks?",
      "options": [
        "Superblock",
        "File Allocation Table (FAT)",
        "Directory entry",
        "i-node"
      ]
    }
  },
  {
    "question": "[HK242] Cho chuỗi tham chiếu trang 0, 2, 1, 6, 4, 0, 1, 0, 3, 1, 2, 1 với 3 frame trống ban đầu. So sánh số lỗi trang của giải thuật LRU và Clock.",
    "options": [
      "LRU ít hơn Clock",
      "Clock ít hơn LRU",
      "Không thể so sánh",
      "LRU và Clock tạo ra cùng số lỗi trang"
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] Given the page reference string 0, 2, 1, 6, 4, 0, 1, 0, 3, 1, 2, 1 with 3 initially empty frames, compare the page faults of LRU and Clock.",
      "options": [
        "LRU has fewer than Clock",
        "Clock has fewer than LRU",
        "Cannot be compared",
        "LRU and Clock produce the same number of page faults"
      ]
    }
  },
  {
    "question": "[HK242] Nhược điểm lớn nhất của hệ thống tập tin FAT so với NTFS là gì?",
    "options": [
      "Không thể sử dụng trên hệ điều hành Windows",
      "Không hỗ trợ ổ cứng ngoài",
      "Khả năng phục hồi lỗi tốt hơn",
      "Hạn chế về dung lượng file và phân vùng"
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] What is the biggest drawback of the FAT file system compared with NTFS?",
      "options": [
        "It cannot be used on Windows",
        "It does not support external hard drives",
        "Better error-recovery ability",
        "Limits on file size and partition size"
      ]
    }
  },
  {
    "question": "[HK242] Trong hệ thống tập tin ghi nhật ký (journaling file system), mục đích chính của kỹ thuật \"ghi nhật ký trước khi ghi dữ liệu\" (write-ahead logging) là gì?",
    "options": [
      "Đảm bảo cập nhật metadata trước khi ghi dữ liệu",
      "Tăng tốc độ đọc dữ liệu",
      "Ngăn chặn tắc nghẽn trong truy cập tập tin đa luồng",
      "Nén các mục nhật ký để lưu trữ hiệu quả hơn"
    ],
    "answer": "A",
    "en": {
      "question": "[HK242] In a journaling file system, what is the main purpose of write-ahead logging?",
      "options": [
        "Ensure metadata is updated before data is written",
        "Speed up data reads",
        "Prevent congestion in multi-threaded file access",
        "Compress log entries for more efficient storage"
      ]
    }
  },
  {
    "question": "[HK242] Nhược điểm lớn nhất của việc sử dụng con trỏ gián tiếp nhiều cấp trong hệ thống i-node là gì?",
    "options": [
      "Giảm số lượng tập tin có thể lưu trữ",
      "Giảm dung lượng lưu trữ có sẵn",
      "Tăng thời gian truy cập tập tin",
      "Buộc các tập tin phải được lưu trữ liên tục trên đĩa"
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] What is the biggest drawback of using multi-level indirect pointers in an i-node system?",
      "options": [
        "Reduces the number of files that can be stored",
        "Reduces the available storage capacity",
        "Increases file access time",
        "Forces files to be stored contiguously on disk"
      ]
    }
  },
  {
    "question": "[HK242] Trong các giải thuật thay trang sau đây, giải thuật nào sử dụng thông tin về thời gian sử dụng gần nhất của các trang để quyết định thay trang?",
    "options": [
      "LIFO",
      "LRU",
      "FIFO",
      "OPT"
    ],
    "answer": "B",
    "en": {
      "question": "[HK242] Among the following page-replacement algorithms, which uses information about how recently pages were used to decide which page to replace?",
      "options": [
        "LIFO",
        "LRU",
        "FIFO",
        "OPT"
      ]
    }
  },
  {
    "question": "[HK242] Giả sử một i-node có 12 con trỏ trực tiếp, 1 con trỏ gián tiếp đơn, 1 con trỏ gián tiếp đôi, 1 con trỏ gián tiếp ba. Nếu kích thước block là 4KB và mỗi con trỏ có kích thước 4 byte, kích thước tập tin tối đa là bao nhiêu?",
    "options": [
      "48KB",
      "≈ 4TB",
      "68GB",
      "4MB"
    ],
    "answer": "B",
    "en": {
      "question": "[HK242] Suppose an i-node has 12 direct pointers, 1 single indirect, 1 double indirect and 1 triple indirect pointer. If the block size is 4KB and each pointer is 4 bytes, what is the maximum file size?",
      "options": [
        "48KB",
        "≈ 4TB",
        "68GB",
        "4MB"
      ]
    },
    "context": "Con trỏ mỗi block / pointers per block = 4096 / 4 = 1024\n(12 + 1024 + 1024² + 1024³) × 4KB ≈ 4TB"
  },
  {
    "question": "[HK242] Chiến lược cấp phát First Fit và Best Fit gây nên:",
    "options": [
      "Phân mảnh nội",
      "Phân mảnh ngoại",
      "Trì hoãn vô hạn định",
      "Xử lý lỗi trang (page fault)"
    ],
    "answer": "B",
    "en": {
      "question": "[HK242] The First Fit and Best Fit allocation strategies cause:",
      "options": [
        "Internal fragmentation",
        "External fragmentation",
        "Indefinite postponement",
        "Page-fault handling"
      ]
    }
  },
  {
    "question": "[HK211] Trong hệ thống quản lý bộ nhớ ảo dùng phân trang, kích thước trang là 1024 bytes. Bảng trang của tiến trình như trong phần dữ liệu. Chỉ số trang ảo được đánh số từ 0 đến 3. Chọn phát biểu đúng:",
    "options": [
      "Tương ứng với địa chỉ luận lý 3022 là địa chỉ vật lý 7118",
      "Tương ứng với địa chỉ luận lý 1901 là địa chỉ vật lý 877",
      "Tương ứng với địa chỉ luận lý 100 là địa chỉ vật lý 4100",
      "Tương ứng với địa chỉ luận lý 4096 là địa chỉ vật lý 2048"
    ],
    "answer": "A",
    "en": {
      "question": "[HK211] In a paged virtual-memory system the page size is 1024 bytes. The process's page table is in the data. Virtual page indices run from 0 to 3. Choose the correct statement:",
      "options": [
        "Logical address 3022 corresponds to physical address 7118",
        "Logical address 1901 corresponds to physical address 877",
        "Logical address 100 corresponds to physical address 4100",
        "Logical address 4096 corresponds to physical address 2048"
      ]
    },
    "context": "Page | Frame\n  0  |   4\n  1  |   2\n  2  |   6\n  3  |   1\n\n3022: page 2, offset 974 → 6 × 1024 + 974 = 7118"
  },
  {
    "question": "[HK211] Cho chuỗi tham chiếu trang 1, 2, 3, 1, 4, 2, 5, 3, 2, 5, 6, 4. Sử dụng giải thuật thay trang LRU với 3 frame, các trang trong bộ nhớ sau khi thực hiện tham chiếu tại thời điểm 10 (truy cập trang 6) là:",
    "options": [
      "6 - 2 - 3",
      "2 - 6 - 5",
      "6 - 5 - 2",
      "5 - 6 - 2"
    ],
    "answer": "D",
    "en": {
      "question": "[HK211] Given the page reference string 1, 2, 3, 1, 4, 2, 5, 3, 2, 5, 6, 4. Using LRU with 3 frames, the pages in memory after the reference at time 10 (accessing page 6) are:",
      "options": [
        "6 - 2 - 3",
        "2 - 6 - 5",
        "6 - 5 - 2",
        "5 - 6 - 2"
      ]
    }
  },
  {
    "question": "[HK211] Việc gán địa chỉ (address binding) được thực hiện bởi trình biên dịch là quá trình:",
    "options": [
      "Chuyển đổi địa chỉ khả tái định vị (relocatable address) thành địa chỉ tuyệt đối",
      "Chuyển đổi địa chỉ dạng ký hiệu (symbolic address) thành địa chỉ tuyệt đối",
      "Chuyển đổi địa chỉ dạng ký hiệu (symbolic address) thành địa chỉ khả tái định vị (relocatable address)",
      "Gán một tập tin thực thi vào một không gian bộ nhớ tuyệt đối"
    ],
    "answer": "C",
    "en": {
      "question": "[HK211] Address binding performed by the compiler is the process of:",
      "options": [
        "Converting a relocatable address into an absolute address",
        "Converting a symbolic address into an absolute address",
        "Converting a symbolic address into a relocatable address",
        "Assigning an executable file to an absolute memory space"
      ]
    }
  },
  {
    "question": "[HK211] Cho chuỗi tham chiếu trang 1, 2, 3, 1, 4, 2, 5, 3, 2, 5, 6, 4. Sử dụng giải thuật FIFO với 3 frame, các trang trong bộ nhớ tại thời điểm tham chiếu thứ 8 (trang 2) là:",
    "options": [
      "4 - 5 - 2",
      "5 - 2 - 3",
      "5 - 3 - 2",
      "5 - 4 - 2"
    ],
    "answer": "A",
    "en": {
      "question": "[HK211] Given the page reference string 1, 2, 3, 1, 4, 2, 5, 3, 2, 5, 6, 4. Using FIFO with 3 frames, the pages in memory at reference time 8 (page 2) are:",
      "options": [
        "4 - 5 - 2",
        "5 - 2 - 3",
        "5 - 3 - 2",
        "5 - 4 - 2"
      ]
    }
  },
  {
    "question": "[HK211] Khi nào thì xảy ra hiện tượng phân mảnh trong hệ thống tập tin?",
    "options": [
      "Không gian chưa sử dụng trên đĩa làm việc",
      "Không gian đã sử dụng trên đĩa không liên tục",
      "Các tập tin không liên tục nhau",
      "Không gian chưa sử dụng trên đĩa không liên tục"
    ],
    "answer": "D",
    "en": {
      "question": "[HK211] When does fragmentation occur in a file system?",
      "options": [
        "Unused space on a working disk",
        "Used space on the disk is non-contiguous",
        "Files are not contiguous with one another",
        "Unused space on the disk is non-contiguous"
      ]
    }
  },
  {
    "question": "[HK211] Tổ chức tập tin và thư mục trên một phân hoạch đĩa được lưu trữ trong:",
    "options": [
      "Cấu trúc thư mục (Directory structure)",
      "Khối điều khiển tập tin (FCB)",
      "Bảng mount",
      "Khối điều khiển volume"
    ],
    "answer": "A",
    "en": {
      "question": "[HK211] The organization of files and directories on a disk partition is stored in the:",
      "options": [
        "Directory structure",
        "File control block (FCB)",
        "Mount table",
        "Volume control block"
      ]
    }
  },
  {
    "question": "[HK211] Tập tin nào là gồm một chuỗi các byte được tổ chức theo khối và được hiểu bởi linker của hệ thống?",
    "options": [
      "Tập tin object",
      "Tập tin văn bản",
      "Tập tin mã nguồn",
      "Tập tin thực thi được"
    ],
    "answer": "A",
    "en": {
      "question": "[HK211] Which file consists of a sequence of bytes organized into blocks and understood by the system's linker?",
      "options": [
        "Object file",
        "Text file",
        "Source file",
        "Executable file"
      ]
    }
  },
  {
    "question": "[HK211] Điểm nào sau đây là lợi ích của việc dùng hai bảng mở tập tin (open file table) trong lõi hệ điều hành?",
    "options": [
      "Các câu khác đều sai",
      "Để hỗ trợ truy xuất hiệu quả khi có nhiều tiến trình cùng mở một tập tin",
      "Để triển khai cơ chế điều khiển quyền truy xuất",
      "Để di chuyển bảng mở tập tin theo từng tiến trình vào không gian người dùng nhằm tiết kiệm bộ nhớ trong lõi"
    ],
    "answer": "B",
    "en": {
      "question": "[HK211] Which of the following is a benefit of using two open-file tables in the OS kernel?",
      "options": [
        "All the other statements are wrong",
        "To support efficient access when several processes open the same file",
        "To implement the access-control mechanism",
        "To move each process's open-file table into user space to save kernel memory"
      ]
    }
  },
  {
    "question": "[HK211] Hệ thống tập tin nào sau đây không phải thuộc dạng địa phương (local file system, chỉ quản lý đĩa cứng cục bộ)?",
    "options": [
      "FAT",
      "NTFS",
      "UFS",
      "NFS"
    ],
    "answer": "D",
    "en": {
      "question": "[HK211] Which of the following file systems is NOT a local file system (managing only local disks)?",
      "options": [
        "FAT",
        "NTFS",
        "UFS",
        "NFS"
      ]
    }
  },
  {
    "question": "[HK211] Cho biết tỉ lệ lỗi trang là 0,3, thời gian truy xuất bộ nhớ là 20ns, thời gian swap in/out là 100ns, thời gian xử lý lỗi trang là 5ns. Tính thời gian truy xuất hiệu dụng (EAT):",
    "options": [
      "75,5 ns",
      "45,5 ns",
      "71,5 ns",
      "149,5 ns"
    ],
    "answer": "B",
    "en": {
      "question": "[HK211] The page-fault rate is 0.3, memory access time is 20ns, swap in/out time is 100ns, and page-fault handling time is 5ns. Compute the effective access time (EAT):",
      "options": [
        "75.5 ns",
        "45.5 ns",
        "71.5 ns",
        "149.5 ns"
      ]
    },
    "context": "EAT = (1 − 0.3) × 20 + 0.3 × (100 + 5) = 14 + 31.5 = 45.5 ns"
  },
  {
    "question": "[HK211] Thrashing xảy ra khi:",
    "options": [
      "Process được tạo ra và kết thúc liên tục",
      "Đĩa cứng không còn khoảng trống cho swap file",
      "Tổng lượng bộ nhớ của các process yêu cầu lớn hơn kích thước bộ nhớ vật lý",
      "Tổng lượng bộ nhớ trong các working set lớn hơn kích thước bộ nhớ vật lý"
    ],
    "answer": "D",
    "en": {
      "question": "[HK211] Thrashing occurs when:",
      "options": [
        "Processes are continually created and terminated",
        "The hard disk has no free space left for the swap file",
        "The total memory requested by processes is larger than physical memory",
        "The total memory of the working sets is larger than physical memory"
      ]
    }
  },
  {
    "question": "[HK211] Trong các cơ chế cấp phát sau, cơ chế nào giúp truy cập file ngẫu nhiên (random access) nhanh nhất?",
    "options": [
      "Cấp phát theo danh sách kề (linked allocation)",
      "Cấp phát liên tục (contiguous allocation)",
      "Cấp phát dùng chỉ mục (indexed allocation)",
      "Cấp phát dùng chỉ mục nhiều mức (multi-level indexed allocation)"
    ],
    "answer": "B",
    "en": {
      "question": "[HK211] Among the following allocation mechanisms, which gives the fastest random file access?",
      "options": [
        "Linked allocation",
        "Contiguous allocation",
        "Indexed allocation",
        "Multi-level indexed allocation"
      ]
    }
  },
  {
    "question": "[HK211] Nội dung nào sau đây không phải là nhược điểm của cấp phát liên tục khi hiện thực hệ thống tập tin?",
    "options": [
      "Chi phí lớn khi dịch chuyển đầu đọc tới lui trong một tập tin",
      "Có thể tồn tại phân mảnh ngoại",
      "Có thể tồn tại phân mảnh trong nếu có cơ chế cấp phát sớm (pre-allocation)",
      "Những tập tin không thể mở rộng về mặt kích thước"
    ],
    "answer": "A",
    "en": {
      "question": "[HK211] Which of the following is NOT a drawback of contiguous allocation when implementing a file system?",
      "options": [
        "High cost of moving the head back and forth within a file",
        "External fragmentation may exist",
        "Internal fragmentation may exist if pre-allocation is used",
        "Files cannot grow in size"
      ]
    }
  },
  {
    "question": "[HK211] Chọn phát biểu đúng:",
    "options": [
      "Bất thường Belady là khi giảm số lượng frame cấp phát thì số lần page fault tăng",
      "Số lần page fault phụ thuộc chủ yếu là lượng frame được cấp phát và giải thuật thay trang",
      "Trong một giải thuật thay trang bất kỳ, khi tăng số frame cấp phát thì số lần page fault luôn luôn giảm",
      "Bất thường Belady có thể xảy ra ở giải thuật FIFO và CLOCK"
    ],
    "answer": "B",
    "en": {
      "question": "[HK211] Choose the correct statement:",
      "options": [
        "Belady's anomaly is when reducing the number of allocated frames increases the number of page faults",
        "The number of page faults depends mainly on the number of allocated frames and the replacement algorithm",
        "In any page-replacement algorithm, increasing the number of allocated frames always reduces page faults",
        "Belady's anomaly can occur in FIFO and CLOCK"
      ]
    }
  },
  {
    "question": "[HK211] Những kỹ thuật nào sau đây có thể được sử dụng để nạp những chương trình lớn hơn khả năng của bộ nhớ, mà không cần sự can thiệp của người lập trình?",
    "options": [
      "Liên kết tĩnh",
      "Liên kết động",
      "Nạp động",
      "Tất cả các đáp án"
    ],
    "answer": "C",
    "en": {
      "question": "[HK211] Which of the following techniques can be used to load programs larger than memory capacity without programmer intervention?",
      "options": [
        "Static linking",
        "Dynamic linking",
        "Dynamic loading",
        "All of the answers"
      ]
    }
  },
  {
    "question": "[HK211] Trong việc gán địa chỉ (address binding), thanh ghi tái định vị (relocation register) được dùng để ánh xạ giữa địa chỉ logic (logical address) và địa chỉ vật lý khi nào?",
    "options": [
      "Lúc nạp chương trình",
      "Lúc biên dịch",
      "Lúc liên kết",
      "Lúc thực thi"
    ],
    "answer": "D",
    "en": {
      "question": "[HK211] In address binding, when is the relocation register used to map between a logical address and a physical address?",
      "options": [
        "At program load time",
        "At compile time",
        "At link time",
        "At execution time"
      ]
    }
  },
  {
    "question": "[HK211] Định nghĩa nào sau đây đúng với một hệ thống tập tin dạng journaling?",
    "options": [
      "Một sự liên kết giữa cấp phát dạng liên kết (linked allocation) và cấp phát dạng chỉ mục (indexed allocation)",
      "Một kỹ thuật để lưu lại (log) tất cả những giao dịch tập tin/thư mục giúp khả năng phục hồi",
      "Một ý tưởng để cải tiến dạng cấp phát liên tục nhằm tránh phân mảnh ngoại",
      "Một phương pháp để theo vết tất cả những khối dữ liệu chưa dùng trên đĩa"
    ],
    "answer": "B",
    "en": {
      "question": "[HK211] Which definition is correct for a journaling file system?",
      "options": [
        "A combination of linked allocation and indexed allocation",
        "A technique that logs all file/directory transactions to enable recovery",
        "An idea for improving contiguous allocation to avoid external fragmentation",
        "A method for tracking all unused data blocks on disk"
      ]
    }
  },
  {
    "question": "[HK211] Cho chuỗi tham chiếu trang 1, 2, 3, 1, 4, 2, 5, 3, 2, 5, 6, 4. Sử dụng giải thuật thay trang Optimal (OPT) với 3 frame, các trang trong bộ nhớ tại thời điểm tham chiếu thứ 9 (trang 2) là:",
    "options": [
      "5 - 3 - 2",
      "2 - 3 - 5",
      "4 - 5 - 2",
      "5 - 2 - 3"
    ],
    "answer": "D",
    "en": {
      "question": "[HK211] Given the page reference string 1, 2, 3, 1, 4, 2, 5, 3, 2, 5, 6, 4. Using Optimal (OPT) replacement with 3 frames, the pages in memory at reference time 9 (page 2) are:",
      "options": [
        "5 - 3 - 2",
        "2 - 3 - 5",
        "4 - 5 - 2",
        "5 - 2 - 3"
      ]
    }
  },
  {
    "question": "[HK211] Một tập tin thực thi sở hữu root (ví dụ như ping). Cách nào để lõi hệ điều hành cho phép một user bình thường có thể thực thi file thực thi này?",
    "options": [
      "Hệ điều hành không cần làm gì hết",
      "Hệ điều hành sẽ thay đổi user ID của quá trình sang Effective UID trùng với ID của tập tin thực thi",
      "Hệ điều hành thay đổi user ID của tập tin sang user của người dùng bình thường, rồi thực thi tập tin này",
      "Chỉ có root mới thực thi được tập tin đã cho"
    ],
    "answer": "B",
    "en": {
      "question": "[HK211] An executable file is owned by root (e.g., ping). How can the OS kernel let a normal user run this executable?",
      "options": [
        "The OS needs to do nothing",
        "The OS changes the process's user ID to an Effective UID equal to the executable file's owner ID",
        "The OS changes the file's user ID to the normal user, then runs the file",
        "Only root can run the given file"
      ]
    }
  },
  {
    "question": "[HK211] Chọn phát biểu đúng:",
    "options": [
      "Truy xuất ngẫu nhiên phù hợp cho cả dạng cấp phát theo chỉ mục và danh sách liên kết",
      "Truy xuất tuần tự có thể thực hiện được trong tất cả chiến lược cấp phát không gian lưu trữ cho tập tin",
      "Truy xuất tuần tự chỉ thực hiện được nếu tập tin được cấp phát theo không gian liên tục",
      "Truy xuất ngẫu nhiên cho thời gian truy xuất tập tin nhanh hơn truy xuất tuần tự trong các chiến lược cấp phát không gian lưu trữ cho phép truy xuất ngẫu nhiên"
    ],
    "answer": "B",
    "en": {
      "question": "[HK211] Choose the correct statement:",
      "options": [
        "Random access suits both indexed allocation and linked-list allocation",
        "Sequential access can be performed under all storage-allocation strategies for files",
        "Sequential access can only be performed if the file is allocated contiguously",
        "Random access gives faster file access than sequential access in allocation strategies that allow random access"
      ]
    }
  },
  {
    "question": "[HK211] Xét một hệ thống tập tin FAT. Ý tưởng nào sau đây có thể được sử dụng để phục hồi tập tin (những khối không bị hỏng) nếu một vài khối của tập tin đó bị hỏng?",
    "options": [
      "Sử dụng doubly linked list",
      "Lưu thêm cấu trúc thư mục để phục hồi",
      "Lưu một danh sách các khối cho tập tin đó trong cấu trúc thư mục",
      "Các câu khác sai"
    ],
    "answer": "C",
    "en": {
      "question": "[HK211] Consider a FAT file system. Which idea can be used to recover a file (the undamaged blocks) if some of its blocks are damaged?",
      "options": [
        "Use a doubly linked list",
        "Store additional directory structures for recovery",
        "Store a list of the file's blocks in the directory structure",
        "All the other statements are wrong"
      ]
    }
  },
  {
    "question": "[HK211] Cho hình ảnh minh họa (đĩa chứa các file A–E, mỗi file nằm trên các block liên tiếp; bảng thư mục gồm File Name, Start block, Length). Cơ chế cấp phát nào phù hợp nhất?",
    "options": [
      "Cấp phát liên kết",
      "Cấp phát chỉ mục",
      "Cấp phát chỉ mục nhiều mức",
      "Cấp phát liên tục"
    ],
    "answer": "D",
    "en": {
      "question": "[HK211] Given the illustration (a disk holding files A–E, each in consecutive blocks; the directory table has File Name, Start block, Length). Which allocation mechanism fits best?",
      "options": [
        "Linked allocation",
        "Indexed allocation",
        "Multi-level indexed allocation",
        "Contiguous allocation"
      ]
    },
    "context": "File Name | Start block | Length   (mỗi file nằm trên các block liên tiếp / each file occupies consecutive blocks)"
  },
  {
    "question": "[HK211] Cho vùng nhớ [0,999] với các vùng đã cấp phát cố định: [200,249], [400,599], [900,949]. Hệ thống dùng phân hoạch thay đổi (variable partition), cấp phát theo First-Fit. Hỏi các lỗ hổng tại thời điểm t = 24.",
    "options": [
      "[0,199], [350,399], [750,899], [950,999]",
      "[150,199], [350,399], [850,899], [950,999]",
      "[150,199], [250,399], [850,899], [950,999]",
      "[150,199], [350,399], [850,999]"
    ],
    "answer": "B",
    "en": {
      "question": "[HK211] Memory [0,999] has permanently allocated regions [200,249], [400,599], [900,949]. The system uses variable partitions with First-Fit allocation. What are the holes at time t = 24?",
      "options": [
        "[0,199], [350,399], [750,899], [950,999]",
        "[150,199], [350,399], [850,899], [950,999]",
        "[150,199], [250,399], [850,899], [950,999]",
        "[150,199], [350,399], [850,999]"
      ]
    },
    "context": "Process | Memory | Start | End\n   P1   |  200   |   0   |  10\n   P2   |  250   |   5   |  25\n   P3   |  150   |  18   |  40\n   P4   |  100   |  22   |  35"
  },
  {
    "question": "[HK211] Cho bảng job (xem dữ liệu). Bộ nhớ hệ thống: 100KB, cấp phát liên tục với variable partition, chiến lược First-Fit. Hỏi tại phút t = 55, trong bộ nhớ còn job nào?",
    "options": [
      "Job 1, Job 4",
      "Job 4, Job 5",
      "Job 1, Job 4, Job 5",
      "Job 1, Job 3, Job 4"
    ],
    "answer": "C",
    "en": {
      "question": "[HK211] Given the job table (see data). System memory is 100KB, contiguous allocation with variable partitions and First-Fit. At minute t = 55, which jobs are in memory?",
      "options": [
        "Job 1, Job 4",
        "Job 4, Job 5",
        "Job 1, Job 4, Job 5",
        "Job 1, Job 3, Job 4"
      ]
    },
    "context": "Job | Memory (KB) | Start | End\n 1  |     50      |   0   |  70\n 2  |     30      |  10   |  30\n 3  |     25      |  15   |  33\n 4  |     15      |  45   |  60\n 5  |     30      |  50   |  70"
  },
  {
    "question": "[HK181] Trong quản lý bộ nhớ, ưu điểm của việc phân chia động (Dynamic Partitioning) so với phân chia cố định (Fixed Partitioning) là gì?",
    "options": [
      "Giảm phân mảnh ngoại.",
      "Giảm phân mảnh nội.",
      "Giảm cả phân mảnh nội và phân mảnh ngoại.",
      "Không gây ra phân mảnh."
    ],
    "answer": "B",
    "en": {
      "question": "[HK181] In memory management, what is the advantage of Dynamic Partitioning over Fixed Partitioning?",
      "options": [
        "Reduces external fragmentation.",
        "Reduces internal fragmentation.",
        "Reduces both internal and external fragmentation.",
        "Causes no fragmentation."
      ]
    }
  },
  {
    "question": "[HK181] Cho chuỗi tham chiếu trang 1, 2, 3, 4, 1, 2, 5, 3, 4, 1. Sử dụng giải thuật thay trang LRU với 3 frame, hỏi số lần page fault (tính cả lần nạp trang đầu) là bao nhiêu?",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answer": "C",
    "en": {
      "question": "[HK181] Given the page reference string 1, 2, 3, 4, 1, 2, 5, 3, 4, 1. Using LRU with 3 frames, how many page faults occur (counting the initial loads)?",
      "options": [
        "8",
        "9",
        "10",
        "11"
      ]
    },
    "context": "Tất cả 10 tham chiếu đều page fault / all 10 references fault"
  },
  {
    "question": "[HK181] Cho bảng phân đoạn (segmentation). Địa chỉ luận lý (3, 40) có địa chỉ vật lý tương ứng là:",
    "options": [
      "130",
      "1440",
      "1990",
      "Không hợp lệ"
    ],
    "answer": "B",
    "en": {
      "question": "[HK181] Given the segmentation table, the logical address (3, 40) corresponds to which physical address?",
      "options": [
        "130",
        "1440",
        "1990",
        "Invalid"
      ]
    },
    "context": "Segment | Base | Length\n   0    | 219  |  600\n   1    | 2300 |   14\n   2    |  90  |  100\n   3    | 1400 |  500\n   4    | 1950 |  100\n\nSegment 3: offset 40 < 500 → 1400 + 40 = 1440"
  },
  {
    "question": "[HK181] Cơ chế cấp phát nào giúp truy cập file ngẫu nhiên (random access) nhanh nhất?",
    "options": [
      "Cấp phát liên tục (Contiguous allocation)",
      "Cấp phát theo danh sách liên kết (Linked allocation)",
      "Cấp phát dùng chỉ mục (Indexed allocation)",
      "Cấp phát dùng chỉ mục nhiều mức (Multi-level indexed allocation)"
    ],
    "answer": "A",
    "en": {
      "question": "[HK181] Which allocation mechanism gives the fastest random file access?",
      "options": [
        "Contiguous allocation",
        "Linked allocation",
        "Indexed allocation",
        "Multi-level indexed allocation"
      ]
    }
  },
  {
    "question": "[HK181] Cho 6 khối bộ nhớ B1, B2, B3, B4, B5, B6 có kích thước lần lượt 300, 600, 350, 200, 750, 125 KB. Các tiến trình đến theo thứ tự: P1 = 115, P2 = 500, P3 = 358, P4 = 200, P5 = 375 KB. Sử dụng giải thuật Best-Fit, hỏi P5 được cấp vào khối nào?",
    "options": [
      "B2",
      "B3",
      "B4",
      "B5"
    ],
    "answer": "D",
    "en": {
      "question": "[HK181] Six memory blocks B1–B6 have sizes 300, 600, 350, 200, 750 and 125 KB. Processes arrive in this order: P1 = 115, P2 = 500, P3 = 358, P4 = 200, P5 = 375 KB. Using Best-Fit, which block is P5 allocated to?",
      "options": [
        "B2",
        "B3",
        "B4",
        "B5"
      ]
    },
    "context": "P1 = 115 → B6 (125)\nP2 = 500 → B2 (600)\nP3 = 358 → B5 (750) → dư / left 392\nP4 = 200 → B4 (200)\nP5 = 375 → B5 (392 còn dư / remaining)"
  },
  {
    "question": "[HK181] Cho các yêu cầu bộ nhớ của các job và các khối trống như sau: Jobs: J1 = 15K, J2 = 20K, J3 = 20K, J4 = 50K. Free blocks: B1 = 30K, B2 = 15K, B3 = 50K, B4 = 20K. Sử dụng giải thuật First-Fit, hỏi job nào không được cấp phát bộ nhớ?",
    "options": [
      "J1",
      "J2",
      "J3",
      "J4"
    ],
    "answer": "D",
    "en": {
      "question": "[HK181] Given the memory requests of jobs and the free blocks: Jobs: J1 = 15K, J2 = 20K, J3 = 20K, J4 = 50K. Free blocks: B1 = 30K, B2 = 15K, B3 = 50K, B4 = 20K. Using First-Fit, which job cannot be allocated memory?",
      "options": [
        "J1",
        "J2",
        "J3",
        "J4"
      ]
    },
    "context": "J1 = 15 → B1 (còn / left 15)\nJ2 = 20 → B3 (còn / left 30)\nJ3 = 20 → B3 (còn / left 10)\nJ4 = 50 → không còn block nào đủ lớn / no block large enough"
  },
  {
    "question": "[HK161] Chọn phát biểu đúng về các giải thuật cấp phát bộ nhớ:",
    "options": [
      "Giải thuật Worst-Fit sẽ tạo ra khối nhớ trống nhỏ nhất sau khi cấp phát",
      "Giải thuật Best-Fit chọn khối nhớ trống lớn nhất (phải lớn hơn kích thước yêu cầu) để cấp phát",
      "Nhìn chung, First-Fit thực hiện nhanh hơn Best-Fit",
      "Khi dùng First-Fit, các khối nhớ trống phải được sắp xếp theo thứ tự tăng dần"
    ],
    "answer": "C",
    "en": {
      "question": "[HK161] Choose the correct statement about memory-allocation algorithms:",
      "options": [
        "Worst-Fit produces the smallest free block after allocation",
        "Best-Fit picks the largest free block (larger than the requested size) to allocate",
        "In general, First-Fit runs faster than Best-Fit",
        "When using First-Fit, free blocks must be sorted in ascending order"
      ]
    }
  },
  {
    "question": "[HK161] Phân mảnh ngoại (External Fragmentation) là gì?",
    "options": [
      "Không gian địa chỉ của hệ thống được chia thành các phần nhỏ hơn và cấp phát liên tục cho quá trình",
      "Không gian địa chỉ cấp phát cho một quá trình là tập hợp các không gian địa chỉ có kích thước nhỏ",
      "Không gian bộ nhớ còn trống có thể đáp ứng yêu cầu cấp phát nhưng không liên tục nên không thể cấp phát",
      "Việc cấp phát không gian địa chỉ dư thừa và không sử dụng hết trong một khối bộ nhớ"
    ],
    "answer": "C",
    "en": {
      "question": "[HK161] What is External Fragmentation?",
      "options": [
        "The system's address space is divided into smaller parts and allocated contiguously to a process",
        "The address space allocated to a process is a collection of small address spaces",
        "Free memory could satisfy the allocation request but is not contiguous, so it cannot be allocated",
        "Allocating excess address space that is not fully used within a memory block"
      ]
    }
  },
  {
    "question": "[HK161] Chọn phát biểu đúng về Virtual Memory và Overlay:",
    "options": [
      "Trong cơ chế Virtual Memory, người dùng có thể quyết định giải thuật thay trang cho quá trình của mình",
      "Dùng cơ chế Overlay, có thể chạy được chương trình có kích thước lớn hơn bộ nhớ thực",
      "Khi sử dụng cơ chế Overlay, hệ điều hành sẽ quản lý việc swap in/out",
      "Virtual Memory là một hiện thực của cơ chế Overlay"
    ],
    "answer": "B",
    "en": {
      "question": "[HK161] Choose the correct statement about Virtual Memory and Overlay:",
      "options": [
        "In virtual memory, the user can decide the page-replacement algorithm for their process",
        "With the overlay mechanism, programs larger than physical memory can be run",
        "When using overlays, the OS manages swap in/out",
        "Virtual memory is an implementation of the overlay mechanism"
      ]
    }
  },
  {
    "question": "[HK161] Lỗi trang (Page Fault) là hiện tượng xảy ra khi:",
    "options": [
      "Số phần tử của bảng ánh xạ trang vượt mức cho phép",
      "Dung lượng bộ nhớ ảo lớn hơn dung lượng bộ nhớ thực của hệ thống",
      "Truy xuất một trang chưa được nạp vào bộ nhớ chính",
      "Không còn bộ nhớ để cấp phát"
    ],
    "answer": "C",
    "en": {
      "question": "[HK161] A page fault is a phenomenon that occurs when:",
      "options": [
        "The number of entries in the page-mapping table exceeds the allowed limit",
        "Virtual memory capacity is greater than the system's physical memory capacity",
        "A page that has not been loaded into main memory is accessed",
        "No memory is left to allocate"
      ]
    }
  },
  {
    "question": "[HK161] Nguyên nhân của hiện tượng bất thường (Belady's Anomaly) trong giải thuật thay trang FIFO là do:",
    "options": [
      "Dung lượng bộ nhớ tỷ lệ thuận với số page fault xảy ra",
      "Hành vi thực thi của chương trình và cách chọn trang thay thế không chú ý đến tính sử dụng thường xuyên của trang nhớ",
      "Sự dùng chung các trang giữa các quá trình đồng thời trong hệ thống",
      "Hạn chế dung lượng của bộ nhớ hệ thống"
    ],
    "answer": "B",
    "en": {
      "question": "[HK161] The cause of Belady's Anomaly in the FIFO page-replacement algorithm is:",
      "options": [
        "Memory capacity is directly proportional to the number of page faults",
        "The program's execution behavior and a replacement choice that ignores how frequently pages are used",
        "Pages being shared among concurrent processes in the system",
        "The limited capacity of system memory"
      ]
    }
  },
  {
    "question": "[HK161] Thrashing xảy ra khi:",
    "options": [
      "Tổng lượng bộ nhớ của các quá trình yêu cầu lớn hơn kích thước bộ nhớ vật lý",
      "Tổng lượng bộ nhớ trong các working set lớn hơn kích thước bộ nhớ vật lý",
      "Đĩa cứng không còn khoảng trống cho swap file",
      "Quá trình được tạo và kết thúc liên tục"
    ],
    "answer": "B",
    "en": {
      "question": "[HK161] Thrashing occurs when:",
      "options": [
        "The total memory requested by processes is larger than physical memory",
        "The total memory of the working sets is larger than physical memory",
        "The hard disk has no free space left for the swap file",
        "Processes are continually created and terminated"
      ]
    }
  },
  {
    "question": "[HK161] Lệnh nào sau đây chỉ có thể được thực hiện ở chế độ lõi (kernel mode)?",
    "options": [
      "Truy cập thiết bị xuất/nhập",
      "Đặt giá trị của đồng hồ hệ thống",
      "Tắt chế độ ngắt quãng",
      "Tất cả các lệnh nêu trên"
    ],
    "answer": "D",
    "en": {
      "question": "[HK161] Which of the following instructions can only be executed in kernel mode?",
      "options": [
        "Accessing I/O devices",
        "Setting the value of the system clock",
        "Turning off interrupts",
        "All of the above"
      ]
    }
  },
  {
    "question": "[HK161] Xét một không gian địa chỉ luận lý gồm 32 page, mỗi page có kích thước 1024 byte, ánh xạ đến bộ nhớ vật lý gồm 256 frame. Hỏi địa chỉ vật lý cần bao nhiêu bit?",
    "options": [
      "5",
      "8",
      "15",
      "18"
    ],
    "answer": "D",
    "en": {
      "question": "[HK161] Consider a logical address space of 32 pages, each 1024 bytes, mapped onto a physical memory of 256 frames. How many bits does a physical address need?",
      "options": [
        "5",
        "8",
        "15",
        "18"
      ]
    },
    "context": "Offset = 10 bit (1024 = 2^10)\nFrame number = 8 bit (256 = 2^8)\nPhysical address = 8 + 10 = 18 bit"
  },
  {
    "question": "[HK161] Sử dụng phương pháp gom nhóm (Grouping) để quản lý không gian địa chỉ trống với n = 3. Giả sử các khối nhớ còn trống là 3, 6, 8, 9, 10, 11, 12, 13, 17, 18, 19, 25, 26, 27. Không gian trống được quản lý như sau:",
    "options": [
      "3 lưu [6 8], 9 lưu [10 11], 12 lưu [13 17], 18 lưu [19 25], 26 lưu [27]",
      "3 lưu [3 6 8], 8 lưu [8 9 10], 10 lưu [10 11 12], 12 lưu [12 13 17], 17 lưu [17 18 19], 19 lưu [19 25 26], 26 lưu [27]",
      "3 lưu [6 8 9], 10 lưu [11 12 13], 17 lưu [18 19 25], 26 lưu [27]",
      "3 lưu [6 8 9], 9 lưu [10 11 12], 12 lưu [13 17 18], 18 lưu [19 25 26], 26 lưu [27]"
    ],
    "answer": "D",
    "en": {
      "question": "[HK161] Using the Grouping method to manage free address space with n = 3. Suppose the free blocks are 3, 6, 8, 9, 10, 11, 12, 13, 17, 18, 19, 25, 26, 27. The free space is organized as follows:",
      "options": [
        "3 stores [6 8], 9 stores [10 11], 12 stores [13 17], 18 stores [19 25], 26 stores [27]",
        "3 stores [3 6 8], 8 stores [8 9 10], 10 stores [10 11 12], 12 stores [12 13 17], 17 stores [17 18 19], 19 stores [19 25 26], 26 stores [27]",
        "3 stores [6 8 9], 10 stores [11 12 13], 17 stores [18 19 25], 26 stores [27]",
        "3 stores [6 8 9], 9 stores [10 11 12], 12 stores [13 17 18], 18 stores [19 25 26], 26 stores [27]"
      ]
    }
  },
  {
    "question": "[HK161] Cho chuỗi tham chiếu trang: 1, 2, 1, 3, 4, 1, 5, 2, 3, 4, 1, 4, 2, 1. Khi sử dụng giải thuật thay trang Optimal (OPT) với 3 frame, số lần page fault là:",
    "options": [
      "4",
      "6",
      "7",
      "9"
    ],
    "answer": "C",
    "en": {
      "question": "[HK161] Given the page reference string: 1, 2, 1, 3, 4, 1, 5, 2, 3, 4, 1, 4, 2, 1. Using the Optimal (OPT) page-replacement algorithm with 3 frames, the number of page faults is:",
      "options": [
        "4",
        "6",
        "7",
        "9"
      ]
    },
    "context": "Page fault tại các bước / at steps: 1, 2, 4, 5, 7, 9, 11 (index từ 1 / 1-based)"
  },
  {
    "question": "[HK161] Cho chuỗi tham chiếu trang: 1, 2, 1, 3, 4, 1, 5, 2, 3, 4, 1, 4, 2, 1. Với 4 frame và giải thuật FIFO, sau khi kết thúc chuỗi tham chiếu, các trang còn lại trong bộ nhớ là:",
    "options": [
      "1, 2, 4, 5",
      "1, 3, 4, 5",
      "2, 3, 4, 5",
      "1, 2, 3, 4"
    ],
    "answer": "A",
    "en": {
      "question": "[HK161] Given the page reference string: 1, 2, 1, 3, 4, 1, 5, 2, 3, 4, 1, 4, 2, 1. With 4 frames and FIFO, after the reference string ends, the pages remaining in memory are:",
      "options": [
        "1, 2, 4, 5",
        "1, 3, 4, 5",
        "2, 3, 4, 5",
        "1, 2, 3, 4"
      ]
    }
  },
  {
    "question": "[HK161] Cho chuỗi tham chiếu trang: 1, 2, 1, 3, 4, 1, 5, 2, 3, 4, 1, 4, 2, 1. Với 3 frame và LRU, ở lần page fault cuối cùng, trang được swap out là:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "C",
    "en": {
      "question": "[HK161] Given the page reference string: 1, 2, 1, 3, 4, 1, 5, 2, 3, 4, 1, 4, 2, 1. With 3 frames and LRU, at the last page fault, the page swapped out is:",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ]
    },
    "context": "Tham chiếu trang 2 ở vị trí 13: page fault; trang 3 là trang lâu nhất chưa dùng → bị swap out.\nReference to page 2 at position 13: page fault; page 3 is the least recently used → swapped out."
  },
  {
    "question": "[HK161] Cho chuỗi tham chiếu trang: 1, 2, 1, 3, 4, 1, 5, 2, 3, 4, 1, 4, 2, 1. Với 4 frame và Clock (Second Chance), sau khi kết thúc chuỗi, các trang có reference bit = 1 là:",
    "options": [
      "2, 4, 5",
      "2, 3, 4",
      "1, 3, 4",
      "1, 2, 4"
    ],
    "answer": "D",
    "en": {
      "question": "[HK161] Given the page reference string: 1, 2, 1, 3, 4, 1, 5, 2, 3, 4, 1, 4, 2, 1. With 4 frames and Clock (Second Chance), after the string ends, the pages whose reference bit = 1 are:",
      "options": [
        "2, 4, 5",
        "2, 3, 4",
        "1, 3, 4",
        "1, 2, 4"
      ]
    }
  },
  {
    "question": "[HK161] Cho bảng phân đoạn (segmentation) như trong dữ liệu. Địa chỉ luận lý 0:430 có địa chỉ vật lý tương ứng là:",
    "options": [
      "1757",
      "2730",
      "649",
      "Giá trị khác"
    ],
    "answer": "C",
    "en": {
      "question": "[HK161] Given the segmentation table in the data, the logical address 0:430 corresponds to which physical address?",
      "options": [
        "1757",
        "2730",
        "649",
        "Another value"
      ]
    },
    "context": "Segment | Base | Length\n   0    | 219  |  600\n   1    | 2300 |   14\n   2    |  90  |  100\n   3    | 1327 |  580\n   4    | 1952 |   96\n\nSegment 0, offset 430 < 600 → 219 + 430 = 649"
  },
  {
    "question": "[HK161] Cho bảng phân đoạn (segmentation) như trong dữ liệu. Địa chỉ luận lý 3:650 có địa chỉ vật lý tương ứng là:",
    "options": [
      "2950",
      "126",
      "1977",
      "Giá trị khác"
    ],
    "answer": "D",
    "en": {
      "question": "[HK161] Given the segmentation table in the data, the logical address 3:650 corresponds to which physical address?",
      "options": [
        "2950",
        "126",
        "1977",
        "Another value"
      ]
    },
    "context": "Segment | Base | Length\n   0    | 219  |  600\n   1    | 2300 |   14\n   2    |  90  |  100\n   3    | 1327 |  580\n   4    | 1952 |   96\n\nSegment 3, offset 650 > 580 → không hợp lệ / invalid"
  }
]

export default storage
