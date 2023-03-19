let blenderStatus = 'off'
const blender = document.getElementById('blender')
const blenderBtnSound = document.getElementById('blenderBtnSound')
const blenderSound = document.getElementById('blenderSound')

document.getElementById('blenderBtn').addEventListener('click', blenderCtrl)


function blenderCtrl() {
  if(blenderStatus === 'off'){
    blenderStatus = 'on'
    blenderSoundsStatus()
    blender.classList.add('blenderActive')
  } else {
    blenderStatus = 'off'
    blenderSoundsStatus()
    blender.classList.remove('blenderActive')
  }
}

function blenderSoundsStatus() {
  if(blenderSound.paused){
    blenderBtnSound.play()
    blenderSound.play()
  } else{
    blenderBtnSound.play()
    blenderSound.pause()
    blenderSound.currentTime = 0
  }
}
