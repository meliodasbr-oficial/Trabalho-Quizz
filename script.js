function calculateScore() {
    const form = document.forms["quiz-form"];
    const answers = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value,
        q4: form.q4.value,
        q5: form.q5.value,
        q6: form.q6.value
    };

    let score = 0;
    let feedback = "";

    // Respostas corretas
    const correctAnswers = {
        q1: "b",
        q2: "c",
        q3: "b",
        q4: "c",
        q5: "c",
        q6: "c"
    };

    // Checa as respostas e adiciona feedback personalizado
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++;
            // Feedback exclusivo para respostas corretas
            switch (question) {
                case "q1":
                    feedback += "Parabéns! Você entendeu que estar preparado para desafios futuros é fundamental no ambiente de trabalho, assim como na fábula da Formiga.\n<hr>";
                    break;
                case "q2":
                    feedback += "Ótimo! Você reconheceu a importância de preparar os funcionários para resolver problemas futuros no treinamento.\n<hr>";
                    break;
                case "q3":
                    feedback += "Perfeito! Sem o treinamento adequado, os funcionários podem causar prejuízos por falta de conhecimento.\n<hr>";
                    break;
                case "q4":
                    feedback += "Muito bem! A inclusão da resolução de problemas no treinamento é essencial para evitar prejuízos e lidar com desafios.\n<hr>";
                    break;
                case "q5":
                    feedback += "Excelente! Assim como a formiga, os funcionários devem sempre estar se preparando e adquirindo novas habilidades.\n<hr>";
                    break;
                case "q6":
                    feedback += "Boa escolha! Buscar ativamente resolver problemas demonstra uma postura proativa e é uma excelente competência no ambiente de trabalho.\n<hr>";
                    break;
            }
        } else {
            // Aqui fornecemos feedback diretamente com base na resposta incorreta
            switch (answers[question]) {
                // Alternativas para a Pergunta 1
                case "a":
                    feedback += "Focar apenas em aproveitar o tempo livre pode te deixar despreparado para desafios futuros.\nA gestão eficiente exige planejar e antecipar problemas.\n<hr>";
                    break;
                case "c":
                    feedback += "Trabalhar sozinho pode ser uma desvantagem.\nDesenvolver habilidades de colaboração é essencial para alcançar sucesso em equipe.\n<hr>";
                    break;
                case "d":
                    feedback += "Competir com colegas pode ser prejudicial.\nFocar na cooperação e trabalho em equipe é mais produtivo e cria um ambiente saudável.\n<hr>";
                    break;

                // Alternativas para a Pergunta 2
                case "a":
                    feedback += "Treinamentos não precisam ser cansativos.\nO foco deve estar em eficácia e relevância, sem gastar mais tempo do que o necessário.\n<hr>";
                    break;
                case "b":
                    feedback += "Treinamento é crucial para enfrentar situações inesperadas.\nA ausência de preparação pode levar a prejuízos no futuro.\n<hr>";
                    break;
                case "d":
                    feedback += "Cumprir funções básicas é importante, mas o desenvolvimento contínuo é fundamental para crescimento e sucesso na carreira.\n<hr>";
                    break;

                // Alternativas para a Pergunta 3
                case "a":
                    feedback += "Nem sempre o funcionário encontrará soluções por conta própria.\nTreinamento e preparo são fundamentais para evitar prejuízos.\n<hr>";
                    break;
                case "c":
                    feedback += "Não subestime os desafios que a empresa pode enfrentar sem treinamento adequado.\nPreparar os funcionários é essencial para evitar erros.\n<hr>";
                    break;
                case "d":
                    feedback += "Independência é importante, mas sem o treinamento adequado, pode-se cometer erros que causam prejuízos.\n<hr>";
                    break;

                // Alternativas para a Pergunta 4
                case "a":
                    feedback += "A resolução de problemas no treinamento não é apenas para preencher tempo, mas para garantir que os funcionários possam enfrentar desafios reais.\n<hr>";
                    break;
                case "b":
                    feedback += "Pedir ajuda faz parte do trabalho em equipe.\nO importante é saber quando buscar apoio e resolver problemas em conjunto.\n<hr>";
                    break;
                case "d":
                    feedback += "Nem todos os funcionários terão o mesmo nível de conhecimento.\nO treinamento deve ser personalizado para atender às necessidades individuais.\n<hr>";
                    break;

                // Alternativas para a Pergunta 5
                case "a":
                    feedback += "Aproveitar momentos tranquilos é bom, mas é importante estar sempre se preparando para dificuldades futuras, como a formiga fez.\n<hr>";
                    break;
                case "b":
                    feedback += "Não se preparar pode resultar em problemas mais tarde.\nO desenvolvimento contínuo garante que você esteja pronto para novos desafios.\n<hr>";
                    break;
                case "d":
                    feedback += "Contar com colegas é importante, mas depender sempre deles pode impedir seu crescimento.\nProcure desenvolver habilidades de forma autônoma.\n<hr>";
                    break;

                // Alternativas para a Pergunta 6
                case "a":
                    feedback += "Evitar problemas não é uma solução eficaz.\nDesenvolver habilidades de resolução de problemas vai te ajudar a crescer e enfrentar desafios no trabalho.\n<hr>";
                    break;
                case "b":
                    feedback += "Resolver problemas apenas quando for necessário pode ser um ponto fraco.\nAssumir a responsabilidade e enfrentar desafios proativamente fará a diferença.\n<hr>";
                    break;
                case "d":
                    feedback += "Liderar na resolução de problemas é positivo, mas encorajar outros a participarem do processo também é fundamental para uma equipe eficaz.\n<hr>";
                    break;
            }
        }
    }

    // Exibe o resultado final
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `<p>${feedback}</p>`;
}
