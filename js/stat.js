"use strict";

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 20;
const barHeight = CLOUD_HEIGHT - GAP * 5 - FONT_GAP * 4;
const BAR_WIDTH = 40;
const BAR_GAP = CLOUD_X + GAP * 3;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = (ctx, names, times) => {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);
  ctx.fillStyle = `#000`;
  ctx.font = `16px 'PT Mono'`;
  ctx.fillText(
      `Ура вы победили!`,
      CLOUD_X + GAP * 2,
      CLOUD_Y + GAP + FONT_GAP
  );
  ctx.fillText(
      `Список результатов:`,
      CLOUD_X + GAP * 2,
      CLOUD_Y + GAP + FONT_GAP + FONT_GAP
  );

  const maxTime = window.utils.getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    const barRatio = barHeight * times[i] / maxTime;
    const randColor = Math.round(Math.random() * 100);
    ctx.fillStyle = `#000`;
    ctx.fillText(
        names[i],
        BAR_GAP + (GAP * 4 + BAR_WIDTH) * i,
        CLOUD_HEIGHT - GAP
    );
    ctx.fillStyle = names[i] === `Вы`
      ? `rgba(255, 0, 0, 1)`
      : `hsl(240, ${randColor}%, 50%)`;
    ctx.fillRect(
        BAR_GAP + (GAP * 4 + BAR_WIDTH) * i,
        CLOUD_Y + (GAP + FONT_GAP) * 3 + (barHeight - barRatio),
        BAR_WIDTH, barRatio
    );
    ctx.fillStyle = `#000`;
    ctx.fillText(
        Math.round(times[i]),
        BAR_GAP + (GAP * 4 + BAR_WIDTH) * i,
        CLOUD_Y + GAP * 2 + FONT_GAP * 3
    );
  }
};
