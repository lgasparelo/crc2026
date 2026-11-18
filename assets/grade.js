/* ====== GRADE: edite aqui ======
   Fonte: Cronograma_CRC_2026_OFICIAL.xlsx, aba "CRC 2026 - OFICIAL".
   r: A = Auditório Principal, MP1 = Mini-Plenário 1, MP2 = Mini-Plenário 2, ALL = todas
   k: "sp" patrocinada, "cer" cerimônia, "brk" intervalo. talks: [horário, título, palestrante]
   Este arquivo é usado pela página inicial (faixa Agora / A seguir) e pela grade (/grade). */
var ROOMS={A:"Auditório Principal",MP1:"Mini-Plenário 1",MP2:"Mini-Plenário 2",ALL:"Todas as salas"};
var DAYS=[
{id:"sex",label:"Sexta",date:"2026-11-27",short:"27/11",ses:[
 {r:"A",k:"cer",s:"19:00",e:"20:00",t:"Cerimônia de abertura",note:"Hino e discursos"},
 {r:"A",k:"cer",s:"20:00",e:"21:00",t:"Palestra Magna",note:"Dr. Danilo Ferraz de Oliveira Maksud (SP)"},
 {r:"A",k:"cer",s:"21:00",e:"22:30",t:"Coquetel de confraternização"}
]},
{id:"sab",label:"Sábado",date:"2026-11-28",short:"28/11",ses:[
 {r:"ALL",k:"brk",s:"07:00",e:"08:00",t:"Credenciamento"},
 {r:"MP2",s:"07:30",e:"09:30",t:"Simpósio Multidisciplinar · Módulo 1",talks:[
  ["07:30","Anatomofisiologia do coração: a importância de conhecê-lo","Jandra Cibele Rodrigues de Abrantes Pereira Leite, enfermeira (RO)"],
  ["07:45","ECG","Jandra Cibele Rodrigues de Abrantes Pereira Leite, enfermeira (RO)"],
  ["08:00","Segurança do paciente crítico na UTI: práticas essenciais e atitudes que salvam vidas","Rosa Maria Ferreira de Almeida, enfermeira (RO)"],
  ["08:30","Cirurgia cardiovascular e circulação extracorpórea (CEC)","Marco Aurélio Pereira da Silva, perfusionista (RO)"],
  ["08:50","Entre a vida e o medo: sofrimento psíquico no paciente cardiológico em situação crítica","Bruna Cerqueira Paes, psicóloga (RO)"],
  ["09:10","Broncoaspiração no paciente cardiopata crítico: prevenção, segurança e estratégias preventivas","Scherley Keavynny Tavares Silva Moreno, fonoaudióloga (RO)"]]},
 {r:"MP1",s:"08:00",e:"08:40",t:"Dor no peito às 3h da manhã: quem eu libero, quem eu interno?",talks:[
  ["08:00","Troponina de alta sensibilidade e escore HEART: o protocolo que evita o erro","Dr. Luiz Carlos Benittez Junior (RO)"],
  ["08:10","O paciente que parece bem mas não está: os sinais de alarme que não dá pra perder","Dra. Leisle de Freitas Diniz (RO)"]],
  mod:"Dr. Carlos Henrique Spesia (RO)",deb:"Dr. Adalberto Machado Coelho (RO), Dr. Marcio Messias (AC), Dra. Stefany Egito (RO)"},
 {r:"A",s:"08:40",e:"09:30",t:"Fibrilação atrial hoje: controle sintomático, prevenção embólica e oclusão percutânea do apêndice",talks:[
  ["08:40","Controle de ritmo vs. controle de frequência na FA: o que as evidências atuais dizem sobre remodelamento e sobrevida?","Dr. Carlos Eduardo Duarte (SP)"],
  ["08:50","O cardiologista clínico diante da fibrilação atrial: quem, quando e como anticoagular em cenários complexos","Dr. Pablo Brasil (RO)"],
  ["09:00","Fechamento percutâneo do apêndice atrial esquerdo: quem é o candidato ideal?","Dr. Danilo Ferraz de Oliveira Maksud (SP)"]],
  mod:"Dr. Marcos Rosa Ferreira (RO)",deb:"Dr. Cristóvão de Oliveira dos Silva (RO), Dr. Thiago Coimbra Felipe (RO)"},
 {r:"MP1",s:"08:50",e:"09:30",t:"Miocardiopatias: do diagnóstico ao tratamento intervencionista",talks:[
  ["08:50","Não é apenas hipertrofia: quando pensar em miocardiopatias","Dr. Rodolfo Luiz Amorim de Oliveira (RO)"],
  ["09:00","Novas evidências no tratamento medicamentoso das miocardiopatias","Dra. Stefany Egito (RO)"],
  ["09:10","Miocardiopatia hipertrófica obstrutiva: opções de tratamento intervencionista","Dr. Sidney Munhoz Junior (MT)"]],
  mod:"Dr. Rodrigo Gallina (RO)",deb:"Dra. Marilene Rodrigues Carvalho (RO), Dr. Carlos Borelli Zeller (RO), Dr. Carlos Eduardo Faria Silva (RO)"},
 {r:"ALL",k:"brk",s:"09:30",e:"10:00",t:"Visita aos estandes, apresentação dos trabalhos em pôster e coffee break"},
 {r:"A",s:"10:00",e:"10:40",t:"Insuficiência cardíaca crônica: do quarteto à próxima fronteira",talks:[
  ["10:00","Os quatro pilares em quatro semanas: como titular de verdade no mundo real","Dra. Diana Negreiros (SP)"],
  ["10:10","Além do quarteto: as terapias emergentes que já mudam a sobrevida na IC","Dr. Marcus Vinicius Nunes Batista (RO)"],
  ["10:20","Ressincronização cardíaca no consultório: como avaliar a resposta e o que fazer com os não respondedores?","Dr. Carlos Eduardo Duarte (SP)"]],
  mod:"Dr. Carlos Henrique Spesia (RO)",deb:"Dr. Valmir Favaro Martins (RO), Dr. Lucas da Silva Graça (RO), Dra. Alessandra Arêdes Moraes de Mendonça (RO)"},
 {r:"MP1",s:"10:00",e:"10:40",t:"Heart Team · DAC crônica: da estratificação à decisão de revascularização",talks:[
  ["10:00","Caso clínico","Dra. Teynan Nunes (RO)"],
  ["10:10","Tratamento clínico otimizado: os limites da terapia medicamentosa","Dr. André Zimerman (RS)"],
  ["10:20","Revascularizar ou não: quando a intervenção muda o desfecho","Dr. Danilo Ferraz de Oliveira Maksud (SP)"]],
  mod:"Dr. Cristóvão de Oliveira dos Silva (RO)",deb:"Dra. Gislaine Michel Marin Mugrabi (RO), Dr. Paulo Cesar da Cruz Capellani (RO), Dra. Erêndira Linhares Batista Barbosa (RO)"},
 {r:"MP2",s:"10:00",e:"12:30",t:"Simpósio Multidisciplinar · Módulo 2",talks:[
  ["10:00","Reabilitação cardiopulmonar no paciente crítico","Matheus Fontele Fernandes, fisioterapeuta (RO)"],
  ["10:20","Atuação da enfermagem no atendimento pré-hospitalar às emergências cardiovasculares","Mara da Silva Pereira Bastos, enfermeira (RO)"],
  ["11:00","Monitorização avançada e avanços tecnológicos: assistência ao paciente crítico","Kalliza Kary Rodrigues da Costa, enfermeira (RJ)"],
  ["11:30","Segurança medicamentosa e vigilância no paciente cardiopata","Jaqueline Santana Santos, farmacêutica (RO)"],
  ["12:00","Impacto da intervenção nutricional na evolução clínica e no estado nutricional de pacientes cardiopatas","Andrezza Maria de Oliveira, nutróloga (RO)"]]},
 {r:"A",s:"10:50",e:"11:30",t:"Eixo cardio-renal-metabólico: o paciente que não cabe em uma especialidade",talks:[
  ["10:50","Obesidade e GLP-1 na doença cardiovascular: de quem é esse paciente?","Dr. André Zimerman (RS)"],
  ["11:00","Diabetes e doença renal crônica: iSGLT2, finerenona e a ordem de entrada das drogas","Dr. Francisco Antonio Helfenstein Fonseca (SP)"],
  ["11:10","Dislipidemia de muito alto risco: até onde baixar o LDL e com o quê","Dr. Carlos Henrique Spesia (RO)"]],
  mod:"Dra. Stefany Egito (RO)",deb:"Dra. Fabiane Fernandes Schmitt Flores (RO)"},
 {r:"MP1",s:"10:50",e:"11:30",t:"Heart Team · Dispositivos cardíacos implantáveis: quando vale a pena tratar",talks:[
  ["10:50","A carga arrítmica importa, mas e o resto? Como tomar conduta além da porcentagem do Holter?","Dra. Sarah Schereder (RS)"],
  ["11:00","Indicações de TRC e CDI além do óbvio","Dr. Marcos Rosa Ferreira (RO)"],
  ["11:10","Marcapasso sem eletrodos na prática clínica: quais pacientes realmente se beneficiam desta tecnologia?","Dr. Carlos Eduardo Duarte (SP)"]],
  mod:"Dr. Pablo Brasil (RO)",deb:"Dr. Marcelo Tabosa (RO), Dr. Carlos Borelli Zeller (RO)"},
 {r:"A",k:"sp",sp:"LIBBS",also:["MP1"],s:"11:40",e:"12:20",t:"O paciente cardiovascular de alto risco: da prevenção à redução de eventos. Estratégias atuais para lipídios, hipertensão e doença aterotrombótica",note:"Dr. Francisco Antonio Helfenstein Fonseca (SP)"},
 {r:"ALL",k:"brk",s:"12:30",e:"13:30",t:"Intervalo para almoço"},
 {r:"MP1",s:"13:30",e:"14:30",t:"Simpósio de Hipertensão · MAPA, MRPA, VOP e pressão central",note:"Aula fechada",talks:[
  ["13:30","MAPA, MRPA, VOP e pressão central","Dr. Bruno Augusto Alcova Nogueira (SP)"],
  ["13:50","MAPA, MRPA, VOP e pressão central","Dr. Emerson Costa Porto (BA)"]],
  deb:"Dr. João Roberto Gemelli (RO)"},
 {r:"MP2",s:"13:30",e:"15:30",t:"Simpósio Multidisciplinar · Módulo 3",talks:[
  ["13:30","Cuidados e vigilância em pacientes em pós-operatório endovascular","Sheila Cristina da Silva Cavalcante Souza, enfermeira (RO)"],
  ["14:00","Métodos de recuperação muscular no paciente crítico: da UTI à reabilitação","Sarana dos Santos Matos, fisioterapeuta (RO)"],
  ["14:20","Apneia obstrutiva do sono como modificador de risco cardiovascular: evidências, mecanismo e impacto de tratamento","Flávia da Silva Lelis, fisioterapeuta (RO)"],
  ["14:50","Inovação tecnológica no paciente cardiocrítico: monitoramento e tomada de decisão","Luan dos Santos Nonato, enfermeiro (RO)"]]},
 {r:"A",s:"14:30",e:"15:30",t:"Ecocardiografia avançada na prática",talks:[
  ["14:30","Strain miocárdico além da fração de ejeção: quando o método realmente muda a conduta?","Dr. Saulo Rodrigo Moreira da Cunha (RO)"],
  ["14:45","Trabalho miocárdico além do clássico strain: por que e quando usar?","Dr. Marcelo Salame (RO)"],
  ["15:00","Eco 3D na vida real: o que eu não consigo enxergar bem no 2D?","Dra. Wendy Sierraalta Navarro (SP)"]],
  mod:"Dr. Rodolfo Luiz Amorim de Oliveira (RO)",deb:"Dra. Barbara de Figueredo Tenorio (RO), Dr. Igor D'Ávila (AC)"},
 {r:"MP1",s:"14:30",e:"15:30",t:"Simpósio de Hipertensão · Mesa 1",talks:[
  ["14:30","Hormônios e o coração feminino: o manejo seguro da terapia hormonal na IOP e na menopausa","Dra. Ivanice Fernandes Barcellos Gemelli (RO)"],
  ["14:40","Anti-hipertensivos, rigidez arterial e disfunção endotelial","Dr. Bruno Augusto Alcova Nogueira (SP)"],
  ["14:50","Particularidades e cuidados no hipertenso idoso e superidoso","Dra. Ana Gabriela Caldas Giovanini (RO)"],
  ["15:00","Desafios da disautonomia no paciente hipertenso","Dr. Emerson Costa Porto (BA)"]],
  deb:"Dr. João Roberto Gemelli (RO)"},
 {r:"ALL",k:"brk",s:"15:30",e:"16:00",t:"Visita aos estandes, apresentação dos trabalhos em pôster e coffee break"},
 {r:"A",s:"16:00",e:"16:40",t:"Emergências cardiovasculares",talks:[
  ["16:00","FA na emergência: quando cardioverter?","Dra. Sarah Schereder (RS)"],
  ["16:10","TEP em 2026: o que mudou na estratificação de risco e na reperfusão?","Dra. Milena Alves (RO)"],
  ["16:20","Síndrome aórtica aguda: diagnóstico e conduta nas primeiras horas","Dr. Jorge Luis da Silva (SP)"]],
  mod:"Dr. Marcos Rosa Ferreira (RO)",deb:"Dr. Gustavo, pneumologista (RO), Dra. Themis Borche da Silva (RO)"},
 {r:"MP1",s:"16:00",e:"17:30",t:"Simpósio de Hipertensão · Mesa 2",talks:[
  ["16:00","Abordagem prática da hipertensão na infância: o que todos devem saber","Dra. Luciana Silveira Nina de Azevedo (RO)"],
  ["16:15","Aplicabilidade clínica das novas drogas no tratamento da HAS","Dr. Emerson Costa Porto (BA)"],
  ["16:30","Tratamento da hipertensão no paciente oncológico","Dr. João Roberto Gemelli (RO)"],
  ["16:45","Melhores trabalhos do ESC 2026","Dr. Bruno Augusto Alcova Nogueira (SP)"]],
  deb:"Dra. Jessica Fontenele Calixto (RO)"},
 {r:"MP2",s:"16:00",e:"18:40",t:"Simpósio Multidisciplinar · Módulo 4",talks:[
  ["16:00","Paciente cardiológico em deterioração clínica: reconhecimento precoce e atuação da enfermagem","Kalliza Kary Rodrigues da Costa, enfermeira (RJ)"],
  ["16:30","Desafio da terapia nutricional no paciente crítico cardiopata","Gabriela de Souza Barbosa, nutricionista (RO)"],
  ["16:50","Prevenção de infecção em dispositivos invasivos: desafios na UTI cardiológica","Lorena Teixeira da Silva, enfermeira (RO)"],
  ["17:10","Atuação do farmacêutico na farmacoterapia do infarto agudo do miocárdio","Talita Barbosa Gomes, farmacêutica (RO)"],
  ["17:40","Fisioterapia no paciente cardiológico crítico: mobilização precoce, suporte ventilatório e recuperação funcional","Fábio Bruno de Souza Santos, fisioterapeuta (RO)"],
  ["18:10","Mesa-redonda: novos conceitos estratégicos e estratégias assertivas e humanizadas","Kalliza Kary Rodrigues da Costa (RJ), Dra. Talita Barbosa Gomes (RO) e Flávia da Silva Lelis (RO). Moderador: Kadimo Luann Gomes Rodrigues Paulino (RO)"],
  ["18:40","Encerramento do simpósio e sorteio de brindes e livros",""]]},
 {r:"A",s:"16:50",e:"17:30",t:"Highlights",talks:[
  ["16:50","Highlights em doença arterial coronariana e prevenção cardiovascular","Dr. Cristóvão de Oliveira dos Silva (RO)"],
  ["17:00","Highlights em insuficiência cardíaca e miocardiopatias","Dra. Rafaela Rádner (RO)"],
  ["17:10","Highlights em antiplaquetários e anticoagulação","Dr. Renan Marquiori (RO)"]],
  mod:"Dr. Rodrigo Gallina (RO)",deb:"Dr. Francisco Antonio Helfenstein Fonseca (SP), Dr. Marcus Vinicius Nunes Batista (RO)"},
 {r:"A",k:"sp",sp:"Edwards",also:["MP1"],s:"17:40",e:"18:20",t:"Da exceção à rotina: como a TAVI transformou o tratamento da doença valvar",note:"Dr. Ricardo Wang (MG)"}
]},
{id:"dom",label:"Domingo",date:"2026-11-29",short:"29/11",ses:[
 {r:"MP1",s:"08:00",e:"08:40",t:"POCUS",talks:[
  ["08:00","POCUS no choque indiferenciado: como definir o fenótipo hemodinâmico à beira-leito","Dra. Barbara de Figueredo Tenorio (RO)"],
  ["08:10","POCUS na parada cardíaca e no paciente peri-PCR","Dra. Diana Negreiros (SP)"]],
  mod:"Dr. Marcelo Salame (RO)",deb:"Dra. Marcela de Aguiar Antonio (RO), Dr. Murilo Salani Gil (RO)"},
 {r:"MP2",s:"08:00",e:"08:40",t:"Apresentação dos trabalhos selecionados"},
 {r:"A",s:"08:50",e:"09:30",t:"Doença coronariana crônica: anatomia, fisiologia e o que de fato muda desfecho",talks:[
  ["08:50","Isquemia ou anatomia? O que de fato indica a revascularização no paciente crônico","Dr. Bruno de Castro Coutinho (RN)"],
  ["09:00","Oclusão crônica total: quando vale a pena abrir?","Dr. Cleber Henrique (RO)"],
  ["09:10","Revascularização cirúrgica hoje: para quem, como e com que resultado","Dr. Jorge Luis da Silva (SP)"]],
  mod:"Dr. Gederson Rossato (RO)",deb:"Dr. Luiz Carlos Benittez Junior (RO), Dr. Rodrigo Gallina (RO), Dr. Evaldo Machado Junior (RO)"},
 {r:"MP1",s:"08:50",e:"09:30",t:"Ecocardiografia na decisão clínica",talks:[
  ["08:50","Cardiopatia reumática: ainda dá para fazer valvoplastia? Como selecionar o paciente em 2026?","Dr. Rodolfo Borges Franco de Macêdo (RO)"],
  ["09:00","Novo consenso de diástole: ganhamos precisão ou perdemos sensibilidade?","Dra. Wendy Sierraalta Navarro (SP)"],
  ["09:10","IA no ecocardiograma: o que já podemos usar na prática?","Dr. Jhonathan Gouveia da Mota (RO)"]],
  mod:"Dr. Rodolfo Luiz Amorim de Oliveira (RO)",deb:"Dra. Anna Claudia Cerutti (RO), Dra. Raitany Costa de Almeida (RO), Dr. Marcelo Salame (RO)"},
 {r:"MP2",s:"08:50",e:"09:30",t:"Simpósio das Ligas · Cardiologia na prática clínica",talks:[
  ["08:50","Insuficiência cardíaca: da suspeita clínica ao tratamento que muda o prognóstico","Dra. Rafaela Rádner (RO)"],
  ["09:05","Conhecendo os DCEIs (dispositivos cardíacos eletrônicos implantáveis)","Dr. Marcos Rosa Ferreira (RO)"]]},
 {r:"ALL",k:"brk",s:"09:30",e:"10:00",t:"Visita aos estandes, apresentação dos trabalhos em pôster e coffee break"},
 {r:"A",s:"10:00",e:"10:40",t:"Estenose aórtica: a primeira válvula decide a segunda",talks:[
  ["10:00","Estenose aórtica grave assintomática: intervir já ou acompanhar?","Dra. Gislaine Michel Marin Mugrabi (RO)"],
  ["10:10","TAVI ou cirurgia no paciente de baixo risco: como decidir em 2026","Dr. Bruno de Castro Coutinho (RN)"],
  ["10:20","Lifetime management: pensando na segunda válvula antes de implantar a primeira","Dr. Ricardo Wang (MG)"]],
  mod:"Dr. Luiz Henrique Gasparelo (RO)",deb:"Dra. Elisangela Henrique Muniz de Oliveira Rocha (RO), Dra. Halyna Melo (AC), Dr. Cleber Henrique (RO)"},
 {r:"MP1",s:"10:00",e:"10:40",t:"Heart Team · Exercício e coração: quem avaliar, como prescrever e como manter?",talks:[
  ["10:00","Atividade física e risco cardiovascular: quem precisa de investigação e como fazê-la antes de começar?","Dra. Jessica Fontenele Calixto (RO)"],
  ["10:10","Do paciente esportista ao cardiopata: como prescrever exercícios físicos?","Dra. Raissa Simonato (RO)"],
  ["10:20","Nunca é tarde para começar: exercício no idoso, da prescrição à adesão","Dr. Lucas Rondina (RO)"]],
  mod:"Dr. Marcelo Salame (RO)",deb:"Dr. Bernardo Dal Ponte Descovi (RO), Dra. Fabiane Fernandes Schmitt Flores (RO)"},
 {r:"MP2",s:"10:00",e:"10:40",t:"Simpósio das Ligas · Interfaces clínicas: o coração e as especialidades",talks:[
  ["10:00","Dor torácica na infância e adolescência: sinais de alerta e abordagem clínica","Dra. Luciana Silveira Nina de Azevedo (RO)"],
  ["10:10","Quando o tratamento do câncer afeta o coração: os desafios da cardio-oncologia na era das terapias modernas","Dra. Giselle Almeida (RO)"],
  ["10:20","Síndrome cardiorrenal aguda: até onde insistir na diurese e quando iniciar diálise?","Dr. Dhiego Lang (RO)"]]},
 {r:"A",s:"10:50",e:"11:30",t:"Mitral e tricúspide: a era do reparo transcateter chegou ao Norte",talks:[
  ["10:50","Insuficiência mitral: primária ou secundária, e por que isso muda todo o tratamento","Dra. Wendy Sierraalta Navarro (SP)"],
  ["11:00","Reparo mitral sem cirurgia: quem é o paciente ideal e o que esperar do resultado","Dr. Daniel Ferreira Mugrabi (RO)"],
  ["11:10","A válvula tricúspide que ninguém trata: quando é hora de intervir","Dr. Ricardo Wang (MG)"]],
  mod:"Dra. Gislaine Michel Marin Mugrabi (RO)",deb:"Dr. Carlos Eduardo Faria Silva (RO), Dra. Taís Neves Noujaim Miotto (RO), Dra. Halyna Melo (AC)"},
 {r:"MP1",s:"10:50",e:"11:30",t:"Choque cardiogênico na prática: do caso real ao suporte hemodinâmico",talks:[
  ["10:50","Apresentação do caso","Dra. Suzana Costa Borche (RO)"],
  ["11:00","Melhores práticas no choque cardiogênico","Dra. Themis Borche da Silva (RO)"],
  ["11:10","Tipos de suporte hemodinâmico disponíveis","Dr. Rafael Nunes (RO)"]],
  mod:"Dr. Thiago Coimbra Felipe (RO)",deb:"Dr. Andrei Leonardo Freitas de Oliveira (RO), Dr. Carlos Henrique Spesia (RO)"},
 {r:"MP2",s:"10:50",e:"11:30",t:"Simpósio das Ligas · Caminhos na medicina: carreira e oportunidades",talks:[
  ["10:50","Carreira médica: caminhos depois da formatura",""],
  ["11:05","Medicina na Força Aérea: como ingressar e o que a carreira oferece?","Dr. Rian Barreto"],
  ["11:20","Encerramento do simpósio e sorteio de brindes",""]]},
 {r:"A",k:"sp",sp:"Boston Scientific",also:["MP1","MP2"],s:"11:40",e:"12:20",t:"Além da angiografia: como a imagem intravascular e o preparo do cálcio mudaram a angioplastia coronária",note:"Dr. Bruno de Castro Coutinho (RN)"},
 {r:"A",k:"cer",s:"12:20",e:"12:50",t:"Assembleia Geral da SOCERON",note:"Associados da SOCERON"},
 {r:"A",k:"cer",s:"12:50",e:"13:30",t:"Cerimônia de encerramento",note:"Premiações e sorteio de brindes e livros"}
]}
];
/* ====== fim da grade ====== */
