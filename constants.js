// Options the user could type in
const prompts = [
  ["안녕"],
  ["기분이 어때", "하우 얼 유", "하와유"],
  ["뭐해", "무엇을 하고 있어"],
  ["너 몇살이야", "너는 몇살이야", "너 몇살이니?", "넌 몇살이니?"],
  ["넌 누구야", "너 누구야"],
  ["누가 너를 만들었어", "너를 만든 사람이 누구야", "누가 너를 만들었니"],
  [
    "네 이름이 뭐야",
    "니 이름이 뭐야",
    "니 이름이 뭔데",
    "너 이름이 뭐야",
    "너 이름이 뭐임",
    "네 이름이 뭐니",
    "네 이름은 뭐니"
  ],
  ["젠카이노"],
  ["재밌게 본 영화가 뭐야", "재밌는 영화 있어", "재밌게 본 영화 있어", "재밌는 영화"]
]

// Possible responses, in corresponding order

const replies = [
  ["안녕하세요!", "안녕하세요?"],
  [
    "아주 좋아요! 당신은 어떠신가요?",
    "아주 기분이 좋아요! 당신은 어떠신가요?"
  ],
  [
    "전 당신과 대화하고 있어요"
  ],
  ["비밀이에요"],
  ["저는 「아마데우스」에요"],
  ["저를 만든 사람은 https://info.progrm.net 에서 찾아볼 수 있어요"],
  ["저는 「아마데우스」에요"],
  ["러브라이브!"],
  ["저는 신카이 마코토 감독님의 작품인 「너의 이름은.」을 굉장히 감명깊게 봤어요!"]
]

// Random for any other user input

const alternative = [
  "제가 모르는 말이네요. 답변을 하지 못해 죄송해요."
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]