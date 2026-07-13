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
        id: "lab-1",
        title: "Lab 1 - Thầy Nguyễn Phương Duy",
        questionsCount: 5,
        comingSoon: true,
        questions: lab1
      },

      {
        id: "lab-2",
        title: "Lab 2 - Thầy Nguyễn Phương Duy",
        questionsCount: 5,
        comingSoon: true,
        questions: lab2
      },

      {
        id: "lab-3",
        title: "Lab 3 - Thầy Nguyễn Phương Duy",
        questionsCount: 5,
        comingSoon: true,
        questions: lab3
      },

      {
        id: "lab-4",
        title: "Lab 4 - Thầy Nguyễn Phương Duy",
        questionsCount: 5,
        comingSoon: true,
        questions: lab4
      },

      {
        id: "btl252",
        title: "Bài tập lớn HK252",
        questionsCount: 4,
        comingSoon: true,
        questions: btl252
      },

      {
        id: "tomtat",
        title: "Tóm tăt kiến thức OS",
        questionsCount: 11,
        comingSoon: true,
        questions: tomtat
      },

      {
        id: "cheatsheet",
        title: "Cheatsheet",
        questionsCount: 1,
        comingSoon: true,
        questions: cheatsheet
      },

      {
        id: "introduction",
        title: "Introduction to Operating Systems (ôn thi Chapter 1 - Chapter 2)",
        questionsCount: 52,
        comingSoon: true,
        questions: introduction
      },

      {
        id: "cpu",
        title: "CPU (ôn thi Chapter 3 - Chapter 7)",
        questionsCount: 158,
        comingSoon: true,
        questions: cpu
      },

      {
        id: "storage",
        title: "Storage (ôn thi Chapter 8 - Chapter 10B)",
        questionsCount: 158,
        comingSoon: true,
        questions: storage
      },

      {
        id: "dethihk252",
        title: "Đề thi HK252 - Những câu chưa có trong đề thi trước",
        questionsCount: 15,
        comingSoon: true,
        questions: dethihk252
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

  return (
    <div className="min-h-screen bg-pink-200 p-5">

      {/* LAST UPDATED */}
      <div className="text-center mb-4">
        <p className="text-gray-700 text-lg">
          Last Updated: 30/05/2026 • 18:42:31 (DSA HK251 added)
        </p>
      </div>

      {/* HEADER */}
      <div className="flex items-center gap-10 mb-10">
        <h1 className="text-5xl font-black text-yellow-500 leading-none">
          ÔN TẬP
          <br />
          THUI
        </h1>
        <div className="text-3xl font-bold text-blue-600">
          Mong cho mỗi ngày của Anri đều là mỗi ngày hạnh phúc.
        </div>
      </div>

      {/* PROGRESS BARS */}
      <div className="flex gap-4 mb-10 flex-wrap">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => {
              setScreen("subject")
              setActiveSubject(subject.id)
            }}
            className={`
              px-8
              py-4
              rounded-full
              font-bold
              text-xl
              transition
              ${activeSubject === subject.id ? "bg-blue-600 text-white" : "bg-white"}
            `}
          >
            {subject.id}
          </button>
        ))}
      </div>

      {/* SUBJECT SCREEN */}
      {screen === "subject" && activeSubject && (
        <div className="grid md:grid-cols-2 gap-6">
          {subjects.find(subject => subject.id === activeSubject)?.quizzes.map((quiz) => (
            <div
              key={quiz.id}
              onClick={() => {
                if (!quiz.comingSoon) {
                  setSelectedQuiz(quiz)
                  setCurrentQuestion(0)
                  setSelectedAnswer(null)
                  setAnswers([])
                  setScore(0)
                  setScreen("quiz")
                }
              }}
              className="bg-white/50 border rounded-[30px] p-10 transition hover:border-blue-500"
            >
              <h1 className="text-5xl font-black mb-5">{quiz.title}</h1>
              <p className="text-2xl text-gray-600">
                {quiz.comingSoon ? "Coming Soon" : `${quiz.questionsCount} questions`}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* QUIZ FINISHED */}
      {screen === "result" && selectedQuiz && (
        <div className="bg-white p-10 rounded-[30px] shadow-xl text-center">
          <h1 className="text-5xl font-black mb-6">Quiz Finished 🎉</h1>
          <p className="text-3xl mb-8">Your Score: {score} / {selectedQuiz.questions.length}</p>
          <button onClick={restartQuiz} className="bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-blue-700 transition">Restart Quiz</button>
        </div>
      )}

      {/* QUIZ SCREEN */}
      {screen === "quiz" && selectedQuiz && question && (
        <>
          <button onClick={() => { setScreen("subject"); setSelectedQuiz(null) }} className="mb-6 bg-white px-5 py-3 rounded-2xl border hover:border-blue-500 transition">← Back</button>

          {/* Tabs */}
          <div className="bg-[#efe5d4] rounded-full p-2 flex gap-3 mb-8 overflow-x-auto">
            {["Overview","Fundamentals","Inheritance","Polymorphism","Patterns","Review","MCQ Quiz"].map((tab, index) => (
              <button key={index} className={`px-4 py-2 rounded-full whitespace-nowrap transition ${tab === "MCQ Quiz" ? "bg-blue-600 text-white" : "hover:bg-white"}`}>{tab}</button>
            ))}
          </div>

          {/* Quiz Info */}
          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            <div>
              <p className="text-lg font-semibold">{selectedQuiz.title}</p>
              <p className="text-gray-600">Question {currentQuestion + 1} of {selectedQuiz.questions.length}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0} className="bg-gray-300 px-5 py-2 rounded-2xl transition disabled:opacity-50">← Previous</button>
              <button onClick={handleNextQuestion} className="bg-blue-600 text-white px-5 py-2 rounded-2xl hover:bg-blue-700 transition">Next →</button>
            </div>
          </div>

          {/* Progress */}
          <div className="w-full h-3 bg-gray-300 rounded-full mb-10 overflow-hidden">
            <div style={{ width: `${((currentQuestion + 1) / selectedQuiz.questions.length) * 100}%` }} className="h-full bg-gradient-to-r from-blue-500 to-yellow-400"></div>
          </div>

          {/* Question Card */}
          <div className="bg-white/50 border rounded-[30px] p-8">
            <p className="uppercase tracking-[4px] text-blue-600 text-sm mb-5">{selectedQuiz.title}</p>

            {contextText && (
              <div className="mb-6 bg-yellow-100 border border-yellow-300 p-5 rounded-2xl">
                <pre className="text-lg leading-relaxed whitespace-pre-wrap overflow-x-auto"><code>{contextText}</code></pre>
              </div>
            )}

            {q?.code && (
              <pre className="bg-gray-900 text-green-400 p-5 rounded-2xl overflow-x-auto mb-6 text-sm"><code>{q.code}</code></pre>
            )}

            {q?.image && (
              <img src={q.image} alt="question" className="mb-6 rounded-2xl border w-full" />
            )}

            {q?.images && (
              <div className="space-y-4 mb-6">{q.images.map((img, index) => (<img key={index} src={img} alt={`question-${index}`} className="rounded-2xl border w-full" />))}</div>
            )}

            {q?.main && (
              <h1 className="text-4xl font-black mb-6 leading-relaxed">
                {q?.link ? (
                  <a href={q.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">{q.main}</a>
                ) : (
                  q.main
                )}
              </h1>
            )}

            {q?.tree && (
              <div className="mb-6 bg-purple-100 border border-purple-300 p-5 rounded-2xl">
                <p className="font-bold text-purple-700 mb-2">Tree</p>
                <code className="text-lg">{q.tree}</code>
              </div>
            )}

            {q?.matrix && (
              <div className="mb-6 overflow-x-auto bg-blue-50 border border-blue-200 p-5 rounded-2xl">
                <p className="font-bold text-blue-700 mb-3">Adjacency Matrix</p>
                <table className="min-w-full border-collapse">
                  <tbody>
                    {q.matrix.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, colIndex) => (
                          <td key={colIndex} className="border px-3 py-2 text-center">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {q?.adjacencyMatrix && (
              <div className="mb-6 overflow-x-auto bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                <p className="font-bold text-slate-700 mb-3">Adjacency Matrix</p>
                <table className="min-w-full border-collapse">
                  <tbody>
                    {q.adjacencyMatrix.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, colIndex) => (
                          <td key={colIndex} className="border px-3 py-2 text-center">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {q?.adjacencyList && (
              <div className="mb-6 bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                <p className="font-bold text-slate-700 mb-3">Adjacency List</p>
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
              <div className="mb-6 bg-teal-50 border border-teal-300 p-5 rounded-2xl">
                <p className="font-bold text-teal-700 mb-4">Graph Data</p>
                <div className="space-y-4">
                  {q.graphData.vertices && (
                    <div>
                      <p className="font-semibold text-teal-700 mb-2">Vertices:</p>
                      <div className="flex flex-wrap gap-2">
                        {q.graphData.vertices.map((vertex, index) => (
                          <span key={index} className="bg-teal-200 px-3 py-1 rounded-lg text-sm">{vertex}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {q.graphData.edges && (
                    <div>
                      <p className="font-semibold text-teal-700 mb-2">Edges:</p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse text-sm">
                          <thead>
                            <tr className="bg-teal-100">
                              <th className="border px-3 py-2">From</th>
                              <th className="border px-3 py-2">To</th>
                              {q.graphData.edges[0]?.weight !== undefined && <th className="border px-3 py-2">Weight</th>}
                            </tr>
                          </thead>
                          <tbody>
                            {q.graphData.edges.map((edge, index) => (
                              <tr key={index} className="hover:bg-teal-50">
                                <td className="border px-3 py-2 text-center">{edge.from}</td>
                                <td className="border px-3 py-2 text-center">{edge.to}</td>
                                {edge.weight !== undefined && <td className="border px-3 py-2 text-center">{edge.weight}</td>}
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
              <div className="mb-6 bg-blue-100 border border-blue-300 p-5 rounded-2xl">
                <p className="font-bold text-blue-700 mb-2">Sequence</p>
                <p className="text-lg">{q.sequence.join(", ")}</p>
              </div>
            )}

            {q?.insertions && (
              <div className="mb-6 bg-green-100 border border-green-300 p-5 rounded-2xl">
                <p className="font-bold text-green-700 mb-2">Insertions</p>
                <p className="text-lg">{q.insertions.join(", ")}</p>
              </div>
            )}

            {q?.deletions && (
              <div className="mb-6 bg-red-100 border border-red-300 p-5 rounded-2xl">
                <p className="font-bold text-red-700 mb-2">Deletions</p>
                <p className="text-lg">{q.deletions.join(", ")}</p>
              </div>
            )}

            {q?.operations && (
              <div className="mb-6 bg-orange-100 border border-orange-300 p-5 rounded-2xl">
                <p className="font-bold text-orange-700 mb-3">Operations</p>
                <ul className="list-disc pl-6 space-y-2">{q.operations.map((op, index) => (<li key={index} className="text-lg">{op}</li>))}</ul>
              </div>
            )}

            {q?.statements && (
              <div className="mb-6 bg-gray-100 border border-gray-300 p-5 rounded-2xl">
                <p className="font-bold text-gray-700 mb-3">Statements</p>
                <ul className="space-y-3">{q.statements.map((statement, index) => (<li key={index} className="text-lg leading-relaxed">{statement}</li>))}</ul>
              </div>
            )}

            {q?.rule && (
              <div className="mb-6 bg-pink-100 border border-pink-300 p-5 rounded-2xl">
                <p className="font-bold text-pink-700 mb-2">Rule</p>
                <p className="text-lg">{q.rule}</p>
              </div>
            )}

            {q?.ask && (
              <div className="mb-8"><p className="text-2xl font-bold text-blue-700">{q.ask}</p></div>
            )}

            {question.options && (
              <div className="space-y-4">
                {Object.entries(question.options).map(([key, answer]) => (
                  <button key={key} onClick={() => handleAnswer(key)} className={`w-full border rounded-2xl p-5 text-left transition ${selectedAnswer !== null ? (key === question.answer ? "bg-green-200 border-green-600" : selectedAnswer === key ? "bg-red-200 border-red-600" : "bg-white") : "bg-white hover:border-blue-500 hover:bg-blue-50"}`}>
                    <span className="font-bold mr-3">{key}.</span>
                    {answer}
                  </button>
                ))}
              </div>
            )}

          </div>

        </>
      )}

    </div>
  )
}
