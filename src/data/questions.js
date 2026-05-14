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
]

export default questions