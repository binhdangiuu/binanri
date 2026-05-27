import mach1 from "../assets/mach1.png"
import mach2 from "../assets/mach2.png"
import mach3 from "../assets/mach3.png"
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
  },
  {
    "id": 15,
    "chapter": "Computer Architecture",
    "question": {
      "main": "For the instruction AND Rd, Rs, Rt, what is the correct value of the control signal RegDst?",
      "image": mach2,
      "ask": "Select the correct control signal value:"
    },
    "options": {
      "A": "0",
      "B": "1",
      "C": "X",
      "D": "Depends on ALUOp"
    },
    "answer": "B"
  },
  {
    "id": 16,
    "chapter": "Computer Architecture",
    "question": {
      "main": "For the instruction AND Rd, Rs, Rt, what is the correct value of the control signal ALUSrc?",
      "image": mach2,
      "ask": "Select the correct control signal value:"
    },
    "options": {
      "A": "0",
      "B": "1",
      "C": "X",
      "D": "Depends on Branch"
    },
    "answer": "A"
  },
  {
    "id": 17,
    "chapter": "Computer Architecture",
    "question": {
      "main": "For the instruction AND Rd, Rs, Rt, what is the correct value of the control signal MemtoReg?",
      "image": mach2,
      "ask": "Select the correct control signal value:"
    },
    "options": {
      "A": "0",
      "B": "1",
      "C": "X",
      "D": "Depends on ALU result"
    },
    "answer": "A"
  },
  {
    "id": 18,
    "chapter": "Computer Architecture",
    "question": {
      "main": "For the instruction AND Rd, Rs, Rt, what is the correct value of the control signal RegWrite?",
      "image": mach2,
      "ask": "Select the correct control signal value:"
    },
    "options": {
      "A": "0",
      "B": "1",
      "C": "X",
      "D": "Depends on Zero flag"
    },
    "answer": "B"
  },
  {
    "id": 19,
    "chapter": "Computer Architecture",
    "question": {
      "main": "For the instruction AND Rd, Rs, Rt, what are the values of MemRead and MemWrite?",
      "image": mach2,
      "ask": "Select the correct combination of control signals:"
    },
    "options": {
      "A": "MemRead=0, MemWrite=1",
      "B": "MemRead=0, MemWrite=0",
      "C": "MemRead=1, MemWrite=0",
      "D": "MemRead=1, MemWrite=1"
    },
    "answer": "B"
  },
  {
    "id": 20,
    "chapter": "Computer Architecture",
    "question": {
      "main": "For the instruction AND Rd, Rs, Rt, what is the correct value of the control signal Branch?",
      "image": mach2,
      "ask": "Select the correct control signal value:"
    },
    "options": {
      "A": "1",
      "B": "0",
      "C": "X",
      "D": "Depends on Zero"
    },
    "answer": "B"
  },
  {
    "id": 21,
    "chapter": "Computer Architecture",
    "question": {
      "main": "Which component performs the logical AND operation?",
      "image": mach2,
      "ask": "Identify the functional block responsible for this execution:"
    },
    "options": {
      "A": "Register file",
      "B": "Control unit",
      "C": "Data memory",
      "D": "ALU"
    },
    "answer": "D"
  },
  {
    "id": 22,
    "chapter": "Computer Architecture",
    "question": {
      "main": "Which block provides the next sequential instruction address?",
      "image": mach2,
      "ask": "Identify the logic block that computes PC + 4:"
    },
    "options": {
      "A": "Sign extend",
      "B": "Data memory",
      "C": "Adder (PC + 4)",
      "D": "ALU"
    },
    "answer": "C"
  },
  {
    "id": 23,
    "chapter": "Computer Architecture",
    "question": {
      "main": "Which block produces an output that is not used for the instruction AND Rd, Rs, Rt?",
      "image": mach2,
      "ask": "Select the hardware unit whose output is ignored in this cycle:"
    },
    "options": {
      "A": "Register file",
      "B": "ALU",
      "C": "Instruction memory",
      "D": "Data memory"
    },
    "answer": "D"
  },
  {
    "id": 24,
    "chapter": "Computer Architecture",
    "question": {
      "main": "For the instruction AND Rd, Rs, Rt, the second ALU input comes from:",
      "image": mach2,
      "ask": "Identify the source of the second operand for the execution unit:"
    },
    "options": {
      "A": "Immediate field",
      "B": "Sign-extended offset",
      "C": "Data memory",
      "D": "Register Rt"
    },
    "answer": "D"
  },
  {
    "id": 25,
    "chapter": "Computer Architecture",
    "question": {
      "main": "If a sub instruction is being executed, how should the control signal RegDst be set?",
      "image": mach2,
      "ask": "Select the correct destination register MUX control value:"
    },
    "options": {
      "A": "0",
      "B": "1",
      "C": "doesn't matter",
      "D": "depends on ALUOp"
    },
    "answer": "B"
  },
  {
    "id": 26,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What is the minimum clock cycle time if the datapath is not pipelined?",
      "image": mach3,
      "ask": "Select the correct clock cycle time for a non-pipelined system:"
    },
    "options": {
      "A": "800 ps",
      "B": "190 ps",
      "C": "760 ps",
      "D": "610 ps"
    },
    "answer": "A"
  },
  {
    "id": 27,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What is the minimum clock cycle time if the datapath is pipelined?",
      "image": mach3,
      "ask": "Select the correct clock period when the datapath operates in pipeline mode:"
    },
    "options": {
      "A": "800 ps",
      "B": "190 ps",
      "C": "150 ps",
      "D": "160 ps"
    },
    "answer": "B"
  },
  {
    "id": 28,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What is the total latency for the add instruction if the datapath is not pipelined?",
      "image": mach3,
      "ask": "Identify the execution time required for a single add instruction without pipelining:"
    },
    "options": {
      "A": "190 ps",
      "B": "150 ps",
      "C": "610 ps",
      "D": "800 ps"
    },
    "answer": "D"
  },
  {
    "id": 29,
    "chapter": "Computer Architecture",
    "question": {
      "main": "What is the total latency for the add instruction if the datapath is pipelined?",
      "image": mach3,
      "ask": "Identify the total duration from start to finish for the add instruction in pipeline mode:"
    },
    "options": {
      "A": "800 ps",
      "B": "950 ps",
      "C": "610 ps",
      "D": "190 ps"
    },
    "answer": "B"
  },
  {
    "id": 30,
    "chapter": "Computer Architecture",
    "question": {
      "main": "Suppose that you could split one stage of the pipelined datapath into two new stages, each with half the latency of the original stage. Which stage should be split to minimize the clock cycle time?",
      "image": mach3,
      "ask": "Select the optimal stage to split to improve overall frequency:"
    },
    "options": {
      "A": "WB",
      "B": "IF",
      "C": "EX",
      "D": "ID"
    },
    "answer": "B"
  },
  {
    "id": 31,
    "chapter": "Computer Architecture",
    "question": {
      "main": "After splitting the stage identified above, what is the new minimum clock cycle time?",
      "image": mach3,
      "ask": "Calculate the updated clock cycle time based on the split stage configuration:"
    },
    "options": {
      "A": "190 ps",
      "B": "95 ps",
      "C": "160 ps",
      "D": "150 ps"
    },
    "answer": "A"
  },
  {
    "id": 32,
    "chapter": "Computer Architecture",
    "question": {
      "main": "After splitting the stage identified above, what is the new total latency for the pipeline?",
      "image": mach3,
      "ask": "Determine the new overall latency for a single instruction passing through the modified pipeline:"
    },
    "options": {
      "A": "1140 ps",
      "B": "800 ps",
      "C": "610 ps",
      "D": "960 ps"
    },
    "answer": "A"
  },
  {
    "id": 33,
    "chapter": "Computer Architecture",
    "question": {
      "main": "How many block offset bits are required?",
      "context": "Assume a 32-bit address space and a cache with 64-byte blocks.",
      "ask": "Select the correct number of block offset bits:"
    },
    "options": {
      "A": "4",
      "B": "16",
      "C": "6",
      "D": "8"
    },
    "answer": "C"
  },
  {
    "id": 34,
    "chapter": "Computer Architecture",
    "question": {
      "main": "If the cache has 256 lines and is direct-mapped, how many index bits are used?",
      "context": "Assume a 32-bit address space and a cache with 64-byte blocks.",
      "ask": "Select the correct number of index bits:"
    },
    "options": {
      "A": "12",
      "B": "10",
      "C": "6",
      "D": "8"
    },
    "answer": "D"
  },
  {
    "id": 35,
    "chapter": "Computer Architecture",
    "question": {
      "main": "How many tag bits are used in this cache?",
      "context": "Assume a 32-bit address space and a cache with 64-byte blocks. (Using the setup from the previous question where the cache has 256 lines and is direct-mapped)",
      "ask": "Select the correct number of tag bits:"
    },
    "options": {
      "A": "18",
      "B": "16",
      "C": "14",
      "D": "20"
    },
    "answer": "A"
  },
  {
    "id": 36,
    "chapter": "Computer Architecture",
    "question": {
      "main": "Which cache miss occurs the first time a block is accessed?",
      "context": "Assume a 32-bit address space and a cache with 64-byte blocks.",
      "ask": "Identify the type of cache miss:"
    },
    "options": {
      "A": "Compulsory miss",
      "B": "Conflict miss",
      "C": "Capacity miss",
      "D": "Write miss"
    },
    "answer": "A"
  },
  {
    "id": 37,
    "chapter": "Computer Architecture",
    "question": {
      "main": "Which cache organization has the lowest hardware complexity?",
      "context": "Assume a 32-bit address space and a cache with 64-byte blocks.",
      "ask": "Select the cache organization with the simplest hardware implementation:"
    },
    "options": {
      "A": "Direct-mapped",
      "B": "Fully associative",
      "C": "2-way set associative",
      "D": "4-way set associative"
    },
    "answer": "A"
  }
]
export default ktmtmach