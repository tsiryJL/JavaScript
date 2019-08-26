let arn = prompt("Rentre un codon!")

const code = [
  {protein: 'sérine', codon: ['UCU', 'UCC', 'UCA', 'UGC', 'AGU', 'AGC']},
  {protein: 'proline', codon: ['CCU', 'CCC', 'CCA', 'CCG']},
  {protein: 'leucine', codon: ['UUA', 'UUG']},
  {protein: 'phénylalanine', codon: ['UUU', 'UUC']},
  {protein: 'arginine', codon: ['CGU', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG']},
  {protein: 'tyrosine', codon: ['UAU', 'UAC']},
]

splittedArn = (arn.match(/.{1,3}/g));
// On le split par tranches de 3, ce qui renvoie un array

let output = [];
splittedArn.forEach(molecule => {
  code.forEach(prot => {
    if (prot.codon.includes(molecule)){
      output.push(prot.protein)
    }
  })
})
console.log(output.join("-"))