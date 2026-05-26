import { useState, useEffect } from "react"
import questions from "./data/questions"
import ktct1 from "./data/ktct1"
import ktct2 from "./data/ktct2"
import ktct3 from "./data/ktct3"
import ktct_quizzlet from "./data/quizzlet"
import tree from "./data/tree"
import heap from "./data/heap"

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
        id: "ktmt-final",
        title: "KTMT Final Review",
        questionsCount: 50,
        comingSoon: true
      },

      {
        id: "ktmt-chapter-1",
        title: "KTMT Chapter 1",
        questionsCount: 20,
        comingSoon: true
      }

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
        title: "DSA Tree",
        questionsCount: tree.length,
        comingSoon: false,
        questions: tree
      },

      {
        id: "dsa-heap",
        title: "DSA Heap",
        questionsCount: heap.length,
        comingSoon: false,
        questions: heap
      },

      {
        id: "dsa-harm2",
        title: "DSA Harmony 2",
        questionsCount: 40,
        comingSoon: true
      },

      {
        id: "dsa-harm3",
        title: "DSA Harmony 3",
        questionsCount: 40,
        comingSoon: true
      }

    ]
  }

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
      setAnswers(parsedData.answers || [])
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

  const question = selectedQuiz?.questions?.[currentQuestion]
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
        selectedQuiz.questions[questionIndex] &&
        answer === selectedQuiz.questions[questionIndex].answer
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
          Last Updated: 26/05/2026 • 20:11:30 (DSA Heap added, KTMT Các câu hỏi mạch is in progress)
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
          Hạnh phúc rồi sẽ đến, cho cậu, cho tôi, cho chúng ta.
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
