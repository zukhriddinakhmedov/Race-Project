let raceNumber = Math.floor(Math.random() * 1000);
let isRunnerRegistered = true
let ageOfRunner = 18

if(isRunnerRegistered && ageOfRunner > 18){
  raceNumber += 1000
}
if(isRunnerRegistered && ageOfRunner > 18){
  console.log(`Your race will start at 9:30am, your race number is: ${raceNumber}`)
}else if(ageOfRunner > 18 && !isRunnerRegistered){
  console.log(`Your race will start at 11:00am,your race number is: ${raceNumber}.`)
}else if(ageOfRunner < 18){
  console.log(`Your race will start at 12:30pm,your race number: ${raceNumber}`)
}else{
  console.log('See the registration desk')
}

