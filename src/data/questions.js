const questions = [
  {
    "id": 1,
    "chapter": "Introduction",
    "question": "Đâu là sự phân loại các máy tính trong giai đoạn hiện tại?",
    "options": [
      "Máy tính nhúng, máy tính cá nhân, máy chủ và siêu máy tính",
      "Thiết bị di động, máy tính cá nhân và máy chủ",
      "Siêu máy tính, điện toán đám mây và máy tính cá nhân",
      "Tất cả đều sai"
    ],
    "answer": 0
  },
  {
    "id": 2,
    "chapter": "Performance",
    "question": "Yếu tố nào ảnh hưởng đến hiệu suất của một chương trình trên máy tính?",
    "options": [
      "Ngôn ngữ lập trình",
      "Kiến trúc bộ xử lý",
      "Kiến trúc tập lệnh",
      "Tất cả đều đúng"
    ],
    "answer": 3
  },
  {
    "id": 3,
    "chapter": "Performance",
    "question": "Hoạt động của hệ điều hành sẽ ảnh hưởng đến loại thời gian nào?",
    "options": [
      "Thời gian CPU - CPU time",
      "Thời gian thực thi CPU - CPU execution time",
      "Thời gian tổng thể - Elapsed time",
      "Tất cả các loại thời gian kể trên"
    ],
    "answer": 2
  },
  {
    "id": 4,
    "chapter": "Performance",
    "question": "Để tăng hiệu suất của một ứng dụng, cách nào sau đây là khả thi?",
    "options": [
      "Giảm thời gian một chu kỳ của máy tính thực thi ứng dụng",
      "Thay đổi ngôn ngữ lập trình để giảm số lượng lệnh máy",
      "Thay đổi giải thuật để giảm số chu kỳ cần thiết cho chương trình",
      "Tất cả các biện pháp trên"
    ],
    "answer": 3
  },
  {
    "id": 5,
    "chapter": "CPU",
    "question": "Tại sao tần số xung clock của các bộ xử lý Intel bắt đầu giảm vào năm 2004?",
    "options": [
      "Do nhu cầu tính toán giảm",
      "Gặp phải bức tường công suất",
      "Chuyển sang các hệ thống đa nhân",
      "Để giảm giá thành sản xuất do khủng hoảng kinh tế"
    ],
    "answer": 1
  },
  {
    "id": 6,
    "chapter": "Programming Languages",
    "question": "Mức trừu tượng của chương trình giảm dần theo thứ tự nào?",
    "options": [
      "Ngôn ngữ cấp cao, ngôn ngữ máy, hợp ngữ",
      "Ngôn ngữ máy, hợp ngữ, ngôn ngữ cấp cao",
      "Ngôn ngữ cấp cao, hợp ngữ, ngôn ngữ máy",
      "Hợp ngữ, ngôn ngữ máy, ngôn ngữ cấp cao"
    ],
    "answer": 2
  },
  {
    "id": 7,
    "chapter": "MIPS",
    "question": "Đâu là phát biểu đúng trong ngữ cảnh bộ xử lý kiến trúc MIPS?",
    "options": [
      "Một lệnh máy tương đương nhiều lệnh ngôn ngữ lập trình C",
      "Một lệnh cấp cao luôn phải cần nhiều lệnh máy",
      "Một lệnh hợp ngữ tương đương một lệnh máy",
      "Tất cả đều sai"
    ],
    "answer": 2
  },
  {
  "id": 8,
  "chapter": "Performance",
  "context": "Đoạn chương trình gồm 1000 lệnh trong đó lệnh load/store chiếm 30%, lệnh jump chiếm 10%, 20% lệnh rẽ nhánh, còn lại là các lệnh về đại số. Biết CPI của lệnh load/store là 2.5, lệnh jump là 1, lệnh rẽ nhánh là 1.5 và lệnh đại số là 2. Biết máy tính có tần số hoạt động là 2 GHz.",
  "question": "Tính thời gian thực thi của đoạn chương trình trên?",
  "options": [
    "950 ns",
    "975 ns",
    "1000 ns",
    "1950 ns"
  ],
  "answer": 1
},
{
  "id": 9,
  "chapter": "Performance",
  "context": "Đoạn chương trình gồm 1000 lệnh trong đó lệnh load/store chiếm 30%, lệnh jump chiếm 10%, 20% lệnh rẽ nhánh, còn lại là các lệnh về đại số. Biết CPI của lệnh load/store là 2.5, lệnh jump là 1, lệnh rẽ nhánh là 1.5 và lệnh đại số là 2. Biết máy tính có tần số hoạt động là 2 GHz.",
  "question": "Phải cải tiến CPI của lệnh load/store thành bao nhiêu để chương trình chạy nhanh gấp 1.5×?",
  "options": [
    "0.5",
    "1",
    "1.5",
    "Tất cả đều sai"
  ],
  "answer": 3
},
{
  "id": 10,
  "chapter": "Performance",
  "context": "Đoạn chương trình gồm 1000 lệnh trong đó lệnh load/store chiếm 30%, lệnh jump chiếm 10%, 20% lệnh rẽ nhánh, còn lại là các lệnh về đại số. Biết CPI của lệnh load/store là 2.5, lệnh jump là 1, lệnh rẽ nhánh là 1.5 và lệnh đại số là 2. Biết máy tính có tần số hoạt động là 2 GHz.",
  "question": "Tính CPI trung bình của đoạn chương trình trên?",
  "options": [
    "1.25",
    "1.5",
    "1.95",
    "2.0"
  ],
  "answer": 2
},
{
  "id": 11,
  "chapter": "Performance",
  "context": "Đoạn chương trình gồm 1000 lệnh trong đó lệnh load/store chiếm 30%, lệnh jump chiếm 10%, 20% lệnh rẽ nhánh, còn lại là các lệnh về đại số. Biết CPI của lệnh load/store là 2.5, lệnh jump là 1, lệnh rẽ nhánh là 1.5 và lệnh đại số là 2. Biết máy tính có tần số hoạt động là 2 GHz.",
  "question": "Người ta tiến hành cải tiến lệnh load/store sao cho CPI của nó giảm đi một nửa. Tính speedup của hệ thống?",
  "options": [
    "≈1.22",
    "≈1.24",
    "≈1.26",
    "≈1.28"
  ],
  "answer": 1
},
{
  "id": 12,
  "chapter": "CPU",
  "question": "Định luật Moore là định luật về điều gì?",
  "options": [
    "Sự gia tăng kích thước chip",
    "Sự gia tăng giá thành sản xuất các chip",
    "Sự gia tăng hiệu suất của các chip",
    "Sự gia tăng số lượng các bóng bán dẫn trên chip"
  ],
  "answer": 3
},
{
  "id": 13,
  "chapter": "MIPS",
  "question": "Lệnh nào sau đây là một lệnh MIPS hợp lệ?",
  "options": [
    "add $0, $t0, 5",
    "sll $t0, $t1, 34",
    "lw $t1, 0x08($t0)",
    "andi $t0, $t1, $t2"
  ],
  "answer": 2
},
{
  "id": 14,
  "chapter": "MIPS",
  "question": "Cho lệnh MIPS sau: add $s0, $s0, $s0 #add two registers. Chọn phát biểu đúng:",
  "options": [
    "Lệnh trên có lỗi biên dịch do toán hạng nguồn và đích giống nhau",
    "Lệnh trên có lỗi thực thi do toán hạng nguồn và đích giống nhau",
    "$s0 = $s0 * 2",
    "Tất cả đều sai"
  ],
  "answer": 2
},
{
  "id": 15,
  "chapter": "MIPS",
  "question": "Cho đoạn lệnh MIPS sau: lw $t0, 30($s3) # load word; add $s1, $s2, $t0. Giả sử $s3 chứa địa chỉ nền của một dãy integer, chọn phát biểu đúng:",
  "options": [
    "Đoạn lệnh trên có lỗi khi biên dịch",
    "Đoạn lệnh trên có lỗi khi thực thi",
    "$s1 = $s2 + 30*$s3",
    "Tất cả đều sai"
  ],
  "answer": 3
},
{
  "id": 16,
  "chapter": "MIPS",
  "question": "Chọn phát biểu đúng về các lệnh MIPS chuẩn sau:",
  "options": [
    "Lệnh lhu chuyển 16 bits dữ liệu từ bộ nhớ vào cả 16 bits cao lẫn 16 bits thấp",
    "Lệnh lb chuyển 1 byte dữ liệu từ thanh ghi xuống bộ nhớ",
    "Lệnh sb thực hiện việc mở rộng dấu dữ liệu",
    "Lệnh lui chuyển giá trị tức thời vào 16 bits cao của thanh ghi"
  ],
  "answer": 3
},
{
  "id": 17,
  "chapter": "MIPS",
  "question": "Để gán giá trị 0x12345678 cho thanh ghi $t0, cần thực hiện những lệnh MIPS chuẩn nào?",
  "options": [
    "lui $t0, 0x1234; lli $t0, 0x5678",
    "lui $t0, 4660; ori $t0, $t0, 22136",
    "addi $t0, $zero, 0x12345678",
    "Tất cả đều đúng"
  ],
  "answer": 1
},
{
  "id": 18,
  "chapter": "MIPS",
  "question": "Muốn đảo tất cả các bit trong thanh ghi $s1 thì cần thực hiện lệnh MIPS chuẩn nào sau đây?",
  "options": [
    "not $s0, $s1",
    "nor $s0, $s1, $s1",
    "andi $s0, $s1, -1",
    "or $s0, $s1, $zero"
  ],
  "answer": 1
},
{
  "id": 19,
  "chapter": "MIPS",
  "question": "Lệnh MIPS chuẩn nào sau đây gán giá trị 0 cho thanh ghi $s0?",
  "options": [
    "add $s0, $s0, $zero",
    "ori $s0, $s0, 0",
    "lui $s0, 0",
    "Các câu A, B và C đều đúng"
  ],
  "answer": 2
},
{
  "id": 20,
  "chapter": "MIPS",
  "question": "Hãy cho biết giá trị thanh ghi $t0 là bao nhiêu sau khi thực thi lệnh lh $t0, 6($s0)",
  "options": [
    "Lệnh trên bị lỗi vì $s0 + 6 không chia hết cho 4",
    "0x0000F0DE",
    "0x0000DEF0",
    "0xFFFFDEF0"
  ],
  "answer": 3
},
{
  "id": 21,
  "chapter": "MIPS",
  "question": "Hãy cho biết giá trị thanh ghi $t0 là bao nhiêu sau khi thực thi lệnh lw $t0, 6($s0)",
  "options": [
    "Lệnh trên bị lỗi vì $s0 + 6 không chia hết cho 4",
    "Chưa thể xác định vì chưa biết giá trị hai ô nhớ có địa chỉ 16 và 17",
    "0xF0DE",
    "0xDEF0"
  ],
  "answer": 0
},
{
  "id": 22,
  "chapter": "MIPS",
  "question": "Hãy cho biết những ô nhớ nào sẽ thay đổi giá trị sau khi thực hiện lệnh sw $t1, 4($s0), nếu thanh ghi $t1 mang giá trị 0x00000000",
  "options": [
    "Lệnh trên bị lỗi",
    "Các ô nhớ có địa chỉ 8, 9, 10 và 11",
    "Các ô nhớ có địa chỉ 12, 13, 14, và 15",
    "Không có ô nhớ nào thay đổi giá trị"
  ],
  "answer": 1
},
{
  "id": 23,
  "chapter": "MIPS",
  "question": "Đâu không phải là một loại toán hạng trong các lệnh MIPS chuẩn?",
  "options": [
    "Số nguyên",
    "Số thực",
    "Ô nhớ",
    "Thanh ghi"
  ],
  "answer": 1
},
{
  "id": 24,
  "chapter": "MIPS",
  "context": "Giả sử thanh ghi $s0 và $s1 mang giá trị lần lượt là 0x12345678 và 0xCAFEFACE.",
  "question": "Giá trị của thanh ghi $s2 sẽ là bao nhiêu sau lệnh MIPS? andi $s2, $s0, 2017",
  "options": [
    "Lệnh trên có lỗi cú pháp",
    "0x12340660",
    "0x00000660",
    "Tất cả đều sai"
  ],
  "answer": 2
},
{
  "id": 25,
  "chapter": "MIPS",
  "context": "Giả sử thanh ghi $s0 và $s1 mang giá trị lần lượt là 0x12345678 và 0xCAFEFACE.",
  "question": "Giá trị của thanh ghi $s2 sẽ là bao nhiêu sau đoạn lệnh MIPS? sll $s2, $s0, 4; nor $s2, $s1, $s0",
  "options": [
    "Lệnh trên có lỗi cú pháp",
    "0x25010101",
    "0x14000031",
    "0xDAFEFEFE"
  ],
  "answer": 1
},
{
  "id": 26,
  "chapter": "MIPS",
  "question": "Lệnh máy của lệnh hợp ngữ MIPS add $t0, $s1, $s2 là gì?",
  "options": [
    "00000010001100100100000000100000",
    "0x02324020",
    "Cả A & B đều sai",
    "Cả A & B đều đúng"
  ],
  "answer": 3
},
{
  "id": 27,
  "chapter": "MIPS",
  "question": "Hãy cho biết lệnh hợp ngữ MIPS tương ứng với lệnh máy: 00000000000100000010100010000000",
  "options": [
    "Không có lệnh hợp ngữ tương đương",
    "sll $t2, $s0, 2",
    "and $zero, $t2, $s0",
    "add $zero, $t2, $s0"
  ],
  "answer": 1
},
{
  "id": 28,
  "chapter": "MIPS",
  "question": "Lệnh máy của lệnh hợp ngữ MIPS lw $t0, -32($s1) là gì?",
  "options": [
    "0x8E280020",
    "0x8E28FFE0",
    "0x8D11FFE0",
    "0x8D110020"
  ],
  "answer": 1
},
{
  "id": 29,
  "chapter": "Performance",
  "question": "Một xung đồng hồ có 2×10^9 lần có giá trị 1 trong mỗi giây, vậy chu kỳ của nó là bao nhiêu?",
  "options": [
    "2×10^-9 giây",
    "0.5 ns",
    "2 GHz",
    "Không thể xác định được chu kỳ"
  ],
  "answer": 1
},
{
  "id": 30,
  "chapter": "CPU",
  "question": "Đâu là đặc tính đúng của một kiến trúc tập lệnh kiểu RISC (Reduced Instruction Set Computer)?",
  "options": [
    "Số lượng lệnh ít",
    "Số lượng thanh ghi nhiều (≥ 32)",
    "CPI trung bình thấp",
    "Tất cả các đặc tính trên"
  ],
  "answer": 3
},
{
  "id": 31,
  "chapter": "MIPS",
  "question": "Chọn phát biểu đúng về thanh ghi bộ đếm chương trình (Program counter - PC) trong kiến trúc MIPS chuẩn",
  "options": [
    "Là thanh ghi đa dụng",
    "Chứa địa chỉ của lệnh đang được thực thi",
    "Có thể được cập nhật trực tiếp bằng các lệnh MIPS",
    "Tất cả các đặc tính trên đều sai"
  ],
  "answer": 1
},
{
  "id": 32,
  "chapter": "MIPS",
  "question": "Toán hạng bộ nhớ trong các lệnh MIPS chuẩn có thể có dạng nào sau đây?",
  "options": [
    "1200",
    "$s0($s1)",
    "100($s1)",
    "Tất cả các dạng trên"
  ],
  "answer": 2
},
{
  "id": 33,
  "chapter": "CPU",
  "question": "Sắp xếp các công nghệ chế tạo bộ xử lý theo thứ tự từ cũ đến mới:",
  "options": [
    "Bóng đèn chân không (Vacuum tube), Mạch tích hợp (Integrated circuit), Bóng bán dẫn (Transistor)",
    "Mạch tích hợp, Bóng bán dẫn, Bóng đèn chân không",
    "Mạch tích hợp, Bóng đèn chân không, Bóng bán dẫn",
    "Bóng đèn chân không, Bóng bán dẫn, Mạch tích hợp"
  ],
  "answer": 3
},
{
  "id": 34,
  "chapter": "Introduction",
  "question": "Sự khác biệt giữa máy chủ (Server) và siêu máy tính (Supercomputer) là gì?",
  "options": [
    "Siêu máy tính có giá thành cao hơn rất nhiều",
    "Máy chủ phải truy xuất thông qua môi trường mạng",
    "Chi phí vận hành máy chủ cao hơn vì có rất nhiều người sử dụng cùng lúc",
    "Tất cả các yếu tố trên"
  ],
  "answer": 0
},
{
  "id": 35,
  "chapter": "Performance",
  "question": "Benchmark SPEC CPU2006 là gì?",
  "options": [
    "Một phần mềm dùng để đánh giá hiệu suất các bộ xử lý",
    "Một phần mềm dùng để phân tích các thông số cần thiết cho việc đánh giá hiệu suất của một ứng dụng (CPI, Instruction count, Cycle time)",
    "Một phần mềm dùng để đánh giá công suất các bộ xử lý",
    "Tất cả đều sai"
  ],
  "answer": 0
},
{
  "id": 36,
  "chapter": "Performance",
  "question": "Một ứng dụng được biên dịch trên một máy tính bởi hai trình biên dịch 1 và 2. Nếu biết rằng CPI trung bình có trọng số của đoạn chương trình được sinh ra bởi trình biên dịch 1 lớn hơn trình biên dịch 2 thì kết luận nào sau đây là đúng?",
  "options": [
    "Trình biên dịch 1 tốt hơn",
    "Trình biên dịch 2 tốt hơn",
    "Hai trình biên dịch là như nhau vì thực hiện trên cùng một máy",
    "Chưa thể xác định được trình biên dịch nào tốt hơn"
  ],
  "answer": 3
},
{
  "id": 37,
  "chapter": "Performance",
  "context": "Một chương trình P được biên dịch trên hai hệ thống máy tính khác nhau và có các thông số như sau: Máy tính A: số lượng lệnh = 1.5×10^6, tần số hoạt động = 2.0 GHz, CPI trung bình = 1.5. Máy tính B: số lượng lệnh = 2.0×10^6, tần số hoạt động = 3.0 GHz, CPI trung bình = 1.0.",
  "question": "Thời gian thực thi đoạn chương trình trên trên máy A và B lần lượt là:",
  "options": [
    "1.125 ms và 0.667 ms",
    "2.5 ms và 1.3 ms",
    "Chưa thể xác định",
    "Tất cả đều sai"
  ],
  "answer": 0
},
{
  "id": 38,
  "chapter": "Performance",
  "context": "Một chương trình P được biên dịch trên hai hệ thống máy tính khác nhau và có các thông số như sau: Máy tính A: số lượng lệnh = 1.5×10^6, tần số hoạt động = 2.0 GHz, CPI trung bình = 1.5. Máy tính B: số lượng lệnh = 2.0×10^6, tần số hoạt động = 3.0 GHz, CPI trung bình = 1.0.",
  "question": "Chọn kết luận đúng:",
  "options": [
    "Máy A nhanh hơn máy B xấp xỉ 1.68 lần",
    "Máy B nhanh hơn máy A xấp xỉ 1.68 lần",
    "Máy A nhanh hơn máy B 1.5 lần",
    "Máy B nhanh hơn máy A 1.5 lần"
  ],
  "answer": 1
},
{
  "id": 39,
  "chapter": "Performance",
  "context": "Một chương trình P được biên dịch trên hai hệ thống máy tính khác nhau và có các thông số như sau: Máy tính A: số lượng lệnh = 1.5×10^6, tần số hoạt động = 2.0 GHz, CPI trung bình = 1.5. Máy tính B: số lượng lệnh = 2.0×10^6, tần số hoạt động = 3.0 GHz, CPI trung bình = 1.0.",
  "question": "Cần thay đổi tần số của máy chậm hơn thành bao nhiêu để hiệu suất hai máy như nhau?",
  "options": [
    "4.0 GHz",
    "3.623 GHz",
    "3.373 GHz",
    "Chưa thể xác định"
  ],
  "answer": 2
},
{
  "id": 40,
  "chapter": "MIPS",
  "question": "Lệnh MIPS chuẩn nào sau đây gán giá trị 0xCA201800 vào thanh ghi $a0",
  "options": [
    "move $a0, 0xCA201800",
    "addi $a0, $zero, 0xCA201800",
    "lui $a0, 0xCA20; ori $a0, $a0, 0x1800",
    "ori $a0, $zero, 0x1800; lui $a0, 0xCA20"
  ],
  "answer": 2
},
{
  "id": 41,
  "chapter": "MIPS",
  "question": "Chọn phát biểu SAI về kiểu lệnh kiểu R",
  "options": [
    "Khi sử dụng lệnh R thì phải luôn đủ 3 thanh ghi (Rs, Rt, Rd)",
    "Trường Function dùng xác định phép toán của lệnh đó",
    "Trường Opcode luôn bằng KHÔNG (ZERO)",
    "Lệnh bne, beq không thuộc kiểu R"
  ],
  "answer": 0
},
{
  "id": 42,
  "chapter": "MIPS",
  "question": "Một lệnh rẽ nhánh có điều kiện thì có thể rẽ tối đa đến:",
  "options": [
    "Bất kì vị trí nào trong chương trình",
    "Bất kì vị trí nào trong bộ nhớ",
    "Trong khoảng +/- 2^15 lệnh từ lệnh rẽ nhánh hiện tại",
    "Trong khoảng +/- 2^16 lệnh từ lệnh rẽ nhánh hiện tại"
  ],
  "answer": 2
},
{
  "id": 43,
  "chapter": "MIPS",
  "question": "Trong phép cộng với số trực tiếp (addi), giá trị immediate:",
  "options": [
    "Là số nguyên có dấu 32 bit",
    "Là số nguyên không dấu 32 bit",
    "Là số nguyên có dấu 16 bit",
    "Là số nguyên không dấu 16 bit"
  ],
  "answer": 2
},
{
  "id": 44,
  "chapter": "MIPS",
  "question": "Chọn phát biểu đúng về lệnh jump",
  "options": [
    "Nhảy đến bất kỳ vị trí nào trong chương trình",
    "Nhảy đến bất kỳ vị trí nào trong bộ nhớ lệnh (instruction memory)",
    "Chỉ nhảy trong khoảng 2^26 lệnh tính từ câu lệnh jump",
    "Chỉ nhảy trong vùng được xác định bởi 4-bit cao PC cũ"
  ],
  "answer": 3
},
{
  "id": 45,
  "chapter": "MIPS",
  "question": "Chọn phát biểu ĐÚNG",
  "options": [
    "Địa chỉ trong lệnh load/store phải luôn chia hết cho 4",
    "Chỉ có lệnh load/store mới truy xuất bộ nhớ dữ liệu",
    "Lệnh load/store thuộc kiểu R",
    "Cả A, B, C đều đúng"
  ],
  "answer": 1
},
{
  "id": 46,
  "chapter": "MIPS",
  "question": "Chọn phát biểu ĐÚNG.",
  "options": [
    "Tất cả các lệnh phải có trường thanh ghi",
    "Phép cộng đại số có thể là kiểu R hoặc I",
    "Thanh ghi lệnh 32 bit do đó có thể có đến 2^32 lệnh khác nhau",
    "Các phép nhảy và rẽ nhánh có cùng chung kiểu lệnh"
  ],
  "answer": 1
},
{
  "id": 47,
  "chapter": "MIPS",
  "question": "Các lệnh nào sau đây đúng cú pháp",
  "options": [
    "add $zero, $a0, $a1",
    "lw $a0, $a1($a2)",
    "slt $a0, $a1, 100",
    "sll $a0, $a1, $a2"
  ],
  "answer": 0
},
{
  "id": 48,
  "chapter": "MIPS",
  "question": "Lệnh nào sau đây làm thay đổi thanh ghi $ra",
  "options": [
    "jr $ra",
    "jal label",
    "move $a0, $ra",
    "sw $ra, 4($sp)"
  ],
  "answer": 1
},
{
  "id": 49,
  "chapter": "MIPS",
  "question": "Lệnh MIPS chuẩn nào sau đây gán giá trị 0 cho thanh ghi $s0?",
  "options": [
    "add $s0, $s0, $zero",
    "ori $s0, $s0, 0",
    "lui $s0, 0",
    "Các câu A, B và C đều đúng"
  ],
  "answer": 2
},
{
  "id": 50,
  "chapter": "Floating Point",
  "question": "Tại sao các lệnh MIPS số thực lại không hỗ trợ số trực tiếp (immediate)?",
  "options": [
    "Vì số thực không biểu diễn trong máy tính được",
    "Vì số thực trong máy tính có kích thước bằng hoặc lớn hơn kích thước từ lệnh",
    "Vì số các khối phần cứng tính toán phép toán số thực đòi hỏi 2 thanh ghi dữ liệu nguồn",
    "Vì các lệnh số thực cần hai thanh ghi dữ liệu nguồn"
  ],
  "answer": 1
},
{
  "id": 51,
  "chapter": "Arithmetic",
  "question": "Dấu của phép nhân hai số nguyên có thể được tính bằng toán tử luận lý nào?",
  "options": [
    "and",
    "or",
    "xor",
    "nor"
  ],
  "answer": 2
},
{
  "id": 52,
  "chapter": "Arithmetic",
  "question": "Trường hợp nào sau đây có thể xảy ra tràn số",
  "options": [
    "Cộng số dương với số âm",
    "Trừ hai số dương",
    "Cộng hai số âm",
    "Tất cả các trường hợp trên"
  ],
  "answer": 2
},
{
  "id": 53,
  "chapter": "Floating Point",
  "question": "Chọn phát biểu đúng về các thanh ghi số thực trong bộ xử lý co-processor của MIPS",
  "options": [
    "Các thanh ghi có kích thước 64 bit vì số thực chính xác kép biểu diễn bằng 64 bit",
    "Có tất cả 32 thanh ghi số thực, các thanh ghi có thể được truy xuất theo cặp",
    "Giá trị của các thanh ghi chuẩn của MIPS (ví dụ $s0, $t0) được hiểu là số thực nếu các thanh ghi này tham gia vào các lệnh số thực",
    "Tất cả đều đúng"
  ],
  "answer": 1
},
{
  "id": 54,
  "chapter": "Floating Point",
  "question": "Chọn phát biểu đúng về dạng chuẩn IEEE 754",
  "options": [
    "Số thực âm sẽ được biểu diễn theo dạng bù hai giống như các biểu diễn số nguyên",
    "Dạng chuẩn IEEE 754 chỉ có hai dạng là 32 bit hoặc 64 bit",
    "Số thực dương và số thực âm có cùng giá trị tuyệt đối sẽ khác nhau 1 bit (trong lưu trữ)",
    "Mọi số thực trong tự nhiên đều có thể được biểu diễn chính xác bằng dạng chuẩn IEEE 754"
  ],
  "answer": 2
},
{
  "id": 55,
  "chapter": "Single Cycle CPU",
  "question": "Chọn phát biểu ĐÚNG khi bộ xử lý thực thi lệnh: lw $t0, -8($s0) # giả sử thanh ghi $s0 = 100",
  "options": [
    "Cờ “Zero” = 1",
    "Tín hiệu “MemRead” = 0 và “ALUSrc” = 1",
    "Tín hiệu “MemWrite” = 0 và “RegWrite” = 1",
    "Tín hiệu lựa chọn phép toán từ “ALU-Ctrl” là phép TRỪ"
  ],
  "answer": 2
},
{
  "id": 56,
  "chapter": "Single Cycle CPU",
  "question": "Chọn phát biểu ĐÚNG khi bộ xử lý thực thi lệnh: beq $t0, $t1, 8 # giả sử thanh ghi $t0 = $t1",
  "options": [
    "Cờ “Zero” = 1 và tín hiệu “Jump” = 1",
    "Tín hiệu “Branch” = 1 và “ALUSrc” = 1",
    "Giá trị thanh ghi sau khi thực thi lệnh này: PC = PC + 32",
    "Giá trị thanh ghi PC sau khi thực thi lệnh này: PC = PC + 36"
  ],
  "answer": 3
},
{
  "id": 57,
  "chapter": "Single Cycle CPU",
  "question": "Thời gian thực thi lệnh: beq $t0, $t1, 8 # giả sử thanh ghi $t0 = $t1",
  "options": [
    "303ps",
    "389ps",
    "386ps",
    "463ps"
  ],
  "answer": 2
},
{
  "id": 58,
  "chapter": "Single Cycle CPU",
  "question": "Chu kỳ xung nhịp nhanh nhất của thiết kế này:",
  "options": [
    "603ps",
    "606ps",
    "583ps",
    "547ps"
  ],
  "answer": 1
},
{
  "id": 59,
  "chapter": "Single Cycle CPU",
  "question": "Giả sử bộ xử lý đơn chu kỳ này hỗ trợ thêm lệnh SWR (Store Word Register). Xác định giá trị các tín hiệu điều khiển RegDst, ALUSrc, MemtoReg, MemWrite, biết rằng lệnh SWR có cú pháp như sau: SWR Rd, Rt(Rs) # Mem[Reg[Rt]+Reg[Rs]] = Reg[Rd]",
  "options": [
    "1 – 0 – 1 – 0",
    "0 – 1 – 1 – 0",
    "1 – 1 – 0 – 1",
    "0 – 0 – 1 – 1"
  ],
  "answer": 3
},
{
  "id": 60,
  "chapter": "Multi Cycle CPU",
  "question": "Từ thiết kế trên, người ta sửa đổi sang dạng đa chu kỳ. Với thiết kế đa chu kỳ, mỗi chu kỳ sẽ thực thi một trong 5 công đoạn: nạp lệnh (IF), giải mã lệnh (ID), tính toán (EX), truy xuất bộ nhớ dữ liệu (MEM), ghi giá trị vào thanh ghi (WB). Chu kỳ xung nhịp ngắn nhất có thể của thiết kế đa chu kỳ:",
  "options": [
    "200ps",
    "220ps",
    "180ps",
    "303ps"
  ],
  "answer": 1
},
{
  "id": 61,
  "chapter": "Single Cycle CPU",
  "question": "Chọn phát biểu ĐÚNG khi bộ xử lý thực thi lệnh: j 2018 # giả sử địa chỉ lệnh Jump này là 2000",
  "options": [
    "Tín hiệu “MemWrite” = x và “MemRead” = x (x: có thể 0 hay 1)",
    "Tín hiệu “RegWrite” = 1 và “ALUSrc” = x",
    "Giá trị thanh ghi PC sau khi thực thi lệnh nhảy: PC = 8072",
    "Giá trị thanh ghi PC sau khi thực thi lệnh nhảy: PC = 2018"
  ],
  "answer": 2
},
{
  "id": 62,
  "chapter": "Pipeline CPU",
  "question": "Từ thiết kế trên, người ta sửa đổi sang dạng đường ống 5 công đoạn: nạp lệnh (IF), giải mã lệnh (ID), tính toán (EX), truy xuất bộ nhớ dữ liệu (MEM), ghi giá trị vào thanh ghi (WB). Khi thực thi chương trình có số lệnh lớn, tính speedup của bộ xử lý mới theo cơ chế đường ống:",
  "options": [
    "4.5",
    "3.02",
    "2.74",
    "5"
  ],
  "answer": 1
},
{
  "id": 63,
  "chapter": "Pipeline CPU",
  "question": "Có bao nhiêu data hazard ở đoạn chương trình trên?",
  "options": [
    "3",
    "4",
    "5",
    "6"
  ],
  "answer": 1
},
{
  "id": 64,
  "chapter": "Pipeline CPU",
  "question": "Chỉ dùng phương pháp chèn stall để giải quyết data hazards. Tính CPI trung bình cho đoạn chương trình trên?",
  "options": [
    "3.6",
    "3.5",
    "3.3",
    "3.0"
  ],
  "answer": 0
},
{
  "id": 65,
  "chapter": "Pipeline CPU",
  "question": "Dùng phương pháp chèn stall và forwarding để giải quyết data hazards. Tính số chu kỳ xung nhịp cho đoạn chương trình trên?",
  "options": [
    "10",
    "11",
    "12",
    "15"
  ],
  "answer": 1
},
{
  "id": 66,
  "chapter": "Pipeline CPU",
  "question": "Tính speedup cho trường hợp bộ xử lý là 5-stage pipeline, sử dụng stall và forwarding với trường hợp bộ xử lý là đa chu kỳ cùng thực thi đoạn chương trình trên?",
  "options": [
    "2.2",
    "2.0",
    "1.3",
    "1.8"
  ],
  "answer": 0
},
{
  "id": 67,
  "chapter": "Pipeline CPU",
  "question": "Dùng phương pháp chèn stall và forwarding để giải quyết data hazards. Nếu đoạn chương trình trên được sắp xếp lại, tính số chu kỳ xung nhịp nhỏ nhất có thể cho đoạn chương trình trên?",
  "options": [
    "10",
    "11",
    "20",
    "21"
  ],
  "answer": 0
},
{
  "id": 68,
  "chapter": "Pipeline CPU",
  "question": "Dùng phương pháp chèn stall và forwarding để giải quyết data hazards. Khi lệnh sw $t2, 100($t1) đang ở giai đoạn giải mã lệnh (ID), các tín hiệu điều khiển ForwardA, ForwardB có giá trị lần lượt là:",
  "options": [
    "1 - 2",
    "0 - 2",
    "0 - 1",
    "2 - 1"
  ],
  "answer": 1
},
{
  "id": 69,
  "chapter": "Pipeline CPU",
  "question": "Ban đầu $t3 = 2, chỉ dùng phương pháp chèn stall để giải quyết data hazards, lệnh bne sử dụng chiến thuật đoán trước không nhảy. Tính số chu kỳ xung nhịp cho đoạn chương trình trên?",
  "options": [
    "32",
    "34",
    "36",
    "38"
  ],
  "answer": 2
},
{
  "id": 70,
  "chapter": "Cache Memory",
  "context": "Một hệ thống máy tính có CPU quản lý không gian bộ nhớ 32 bits, sử dụng 512 KB bộ nhớ đệm với block có kích thước 16 words (1 word = 4 bytes). Bộ nhớ đệm cấu hình theo phương pháp direct mapped.",
  "question": "Xác định số bit dùng các vùng tag, index, offset:",
  "options": [
    "14-12-6",
    "13-13-6",
    "11-13-8",
    "12-13-7"
  ],
  "answer": 1
},
{
  "id": 71,
  "chapter": "Cache Memory",
  "context": "Một hệ thống máy tính có CPU quản lý không gian bộ nhớ 32 bits, sử dụng 512 KB bộ nhớ đệm với block có kích thước 16 words (1 word = 4 bytes). Bộ nhớ đệm cấu hình theo phương pháp direct mapped.",
  "question": "Truy xuất ô nhớ có địa chỉ 1000001 sẽ có các vùng tag, index, offset là:",
  "options": [
    "3, 3337, 1",
    "0, 7812, 65",
    "1, 7433, 1",
    "0, 3906, 65"
  ],
  "answer": 3
},
{
  "id": 72,
  "chapter": "Cache Memory",
  "context": "Một hệ thống máy tính có CPU quản lý không gian bộ nhớ 32 bits, sử dụng 512 KB bộ nhớ đệm với block có kích thước 16 words (1 word = 4 bytes). Bộ nhớ đệm cấu hình theo phương pháp direct mapped.",
  "question": "Tính số Kbit chính xác cần thiết để hiện thực bộ nhớ đệm (thực tế mỗi line gồm data, tag, valid bit):",
  "options": [
    "2108 Kbit",
    "4208 Kbit",
    "8296 Kbit",
    "Cả A, B, C đều sai"
  ],
  "answer": 0
},
{
  "id": 73,
  "chapter": "Cache Memory",
  "context": "Một bộ xử lý hoạt động với xung clock có tần số 2GHz, sử dụng bộ nhớ đệm lệnh có tỉ lệ trật là 2%, bộ nhớ đệm dữ liệu có tỉ lệ trật là 5%. Cho biết CPI khi trúng 100% là 1.5, các lệnh truy xuất dữ liệu chiếm tỉ lệ 35%, thao tác chép một khối từ bộ nhớ chính vào đệm tiêu tốn mất 37.5ns.",
  "question": "Tính CPI trung bình khi không dùng đệm",
  "options": [
    "102.75",
    "76",
    "101.75",
    "A, B, C đều sai"
  ],
  "answer": 0
},
{
  "id": 74,
  "chapter": "Cache Memory",
  "context": "Một bộ xử lý hoạt động với xung clock có tần số 2GHz, sử dụng bộ nhớ đệm lệnh có tỉ lệ trật là 2%, bộ nhớ đệm dữ liệu có tỉ lệ trật là 5%. Cho biết CPI khi trúng 100% là 1.5, các lệnh truy xuất dữ liệu chiếm tỉ lệ 35%, thao tác chép một khối từ bộ nhớ chính vào đệm tiêu tốn mất 37.5ns.",
  "question": "Tính CPI trung bình khi có dùng đệm",
  "options": [
    "5.75",
    "4.75",
    "4.31",
    "A, B, C đều sai"
  ],
  "answer": 2
},
]

export default questions