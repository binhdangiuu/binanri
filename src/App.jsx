import { useState } from "react"
import questions from "./data/questions"

export default function App() {

  const [screen, setScreen] = useState("home")

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [quizFinished, setQuizFinished] = useState(false)

  const question = questions[currentQuestion]

  const handleAnswer = (index) => {

    if (selectedAnswer !== null) return

    setSelectedAnswer(index)

    if (index === question.answer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {

    setSelectedAnswer(null)

    if (currentQuestion < questions.length - 1) {
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
      <div className="flex gap-4 mb-10">

        <button
          onClick={() => setScreen("subject")}
          className="
            bg-blue-600
            text-white
            px-8
            py-4
            rounded-full
            font-bold
            text-xl
          "
        >
          KTMT
        </button>

        <button
          className="
            bg-white
            px-8
            py-4
            rounded-full
            font-bold
            text-xl
          "
        >
          OOP
        </button>

      </div>

      {/* HOME SCREEN */}
      {screen === "home" && (

        <div className="text-3xl font-bold text-gray-700">
          Chọn một progress bar để bắt đầu
        </div>

      )}

      {/* SUBJECT SCREEN */}
      {screen === "subject" && (

        <div
          onClick={() => setScreen("quiz")}
          className="
            bg-white/50
            border
            rounded-[30px]
            p-10
            cursor-pointer
            hover:border-blue-500
            transition
          "
        >

          <h1 className="text-6xl font-black mb-5">
            KTMT Quizzes
          </h1>

          <p className="text-3xl text-gray-600">
            74 questions
          </p>

        </div>

      )}

      {/* QUIZ FINISHED */}
      {screen === "result" && (

        <div className="bg-white p-10 rounded-[30px] shadow-xl text-center">

          <h1 className="text-5xl font-black mb-6">
            Quiz Finished 🎉
          </h1>

          <p className="text-3xl mb-8">
            Your Score: {score} / {questions.length}
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
              KTMT Quizzes · Question {currentQuestion + 1} of {questions.length}
            </p>

            <div className="bg-white px-4 py-2 rounded-full border">
              Score: {score} / {questions.length}
            </div>

          </div>

          {/* Progress */}
          <div className="w-full h-3 bg-gray-300 rounded-full mb-10 overflow-hidden">

            <div
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`
              }}
              className="h-full bg-gradient-to-r from-blue-500 to-yellow-400"
            ></div>

          </div>

          {/* Question Card */}
          <div className="bg-white/50 border rounded-[30px] p-8">

            <p className="uppercase tracking-[4px] text-blue-600 text-sm mb-5">
              KTMT QUIZZES
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

                if (currentQuestion < questions.length - 1) {
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