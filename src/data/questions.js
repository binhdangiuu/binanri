import mipsMemory from "../assets/20-22.png"
import img5562_1 from "../assets/55-62(1).png"
import img5562_2 from "../assets/55-62(2).png"
import img6369 from "../assets/63-69.png"

const questions = [
  {
    "id": 1,
    "chapter": "Introduction",
    "question": { "main": "Đâu là sự phân loại các máy tính trong giai đoạn hiện tại?" },
    "options": { "A": "Máy tính nhúng, máy tính cá nhân, máy chủ và siêu máy tính", "B": "Thiết bị di động, máy tính cá nhân và máy chủ", "C": "Siêu máy tính, điện toán đám mây và máy tính cá nhân", "D": "Tất cả đều sai" },
    "answer": "A"
  },
  {
    "id": 2,
    "chapter": "Performance",
    "question": { "main": "Yếu tố nào ảnh hưởng đến hiệu suất của một chương trình trên máy tính?" },
    "options": { "A": "Ngôn ngữ lập trình", "B": "Kiến trúc bộ xử lý", "C": "Kiến trúc tập lệnh", "D": "Tất cả đều đúng" },
    "answer": "D"
  },
  {
    "id": 3,
    "chapter": "Performance",
    "question": { "main": "Hoạt động của hệ điều hành sẽ ảnh hưởng đến loại thời gian nào?" },
    "options": { "A": "Thời gian CPU - CPU time", "B": "Thời gian thực thi CPU - CPU execution time", "C": "Thời gian tổng thể - Elapsed time", "D": "Tất cả các loại thời gian kể trên" },
    "answer": "C"
  },
  {
    "id": 4,
    "chapter": "Performance",
    "question": { "main": "Để tăng hiệu suất của một ứng dụng, cách nào sau đây là khả thi?" },
    "options": { "A": "Giảm thời gian một chu kỳ của máy tính thực thi ứng dụng", "B": "Thay đổi ngôn ngữ lập trình để giảm số lượng lệnh máy", "C": "Thay đổi giải thuật để giảm số chu kỳ cần thiết cho chương trình", "D": "Tất cả các biện pháp trên" },
    "answer": "D"
  },
  {
    "id": 5,
    "chapter": "CPU",
    "question": { "main": "Tại sao tần số xung clock của các bộ xử lý Intel bắt đầu giảm vào năm 2004?" },
    "options": { "A": "Do nhu cầu tính toán giảm", "B": "Gặp phải bức tường công suất", "C": "Chuyển sang các hệ thống đa nhân", "D": "Để giảm giá thành sản xuất do khủng hoảng kinh tế" },
    "answer": "B"
  },
  {
    "id": 6,
    "chapter": "Programming Languages",
    "question": { "main": "Mức trừu tượng của chương trình giảm dần theo thứ tự nào?" },
    "options": { "A": "Ngôn ngữ cấp cao, ngôn ngữ máy, hợp ngữ", "B": "Ngôn ngữ máy, hợp ngữ, ngôn ngữ cấp cao", "C": "Ngôn ngữ cấp cao, hợp ngữ, ngôn ngữ máy", "D": "Hợp ngữ, ngôn ngữ máy, ngôn ngữ cấp cao" },
    "answer": "C"
  },
  {
    "id": 7,
    "chapter": "MIPS",
    "question": { "main": "Đâu là phát biểu đúng trong ngữ cảnh bộ xử lý kiến trúc MIPS?" },
    "options": { "A": "Một lệnh máy tương đương nhiều lệnh ngôn ngữ lập trình C", "B": "Một lệnh cấp cao luôn phải cần nhiều lệnh máy", "C": "Một lệnh hợp ngữ tương đương một lệnh máy", "D": "Tất cả đều sai" },
    "answer": "C"
  },
  {
    "id": 8,
    "chapter": "Performance",
    "question": { "main": "Tính thời gian thực thi của đoạn chương trình trên?", "context": "Đoạn chương trình gồm 1000 lệnh trong đó lệnh load/store chiếm 30%, lệnh jump chiếm 10%, 20% lệnh rẽ nhánh, còn lại là các lệnh về đại số. Biết CPI của lệnh load/store là 2.5, lệnh jump là 1, lệnh rẽ nhánh là 1.5 và lệnh đại số là 2. Biết máy tính có tần số hoạt động là 2 GHz." },
    "options": { "A": "950 ns", "B": "975 ns", "C": "1000 ns", "D": "1950 ns" },
    "answer": "B"
  },
  {
    "id": 9,
    "chapter": "Performance",
    "question": { "main": "Phải cải tiến CPI của lệnh load/store thành bao nhiêu để chương trình chạy nhanh gấp 1.5×?", "context": "Đoạn chương trình gồm 1000 lệnh trong đó lệnh load/store chiếm 30%, lệnh jump chiếm 10%, 20% lệnh rẽ nhánh, còn lại là các lệnh về đại số. Biết CPI của lệnh load/store là 2.5, lệnh jump là 1, lệnh rẽ nhánh là 1.5 và lệnh đại số là 2. Biết máy tính có tần số hoạt động là 2 GHz." },
    "options": { "A": "0.5", "B": "1", "C": "1.5", "D": "Tất cả đều sai" },
    "answer": "D"
  },
  {
    "id": 10,
    "chapter": "Performance",
    "question": { "main": "Tính CPI trung bình của đoạn chương trình trên?", "context": "Đoạn chương trình gồm 1000 lệnh trong đó lệnh load/store chiếm 30%, lệnh jump chiếm 10%, 20% lệnh rẽ nhánh, còn lại là các lệnh về đại số. Biết CPI của lệnh load/store là 2.5, lệnh jump là 1, lệnh rẽ nhánh là 1.5 và lệnh đại số là 2. Biết máy tính có tần số hoạt động là 2 GHz." },
    "options": { "A": "1.25", "B": "1.5", "C": "1.95", "D": "2.0" },
    "answer": "C"
  },
  {
    "id": 11,
    "chapter": "Performance",
    "question": { "main": "Người ta tiến hành cải tiến lệnh load/store sao cho CPI của nó giảm đi một nửa. Tính speedup của hệ thống?", "context": "Đoạn chương trình gồm 1000 lệnh trong đó lệnh load/store chiếm 30%, lệnh jump chiếm 10%, 20% lệnh rẽ nhánh, còn lại là các lệnh về đại số. Biết CPI của lệnh load/store là 2.5, lệnh jump là 1, lệnh rẽ nhánh là 1.5 và lệnh đại số là 2. Biết máy tính có tần số hoạt động là 2 GHz." },
    "options": { "A": "≈1.22", "B": "≈1.24", "C": "≈1.26", "D": "≈1.28" },
    "answer": "B"
  },
  {
    "id": 12,
    "chapter": "CPU",
    "question": { "main": "Định luật Moore là định luật về điều gì?" },
    "options": { "A": "Sự gia tăng kích thước chip", "B": "Sự gia tăng giá thành sản xuất các chip", "C": "Sự gia tăng hiệu suất của các chip", "D": "Sự gia tăng số lượng các bóng bán dẫn trên chip" },
    "answer": "D"
  },
  {
    "id": 13,
    "chapter": "MIPS",
    "question": { "main": "Lệnh nào sau đây là một lệnh MIPS hợp lệ?" },
    "options": { "A": "add $0, $t0, 5", "B": "sll $t0, $t1, 34", "C": "lw $t1, 0x08($t0)", "D": "andi $t0, $t1, $t2" },
    "answer": "C"
  },
  {
    "id": 14,
    "chapter": "MIPS",
    "question": { "main": "Cho lệnh MIPS sau: add $s0, $s0, $s0 #add two registers. Chọn phát biểu đúng:" },
    "options": { "A": "Lệnh trên có lỗi biên dịch do toán hạng nguồn và đích giống nhau", "B": "Lệnh trên có lỗi thực thi do toán hạng nguồn và đích giống nhau", "C": "$s0 = $s0 * 2", "D": "Tất cả đều sai" },
    "answer": "C"
  },
  {
    "id": 15,
    "chapter": "MIPS",
    "question": { "main": "Cho đoạn lệnh MIPS sau: lw $t0, 30($s3) # load word; add $s1, $s2, $t0. Giả sử $s3 chứa địa chỉ nền của một dãy integer, chọn phát biểu đúng:" },
    "options": { "A": "Đoạn lệnh trên có lỗi khi biên dịch", "B": "Đoạn lệnh trên có lỗi khi thực thi", "C": "$s1 = $s2 + 30*$s3", "D": "Tất cả đều sai" },
    "answer": "D"
  },
  {
    "id": 16,
    "chapter": "MIPS",
    "question": { "main": "Chọn phát biểu đúng về các lệnh MIPS chuẩn sau:" },
    "options": { "A": "Lệnh lhu chuyển 16 bits dữ liệu từ bộ nhớ vào cả 16 bits cao lẫn 16 bits thấp", "B": "Lệnh lb chuyển 1 byte dữ liệu từ thanh ghi xuống bộ nhớ", "C": "Lệnh sb thực hiện việc mở rộng dấu dữ liệu", "D": "Lệnh lui chuyển giá trị tức thời vào 16 bits cao của thanh ghi" },
    "answer": "D"
  },
  {
    "id": 17,
    "chapter": "MIPS",
    "question": { "main": "Để gán giá trị 0x12345678 cho thanh ghi $t0, cần thực hiện những lệnh MIPS chuẩn nào?" },
    "options": { "A": "lui $t0, 0x1234; lli $t0, 0x5678", "B": "lui $t0, 4660; ori $t0, $t0, 22136", "C": "addi $t0, $zero, 0x12345678", "D": "Tất cả đều đúng" },
    "answer": "B"
  },
  {
    "id": 18,
    "chapter": "MIPS",
    "question": { "main": "Muốn đảo tất cả các bit trong thanh ghi $s1 thì cần thực hiện lệnh MIPS chuẩn nào sau đây?" },
    "options": { "A": "not $s0, $s1", "B": "nor $s0, $s1, $s1", "C": "andi $s0, $s1, -1", "D": "or $s0, $s1, $zero" },
    "answer": "B"
  },
  {
    "id": 19,
    "chapter": "MIPS",
    "question": { "main": "Lệnh MIPS chuẩn nào sau đây gán giá trị 0 cho thanh ghi $s0?" },
    "options": { "A": "add $s0, $s0, $zero", "B": "ori $s0, $s0, 0", "C": "lui $s0, 0", "D": "Các câu A, B và C đều đúng" },
    "answer": "C"
  },
  {
    "id": 20,
    "chapter": "MIPS",
    "question": { "main": "Hãy cho biết giá trị thanh ghi $t0 là bao nhiêu sau khi thực thi lệnh lh $t0, 6($s0)", "image": mipsMemory },
    "options": { "A": "Lệnh trên bị lỗi vì $s0 + 6 không chia hết cho 4", "B": "0x0000F0DE", "C": "0x0000DEF0", "D": "0xFFFFDEF0" },
    "answer": "D"
  },
  {
    "id": 21,
    "chapter": "MIPS",
    "question": { "main": "Hãy cho biết giá trị thanh ghi $t0 là bao nhiêu sau khi thực thi lệnh lw $t0, 6($s0)", "image": mipsMemory },
    "options": { "A": "Lệnh trên bị lỗi vì $s0 + 6 không chia hết cho 4", "B": "Chưa thể xác định vì chưa biết giá trị hai ô nhớ có địa chỉ 16 và 17", "C": "0xF0DE", "D": "0xDEF0" },
    "answer": "A"
  },
  {
    "id": 22,
    "chapter": "MIPS",
    "question": { "main": "Hãy cho biết những ô nhớ nào sẽ thay đổi giá trị sau khi thực hiện lệnh sw $t1, 4($s0), nếu thanh ghi $t1 mang giá trị 0x00000000", "image": mipsMemory },
    "options": { "A": "Lệnh trên bị lỗi", "B": "Các ô nhớ có địa chỉ 8, 9, 10 và 11", "C": "Các ô nhớ có địa chỉ 12, 13, 14, và 15", "D": "Không có ô nhớ nào thay đổi giá trị" },
    "answer": "C"
  },
  {
    "id": 23,
    "chapter": "MIPS",
    "question": { "main": "Đâu không phải là một loại toán hạng trong các lệnh MIPS chuẩn?" },
    "options": { "A": "Số nguyên", "B": "Số thực", "C": "Ô nhớ", "D": "Thanh ghi" },
    "answer": "B"
  },
  {
    "id": 24,
    "chapter": "MIPS",
    "question": { "main": "Giá trị của thanh ghi $s2 sẽ là bao nhiêu sau lệnh MIPS? andi $s2, $s0, 2017", "context": "Giả sử thanh ghi $s0 và $s1 mang giá trị lần lượt là 0x12345678 và 0xCAFEFACE." },
    "options": { "A": "Lệnh trên có lỗi cú pháp", "B": "0x12340660", "C": "0x00000660", "D": "Tất cả đều sai" },
    "answer": "C"
  },
  {
    "id": 25,
    "chapter": "MIPS",
    "question": { "main": "Giá trị của thanh ghi $s2 sẽ là bao nhiêu sau đoạn lệnh MIPS? sll $s2, $s0, 4; nor $s2, $s1, $s0", "context": "Giả sử thanh ghi $s0 và $s1 mang giá trị lần lượt là 0x12345678 và 0xCAFEFACE." },
    "options": { "A": "Lệnh trên có lỗi cú pháp", "B": "0x25010101", "C": "0x14000031", "D": "0xDAFEFEFE" },
    "answer": "B"
  },
  {
    "id": 26,
    "chapter": "MIPS",
    "question": { "main": "Lệnh máy của lệnh hợp ngữ MIPS add $t0, $s1, $s2 là gì?" },
    "options": { "A": "00000010001100100100000000100000", "B": "0x02324020", "C": "Cả A & B đều sai", "D": "Cả A & B đều đúng" },
    "answer": "D"
  },
  {
    "id": 27,
    "chapter": "MIPS",
    "question": { "main": "Hãy cho biết lệnh hợp ngữ MIPS tương ứng với lệnh máy: 00000000000100000010100010000000" },
    "options": { "A": "Không có lệnh hợp ngữ tương đương", "B": "sll $t2, $s0, 2", "C": "and $zero, $t2, $s0", "D": "add $zero, $t2, $s0" },
    "answer": "B"
  },
  {
    "id": 28,
    "chapter": "MIPS",
    "question": { "main": "Lệnh máy của lệnh hợp ngữ MIPS lw $t0, -32($s1) là gì?" },
    "options": { "A": "0x8E280020", "B": "0x8E28FFE0", "C": "0x8D11FFE0", "D": "0x8D110020" },
    "answer": "B"
  },
  {
    "id": 29,
    "chapter": "Performance",
    "question": { "main": "Một xung đồng hồ có 2×10^9 lần có giá trị 1 trong mỗi giây, vậy chu kỳ của nó là bao nhiêu?" },
    "options": { "A": "2×10^-9 giây", "B": "0.5 ns", "C": "2 GHz", "D": "Không thể xác định được chu kỳ" },
    "answer": "B"
  },
  {
    "id": 30,
    "chapter": "CPU",
    "question": { "main": "Đâu là đặc tính đúng của một kiến trúc tập lệnh kiểu RISC (Reduced Instruction Set Computer)?" },
    "options": { "A": "Số lượng lệnh ít", "B": "Số lượng thanh ghi nhiều (≥ 32)", "C": "CPI trung bình thấp", "D": "Tất cả các đặc tính trên" },
    "answer": "D"
  },
  {
    "id": 31,
    "chapter": "MIPS",
    "question": { "main": "Chọn phát biểu đúng về thanh ghi bộ đếm chương trình (Program counter - PC) trong kiến trúc MIPS chuẩn" },
    "options": { "A": "Là thanh ghi đa dụng", "B": "Chứa địa chỉ của lệnh đang được thực thi", "C": "Có thể được cập nhật trực tiếp bằng các lệnh MIPS", "D": "Tất cả các đặc tính trên đều sai" },
    "answer": "B"
  },
  {
    "id": 32,
    "chapter": "MIPS",
    "question": { "main": "Toán hạng bộ nhớ trong các lệnh MIPS chuẩn có thể có dạng nào sau đây?" },
    "options": { "A": "1200", "B": "$s0($s1)", "C": "100($s1)", "D": "Tất cả các dạng trên" },
    "answer": "C"
  },
  {
    "id": 33,
    "chapter": "CPU",
    "question": { "main": "Sắp xếp các công nghệ chế tạo bộ xử lý theo thứ tự từ cũ đến mới:" },
    "options": { "A": "Bóng đèn chân không (Vacuum tube), Mạch tích hợp (Integrated circuit), Bóng bán dẫn (Transistor)", "B": "Mạch tích hợp, Bóng bán dẫn, Bóng đèn chân không", "C": "Mạch tích hợp, Bóng đèn chân không, Bóng bán dẫn", "D": "Bóng đèn chân không, Bóng bán dẫn, Mạch tích hợp" },
    "answer": "D"
  },
  {
    "id": 34,
    "chapter": "Introduction",
    "question": { "main": "Sự khác biệt giữa máy chủ (Server) và siêu máy tính (Supercomputer) là gì?" },
    "options": { "A": "Siêu máy tính có giá thành cao hơn rất nhiêu", "B": "Máy chủ phải truy xuất thông qua môi trường mạng", "C": "Chi phí vận hành máy chủ cao hơn vì có rất nhiều người sử dụng cùng lúc", "D": "Tất cả các yếu tố trên" },
    "answer": "A"
  },
  {
    "id": 35,
    "chapter": "Performance",
    "question": { "main": "Benchmark SPEC CPU2006 là gì?" },
    "options": { "A": "Một phần mềm dùng để đánh giá hiệu suất các bộ xử lý", "B": "Một phần mềm dùng để phân tích các thông số cần thiết cho việc đánh giá hiệu suất của một ứng dụng (CPI, Instruction count, Cycle time)", "C": "Một phần mềm dùng để đánh giá công suất các bộ xử lý", "D": "Tất cả đều sai" },
    "answer": "A"
  },
  {
    "id": 36,
    "chapter": "Performance",
    "question": { "main": "Một ứng dụng được biên dịch trên một máy tính bởi hai trình biên dịch 1 và 2. Nếu biết rằng CPI trung bình có trọng số của đoạn chương trình được sinh ra bởi trình biên dịch 1 lớn hơn trình biên dịch 2 thì kết luận nào sau đây là đúng?" },
    "options": { "A": "Trình biên dịch 1 tốt hơn", "B": "Trình biên dịch 2 tốt hơn", "C": "Hai trình biên dịch là như nhau vì thực hiện trên cùng một máy", "D": "Chưa thể xác định được trình biên dịch nào tốt hơn" },
    "answer": "D"
  },
  {
    "id": 37,
    "chapter": "Performance",
    "question": { "main": "Thời gian thực thi đoạn chương trình trên trên máy A và B lần lượt là:", "context": "Một chương trình P được biên dịch trên hai hệ thống máy tính khác nhau và có các thông số như sau: Máy tính A: số lượng lệnh = 1.5×10^6, tần số hoạt động = 2.0 GHz, CPI trung bình = 1.5. Máy tính B: số lượng lệnh = 2.0×10^6, tần số hoạt động = 3.0 GHz, CPI trung bình = 1.0." },
    "options": { "A": "1.125 ms và 0.667 ms", "B": "2.5 ms và 1.3 ms", "C": "Chưa thể xác định", "D": "Tất cả đều sai" },
    "answer": "A"
  },
  {
    "id": 38,
    "chapter": "Performance",
    "question": { "main": "Chọn kết luận đúng:", "context": "Một chương trình P được biên dịch trên hai hệ thống máy tính khác nhau và có các thông số như sau: Máy tính A: số lượng lệnh = 1.5×10^6, tần số hoạt động = 2.0 GHz, CPI trung bình = 1.5. Máy tính B: số lượng lệnh = 2.0×10^6, tần số hoạt động = 3.0 GHz, CPI trung bình = 1.0." },
    "options": { "A": "Máy A nhanh hơn máy B xấp xỉ 1.68 lần", "B": "Máy B nhanh hơn máy A xấp xỉ 1.68 lần", "C": "Máy A nhanh hơn máy B 1.5 lần", "D": "Máy B nhanh hơn máy A 1.5 lần" },
    "answer": "B"
  },
  {
    "id": 39,
    "chapter": "Performance",
    "question": { "main": "Cần thay đổi tần số của máy chậm hơn thành bao nhiêu để hiệu suất hai máy như nhau?", "context": "Một chương trình P được biên dịch trên hai hệ thống máy tính khác nhau và có các thông số như sau: Máy tính A: số lượng lệnh = 1.5×10^6, tần số hoạt động = 2.0 GHz, CPI trung bình = 1.5. Máy tính B: số lượng lệnh = 2.0×10^6, tần số hoạt động = 3.0 GHz, CPI trung bình = 1.0." },
    "options": { "A": "4.0 GHz", "B": "3.623 GHz", "C": "3.373 GHz", "D": "Chưa thể xác định" },
    "answer": "C"
  },
  {
    "id": 40,
    "chapter": "MIPS",
    "question": { "main": "Lệnh MIPS chuẩn nào sau đây gán giá trị 0xCA201800 vào thanh ghi $a0" },
    "options": { "A": "move $a0, 0xCA201800", "B": "addi $a0, $zero, 0xCA201800", "C": "lui $a0, 0xCA20; ori $a0, $a0, 0x1800", "D": "ori $a0, $zero, 0x1800; lui $a0, 0xCA20" },
    "answer": "C"
  },
  {
    "id": 41,
    "chapter": "MIPS",
    "question": { "main": "Chọn phát biểu SAI về kiểu lệnh kiểu R" },
    "options": { "A": "Khi sử dụng lệnh R thì phải luôn đủ 3 thanh ghi (Rs, Rt, Rd)", "B": "Trường Function dùng xác định phép toán của lệnh đó", "C": "Trường Opcode luôn bằng KHÔNG (ZERO)", "D": "Lệnh bne, beq không thuộc kiểu R" },
    "answer": "A"
  },
  {
    "id": 42,
    "chapter": "MIPS",
    "question": { "main": "Một lệnh rẽ nhánh có điều kiện thì có thể rẽ tối đa đến:" },
    "options": { "A": "Bất kì vị trí nào trong chương trình", "B": "Bất kì vị trí nào trong bộ nhớ", "C": "Trong khoảng +/- 2^15 lệnh từ lệnh rẽ nhánh hiện tại", "D": "Trong khoảng +/- 2^16 lệnh từ lệnh rẽ nhánh hiện tại" },
    "answer": "C"
  },
  {
    "id": 43,
    "chapter": "MIPS",
    "question": { "main": "Trong phép cộng với số trực tiếp (addi), giá trị immediate:" },
    "options": { "A": "Là số nguyên có dấu 32 bit", "B": "Là số nguyên không dấu 32 bit", "C": "Là số nguyên có dấu 16 bit", "D": "Là số nguyên không dấu 16 bit" },
    "answer": "C"
  },
  {
    "id": 44,
    "chapter": "MIPS",
    "question": { "main": "Chọn phát biểu đúng về lệnh jump" },
    "options": { "A": "Nhảy đến bất kỳ vị trí nào trong chương trình", "B": "Nhảy đến bất kỳ vị trí nào trong bộ nhớ lệnh (instruction memory)", "C": "Chỉ nhảy trong khoảng 2^26 lệnh tính từ câu lệnh jump", "D": "Chỉ nhảy trong vùng được xác định bởi 4-bit cao PC cũ" },
    "answer": "D"
  },
  {
    "id": 45,
    "chapter": "MIPS",
    "question": { "main": "Chọn phát biểu ĐÚNG" },
    "options": { "A": "Địa chỉ trong lệnh load/store phải luôn chia hết cho 4", "B": "Chỉ có lệnh load/store mới truy xuất bộ nhớ dữ liệu", "C": "Lệnh load/store thuộc kiểu R", "D": "Cả A, B, C đều đúng" },
    "answer": "B"
  },
  {
    "id": 46,
    "chapter": "MIPS",
    "question": { "main": "Chọn phát biểu ĐÚNG." },
    "options": { "A": "Tất cả các lệnh phải có trường thanh ghi", "B": "Phép cộng đại số có thể là kiểu R hoặc I", "C": "Thanh ghi lệnh 32 bit do đó có thể có đến 2^32 lệnh khác nhau", "D": "Các phép nhảy và rẽ nhánh có cùng chung kiểu lệnh" },
    "answer": "B"
  },
  {
    "id": 47,
    "chapter": "MIPS",
    "question": { "main": "Các lệnh nào sau đây đúng cú pháp" },
    "options": { "A": "add $zero, $a0, $a1", "B": "lw $a0, $a1($a2)", "C": "slt $a0, $a1, 100", "D": "sll $a0, $a1, $a2" },
    "answer": "A"
  },
  {
    "id": 48,
    "chapter": "MIPS",
    "question": { "main": "Lệnh nào sau đây làm thay đổi thanh ghi $ra" },
    "options": { "A": "jr $ra", "B": "jal label", "C": "move $a0, $ra", "D": "sw $ra, 4($sp)" },
    "answer": "B"
  },
  {
    "id": 49,
    "chapter": "MIPS",
    "question": { "main": "Lệnh MIPS chuẩn nào sau đây gán giá trị 0 cho thanh ghi $s0?" },
    "options": { "A": "add $s0, $s0, $zero", "B": "ori $s0, $s0, 0", "C": "lui $s0, 0", "D": "Các câu A, B và C đều đúng" },
    "answer": "C"
  },
  {
    "id": 50,
    "chapter": "Floating Point",
    "question": { "main": "Tại sao các lệnh MIPS số thực lại không hỗ trợ số trực tiếp (immediate)?" },
    "options": { "A": "Vì số thực không biểu diễn trong máy tính được", "B": "Vì số thực trong máy tính có kích thước bằng hoặc lớn hơn kích thước từ lệnh", "C": "Vì số các khối phần cứng tính toán phép toán số thực đòi hỏi 2 thanh ghi dữ liệu nguồn", "D": "Vì các lệnh số thực cần hai thanh ghi dữ liệu nguồn" },
    "answer": "B"
  },
  {
    "id": 51,
    "chapter": "Arithmetic",
    "question": { "main": "Dấu của phép nhân hai số nguyên có thể được tính bằng toán tử luận lý nào?" },
    "options": { "A": "and", "B": "or", "C": "xor", "D": "nor" },
    "answer": "C"
  },
  {
    "id": 52,
    "chapter": "Arithmetic",
    "question": { "main": "Trường hợp nào sau đây có thể xảy ra tràn số" },
    "options": { "A": "Cộng số dương với số âm", "B": "Trừ hai số dương", "C": "Cộng hai số âm", "D": "Tất cả các trường hợp trên" },
    "answer": "C"
  },
  {
    "id": 53,
    "chapter": "Floating Point",
    "question": { "main": "Chọn phát biểu đúng về các thanh ghi số thực trong bộ xử lý co-processor của MIPS" },
    "options": { "A": "Các thanh ghi có kích thước 64 bit vì số thực chính xác kép biểu diễn bằng 64 bit", "B": "Có tất cả 32 thanh ghi số thực, các thanh ghi có thể được truy xuất theo cặp", "C": "Giá trị của các thanh ghi chuẩn của MIPS (ví dụ $s0, $t0) được hiểu là số thực nếu các thanh ghi này tham gia vào các lệnh số thực", "D": "Tất cả đều đúng" },
    "answer": "B"
  },
  {
    "id": 54,
    "chapter": "Floating Point",
    "question": { "main": "Chọn phát biểu đúng về dạng chuẩn IEEE 754" },
    "options": { "A": "Số thực âm sẽ được biểu diễn theo dạng bù hai giống như các biểu diễn số nguyên", "B": "Dạng chuẩn IEEE 754 chỉ có hai dạng là 32 bit hoặc 64 bit", "C": "Số thực dương và số thực âm có cùng giá trị tuyệt đối sẽ khác nhau 1 bit (trong lưu trữ)", "D": "Mọi số thực trong tự nhiên đều có thể được biểu diễn chính xác bằng dạng chuẩn IEEE 754" },
    "answer": "C"
  },
  {
    "id": 55,
    "chapter": "Single Cycle CPU",
    "question": { "main": "Chọn phát biểu ĐÚNG khi bộ xử lý thực thi lệnh: lw $t0, -8($s0) # giả sử thanh ghi $s0 = 100", "images": [img5562_1, img5562_2] },
    "options": { "A": "Cờ \"Zero\" = 1", "B": "Tín hiệu \"MemRead\" = 0 và \"ALUSrc\" = 1", "C": "Tín hiệu \"MemWrite\" = 0 và \"RegWrite\" = 1", "D": "Tín hiệu lựa chọn phép toán từ \"ALU-Ctrl\" là phép TRỪ" },
    "answer": "C"
  },
  {
    "id": 56,
    "chapter": "Single Cycle CPU",
    "question": { "main": "Chọn phát biểu ĐÚNG khi bộ xử lý thực thi lệnh: beq $t0, $t1, 8 # giả sử thanh ghi $t0 = $t1", "images": [img5562_1, img5562_2] },
    "options": { "A": "Cờ \"Zero\" = 1 và tín hiệu \"Jump\" = 1", "B": "Tín hiệu \"Branch\" = 1 và \"ALUSrc\" = 1", "C": "Giá trị thanh ghi sau khi thực thi lệnh này: PC = PC + 32", "D": "Giá trị thanh ghi PC sau khi thực thi lệnh này: PC = PC + 36" },
    "answer": "D"
  },
  {
    "id": 57,
    "chapter": "Single Cycle CPU",
    "question": { "main": "Thời gian thực thi lệnh: beq $t0, $t1, 8 # giả sử thanh ghi $t0 = $t1", "images": [img5562_1, img5562_2] },
    "options": { "A": "303ps", "B": "389ps", "C": "386ps", "D": "463ps" },
    "answer": "C"
  },
  {
    "id": 58,
    "chapter": "Single Cycle CPU",
    "question": { "main": "Chu kỳ xung nhịp nhanh nhất của thiết kế này:", "images": [img5562_1, img5562_2] },
    "options": { "A": "603ps", "B": "606ps", "C": "583ps", "D": "547ps" },
    "answer": "B"
  },
  {
    "id": 59,
    "chapter": "Single Cycle CPU",
    "question": { "main": "Giả sử bộ xử lý đơn chu kỳ này hỗ trợ thêm lệnh SWR (Store Word Register). Xác định giá trị các tín hiệu điều khiển RegDst, ALUSrc, MemtoReg, MemWrite, biết rằng lệnh SWR có cú pháp như sau: SWR Rd, Rt(Rs) # Mem[Reg[Rt]+Reg[Rs]] = Reg[Rd]", "images": [img5562_1, img5562_2] },
    "options": { "A": "1 – 0 – 1 – 0", "B": "0 – 1 – 1 – 0", "C": "1 – 1 – 0 – 1", "D": "0 – 0 – 1 – 1" },
    "answer": "D"
  },
  {
    "id": 60,
    "chapter": "Multi Cycle CPU",
    "question": { "main": "Từ thiết kế trên, người ta sửa đổi sang dạng đa chu kỳ. Với thiết kế đa chu kỳ, mỗi chu kỳ sẽ thực thi một trong 5 công đoạn: nạp lệnh (IF), giải mã lệnh (ID), tính toán (EX), truy xuất bộ nhớ dữ liệu (MEM), ghi giá trị vào thanh ghi (WB). Chu kỳ xung nhịp ngắn nhất có thể của thiết kế đa chu kỳ:", "images": [img5562_1, img5562_2] },
    "options": { "A": "200ps", "B": "220ps", "C": "180ps", "D": "303ps" },
    "answer": "B"
  },
  {
    "id": 61,
    "chapter": "Single Cycle CPU",
    "question": { "main": "Chọn phát biểu ĐÚNG khi bộ xử lý thực thi lệnh: j 2018 # giả sử địa chỉ lệnh Jump này là 2000", "images": [img5562_1, img5562_2] },
    "options": { "A": "Tín hiệu \"MemWrite\" = x và \"MemRead\" = x (x: có thể 0 hay 1)", "B": "Tín hiệu \"RegWrite\" = 1 và \"ALUSrc\" = x", "C": "Giá trị thanh ghi PC sau khi thực thi lệnh nhảy: PC = 8072", "D": "Giá trị thanh ghi PC sau khi thực thi lệnh nhảy: PC = 2018" },
    "answer": "C"
  },
  {
    "id": 62,
    "chapter": "Pipeline CPU",
    "question": { "main": "Từ thiết kế trên, người ta sửa đổi sang dạng đường ống 5 công đoạn: nạp lệnh (IF), giải mã lệnh (ID), tính toán (EX), truy xuất bộ nhớ dữ liệu (MEM), ghi giá trị vào thanh ghi (WB). Khi thực thi chương trình có số lệnh lớn, tính speedup của bộ xử lý mới theo cơ chế đường ống:", "images": [img5562_1, img5562_2] },
    "options": { "A": "4.5", "B": "3.02", "C": "2.74", "D": "5" },
    "answer": "C"
  },
  {
    "id": 63,
    "chapter": "Pipeline CPU",
    "question": { "main": "Có bao nhiêu data hazard ở đoạn chương trình trên?", "image": img6369 },
    "options": { "A": "3", "B": "4", "C": "5", "D": "6" },
    "answer": "C"
  },
  {
    "id": 64,
    "chapter": "Pipeline CPU",
    "question": { "main": "Chỉ dùng phương pháp chèn stall để giải quyết data hazards. Tính CPI trung bình cho đoạn chương trình trên?", "image": img6369 },
    "options": { "A": "3.6", "B": "3.5", "C": "3.3", "D": "3.0" },
    "answer": "D"
  },
  {
    "id": 65,
    "chapter": "Pipeline CPU",
    "question": { "main": "Dùng phương pháp chèn stall và forwarding để giải quyết data hazards. Tính số chu kỳ xung nhịp cho đoạn chương trình trên?", "image": img6369 },
    "options": { "A": "10", "B": "11", "C": "12", "D": "15" },
    "answer": "B"
  },
  {
    "id": 66,
    "chapter": "Pipeline CPU",
    "question": { "main": "Tính speedup cho trường hợp bộ xử lý là 5-stage pipeline, sử dụng stall và forwarding với trường hợp bộ xử lý là đa chu kỳ cùng thực thi đoạn chương trình trên?", "image": img6369 },
    "options": { "A": "2.2", "B": "2.0", "C": "1.3", "D": "1.8" },
    "answer": "A"
  },
  {
    "id": 67,
    "chapter": "Pipeline CPU",
    "question": { "main": "Dùng phương pháp chèn stall và forwarding để giải quyết data hazards. Nếu đoạn chương trình trên được sắp xếp lại, tính số chu kỳ xung nhịp nhỏ nhất có thể cho đoạn chương trình trên?", "image": img6369 },
    "options": { "A": "10", "B": "11", "C": "20", "D": "21" },
    "answer": "A"
  },
  {
    "id": 68,
    "chapter": "Pipeline CPU",
    "question": { "main": "Dùng phương pháp chèn stall và forwarding để giải quyết data hazards. Khi lệnh sw $t2, 100($t1) đang ở giai đoạn giải mã lệnh (ID), các tín hiệu điều khiển ForwardA, ForwardB có giá trị lần lượt là:", "image": img6369 },
    "options": { "A": "1 - 2", "B": "0 - 2", "C": "0 - 1", "D": "2 - 1" },
    "answer": "B"
  },
  {
    "id": 69,
    "chapter": "Pipeline CPU",
    "question": { "main": "Ban đầu $t3 = 2, chỉ dùng phương pháp chèn stall để giải quyết data hazards, lệnh bne sử dụng chiến thuật đoán trước không nhảy. Tính số chu kỳ xung nhịp cho đoạn chương trình trên?", "image": img6369 },
    "options": { "A": "32", "B": "34", "C": "36", "D": "38" },
    "answer": "D"
  },
  {
    "id": 70,
    "chapter": "Cache Memory",
    "question": { "main": "Xác định số bit dùng các vùng tag, index, offset:", "context": "Một hệ thống máy tính có CPU quản lý không gian bộ nhớ 32 bits, sử dụng 512 KB bộ nhớ đệm với block có kích thước 16 words (1 word = 4 bytes). Bộ nhớ đệm cấu hình theo phương pháp direct mapped." },
    "options": { "A": "14-12-6", "B": "13-13-6", "C": "11-13-8", "D": "12-13-7" },
    "answer": "B"
  },
  {
    "id": 71,
    "chapter": "Cache Memory",
    "question": { "main": "Truy xuất ô nhớ có địa chỉ 1000001 sẽ có các vùng tag, index, offset là:", "context": "Một hệ thống máy tính có CPU quản lý không gian bộ nhớ 32 bits, sử dụng 512 KB bộ nhớ đệm với block có kích thước 16 words (1 word = 4 bytes). Bộ nhớ đệm cấu hình theo phương pháp direct mapped." },
    "options": { "A": "3, 3337, 1", "B": "0, 7812, 65", "C": "1, 7433, 1", "D": "0, 3906, 65" },
    "answer": "D"
  },
  {
    "id": 72,
    "chapter": "Cache Memory",
    "question": { "main": "Tính số Kbit chính xác cần thiết để hiện thực bộ nhớ đệm (thực tế mỗi line gồm data, tag, valid bit):", "context": "Một hệ thống máy tính có CPU quản lý không gian bộ nhớ 32 bits, sử dụng 512 KB bộ nhớ đệm với block có kích thước 16 words (1 word = 4 bytes). Bộ nhớ đệm cấu hình theo phương pháp direct mapped." },
    "options": { "A": "2108 Kbit", "B": "4208 Kbit", "C": "8296 Kbit", "D": "Cả A, B, C đều sai" },
    "answer": "A"
  },
  {
    "id": 73,
    "chapter": "Cache Memory",
    "question": { "main": "Tính CPI trung bình khi không dùng đệm", "context": "Một bộ xử lý hoạt động với xung clock có tần số 2GHz, sử dụng bộ nhớ đệm lệnh có tỉ lệ trật là 2%, bộ nhớ đệm dữ liệu có tỉ lệ trật là 5%. Cho biết CPI khi trúng 100% là 1.5, các lệnh truy xuất dữ liệu chiếm tỉ lệ 35%, thao tác chép một khối từ bộ nhớ chính vào đệm tiêu tốn mất 37.5ns." },
    "options": { "A": "102.75", "B": "76", "C": "101.75", "D": "A, B, C đều sai" },
    "answer": "A"
  },
  {
    "id": 74,
    "chapter": "Cache Memory",
    "question": { "main": "Tính CPI trung bình khi có dùng đệm", "context": "Một bộ xử lý hoạt động với xung clock có tần số 2GHz, sử dụng bộ nhớ đệm lệnh có tỉ lệ trật là 2%, bộ nhớ đệm dữ liệu có tỉ lệ trật là 5%. Cho biết CPI khi trúng 100% là 1.5, các lệnh truy xuất dữ liệu chiếm tỉ lệ 35%, thao tác chép một khối từ bộ nhớ chính vào đệm tiêu tốn mất 37.5ns." },
    "options": { "A": "5.75", "B": "4.75", "C": "4.31", "D": "A, B, C đều sai" },
    "answer": "C"
  },
];

export default questions;
