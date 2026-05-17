import { useState } from "react"
import questions from "./data/questions"

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
    id: "OOP",

    quizzes: [

      {
        id: "oop-main",
        title: "OOP Quizzes",
        questionsCount: 50,
        comingSoon: true
      }

    ]
  },

  {
    id: "CTDLGT",

    quizzes: [

      {
        id: "ctdlgt-main",
        title: "CTDLGT Quizzes",
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
  const [score, setScore] = useState(0)
  const [quizFinished, setQuizFinished] = useState(false)
  const [activeSubject, setActiveSubject] = useState(null)
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const question = selectedQuiz?.questions[currentQuestion]

  const handleAnswer = (index) => {

    if (selectedAnswer !== null) return

    setSelectedAnswer(index)

    if (index === question.answer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {

    setSelectedAnswer(null)

    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizFinished(true)
    }
  }

  const restartQuiz = () => {

    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setQuizFinished(false)
    setScreen("quiz")
  }

  return (

    <div className="min-h-screen bg-pink-200 p-5">

      {/* HEADER */}
      <div className="flex items-center gap-10 mb-10">

        <h1 className="text-5xl font-black text-yellow-500 leading-none">
          ÔN TẬP
          <br />
          THUI
        </h1>

        <div className="text-3xl font-bold text-blue-600">
          Mong cho mỗi ngày của Anri đều là mỗi ngày hạnh phúc
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

              ${
                activeSubject === subject.id
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }
            `}
          >

            {subject.id}

          </button>

        ))}

      </div>

      {/* SUBJECT SCREEN */}
      {screen === "subject" && activeSubject && (

        <div className="grid md:grid-cols-2 gap-6">

          {
            subjects
              .find(subject => subject.id === activeSubject)
              ?.quizzes.map((quiz) => (

                <div
                  key={quiz.id}
                  onClick={() => {

                    if (!quiz.comingSoon) {
                    setSelectedQuiz(quiz)
                    setCurrentQuestion(0)
                    setSelectedAnswer(null)
                    setScore(0)
                    setQuizFinished(false)
                    setScreen("quiz")
                  }

                  }}
                  className="
                    bg-white/50
                    border
                    rounded-[30px]
                    p-10
                    transition
                    hover:border-blue-500
                  "
                >

                  <h1 className="text-5xl font-black mb-5">
                    {quiz.title}
                  </h1>

                  <p className="text-2xl text-gray-600">

                    {
                      quiz.comingSoon
                        ? "Coming Soon"
                        : `${quiz.questionsCount} questions`
                    }

                  </p>

                </div>

            ))
          }

        </div>

      )}
      {/* QUIZ FINISHED */}
      {screen === "result" && (

        <div className="bg-white p-10 rounded-[30px] shadow-xl text-center">

          <h1 className="text-5xl font-black mb-6">
            Quiz Finished 🎉
          </h1>

          <p className="text-3xl mb-8">
            Your Score: {score} / {selectedQuiz.questions.length}
          </p>

          <button
            onClick={restartQuiz}
            className="
              bg-blue-600
              text-white
              px-8
              py-4
              rounded-2xl
              hover:bg-blue-700
              transition
            "
          >
            Restart Quiz
          </button>

        </div>

      )}

      {/* QUIZ SCREEN */}
      {screen === "quiz" && (

        <>
          <button
            onClick={() => setScreen("subject")}
            className="
              mb-6
              bg-white
              px-5
              py-3
              rounded-2xl
              border
              hover:border-blue-500
              transition
            "
          >
            ← Back
          </button>
          {/* Tabs */}
          <div className="bg-[#efe5d4] rounded-full p-2 flex gap-3 mb-8 overflow-x-auto">
            {[
              "Overview",
              "Fundamentals",
              "Inheritance",
              "Polymorphism",
              "Patterns",
              "Review",
              "MCQ Quiz"
            ].map((tab, index) => (

              <button
                key={index}
                className={`
                  px-4 py-2 rounded-full whitespace-nowrap transition
                  ${tab === "MCQ Quiz"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-white"}
                `}
              >
                {tab}
              </button>

            ))}

          </div>

          {/* Quiz Info */}
          <div className="flex justify-between items-center mb-4">

            <p className="text-lg">
             {selectedQuiz.title} · Question {currentQuestion + 1} of {selectedQuiz.questions.length}
            </p>

            <div className="bg-white px-4 py-2 rounded-full border">
              Score: {score} / {selectedQuiz.questions.length}
            </div>

          </div>

          {/* Progress */}
          <div className="w-full h-3 bg-gray-300 rounded-full mb-10 overflow-hidden">

            <div
              style={{
                width: `${((currentQuestion + 1) / selectedQuiz.questions.length) * 100}%`
              }}
              className="h-full bg-gradient-to-r from-blue-500 to-yellow-400"
            ></div>

          </div>

          {/* Question Card */}
          <div className="bg-white/50 border rounded-[30px] p-8">

            <p className="uppercase tracking-[4px] text-blue-600 text-sm mb-5">
              {selectedQuiz.title}
            </p>

            <h1 className="text-4xl font-black mb-8">
              {question.question}
            </h1>

            <div className="space-y-4">

              {question.options.map((answer, index) => (

                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`
                    w-full
                    border
                    rounded-2xl
                    p-5
                    text-left
                    transition

                    ${
                      selectedAnswer !== null
                        ? index === question.answer
                          ? "bg-green-200 border-green-600"
                          : selectedAnswer === index
                          ? "bg-red-200 border-red-600"
                          : "bg-white"
                        : "bg-white hover:border-blue-500 hover:bg-blue-50"
                    }
                  `}
                >

                  {answer}

                </button>

              ))}

            </div>

            <button
              onClick={() => {

                if (currentQuestion < selectedQuiz.questions.length - 1) {
                  handleNextQuestion()
                } else {
                  setScreen("result")
                }

              }}
              className="
                mt-6
                bg-blue-600
                text-white
                px-6
                py-3
                rounded-2xl
                hover:bg-blue-700
                transition
              "
            >
              Next Question
            </button>

          </div>

        </>

      )}

    </div>

  )
}