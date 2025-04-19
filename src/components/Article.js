import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus: Calculate reading time emojis
  let readTimeIndicator = "";
  if (minutes < 30) {
    const coffeeCups = Math.ceil(minutes / 5);
    readTimeIndicator = "☕️".repeat(coffeeCups) + ` ${minutes} min read`;
  } else {
    const bentoBoxes = Math.ceil(minutes / 10);
    readTimeIndicator = "🍱".repeat(bentoBoxes) + ` ${minutes} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} {readTimeIndicator}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;