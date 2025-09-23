// console.log("my first js");
// const price1 =5;
// const price2 = 10;
// let total = price1 + price2;
// console.log(total);

   function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");


      const span = document.createElement("span");
      span.textContent = taskText;

      const tickBtn = document.createElement("button");
      tickBtn.textContent = "✔";
      tickBtn.className = "btn tick";
      tickBtn.onclick = function() {
        span.classList.toggle("completed");
      };


      const delBtn = document.createElement("button");
      delBtn.textContent = "✖";
      delBtn.className = "btn delete";
      delBtn.onclick = function() {
        li.remove();
      };

      li.appendChild(span);
      li.appendChild(tickBtn);
      li.appendChild(delBtn);

      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }