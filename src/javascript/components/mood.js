import { moodLevels } from "../app.js";
export function mood1() {
    moodLevels.moodLevel += 1;
    let oldMood = moodLevels.recentMoodLog.shift();
    moodLevels.recentMoodLog.push(oldMood + 1);
    moodLevels.recentMood = moodLevels.recentMoodLog.reduce((a, b) => a + b);
}
/* export function mood10() {
  moodLevel += 10;
  recentMoodLog.push(10);
  recentMoodLog.shift();
  recentMood = recentMoodLog.reduce((a, b) => a + b);
}

export function moodLess10() {
  moodLevel -= 10;
  recentMoodLog.push(-10);
  recentMoodLog.shift();
  recentMood = recentMoodLog.reduce((a, b) => a + b); */
/* } */
