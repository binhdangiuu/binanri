const cpu = [
  {
    "question": "Phát biểu nào sau đây sai về các thành phần của một tiến trình trong hệ điều hành?",
    "options": [
      "Text section chứa mã lệnh của chương trình.",
      "Stack section dùng để lưu tham số hàm, biến cục bộ và địa chỉ trả về.",
      "Heap section chứa các biến toàn cục của chương trình.",
      "Data section chứa các biến toàn cục và biến static."
    ],
    "answer": "C",
    "en": {
      "question": "Which of the following statements about a process's memory sections is INCORRECT?",
      "options": [
        "The text section holds the program's instructions.",
        "The stack section holds function parameters, local variables and return addresses.",
        "The heap section holds the program's global variables.",
        "The data section holds global and static variables."
      ]
    }
  },
  {
    "question": "Cho đoạn chương trình C++ sau:\n\nint main() {\n    int *a = new int(2);\n}\n\nPhát biểu nào sau đây là đúng?",
    "options": [
      "Biến con trỏ a nằm trong Heap, còn giá trị 2 nằm trong Stack.",
      "Biến con trỏ a nằm trong Stack, còn vùng nhớ chứa giá trị 2 nằm trong Heap.",
      "Cả biến a và giá trị 2 đều nằm trong Stack.",
      "Cả biến a và giá trị 2 đều nằm trong Heap."
    ],
    "answer": "B",
    "en": {
      "question": "Given the following C++ code:\n\nint main() {\n    int *a = new int(2);\n}\n\nWhich statement is correct?",
      "options": [
        "Pointer a lives in the Heap, and the value 2 lives in the Stack.",
        "Pointer a lives in the Stack, and the memory holding value 2 lives in the Heap.",
        "Both a and the value 2 live in the Stack.",
        "Both a and the value 2 live in the Heap."
      ]
    }
  },
  {
    "question": "Phát biểu nào sau đây đúng về khái niệm passive và active trong hệ điều hành?",
    "options": [
      "Process là thực thể thụ động vì chỉ lưu trên ổ đĩa.",
      "Program là thực thể hoạt động vì luôn được CPU thực thi.",
      "Program là thực thể thụ động, còn Process là thực thể hoạt động.",
      "Program và Process đều là thực thể hoạt động."
    ],
    "answer": "C",
    "en": {
      "question": "Which statement is correct about the concepts of \"passive\" and \"active\" in an operating system?",
      "options": [
        "A process is passive because it only sits on disk.",
        "A program is active because it is always executed by the CPU.",
        "A program is a passive entity, while a process is an active entity.",
        "Both a program and a process are active entities."
      ]
    }
  },
  {
    "question": "Trong sơ đồ trạng thái tiến trình của hệ điều hành, trường hợp nào sau đây làm tiến trình chuyển từ trạng thái Running sang Ready?",
    "options": [
      "Tiến trình yêu cầu thao tác nhập/xuất (I/O).",
      "Bộ định thời hết quantum và CPU bị thu hồi.",
      "Tiến trình hoàn thành thực thi.",
      "Tiến trình vừa được tạo."
    ],
    "answer": "B",
    "en": {
      "question": "In the process state diagram, which case moves a process from Running to Ready?",
      "options": [
        "The process requests an I/O operation.",
        "Its time quantum expires and the CPU is reclaimed.",
        "The process finishes executing.",
        "The process has just been created."
      ]
    }
  },
  {
    "question": "Trong mô hình trạng thái tiến trình, khi nào một tiến trình chuyển từ trạng thái Waiting sang Ready?",
    "options": [
      "Khi tiến trình được cấp CPU để thực thi.",
      "Khi tiến trình yêu cầu thao tác nhập/xuất (I/O).",
      "Khi sự kiện đang chờ hoàn thành, chẳng hạn thao tác I/O kết thúc.",
      "Khi tiến trình bị hệ điều hành thu hồi CPU."
    ],
    "answer": "C",
    "en": {
      "question": "In the process state model, when does a process move from Waiting to Ready?",
      "options": [
        "When the process is given the CPU to run.",
        "When the process requests an I/O operation.",
        "When the event it was waiting for completes, e.g. an I/O operation finishes.",
        "When the operating system reclaims the CPU from the process."
      ]
    }
  },
  {
    "question": "Trường hợp nào làm tiến trình chuyển từ trạng thái Running sang Waiting?",
    "options": [
      "Tiến trình hoàn thành thực thi.",
      "Tiến trình yêu cầu thao tác nhập/xuất (I/O).",
      "Bộ định thời hết quantum.",
      "Tiến trình vừa được tạo."
    ],
    "answer": "B",
    "en": {
      "question": "Which case moves a process from Running to Waiting?",
      "options": [
        "The process finishes executing.",
        "The process requests an I/O operation.",
        "Its time quantum expires.",
        "The process has just been created."
      ]
    }
  },
  {
    "question": "Trường hợp nào làm tiến trình chuyển từ trạng thái Running sang Terminated?",
    "options": [
      "Tiến trình hoàn thành việc thực thi.",
      "Tiến trình yêu cầu thao tác I/O.",
      "Bộ định thời hết quantum.",
      "Có tiến trình ưu tiên cao hơn xuất hiện."
    ],
    "answer": "A",
    "en": {
      "question": "Which case moves a process from Running to Terminated?",
      "options": [
        "The process finishes executing.",
        "The process requests an I/O operation.",
        "Its time quantum expires.",
        "A higher-priority process appears."
      ]
    }
  },
  {
    "question": "Thành phần nào sau đây không được lưu trong PCB (Process Control Block) của tiến trình?",
    "options": [
      "Program Counter.",
      "Thông tin thanh ghi CPU.",
      "Trạng thái tiến trình.",
      "Mã lệnh của toàn bộ chương trình."
    ],
    "answer": "D",
    "en": {
      "question": "Which of the following is NOT stored in a process's PCB (Process Control Block)?",
      "options": [
        "The program counter.",
        "CPU register information.",
        "The process state.",
        "The full instruction code of the program."
      ]
    }
  },
  {
    "question": "Mục đích chính của Process Scheduling trong hệ điều hành là gì?",
    "options": [
      "Tăng kích thước bộ nhớ chính của hệ thống.",
      "Quyết định tiến trình nào được cấp CPU để thực thi.",
      "Lưu trữ mã lệnh của chương trình vào ổ đĩa.",
      "Chuyển đổi chương trình nguồn thành mã máy."
    ],
    "answer": "B",
    "en": {
      "question": "What is the main purpose of process scheduling in an operating system?",
      "options": [
        "Increasing the size of the system's main memory.",
        "Deciding which process gets the CPU to run.",
        "Storing the program's instructions to disk.",
        "Converting source code into machine code."
      ]
    }
  },
  {
    "question": "Phát biểu nào sau đây đúng khi so sánh Ready Queue và Wait Queue trong hệ điều hành?",
    "options": [
      "Ready Queue chứa các tiến trình đang chờ hoàn thành I/O.",
      "Wait Queue chứa các tiến trình đang sẵn sàng nhận CPU.",
      "Ready Queue chứa các tiến trình chờ được cấp CPU, còn Wait Queue chứa các tiến trình đang chờ sự kiện hoặc I/O.",
      "Cả Ready Queue và Wait Queue đều chứa các tiến trình đang thực thi."
    ],
    "answer": "C",
    "en": {
      "question": "Which statement correctly compares the Ready Queue and the Wait Queue?",
      "options": [
        "The Ready Queue holds processes waiting for I/O to finish.",
        "The Wait Queue holds processes ready to receive the CPU.",
        "The Ready Queue holds processes waiting for the CPU, while the Wait Queue holds processes waiting on an event or I/O.",
        "Both the Ready Queue and the Wait Queue hold currently running processes."
      ]
    }
  },
  {
    "question": "Trong thực tế, hệ điều hành cần thực hiện Context Switch trong trường hợp nào sau đây?",
    "options": [
      "Khi tiến trình đang chạy yêu cầu thao tác I/O hoặc bị hết quantum CPU.",
      "Khi bộ nhớ RAM còn trống nhiều.",
      "Khi người dùng mở thêm một thư mục trong ổ đĩa.",
      "Khi chương trình được biên dịch sang mã máy."
    ],
    "answer": "A",
    "en": {
      "question": "In practice, when does the OS need to perform a context switch?",
      "options": [
        "When the running process requests I/O or runs out of its CPU quantum.",
        "When there is plenty of free RAM.",
        "When the user opens another folder on disk.",
        "When a program is compiled into machine code."
      ]
    }
  },
  {
    "question": "Cho đoạn chương trình UNIX/Linux sau:\n\nint main() {\n    pid_t pid = fork();\n\n    if (pid == 0) {\n        // Child process\n        return 0;\n    }\n    else {\n        sleep(10);\n    }\n}\n\nĐiều gì sẽ xảy ra sau khi tiến trình con kết thúc?",
    "options": [
      "Tiến trình con trở thành orphan process.",
      "Tiến trình con trở thành zombie process.",
      "Tiến trình cha bị kết thúc ngay lập tức.",
      "Tiến trình con tự động gọi exec()."
    ],
    "answer": "B",
    "en": {
      "question": "Given the following UNIX/Linux program:\n\nint main() {\n    pid_t pid = fork();\n\n    if (pid == 0) {\n        // Child process\n        return 0;\n    }\n    else {\n        sleep(10);\n    }\n}\n\nWhat happens after the child process ends?",
      "options": [
        "The child becomes an orphan process.",
        "The child becomes a zombie process.",
        "The parent process is terminated immediately.",
        "The child automatically calls exec()."
      ]
    }
  },
  {
    "question": "Xét đoạn chương trình C/C++ sau:\n\n#include <stdio.h>\n#include <unistd.h>\n\nint main() {\n    fork();\n\n    if (fork() == 0) {\n        fork();\n        printf(\"A \");\n    } else {\n        fork();\n        fork();\n        printf(\"B \");\n    }\n\n    return 0;\n}\n\nHỏi chương trình in ra tổng cộng bao nhiêu lần ký tự \"A \" và \"B \"?",
    "options": [
      "4 lần A và 8 lần B",
      "1 lần A và 3 lần B",
      "2 lần A và 3 lần B",
      "3 lần A và 3 lần B"
    ],
    "answer": "C",
    "en": {
      "question": "Consider the following C/C++ program:\n\n#include <stdio.h>\n#include <unistd.h>\n\nint main() {\n    fork();\n\n    if (fork() == 0) {\n        fork();\n        printf(\"A \");\n    } else {\n        fork();\n        fork();\n        printf(\"B \");\n    }\n\n    return 0;\n}\n\nHow many times does the program print \"A \" and \"B \" in total?",
      "options": [
        "4 times A and 8 times B",
        "1 time A and 3 times B",
        "2 times A and 3 times B",
        "3 times A and 3 times B"
      ]
    }
  },
  {
    "question": "Trong UNIX/Linux, ý nghĩa chính của hàm exec() là gì?",
    "options": [
      "Tạo ra một tiến trình con mới giống tiến trình cha.",
      "Tạm dừng tiến trình hiện tại để chờ tiến trình khác.",
      "Thay thế không gian bộ nhớ của tiến trình hiện tại bằng một chương trình mới.",
      "Hủy tiến trình con và giải phóng toàn bộ tài nguyên."
    ],
    "answer": "C",
    "en": {
      "question": "In UNIX/Linux, what is the main purpose of the exec() function?",
      "options": [
        "Creating a new child process identical to the parent.",
        "Pausing the current process to wait for another process.",
        "Replacing the current process's memory image with a new program.",
        "Killing the child process and freeing all its resources."
      ]
    }
  },
  {
    "question": "Sau khi gọi hàm fork() trong UNIX/Linux, tiến trình con có đặc điểm nào giống tiến trình cha?",
    "options": [
      "Có cùng PID với tiến trình cha.",
      "Chia sẻ cùng Program Counter đang chạy.",
      "Có bản sao gần như giống hệt không gian địa chỉ và mã lệnh của tiến trình cha.",
      "Tự động thực thi một chương trình mới bằng exec()."
    ],
    "answer": "C",
    "en": {
      "question": "After calling fork() in UNIX/Linux, what does the child process have in common with the parent?",
      "options": [
        "It has the same PID as the parent.",
        "It shares the same running program counter as the parent.",
        "It has an almost identical copy of the parent's address space and code.",
        "It automatically runs a new program via exec()."
      ]
    }
  },
  {
    "question": "Xét đoạn chương trình C trong UNIX/Linux:\n\nint x = 5;\n\nint main() {\n    pid_t pid = fork();\n\n    if (pid == 0) {\n        x = 10;\n    } else {\n        x = 20;\n        wait(NULL);\n    }\n}\n\nPhát biểu nào sau đây đúng?",
    "options": [
      "Hai tiến trình cha và con cùng chia sẻ biến x, nên giá trị cuối cùng của x là 20.",
      "Sau fork(), tiến trình cha và con có không gian bộ nhớ riêng, nên thay đổi x không ảnh hưởng lẫn nhau.",
      "Tiến trình con ghi đè trực tiếp lên biến x của tiến trình cha.",
      "Giá trị x luôn được đồng bộ giữa hai tiến trình trong thời gian chạy."
    ],
    "answer": "B",
    "en": {
      "question": "Consider the following UNIX/Linux C program:\n\nint x = 5;\n\nint main() {\n    pid_t pid = fork();\n\n    if (pid == 0) {\n        x = 10;\n    } else {\n        x = 20;\n        wait(NULL);\n    }\n}\n\nWhich statement is correct?",
      "options": [
        "The parent and child share variable x, so its final value is 20.",
        "After fork(), the parent and child have separate memory spaces, so changing x in one does not affect the other.",
        "The child directly overwrites the parent's variable x.",
        "The value of x is always kept in sync between the two processes at runtime."
      ]
    }
  },
  {
    "question": "Phát biểu nào sau đây đúng về cơ chế Shared Memory trong giao tiếp giữa các tiến trình?",
    "options": [
      "Hệ điều hành tự động đồng bộ hóa truy cập vào vùng nhớ chia sẻ.",
      "Các tiến trình giao tiếp qua Shared Memory và tự quản lý việc đồng bộ hóa.",
      "Shared Memory chỉ dùng để truyền thông điệp giữa các tiến trình qua kernel.",
      "Shared Memory không thể dùng trong bài toán Producer - Consumer."
    ],
    "answer": "B",
    "en": {
      "question": "Which statement is correct about Shared Memory for inter-process communication?",
      "options": [
        "The OS automatically synchronizes access to the shared region.",
        "Processes communicate through shared memory and must manage synchronization themselves.",
        "Shared memory is only used to pass messages between processes via the kernel.",
        "Shared memory cannot be used for the Producer-Consumer problem."
      ]
    }
  },
  {
    "question": "Vấn đề Producer-Consumer trong hệ điều hành liên quan chủ yếu đến điều gì?",
    "options": [
      "Quản lý CPU scheduling giữa nhiều tiến trình.",
      "Đồng bộ hóa truy cập vào bộ nhớ dùng chung giữa các tiến trình.",
      "Tối ưu hóa dung lượng ổ đĩa cứng.",
      "Chuyển đổi giữa user mode và kernel mode."
    ],
    "answer": "B",
    "en": {
      "question": "What does the Producer-Consumer problem in operating systems mainly concern?",
      "options": [
        "Managing CPU scheduling among multiple processes.",
        "Synchronizing access to memory shared between processes.",
        "Optimizing hard disk capacity.",
        "Switching between user mode and kernel mode."
      ]
    }
  },
  {
    "question": "Phương pháp nào sau đây thường được sử dụng để giải quyết bài toán Producer-Consumer?",
    "options": [
      "Sử dụng chỉ CPU scheduling như FCFS hoặc Round Robin.",
      "Sử dụng các cơ chế đồng bộ hóa như semaphore hoặc mutex.",
      "Tăng kích thước bộ nhớ RAM để tránh xung đột.",
      "Cho phép Producer và Consumer chạy trên các CPU khác nhau mà không cần đồng bộ."
    ],
    "answer": "B",
    "en": {
      "question": "Which method is commonly used to solve the Producer-Consumer problem?",
      "options": [
        "Using only CPU scheduling such as FCFS or Round Robin.",
        "Using synchronization mechanisms such as semaphores or mutexes.",
        "Increasing RAM size to avoid conflicts.",
        "Letting the producer and consumer run on different CPUs without any synchronization."
      ]
    }
  },
  {
    "question": "Trong cơ chế Message Passing, có bao nhiêu cách giao tiếp giữa các tiến trình?",
    "options": [
      "1 cách: chỉ giao tiếp trực tiếp giữa các tiến trình.",
      "2 cách: giao tiếp trực tiếp và giao tiếp gián tiếp.",
      "3 cách: trực tiếp, gián tiếp và qua shared memory.",
      "4 cách: trực tiếp, gián tiếp, shared memory và pipe."
    ],
    "answer": "B",
    "en": {
      "question": "In message passing, how many ways can processes communicate?",
      "options": [
        "1 way: only direct communication between processes.",
        "2 ways: direct communication and indirect communication.",
        "3 ways: direct, indirect and via shared memory.",
        "4 ways: direct, indirect, shared memory and pipes."
      ]
    }
  },
  {
    "question": "Nhược điểm của cơ chế Direct Communication (giao tiếp trực tiếp) so với Indirect Communication là gì?",
    "options": [
      "Linh hoạt hơn vì không cần biết tên tiến trình.",
      "Dễ mở rộng trong hệ thống lớn có nhiều tiến trình.",
      "Các tiến trình phải biết rõ tên của nhau nên kém linh hoạt và khó mở rộng.",
      "Không cần bất kỳ cơ chế đồng bộ nào."
    ],
    "answer": "C",
    "en": {
      "question": "What is a drawback of Direct Communication compared to Indirect Communication?",
      "options": [
        "It is more flexible because processes don't need to know each other's names.",
        "It scales easily in large systems with many processes.",
        "Processes must explicitly know each other's names, making it less flexible and harder to scale.",
        "It requires no synchronization mechanism at all."
      ]
    }
  },
  {
    "question": "Phát biểu nào sau đây đúng về Blocking và Non-blocking trong cơ chế truyền thông điệp (Message Passing)?",
    "options": [
      "Blocking send/receive luôn không làm tiến trình dừng lại.",
      "Non-blocking send/receive khiến tiến trình phải chờ cho đến khi thao tác hoàn tất.",
      "Blocking khiến tiến trình phải chờ cho đến khi gửi/nhận xong, còn Non-blocking cho phép tiếp tục thực thi ngay.",
      "Blocking và Non-blocking chỉ khác nhau ở tốc độ CPU."
    ],
    "answer": "C",
    "en": {
      "question": "Which statement is correct about Blocking and Non-blocking message passing?",
      "options": [
        "Blocking send/receive never pauses the process.",
        "Non-blocking send/receive forces the process to wait until the operation completes.",
        "Blocking forces the process to wait until the send/receive completes, while non-blocking lets it continue right away.",
        "Blocking and non-blocking only differ in CPU speed."
      ]
    }
  },
  {
    "question": "Lợi ích nào sau đây không phải là ưu điểm của đa luồng (multithreading)?",
    "options": [
      "Tăng tính phản hồi (Responsiveness) của chương trình.",
      "Giảm chi phí tạo và chuyển đổi ngữ cảnh so với tiến trình.",
      "Các luồng có không gian địa chỉ riêng hoàn toàn độc lập như tiến trình.",
      "Tận dụng tốt kiến trúc đa lõi (multicore) để tăng hiệu năng."
    ],
    "answer": "C",
    "en": {
      "question": "Which of the following is NOT a benefit of multithreading?",
      "options": [
        "Increased responsiveness of the program.",
        "Lower cost of creation and context switching compared to processes.",
        "Threads have fully independent address spaces, just like processes.",
        "Good use of multicore architectures to boost performance."
      ]
    }
  },
  {
    "question": "Phát biểu nào sau đây đúng khi so sánh Process và Thread?",
    "options": [
      "Process nhẹ hơn Thread vì không cần quản lý tài nguyên.",
      "Thread có tính độc lập hoàn toàn, không chia sẻ tài nguyên với các Thread khác.",
      "Process là đơn vị thực thi độc lập với không gian địa chỉ riêng, còn các Thread trong cùng một Process chia sẻ không gian bộ nhớ và tài nguyên, giúp giao tiếp nhanh hơn nhưng cần đồng bộ hóa.",
      "Khi một Thread bị chặn thì toàn bộ hệ thống sẽ dừng hoạt động."
    ],
    "answer": "C",
    "en": {
      "question": "Which statement correctly compares Process and Thread?",
      "options": [
        "A process is lighter than a thread because it doesn't need resource management.",
        "A thread is fully independent and shares no resources with other threads.",
        "A process is an independent execution unit with its own address space, while threads within the same process share memory and resources, enabling faster communication but requiring synchronization.",
        "When one thread is blocked, the whole system stops."
      ]
    }
  },
  {
    "question": "Chọn phát biểu đúng về sự khác biệt giữa process creation và thread creation:",
    "options": [
      "Process creation nhẹ hơn thread creation vì không cần cấp phát bộ nhớ.",
      "Thread creation nặng hơn process creation vì phải tạo không gian địa chỉ riêng.",
      "Process creation là heavy-weight do cần cấp phát nhiều tài nguyên, thread creation là light-weight vì chia sẻ tài nguyên trong cùng process.",
      "Cả process và thread creation đều có chi phí như nhau trong mọi hệ điều hành."
    ],
    "answer": "C",
    "en": {
      "question": "Pick the correct statement about the difference between process creation and thread creation:",
      "options": [
        "Process creation is lighter than thread creation because it needs no memory allocation.",
        "Thread creation is heavier than process creation because it must create its own address space.",
        "Process creation is heavy-weight because it needs many resources allocated, while thread creation is light-weight because threads share resources within the same process.",
        "Process and thread creation always cost the same in every operating system."
      ]
    }
  },
  {
    "question": "Trong cùng một process, các thread thường chia sẻ thành phần nào sau đây?",
    "options": [
      "Program Counter, Stack và Register",
      "Stack, Register và Thread ID",
      "Code section, Data section và vùng nhớ heap",
      "Program Counter, Stack và Heap"
    ],
    "answer": "C",
    "en": {
      "question": "Within the same process, which components do threads typically share?",
      "options": [
        "Program counter, stack and registers",
        "Stack, registers and thread ID",
        "Code section, data section and the heap",
        "Program counter, stack and heap"
      ]
    }
  },
  {
    "question": "Phát biểu nào sau đây đúng khi so sánh Concurrency và Parallelism?",
    "options": [
      "Concurrency chỉ xảy ra trên hệ thống đa lõi, còn Parallelism chỉ trên đơn lõi.",
      "Parallelism là khả năng thực hiện nhiều tác vụ đúng cùng một thời điểm, còn Concurrency là nhiều tác vụ có tiến triển xen kẽ nhau.",
      "Concurrency và Parallelism là hai khái niệm giống hệt nhau.",
      "Parallelism không cần phần cứng hỗ trợ CPU đa lõi."
    ],
    "answer": "B",
    "en": {
      "question": "Which statement correctly compares Concurrency and Parallelism?",
      "options": [
        "Concurrency only happens on multicore systems, while Parallelism only happens on single-core systems.",
        "Parallelism is the ability to perform multiple tasks at the exact same instant, while Concurrency means multiple tasks make interleaved progress.",
        "Concurrency and Parallelism are exactly the same concept.",
        "Parallelism needs no multicore CPU hardware support."
      ]
    }
  },
  {
    "question": "Trong thực tế hệ điều hành hiện đại (ví dụ Windows, Linux), cơ chế nào sau đây thường được sử dụng để vừa tăng hiệu năng vừa tận dụng đa lõi CPU?",
    "options": [
      "Chỉ sử dụng Concurrency trên một CPU đơn lõi.",
      "Chỉ sử dụng Parallelism mà không cần lập lịch CPU.",
      "Kết hợp cả Concurrency và Parallelism.",
      "Không sử dụng cả Concurrency và Parallelism."
    ],
    "answer": "C",
    "en": {
      "question": "In modern operating systems (e.g. Windows, Linux), which approach is commonly used to both boost performance and exploit multicore CPUs?",
      "options": [
        "Using only Concurrency on a single-core CPU.",
        "Using only Parallelism without any CPU scheduling.",
        "Combining both Concurrency and Parallelism.",
        "Using neither Concurrency nor Parallelism."
      ]
    }
  },
  {
    "question": "Áp dụng Định luật Amdahl, một chương trình có 30% phần công việc phải thực hiện tuần tự, phần còn lại có thể song song hóa hoàn toàn. Hệ thống sử dụng 4 lõi xử lý.\nMức tăng tốc tối đa (speedup) gần đúng là bao nhiêu?",
    "options": [
      "1.54",
      "2.00",
      "2.50",
      "2.105"
    ],
    "answer": "D",
    "en": {
      "question": "Applying Amdahl's Law, a program has 30% of its work that must run sequentially, and the rest can be fully parallelized. The system has 4 processing cores.\nWhat is the approximate maximum speedup?",
      "options": [
        "1.54",
        "2.00",
        "2.50",
        "2.105"
      ]
    },
    "context": "speedup <= 1 / (S + (1-S)/N)\nWith S = 0.3, N = 4:\nspeedup = 1 / (0.3 + 0.7/4) = 1 / 0.475 ≈ 2.105"
  },
  {
    "question": "Chọn phát biểu đúng về asynchronous threading và synchronous threading:",
    "options": [
      "Asynchronous threading yêu cầu thread cha phải chờ thread con hoàn thành.",
      "Synchronous threading cho phép thread cha tiếp tục chạy mà không cần chờ thread con.",
      "Asynchronous threading cho phép thread cha không chờ thread con, còn synchronous threading yêu cầu chờ thread con.",
      "Cả hai đều không có liên quan đến việc chờ hay không chờ giữa các thread."
    ],
    "answer": "C",
    "en": {
      "question": "Pick the correct statement about asynchronous threading and synchronous threading:",
      "options": [
        "Asynchronous threading requires the parent thread to wait for the child thread to finish.",
        "Synchronous threading lets the parent thread keep running without waiting for the child thread.",
        "Asynchronous threading lets the parent thread not wait for the child thread, while synchronous threading requires waiting for it.",
        "Neither has anything to do with whether threads wait for each other."
      ]
    }
  },
  {
    "question": "Một hệ thống sử dụng mô hình đa luồng, trong đó mỗi luồng người dùng được ánh xạ trực tiếp vào một luồng hạt nhân riêng biệt. Mô hình này giúp tận dụng tốt CPU đa lõi nhưng chi phí tạo luồng cao. Mô hình đang được sử dụng là gì?",
    "options": [
      "Many-to-One",
      "One-to-One",
      "Many-to-Many",
      "Thread Pool"
    ],
    "answer": "B",
    "en": {
      "question": "A system uses a threading model where each user thread is mapped directly to its own separate kernel thread. This model uses multicore CPUs well but has a high thread-creation cost. Which model is this?",
      "options": [
        "Many-to-One",
        "One-to-One",
        "Many-to-Many",
        "Thread Pool"
      ]
    }
  },
  {
    "question": "Trong một hệ thống, nếu một luồng người dùng bị chặn I/O thì toàn bộ các luồng khác trong cùng tiến trình cũng bị chặn theo. Hệ thống này đang sử dụng mô hình nào?",
    "options": [
      "Many-to-One",
      "One-to-One",
      "Many-to-Many",
      "Hybrid Scheduler"
    ],
    "answer": "A",
    "en": {
      "question": "In a system, if one user thread blocks on I/O, all other threads in the same process block too. Which model is this system using?",
      "options": [
        "Many-to-One",
        "One-to-One",
        "Many-to-Many",
        "Hybrid Scheduler"
      ]
    }
  },
  {
    "question": "Một hệ điều hành cho phép ánh xạ nhiều luồng người dùng lên nhiều luồng hạt nhân một cách linh hoạt, giúp vừa tăng hiệu năng vừa tránh giới hạn số lượng luồng hạt nhân. Mô hình này là gì?",
    "options": [
      "Many-to-One",
      "One-to-One",
      "Many-to-Many",
      "Single-threaded model"
    ],
    "answer": "C",
    "en": {
      "question": "An OS flexibly maps many user threads onto many kernel threads, improving performance while avoiding a hard limit on the number of kernel threads. Which model is this?",
      "options": [
        "Many-to-One",
        "One-to-One",
        "Many-to-Many",
        "Single-threaded model"
      ]
    }
  },
  {
    "question": "Trong hệ điều hành Windows, mô hình luồng được sử dụng phổ biến là gì?",
    "options": [
      "Many-to-One, trong đó nhiều luồng người dùng dùng chung một luồng hạt nhân.",
      "One-to-One, trong đó mỗi luồng người dùng ánh xạ với một luồng hạt nhân.",
      "Many-to-Many, cho phép ánh xạ linh hoạt giữa user thread và kernel thread.",
      "Không sử dụng luồng hạt nhân, chỉ dùng luồng người dùng."
    ],
    "answer": "B",
    "en": {
      "question": "In Windows, which threading model is commonly used?",
      "options": [
        "Many-to-One, where many user threads share one kernel thread.",
        "One-to-One, where each user thread maps to one kernel thread.",
        "Many-to-Many, allowing flexible mapping between user and kernel threads.",
        "No kernel threads at all, only user threads."
      ]
    }
  },
  {
    "question": "Chọn phát biểu đúng về Thread Pool và Fork-Join:",
    "options": [
      "Thread Pool tạo thread mới mỗi khi có công việc đến để tăng tính linh hoạt.",
      "Fork-Join chỉ phù hợp với các chương trình đơn luồng vì cần đồng bộ kết quả.",
      "Thread Pool giúp tái sử dụng thread có sẵn, còn Fork-Join chia nhỏ công việc rồi hợp nhất kết quả.",
      "Cả Thread Pool và Fork-Join đều yêu cầu mỗi tác vụ phải chạy tuần tự."
    ],
    "answer": "C",
    "en": {
      "question": "Pick the correct statement about Thread Pool and Fork-Join:",
      "options": [
        "A thread pool creates a new thread every time work arrives, for flexibility.",
        "Fork-Join only suits single-threaded programs because results must be synchronized.",
        "A thread pool reuses existing threads, while fork-join splits work into pieces and then joins the results.",
        "Both thread pool and fork-join require every task to run sequentially."
      ]
    }
  },
  {
    "question": "Chọn phương pháp KHÔNG thuộc implicit threading:",
    "options": [
      "Intel Threading Building Blocks",
      "Grand Central Dispatch",
      "OpenMP",
      "Process Scheduling"
    ],
    "answer": "D",
    "en": {
      "question": "Which of the following is NOT a form of implicit threading?",
      "options": [
        "Intel Threading Building Blocks",
        "Grand Central Dispatch",
        "OpenMP",
        "Process Scheduling"
      ]
    }
  },
  {
    "question": "Phát biểu nào sau đây đúng về hai cơ chế lập lịch CPU Preemptive và Non-preemptive?",
    "options": [
      "Preemptive là khi tiến trình tự nguyện nhả CPU, còn Non-preemptive là khi hệ thống tước CPU của tiến trình.",
      "Non-preemptive là khi tiến trình giữ CPU cho đến khi kết thúc hoặc tự chờ I/O, còn Preemptive cho phép hệ điều hành tước CPU của tiến trình.",
      "Cả hai đều không cho phép hệ điều hành can thiệp vào CPU.",
      "Preemptive chỉ dùng cho hệ thống đơn nhiệm."
    ],
    "answer": "B",
    "en": {
      "question": "Which statement is correct about preemptive and non-preemptive CPU scheduling?",
      "options": [
        "Preemptive is when a process voluntarily gives up the CPU, while non-preemptive is when the OS forcibly takes the CPU away.",
        "Non-preemptive is when a process keeps the CPU until it finishes or voluntarily waits for I/O, while preemptive lets the OS take the CPU away from a process.",
        "Neither allows the OS to intervene on the CPU.",
        "Preemptive scheduling is only used on single-tasking systems."
      ]
    }
  },
  {
    "question": "Phát biểu nào sau đây đúng về Dispatch Latency trong hệ điều hành?",
    "options": [
      "Là thời gian CPU thực thi một tiến trình từ đầu đến cuối.",
      "Là thời gian hệ điều hành cần để tạo tiến trình mới.",
      "Là thời gian giữa khi bộ lập lịch dừng một tiến trình và chuyển CPU sang tiến trình khác.",
      "Là thời gian truy xuất dữ liệu từ bộ nhớ chính."
    ],
    "answer": "C",
    "en": {
      "question": "Which statement is correct about Dispatch Latency?",
      "options": [
        "It is the time the CPU spends running a process from start to finish.",
        "It is the time the OS needs to create a new process.",
        "It is the time between the scheduler stopping one process and switching the CPU to another.",
        "It is the time needed to access data from main memory."
      ]
    }
  },
  {
    "question": "Cho 3 tiến trình sau (đơn vị: giây).\nÁp dụng thuật toán lập lịch FCFS (First Come First Serve), hãy tính Average Waiting Time của các tiến trình.",
    "options": [
      "3.00",
      "4.33",
      "4.00",
      "5.00"
    ],
    "answer": "B",
    "en": {
      "question": "Given the following 3 processes (unit: seconds).\nUsing FCFS (First Come First Serve) scheduling, compute the Average Waiting Time of the processes.",
      "options": [
        "3.00",
        "4.33",
        "4.00",
        "5.00"
      ]
    },
    "context": "Process | Arrival Time | Burst Time\nP1 | 0 | 5\nP2 | 1 | 6\nP3 | 2 | 3"
  },
  {
    "question": "Cho 3 tiến trình sau (đơn vị: giây).\nÁp dụng thuật toán lập lịch SJF (Shortest Job First - Non-preemptive), hãy tính Average Waiting Time của các tiến trình.",
    "options": [
      "2.33",
      "3.00",
      "3.67",
      "4.33"
    ],
    "answer": "C",
    "en": {
      "question": "Given the following 3 processes (unit: seconds).\nUsing SJF (Shortest Job First - Non-preemptive) scheduling, compute the Average Waiting Time of the processes.",
      "options": [
        "2.33",
        "3.00",
        "3.67",
        "4.33"
      ]
    },
    "context": "Process | Arrival Time | Burst Time\nP1 | 0 | 5\nP2 | 1 | 6\nP3 | 2 | 3"
  },
  {
    "question": "Cho 3 tiến trình sau (đơn vị: giây) và thuật toán lập lịch Round Robin (RR) với quantum = 2.\nHãy tính Average Waiting Time của các tiến trình.",
    "options": [
      "3.33",
      "4.00",
      "4.67",
      "5.33"
    ],
    "answer": "B",
    "en": {
      "question": "Given the following 3 processes (unit: seconds) and Round Robin (RR) scheduling with quantum = 2.\nCompute the Average Waiting Time of the processes.",
      "options": [
        "3.33",
        "4.00",
        "4.67",
        "5.33"
      ]
    },
    "context": "Process | Arrival Time | Burst Time\nP1 | 0 | 5\nP2 | 1 | 6\nP3 | 2 | 3"
  },
  {
    "question": "Cho 4 tiến trình sau (đơn vị: ms).\nÁp dụng thuật toán SRTF (Shortest Remaining Time First - Preemptive SJF), hãy tính Average Turnaround Time.",
    "options": [
      "10.25",
      "11.50",
      "13.00",
      "13.25"
    ],
    "answer": "C",
    "en": {
      "question": "Given the following 4 processes (unit: ms).\nUsing SRTF (Shortest Remaining Time First - Preemptive SJF), compute the Average Turnaround Time.",
      "options": [
        "10.25",
        "11.50",
        "13.00",
        "13.25"
      ]
    },
    "context": "Process | Arrival Time | Burst Time\nP1 | 0 | 8\nP2 | 1 | 4\nP3 | 2 | 9\nP4 | 3 | 5"
  },
  {
    "question": "Xét các phát biểu về việc áp dụng các giải thuật định thời CPU trong thực tế:\n(1) FCFS phù hợp cho các hệ thống xử lý bó (batch processing).\n(2) Round Robin thường được dùng cho các hệ thống tương tác vì cải thiện response time.\n(3) Priority Scheduling thường xuất hiện trong hệ điều hành thời gian thực.\n(4) Multilevel Feedback Queue được sử dụng nhiều trong hệ điều hành hiện đại do có thể thích nghi với nhiều loại workload.\nCó bao nhiêu phát biểu đúng?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "D",
    "en": {
      "question": "Consider these statements about applying CPU scheduling algorithms in practice:\n(1) FCFS suits batch-processing systems.\n(2) Round Robin is often used for interactive systems because it improves response time.\n(3) Priority Scheduling often appears in real-time operating systems.\n(4) Multilevel Feedback Queue is widely used in modern operating systems because it adapts to many kinds of workload.\nHow many of these statements are correct?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ]
    }
  },
  {
    "question": "Chọn phát biểu đúng về ảnh hưởng của Quantum Time trong giải thuật Round Robin:",
    "options": [
      "Quantum quá nhỏ giúp giảm số lần chuyển ngữ cảnh và tăng CPU utilization.",
      "Quantum quá lớn làm Round Robin hoạt động gần giống FCFS.",
      "Quantum càng nhỏ thì response time càng tăng.",
      "Quantum không ảnh hưởng đến hiệu năng của Round Robin."
    ],
    "answer": "B",
    "en": {
      "question": "Pick the correct statement about the effect of Quantum Time in Round Robin scheduling:",
      "options": [
        "A very small quantum reduces the number of context switches and raises CPU utilization.",
        "A very large quantum makes Round Robin behave close to FCFS.",
        "The smaller the quantum, the higher the response time.",
        "Quantum size has no effect on Round Robin's performance."
      ]
    }
  },
  {
    "question": "Xét hai process cùng thao tác trên biến dùng chung counter:\n\nProducer:\ncounter++;\n\nConsumer:\ncounter--;\n\nBiết rằng mỗi phép toán tăng/giảm không thực hiện nguyên tử (atomic) mà gồm nhiều bước đọc, xử lý và ghi dữ liệu. Phát biểu nào sau đây đúng?",
    "options": [
      "Giá trị cuối cùng của counter luôn không đổi.",
      "Có thể xảy ra dữ liệu không nhất quán do race condition.",
      "Hệ điều hành luôn tự động đồng bộ hai process.",
      "Race condition chỉ xảy ra trên hệ thống đa lõi."
    ],
    "answer": "B",
    "en": {
      "question": "Consider two processes operating on a shared variable counter:\n\nProducer:\ncounter++;\n\nConsumer:\ncounter--;\n\nEach increment/decrement is not atomic but consists of several read-modify-write steps. Which statement is correct?",
      "options": [
        "The final value of counter is always unchanged.",
        "Inconsistent data can occur due to a race condition.",
        "The OS always automatically synchronizes the two processes.",
        "A race condition can only happen on a multicore system."
      ]
    }
  },
  {
    "question": "Xét hai process P0 và P1 cùng gọi fork() để tạo process con. Hệ điều hành sử dụng biến dùng chung next_available_pid để cấp phát PID mới cho các process.\nNếu không có cơ chế mutual exclusion, điều gì có thể xảy ra?",
    "options": [
      "Hai process con có thể được cấp cùng một PID.",
      "Hệ điều hành luôn tự động tránh trùng PID.",
      "Một trong hai process sẽ bị deadlock.",
      "PID chỉ có thể trùng trên hệ thống đa CPU."
    ],
    "answer": "A",
    "en": {
      "question": "Processes P0 and P1 both call fork() to create a child. The OS uses a shared variable next_available_pid to assign new PIDs.\nWithout mutual exclusion, what could happen?",
      "options": [
        "The two child processes could be assigned the same PID.",
        "The OS always automatically avoids duplicate PIDs.",
        "One of the two processes will deadlock.",
        "PID duplication can only happen on a multi-CPU system."
      ]
    }
  },
  {
    "question": "Cấu trúc thông thường của một tiến trình trong bài toán Critical Section gồm những phần nào?",
    "options": [
      "Entry section, Critical section, Exit section, Remainder section.",
      "Ready section, Waiting section, Running section, Exit section.",
      "User section, Kernel section, Waiting section, Ready section.",
      "Input section, Processing section, Output section."
    ],
    "answer": "A",
    "en": {
      "question": "What is the usual structure of a process in the Critical Section problem?",
      "options": [
        "Entry section, Critical section, Exit section, Remainder section.",
        "Ready section, Waiting section, Running section, Exit section.",
        "User section, Kernel section, Waiting section, Ready section.",
        "Input section, Processing section, Output section."
      ]
    }
  },
  {
    "question": "Trong các trường hợp sau, trường hợp nào không thuộc bài toán Critical Section?",
    "options": [
      "Nhiều process cùng cập nhật biến đếm dùng chung.",
      "Nhiều thread cùng ghi dữ liệu vào một file.",
      "Hai process cùng truy cập bảng cấp phát bộ nhớ.",
      "Một process thực hiện tính toán trên biến cục bộ riêng của nó."
    ],
    "answer": "D",
    "en": {
      "question": "Which of the following is NOT an instance of the Critical Section problem?",
      "options": [
        "Multiple processes updating a shared counter.",
        "Multiple threads writing to the same file.",
        "Two processes accessing a shared memory-allocation table.",
        "A process computing on its own local variable."
      ]
    }
  },
  {
    "question": "Để giải quyết bài toán Critical Section, một lời giải đúng cần thỏa mãn những tính chất nào sau đây?",
    "options": [
      "Mutual Exclusion, Progress, Bounded Waiting.",
      "Deadlock Prevention, Paging, Scheduling.",
      "Starvation, Context Switching, Mutual Exclusion.",
      "Progress, Dispatching, Swapping."
    ],
    "answer": "A",
    "en": {
      "question": "A correct solution to the Critical Section problem must satisfy which properties?",
      "options": [
        "Mutual Exclusion, Progress, Bounded Waiting.",
        "Deadlock Prevention, Paging, Scheduling.",
        "Starvation, Context Switching, Mutual Exclusion.",
        "Progress, Dispatching, Swapping."
      ]
    }
  },
  {
    "question": "Phát biểu nào đúng về xử lý Critical Section trong hệ điều hành?",
    "options": [
      "Kernel preemptive không cho phép process bị chiếm quyền khi đang ở kernel mode.",
      "Kernel non-preemptive chạy đến khi thoát kernel mode, block hoặc tự nhường CPU.",
      "Kernel preemptive luôn không có race condition.",
      "Kernel non-preemptive cho phép process khác chiếm CPU bất kỳ lúc nào trong kernel mode."
    ],
    "answer": "B",
    "en": {
      "question": "Which statement is correct about handling the Critical Section in an OS?",
      "options": [
        "A preemptive kernel never allows a process to be preempted while in kernel mode.",
        "A non-preemptive kernel runs until the process exits kernel mode, blocks, or voluntarily yields the CPU.",
        "A preemptive kernel is always free of race conditions.",
        "A non-preemptive kernel lets another process take the CPU at any time while in kernel mode."
      ]
    }
  },
  {
    "question": "Xét lời giải đồng bộ sử dụng biến dùng chung turn:\n\nturn = i => P_i được phép vào critical section\n\nPhát biểu nào sau đây đúng về lời giải này?",
    "options": [
      "Thoả cả Mutual Exclusion và Progress.",
      "Vi phạm Mutual Exclusion nhưng thoả Progress.",
      "Thoả Mutual Exclusion nhưng vi phạm Progress.",
      "Vi phạm cả Mutual Exclusion và Bounded Waiting."
    ],
    "answer": "C",
    "en": {
      "question": "Consider a synchronization solution using a shared variable turn:\n\nturn = i => P_i is allowed into the critical section\n\nWhich statement about this solution is correct?",
      "options": [
        "It satisfies both Mutual Exclusion and Progress.",
        "It violates Mutual Exclusion but satisfies Progress.",
        "It satisfies Mutual Exclusion but violates Progress.",
        "It violates both Mutual Exclusion and Bounded Waiting."
      ]
    }
  },
  {
    "question": "Xét hai process sau sử dụng biến dùng chung turn:\n\nProcess P0\ndo {\n    while (turn != 0);\n    critical section\n    turn = 1;\n    remainder section\n} while (1);\n\nProcess P1\ndo {\n    while (turn != 1);\n    critical section\n    turn = 0;\n    remainder section\n} while (1);\n\nTrường hợp nào sau đây làm một process phải busy waiting vô hạn mặc dù critical section đang rỗng?",
    "options": [
      "turn = 0, P0 ở remainder section rất lâu và P1 muốn vào critical section.",
      "turn = 1, cả hai process cùng muốn vào critical section.",
      "turn được thay đổi sau mỗi lần vào critical section.",
      "Cả hai process đều liên tục vào critical section."
    ],
    "answer": "A",
    "en": {
      "question": "Consider two processes using a shared variable turn:\n\nProcess P0\ndo {\n    while (turn != 0);\n    critical section\n    turn = 1;\n    remainder section\n} while (1);\n\nProcess P1\ndo {\n    while (turn != 1);\n    critical section\n    turn = 0;\n    remainder section\n} while (1);\n\nWhich case forces a process into infinite busy waiting even though the critical section is empty?",
      "options": [
        "turn = 0, P0 stays in its remainder section for a long time while P1 wants to enter the critical section.",
        "turn = 1, and both processes want to enter the critical section.",
        "turn is changed after every entry into the critical section.",
        "Both processes keep entering the critical section continuously."
      ]
    }
  },
  {
    "question": "Xét lời giải đồng bộ sử dụng mảng cờ:\n\nflag[i] = true\n\nđể báo rằng process P_i muốn vào critical section.\n\nPhát biểu nào sau đây đúng?",
    "options": [
      "Có thể xảy ra trường hợp cả P0 và P1 cùng chờ vô hạn.",
      "Hai process có thể đồng thời vào critical section.",
      "Lời giải thoả cả Mutual Exclusion và Progress.",
      "Lời giải không sử dụng busy waiting."
    ],
    "answer": "A",
    "en": {
      "question": "Consider a synchronization solution using a flag array:\n\nflag[i] = true\n\nto indicate that process P_i wants to enter the critical section.\n\nWhich statement is correct?",
      "options": [
        "It's possible for both P0 and P1 to wait forever.",
        "Both processes can be in the critical section at the same time.",
        "The solution satisfies both Mutual Exclusion and Progress.",
        "The solution does not use busy waiting."
      ]
    }
  },
  {
    "question": "Xét đoạn chương trình sau:\n\nwhile (true){\n    flag[i] = true;\n    turn = j;\n    while (flag[j] && turn == j);\n\n    /* critical section */\n\n    flag[i] = false;\n\n    /* remainder section */\n}\n\nĐoạn chương trình trên là lời giải nào cho bài toán Critical Section và có thoả mãn các tính chất nào?",
    "options": [
      "Giải thuật Peterson, chỉ thoả Mutual Exclusion.",
      "Giải thuật Peterson, thoả cả Mutual Exclusion, Progress và Bounded Waiting.",
      "Giải thuật Dekker, chỉ thoả Progress.",
      "Giải thuật Test-and-Set, không thoả Bounded Waiting."
    ],
    "answer": "B",
    "en": {
      "question": "Consider the following program:\n\nwhile (true){\n    flag[i] = true;\n    turn = j;\n    while (flag[j] && turn == j);\n\n    /* critical section */\n\n    flag[i] = false;\n\n    /* remainder section */\n}\n\nWhich Critical Section solution is this, and which properties does it satisfy?",
      "options": [
        "Peterson's algorithm, satisfying only Mutual Exclusion.",
        "Peterson's algorithm, satisfying Mutual Exclusion, Progress and Bounded Waiting.",
        "Dekker's algorithm, satisfying only Progress.",
        "The Test-and-Set algorithm, not satisfying Bounded Waiting."
      ]
    }
  },
  {
    "question": "Xét hai process P0 và P1 sử dụng Peterson's Solution:\n\nwhile (true){\n    flag[i] = true;\n    turn = j;\n    while (flag[j] && turn == j);\n\n    /* critical section */\n\n    flag[i] = false;\n\n    /* remainder section */\n}\n\nGiả sử ban đầu: flag[0] = flag[1] = false\nvà các bước thực thi xảy ra theo thứ tự:\nS1: P0 -> flag[0] = true\nS2: P1 -> flag[1] = true\nS3: P1 -> turn = 0\nS4: P0 -> turn = 1\nS5: P0 -> while\nS6: P1 -> while\n\nSau bước S6, process nào sẽ được vào critical section trước?",
    "options": [
      "Chỉ P0",
      "Chỉ P1",
      "Cả hai cùng vào",
      "Cả hai bị chặn"
    ],
    "answer": "B",
    "en": {
      "question": "Consider P0 and P1 using Peterson's Solution:\n\nwhile (true){\n    flag[i] = true;\n    turn = j;\n    while (flag[j] && turn == j);\n\n    /* critical section */\n\n    flag[i] = false;\n\n    /* remainder section */\n}\n\nAssume initially: flag[0] = flag[1] = false\nand execution proceeds in this order:\nS1: P0 -> flag[0] = true\nS2: P1 -> flag[1] = true\nS3: P1 -> turn = 0\nS4: P0 -> turn = 1\nS5: P0 -> while\nS6: P1 -> while\n\nAfter step S6, which process enters the critical section first?",
      "options": [
        "Only P0",
        "Only P1",
        "Both enter together",
        "Both are blocked"
      ]
    }
  },
  {
    "question": "Vì sao Peterson's Solution có thể không hoạt động chính xác trên các kiến trúc hiện đại?",
    "options": [
      "Vì hệ điều hành không hỗ trợ mutual exclusion.",
      "Vì compiler hoặc CPU có thể thực hiện instruction reordering.",
      "Vì Peterson's Solution chỉ dùng được cho một process.",
      "Vì biến flag không thể dùng trong đa luồng."
    ],
    "answer": "B",
    "en": {
      "question": "Why might Peterson's Solution fail to work correctly on modern architectures?",
      "options": [
        "Because the OS does not support mutual exclusion.",
        "Because the compiler or CPU may reorder instructions.",
        "Because Peterson's Solution only works for a single process.",
        "Because a flag variable cannot be used across threads."
      ]
    }
  },
  {
    "question": "Vai trò của memory_barrier() trong chương trình đa luồng là gì?",
    "options": [
      "Tăng tốc độ thực thi của thread bằng cách bỏ qua đồng bộ.",
      "Ngăn CPU hoặc compiler đổi thứ tự các thao tác bộ nhớ quan trọng.",
      "Cho phép nhiều thread cùng vào critical section.",
      "Thay thế hoàn toàn semaphore và mutex."
    ],
    "answer": "B",
    "en": {
      "question": "What is the role of memory_barrier() in a multithreaded program?",
      "options": [
        "Speeding up thread execution by skipping synchronization.",
        "Preventing the CPU or compiler from reordering important memory operations.",
        "Allowing multiple threads into the critical section at once.",
        "Fully replacing semaphores and mutexes."
      ]
    }
  },
  {
    "question": "Chọn phát biểu đúng về hai lệnh đồng bộ phần cứng test_and_set() và compare_and_swap():",
    "options": [
      "Cả hai lệnh đều được thực thi nguyên tử (atomic).",
      "test_and_set() chỉ đọc dữ liệu mà không thay đổi giá trị.",
      "compare_and_swap() luôn thay đổi giá trị của biến.",
      "Hai lệnh trên không thể dùng để xây dựng mutual exclusion."
    ],
    "answer": "A",
    "en": {
      "question": "Pick the correct statement about the hardware synchronization instructions test_and_set() and compare_and_swap():",
      "options": [
        "Both instructions execute atomically.",
        "test_and_set() only reads data without changing its value.",
        "compare_and_swap() always changes the variable's value.",
        "Neither instruction can be used to build mutual exclusion."
      ]
    }
  },
  {
    "question": "Phát biểu nào mô tả đúng nhất về đặc tính của lệnh Compare-And-Swap (CAS) trong cơ chế đồng bộ?",
    "options": [
      "CAS đọc dữ liệu và cập nhật dữ liệu thành nhiều bước độc lập để tăng hiệu suất.",
      "CAS đảm bảo thao tác kiểm tra và cập nhật dữ liệu được thực hiện như một thao tác không thể bị xen giữa.",
      "CAS chỉ hoạt động đúng trên hệ thống đơn lõi (single-core).",
      "CAS yêu cầu semaphore để đảm bảo tính đúng đắn."
    ],
    "answer": "B",
    "en": {
      "question": "Which statement best describes Compare-And-Swap (CAS) in synchronization?",
      "options": [
        "CAS reads and updates data as several independent steps to boost performance.",
        "CAS ensures the check-and-update operation happens as a single operation that cannot be interrupted.",
        "CAS only works correctly on single-core systems.",
        "CAS requires a semaphore to guarantee correctness."
      ]
    }
  },
  {
    "question": "Phát biểu nào đúng về atomic variable?",
    "options": [
      "Atomic variable cho phép nhiều thread cập nhật dữ liệu mà không cần đồng bộ.",
      "Atomic variable đảm bảo thao tác cập nhật dữ liệu diễn ra không bị ngắt quãng.",
      "Atomic variable chỉ dùng được với kiểu dữ liệu chuỗi ký tự.",
      "Atomic variable luôn cần semaphore để hoạt động đúng."
    ],
    "answer": "B",
    "en": {
      "question": "Which statement is correct about atomic variables?",
      "options": [
        "An atomic variable lets multiple threads update it without any synchronization.",
        "An atomic variable guarantees its update happens without being interrupted.",
        "An atomic variable only works with string data types.",
        "An atomic variable always needs a semaphore to work correctly."
      ]
    }
  },
  {
    "question": "Chọn phát biểu đúng về mutex lock trong cơ chế đồng bộ:",
    "options": [
      "Mutex lock loại bỏ hoàn toàn busy waiting.",
      "Các thao tác acquire() và release() không cần thực hiện atomic.",
      "Mutex lock sử dụng busy waiting nên còn được gọi là spinlock.",
      "Mutex lock cho phép nhiều process cùng vào critical section nếu CPU đủ mạnh."
    ],
    "answer": "C",
    "en": {
      "question": "Pick the correct statement about mutex locks:",
      "options": [
        "A mutex lock fully eliminates busy waiting.",
        "The acquire() and release() operations need not be atomic.",
        "A mutex lock that uses busy waiting is also called a spinlock.",
        "A mutex lock lets multiple processes into the critical section if the CPU is fast enough."
      ]
    }
  },
  {
    "question": "Đoạn mã sau đang hiện thực cơ chế đồng bộ nào:\n\nboolean available = true;\n\nacquire() {\n    while (!available)\n        ; /* busy waiting */\n    available = false;\n}\n\nrelease() {\n    available = true;\n}\n\nwhile (true) {\n    acquire();\n\n    critical section;\n\n    release();\n\n    remainder section;\n}",
    "options": [
      "Semaphore counting",
      "Peterson's Solution",
      "Mutex Lock",
      "Monitor"
    ],
    "answer": "C",
    "en": {
      "question": "Which synchronization mechanism does the following code implement?\n\nboolean available = true;\n\nacquire() {\n    while (!available)\n        ; /* busy waiting */\n    available = false;\n}\n\nrelease() {\n    available = true;\n}\n\nwhile (true) {\n    acquire();\n\n    critical section;\n\n    release();\n\n    remainder section;\n}",
      "options": [
        "Counting semaphore",
        "Peterson's Solution",
        "Mutex Lock",
        "Monitor"
      ]
    }
  },
  {
    "question": "Cho hai process sử dụng semaphore như sau:\n\nProcess P1:\nwhile (1) {\n    wait(S1);\n\n    Critical Section;\n\n    signal(S2);\n}\n\nProcess P2:\nwhile (1) {\n    wait(S2);\n\n    Critical Section;\n\n    signal(S1);\n}\n\nS1 = 1;\nS2 = 0;\n\nThứ tự thực thi các Critical Section sẽ là:",
    "options": [
      "P1, P1, P2, P2, ...",
      "P1, P2, P1, P2, ...",
      "P2, P1, P2, P1, ...",
      "Không xác định"
    ],
    "answer": "B",
    "en": {
      "question": "Given two processes using semaphores:\n\nProcess P1:\nwhile (1) {\n    wait(S1);\n\n    Critical Section;\n\n    signal(S2);\n}\n\nProcess P2:\nwhile (1) {\n    wait(S2);\n\n    Critical Section;\n\n    signal(S1);\n}\n\nS1 = 1;\nS2 = 0;\n\nWhat is the execution order of the critical sections?",
      "options": [
        "P1, P1, P2, P2, ...",
        "P1, P2, P1, P2, ...",
        "P2, P1, P2, P1, ...",
        "Undetermined"
      ]
    }
  },
  {
    "question": "Chọn phát biểu đúng về Counting Semaphore và Binary Semaphore:",
    "options": [
      "Counting semaphore chỉ nhận giá trị 0 hoặc 1, còn binary semaphore nhận mọi số nguyên dương.",
      "Binary semaphore chỉ nhận giá trị 0 hoặc 1, còn counting semaphore có thể nhận nhiều giá trị nguyên khác nhau.",
      "Counting semaphore và binary semaphore hoàn toàn giống nhau.",
      "Binary semaphore được dùng để đếm số process đang chạy, còn counting semaphore dùng cho mutual exclusion."
    ],
    "answer": "B",
    "en": {
      "question": "Pick the correct statement about Counting Semaphore and Binary Semaphore:",
      "options": [
        "A counting semaphore only takes 0 or 1, while a binary semaphore takes any positive integer.",
        "A binary semaphore only takes 0 or 1, while a counting semaphore can take many different integer values.",
        "Counting and binary semaphores are exactly the same.",
        "A binary semaphore is used to count running processes, while a counting semaphore is used for mutual exclusion."
      ]
    }
  },
  {
    "question": "Trường hợp nào sau đây có thể xảy ra khi sử dụng semaphore không đúng cách?",
    "options": [
      "Gọi signal(mutex) trước wait(mutex) có thể làm mất tính đồng bộ.",
      "Gọi wait(mutex) hai lần liên tiếp có thể gây deadlock.",
      "Bỏ quên wait() hoặc signal() có thể làm chương trình hoạt động sai.",
      "Tất cả các ý trên đều đúng."
    ],
    "answer": "D",
    "en": {
      "question": "Which of the following can happen when a semaphore is used incorrectly?",
      "options": [
        "Calling signal(mutex) before wait(mutex) can break synchronization.",
        "Calling wait(mutex) twice in a row can cause a deadlock.",
        "Forgetting wait() or signal() can make the program behave incorrectly.",
        "All of the above."
      ]
    }
  },
  {
    "question": "Chọn phát biểu đúng về Monitor và Condition Variable:",
    "options": [
      "Nhiều process có thể đồng thời thực thi bên trong cùng một monitor.",
      "Lời gọi x.signal() luôn làm process gọi bị block ngay lập tức.",
      "Nếu không có process nào đang chờ tại x.wait(), lời gọi x.signal() sẽ không có tác dụng.",
      "Condition variable thay thế hoàn toàn mutex và mutual exclusion."
    ],
    "answer": "C",
    "en": {
      "question": "Pick the correct statement about Monitors and Condition Variables:",
      "options": [
        "Multiple processes can execute inside the same monitor at the same time.",
        "Calling x.signal() always blocks the calling process immediately.",
        "If no process is waiting on x.wait(), calling x.signal() has no effect.",
        "A condition variable fully replaces mutexes and mutual exclusion."
      ]
    }
  },
  {
    "question": "[HK242] Giải thuật nào sau đây có thời gian đợi trung bình tốt nhất trong hầu hết các trường hợp?",
    "options": [
      "FCFS",
      "SRTF",
      "SJF",
      "Round-robin"
    ],
    "answer": "B",
    "en": {
      "question": "[HK242] Which algorithm gives the best average waiting time in most cases?",
      "options": [
        "FCFS",
        "SRTF",
        "SJF",
        "Round-robin"
      ]
    }
  },
  {
    "question": "[HK242] Thuật toán lập lịch nào phù hợp nhất cho các hệ điều hành thời gian thực?",
    "options": [
      "FCFS",
      "Định thời ưu tiên",
      "SJF",
      "Round Robin"
    ],
    "answer": "B",
    "en": {
      "question": "[HK242] Which scheduling algorithm is most suitable for real-time operating systems?",
      "options": [
        "FCFS",
        "Priority scheduling",
        "SJF",
        "Round Robin"
      ]
    }
  },
  {
    "question": "[HK242] Giải thuật định thời CPU là Priority và preemptive với giá trị Priority nhỏ hơn có độ ưu tiên cao hơn, hãy tính thời gian chờ trung bình (avg. waiting time) của các quá trình thực thi. Cho bảng thông tin các quá trình gồm (Burst time tính bằng giây):",
    "options": [
      "1,5.",
      "6,4.",
      "2,8.",
      "Số khác."
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] Using preemptive Priority CPU scheduling where a lower priority number means higher priority, compute the average waiting time of the processes. Process table (burst time in seconds):",
      "options": [
        "1.5",
        "6.4",
        "2.8",
        "Other"
      ]
    },
    "context": "Process | Arrival time | Burst time | Priority\nP0 | 0 | 8 | 4\nP1 | 2 | 2 | 2\nP2 | 4 | 4 | 2\nP3 | 5 | 1 | 1\nP4 | 6 | 3 | 1"
  },
  {
    "question": "[HK242] Trong thuật toán Round Robin, yếu tố nào ảnh hưởng trực tiếp đến hiệu suất định thời?",
    "options": [
      "Số lượng quá trình thực thi đang trong hàng chờ.",
      "Tốc độ của CPU.",
      "Số hàng chờ phân theo độ ưu tiên.",
      "Thời gian một quá trình được thực thi trên CPU."
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] In Round Robin, which factor directly affects scheduling performance?",
      "options": [
        "The number of processes currently in the queue.",
        "The CPU's clock speed.",
        "The number of priority-based queues.",
        "The time quantum a process gets on the CPU."
      ]
    }
  },
  {
    "question": "[HK242] Giải thuật định thời CPU là SRTF, hãy tính thời gian xoay vòng trung bình (avg. turnaround time) của các quá trình thực thi. Cho bảng thông tin các quá trình gồm (Burst time tính bằng giây):",
    "options": [
      "4,6.",
      "6,4.",
      "Số khác.",
      "8,6."
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] Using SRTF CPU scheduling, compute the average turnaround time of the processes. Process table (burst time in seconds):",
      "options": [
        "4.6",
        "6.4",
        "Other",
        "8.6"
      ]
    },
    "context": "Process | Arrival time | Burst time (giây)\nP0 | 1 | 10\nP1 | 2 | 4\nP2 | 3 | 1\nP3 | 4 | 6\nP4 | 6 | 2"
  },
  {
    "question": "[HK242] Giải thuật định thời nào sau đây không có tình trạng trì hoãn vô hạn định?",
    "options": [
      "SJF.",
      "SRTF.",
      "Priority scheduling.",
      "FCFS."
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] Which scheduling algorithm never suffers from indefinite postponement (starvation)?",
      "options": [
        "SJF.",
        "SRTF.",
        "Priority scheduling.",
        "FCFS."
      ]
    }
  },
  {
    "question": "[HK242] Chiến lược sử dụng biến đơn nguyên (atomic variable) phù hợp cho ngữ cảnh nào dưới đây?",
    "options": [
      "Nhiều luồng thực thi cùng tải về các phần khác nhau của một tập tin từ Internet.",
      "Một chương trình phân tán đếm số lần xuất hiện của các từ trong một văn bản.",
      "Các công việc song song yêu cầu thứ tự thực thi phải được đảm bảo.",
      "Một web server thống kê số lượng yêu cầu truy cập tới hệ thống."
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] An atomic variable best suits which of the following scenarios?",
      "options": [
        "Multiple threads downloading different parts of the same file from the Internet.",
        "A distributed program counting how often words appear in a text.",
        "Parallel jobs that require a guaranteed execution order.",
        "A web server counting the number of requests it receives."
      ]
    }
  },
  {
    "question": "[HK242] Trong mô hình lập trình luồng thực thi không tường minh, chọn phát biểu đúng về ưu điểm của Thread Pool.",
    "options": [
      "Tạo một luồng thực thi mới khi người dùng gửi yêu cầu hàm thực thi và kết thúc khi hoàn tất.",
      "Tạo một nhóm các luồng thực thi dựa trên tỷ lệ quy mô phần cứng và kích thước bài toán và ánh xạ theo tỷ lệ để thực thi công việc.",
      "Tạo một số lượng luồng thực thi vừa chỉ gán tác vụ khi người dùng gửi yêu cầu để giảm thời gian mỗi lần tạo luồng.",
      "Sử dụng hàng đợi FIFO để quản lý và lần lượt ánh xạ các tác vụ theo hàng đợi vào luồng tương ứng để thực thi."
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] In implicit threading, pick the correct statement about the advantage of a Thread Pool.",
      "options": [
        "It creates a new thread whenever the user requests a function call, and ends it when that finishes.",
        "It creates a group of threads sized by hardware scale and problem size, mapped proportionally to do the work.",
        "It creates a modest, pre-sized set of threads and just assigns tasks to them on request, cutting down thread-creation time.",
        "It uses a FIFO queue to manage and map tasks to the corresponding threads in order for execution."
      ]
    }
  },
  {
    "question": "[HK242] Cấu trúc monitor đảm bảo rằng",
    "options": [
      "N quá trình có thể thực thi trong monitor tại cùng thời điểm (N > 1).",
      "Hàng đợi chỉ có một quá trình thực thi tại một thời điểm cụ thể.",
      "Tại một thời điểm chỉ có để một quá trình thực thi trong monitor.",
      "Các quá trình chờ tại một rào chắn (barrier) để thực hiện cùng lúc."
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] The monitor construct guarantees that",
      "options": [
        "N processes can execute inside the monitor at the same time (N > 1).",
        "Only one process is in the queue at a specific time.",
        "Only one process at a time can execute inside the monitor.",
        "Processes wait at a barrier to proceed all at once."
      ]
    }
  },
  {
    "question": "[HK242] Câu nào sau đây không đúng về giao tiếp truyền thông điệp?",
    "options": [
      "Trong blocking receive, bên nhận bị khóa cho đến khi nhận được một thông điệp.",
      "Trong non-blocking send, bên gửi truyền thông điệp và tiếp tục.",
      "Trong non-blocking receive, bên nhận nhận một thông điệp hợp lệ hoặc rỗng.",
      "Trong blocking send, bên gửi bị khóa cho đến khi thông điệp được gửi."
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] Which statement about message-passing communication is INCORRECT?",
      "options": [
        "With blocking receive, the receiver is blocked until a message arrives.",
        "With non-blocking send, the sender sends the message and continues.",
        "With non-blocking receive, the receiver gets either a valid message or null.",
        "With blocking send, the sender is blocked until the message has been sent."
      ]
    }
  },
  {
    "question": "[HK242] Trong cơ chế loại trừ tương hỗ, việc sử dụng cơ chế spinlock có thời gian chờ lâu sẽ gây ảnh hưởng như thế nào?",
    "options": [
      "Tác vụ lãng phí thời gian được cấp CPU làm giảm hiệu suất sử dụng hệ thống.",
      "Tác vụ được chuyển sang trạng thái sleep.",
      "Tác vụ bị tạm dừng và swap out ra khỏi hệ thống.",
      "Tác vụ phải tiếp tục chờ trong hàng đợi các quá trình bị nghẽn."
    ],
    "answer": "A",
    "en": {
      "question": "[HK242] In mutual exclusion, what is the effect of a spinlock with a long wait time?",
      "options": [
        "The task wastes its CPU time slice, lowering overall system efficiency.",
        "The task is moved to the sleep state.",
        "The task is suspended and swapped out of the system.",
        "The task must keep waiting in the blocked-process queue."
      ]
    }
  },
  {
    "question": "[HK242] Cơ chế nào giúp thay đổi trạng thái của một quá trình thực thi?",
    "options": [
      "Thực thi lời gọi hệ thống kill để gửi signal.",
      "Giao tiếp qua cơ chế giao tiếp giữa các quá trình thực thi (IPC).",
      "Xử lý đồng bộ bằng mutex.",
      "Khởi tạo tiến trình bằng execv."
    ],
    "answer": "A",
    "en": {
      "question": "[HK242] Which mechanism can change the state of a running process?",
      "options": [
        "Issuing the kill system call to send a signal.",
        "Communicating through inter-process communication (IPC).",
        "Synchronizing with a mutex.",
        "Starting a process with execv."
      ]
    }
  },
  {
    "question": "[HK242] Vì sao cần có kỹ thuật giao tiếp để chia sẻ dữ liệu giữa các quá trình (IPC) nhưng không cần trong giao tiếp giữa các luồng thread?",
    "options": [
      "Vì luồng là một hiện thực gọn nhẹ lightweight của process.",
      "Vì luồng hỗ trợ cơ chế tạo một tập hợp pooling theo nhóm.",
      "Vì luồng có cơ chế đồng bộ giữa các chồng thực thi stack.",
      "Vì luồng dùng chung đường truy xuất bộ nhớ memory bus."
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] Why is IPC needed to share data between processes but not between threads?",
      "options": [
        "Because a thread is a lightweight implementation of a process.",
        "Because threads support grouping into thread pools.",
        "Because threads synchronize across their execution stacks.",
        "Because threads already share the same memory address space."
      ]
    }
  },
  {
    "question": "[HK242] Thành phần nào KHÔNG được chia sẻ giữa các luồng thực thi (thread) trong một quá trình thực thi đa luồng?",
    "options": [
      "Code.",
      "Data.",
      "Stack.",
      "Files."
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] Which component is NOT shared between threads of the same multithreaded process?",
      "options": [
        "Code.",
        "Data.",
        "Stack.",
        "Files."
      ]
    }
  },
  {
    "question": "[HK242] Lệnh CompareAndSwap (CAS) được thực thi",
    "options": [
      "Có thể bị ngắt (interrupted).",
      "Định kỳ.",
      "Có thể bị chia nhỏ thành nhiều CPU instruction.",
      "Đơn nguyên (atomic)."
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] The CompareAndSwap (CAS) instruction executes",
      "options": [
        "In a way that can be interrupted.",
        "Periodically.",
        "As several separate CPU instructions.",
        "Atomically."
      ]
    }
  },
  {
    "question": "[HK242] Mô hình nào thích hợp hơn cho việc truyền dữ liệu giữa các quá trình thực thi đang chạy trên các CPU khác nhau?",
    "options": [
      "Truyền thông điệp.",
      "Bộ nhớ chia sẻ.",
      "Bộ nhớ BIOS.",
      "Thiết bị lưu trữ USB."
    ],
    "answer": "A",
    "en": {
      "question": "[HK242] Which model is more suitable for transferring data between processes running on different CPUs?",
      "options": [
        "Message passing.",
        "Shared memory.",
        "BIOS memory.",
        "A USB storage device."
      ]
    }
  },
  {
    "question": "[HK242] Stack của luồng thực thi và stack của quá trình thực thi được lưu ở đâu?",
    "options": [
      "Trong mã thực thi của chương trình.",
      "Trong phân đoạn dữ liệu data segment.",
      "Trong bộ nhớ chính của hệ thống.",
      "Trong thanh bộ ghi của CPU."
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] Where are a thread's stack and a process's stack stored?",
      "options": [
        "In the program's executable code.",
        "In the data segment.",
        "In the system's main memory.",
        "In the CPU's registers."
      ]
    }
  },
  {
    "question": "[HK242] Một lệnh máy được coi là đơn nguyên khi nào?",
    "options": [
      "Khi lệnh đó được thực thi trong 1 clock cycle duy nhất.",
      "Khi lệnh đó được sử dụng cho tất cả các lời gọi hệ thống trong hệ điều hành.",
      "Khi lệnh đó dùng cho cơ chế đồng bộ hoá.",
      "Khi lệnh đó không bị ngắt khi đang thực thi."
    ],
    "answer": "D",
    "en": {
      "question": "[HK242] A machine instruction is considered atomic when",
      "options": [
        "It executes in a single clock cycle.",
        "It is used by every system call in the OS.",
        "It is used for synchronization.",
        "It cannot be interrupted while executing."
      ]
    }
  },
  {
    "question": "[HK242] Tất cả các quá trình thực thi đều dùng chung 1 semaphore mutex với giá trị khởi tạo là 1. Các quá trình đều thực thi đoạn mã nguồn dưới đây. Hãy chọn câu phát biểu đúng?\n\nsemaphore mutex S\n...\nsignal( S )\n//critical section\nwait( S )\n...",
    "options": [
      "Nhiều quá trình có thể thực thi vùng tranh chấp tại cùng một thời điểm.",
      "Tắc nghẽn (deadlock) sẽ xảy ra.",
      "Có thể xảy ra tình trạng trì hoãn vô hạn định.",
      "Việc thực thi được đảm bảo loại trừ tương hỗ."
    ],
    "answer": "A",
    "en": {
      "question": "[HK242] Every process shares one semaphore mutex initialized to 1. All processes run the code below. Which statement is correct?\n\nsemaphore mutex S\n...\nsignal( S )\n//critical section\nwait( S )\n...",
      "options": [
        "Multiple processes can be in the critical section at the same time.",
        "A deadlock will occur.",
        "Indefinite postponement (starvation) can occur.",
        "Mutual exclusion is guaranteed."
      ]
    }
  },
  {
    "question": "[HK242] Yêu cầu tiến trình cho một giải thuật đồng bộ hoá trên vùng tài nguyên bị tranh chấp có nghĩa là?",
    "options": [
      "Chỉ có một quá trình thực thi duy nhất được truy cập vào vùng tài nguyên bị tranh chấp.",
      "Nếu một quá trình thực thi đang chờ đã có số lần yêu cầu truy cập vùng tài nguyên bị tranh chấp quá một ngưỡng nào đó thì sẽ được ưu tiên khi vùng đó rảnh rỗi.",
      "Khi vùng tài nguyên bị tranh chấp vừa rảnh rỗi, một trong các quá trình thực thi đang chờ có thể truy cập ngay.",
      "Một quá trình thực thi truy cập vùng tài nguyên bị tranh chấp phải được đảm bảo không bị gián đoạn cho tới khi quá trình thực thi đó hoàn thành."
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] What does the \"request\" requirement of a synchronization algorithm for a contested resource mean?",
      "options": [
        "Only a single process may ever access the contested resource.",
        "If a waiting process's number of access requests exceeds some threshold, it gets priority once the resource is free.",
        "As soon as the contested resource becomes free, one of the waiting processes may access it right away.",
        "A process accessing the contested resource is guaranteed not to be interrupted until it finishes."
      ]
    }
  },
  {
    "question": "[HK242] Cơ chế nào gây ra sai sót khi hiện thực giải thuật Peterson's Lock?",
    "options": [
      "Bounded waiting",
      "Mutual exclusion.",
      "Instruction reordering",
      "Progress."
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] Which mechanism can cause Peterson's Lock to behave incorrectly in practice?",
      "options": [
        "Bounded waiting",
        "Mutual exclusion.",
        "Instruction reordering",
        "Progress."
      ]
    }
  },
  {
    "question": "[HK242] Cho 2 quá trình thực thi P1 và P2 như mô tả dưới đây. P1 và P2 cùng chạy với giá trị S1 và S2 được khởi tạo ngẫu nhiên. Hãy chọn phát biểu đúng.\n\nP1:\nwhile(S1==S2);\n//Critical section\nS1 = S2;\n\nP2:\nwhile(S1!=S2);\n//Critical section\nS2 = not(S1);",
    "options": [
      "Đảm bảo điều kiện loại trừ tương hỗ (mutual exclusion) nhưng không thoả điều kiện tiến trình (progress).",
      "Đảm bảo thoả cả hai điều kiện loại trừ tương hỗ và tiến trình.",
      "Đảm bảo điều kiện tiến trình nhưng không thoả điều kiện loại trừ tương hỗ.",
      "Các lựa chọn khác đều sai."
    ],
    "answer": "B",
    "en": {
      "question": "[HK242] Given processes P1 and P2 below, both run with S1 and S2 initialized randomly. Pick the correct statement.\n\nP1:\nwhile(S1==S2);\n//Critical section\nS1 = S2;\n\nP2:\nwhile(S1!=S2);\n//Critical section\nS2 = not(S1);",
      "options": [
        "It guarantees mutual exclusion but not progress.",
        "It guarantees both mutual exclusion and progress.",
        "It guarantees progress but not mutual exclusion.",
        "None of the other options are correct."
      ]
    }
  },
  {
    "question": "[HK242] Lợi ích của cơ chế đa luồng thực thi trên các nền tảng đơn nhân và đa nhân là:",
    "options": [
      "Luồng thực thi hỗ trợ cả hai môi trường để chia nhỏ thành các tác vụ độc lập.",
      "Luồng thực thi bị giới hạn hỗ trợ trên đơn nhân vì không hỗ trợ thực thi đồng thời.",
      "Luồng thực thi hỗ trợ trên nền tảng đa nhân và bị giới hạn chia sẻ giữa các nhân.",
      "Luồng thực thi hỗ trợ máy đơn nhân nhưng phải hoàn tất từng tác vụ rồi đến tác vụ kế tiếp."
    ],
    "answer": "A",
    "en": {
      "question": "[HK242] What is the benefit of multithreading on both single-core and multicore platforms?",
      "options": [
        "Threads work on both platforms, letting work be split into independent tasks.",
        "Threads only work on single-core systems because they don't support concurrent execution.",
        "Threads only work on multicore platforms and are limited in sharing across cores.",
        "Threads work on single-core machines but must finish one task before starting the next."
      ]
    }
  },
  {
    "question": "[HK242] Trong các cách sau, cách nào không sử dụng các luồng thực thi KHÔNG tường minh (implicit threading)?",
    "options": [
      "OpenMP.",
      "Intel Threading Building Blocks.",
      "Pthread.",
      "Grand Central Dispatch."
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] Which of the following is NOT an implicit-threading approach?",
      "options": [
        "OpenMP.",
        "Intel Threading Building Blocks.",
        "Pthread.",
        "Grand Central Dispatch."
      ]
    }
  },
  {
    "question": "[HK242] Cấu trúc nào sau đây không phải là cấu trúc có riêng của mỗi luồng thực thi?",
    "options": [
      "Program counter.",
      "CPU register.",
      "Code segment.",
      "Stack register."
    ],
    "answer": "C",
    "en": {
      "question": "[HK242] Which structure is NOT private to each thread?",
      "options": [
        "Program counter.",
        "CPU register.",
        "Code segment.",
        "Stack register."
      ]
    }
  },
  {
    "question": "[HK211] Giải thuật định thời CPU nào dưới đây phù hợp cho các ứng dụng I/O-bound?",
    "options": [
      "Round Robin với quantum time ngắn",
      "Shortest Job First",
      "FCFS",
      "SRTF"
    ],
    "answer": "A",
    "en": {
      "question": "[HK211] Which CPU scheduling algorithm suits I/O-bound applications best?",
      "options": [
        "Round Robin with a short time quantum",
        "Shortest Job First",
        "FCFS",
        "SRTF"
      ]
    }
  },
  {
    "question": "[HK211] Cơ chế ánh xạ user thread vào kernel thread nào sau đây giúp tránh tình trạng \"một thread bị block thì tất cả thread khác cũng bị ảnh hưởng\"?",
    "options": [
      "One-to-one và many-to-many",
      "Many-to-one và many-to-many",
      "Các cơ chế trong câu hỏi khác đều đúng",
      "Many-to-one và one-to-one"
    ],
    "answer": "A",
    "en": {
      "question": "[HK211] Which user-to-kernel thread mapping avoids \"one blocked thread blocking all other threads\"?",
      "options": [
        "One-to-one and many-to-many",
        "Many-to-one and many-to-many",
        "All of the other options are correct",
        "Many-to-one and one-to-one"
      ]
    }
  },
  {
    "question": "[HK211] Với cơ chế standard swapping, để kích hoạt việc swap một process ra khỏi bộ nhớ, hệ điều hành thường dựa trên sự chuyển trạng thái nào?",
    "options": [
      "Ready -> Running",
      "Running -> Ready",
      "Running -> Terminated",
      "Running -> Waiting"
    ],
    "answer": "D",
    "en": {
      "question": "[HK211] With standard swapping, which state transition typically triggers the OS to swap a process out of memory?",
      "options": [
        "Ready -> Running",
        "Running -> Ready",
        "Running -> Terminated",
        "Running -> Waiting"
      ]
    }
  },
  {
    "question": "[HK211] Cho hệ thống có 4 process như sau, sử dụng giải thuật Shortest Remaining Time First (SRTF). Process đến trước được ưu tiên khi hoà.\nTại thời điểm 4 quá trình nào đang thực thi",
    "options": [
      "P3",
      "P1",
      "P2",
      "P4"
    ],
    "answer": "C",
    "en": {
      "question": "[HK211] A system has 4 processes below, using Shortest Remaining Time First (SRTF). On a tie, the process that arrived earlier is favored.\nAt time 4, which process is running?",
      "options": [
        "P3",
        "P1",
        "P2",
        "P4"
      ]
    },
    "context": "Process | Arrival Time | Burst Time\nP1 | 0 | 6\nP2 | 1 | 3\nP3 | 2 | 1\nP4 | 3 | 2"
  },
  {
    "question": "[HK211] Cho các process sau:\n\nProcess P0\n{\n    while(true)\n    {\n        wait(s0);\n\n        print(\"Hello\");\n\n        signal(s1);\n        signal(s2);\n    }\n}\n\nProcess P1\n{\n    while(true)\n    {\n        wait(s1);\n        signal(s0);\n    }\n}\n\nProcess P2\n{\n    while(true)\n    {\n        wait(s2);\n        signal(s0);\n    }\n}\n\nGiả sử ban đầu: s0 = 1, s1 = 0, s2 = 0\n\nSố lần tối thiểu chuỗi \"Hello\" được in ra là:",
    "options": [
      "Ít nhất 2 lần",
      "Ít nhất 3 lần",
      "Đúng 2 lần",
      "Đúng 3 lần"
    ],
    "answer": "B",
    "en": {
      "question": "[HK211] Given the processes below:\n\nProcess P0\n{\n    while(true)\n    {\n        wait(s0);\n\n        print(\"Hello\");\n\n        signal(s1);\n        signal(s2);\n    }\n}\n\nProcess P1\n{\n    while(true)\n    {\n        wait(s1);\n        signal(s0);\n    }\n}\n\nProcess P2\n{\n    while(true)\n    {\n        wait(s2);\n        signal(s0);\n    }\n}\n\nAssume initially: s0 = 1, s1 = 0, s2 = 0\n\nWhat is the minimum number of times \"Hello\" is printed?",
      "options": [
        "At least 2 times",
        "At least 3 times",
        "Exactly 2 times",
        "Exactly 3 times"
      ]
    }
  },
  {
    "question": "[HK211] Tại sao các thread cần có thanh ghi (register) và stack riêng, trong khi code, data và files có thể chia sẻ?",
    "options": [
      "Giúp hệ điều hành ghi nhớ thread đang chạy trên CPU/lõi nào",
      "Vì các thread luôn chạy trên các CPU khác nhau",
      "Vì các thread thực thi độc lập và register/stack chứa trạng thái thực thi riêng của từng thread",
      "Giúp thread tăng tốc độ xử lý"
    ],
    "answer": "C",
    "en": {
      "question": "[HK211] Why do threads need their own registers and stack while code, data and files can be shared?",
      "options": [
        "It helps the OS remember which CPU/core each thread is running on",
        "Because threads always run on different CPUs",
        "Because threads execute independently, and registers/stack hold each thread's own execution state",
        "It helps threads process faster"
      ]
    }
  },
  {
    "question": "[HK211] Chờ đợi có giới hạn (bounded waiting) nghĩa là tồn tại một giới hạn về số lần các quá trình khác được phép vào vùng tranh chấp?",
    "options": [
      "Sau khi một quá trình yêu cầu vào vùng tranh chấp và trước khi yêu cầu đó được chấp nhận",
      "Sau khi các quá trình khác đều hoàn tất n lần vùng tranh chấp",
      "Trước khi một quá trình yêu cầu vào vùng tranh chấp",
      "Khi một quá trình khác đang ở trong vùng tranh chấp"
    ],
    "answer": "A",
    "en": {
      "question": "[HK211] Bounded waiting means there is a limit on how many times other processes may enter the critical section",
      "options": [
        "After a process requests entry to the critical section and before that request is granted",
        "After every other process has completed n entries into the critical section",
        "Before a process requests entry to the critical section",
        "While another process is currently inside the critical section"
      ]
    }
  },
  {
    "question": "[HK211] Một semaphore có giá trị khởi tạo: S = 5. Các process lần lượt thực hiện: 9 lần wait() và 3 lần signal(). Sau khi hoàn tất, phát biểu nào đúng?",
    "options": [
      "Không có process nào đang đợi trên semaphore",
      "Có 5 process có thể đồng thời vào vùng tranh chấp",
      "Nếu có yêu cầu mới đi vào vùng tranh chấp thì duy nhất 1 yêu cầu được đáp ứng",
      "Có 1 process đang đợi trên semaphore"
    ],
    "answer": "D",
    "en": {
      "question": "[HK211] A semaphore starts at S = 5. Processes perform 9 wait() calls and 3 signal() calls in total. Afterward, which statement is correct?",
      "options": [
        "No process is waiting on the semaphore",
        "5 processes can be in the critical section at once",
        "If a new request comes in, exactly one request will be granted",
        "1 process is waiting on the semaphore"
      ]
    }
  },
  {
    "question": "[HK211] Ngắt nào được sử dụng để phục vụ quá trình định thời (CPU scheduling) trong hệ điều hành?",
    "options": [
      "Ngắt đồng bộ và ngắt I/O",
      "Ngắt mềm (trap)",
      "Ngắt đồng hồ (timer interrupt)",
      "Ngắt I/O"
    ],
    "answer": "C",
    "en": {
      "question": "[HK211] Which interrupt is used to drive CPU scheduling in an OS?",
      "options": [
        "Synchronous interrupt and I/O interrupt",
        "Software interrupt (trap)",
        "Timer interrupt",
        "I/O interrupt"
      ]
    }
  },
  {
    "question": "[HK211] Cho một hệ thống gồm 4 process có thông tin như sau:\nCác process được cấp phát CPU theo giải thuật Shortest Remaining Time First (SRTF). Tính thời gian đợi trung bình.",
    "options": [
      "1,25",
      "2,75",
      "3,25",
      "2,25"
    ],
    "answer": "D",
    "en": {
      "question": "[HK211] A system has 4 processes with the following info:\nProcesses are scheduled with Shortest Remaining Time First (SRTF). Compute the average waiting time.",
      "options": [
        "1.25",
        "2.75",
        "3.25",
        "2.25"
      ]
    },
    "context": "Process | Thoi diem den | Burst time\nP1 | 0 | 6\nP2 | 1 | 3\nP3 | 2 | 1\nP4 | 3 | 2"
  },
  {
    "question": "[HK211] Cho một hệ thống gồm 5 process, tất cả đều đến tại thời điểm 0. Tính thời gian đợi trung bình khi sử dụng giải thuật Round Robin (RR) với quantum time q = 1.",
    "options": [
      "9",
      "6",
      "7",
      "8"
    ],
    "answer": "D",
    "en": {
      "question": "[HK211] A system has 5 processes, all arriving at time 0. Compute the average waiting time using Round Robin (RR) with time quantum q = 1.",
      "options": [
        "9",
        "6",
        "7",
        "8"
      ]
    },
    "context": "Process | Burst time\nP1 | 5\nP2 | 3\nP3 | 6\nP4 | 2\nP5 | 1"
  },
  {
    "question": "[HK211] Để định thời hệ thống cho các process thiên về tính toán (CPU-intensive process), giải thuật định thời CPU nào hợp lý nhất?",
    "options": [
      "SJF",
      "SRTF",
      "Priority (non-preemptive)",
      "Round Robin"
    ],
    "answer": "A",
    "en": {
      "question": "[HK211] To schedule a system of CPU-intensive processes, which CPU scheduling algorithm is most reasonable?",
      "options": [
        "SJF",
        "SRTF",
        "Priority (non-preemptive)",
        "Round Robin"
      ]
    }
  },
  {
    "question": "[HK211] Chọn phát biểu đúng về chuyển ngữ cảnh đối với user-level thread:",
    "options": [
      "Chuyển ngữ cảnh giữa hai thread không tốn CPU",
      "Chuyển ngữ cảnh giữa hai thread do bộ định thì thực hiện",
      "Chuyển ngữ cảnh giữa hai quá trình tốn ít chi phí CPU hơn giữa hai thread",
      "Chuyển ngữ cảnh giữa hai thread tốn ít chi phí CPU hơn giữa hai quá trình"
    ],
    "answer": "D",
    "en": {
      "question": "[HK211] Pick the correct statement about context switching for user-level threads:",
      "options": [
        "Switching between two threads costs no CPU time at all",
        "Switching between two threads is done by the scheduler",
        "Switching between two processes costs less CPU time than between two threads",
        "Switching between two threads costs less CPU time than between two processes"
      ]
    }
  },
  {
    "question": "[HK211] Chọn câu đúng về so sánh multiprogramming và time-sharing (multitasking):",
    "options": [
      "Multiprogramming làm giảm hiệu suất sử dụng CPU còn time-sharing thì làm tăng hiệu suất sử dụng CPU",
      "Hệ thống multiprogramming không chú trọng khả năng tương tác hiệu quả với người dùng, còn time-sharing không cung cấp khả năng tương tác hiệu quả với người dùng",
      "Trái với ý B",
      "Multiprogramming giữ nhiều công việc trong bộ nhớ còn time-sharing chỉ giữ một"
    ],
    "answer": "C",
    "en": {
      "question": "[HK211] Pick the correct statement comparing multiprogramming and time-sharing (multitasking):",
      "options": [
        "Multiprogramming lowers CPU utilization while time-sharing raises it",
        "Multiprogramming does not focus on effective user interaction, and neither does time-sharing",
        "The opposite of option B",
        "Multiprogramming keeps many jobs in memory while time-sharing keeps only one"
      ]
    }
  },
  {
    "question": "[HK211] Cho 3 công việc A, B, C có mức độ ưu tiên cao, trung bình, thấp. A và C có thao tác liên quan chia sẻ. A bị chặn gián tiếp bởi B vì C đang giữ tài nguyên trong vùng găng. Để giải quyết, hệ thống cho phép A tạm thời nhường mức ưu tiên cho C để C hoàn thành và giải phóng tài nguyên. Kỹ thuật này gọi là gì?",
    "options": [
      "Đảo ngược độ ưu tiên (Priority Inversion)",
      "Nâng cấp độ ưu tiên (Priority Boosting)",
      "Chỉnh sửa độ ưu tiên",
      "Loại bỏ độ ưu tiên"
    ],
    "answer": "B",
    "en": {
      "question": "[HK211] Jobs A, B, C have high, medium and low priority. A and C share a related resource. A is indirectly blocked by B because C is holding a resource inside its critical section. To fix this, the system lets A temporarily lend its priority to C so C can finish and release the resource. What is this technique called?",
      "options": [
        "Priority Inversion",
        "Priority Boosting (inheritance)",
        "Priority editing",
        "Priority removal"
      ]
    }
  },
  {
    "question": "[HK211] Một thread bao gồm:",
    "options": [
      "PC, stack, register và signal",
      "PC, code",
      "PC, code, stack",
      "PC, stack, register"
    ],
    "answer": "D",
    "en": {
      "question": "[HK211] A thread consists of:",
      "options": [
        "PC, stack, register and signal",
        "PC, code",
        "PC, code, stack",
        "PC, stack, register"
      ]
    }
  },
  {
    "question": "[HK181] Cho đoạn mã sử dụng semaphore sau:\n\nSemaphore S1, S2;\nS1.value = 0;\nS2.value = 1;\n\nProcess P1:\nwhile(1) {\n    wait(S1);\n    // Critical section\n    signal(S2);\n}\n\nProcess P2:\nwhile(1) {\n    wait(S2);\n    // Critical section\n    signal(S1);\n}\n\nPhát biểu nào sau đây đúng?",
    "options": [
      "P1 và P2 đều không thể vào vùng tranh chấp.",
      "P1 và P2 có thể đồng thời vào vùng tranh chấp.",
      "P1 không thể vào, P2 có thể vào vùng tranh chấp.",
      "P1 và P2 luân phiên vào vùng tranh chấp."
    ],
    "answer": "D",
    "en": {
      "question": "[HK181] Given the semaphore code below:\n\nSemaphore S1, S2;\nS1.value = 0;\nS2.value = 1;\n\nProcess P1:\nwhile(1) {\n    wait(S1);\n    // Critical section\n    signal(S2);\n}\n\nProcess P2:\nwhile(1) {\n    wait(S2);\n    // Critical section\n    signal(S1);\n}\n\nWhich statement is correct?",
      "options": [
        "Neither P1 nor P2 can ever enter the critical section.",
        "P1 and P2 can be in the critical section at the same time.",
        "P1 can never enter, but P2 can enter the critical section.",
        "P1 and P2 alternate entering the critical section."
      ]
    }
  },
  {
    "question": "[HK181] Trong thuật toán lập lịch Round Robin (RR), khi một tiến trình sử dụng hết quantum time, nó sẽ chuyển sang trạng thái nào?",
    "options": [
      "Chuyển từ trạng thái Running sang Ready.",
      "Chuyển từ trạng thái Running sang Blocked.",
      "Chuyển từ trạng thái Ready sang Running.",
      "Chuyển từ trạng thái Running sang Terminated."
    ],
    "answer": "A",
    "en": {
      "question": "[HK181] In Round Robin (RR), when a process uses up its time quantum, which state does it move to?",
      "options": [
        "From Running to Ready.",
        "From Running to Blocked.",
        "From Ready to Running.",
        "From Running to Terminated."
      ]
    }
  },
  {
    "question": "[HK181] Trạng thái của một tiến trình (process state) thể hiện điều gì?",
    "options": [
      "Hoạt động vừa được thực hiện của tiến trình.",
      "Hoạt động hiện tại của tiến trình.",
      "Hoạt động sẽ được thực hiện tiếp theo của tiến trình.",
      "Hoạt động cuối cùng của tiến trình."
    ],
    "answer": "B",
    "en": {
      "question": "[HK181] What does a process's state represent?",
      "options": [
        "The activity the process just performed.",
        "The process's current activity.",
        "The activity the process will perform next.",
        "The process's final activity."
      ]
    }
  },
  {
    "question": "[HK181] Chọn phát biểu đúng về chuyển ngữ cảnh (context switching) đối với user-level thread:",
    "options": [
      "Chuyển ngữ cảnh giữa hai thread không tốn chi phí sử dụng CPU.",
      "Chuyển ngữ cảnh giữa hai thread ít tốn chi phí hơn chuyển ngữ cảnh giữa hai tiến trình.",
      "Chuyển ngữ cảnh giữa hai thread do bộ định thời (scheduler) của hệ điều hành thực hiện.",
      "Chuyển ngữ cảnh giữa hai tiến trình ít tốn chi phí hơn chuyển ngữ cảnh giữa hai thread."
    ],
    "answer": "B",
    "en": {
      "question": "[HK181] Pick the correct statement about context switching for user-level threads:",
      "options": [
        "Switching between two threads costs no CPU time.",
        "Switching between two threads costs less than switching between two processes.",
        "Switching between two threads is done by the OS scheduler.",
        "Switching between two processes costs less than switching between two threads."
      ]
    }
  },
  {
    "question": "[HK181] Kỹ thuật nào sau đây KHÔNG phải là một cơ chế dùng để tránh xung đột dữ liệu (race condition)?",
    "options": [
      "Mutex lock",
      "Barrier",
      "Semaphore",
      "Spinlock"
    ],
    "answer": "B",
    "en": {
      "question": "[HK181] Which of the following is NOT a mechanism used to avoid race conditions?",
      "options": [
        "Mutex lock",
        "Barrier",
        "Semaphore",
        "Spinlock"
      ]
    }
  },
  {
    "question": "[HK181] Những giải thuật lập lịch CPU nào sau đây thuộc nhóm Non-Preemptive scheduling?",
    "options": [
      "First Come First Serve (FCFS), Shortest Job First (SJF), Round Robin (RR)",
      "SJF, SRTF, Priority Based (Preemptive), Round Robin",
      "FCFS, SJF, Priority Based (Non-preemptive)",
      "FCFS, SRTF, Round Robin"
    ],
    "answer": "C",
    "en": {
      "question": "[HK181] Which CPU scheduling algorithms belong to the Non-Preemptive group?",
      "options": [
        "First Come First Serve (FCFS), Shortest Job First (SJF), Round Robin (RR)",
        "SJF, SRTF, Priority Based (Preemptive), Round Robin",
        "FCFS, SJF, Priority Based (Non-preemptive)",
        "FCFS, SRTF, Round Robin"
      ]
    }
  },
  {
    "question": "[HK181] Trong các chiến lược lập lịch nào mà một process đang thực thi không thể bị chiếm quyền thực thi bởi process khác?",
    "options": [
      "FCFS và Shortest Remaining Time First",
      "Shortest Job First và FCFS",
      "Shortest Remaining Time First và Round Robin",
      "Round Robin và Shortest Job First"
    ],
    "answer": "B",
    "en": {
      "question": "[HK181] In which scheduling strategies can a running process never be preempted by another process?",
      "options": [
        "FCFS and Shortest Remaining Time First",
        "Shortest Job First and FCFS",
        "Shortest Remaining Time First and Round Robin",
        "Round Robin and Shortest Job First"
      ]
    }
  },
  {
    "question": "[HK181] Để định thời cho một hệ thống có các quá trình đa dạng (phân bố đều giữa CPU-bound và I/O-bound), giải pháp nào sau đây là hợp lí nhất?",
    "options": [
      "Shortest Remaining Time First",
      "Multilevel Queue",
      "Shortest Job First",
      "Multilevel Feedback Queue"
    ],
    "answer": "D",
    "en": {
      "question": "[HK181] To schedule a system with a diverse mix of processes (evenly split between CPU-bound and I/O-bound), which solution is most reasonable?",
      "options": [
        "Shortest Remaining Time First",
        "Multilevel Queue",
        "Shortest Job First",
        "Multilevel Feedback Queue"
      ]
    }
  },
  {
    "question": "[HK181] Lệnh nào sau đây dùng để lấy Process ID của Process cha (parent process) của tiến trình hiện tại?",
    "options": [
      "getpid()",
      "getcpid()",
      "getppid()",
      "getfpid()"
    ],
    "answer": "C",
    "en": {
      "question": "[HK181] Which call returns the Process ID of the current process's parent?",
      "options": [
        "getpid()",
        "getcpid()",
        "getppid()",
        "getfpid()"
      ]
    }
  },
  {
    "question": "[HK181] Chọn phát biểu đúng về process và thread:",
    "options": [
      "Các thread có thể đọc, ghi trong cùng không gian bộ nhớ còn các process thì không.",
      "Các thread có chung vùng stack còn các process thì có vùng stack riêng biệt.",
      "Các process có thể giao tiếp với nhau còn các thread thì không.",
      "Cả A, B và C đều sai."
    ],
    "answer": "A",
    "en": {
      "question": "[HK181] Pick the correct statement about processes and threads:",
      "options": [
        "Threads can read/write within the same memory space, while processes cannot.",
        "Threads share one stack region, while processes each have a separate stack region.",
        "Processes can communicate with each other, but threads cannot.",
        "A, B and C are all wrong."
      ]
    }
  },
  {
    "question": "[HK181] Quá trình P1 thực hiện lệnh X = X + 1 và P2 thực hiện lệnh X = X - 1, trong đó X là biến chia sẻ. Đây là ví dụ của:",
    "options": [
      "Race condition",
      "Producer - Consumer problem",
      "Bounded buffer problem",
      "Cả 3 đều đúng"
    ],
    "answer": "A",
    "en": {
      "question": "[HK181] Process P1 executes X = X + 1 and P2 executes X = X - 1, where X is a shared variable. This is an example of:",
      "options": [
        "Race condition",
        "Producer-Consumer problem",
        "Bounded buffer problem",
        "All 3 are correct"
      ]
    }
  },
  {
    "question": "[HK181] Sử dụng thuật toán định thời CPU Shortest Job First (SJF - Non-preemptive), thứ tự thực thi các process trong bảng sau là:",
    "options": [
      "P0, P2, P3, P1",
      "P0, P1, P2, P3",
      "P1, P0, P2, P3",
      "P2, P3, P1, P0"
    ],
    "answer": "A",
    "en": {
      "question": "[HK181] Using Shortest Job First (SJF - Non-preemptive) CPU scheduling, what is the execution order of the processes below?",
      "options": [
        "P0, P2, P3, P1",
        "P0, P1, P2, P3",
        "P1, P0, P2, P3",
        "P2, P3, P1, P0"
      ]
    },
    "context": "Process | Arrival Time | Burst Time\nP0 | 0 | 10\nP1 | 3 | 6\nP2 | 5 | 3\nP3 | 7 | 3"
  },
  {
    "question": "[HK181] Chọn phát biểu sai về các giải thuật định thời CPU:",
    "options": [
      "Giải thuật Shortest Remaining Time First (SRTF) có chế độ quyết định là Non-preemptive.",
      "Giải thuật First Come First Serve (FCFS) không bao giờ gây ra starvation.",
      "Muốn xây dựng giải thuật định thời tối ưu hoàn toàn cần phải biết trước tương lai.",
      "Giải thuật Round Robin (RR) nếu có quantum time nhỏ sẽ tăng tính đáp ứng hệ thống."
    ],
    "answer": "A",
    "en": {
      "question": "[HK181] Which statement about CPU scheduling algorithms is INCORRECT?",
      "options": [
        "Shortest Remaining Time First (SRTF) is a non-preemptive algorithm.",
        "First Come First Serve (FCFS) never causes starvation.",
        "Building a truly optimal scheduling algorithm would require knowing the future in advance.",
        "Round Robin (RR) with a small time quantum improves system responsiveness."
      ]
    }
  },
  {
    "question": "[HK181] 2 câu tiếp theo Cho các tiến trình P1, P2, P3, P4, P5 đều đến tại thời điểm 0 với bảng sau:\nTính Average Turnaround Time khi sử dụng Round Robin (quantum = 2).",
    "options": [
      "4.4",
      "8.8",
      "12.2",
      "6.0"
    ],
    "answer": "C",
    "en": {
      "question": "[HK181] Next 2 questions use processes P1..P5, all arriving at time 0, with the table below:\nCompute the Average Turnaround Time using Round Robin (quantum = 2).",
      "options": [
        "4.4",
        "8.8",
        "12.2",
        "6.0"
      ]
    },
    "context": "Process | Burst Time\nP1 | 10\nP2 | 1\nP3 | 2\nP4 | 4\nP5 | 5"
  },
  {
    "question": "[HK181] Tính Average Waiting Time khi sử dụng SJF (non-preemptive).",
    "options": [
      "6.2",
      "5.2",
      "4.6",
      "4.2"
    ],
    "answer": "C",
    "en": {
      "question": "[HK181] Compute the Average Waiting Time using SJF (non-preemptive), same processes as above.",
      "options": [
        "6.2",
        "5.2",
        "4.6",
        "4.2"
      ]
    },
    "context": "Process | Burst Time\nP1 | 10\nP2 | 1\nP3 | 2\nP4 | 4\nP5 | 5"
  },
  {
    "question": "[HK181] Một thread bao gồm các thông tin nào sau đây?",
    "options": [
      "Program counter, Code.",
      "Program counter, Code, Stack.",
      "Program counter, Stack và các Register.",
      "Program counter, Stack, Register và Signal."
    ],
    "answer": "C",
    "en": {
      "question": "[HK181] Which information does a thread consist of?",
      "options": [
        "Program counter, Code.",
        "Program counter, Code, Stack.",
        "Program counter, Stack and Registers.",
        "Program counter, Stack, Register and Signal."
      ]
    }
  },
  {
    "question": "[HK181] Các user-thread trong cùng một process chia sẻ các thông tin nào sau đây?",
    "options": [
      "Phần code và Program Counter của chương trình.",
      "Các quá trình con của chương trình.",
      "Code và data của process.",
      "Cả code, data và Program Counter của chương trình."
    ],
    "answer": "C",
    "en": {
      "question": "[HK181] Which information do user-threads within the same process share?",
      "options": [
        "The code and the program's program counter.",
        "The program's child processes.",
        "The process's code and data.",
        "The process's code, data and program counter all together."
      ]
    }
  },
  {
    "question": "[HK181] Định thời ngắn hạn (short-term scheduler) có nhiệm vụ gì?",
    "options": [
      "Chọn process nào sẽ đưa vào hàng đợi ready.",
      "Chọn process nào sẽ được cấp CPU để thực thi kế tiếp.",
      "Chọn process nào sẽ bị swap ra bộ nhớ phụ.",
      "Chọn chương trình nào sẽ được nạp vào bộ nhớ."
    ],
    "answer": "B",
    "en": {
      "question": "[HK181] What is the job of the short-term scheduler?",
      "options": [
        "Choosing which process enters the ready queue.",
        "Choosing which process gets the CPU to run next.",
        "Choosing which process gets swapped out to secondary storage.",
        "Choosing which program gets loaded into memory."
      ]
    }
  },
  {
    "question": "[HK181] Giả sử một process đang ở trạng thái Blocked do chờ thao tác I/O. Khi yêu cầu I/O hoàn thành, process sẽ chuyển sang trạng thái nào?",
    "options": [
      "Running",
      "Suspended",
      "Terminated",
      "Ready"
    ],
    "answer": "D",
    "en": {
      "question": "[HK181] A process is Blocked waiting for I/O. When the I/O request completes, which state does it move to?",
      "options": [
        "Running",
        "Suspended",
        "Terminated",
        "Ready"
      ]
    }
  },
  {
    "question": "[HK181] Khối chức năng nào chịu trách nhiệm chuyển CPU cho process được chọn bởi short-term scheduler?",
    "options": [
      "Scheduler",
      "Dispatcher",
      "Interrupt",
      "Cả A, B, C đều sai"
    ],
    "answer": "B",
    "en": {
      "question": "[HK181] Which component is responsible for actually handing the CPU to the process chosen by the short-term scheduler?",
      "options": [
        "Scheduler",
        "Dispatcher",
        "Interrupt",
        "None of A, B, C"
      ]
    }
  },
  {
    "question": "[HK181] Cho đoạn chương trình sau:\n\nint main(int argc, char * argv[])\n{\n    int pid = fork();\n\n    if (pid == 0)\n    {\n        fork();\n        fork();\n        printf(\"Chuc ban lam bai tot\\n\");\n    }\n    else\n    {\n        fork();\n    }\n}\n\nCó bao nhiêu dòng \"Chuc ban lam bai tot\" được in ra?",
    "options": [
      "2",
      "3",
      "4",
      "8"
    ],
    "answer": "C",
    "en": {
      "question": "[HK181] Given the following program:\n\nint main(int argc, char * argv[])\n{\n    int pid = fork();\n\n    if (pid == 0)\n    {\n        fork();\n        fork();\n        printf(\"Chuc ban lam bai tot\\n\");\n    }\n    else\n    {\n        fork();\n    }\n}\n\nHow many lines of \"Chuc ban lam bai tot\" are printed?",
      "options": [
        "2",
        "3",
        "4",
        "8"
      ]
    }
  },
  {
    "question": "[HK181] Quá trình (process) là gì?",
    "options": [
      "Một chương trình có thể thực thi được.",
      "Một thủ tục/hàm trong chương trình.",
      "Một chương trình đang thực thi.",
      "Một tập tin nhị phân có phần mở rộng .doc hoặc .pdf."
    ],
    "answer": "C",
    "en": {
      "question": "[HK181] What is a process?",
      "options": [
        "An executable program.",
        "A procedure/function within a program.",
        "A program that is currently executing.",
        "A binary file with a .doc or .pdf extension."
      ]
    }
  },
  {
    "question": "[HK181] Cho đoạn chương trình sau:\n\nint main(int argc, char *argv[]){\n    int pid = fork();\n\n    if (pid == 0) {\n        fork();\n        fork();\n        fork();\n    }\n    else {\n        fork();\n        fork();\n    }\n}\n\nHỏi có bao nhiêu process được tạo ra?",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "answer": "D",
    "en": {
      "question": "[HK181] Given the following program:\n\nint main(int argc, char *argv[]){\n    int pid = fork();\n\n    if (pid == 0) {\n        fork();\n        fork();\n        fork();\n    }\n    else {\n        fork();\n        fork();\n    }\n}\n\nHow many processes are created in total?",
      "options": [
        "6",
        "8",
        "10",
        "12"
      ]
    }
  },
  {
    "question": "[HK181] Hệ thống có 4 process như sau, sử dụng thuật toán SRTF (Shortest Remaining Time First). Nếu nhiều process có cùng remaining time thì process đến trước được ưu tiên.\nHãy tính Average Waiting Time.",
    "options": [
      "5.15",
      "5.25",
      "5.50",
      "5.75"
    ],
    "answer": "B",
    "en": {
      "question": "[HK181] A system has 4 processes below, scheduled with SRTF (Shortest Remaining Time First). On a tie in remaining time, the process that arrived earlier is favored.\nCompute the Average Waiting Time.",
      "options": [
        "5.15",
        "5.25",
        "5.50",
        "5.75"
      ]
    },
    "context": "Process | Arrival Time | CPU Burst\nA | 0 | 8\nB | 2 | 4\nC | 3 | 6\nD | 6 | 4"
  },
  {
    "question": "[HK181] Một thread bị block sẽ làm toàn bộ các thread khác trong cùng process bị block nếu hệ thống sử dụng mô hình multithreading nào?",
    "options": [
      "One-to-One",
      "Many-to-One",
      "Many-to-Many",
      "Tất cả đều sai"
    ],
    "answer": "B",
    "en": {
      "question": "[HK181] A blocked thread blocks every other thread in the same process under which threading model?",
      "options": [
        "One-to-One",
        "Many-to-One",
        "Many-to-Many",
        "None of the above"
      ]
    }
  },
  {
    "question": "[HK181] Trong hệ thống có nhiều CPU, các process được gọi là thực thi song song thực sự khi nào?",
    "options": [
      "Cùng chia sẻ thời gian của một CPU.",
      "Được thực thi trên các CPU khác nhau tại cùng một thời điểm.",
      "Cùng truy cập dữ liệu dùng chung.",
      "Có tương tác giao tiếp với nhau."
    ],
    "answer": "B",
    "en": {
      "question": "[HK181] On a multi-CPU system, when are processes said to truly execute in parallel?",
      "options": [
        "When they share time on a single CPU.",
        "When they run on different CPUs at the exact same moment.",
        "When they access shared data together.",
        "When they communicate with each other."
      ]
    }
  },
  {
    "question": "[HK181] Khi nhiều process thực thi đồng thời trên cùng dữ liệu và kết quả cuối cùng phụ thuộc vào thứ tự thực thi của các process, hiện tượng này được gọi là gì?",
    "options": [
      "Dynamic condition",
      "Race condition",
      "Essential condition",
      "Critical condition"
    ],
    "answer": "B",
    "en": {
      "question": "[HK181] When multiple processes run concurrently on the same data and the final result depends on their execution order, what is this phenomenon called?",
      "options": [
        "Dynamic condition",
        "Race condition",
        "Essential condition",
        "Critical condition"
      ]
    }
  },
  {
    "question": "[HK181] Khi một process đang ở trong vùng tranh chấp (critical section), không process nào khác được phép vào vùng đó. Điều kiện này gọi là gì?",
    "options": [
      "Bounded waiting",
      "Progress",
      "Mutual exclusion",
      "Critical exclusion"
    ],
    "answer": "C",
    "en": {
      "question": "[HK181] When a process is inside the critical section, no other process may enter it. What is this condition called?",
      "options": [
        "Bounded waiting",
        "Progress",
        "Mutual exclusion",
        "Critical exclusion"
      ]
    }
  },
  {
    "question": "[HK181] Chọn phát biểu đúng về critical section (vùng tranh chấp):",
    "options": [
      "Là đoạn mã lệnh được chia sẻ giữa nhiều process hoặc thread.",
      "Là vùng dữ liệu được chia sẻ giữa nhiều process hoặc thread.",
      "Là vùng dữ liệu được chia sẻ giữa nhiều process hoặc thread thực thi đồng thời.",
      "Là đoạn mã truy xuất vùng dữ liệu chia sẻ."
    ],
    "answer": "D",
    "en": {
      "question": "[HK181] Pick the correct statement about the critical section:",
      "options": [
        "It is code shared between multiple processes or threads.",
        "It is a data region shared between multiple processes or threads.",
        "It is a data region shared between multiple concurrently running processes or threads.",
        "It is the code that accesses a shared data region."
      ]
    }
  },
  {
    "question": "[HK181] Để đồng bộ các thread trong cùng một process, có thể sử dụng cơ chế nào sau đây?",
    "options": [
      "Semaphore",
      "Monitor",
      "Bakery algorithm",
      "Cả 3 đều đúng"
    ],
    "answer": "D",
    "en": {
      "question": "[HK181] Which mechanism can be used to synchronize threads within the same process?",
      "options": [
        "Semaphore",
        "Monitor",
        "Bakery algorithm",
        "All 3 are correct"
      ]
    }
  },
  {
    "question": "[HK181] Chọn phát biểu đúng khi so sánh các kỹ thuật đồng bộ:",
    "options": [
      "Với kỹ thuật busy-waiting, process đang chờ sẽ chuyển sang trạng thái blocked.",
      "Với kỹ thuật không busy-waiting, khi process được wake-up sẽ lập tức chuyển sang running.",
      "Busy-waiting giúp giảm số lần context switch so với kỹ thuật không busy-waiting.",
      "Kỹ thuật không busy-waiting sử dụng CPU kém hiệu quả hơn busy-waiting."
    ],
    "answer": "C",
    "en": {
      "question": "[HK181] Pick the correct statement when comparing synchronization techniques:",
      "options": [
        "With busy-waiting, the waiting process moves to the blocked state.",
        "With non-busy-waiting, a woken-up process immediately moves to running.",
        "Busy-waiting reduces the number of context switches compared to non-busy-waiting.",
        "Non-busy-waiting uses the CPU less efficiently than busy-waiting."
      ]
    }
  },
  {
    "question": "[HK181] Cơ chế loại trừ tranh chấp nào sau đây KHÔNG sử dụng busy-waiting?",
    "options": [
      "Peterson algorithm",
      "TestAndSet",
      "Semaphore",
      "Dekker algorithm"
    ],
    "answer": "C",
    "en": {
      "question": "[HK181] Which mutual-exclusion mechanism does NOT use busy-waiting?",
      "options": [
        "Peterson algorithm",
        "TestAndSet",
        "Semaphore",
        "Dekker algorithm"
      ]
    }
  },
  {
    "question": "[HK181] Cơ chế đồng bộ nào sau đây có hiệu quả sử dụng CPU tốt nhất?",
    "options": [
      "Peterson algorithm",
      "TestAndSet",
      "Dekker algorithm",
      "Semaphore"
    ],
    "answer": "D",
    "en": {
      "question": "[HK181] Which synchronization mechanism makes the most efficient use of the CPU?",
      "options": [
        "Peterson algorithm",
        "TestAndSet",
        "Dekker algorithm",
        "Semaphore"
      ]
    }
  },
  {
    "question": "[HK181] Chiến lược định thời nào cho phép process đang chạy có thể bị tạm ngưng để nhường CPU cho process khác?",
    "options": [
      "Shortest Remaining Time First",
      "Non-preemptive scheduling",
      "Shortest Job First",
      "FCFS"
    ],
    "answer": "A",
    "en": {
      "question": "[HK181] Which scheduling strategy allows a running process to be paused so the CPU can go to another process?",
      "options": [
        "Shortest Remaining Time First",
        "Non-preemptive scheduling",
        "Shortest Job First",
        "FCFS"
      ]
    }
  },
  {
    "question": "[HK181] Các process có thời điểm đến và CPU burst time như sau. Sử dụng giải thuật SRTF (Shortest Remaining Time First). Hãy tính Average Waiting Time.",
    "options": [
      "3.25",
      "2.0",
      "2.25",
      "3.0"
    ],
    "answer": "B",
    "en": {
      "question": "[HK181] Processes have the arrival times and CPU burst times below. Using SRTF (Shortest Remaining Time First), compute the Average Waiting Time.",
      "options": [
        "3.25",
        "2.0",
        "2.25",
        "3.0"
      ]
    },
    "context": "Process | Arrival Time | CPU Burst Time\nP1 | 0 | 6\nP2 | 1 | 2\nP3 | 3 | 4\nP4 | 4 | 1"
  },
  {
    "question": "[HK181] Giải thuật định thời CPU nào phù hợp nhất cho các ứng dụng tương tác?",
    "options": [
      "Shortest Remaining Time First",
      "Round Robin",
      "Shortest Job First",
      "FCFS"
    ],
    "answer": "B",
    "en": {
      "question": "[HK181] Which CPU scheduling algorithm best suits interactive applications?",
      "options": [
        "Shortest Remaining Time First",
        "Round Robin",
        "Shortest Job First",
        "FCFS"
      ]
    }
  },
  {
    "question": "[HK161] Chọn phát biểu đúng:",
    "options": [
      "Các thread trong cùng một process không thể truy cập dữ liệu toàn cục của process.",
      "Trên hệ thống multiprocessor, các thread của một process dùng mô hình many-to-one không thể thực thi song song.",
      "Trên hệ thống single processor, các process có thể thực thi song song nếu dùng các chỉ thị thích hợp.",
      "Trên hệ thống single processor, các thread của một process dùng mô hình one-to-one có thể thực thi song song."
    ],
    "answer": "B",
    "en": {
      "question": "[HK161] Pick the correct statement:",
      "options": [
        "Threads within the same process cannot access the process's global data.",
        "On a multiprocessor system, threads of a process using the many-to-one model cannot run in parallel.",
        "On a single-processor system, processes can run in parallel with the right instructions.",
        "On a single-processor system, threads of a process using the one-to-one model can run in parallel."
      ]
    }
  },
  {
    "question": "[HK161] Chuyển ngữ cảnh (context switch) là quá trình nào sau đây?",
    "options": [
      "Process thực thi xong một câu lệnh và nạp câu lệnh mới để tiếp tục thực thi.",
      "Tạm dừng process và chuyển nó ra đĩa cứng.",
      "Hệ điều hành lưu trạng thái của process hiện tại và nạp trạng thái của process khác để tiếp tục thực thi.",
      "Process chuyển từ trạng thái New sang Ready."
    ],
    "answer": "C",
    "en": {
      "question": "[HK161] What process does a context switch refer to?",
      "options": [
        "A process finishes one instruction and loads the next one to continue.",
        "Pausing a process and moving it to disk.",
        "The OS saves the current process's state and loads another process's state to resume it.",
        "A process moving from the New state to Ready."
      ]
    }
  },
  {
    "question": "[HK161] Định thời ngắn hạn (short-term scheduler) là gì?",
    "options": [
      "Chọn process nào sẽ được đưa vào hàng đợi ready.",
      "Chọn process nào sẽ được cấp CPU để thực thi tiếp theo.",
      "Chọn process nào sẽ được swap ra bộ nhớ phụ.",
      "Chọn chương trình nào sẽ được nạp vào bộ nhớ."
    ],
    "answer": "B",
    "en": {
      "question": "[HK161] What is the short-term scheduler?",
      "options": [
        "It chooses which process enters the ready queue.",
        "It chooses which process gets the CPU to run next.",
        "It chooses which process gets swapped to secondary storage.",
        "It chooses which program gets loaded into memory."
      ]
    }
  },
  {
    "question": "[HK161] Giả sử một process đang ở trạng thái Blocked do yêu cầu thao tác I/O. Khi thao tác I/O hoàn thành, process sẽ chuyển sang trạng thái nào?",
    "options": [
      "Running",
      "Terminated",
      "Suspended",
      "Ready"
    ],
    "answer": "D",
    "en": {
      "question": "[HK161] A process is Blocked due to an I/O request. When the I/O completes, which state does it move to?",
      "options": [
        "Running",
        "Terminated",
        "Suspended",
        "Ready"
      ]
    }
  },
  {
    "question": "[HK161] Khi một process đang thực thi trong vùng tranh chấp (critical section), không process nào khác được phép thực thi trong vùng đó. Điều kiện này được gọi là gì?",
    "options": [
      "Mutual exclusion",
      "Critical exclusion",
      "Synchronous exclusion",
      "Asynchronous exclusion"
    ],
    "answer": "A",
    "en": {
      "question": "[HK161] When a process is running inside the critical section, no other process may run there. What is this condition called?",
      "options": [
        "Mutual exclusion",
        "Critical exclusion",
        "Synchronous exclusion",
        "Asynchronous exclusion"
      ]
    }
  },
  {
    "question": "[HK161] Khi một process sử dụng hết quantum time được cấp phát trong thuật toán Round Robin, process sẽ:",
    "options": [
      "Chuyển từ trạng thái Running sang Ready.",
      "Chuyển từ trạng thái Running sang Blocked.",
      "Chuyển từ trạng thái Running sang Suspended-Ready.",
      "Chuyển từ trạng thái Running sang Suspended."
    ],
    "answer": "A",
    "en": {
      "question": "[HK161] When a process uses up its allotted time quantum under Round Robin, it will:",
      "options": [
        "Move from Running to Ready.",
        "Move from Running to Blocked.",
        "Move from Running to Suspended-Ready.",
        "Move from Running to Suspended."
      ]
    }
  },
  {
    "question": "[HK161] Trạng thái của một process thể hiện điều gì?",
    "options": [
      "Hoạt động vừa được thực hiện của process.",
      "Hoạt động hiện tại của process.",
      "Hoạt động sẽ được thực hiện tiếp theo của process.",
      "Hoạt động cuối cùng của process."
    ],
    "answer": "B",
    "en": {
      "question": "[HK161] What does a process's state represent?",
      "options": [
        "The activity it just performed.",
        "Its current activity.",
        "The activity it will perform next.",
        "Its final activity."
      ]
    }
  },
  {
    "question": "[HK161] Quá trình (process) là gì?",
    "options": [
      "Một chương trình có thể thực thi được.",
      "Một thủ tục với chức năng xác định.",
      "Một chương trình được nạp vào bộ nhớ để thực thi.",
      "Một tập tin có phần mở rộng .bin, .exe hoặc .sh."
    ],
    "answer": "C",
    "en": {
      "question": "[HK161] What is a process?",
      "options": [
        "An executable program.",
        "A procedure with a defined function.",
        "A program loaded into memory for execution.",
        "A file with a .bin, .exe or .sh extension."
      ]
    }
  },
  {
    "question": "[HK161] Chọn phát biểu đúng về chuyển ngữ cảnh đối với user-level thread:",
    "options": [
      "Chuyển ngữ cảnh giữa hai thread không tốn chi phí sử dụng CPU.",
      "Chuyển ngữ cảnh giữa hai thread ít tốn chi phí hơn chuyển ngữ cảnh giữa hai process.",
      "Chuyển ngữ cảnh giữa hai thread do bộ định thời (scheduler) của hệ điều hành thực hiện.",
      "Chuyển ngữ cảnh giữa hai process ít tốn chi phí hơn chuyển ngữ cảnh giữa hai thread."
    ],
    "answer": "B",
    "en": {
      "question": "[HK161] Pick the correct statement about context switching for user-level threads:",
      "options": [
        "Switching between two threads costs no CPU time.",
        "Switching between two threads costs less than switching between two processes.",
        "Switching between two threads is done by the OS scheduler.",
        "Switching between two processes costs less than switching between two threads."
      ]
    }
  },
  {
    "question": "[HK161] Trong các chuỗi chuyển đổi trạng thái của một process, chuỗi nào là hợp lệ?",
    "options": [
      "New -> Ready -> Running -> Ready -> Terminated",
      "Ready -> Running -> Terminated",
      "New -> Ready -> Terminated",
      "New -> Ready -> Running -> Terminated"
    ],
    "answer": "D",
    "en": {
      "question": "[HK161] Which process state transition sequence is valid?",
      "options": [
        "New -> Ready -> Running -> Ready -> Terminated",
        "Ready -> Running -> Terminated",
        "New -> Ready -> Terminated",
        "New -> Ready -> Running -> Terminated"
      ]
    }
  },
  {
    "question": "[HK161] Trong giải thuật định thời Round Robin, khi giảm nhỏ lát cắt thời gian (quantum time):",
    "options": [
      "Tăng sự công bằng đối với process dạng I/O-bound.",
      "Phí tổn chuyển ngữ cảnh (context switch overhead) sẽ giảm.",
      "Độ lợi CPU (CPU utilization) sẽ tăng.",
      "Thời gian đáp ứng (response time) sẽ tăng."
    ],
    "answer": "A",
    "en": {
      "question": "[HK161] In Round Robin scheduling, when the time quantum is made smaller:",
      "options": [
        "Fairness toward I/O-bound processes increases.",
        "Context-switch overhead decreases.",
        "CPU utilization increases.",
        "Response time increases."
      ]
    }
  },
  {
    "question": "[HK161] Trên cùng một hệ điều hành, các thread trong mô hình nào sau đây có khả năng được gán nhiều CPU nhất?",
    "options": [
      "One-to-one",
      "Many-to-many",
      "Many-to-one",
      "Cả 3 câu trên đều sai"
    ],
    "answer": "B",
    "en": {
      "question": "[HK161] On the same OS, threads under which model can be assigned to the most CPUs at once?",
      "options": [
        "One-to-one",
        "Many-to-many",
        "Many-to-one",
        "None of the above"
      ]
    }
  },
  {
    "question": "[HK161] Dữ kiện sau đây dùng cho 3 câu tiếp sau đây: Hệ thống có 4 process với thời điểm đến và CPU burst như sau.\nSử dụng FCFS, thời gian đợi trung bình là:",
    "options": [
      "5.25",
      "6.25",
      "6.75",
      "Khác"
    ],
    "answer": "C",
    "en": {
      "question": "[HK161] The following data is used for the next 3 questions: a system has 4 processes with arrival times and CPU bursts as below.\nUsing FCFS, the average waiting time is:",
      "options": [
        "5.25",
        "6.25",
        "6.75",
        "Other"
      ]
    },
    "context": "Process | Arrival Time | CPU Burst\nA | 0 | 8\nB | 2 | 4\nC | 3 | 6\nD | 6 | 4"
  },
  {
    "question": "[HK161] SJF (non-preemptive), tính waiting time trung bình:",
    "options": [
      "6.25",
      "6.75",
      "5.25",
      "Khác"
    ],
    "answer": "A",
    "en": {
      "question": "[HK161] SJF (non-preemptive), same 4 processes as above: compute the average waiting time.",
      "options": [
        "6.25",
        "6.75",
        "5.25",
        "Other"
      ]
    },
    "context": "Process | Arrival Time | CPU Burst\nA | 0 | 8\nB | 2 | 4\nC | 3 | 6\nD | 6 | 4"
  },
  {
    "question": "[HK161] Round Robin (q = 2), số lần lập lịch (context dispatch) từ t=0 đến t=22:",
    "options": [
      "11",
      "12",
      "13",
      "Khác"
    ],
    "answer": "A",
    "en": {
      "question": "[HK161] Round Robin (q = 2), same 4 processes as above: how many scheduling dispatches occur from t=0 to t=22?",
      "options": [
        "11",
        "12",
        "13",
        "Other"
      ]
    },
    "context": "Process | Arrival Time | CPU Burst\nA | 0 | 8\nB | 2 | 4\nC | 3 | 6\nD | 6 | 4"
  }
]

export default cpu
