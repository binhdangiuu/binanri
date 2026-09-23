const osReviewCh1To2 = [
  {
    "id": 1,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Hệ thống máy tính được chia làm 4 thành phần nào sau đây?"
    },
    "options": {
      "A": "Phần cứng, Hệ điều hành, Chương trình ứng dụng, Người dùng",
      "B": "CPU, RAM, ROM, I/O devices",
      "C": "Kernel, Shell, Compiler, Loader",
      "D": "Input, Output, Process, Memory"
    },
    "answer": "A",
    "en": {
      "question": {
        "main": "A computer system is divided into which four components?"
      },
      "options": {
        "A": "Hardware, Operating system, Application programs, Users",
        "B": "CPU, RAM, ROM, I/O devices",
        "C": "Kernel, Shell, Compiler, Loader",
        "D": "Input, Output, Process, Memory"
      }
    }
  },
  {
    "id": 2,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Chọn phát biểu đúng về system programs và application programs:"
    },
    "options": {
      "A": "System programs là các chương trình phục vụ trực tiếp người dùng như Word, Excel, trình duyệt web.",
      "B": "Application programs là các chương trình hỗ trợ vận hành hệ điều hành như compiler, shell, file manager.",
      "C": "System programs cung cấp môi trường thuận tiện để phát triển và thực thi chương trình, còn application programs phục vụ nhu cầu của người dùng.",
      "D": "Cả system programs và application programs đều là thành phần của phần cứng."
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "Choose the correct statement about system programs and application programs:"
      },
      "options": {
        "A": "System programs are programs that directly serve users, such as Word, Excel, and web browsers.",
        "B": "Application programs are programs that help operate the operating system, such as compilers, shells, and file managers.",
        "C": "System programs provide a convenient environment for developing and executing programs, while application programs serve users' needs.",
        "D": "Both system programs and application programs are hardware components."
      }
    }
  },
  {
    "id": 3,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Hệ điều hành hoạt động dựa trên cơ chế nào sau đây?"
    },
    "options": {
      "A": "Polling-driven",
      "B": "Interrupt-driven",
      "C": "Batch-driven",
      "D": "Process-driven"
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "Which mechanism does an operating system operate on?"
      },
      "options": {
        "A": "Polling-driven",
        "B": "Interrupt-driven",
        "C": "Batch-driven",
        "D": "Process-driven"
      }
    }
  },
  {
    "id": 4,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Chọn phát biểu đúng về Multiprogramming và Time-sharing:"
    },
    "options": {
      "A": "Multiprogramming và Time-sharing đều yêu cầu CPU chỉ chạy một chương trình tại một thời điểm và không có chuyển đổi ngữ cảnh.",
      "B": "Multiprogramming nhằm tối ưu sử dụng CPU, còn Time-sharing nhằm tăng khả năng tương tác với người dùng.",
      "C": "Time-sharing chỉ áp dụng cho hệ thống batch, còn Multiprogramming dùng cho hệ thống tương tác.",
      "D": "Multiprogramming làm CPU nhàn rỗi nhiều hơn, còn Time-sharing làm giảm hiệu suất hệ thống."
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "Choose the correct statement about multiprogramming and time-sharing:"
      },
      "options": {
        "A": "Both multiprogramming and time-sharing require the CPU to run only one program at a time with no context switching.",
        "B": "Multiprogramming aims to optimize CPU utilization, while time-sharing aims to increase interactivity with users.",
        "C": "Time-sharing only applies to batch systems, while multiprogramming is used for interactive systems.",
        "D": "Multiprogramming leaves the CPU idle more often, while time-sharing reduces overall system performance."
      }
    }
  },
  {
    "id": 5,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Hoạt động hai chế độ (Dual-mode): chế độ người dùng (user mode) và chế độ nhân (kernel mode) giúp hệ điều hành bảo vệ chính nó và các thành phần hệ thống khác. Có bao nhiêu phát biểu sau đây là đúng?",
      "statements": [
        "(a) User mode có quyền truy cập trực tiếp vào phần cứng.",
        "(b) Kernel mode có quyền đặc biệt để thực hiện các lệnh đặc quyền.",
        "(c) System call là cơ chế chuyển từ user mode sang kernel mode.",
        "(d) Dual-mode giúp bảo vệ hệ thống khỏi chương trình người dùng gây lỗi nghiêm trọng.",
        "(e) Mọi lệnh đều được thực thi trong kernel mode để đảm bảo an toàn."
      ],
      "ask": "Có bao nhiêu phát biểu sau đây là đúng?"
    },
    "options": {
      "A": "1 ý đúng",
      "B": "2 ý đúng",
      "C": "3 ý đúng",
      "D": "4 ý đúng"
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "Dual-mode operation — user mode and kernel mode — helps the operating system protect itself and other system components. How many of the following statements are correct?",
        "statements": [
          "(a) User mode has direct access to hardware.",
          "(b) Kernel mode has special privileges to execute privileged instructions.",
          "(c) A system call is the mechanism for switching from user mode to kernel mode.",
          "(d) Dual-mode helps protect the system from user programs that cause serious errors.",
          "(e) All instructions are executed in kernel mode to ensure safety."
        ],
        "ask": "How many of the following statements are correct?"
      },
      "options": {
        "A": "1 correct statement",
        "B": "2 correct statements",
        "C": "3 correct statements",
        "D": "4 correct statements"
      }
    }
  },
  {
    "id": 6,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Hệ thống phân tán (Distributed system) là:"
    },
    "options": {
      "A": "Hệ thống chỉ gồm một CPU và một bộ nhớ dùng chung.",
      "B": "Hệ thống gồm nhiều máy tính kết nối với nhau và phối hợp để thực hiện công việc.",
      "C": "Hệ thống chỉ chạy một chương trình duy nhất tại một thời điểm.",
      "D": "Hệ thống không cần mạng để hoạt động."
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "A distributed system is:"
      },
      "options": {
        "A": "A system consisting of only one CPU and one shared memory.",
        "B": "A system made up of multiple computers connected together, cooperating to perform tasks.",
        "C": "A system that runs only a single program at a time.",
        "D": "A system that does not need a network to operate."
      }
    }
  },
  {
    "id": 7,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Hệ thống thời gian thực (Real-time system) là:"
    },
    "options": {
      "A": "Hệ thống tối ưu hóa việc sử dụng CPU là quan trọng nhất.",
      "B": "Hệ thống không cần quan tâm đến thời gian phản hồi.",
      "C": "Hệ thống phải đảm bảo phản hồi kết quả đúng trong thời hạn xác định.",
      "D": "Hệ thống chỉ dùng cho các ứng dụng văn phòng."
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "A real-time system is:"
      },
      "options": {
        "A": "A system where optimizing CPU utilization is the top priority.",
        "B": "A system that does not need to care about response time.",
        "C": "A system that must guarantee correct results within a defined deadline.",
        "D": "A system used only for office applications."
      }
    }
  },
  {
    "id": 8,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Chọn phát biểu đúng về các dịch vụ của hệ điều hành:"
    },
    "options": {
      "A": "Dịch vụ của hệ điều hành chỉ phục vụ cho người dùng thông qua giao diện GUI.",
      "B": "Dịch vụ hệ điều hành bao gồm thực thi chương trình, quản lý I/O, hệ thống tập tin và phát hiện lỗi.",
      "C": "Dịch vụ hệ điều hành không liên quan đến quản lý tài nguyên như CPU hay bộ nhớ.",
      "D": "Hệ điều hành không có chức năng bảo mật hệ thống."
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "Choose the correct statement about operating system services:"
      },
      "options": {
        "A": "Operating system services only serve users through a GUI interface.",
        "B": "Operating system services include program execution, I/O management, file systems, and error detection.",
        "C": "Operating system services are unrelated to resource management such as CPU or memory.",
        "D": "The operating system has no system security function."
      }
    }
  },
  {
    "id": 9,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Giao diện dòng lệnh (CLI - Command Line Interface) là gì?"
    },
    "options": {
      "A": "Giao diện đồ họa cho phép người dùng tương tác bằng chuột và biểu tượng.",
      "B": "Giao diện cho phép người dùng nhập lệnh dạng văn bản để điều khiển hệ điều hành.",
      "C": "Một loại phần cứng dùng để nhập dữ liệu vào máy tính.",
      "D": "Một hệ điều hành riêng biệt chỉ dùng cho server."
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "What is a Command Line Interface (CLI)?"
      },
      "options": {
        "A": "A graphical interface that lets users interact using a mouse and icons.",
        "B": "An interface that lets users type text commands to control the operating system.",
        "C": "A type of hardware used to input data into a computer.",
        "D": "A separate operating system used only for servers."
      }
    }
  },
  {
    "id": 10,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Chọn phát biểu đúng về system call:"
    },
    "options": {
      "A": "System call là giao diện giữa phần cứng và hệ điều hành.",
      "B": "System call cho phép chương trình người dùng yêu cầu dịch vụ từ hệ điều hành.",
      "C": "System call chỉ được sử dụng trong chế độ kernel mode.",
      "D": "System call không liên quan đến API như POSIX hay Win32."
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "Choose the correct statement about system calls:"
      },
      "options": {
        "A": "A system call is the interface between hardware and the operating system.",
        "B": "A system call lets a user program request a service from the operating system.",
        "C": "System calls are only used in kernel mode.",
        "D": "System calls are unrelated to APIs such as POSIX or Win32."
      }
    }
  },
  {
    "id": 11,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Có bao nhiêu cách truyền tham số cho system call?"
    },
    "options": {
      "A": "1 cách",
      "B": "2 cách",
      "C": "3 cách",
      "D": "4 cách"
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "How many ways are there to pass parameters to a system call?"
      },
      "options": {
        "A": "1 way",
        "B": "2 ways",
        "C": "3 ways",
        "D": "4 ways"
      }
    }
  },
  {
    "id": 12,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "System calls được chia thành các loại chính sau đây. Có bao nhiêu loại chính?"
    },
    "options": {
      "A": "3 loại",
      "B": "4 loại",
      "C": "5 loại",
      "D": "6 loại"
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "System calls are grouped into the following main categories. How many main categories are there?"
      },
      "options": {
        "A": "3 types",
        "B": "4 types",
        "C": "5 types",
        "D": "6 types"
      }
    }
  },
  {
    "id": 13,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Chọn phát biểu đúng về linker và loader:"
    },
    "options": {
      "A": "Linker có nhiệm vụ nạp chương trình vào bộ nhớ chính để thực thi.",
      "B": "Loader có nhiệm vụ kết hợp các file object thành file thực thi.",
      "C": "Linker kết hợp các file object và thư viện thành file thực thi, còn Loader nạp file thực thi vào bộ nhớ để chạy.",
      "D": "Cả linker và loader đều thực hiện cùng một chức năng là biên dịch mã nguồn."
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "Choose the correct statement about the linker and loader:"
      },
      "options": {
        "A": "The linker's job is to load the program into main memory for execution.",
        "B": "The loader's job is to combine object files into an executable file.",
        "C": "The linker combines object files and libraries into an executable file, while the loader loads the executable into memory to run it.",
        "D": "Both the linker and loader perform the same function of compiling source code."
      }
    }
  },
  {
    "id": 14,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Chọn phát biểu đúng về object file, executable file và binary file:"
    },
    "options": {
      "A": "Object file là file thực thi hoàn chỉnh có thể chạy trực tiếp trên hệ điều hành.",
      "B": "Executable file được tạo ra trực tiếp từ mã nguồn mà không cần linker.",
      "C": "Binary file là file chứa mã máy đã được biên dịch và có thể thực thi hoặc lưu trữ dữ liệu ở dạng nhị phân.",
      "D": "Object file và executable file là hai tên gọi hoàn toàn giống nhau."
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "Choose the correct statement about object files, executable files, and binary files:"
      },
      "options": {
        "A": "An object file is a complete executable that can run directly on the operating system.",
        "B": "An executable file is created directly from source code without needing a linker.",
        "C": "A binary file contains compiled machine code and can be an executable or store data in binary form.",
        "D": "Object file and executable file are just two names for exactly the same thing."
      }
    }
  },
  {
    "id": 15,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Các phát biểu sau về cấu trúc kiến trúc hệ điều hành. Có bao nhiêu phát biểu đúng?",
      "statements": [
        "(a) Cấu trúc monolithic tập trung nhiều chức năng vào một nhân duy nhất.",
        "(b) Phương pháp layered chia hệ điều hành thành nhiều lớp từ thấp đến cao.",
        "(c) Microkernel chuyển nhiều dịch vụ từ kernel space sang user space và dùng message passing.",
        "(d) Loadable Kernel Modules cho phép nạp thêm module vào kernel khi cần thiết.",
        "(e) Hệ thống hybrid là sự kết hợp nhiều kiến trúc khác nhau để tối ưu hiệu năng và tính linh hoạt."
      ],
      "ask": "Có bao nhiêu phát biểu đúng?"
    },
    "options": {
      "A": "3 ý đúng",
      "B": "4 ý đúng",
      "C": "5 ý đúng",
      "D": "6 ý đúng"
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "Consider the following statements about operating system architecture. How many of them are correct?",
        "statements": [
          "(a) The monolithic structure concentrates many functions into a single kernel.",
          "(b) The layered approach divides the operating system into multiple layers from lowest to highest.",
          "(c) The microkernel moves many services from kernel space to user space and uses message passing.",
          "(d) Loadable Kernel Modules allow additional modules to be loaded into the kernel when needed.",
          "(e) A hybrid system combines multiple architectures to optimize performance and flexibility."
        ],
        "ask": "How many of the statements are correct?"
      },
      "options": {
        "A": "3 correct statements",
        "B": "4 correct statements",
        "C": "5 correct statements",
        "D": "6 correct statements"
      }
    }
  },
  {
    "id": 16,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Hệ điều hành hiện đại thường sử dụng kiến trúc nào sau đây?"
    },
    "options": {
      "A": "Monolithic kernel thuần túy",
      "B": "Microkernel thuần túy",
      "C": "Kết hợp nhiều kiến trúc (Hybrid system)",
      "D": "Chỉ sử dụng layered approach"
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "Which architecture do modern operating systems commonly use?"
      },
      "options": {
        "A": "A pure monolithic kernel",
        "B": "A pure microkernel",
        "C": "A combination of architectures (hybrid system)",
        "D": "Only the layered approach"
      }
    }
  },
  {
    "id": 17,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Điểm mạnh của kiến trúc monolithic so với microkernel là gì?"
    },
    "options": {
      "A": "Bảo mật cao hơn do tách biệt hoàn toàn các dịch vụ khỏi kernel",
      "B": "Hiệu năng cao hơn do các thành phần giao tiếp trực tiếp trong kernel space",
      "C": "Dễ mở rộng và dễ bảo trì hơn microkernel",
      "D": "Sử dụng cơ chế message passing cho mọi giao tiếp giữa các thành phần"
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "What is the strength of the monolithic architecture compared to the microkernel?"
      },
      "options": {
        "A": "Higher security due to fully separating services from the kernel",
        "B": "Higher performance because components communicate directly within kernel space",
        "C": "Easier to extend and maintain than a microkernel",
        "D": "Uses message passing for all communication between components"
      }
    }
  },
  {
    "id": 18,
    "chapter": "Intro to OS",
    "tag": "HK252",
    "question": {
      "main": "Điểm mạnh của kiến trúc microkernel so với các kiến trúc khác là gì?"
    },
    "options": {
      "A": "Hiệu năng cao hơn vì tất cả dịch vụ đều chạy trong kernel space",
      "B": "Bảo mật và độ tin cậy cao hơn do giảm kích thước kernel và tách dịch vụ ra user space",
      "C": "Không cần system call để giao tiếp với hệ điều hành",
      "D": "Khó mở rộng và khó bảo trì hơn monolithic kernel"
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "What is the strength of the microkernel architecture compared to other architectures?"
      },
      "options": {
        "A": "Higher performance because all services run in kernel space",
        "B": "Higher security and reliability due to a smaller kernel and moving services into user space",
        "C": "No system calls are needed to communicate with the operating system",
        "D": "Harder to extend and maintain than a monolithic kernel"
      }
    }
  },
  {
    "id": 19,
    "chapter": "Intro to OS",
    "tag": "HK242",
    "question": {
      "main": "Loại hoạt động nào sau đây yêu cầu phải được thực hiện ở chế độ kernel?"
    },
    "options": {
      "A": "Thực hiện các phép tính số học.",
      "B": "Chạy các ứng dụng của người dùng.",
      "C": "Xem và chỉnh sửa nội dung tập tin.",
      "D": "Truy cập trực tiếp vào các thiết bị phần cứng."
    },
    "answer": "D",
    "en": {
      "question": {
        "main": "Which of the following operations must be performed in kernel mode?"
      },
      "options": {
        "A": "Performing arithmetic calculations.",
        "B": "Running user applications.",
        "C": "Viewing and editing file contents.",
        "D": "Directly accessing hardware devices."
      }
    }
  },
  {
    "id": 20,
    "chapter": "Intro to OS",
    "tag": "HK242",
    "question": {
      "main": "Đâu là lý do chính vì sao các ứng dụng thường không thể chạy trên các hệ điều hành khác nhau?"
    },
    "options": {
      "A": "Ngôn ngữ lập trình ứng dụng khác nhau.",
      "B": "Thực thi trên các hệ thống vi xử lý khác nhau.",
      "C": "Sử dụng các system call khác nhau.",
      "D": "Giao diện người dùng không đồng nhất."
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "What is the main reason applications usually cannot run on different operating systems?"
      },
      "options": {
        "A": "Different application programming languages.",
        "B": "Running on different processor architectures.",
        "C": "Using different system calls.",
        "D": "Inconsistent user interfaces."
      }
    }
  },
  {
    "id": 21,
    "chapter": "Intro to OS",
    "tag": "HK242",
    "question": {
      "main": "Trong hệ điều hành, kết quả của bước biên dịch (compilation) mã nguồn là?"
    },
    "options": {
      "A": "Executable file.",
      "B": "Process file.",
      "C": "Object file.",
      "D": "Binary file."
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "In an operating system, what is the result of the compilation step of source code?"
      },
      "options": {
        "A": "Executable file.",
        "B": "Process file.",
        "C": "Object file.",
        "D": "Binary file."
      }
    }
  },
  {
    "id": 22,
    "chapter": "Intro to OS",
    "tag": "HK242",
    "question": {
      "main": "Lợi ích của cấu trúc phân lớp (layered approach) của nhân hệ điều hành đối với việc gỡ lỗi là gì?"
    },
    "options": {
      "A": "Phải gỡ lỗi trên tất cả các lớp cùng một lúc.",
      "B": "Lỗi có thể được truy vết trong một lớp cụ thể mà không ảnh hưởng đến các lớp khác.",
      "C": "Cách tiếp cận phân lớp làm cho việc gỡ lỗi không cần thiết.",
      "D": "Lỗi trong nhân hệ điều hành có thể bị bỏ qua do có cơ chế tự sửa lỗi."
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "What is the benefit of the kernel's layered approach for debugging?"
      },
      "options": {
        "A": "You must debug all layers at once.",
        "B": "Errors can be traced within a specific layer without affecting other layers.",
        "C": "The layered approach makes debugging unnecessary.",
        "D": "Errors in the kernel can be ignored thanks to a self-correcting mechanism."
      }
    }
  },
  {
    "id": 23,
    "chapter": "Intro to OS",
    "tag": "HK242",
    "question": {
      "main": "Chức năng chính của bộ điều khiển thiết bị (device controller) là gì?"
    },
    "options": {
      "A": "Trao đổi dữ liệu trực tiếp với CPU.",
      "B": "Biến đổi các yêu cầu I/O logic thành các thao tác vật lý cho thiết bị.",
      "C": "Quản lý cấp phát và thu hồi bộ nhớ chính.",
      "D": "Thực hiện các hoạt động I/O độc lập với CPU."
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "What is the main function of a device controller?"
      },
      "options": {
        "A": "Exchanging data directly with the CPU.",
        "B": "Translating logical I/O requests into physical operations for the device.",
        "C": "Managing the allocation and reclamation of main memory.",
        "D": "Performing I/O operations independently of the CPU."
      }
    }
  },
  {
    "id": 24,
    "chapter": "Intro to OS",
    "tag": "HK242",
    "question": {
      "main": "Lợi ích chính của việc thực hiện đồng thời các hoạt động I/O và tính toán của CPU là gì?"
    },
    "options": {
      "A": "Giảm thiểu sự cần thiết của trình điều khiển thiết bị.",
      "B": "Đơn giản hóa thiết kế của hệ điều hành.",
      "C": "Cải thiện hiệu suất tổng thể của hệ thống.",
      "D": "Cho phép CPU tập trung hoàn toàn vào các tác vụ khác."
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "What is the main benefit of overlapping I/O operations with CPU computation?"
      },
      "options": {
        "A": "Reducing the need for device drivers.",
        "B": "Simplifying the operating system's design.",
        "C": "Improving the overall performance of the system.",
        "D": "Allowing the CPU to focus entirely on other tasks."
      }
    }
  },
  {
    "id": 25,
    "chapter": "Intro to OS",
    "tag": "HK242",
    "question": {
      "main": "Hệ thống nào sau đây là ví dụ về cơ chế đa nhiệm (multitasking)?"
    },
    "options": {
      "A": "Hệ thống chỉ chạy một quá trình thực thi tại một thời điểm.",
      "B": "Hệ thống cho phép nhiều người dùng đăng nhập từ xa.",
      "C": "Siêu máy tính thực hiện một phép tính phức tạp duy nhất.",
      "D": "Chạy đồng thời trình duyệt web, trình phát nhạc và trình soạn thảo văn bản."
    },
    "answer": "D",
    "en": {
      "question": {
        "main": "Which of the following is an example of multitasking?"
      },
      "options": {
        "A": "A system that runs only one process at a time.",
        "B": "A system that allows multiple users to log in remotely.",
        "C": "A supercomputer performing a single complex calculation.",
        "D": "Simultaneously running a web browser, a music player, and a text editor."
      }
    }
  },
  {
    "id": 26,
    "chapter": "Intro to OS",
    "tag": "HK242",
    "question": {
      "main": "Lý do chính để sử dụng hybrid kernel thay vì microkernel hoặc monolithic là gì?"
    },
    "options": {
      "A": "Loại bỏ nhu cầu sử dụng system call.",
      "B": "Loại bỏ nhu cầu sử dụng trình điều khiển thiết bị.",
      "C": "Ngăn chặn hoàn toàn lỗi hệ thống.",
      "D": "Cải thiện hiệu suất trong khi vẫn duy trì tính mô-đun."
    },
    "answer": "D",
    "en": {
      "question": {
        "main": "What is the main reason for using a hybrid kernel instead of a microkernel or monolithic kernel?"
      },
      "options": {
        "A": "Eliminating the need for system calls.",
        "B": "Eliminating the need for device drivers.",
        "C": "Completely preventing system errors.",
        "D": "Improving performance while still maintaining modularity."
      }
    }
  },
  {
    "id": 27,
    "chapter": "Intro to OS",
    "tag": "HK242",
    "question": {
      "main": "Nhược điểm chính của cấu trúc nhân đơn khối (monolithic kernel) là gì?"
    },
    "options": {
      "A": "Giao tiếp giữa các quá trình thực thi (process) phức tạp.",
      "B": "Hiệu suất kém do chi phí xử lý cao.",
      "C": "Khó sửa đổi hoặc mở rộng hệ điều hành.",
      "D": "Thiếu cơ chế bảo mật."
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "What is the main drawback of a monolithic kernel structure?"
      },
      "options": {
        "A": "Communication between processes is complex.",
        "B": "Poor performance due to high processing overhead.",
        "C": "It is hard to modify or extend the operating system.",
        "D": "It lacks a security mechanism."
      }
    }
  },
  {
    "id": 28,
    "chapter": "Intro to OS",
    "tag": "HK242",
    "question": {
      "main": "Hệ điều hành thực thi lời gọi hệ thống (system call) ở chế độ nào?"
    },
    "options": {
      "A": "Chế độ người dùng (user mode).",
      "B": "Chế độ nhân (kernel mode).",
      "C": "Chế độ ứng dụng.",
      "D": "Chế độ giám sát."
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "In which mode does the operating system execute a system call?"
      },
      "options": {
        "A": "User mode.",
        "B": "Kernel mode.",
        "C": "Application mode.",
        "D": "Supervisor mode."
      }
    }
  },
  {
    "id": 29,
    "chapter": "Intro to OS",
    "tag": "HK211",
    "question": {
      "main": "Các dịch vụ của hệ điều hành nhằm cung cấp các chức năng nào sau đây để hướng quản lý hệ thống một cách hiệu quả?"
    },
    "options": {
      "A": "Giao tiếp quá trình, giao diện làm việc với người sử dụng, và xử lí hệ thống tập tin",
      "B": "Cấp phát tài nguyên, quản lý tài khoản và bảo mật bảo vệ",
      "C": "Các lựa chọn khác đều sai",
      "D": "Thực thi chương trình, xử lí hệ thống tập tin, phát hiện lỗi"
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "Which of the following functions do operating system services provide for effective system management?"
      },
      "options": {
        "A": "Process communication, a user working interface, and file system handling",
        "B": "Resource allocation, account management, and security/protection",
        "C": "None of the other options is correct",
        "D": "Program execution, file system handling, and error detection"
      }
    }
  },
  {
    "id": 30,
    "chapter": "Intro to OS",
    "tag": "HK211",
    "question": {
      "main": "Chọn phát biểu đúng về cấu trúc monolithic:"
    },
    "options": {
      "A": "Việc thêm các chức năng của hệ điều hành được thực thi dễ dàng hơn so với cấu trúc microkernel",
      "B": "Các dịch vụ của hệ điều hành đều được tích hợp vào kernel",
      "C": "Có hiệu năng giảm so với các cấu trúc khác",
      "D": "Việc trao đổi dữ liệu giữa các thành phần chức năng của kernel thực hiện chủ yếu bằng cơ chế message-passing"
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "Choose the correct statement about the monolithic structure:"
      },
      "options": {
        "A": "Adding operating system functions is easier than in a microkernel structure",
        "B": "All operating system services are integrated into the kernel",
        "C": "It has lower performance compared to other structures",
        "D": "Data exchange between the kernel's functional components is mainly done via message passing"
      }
    }
  },
  {
    "id": 31,
    "chapter": "Intro to OS",
    "tag": "HK211",
    "question": {
      "main": "Tập tin nào là gồm một chuỗi các byte được tổ chức theo khối và được hiểu bởi linker của hệ thống?"
    },
    "options": {
      "A": "Tập tin object",
      "B": "Tập tin văn bản",
      "C": "Tập tin mã nguồn",
      "D": "Tập tin thực thi được"
    },
    "answer": "A",
    "en": {
      "question": {
        "main": "Which file consists of a sequence of bytes organized into blocks and understood by the system's linker?"
      },
      "options": {
        "A": "Object file",
        "B": "Text file",
        "C": "Source code file",
        "D": "Executable file"
      }
    }
  },
  {
    "id": 32,
    "chapter": "Intro to OS",
    "tag": "HK211",
    "question": {
      "main": "Điểm nào sau đây là lợi ích của việc dùng 2 bảng mở tập tin (open file table) trong lõi hệ điều hành khi hiện thực một hệ thống tập tin?"
    },
    "options": {
      "A": "Các câu khác đều sai",
      "B": "Để hỗ trợ truy xuất hiệu quả trong trường hợp có nhiều tác vụ mở cùng một tập tin",
      "C": "Để triển khai cơ chế điều khiển quyền truy cập",
      "D": "Để di chuyển bảng mở tập tin cho từng tập tin (per-process open file table) vào trong không gian của người dùng nhằm tiết kiệm bộ nhớ trong lõi"
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "What is the benefit of using two open-file tables inside the OS kernel when implementing a file system?"
      },
      "options": {
        "A": "None of the other options is correct",
        "B": "To support efficient access when multiple tasks open the same file",
        "C": "To implement an access-control mechanism",
        "D": "To move the per-process open file table into user space in order to save kernel memory"
      }
    }
  },
  {
    "id": 33,
    "chapter": "Intro to OS",
    "tag": "HK211",
    "question": {
      "main": "Hệ thống làm việc theo nguyên tắc phân chia thời gian (time sharing system) phù hợp với các ứng dụng/công việc:"
    },
    "options": {
      "A": "Thời gian thực (real time job)",
      "B": "Hướng tương tác (interactive job)",
      "C": "Thiên về tính toán CPU",
      "D": "Bó công việc"
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "A time-sharing system is well suited to which kind of applications/jobs:"
      },
      "options": {
        "A": "Real-time jobs",
        "B": "Interactive jobs",
        "C": "CPU-intensive jobs",
        "D": "Batch jobs"
      }
    }
  },
  {
    "id": 34,
    "chapter": "Intro to OS",
    "tag": "HK211",
    "question": {
      "main": "Giao diện (interface) cung cấp để truy cập các dịch vụ của hệ điều hành thông qua:"
    },
    "options": {
      "A": "System calls",
      "B": "Application programming interface",
      "C": "Lệnh mã máy",
      "D": "Thư viện hàm"
    },
    "answer": "A",
    "en": {
      "question": {
        "main": "The interface for accessing operating system services is provided through:"
      },
      "options": {
        "A": "System calls",
        "B": "Application programming interface",
        "C": "Machine-language instructions",
        "D": "Function libraries"
      }
    }
  },
  {
    "id": 35,
    "chapter": "Intro to OS",
    "tag": "HK211",
    "question": {
      "main": "Chọn câu đúng về so sánh multiprogramming và time-sharing (multitasking):"
    },
    "options": {
      "A": "Multiprogramming làm giảm hiệu suất sử dụng CPU còn time-sharing thì làm tăng hiệu suất sử dụng CPU",
      "B": "Hệ thống multiprogramming không chú trọng khả năng tương tác hiệu quả với người dùng, còn time-sharing không cung cấp khả năng tương tác hiệu quả với người dùng",
      "C": "Trái ý B",
      "D": "Multiprogramming giữ nhiều công việc trong bộ nhớ còn time-sharing chỉ giữ một"
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "Choose the correct statement comparing multiprogramming and time-sharing (multitasking):"
      },
      "options": {
        "A": "Multiprogramming decreases CPU utilization while time-sharing increases it",
        "B": "Multiprogramming systems do not focus on effective user interactivity, and time-sharing also fails to provide effective user interactivity",
        "C": "The opposite of option B",
        "D": "Multiprogramming keeps many jobs in memory while time-sharing keeps only one"
      }
    }
  },
  {
    "id": 36,
    "chapter": "Intro to OS",
    "tag": "HK181",
    "question": {
      "main": "Giao diện cung cấp để truy cập các dịch vụ của hệ điều hành thông qua:"
    },
    "options": {
      "A": "Thư viện hàm (library).",
      "B": "Gọi hệ thống (system call).",
      "C": "Các lệnh mã máy (assembly instructions).",
      "D": "Application Programming Interface (API)."
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "The interface for accessing operating system services is provided through:"
      },
      "options": {
        "A": "Function libraries.",
        "B": "System calls.",
        "C": "Machine-language (assembly) instructions.",
        "D": "Application Programming Interface (API)."
      }
    }
  },
  {
    "id": 37,
    "chapter": "Intro to OS",
    "tag": "HK181",
    "question": {
      "main": "Chọn câu đúng:"
    },
    "options": {
      "A": "MS DOS và UNIX đều là cấu trúc dạng hệ thống đơn (monolithic) và có thể phân lớp.",
      "B": "MS DOS và Linux đều là cấu trúc microkernel và theo hướng tiếp cận phân lớp (layered approach).",
      "C": "MS DOS và Linux đều là cấu trúc dạng hệ thống đơn (monolithic) và có thể phân lớp.",
      "D": "UNIX và Linux đều là cấu trúc microkernel."
    },
    "answer": "A",
    "en": {
      "question": {
        "main": "Choose the correct statement:"
      },
      "options": {
        "A": "Both MS-DOS and UNIX are monolithic structures and can be layered.",
        "B": "Both MS-DOS and Linux are microkernel structures following the layered approach.",
        "C": "Both MS-DOS and Linux are monolithic structures and can be layered.",
        "D": "Both UNIX and Linux are microkernel structures."
      }
    }
  },
  {
    "id": 38,
    "chapter": "Intro to OS",
    "tag": "HK181",
    "question": {
      "main": "Chọn câu đúng về cấu trúc monolithic và cấu trúc microkernel:"
    },
    "options": {
      "A": "Trên cấu trúc HDH monolithic các module giao tiếp dùng kiểu truyền thông điệp (message passing), còn cấu trúc HDH microkernel các module giao tiếp dùng kiểu truyền vùng nhớ chia sẻ (shared memory).",
      "B": "Trên cấu trúc HDH monolithic các module giao tiếp dùng kiểu truyền thông điệp (message passing), còn cấu trúc HDH microkernel các module giao tiếp cũng dùng kiểu truyền thông điệp.",
      "C": "Trên cấu trúc HDH microkernel các module giao tiếp dùng kiểu truyền thông điệp (message passing), còn cấu trúc HDH monolithic các module giao tiếp dùng kiểu truyền vùng nhớ chia sẻ (shared memory).",
      "D": "Cả A, B và C đều sai."
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "Choose the correct statement about the monolithic and microkernel structures:"
      },
      "options": {
        "A": "In a monolithic OS structure, modules communicate via message passing, while in a microkernel OS structure, modules communicate via shared memory.",
        "B": "In a monolithic OS structure, modules communicate via message passing, and in a microkernel OS structure, modules also communicate via message passing.",
        "C": "In a microkernel OS structure, modules communicate via message passing, while in a monolithic OS structure, modules communicate via shared memory.",
        "D": "A, B, and C are all incorrect."
      }
    }
  },
  {
    "id": 39,
    "chapter": "Intro to OS",
    "tag": "HK181",
    "question": {
      "main": "Hệ thống làm việc theo nguyên tắc phân chia thời gian (time-sharing system) phù hợp với các ứng dụng:"
    },
    "options": {
      "A": "Bó (Batch).",
      "B": "Hướng giao diện.",
      "C": "Thời gian thực thi.",
      "D": "Hệ thống uniprogramming."
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "A time-sharing system is well suited to which applications:"
      },
      "options": {
        "A": "Batch.",
        "B": "Interface-oriented (interactive).",
        "C": "Execution-time-oriented.",
        "D": "Uniprogramming systems."
      }
    }
  },
  {
    "id": 40,
    "chapter": "Intro to OS",
    "tag": "HK181",
    "question": {
      "main": "Các dịch vụ của hệ điều hành nhằm cung cấp các chức năng nào sau đây hướng quản lí hệ thống một cách hiệu quả:"
    },
    "options": {
      "A": "Thực thi chương trình, xử lí hệ thống tập tin, phát hiện lỗi.",
      "B": "Cấp phát tài nguyên, quản lí tài khoản, bảo mật, bảo vệ.",
      "C": "Giao tiếp tiến trình, giao diện làm việc với người dùng và xử lí hệ thống tập tin.",
      "D": "Tất cả đều sai."
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "Which of the following functions do operating system services provide for effective system management:"
      },
      "options": {
        "A": "Program execution, file system handling, and error detection.",
        "B": "Resource allocation, account management, security, and protection.",
        "C": "Process communication, a user working interface, and file system handling.",
        "D": "All of the above are incorrect."
      }
    }
  },
  {
    "id": 41,
    "chapter": "Intro to OS",
    "tag": "HK181",
    "question": {
      "main": "Chọn phát biểu đúng về cấu trúc monolithic:"
    },
    "options": {
      "A": "Có hiệu năng giảm so với các cấu trúc khác.",
      "B": "Việc trao đổi dữ liệu giữa các thành phần chức năng kernel thực hiện chủ yếu bằng cơ chế message-passing.",
      "C": "Các dịch vụ của HDH đều được tích hợp vào kernel.",
      "D": "Việc thêm các chức năng của HDH được thực hiện dễ dàng hơn so với cấu trúc microkernel."
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "Choose the correct statement about the monolithic structure:"
      },
      "options": {
        "A": "It has lower performance compared to other structures.",
        "B": "Data exchange between the kernel's functional components is mainly done via message passing.",
        "C": "All OS services are integrated into the kernel.",
        "D": "Adding OS functions is easier than in a microkernel structure."
      }
    }
  },
  {
    "id": 42,
    "chapter": "Intro to OS",
    "tag": "HK181",
    "question": {
      "main": "Chọn câu đúng:"
    },
    "options": {
      "A": "Multiprogramming làm giảm hiệu suất sử dụng CPU còn time-sharing thì làm tăng hiệu suất sử dụng CPU.",
      "B": "Multiprogramming giữ nhiều công việc trong bộ nhớ, còn time-sharing chỉ giữ một.",
      "C": "Hệ thống multiprogramming không cung cấp khả năng tương tác hiệu quả với người dùng.",
      "D": "Cả 3 đều sai."
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "Choose the correct statement:"
      },
      "options": {
        "A": "Multiprogramming decreases CPU utilization while time-sharing increases it.",
        "B": "Multiprogramming keeps many jobs in memory, while time-sharing keeps only one.",
        "C": "Multiprogramming systems do not provide effective user interactivity.",
        "D": "All three are incorrect."
      }
    }
  },
  {
    "id": 43,
    "chapter": "Intro to OS",
    "tag": "HK181",
    "question": {
      "main": "Chọn phát biểu đúng về hệ thống phân bố:"
    },
    "options": {
      "A": "Ưu điểm là tính bảo mật cao.",
      "B": "Khó chia sẻ tài nguyên.",
      "C": "Giảm độ sẵn sàng (low availability).",
      "D": "Client-server là một mô hình trong hệ thống phân bố."
    },
    "answer": "D",
    "en": {
      "question": {
        "main": "Choose the correct statement about distributed systems:"
      },
      "options": {
        "A": "Their advantage is high security.",
        "B": "Resources are hard to share.",
        "C": "They reduce availability (low availability).",
        "D": "Client-server is a model within distributed systems."
      }
    }
  },
  {
    "id": 44,
    "chapter": "Intro to OS",
    "tag": "HK181",
    "question": {
      "main": "Chọn phát biểu đúng: \"system call...\":"
    },
    "options": {
      "A": "Cho phép người dùng can thiệp sâu vào hệ thống.",
      "B": "Cho phép các process mức người dùng yêu cầu dịch vụ của HDH.",
      "C": "Là ứng dụng của HDH.",
      "D": "Là lệnh hệ thống để người dùng tác động vào phần cứng máy tính."
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "Choose the correct statement: \"a system call...\":"
      },
      "options": {
        "A": "Allows users to deeply interfere with the system.",
        "B": "Allows user-level processes to request services from the OS.",
        "C": "Is an OS application.",
        "D": "Is a system command for users to directly control computer hardware."
      }
    }
  },
  {
    "id": 45,
    "chapter": "Intro to OS",
    "tag": "HK181",
    "question": {
      "main": "HDH Linux có kiến trúc lõi nào sau đây:"
    },
    "options": {
      "A": "Monolithic kernel.",
      "B": "Hybrid kernel.",
      "C": "Microkernel.",
      "D": "Module kernel."
    },
    "answer": "A",
    "en": {
      "question": {
        "main": "Which of the following describes the Linux kernel's architecture:"
      },
      "options": {
        "A": "Monolithic kernel.",
        "B": "Hybrid kernel.",
        "C": "Microkernel.",
        "D": "Module kernel."
      }
    }
  },
  {
    "id": 46,
    "chapter": "Intro to OS",
    "tag": "HK181",
    "question": {
      "main": "Hệ thống multiprogramming:"
    },
    "options": {
      "A": "Là hệ thống dễ phát triển hơn hệ thống đơn lập trình.",
      "B": "Thực hiện mỗi công việc nhanh hơn.",
      "C": "Chỉ được dùng trong các hệ thống máy tính lớn trước đây.",
      "D": "Thực hiện nhiều công việc cùng lúc đưa đến hiệu suất hệ thống tốt hơn."
    },
    "answer": "D",
    "en": {
      "question": {
        "main": "A multiprogramming system:"
      },
      "options": {
        "A": "Is easier to develop than a uniprogramming system.",
        "B": "Executes each job faster.",
        "C": "Was only used in old large-scale computer systems.",
        "D": "Runs multiple jobs at once, leading to better system performance."
      }
    }
  },
  {
    "id": 47,
    "chapter": "Intro to OS",
    "tag": "HK161",
    "question": {
      "main": "Chức năng chính của trình biên dịch lệnh (command interpreter) là:"
    },
    "options": {
      "A": "Thiết lập giao diện giữa API và trình ứng dụng",
      "B": "Xử lý các tập tin trong hệ điều hành",
      "C": "Gọi và thực hiện lệnh kế tiếp của người sử dụng yêu cầu",
      "D": "Khác các nhiệm vụ đã nêu"
    },
    "answer": "C",
    "en": {
      "question": {
        "main": "The main function of the command interpreter is:"
      },
      "options": {
        "A": "Setting up the interface between the API and applications",
        "B": "Processing files in the operating system",
        "C": "Fetching and executing the next command requested by the user",
        "D": "None of the above tasks"
      }
    }
  },
  {
    "id": 48,
    "chapter": "Intro to OS",
    "tag": "HK161",
    "question": {
      "main": "Giao diện cung cấp để truy cập các dịch vụ của hệ điều hành thông qua:"
    },
    "options": {
      "A": "Thư viện hàm (library)",
      "B": "Gọi hệ thống (System calls)",
      "C": "Các lệnh mã máy (assembly instructions)",
      "D": "API"
    },
    "answer": "B",
    "en": {
      "question": {
        "main": "The interface for accessing operating system services is provided through:"
      },
      "options": {
        "A": "Function libraries",
        "B": "System calls",
        "C": "Machine-language (assembly) instructions",
        "D": "API"
      }
    }
  },
  {
    "id": 49,
    "chapter": "Intro to OS",
    "tag": "HK161",
    "question": {
      "main": "Hệ điều hành máy tính là:"
    },
    "options": {
      "A": "Bộ phận cung cấp dịch vụ hệ thống cho các trình ứng dụng",
      "B": "Bộ phận kết nối phần cứng của hệ thống và các trình ứng dụng",
      "C": "Một bộ các chương trình để quản lý các tài nguyên phần cứng hệ thống máy tính",
      "D": "Tất cả những ý nêu trên"
    },
    "answer": "D",
    "en": {
      "question": {
        "main": "A computer's operating system is:"
      },
      "options": {
        "A": "The component that provides system services to application programs",
        "B": "The component that connects the system's hardware and application programs",
        "C": "A set of programs that manage a computer system's hardware resources",
        "D": "All of the above"
      }
    }
  },
  {
    "id": 50,
    "chapter": "Intro to OS",
    "tag": "HK161",
    "question": {
      "main": "Trình điều khiển thiết bị (Device driver) là:"
    },
    "options": {
      "A": "Phần mềm giao tiếp và điều khiển hoạt động các thiết bị của máy tính",
      "B": "Là thiết bị phần cứng",
      "C": "Phần mềm cung cấp các thao tác chuẩn hoá cho các thiết bị khác nhau",
      "D": "Card nằm trong máy tính để giao tiếp với thiết bị ngoại vi"
    },
    "answer": "A",
    "en": {
      "question": {
        "main": "A device driver is:"
      },
      "options": {
        "A": "Software that communicates with and controls the operation of a computer's devices",
        "B": "A piece of hardware",
        "C": "Software that provides standardized operations for different devices",
        "D": "A card inside the computer used to communicate with peripheral devices"
      }
    }
  },
  {
    "id": 51,
    "chapter": "Intro to OS",
    "tag": "HK161",
    "question": {
      "main": "Hệ thống đa lập trình (Multiprogramming system):"
    },
    "options": {
      "A": "Thực hiện nhiều công việc cùng lúc đưa đến hiệu suất hệ thống tốt hơn",
      "B": "Thực hiện mỗi công việc nhanh hơn",
      "C": "Chỉ được dùng trong các hệ thống máy tính lớn trước đây",
      "D": "Là hệ thống dễ phát triển hơn hệ thống đơn lập trình"
    },
    "answer": "A",
    "en": {
      "question": {
        "main": "A multiprogramming system:"
      },
      "options": {
        "A": "Runs multiple jobs at once, leading to better system performance",
        "B": "Executes each job faster",
        "C": "Was only used in old large-scale computer systems",
        "D": "Is easier to develop than a uniprogramming system"
      }
    }
  },
  {
    "id": 52,
    "chapter": "Intro to OS",
    "tag": "HK161",
    "question": {
      "main": "Lệnh nào sau đây chỉ có thể được thực hiện ở chế độ lỗi (kernel mode):"
    },
    "options": {
      "A": "Truy cập thiết bị xuất/nhập",
      "B": "Đặt giá trị của đồng hồ hệ thống",
      "C": "Tắt chế độ ngắt quãng",
      "D": "Tất cả các lệnh nêu trên"
    },
    "answer": "D",
    "en": {
      "question": {
        "main": "Which of the following instructions can only be executed in kernel mode:"
      },
      "options": {
        "A": "Accessing I/O devices",
        "B": "Setting the value of the system clock",
        "C": "Disabling interrupts",
        "D": "All of the above instructions"
      }
    }
  }
]

export default osReviewCh1To2
