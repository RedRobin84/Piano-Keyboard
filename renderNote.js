// @ts-check
const myWhiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
const accidentals = ["#", "b", ""];

const VF = Vex.Flow;

var vf;
var score;
var system;

var currentDisplayedNote;

function renderNote(){
vf = new VF.Factory({renderer: {elementId: 'boo'}});
score = vf.EasyScore();
system = vf.System()

currentDisplayedNote = myWhiteKeys[Math.floor(Math.random() * myWhiteKeys.length)].toString() 
				// + accidentals[Math.floor(Math.random() * accidentals.length)].toString() 
				+ (Math.floor(Math.random() * 3) + 3).toString();

system.addStave({
	voices: [score.voice(score.notes(currentDisplayedNote + '/w'))]
  }).addClef('treble').addTimeSignature('4/4');
  
  vf.draw();
}
