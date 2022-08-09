// Context: You’re part of a research team that has found a new mysterious organism 
// at the bottom of the ocean near hydrothermal vents.Your team names the organism, 
// Pila aequor(P.aequor), and finds that it is only comprised of 15 DNA bases.
// The small DNA samples and frequency at which it mutates due to the hydrothermal 
// vents make P.aequor an interesting specimen to study.However, P.aequor cannot 
// survive above sea level and locating P.aequor in the deep sea is difficult and 
// expensive.Your job is to create objects that simulate the DNA of P.aequor for 
// your research team to study.

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, bases) => {
  return {
    specimenNum: num,
    dna: bases,
    mutate() {
      const newBase = returnRandBase();
      if (this.dna[Math.floor(Math.random() * 15)] !== newBase) {
        this.dna[Math.floor(Math.random() * 15)] = newBase;
      } else {
        this.dna[
          Math.floor(Math.random() * 15) - Math.floor(Math.random() * 15)
        ] = newBase;
      }
    },
    compareDNA(obj) {
      let newDna = obj.dna;
      let matchedBases = 0;
      for (let i = 0; i < newDna.length; i++) {
        if (newDna[i] === this.dna[i]) {
          matchedBases++;
        }
      }
      let percentage = (matchedBases / this.dna.length) * 100;
      console.log(
        `specimen #1 and specimen #2 have ${percentage}% DNA in common`
      );
    },
    willLikelySurvive(obj) {
      let cgs = obj.dna.filter((base) => base === "C" || base === "G");
      let likelihoodToSurvive = cgs.length / obj.dna.length;
      if (likelihoodToSurvive >= 0.6) {
        return true;
      } else {
        false;
      }
    },
  };
};

let viableGenomes = [];

const createViableGenomes = (obj) => {
  if (obj.willLikelySurvive === true) {
    viableGenomes.push(obj);
  }
  return viableGenomes
};

const firstSpecimen = mockUpStrand()

console.log(createViableGenomes(pAequorFactory(1, firstSpecimen )));


