const btnBuy = document.querySelectorAll(".btn-buy");
const frame = document.querySelector(".frame");
const exit = document.querySelector(".frame-exit");
const emailSend = document.querySelector(".frame-subscribe__form-btn");
const successSubscribe = document.querySelector(".frame-subscribe__form-send"),
  interviewBtns = document.querySelectorAll(".frame-interview__btn"),
  interviewThanks = document.querySelector(".frame-interview__thanks");

for (let btn of btnBuy) {
  btn.addEventListener("click", (event) => {
    frame.classList.add("open");
  });
}

exit.addEventListener("click", (e) => {
  frame.classList.remove("open");
  successSubscribe.classList.remove("active");
  interviewThanks.classList.remove("active");
});

const validate = () => {
  let email = document.getElementById("email");

  // Email Regular expression
  var emailCheck = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
  emailSend.addEventListener("click", (eventValidation) => {
    if (emailCheck.test(email.value)) {
      successSubscribe.classList.add("active");
      return false;
    } else {
      alert("Email is not valid");
      return false;
    }
  });
};

validate();

for (let interviewBtn of interviewBtns) {
  interviewBtn.addEventListener("click", (event) => {
    interviewThanks.classList.add("active");
  });
}

// change anwer in form
// const answerBox = document.querySelector(".frame-interview__answer"),
//   answerTitle = document.querySelector(".frame-interview__answer-title"),
//   answerDescription = document.querySelector(
//     ".frame-interview__answer-description"
//   ),
//   answerBtns = document.querySelector(".btn-answer"),
//   answerOk = document.querySelector(".answer-done"),
//   answerDone = document.querySelector(".frame-interview__answer-form-done");

//   for (let answerBtn of answerBtns) {
//     answerBtn.addEventListener("click", (event) => {
//         const currentAnswer = answer.find((answer) => answers.name === dataAttrValue);
//       if (currentAnswer )
//     });
//   }

// const answers = [
//   {
//     name: "too-much",
//     title:
//       "Есть хорошая новость — сейчас цены низкие. Плохая — они растут каждый месяц.",
//     description:
//       "Если вы уже участвовали в любой конференции JUG Ru Group, у вас есть скидка на Personal-билет. Оставьте свой имейл, мы проверим факт участия и пришлем промокод.",
//     btnTitle: "Проверить",
//     answerForSending: "Спасибо! Скоро свяжемся с вами.",
//   },
//   {
//     name: "what-topics",
//     title: "Хм… а какие темы и каких спикеров вы бы хотели видеть в программе?",
//     description:
//       "Расскажите подробнее, пожалуйста. Оставьте свой имейл, мы пришлём вам  форму для отзыва о докладах.",
//     btnTitle: "Отправить",
//     answerForSending:
//       "Спасибо! Скоро пришлем вам письмо с формой обратной связи.",
//   },
//   {
//     name: "are-you-ok",
//     title: "Спасибо!  Всё в порядке!",
//     description:
//       "Чтобы оставаться в курсе наших дел — читайте блог на Хабре, телеграм-канал @23derevo и подписывайтесь на наши рассылки.",
//     btnTitle: "Подписаться",
//     answerForSending: "Спасибо, что подписались на нашу рассылку!",
//   },
//   {
//     name: "no-money",
//     title: "Благодарим за поддержку!",
//     description:
//       "Если вы уже участвовали в любой конференции JUG Ru Group, у вас есть скидка на Personal-билет. Оставьте свой имейл, мы проверим факт участия и дадим промокод.",
//     btnTitle: "Проверить",
//     answerForSending: "Спасибо! Скоро свяжемся с вами.",
//   },
// ];
