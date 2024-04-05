let computer,
  playerscore = 0,
  computerscore = 0;
function game() {
  computer = Math.random() * 2;
  console.log(computer);
  computer = Math.round(computer);
  console.log(computer);
}
function rock() {
  let rock = 0;
  if (computer == 0) {
    alert(
      `Draw!!!\nYou and computer has chosen rock.\nYour score:${playerscore}\nComputer score:${computerscore}\nClick ok to replay`
    );
  } else if (computer == 1) {
    computerscore++;
    alert(
      `You lost!!!\nYou chose rock and computer has chosen paper.\nYour score:${playerscore}\nComputer score:${computerscore}\nClick ok to replay`
    );
  } else if (computer == 2) {
    playerscore++;
    alert(
      `You won!!!\nYou chose rock and computer has chosen scissors.\nYour score:${playerscore}\nComputer score:${computerscore}\nClick ok to replay`
    );
  }
}
function paper() {
  let paper = 1;
  if (computer == 1) {
    alert(
      `Draw!!!\nYou and computer has chosen paper.\nYour score:${playerscore}\nComputer score:${computerscore}\nClick ok to replay`
    );
  } else if (computer == 0) {
    playerscore++;
    alert(
      `You won!!!\nYou chosen paper and computer has chosen rock.\nYour score:${playerscore}\nComputer score:${computerscore}\nClick ok to replay`
    );
  } else if (computer == 2) {
    computerscore++;
    alert(
      `You lost!!!\nYou chosen paper and computer has chosen scissors.\nYour score:${playerscore}\nComputer score:${computerscore}\nClick ok to replay`
    );
  }
}
function scissors() {
  let scissors = 2;
  if (computer == 2) {
    alert(
      `Draw!!!\nYou and computer has chosen scissors.\nYour score:${playerscore}\nComputer score:${computerscore}\nClick ok to replay`
    );
  } else if (computer == 0) {
    computerscore++;
    alert(
      `You lost!!!\nYou chosen scissors and computer has chosen rock.\nYour score:${playerscore}\nComputer score:${computerscore}\nClick ok to replay`
    );
  } else if (computer == 1) {
    playerscore++;
    alert(
      `You won!!!\nYou chosen scissors and computer has chosen paper.\nYour score:${playerscore}\nComputer score:${computerscore}\nClick ok to replay`
    );
  }
}
