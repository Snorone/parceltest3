import karate from "./media/karate-fighter-silhouette-.jpg";
import anime from "animejs";

const img = document.createElement("img");
document.body.append(img);
img.src = karate;

anime({
  targets: img,
  rotate: 360,
});
