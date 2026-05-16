import { useState } from "react"
import questions from "./data/questions"
export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [quizFinished, setQuizFinished] = useState(false)
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const question = questions[currentQuestion]
  const [screen, setScreen] = useState("home")
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
}
  if (screen === "home") {
  return (
    <div className="min-h-screen bg-pink-200 p-5">

      {/* Progress bars */}
      <div className="flex gap-4 mb-10">

        <button
          onClick={() => setScreen("subject")}
          className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-full
            font-bold
          "
        >
          KTMT
        </button>

        <button
          className="
            bg-white
            px-6
            py-3
            rounded-full
            font-bold
          "
        >
          OOP
        </button>

      </div>

    </div>
  )
}
if (screen === "subject") {
  return (
    <div className="min-h-screen bg-pink-200 p-5">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">

        <h1 className="text-4xl font-black text-yellow-500">
          ÔN TẬP THUI
        </h1>

        <div className="text-2xl font-bold text-blue-600">
          Mong cho mỗi ngày của Anri đều là mỗi ngày hạnh phúc
        </div>

      </div>

      {/* Progress bars */}
      <div className="flex gap-4 mb-10">

        <button
          className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-full
            font-bold
          "
        >
          KTMT
        </button>

        <button
          className="
            bg-white
            px-6
            py-3
            rounded-full
            font-bold
          "
        >
          OOP
        </button>

      </div>

      {/* KTMT card */}
      <div
        onClick={() => setSelectedQuiz("KTMT")}
        className="
          bg-white/50
          border
          rounded-[30px]
          p-8
          cursor-pointer
          hover:border-blue-500
        "
      >
        <h1 className="text-5xl font-black mb-4">
          KTMT Quizzes
        </h1>

        <p className="text-2xl text-gray-600">
          74 questions
        </p>
      </div>

    </div>
  )
}
  if (quizFinished) {
  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center">
      
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

    </div>
  )
}

if (selectedQuiz === "KTMT") {
return (
    
<div className="min-h-screen bg-pink-200 p-5">      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-4xl font-black text-yellow-500">
          ÔN TẬP THUI
        </h1>

        <div className="text-2xl font-bold text-blue-600">
          Mong cho mỗi ngày của Anri đều là mỗi ngày hạnh phúc
        </div>

      </div>

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

      {/* Quiz Categories */}
      <div className="grid md:grid-cols-3 gap-5 mb-10">
        
        {[
          "Fundamentals",
          "Inheritance",
          "Polymorphism",
          "Patterns",
          "Review"
        ].map((item, index) => (
          <div
            key={index}
            className={`
              bg-white/60
              border
              rounded-3xl
              p-6
              hover:border-blue-500
              hover:shadow-lg
              transition
              cursor-pointer
            `}
          >
            <h2 className="text-3xl font-bold mb-3">
              {item}
            </h2>

            <p className="text-gray-600">
              20 questions
            </p>
          </div>
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

      {/* Progress Bar */}
      <div className="w-full h-3 bg-gray-300 rounded-full mb-10 overflow-hidden">
        <div
        style={{
          width: `${((currentQuestion + 1) / questions.length) * 100}%`
        }}
        className="h-full bg-gradient-to-r from-blue-500 to-yellow-400"></div>
      </div>

      {/* Question Card */}
      <div className="bg-white/50 border rounded-[30px] p-8">
        
        <p className="uppercase tracking-[4px] text-blue-600 text-sm mb-5">
          KTMT QUIZZES
        </p>
        {question.context && (
        <div className="mb-6 bg-yellow-50 border border-yellow-300 p-5 rounded-2xl">
          <p className="leading-7">
            {question.context}
          </p>
        </div>
      )}

      {/* 1 ảnh */}
      {question.image && (
        <img
          src={question.image}
          alt="question"
          style={{ width: "100%", maxWidth: "600px" }}
        />
      )}

      {/* nhiều ảnh */}
      {question.images &&
        question.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`question-${index}`}
            style={{
              width: "100%",
              maxWidth: "600px",
              marginTop: "10px"
            }}
          />
      ))}
        <h1 className="text-4xl font-black mb-8">
          {question.question}        </h1>

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
  onClick={handleNextQuestion}
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

    </div>
  )
}
}