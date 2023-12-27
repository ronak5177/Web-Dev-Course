const messages = [
  "Initializing Hacking",
  "Reading your Files",
  "Password files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up",
];

const displayMessage = (messages, index) => {
  let num;
  if (index < messages.length){
      num = Math.ceil(Math.random() * 5);
      setTimeout(()=>{
        console.log(messages[index])
        const x = document.createElement("li")
        x.innerText = messages[index]
        let list1 = document.querySelector(".ul_list")

        const sp = document.createElement("span")
        sp.innerHTML = "&nbsp;..."
        sp.style.animation = `blinker ${num}s linear 1s normal none`;
        
        list1.appendChild(x)
        x.appendChild(sp)
        displayMessage(messages, index+1)
      }, num*1000)
  }
}

displayMessage(messages, 0);
