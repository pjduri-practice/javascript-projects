// Code your selectRandomEntry function here:\
function selectRandomEntry(idsArr) {
  return idsArr[Math.floor(Math.random() * idsArr.length)]
}

// Code your buildCrewArray function here:
function buildCrewArray(idsArr, candidatesArr) {
  const crewArr = []
  for (let i=0; i< idsArr.length; i++) {
    for (let j=0; j<candidatesArr.length; j++) {
      if (candidatesArr[j].astronautID == idsArr[i]) {
        crewArr.push(candidatesArr[j])
      }
    }
  }
  return crewArr
}

let idNumbers = [291, 414, 503, 599, 796, 890];
let crewIds = []
while (crewIds.length < 3) {
  const crewId = selectRandomEntry(idNumbers)
  if (!crewIds.includes(crewId)) {
    crewIds.push(crewId)
  }
}

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
const crewArray = buildCrewArray(crewIds, animals)

console.log(`${crewArray[0].name}, ${crewArray[1].name}, and ${crewArray[2].name} are going to space!`)