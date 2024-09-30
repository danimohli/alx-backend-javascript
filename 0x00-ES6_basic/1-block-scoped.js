export default function taskBlock(trueOrFalse) {
  const task = false;   // Using const since the value is not meant to change
  const task2 = true;   // Using const here as well for the same reason

  if (trueOrFalse) {
    let task = true;    // let ensures this is scoped within the if block only
    let task2 = false;  // let ensures this is scoped within the if block only
  }

  return [task, task2];
}
