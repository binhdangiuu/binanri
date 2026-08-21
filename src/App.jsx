import { useState, useEffect } from "react"
import questions from "./data/questions"
import ktct1 from "./data/ktct1"
import ktct2 from "./data/ktct2"
import ktct3 from "./data/ktct3"
import ktct_quizzlet from "./data/quizzlet"
import tree from "./data/tree"
import heap from "./data/heap"
import ktmtmach from "./data/ktmtmach"
import hash from "./data/hash"
import graph from "./data/graph"
import hk251DSA from "./data/hk251dsa"
const subjects = [

  {

    id: "KTMT",

    quizzes: [

      {
        id: "ktmt-main",
        title: "KTMT Quizzes",
        questionsCount: 74,
        comingSoon: false,
        questions: questions
      },

      {
        id: "ktmt-mach",
        title: "KTMT Các câu hỏi Mạch",
        questionsCount: ktmtmach.length,
        comingSoon: false,
        questions: ktmtmach
      },

    ]
  },

  {
    id: "KINH TẾ CHÍNH TRỊ",

    quizzes: [

      {
        id: "ktct-main",
        title: "KTCT Chương 1",
        questionsCount: ktct1.length,
        comingSoon: false,
        questions: ktct1
      },

      {
        id: "ktct-2",
        title: "KTCT Chương 2",
        questionsCount: ktct2.length,
        comingSoon: false,
        questions: ktct2
      },

      {
        id: "ktct-3",
        title: "KTCT Chương 3",
        questionsCount: ktct3.length,
        comingSoon: false,
        questions: ktct3
      },

      {
        id: "ktct-quizzlet",
        title: "KTCT Quizizz (Chương 2-6) từ Ngân hàng đề",
        questionsCount: ktct_quizzlet.length,
        comingSoon: false,
        questions: ktct_quizzlet
      },

    ]
  },

  {
    id: "DSA",

    quizzes: [

      {
        id: "dsa-tree",
        title: "DSA Tree (50 compulsory + 20 optional)",
        questionsCount: tree.length,
        comingSoon: false,
        questions: tree
      },

      {
        id: "dsa-heap",
        title: "DSA Heap (37 compulsory + 23 optional)",
        questionsCount: heap.length,
        comingSoon: false,
        questions: heap
      },

      {
        id: "dsa-hash",
        title: "DSA Hash (22 compulsory + 18 optional)",
        questionsCount: hash.length,
        comingSoon: false,
        questions: hash
      },

      {
        id: "dsa-graph",
        title: "DSA Graph (30 compulsory + 10 optional)",
        questionsCount: graph.length,
        comingSoon: false,
        questions: graph
      },

      {
        id: "dsa-hk251dsa",
        title: "DSA HK251 (OFFICIAL)",
        questionsCount: hk251DSA.length,
        comingSoon: false,
        questions: hk251DSA
      }

    ]
  },
    {

    id: "Hệ điều hành",

    quizzes: [

      {
        id: "lecture",
        title: "Lecture Slides",
        type: "pdf",
        documents: [
  { title: "Chapter 1", file: "/pdfs/lecture/ch1_EN_BK.pdf" },
  { title: "Chapter 2", file: "/pdfs/lecture/ch2_EN_BK.pdf" },
  { title: "Chapter 3 - Process", file: "/pdfs/lecture/ch3_EN_BK_Process_DTD.pdf" },
  { title: "Chapter 4 - Threads", file: "/pdfs/lecture/ch4_EN_BK_Threads_DTD.pdf" },
  { title: "Chapter 5 - CPU Scheduling", file: "/pdfs/lecture/ch5_EN_CPUSched_2022_DTD.pdf" },
  { title: "Chapter 6 - Synchronization 1", file: "/pdfs/lecture/ch6_EN_BK_syn1_DTD.pdf" },
  { title: "Chapter 7 - Synchronization 2", file: "/pdfs/lecture/ch7_EN_BK_sync2.pdf" },
  { title: "Chapter 8 - Main Memory", file: "/pdfs/lecture/ch8_mainMem.pdf" },
  { title: "Chapter 9 - Virtual Memory", file: "/pdfs/lecture/ch9_virMem.pdf" },
  { title: "Chapter 10A - File System Interface", file: "/pdfs/lecture/ch10A-File%20System%20Interface.pdf" },
  { title: "Chapter 10B - File System Implementation", file: "/pdfs/lecture/ch10B_File_System_Implementation.pdf" },
  { title: "Chapter 11 - Mass Storage & Disk Scheduling", file: "/pdfs/lecture/ch11_MassStorage_DiskScheduling.pdf" },
],
      },
      {
        id: "notes",
        title: "Lecture Notes",
        type: "course",
        documents: [
  { id: "ch1", title: "Chapter 1 - Introduction", file: "/lectures/os-ch1-lecture.html" },
  { id: "ch2", title: "Chapter 2 - Operating System Structures", file: null },
  { id: "ch3", title: "Chapter 3 - Process", file: null },
  { id: "ch4", title: "Chapter 4 - Threads", file: null },
  { id: "ch5", title: "Chapter 5 - CPU Scheduling", file: null },
  { id: "ch6", title: "Chapter 6 - Synchronization 1", file: null },
  { id: "ch7", title: "Chapter 7 - Synchronization 2", file: null },
  { id: "ch8", title: "Chapter 8 - Main Memory", file: null },
  { id: "ch9", title: "Chapter 9 - Virtual Memory", file: null },
  { id: "ch10A", title: "Chapter 10A - File System Interface", file: null },
  { id: "ch10B", title: "Chapter 10B - File System Implementation", file: null },
  { id: "ch11", title: "Chapter 11 - Mass Storage & Disk Scheduling", file: null },
],
      },

      {
        id: "lab-1",
        title: "Lab 1 - Thầy Nguyễn Phương Duy",
        questionsCount: 5,
        comingSoon: true,
      },

      {
        id: "lab-2",
        title: "Lab 2 - Thầy Nguyễn Phương Duy",
        questionsCount: 5,
        comingSoon: true,
      },

      {
        id: "lab-3",
        title: "Lab 3 - Thầy Nguyễn Phương Duy",
        questionsCount: 5,
        comingSoon: true,
      },

      {
        id: "lab-4",
        title: "Lab 4 - Thầy Nguyễn Phương Duy",
        questionsCount: 5,
        comingSoon: true,
      },

      {
        id: "btl252",
        title: "Bài tập lớn HK252",
        questionsCount: 4,
        comingSoon: true,
      },

      {
        id: "tomtat",
        title: "Tóm tắt kiến thức OS",
        questionsCount: 11,
        comingSoon: true,
      },

      {
        id: "cheatsheet",
        title: "Cheatsheet (Toàn bộ là chữ viết tay của tui, nếu mà khó đọc quá thì tui sẽ chuẩn bị lại bản đánh máy cho anri nhen)",
        questionsCount: 1,
        comingSoon: true,
      },

      {
        id: "introduction",
        title: "Introduction to Operating Systems (ôn thi Chapter 1 - Chapter 2)",
        questionsCount: 52,
        comingSoon: true,
      },

      {
        id: "cpu",
        title: "CPU (ôn thi Chapter 3 - Chapter 7)",
        questionsCount: 158,
        comingSoon: true,
      },

      {
        id: "storage",
        title: "Storage (ôn thi Chapter 8 - Chapter 10B)",
        questionsCount: 158,
        comingSoon: true,
      },

      {
        id: "dethihk252",
        title: "Đề thi HK252 - Những câu chưa có trong đề thi trước",
        questionsCount: 15,
        comingSoon: true,
      },


    ]
  },


]

