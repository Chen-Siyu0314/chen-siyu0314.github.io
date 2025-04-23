
// 打字機效果
function typeWriter(text, elementId, speed = 50) {
  const element = document.getElementById(elementId);
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// 初始化打字機效果
document.addEventListener('DOMContentLoaded', () => {
  const text = "嗨~我是陳思宇，目前就讀台灣科技大學。我是個開朗的人，喜歡和朋友一起玩遊戲、聽音樂。我相信透過不斷學習和努力，未來可以成為一位優秀的專業人才！";
  typeWriter(text, "typing-text");
});

// 問候訪客
function greetVisitor() {
  const visitorName = document.getElementById('visitorName').value;
  if (visitorName.trim() !== '') {
    alert(`你好，${visitorName}！很高興認識你！`);
  } else {
    alert('請輸入你的名字！');
  }
}

// 深色模式切換
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
  document.body.setAttribute('data-theme', darkModeToggle.checked ? 'dark' : 'light');
});

// 初始化粒子效果
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      }
    },
    "retina_detect": true
  }
);
