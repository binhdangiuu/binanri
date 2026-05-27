import mach1 from "../assets/mach1.png"
const ktmtmach = [
  {
    "id": 1,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What value appears at the output of Read Data 1?",
      "image": mach1,
      "ask": "Select the correct hexadecimal value based on the datapath simulation:"
    },
    "options": {
      "A": "0x00000000",
      "B": "0x00000113",
      "C": "0x00000d19",
      "D": "0x00000e2c"
    },
    "answer": "D"
  },
  // CÂU 2 (Gốc là câu 77)
  {
    "id": 2,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What value appears at the output of Read Data 2?",
      "image": mach1,
      "ask": "Select the correct hexadecimal value based on the datapath simulation:"
    },
    "options": {
      "A": "0x00000113",
      "B": "0x00000000",
      "C": "0x00000e2c",
      "D": "0x00000d19"
    },
    "answer": "A"
  },

  // CÂU 3 (Gốc là câu 78)
  {
    "id": 3,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What value is selected by the ALUSrc MUX?",
      "image": mach1,
      "ask": "Select the correct multiplexer input/output designation:"
    },
    "options": {
      "A": "Memory data",
      "B": "Read Data 2",
      "C": "ALU result",
      "D": "Sign-extended immediate"
    },
    "answer": "B"
  },

  // CÂU 4 (Gốc là câu 79)
  {
    "id": 4,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What is the value at the ALU output?",
      "image": mach1,
      "ask": "Select the correct hexadecimal value computed by the execution unit:"
    },
    "options": {
      "A": "0x00000113",
      "B": "0x00000d19",
      "C": "0x00000f3f",
      "D": "0x00000e2c"
    },
    "answer": "B"
  },

  // CÂU 5 (Gốc là câu 80)
  {
    "id": 5,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What value is written into the register file?",
      "image": mach1,
      "ask": "Identify the destination write-back value based on control signals:"
    },
    "options": {
      "A": "0x00000d19",
      "B": "0x00000113",
      "C": "0x00000e2c",
      "D": "Memory output"
    },
    "answer": "A"
  },
  {
    "id": 6,
    "chapter": "Computer Architecture",
    "question": {
      "main": "Which register number is selected by the RegDst MUX?",
      "image": mach1,
      "ask": "Identify the destination register index based on the control path:"
    },
    "options": {
      "A": "$t1",
      "B": "$t4",
      "C": "$t5",
      "D": "$t6"
    },
    "answer": "D"
  },
  {
    "id": 7,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What value appears at the Data Memory address input?",
      "image": mach1,
      "ask": "Select the correct target memory location address input value:"
    },
    "options": {
      "A": "0x00000113",
      "B": "0x00000d19",
      "C": "0x00000e2c",
      "D": "Not used"
    },
    "answer": "D"
  },
  {
    "id": 8,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What value appears at the output of the MemtoReg MUX?",
      "image": mach1,
      "ask": "Select the data forwarded to the write register port:"
    },
    "options": {
      "A": "0x00000e2c",
      "B": "0x00000d19",
      "C": "0x00000113",
      "D": "Memory read data"
    },
    "answer": "B"
  },
  {
    "id": 9,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What value is stored in the IF/ID pipeline register?",
      "image": mach1,
      "ask": "Select the correct field content inside the IF/ID stage barrier:"
    },
    "options": {
      "A": "0x00000e2c",
      "B": "0x00000113",
      "C": "0x00000d19",
      "D": "The instruction bits of sub $t6, $t5, $t4"
    },
    "answer": "D"
  },
  {
    "id": 10,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What value is stored in the ID/EX.ReadData1 field?",
      "image": mach1,
      "ask": "Select the corresponding register value captured in the execution buffer:"
    },
    "options": {
      "A": "0x00000d19",
      "B": "0x00000113",
      "C": "0x00000e2c",
      "D": "0x00000000"
    },
    "answer": "C"
  },
  {
    "id": 11,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What value is stored in the ID/EX.ReadData2 field?",
      "image": mach1,
      "ask": "Select the corresponding second operand source value captured in the execution buffer:"
    },
    "options": {
      "A": "0x00000e2c",
      "B": "0x00000113",
      "C": "0x00000000",
      "D": "0x00000d19"
    },
    "answer": "B"
  },
  {
    "id": 12,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What value is stored in the EX/MEM.ALUResult field?",
      "image": mach1,
      "ask": "Select the correct result latched in the memory stage pipeline register:"
    },
    "options": {
      "A": "0x00000d19",
      "B": "0x00000113",
      "C": "0x00000e2c",
      "D": "0x00000f3f"
    },
    "answer": "A"
  },
  {
    "id": 13,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What value is stored in the MEM/WB.WriteData field?",
      "image": mach1,
      "ask": "Select the correct option based on the pipeline register simulation:"
    },
    "options": {
      "A": "0x00000e2c",
      "B": "0x00000d19",
      "C": "0x00000113",
      "D": "Memory read data"
    },
    "answer": "B"
  },
  {
    "id": 14,
    "chapter": "Computer Architecture",
    "question": {
      "main": "Which register number is stored in the MEM/WB.RegisterRd field?",
      "image": mach1,
      "ask": "Identify the destination register number from the choices below:"
    },
    "options": {
      "A": "$t6",
      "B": "$t5",
      "C": "$t1",
      "D": "$t4"
    },
    "answer": "A"
  }
]
export default ktmtmach