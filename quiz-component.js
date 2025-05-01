// Quiz component using React
const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [showScore, setShowScore] = React.useState(false);
    const [selectedAnswer, setSelectedAnswer] = React.useState(null);
    const [isCorrect, setIsCorrect] = React.useState(null);

    const questions = [
        {
            question: "Ai là người đánh bại quân Nam Hán trên sông Bạch Đằng năm 938?",
            options: ["Lê Lợi", "Ngô Quyền", "Trần Hưng Đạo", "Lý Thường Kiệt"],
            correctAnswer: 1
        },
        {
            question: "Triều đại nào đã ba lần đánh thắng quân Nguyên Mông?",
            options: ["Nhà Lý", "Nhà Trần", "Nhà Lê", "Nhà Nguyễn"],
            correctAnswer: 1
        },
        {
            question: "Vua nào đã cho xây dựng Văn Miếu - Quốc Tử Giám năm 1070?",
            options: ["Lý Thái Tổ", "Lý Thánh Tông", "Lý Nhân Tông", "Lý Anh Tông"],
            correctAnswer: 2
        },
        {
            question: "Chiến thắng Điện Biên Phủ diễn ra vào năm nào?",
            options: ["1945", "1954", "1968", "1975"],
            correctAnswer: 1
        },
        {
            question: "Ai là vị vua cuối cùng của triều đại phong kiến Việt Nam?",
            options: ["Bảo Đại", "Khải Định", "Hàm Nghi", "Duy Tân"],
            correctAnswer: 0
        }
    ];

    const handleAnswerClick = (selectedIndex) => {
        setSelectedAnswer(selectedIndex);
        
        if (selectedIndex === questions[currentQuestion].correctAnswer) {
            setIsCorrect(true);
            setScore(score + 1);
        } else {
            setIsCorrect(false);
        }
        
        // Delay before moving to next question
        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedAnswer(null);
                setIsCorrect(null);
            } else {
                setShowScore(true);
            }
        }, 1500);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswer(null);
        setIsCorrect(null);
    };

    return (
        <div className="quiz-component">
            {showScore ? (
                <div className="score-section">
                    <h3>Kết quả</h3>
                    <p>Bạn đã trả lời đúng {score} / {questions.length} câu hỏi</p>
                    <button 
                        onClick={resetQuiz}
                        style={{
                            padding: '0.8rem 1.5rem',
                            backgroundColor: '#c8102e',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: '500',
                            marginTop: '1rem'
                        }}
                    >
                        Làm lại bài kiểm tra
                    </button>
                </div>
            ) : (
                <div className="question-section">
                    <div className="question-count">
                        <span>Câu hỏi {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className="question-text">
                        <h3>{questions[currentQuestion].question}</h3>
                    </div>
                    <div className="answer-options">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => selectedAnswer === null && handleAnswerClick(index)}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    padding: '1rem',
                                    marginBottom: '0.5rem',
                                    textAlign: 'left',
                                    backgroundColor: selectedAnswer === index 
                                        ? (isCorrect === true ? '#4caf50' : '#f44336') 
                                        : '#fff',
                                    color: selectedAnswer === index ? '#fff' : '#333',
                                    border: '1px solid #ddd',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {isCorrect !== null && (
                        <div 
                            className="feedback"
                            style={{
                                marginTop: '1rem',
                                padding: '1rem',
                                backgroundColor: isCorrect ? '#e8f5e9' : '#ffebee',
                                color: isCorrect ? '#2e7d32' : '#c62828',
                                borderRadius: '4px',
                                textAlign: 'center'
                            }}
                        >
                            {isCorrect 
                                ? 'Chính xác! Câu trả lời của bạn đúng.' 
                                : `Không chính xác. Đáp án đúng là: ${questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}`
                            }
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

// Render the Quiz component
ReactDOM.render(<Quiz />, document.getElementById('quiz-container'));