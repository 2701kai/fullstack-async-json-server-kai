export default function getStatusMessage(status, error, statusMessageElement) {
  statusMessageElement.hidden = false;

  if (status === "loading") {
    statusMessageElement.textContent = "Loading...";
    statusMessageElement.style.backgroundColor = "yellow";
  }

  if (status === "fulfilled") {
    statusMessageElement.hidden = true;
  }

  if (error) {
    statusMessageElement.textContent = `${error.message}. Please try again`;
    statusMessageElement.style.backgroundColor = "red";
    setTimeout(() => {
      statusMessageElement.hidden = true;
    }, 3000);
  }
}