export default function App() {

  const [screen, setScreen] = useState("subject")

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answers, setAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [activeSubject, setActiveSubject] = useState(null)
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [selectedDocument, setSelectedDocument] = useState(null)
  const [selectedChapter, setSelectedChapter] = useState(null)

  useEffect(() => {
    const savedData = localStorage.getItem("quiz-progress")

    if (savedData) {
      const parsedData = JSON.parse(savedData)

      setScreen(parsedData.screen || "subject")
      setCurrentQuestion(parsedData.currentQuestion || 0)
      setScore(parsedData.score || 0)
      const restoredAnswers = (parsedData.answers || []).map((answer) => {
        if (typeof answer === "number") {
          return ["A", "B", "C", "D", "E", "F"][answer] || String(answer)
        }
        return answer
      })
      setAnswers(restoredAnswers)
      setActiveSubject(parsedData.activeSubject || null)

      if (parsedData.selectedQuizId) {
        const foundQuiz = subjects
          .flatMap(subject => subject.quizzes)
          .find(quiz => quiz.id === parsedData.selectedQuizId)

        if (foundQuiz) {
          setSelectedQuiz(foundQuiz)
        }
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      "quiz-progress",
      JSON.stringify({
        screen,
        currentQuestion,
        score,
        activeSubject,
        selectedQuizId: selectedQuiz?.id || null,
        answers
      })
    )
  }, [screen, currentQuestion, score, activeSubject, selectedQuiz, answers])

  const isQuizComingSoon = (quiz) => { //hàm check coming soon cho pdf và course
    if (quiz.type === "pdf") {
      return !quiz.documents || quiz.documents.length === 0
    }
    if (quiz.type === "course") {
      return false
    }
    return quiz.comingSoon
  }
  const optionLetters = ["A", "B", "C", "D", "E", "F"]

  const normalizeOptions = (options) => {
    if (!options) return null
    if (Array.isArray(options)) {
      return Object.fromEntries(options.map((option, index) => [optionLetters[index] || String(index), option]))
    }
    return options
  }

  const normalizeAnswer = (answer) => {
    if (typeof answer === "number") {
      return optionLetters[answer] || String(answer)
    }
    return answer
  }

  const normalizeQuestionItem = (item) => {
    if (!item) return item

    const normalized = { ...item }
    normalized.options = normalizeOptions(item.options)
    normalized.answer = normalizeAnswer(item.answer)

    const rawQuestion = item.question
    if (typeof rawQuestion === "string") {
      normalized.question = {
        main: rawQuestion,
        context: item.context,
        image: item.image,
        ask: item.ask,
        code: item.code,
        tree: item.tree,
        sequence: item.sequence,
        insertions: item.insertions,
        deletions: item.deletions,
        operations: item.operations,
        statements: item.statements,
        rule: item.rule,
      }
    } else if (rawQuestion && typeof rawQuestion === "object") {
      normalized.question = { ...rawQuestion }
      if (!normalized.question.context && item.context) {
        normalized.question.context = item.context
      }
      if (!normalized.question.image && item.image) {
        normalized.question.image = item.image
      }
      if (!normalized.question.ask && item.ask) {
        normalized.question.ask = item.ask
      }
    }
    return normalized
  }

  const normalizedQuizQuestions = selectedQuiz?.questions?.map(normalizeQuestionItem) || []
  const question = normalizedQuizQuestions?.[currentQuestion]
  const q = question?.question || {}
  const contextText = question?.context || q?.context

  useEffect(() => {
    if (answers[currentQuestion] !== undefined) {
      setSelectedAnswer(answers[currentQuestion])
    } else {
      setSelectedAnswer(null)
    }
  }, [currentQuestion, answers, selectedQuiz])

  const handleAnswer = (key) => {
    const updatedAnswers = [...answers]
    updatedAnswers[currentQuestion] = key
    setAnswers(updatedAnswers)
    setSelectedAnswer(key)

    let newScore = 0
    updatedAnswers.forEach((answer, questionIndex) => {
      if (
        normalizedQuizQuestions[questionIndex] &&
        answer === normalizedQuizQuestions[questionIndex].answer
      ) {
        newScore++
      }
    })
    setScore(newScore)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < (selectedQuiz?.questions?.length || 0) - 1) {
      const nextQuestion = currentQuestion + 1
      setCurrentQuestion(nextQuestion)
      setSelectedAnswer(answers[nextQuestion] ?? null)
    } else {
      setScreen("result")
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      const previousQuestion = currentQuestion - 1
      setCurrentQuestion(previousQuestion)
      setSelectedAnswer(answers[previousQuestion] ?? null)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setScreen("quiz")
    setAnswers([])
  }

  const scorePercent = selectedQuiz?.questions?.length
    ? Math.round((score / selectedQuiz.questions.length) * 100)
    : 0

  const resultMessage =
    scorePercent >= 90 ? "Xuất sắc luôn! A-C-E-D!" :
    scorePercent >= 70 ? "Tui biết bạn sẽ làm được mà, one step closer!" :
    scorePercent >= 50 ? "Ổn rồi đó, cố thêm chút nữa thui!" :
    "Không sao, ôn lại rồi tụi mình làm lại nha!"

  return (
    <div className="min-h-screen bg-blush relative overflow-x-hidden">

      {/* AMBIENT BACKGROUND BLOBS */}
      <div className="pointer-events-none fixed -top-24 -left-24 w-80 h-80 rounded-full bg-sunflower/20 blur-3xl" />
      <div className="pointer-events-none fixed top-1/3 -right-24 w-96 h-96 rounded-full bg-sky/25 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 left-1/4 w-72 h-72 rounded-full bg-mint/15 blur-3xl" />

      {/* FLOATING DECORATIVE PARTICLES */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <span className="floaty text-2xl" style={{ left: "29%", animationDuration: "17s", animationDelay: "12.6s" }}>👑</span>
        <span className="floaty text-4xl" style={{ left: "2%", animationDuration: "18s", animationDelay: "16.3s" }}>💗</span>
        <span className="floaty text-2xl" style={{ left: "73%", animationDuration: "23s", animationDelay: "5.3s" }}>🎀</span>
        <span className="floaty text-4xl" style={{ left: "79%", animationDuration: "19s", animationDelay: "7.0s" }}>✨</span>
        <span className="floaty text-3xl" style={{ left: "95%", animationDuration: "27s", animationDelay: "5.1s" }}>💎</span>
        <span className="floaty text-2xl" style={{ left: "16%", animationDuration: "26s", animationDelay: "12.1s" }}>🦋</span>
        <span className="floaty text-3xl" style={{ left: "84%", animationDuration: "19s", animationDelay: "8.8s" }}>🌸</span>
        <span className="floaty text-4xl" style={{ left: "89%", animationDuration: "27s", animationDelay: "13.1s" }}>💫</span>
        <span className="floaty text-3xl" style={{ left: "77%", animationDuration: "27s", animationDelay: "6.2s" }}>🌷</span>
        <span className="floaty text-2xl" style={{ left: "55%", animationDuration: "20s", animationDelay: "15.6s" }}>⭐</span>
        <span className="floaty text-4xl" style={{ left: "88%", animationDuration: "23s", animationDelay: "5.1s" }}>🩰</span>
        <span className="floaty text-3xl" style={{ left: "56%", animationDuration: "26s", animationDelay: "16.7s" }}>🪄</span>
        <span className="floaty text-4xl" style={{ left: "59%", animationDuration: "20s", animationDelay: "12.5s" }}>👑</span>
        <span className="floaty text-5xl" style={{ left: "22%", animationDuration: "27s", animationDelay: "8.7s" }}>💗</span>
        <span className="floaty text-4xl" style={{ left: "66%", animationDuration: "19s", animationDelay: "4.7s" }}>🎀</span>
        <span className="floaty text-4xl" style={{ left: "5%", animationDuration: "28s", animationDelay: "11.1s" }}>✨</span>
        <span className="floaty text-5xl" style={{ left: "90%", animationDuration: "22s", animationDelay: "4.2s" }}>💎</span>
        <span className="floaty text-3xl" style={{ left: "71%", animationDuration: "25s", animationDelay: "9.4s" }}>🦋</span>
        <span className="floaty text-2xl" style={{ left: "31%", animationDuration: "30s", animationDelay: "2.1s" }}>🌸</span>
        <span className="floaty text-3xl" style={{ left: "96%", animationDuration: "29s", animationDelay: "12.9s" }}>💫</span>
        <span className="floaty text-2xl" style={{ left: "33%", animationDuration: "23s", animationDelay: "7.3s" }}>🌷</span>
        <span className="floaty text-5xl" style={{ left: "6%", animationDuration: "25s", animationDelay: "4.8s" }}>⭐</span>
        <span className="floaty text-2xl" style={{ left: "13%", animationDuration: "27s", animationDelay: "13.7s" }}>🩰</span>
        <span className="floaty text-4xl" style={{ left: "93%", animationDuration: "29s", animationDelay: "12.2s" }}>🪄</span>
        <span className="floaty text-2xl" style={{ left: "19%", animationDuration: "21s", animationDelay: "8.3s" }}>👑</span>
        <span className="floaty text-5xl" style={{ left: "15%", animationDuration: "17s", animationDelay: "18.1s" }}>💗</span>
        <span className="floaty text-4xl" style={{ left: "27%", animationDuration: "25s", animationDelay: "14.5s" }}>🎀</span>
        <span className="floaty text-2xl" style={{ left: "30%", animationDuration: "30s", animationDelay: "11.9s" }}>✨</span>
        <span className="floaty text-3xl" style={{ left: "37%", animationDuration: "19s", animationDelay: "7.1s" }}>💎</span>
        <span className="floaty text-3xl" style={{ left: "83%", animationDuration: "25s", animationDelay: "18.1s" }}>🦋</span>

        <span className="bubble" style={{ left: "55%", width: "31px", height: "31px", animationDuration: "14s", animationDelay: "7.7s" }} />
        <span className="bubble" style={{ left: "12%", width: "12px", height: "12px", animationDuration: "12s", animationDelay: "8.7s" }} />
        <span className="bubble" style={{ left: "54%", width: "39px", height: "39px", animationDuration: "24s", animationDelay: "10.9s" }} />
        <span className="bubble" style={{ left: "84%", width: "37px", height: "37px", animationDuration: "25s", animationDelay: "5.1s" }} />
        <span className="bubble" style={{ left: "31%", width: "23px", height: "23px", animationDuration: "16s", animationDelay: "9.8s" }} />
        <span className="bubble" style={{ left: "65%", width: "23px", height: "23px", animationDuration: "13s", animationDelay: "8.0s" }} />
        <span className="bubble" style={{ left: "42%", width: "41px", height: "41px", animationDuration: "26s", animationDelay: "12.3s" }} />
        <span className="bubble" style={{ left: "56%", width: "36px", height: "36px", animationDuration: "20s", animationDelay: "8.5s" }} />
        <span className="bubble" style={{ left: "47%", width: "12px", height: "12px", animationDuration: "14s", animationDelay: "7.2s" }} />
        <span className="bubble" style={{ left: "13%", width: "18px", height: "18px", animationDuration: "21s", animationDelay: "2.1s" }} />
        <span className="bubble" style={{ left: "10%", width: "39px", height: "39px", animationDuration: "24s", animationDelay: "0.5s" }} />
        <span className="bubble" style={{ left: "8%", width: "12px", height: "12px", animationDuration: "21s", animationDelay: "4.8s" }} />
        <span className="bubble" style={{ left: "28%", width: "30px", height: "30px", animationDuration: "26s", animationDelay: "8.1s" }} />
        <span className="bubble" style={{ left: "5%", width: "37px", height: "37px", animationDuration: "13s", animationDelay: "11.8s" }} />
        <span className="bubble" style={{ left: "75%", width: "25px", height: "25px", animationDuration: "26s", animationDelay: "9.8s" }} />
        <span className="bubble" style={{ left: "69%", width: "12px", height: "12px", animationDuration: "12s", animationDelay: "10.2s" }} />
        <span className="bubble" style={{ left: "51%", width: "27px", height: "27px", animationDuration: "25s", animationDelay: "4.0s" }} />
        <span className="bubble" style={{ left: "85%", width: "32px", height: "32px", animationDuration: "22s", animationDelay: "0.3s" }} />
        <span className="bubble" style={{ left: "20%", width: "37px", height: "37px", animationDuration: "22s", animationDelay: "2.4s" }} />
        <span className="bubble" style={{ left: "9%", width: "15px", height: "15px", animationDuration: "26s", animationDelay: "0.8s" }} />
        <span className="bubble" style={{ left: "71%", width: "26px", height: "26px", animationDuration: "15s", animationDelay: "10.3s" }} />
        <span className="bubble" style={{ left: "7%", width: "33px", height: "33px", animationDuration: "23s", animationDelay: "12.8s" }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 py-8">

        {/* LAST UPDATED */}
        <div className="text-center mb-5">
          <p className="text-plum-soft text-sm font-medium tracking-wide">
            Last Updated: 18/08/2026 • 19:33:18 (Frontend demo)
          </p>
        </div>

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-10">
          <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl font-extrabold text-sunflower-deep leading-none drop-shadow-sm">
            ÔN TẬP
            <br />
            THUI
          </h1>
          <div className="font-[var(--font-display)] text-xl sm:text-2xl font-semibold text-sky-deep bg-cream/70 border border-blush-deep rounded-2xl px-5 py-3 shadow-sm">
            Mong cho mỗi ngày của Anri đều là mỗi ngày hạnh phúc.
          </div>
        </div>

        {/* SUBJECT TABS */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {subjects.map((subject) => (
            <button
              key={subject.id}
              onClick={() => {
                setScreen("subject")
                setActiveSubject(subject.id)
              }}
              className={`
                font-[var(--font-display)]
                px-6
                sm:px-8
                py-3
                sm:py-4
                rounded-full
                font-semibold
                text-base
                sm:text-lg
                transition
                shadow-sm
                ${activeSubject === subject.id
                  ? "bg-sky text-white shadow-md scale-[1.03]"
                  : "bg-cream/80 text-plum hover:bg-white hover:-translate-y-0.5"}
              `}
            >
              {subject.id}
            </button>
          ))}
        </div>

        {/* SUBJECT SCREEN */}
        {screen === "subject" && activeSubject && (
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {subjects.find(subject => subject.id === activeSubject)?.quizzes.map((quiz) => {
              const comingSoon = isQuizComingSoon(quiz)
              return (
                <div
                  key={quiz.id}
                  onClick={() => {
                    if (comingSoon) return
                    if (quiz.type === "pdf") {
                      setSelectedQuiz(quiz)
                      setScreen("pdf-list")
                    } else if (quiz.type === "course") {
                      setSelectedQuiz(quiz)
                      setScreen("course-list")
                    } else {
                        setSelectedQuiz(quiz)
                        setCurrentQuestion(0)
                        setSelectedAnswer(null)
                        setAnswers([])
                        setScore(0)
                        setScreen("quiz")
                    }
                  }}
                  className={`
                    relative bg-cream/80 border border-blush-deep rounded-[28px] p-8 sm:p-10 transition
                    ${comingSoon
                      ? "opacity-70 cursor-default"
                      : "cursor-pointer hover:border-sky hover:-translate-y-1 hover:shadow-xl"}
                  `}
                >
                  {comingSoon && (
                    <span className="absolute top-5 right-5 text-xs font-semibold uppercase tracking-wide bg-plum/10 text-plum-soft px-3 py-1 rounded-full">
                      Sắp có
                    </span>
                  )}
                  {!comingSoon && quiz.type === "pdf" && (
                    <span className="absolute top-5 right-5 text-xs font-semibold uppercase tracking-wide bg-sky/15 text-sky-deep px-3 py-1 rounded-full">
                      Tài liệu
                    </span>
                  )}
                  <h1 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold mb-3 leading-snug text-plum">
                    <span className="float-right w-16 h-10 sm:w-24 sm:h-11"></span>
                    {quiz.title}
                  </h1>
                  <p className="text-lg text-plum-soft">
                    {comingSoon
                      ? "Đang chuẩn bị, quay lại sau nhé"
                      : quiz.type === "pdf"
                        ? `${quiz.documents.length} file${quiz.documents.length > 1 ? "s" : ""}`
                            : quiz.type === "course"
                              ? "12 chương"
                              : `${quiz.questionsCount} câu hỏi`}
                  </p>
                </div>
              )
            })}
          </div>
        )}

        {/* QUIZ FINISHED */}
        {screen === "result" && selectedQuiz && (
          <div className="animate-pop-in bg-cream border border-blush-deep p-10 sm:p-14 rounded-[32px] shadow-xl text-center max-w-xl mx-auto">
            <div
              className="w-40 h-40 rounded-full mx-auto mb-8 flex items-center justify-center"
              style={{
                background: `conic-gradient(var(--color-sky) ${scorePercent * 3.6}deg, var(--color-blush-deep) 0deg)`
              }}
            >
              <div className="w-32 h-32 rounded-full bg-cream flex flex-col items-center justify-center">
                <span className="font-[var(--font-display)] text-4xl font-extrabold text-sky-deep">{scorePercent}%</span>
              </div>
            </div>
            <h1 className="font-[var(--font-display)] text-3xl sm:text-4xl font-extrabold mb-3 text-plum">{resultMessage}</h1>
            <p className="text-xl text-plum-soft mb-8">Điểm số: {score} / {selectedQuiz.questions.length}</p>
            <button
              onClick={restartQuiz}
              className="font-[var(--font-display)] bg-sky text-white text-lg font-semibold px-8 py-4 rounded-2xl hover:bg-sky-deep hover:-translate-y-0.5 transition shadow-md"
            >
              Làm lại
            </button>
          </div>
        )}

        {/* PDF LIST SCREEN */}
        {screen === "pdf-list" && selectedQuiz && (
          <div className="animate-fade-in">
            <button
              onClick={() => { setScreen("subject"); setSelectedQuiz(null) }}
              className="mb-6 bg-cream/80 border border-blush-deep px-5 py-3 rounded-2xl font-medium hover:border-sky hover:-translate-y-0.5 transition"
            >
              ← Quay lại
            </button>

            <div className="bg-cream/80 border border-blush-deep rounded-[28px] p-6 sm:p-10">
              <h1 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold mb-6 text-plum">{selectedQuiz.title}</h1>

              {selectedQuiz.documents.length === 0 && (
                <p className="text-lg text-plum-soft">Chưa có tài liệu nào được đăng.</p>
              )}

              <div className="divide-y divide-blush-deep/60">
                {selectedQuiz.documents.map((doc, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedDocument(doc)
                      setScreen("pdf-view")
                    }}
                    className="flex items-center gap-4 py-5 cursor-pointer group"
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-sky/10 text-sky-deep font-bold text-[11px] shrink-0 transition group-hover:bg-sky group-hover:text-white">
                      PDF
                    </div>
                    <span className="text-lg sm:text-xl text-plum font-medium group-hover:text-sky-deep transition">
                      {doc.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PDF VIEW SCREEN */}
        {screen === "pdf-view" && selectedDocument && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
              <button
                onClick={() => { setScreen("pdf-list"); setSelectedDocument(null) }}
                className="bg-cream/80 border border-blush-deep px-5 py-3 rounded-2xl font-medium hover:border-sky hover:-translate-y-0.5 transition"
              >
                ← Quay lại
              </button>
              <a
                href={selectedDocument.file}
                download
                className="bg-sky text-white px-5 py-3 rounded-2xl font-medium hover:bg-sky-deep hover:-translate-y-0.5 transition shadow-md"
              >
                ⬇ Tải PDF
              </a>
            </div>

            <div className="bg-cream/80 border border-blush-deep rounded-[28px] p-4 sm:p-6">
              <h2 className="font-[var(--font-display)] text-xl sm:text-2xl font-bold mb-4 px-2 text-plum">{selectedDocument.title}</h2>
              <div className="w-full rounded-2xl overflow-hidden border border-blush-deep" style={{ height: "80vh" }}>
                <iframe
                  src={selectedDocument.file}
                  title={selectedDocument.title}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}

              {/* COURSE LIST SCREEN (Lớp 3 — danh sách 12 chương) */}
      {screen === "course-list" && selectedQuiz && (
        <div>
          <button
            onClick={() => { setScreen("subject"); setSelectedQuiz(null) }}
            className="mb-6 bg-white px-5 py-3 rounded-2xl border hover:border-blue-500 transition"
          >
            ← Back
          </button>

          <div className="bg-white/50 border rounded-[30px] p-6 md:p-10">
            <h1 className="text-4xl font-black mb-6">{selectedQuiz.title}</h1>

            <div className="divide-y">
              {selectedQuiz.chapters.map((chapter) => {
                const locked = !chapter.file
                return (
                  <div
                    key={chapter.id}
                    onClick={() => {
                      if (locked) return
                      setSelectedChapter(chapter)
                      setScreen("course-view")
                    }}
                    className={`flex items-center gap-4 py-5 group ${
                      locked ? "opacity-50 cursor-default" : "cursor-pointer"
                    }`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-teal-500 text-teal-600 font-bold text-[10px] shrink-0">
                      PDF
                    </div>
                    <span className={`text-xl ${locked ? "text-gray-500" : "text-blue-600 group-hover:underline"}`}>
                      {chapter.title}
                    </span>
                    {locked && <span className="ml-auto text-sm text-gray-400">Sắp có</span>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* COURSE VIEW SCREEN (Lớp 4 — bài giảng full) */}
      {screen === "course-view" && selectedChapter && (
        <div>
          <button
            onClick={() => { setScreen("course-list"); setSelectedChapter(null) }}
            className="mb-6 bg-white px-5 py-3 rounded-2xl border hover:border-blue-500 transition"
          >
            ← Back
          </button>

          <div className="bg-white/50 border rounded-[30px] p-4 md:p-6">
            <div className="w-full rounded-2xl overflow-hidden border" style={{ height: "85vh" }}>
              <iframe
                src={selectedChapter.file}
                title={selectedChapter.title}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}


        {/* QUIZ SCREEN */}
        {screen === "quiz" && selectedQuiz && question && (
          <div className="animate-fade-in">
            <button onClick={() => { setScreen("subject"); setSelectedQuiz(null) }} className="mb-6 bg-cream/80 border border-blush-deep px-5 py-3 rounded-2xl font-medium hover:border-sky hover:-translate-y-0.5 transition">← Quay lại</button>

            {/* Tabs */}
            <div className="bg-cream/70 border border-blush-deep rounded-full p-2 flex gap-3 mb-8 overflow-x-auto">
              {["Overview","Fundamentals","Inheritance","Polymorphism","Patterns","Review","MCQ Quiz"].map((tab, index) => (
                <button key={index} className={`px-4 py-2 rounded-full whitespace-nowrap transition font-medium ${tab === "MCQ Quiz" ? "bg-sky text-white shadow-sm" : "text-plum-soft hover:bg-white"}`}>{tab}</button>
              ))}
            </div>

            {/* Quiz Info */}
            <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
              <div>
                <p className="text-lg font-semibold text-plum font-[var(--font-display)]">{selectedQuiz.title}</p>
                <p className="text-plum-soft">Câu {currentQuestion + 1} / {selectedQuiz.questions.length}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0} className="bg-cream border border-blush-deep px-5 py-2 rounded-2xl transition disabled:opacity-40 font-medium hover:border-sky">← Trước</button>
                <button onClick={handleNextQuestion} className="bg-sky text-white px-5 py-2 rounded-2xl hover:bg-sky-deep transition font-medium shadow-sm">Tiếp →</button>
              </div>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex-1 h-3 bg-blush-deep/60 rounded-full overflow-hidden">
                <div
                  style={{ width: `${((currentQuestion + 1) / selectedQuiz.questions.length) * 100}%` }}
                  className="h-full bg-gradient-to-r from-sky to-sunflower transition-all duration-500 ease-out"
                ></div>
              </div>
              <span className="text-sm font-semibold text-plum-soft w-12 text-right">
                {Math.round(((currentQuestion + 1) / selectedQuiz.questions.length) * 100)}%
              </span>
            </div>

            {/* Question Card */}
            <div className="bg-cream/80 border border-blush-deep rounded-[28px] p-6 sm:p-8">
              <p className="uppercase tracking-[3px] text-sky-deep text-sm mb-5 font-semibold">{selectedQuiz.title}</p>

              {contextText && (
                <div className="mb-6 bg-sunflower/10 border border-sunflower/40 p-5 rounded-2xl">
                  <pre className="text-lg leading-relaxed whitespace-pre-wrap overflow-x-auto"><code>{contextText}</code></pre>
                </div>
              )}

              {q?.code && (
                <pre className="bg-plum text-mint p-5 rounded-2xl overflow-x-auto mb-6 text-sm"><code>{q.code}</code></pre>
              )}

              {q?.image && (
                <img src={q.image} alt="question" className="mb-6 rounded-2xl border border-blush-deep w-full" />
              )}

              {q?.images && (
                <div className="space-y-4 mb-6">{q.images.map((img, index) => (<img key={index} src={img} alt={`question-${index}`} className="rounded-2xl border border-blush-deep w-full" />))}</div>
              )}

              {q?.main && (
                <h1 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold mb-6 leading-relaxed text-plum">
                  {q?.link ? (
                    <a href={q.link} target="_blank" rel="noopener noreferrer" className="text-sky-deep underline hover:text-sky">{q.main}</a>
                  ) : (
                    q.main
                  )}
                </h1>
              )}

              {q?.tree && (
                <div className="mb-6 bg-sky/10 border border-sky/30 p-5 rounded-2xl">
                  <p className="font-bold text-sky-deep mb-2">Tree</p>
                  <code className="text-lg">{q.tree}</code>
                </div>
              )}

              {q?.matrix && (
                <div className="mb-6 overflow-x-auto bg-sky/10 border border-sky/30 p-5 rounded-2xl">
                  <p className="font-bold text-sky-deep mb-3">Adjacency Matrix</p>
                  <table className="min-w-full border-collapse">
                    <tbody>
                      {q.matrix.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, colIndex) => (
                            <td key={colIndex} className="border border-blush-deep px-3 py-2 text-center">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {q?.adjacencyMatrix && (
                <div className="mb-6 overflow-x-auto bg-plum/5 border border-plum/15 p-5 rounded-2xl">
                  <p className="font-bold text-plum mb-3">Adjacency Matrix</p>
                  <table className="min-w-full border-collapse">
                    <tbody>
                      {q.adjacencyMatrix.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, colIndex) => (
                            <td key={colIndex} className="border border-blush-deep px-3 py-2 text-center">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {q?.adjacencyList && (
                <div className="mb-6 bg-plum/5 border border-plum/15 p-5 rounded-2xl">
                  <p className="font-bold text-plum mb-3">Adjacency List</p>
                  <div className="space-y-3">
                    {Object.entries(q.adjacencyList).map(([vertex, neighbors]) => (
                      <div key={vertex} className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold">{vertex}:</span>
                        <span>{Array.isArray(neighbors) ? neighbors.join(", ") : String(neighbors)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {q?.graphData && (
                <div className="mb-6 bg-mint/10 border border-mint/40 p-5 rounded-2xl">
                  <p className="font-bold text-mint-deep mb-4">Graph Data</p>
                  <div className="space-y-4">
                    {q.graphData.vertices && (
                      <div>
                        <p className="font-semibold text-mint-deep mb-2">Vertices:</p>
                        <div className="flex flex-wrap gap-2">
                          {q.graphData.vertices.map((vertex, index) => (
                            <span key={index} className="bg-mint/20 px-3 py-1 rounded-lg text-sm">{vertex}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {q.graphData.edges && (
                      <div>
                        <p className="font-semibold text-mint-deep mb-2">Edges:</p>
                        <div className="overflow-x-auto">
                          <table className="min-w-full border-collapse text-sm">
                            <thead>
                              <tr className="bg-mint/20">
                                <th className="border border-blush-deep px-3 py-2">From</th>
                                <th className="border border-blush-deep px-3 py-2">To</th>
                                {q.graphData.edges[0]?.weight !== undefined && <th className="border border-blush-deep px-3 py-2">Weight</th>}
                              </tr>
                            </thead>
                            <tbody>
                              {q.graphData.edges.map((edge, index) => (
                                <tr key={index} className="hover:bg-mint/10">
                                  <td className="border border-blush-deep px-3 py-2 text-center">{edge.from}</td>
                                  <td className="border border-blush-deep px-3 py-2 text-center">{edge.to}</td>
                                  {edge.weight !== undefined && <td className="border border-blush-deep px-3 py-2 text-center">{edge.weight}</td>}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {q?.sequence && (
                <div className="mb-6 bg-sky/10 border border-sky/30 p-5 rounded-2xl">
                  <p className="font-bold text-sky-deep mb-2">Sequence</p>
                  <p className="text-lg">{q.sequence.join(", ")}</p>
                </div>
              )}

              {q?.insertions && (
                <div className="mb-6 bg-mint/10 border border-mint/40 p-5 rounded-2xl">
                  <p className="font-bold text-mint-deep mb-2">Insertions</p>
                  <p className="text-lg">{q.insertions.join(", ")}</p>
                </div>
              )}

              {q?.deletions && (
                <div className="mb-6 bg-coral/10 border border-coral/40 p-5 rounded-2xl">
                  <p className="font-bold text-coral-deep mb-2">Deletions</p>
                  <p className="text-lg">{q.deletions.join(", ")}</p>
                </div>
              )}

              {q?.operations && (
                <div className="mb-6 bg-sunflower/10 border border-sunflower/40 p-5 rounded-2xl">
                  <p className="font-bold text-sunflower-deep mb-3">Operations</p>
                  <ul className="list-disc pl-6 space-y-2">{q.operations.map((op, index) => (<li key={index} className="text-lg">{op}</li>))}</ul>
                </div>
              )}

              {q?.statements && (
                <div className="mb-6 bg-plum/5 border border-plum/15 p-5 rounded-2xl">
                  <p className="font-bold text-plum mb-3">Statements</p>
                  <ul className="space-y-3">{q.statements.map((statement, index) => (<li key={index} className="text-lg leading-relaxed">{statement}</li>))}</ul>
                </div>
              )}

              {q?.rule && (
                <div className="mb-6 bg-coral/10 border border-coral/40 p-5 rounded-2xl">
                  <p className="font-bold text-coral-deep mb-2">Rule</p>
                  <p className="text-lg">{q.rule}</p>
                </div>
              )}

              {q?.ask && (
                <div className="mb-8"><p className="text-xl sm:text-2xl font-bold text-sky-deep">{q.ask}</p></div>
              )}

              {question.options && (
                <div className="space-y-4">
                  {Object.entries(question.options).map(([key, answer]) => {
                    const isCorrect = key === question.answer
                    const isSelected = selectedAnswer === key
                    const showState = selectedAnswer !== null

                    return (
                      <button
                        key={key}
                        onClick={() => handleAnswer(key)}
                        className={`w-full border-2 rounded-2xl p-5 text-left transition flex items-center gap-3 ${
                          showState
                            ? isCorrect
                              ? "bg-mint/15 border-mint text-mint-deep"
                              : isSelected
                                ? "bg-coral/15 border-coral text-coral-deep"
                                : "bg-cream border-blush-deep"
                            : "bg-cream border-blush-deep hover:border-sky hover:bg-sky/5"
                        }`}
                      >
                        <span className="font-bold shrink-0">{key}.</span>
                        <span className="flex-1">{answer}</span>
                        {showState && isCorrect && <span className="shrink-0">✓</span>}
                        {showState && isSelected && !isCorrect && <span className="shrink-0">✕</span>}
                      </button>
                    )
                  })}
                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  )
}
