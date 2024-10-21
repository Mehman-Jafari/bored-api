const titleNode = document.querySelector(".js-block__title");
const activityNode = document.querySelector(".js-block__activity");
const btnNode = document.querySelector(".js-block__btn");

const goodApiResponseText = "Ура, теперь не скучно";
const loadingText = "Загружаем";
const errorText = "Ошибка";

btnNode.addEventListener("click", () => {
  isErrorChecked(false);
  isLoadingChecked(true);

  fetch("https://bored.api.lewagon.com/api/activity/")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      return response.json();
    })
    .then((response) => {
      const activityGetApi = response.activity;

      isErrorChecked(false);
      isLoadingChecked(false);

      addResponseInHTML(titleNode, activityNode, activityGetApi);
    })
    .catch((error) => {
      isErrorChecked(error);
    });
});

function isLoadingChecked(isLoading) {
  if (isLoading) {
    return activityNode.textContent = loadingText;
  }
}

function isErrorChecked(isError) {
  if (isError) {
    return activityNode.textContent = errorText;
  }
}
function addResponseInHTML(title, activity, activityResponse) {
  title.textContent = goodApiResponseText;
  activity.textContent = activityResponse;
}