let blenderStatus = 'off'
const blender = document.getElementById('blender')
document.getElementById('blenderBtn').addEventListener('click', blenderCtrl)


function blenderCtrl() {
  if(blenderStatus === 'off'){
    blenderStatus = 'on'
    console.log('toy prendida');
  } else {
    blenderStatus = 'off'
    console.log('toy apagada');
  }
}
