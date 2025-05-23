const progress = document.getElementById('progress');
const prev =document.getElementById('prev');
const next = document.getElementById('next');
const circles =document.querySelectorAll('.circle') ;// Since more that one elements we use querySelectorAll


let currentActive = 1

next.addEventListener('click' ,() => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
        
    }
    update()
})

prev.addEventListener('click' ,() => {
    currentActive--

    if(currentActive < 1 ) {
        currentActive = 1
        
    }
    update()
})

function update() {
    circles.forEach (  (circle ,idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }

    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length -1) * 100 + '%'

    if (currentActive ===1) {
        prev.disabled = true
    } else if (currentActive ===circles.length) {
        next.disabled = true
    } else {
        prev.disabled =false
        next.disabled =false
    }
}


/* Here's a **simple and easy explanation** of this code, ideal for **interview preparation**:

---

### 🔍 **What does this code do?**

It controls a **multi-step progress bar** with "Next" and "Previous" buttons. As you click through, circles (steps) become active, and the progress bar fills accordingly.

---

### 🧠 **Key Concepts Explained:**

---

#### 1. **`document.getElementById()` and `querySelectorAll()`**

* `getElementById('progress')`: Grabs a single HTML element with ID "progress".
* `querySelectorAll('.circle')`: Grabs **all** elements with class `circle` (used for steps).

📌 **Why use `querySelectorAll` here?**
Because we have **multiple circles** (steps) to update, not just one.

---

#### 2. **`currentActive`**

* A variable that **keeps track of the current step**.
* Starts at `1` because the first step is active by default.

---

#### 3. **Event Listeners for Buttons**

* When you click **Next**:

  * `currentActive` increases by 1.
  * If it goes beyond the number of steps, it’s reset to the max.
* When you click **Previous**:

  * `currentActive` decreases by 1.
  * If it drops below 1, it's reset to 1.

✅ This makes sure the user can't go past the first or last step.

---

#### 4. **`update()` Function**

This function handles everything:

* **Highlights the current active steps** by adding the `.active` class.
* **Calculates and updates the progress bar width** using:

  ```js
  progress.style.width = (actives.length - 1) / (circles.length -1) * 100 + '%'
  ```

  📌 Explanation: Progress is based on how many steps are active (minus 1) out of total steps (minus 1).
* **Enables/disables buttons** based on the step:

  * First step → Disable "Previous"
  * Last step → Disable "Next"
  * Middle steps → Enable both

---

### 🧪 Interview Summary (Quick Points):

* This code is for a **step-based progress UI**.
* Uses **DOM selection**, **event listeners**, and **class manipulation**.
* Uses basic **logic to control flow** and **visual feedback**.
* Good example of **dynamic UI updates** with JavaScript.

---

Let me know if you want a **diagram** or **HTML/CSS** code that goes with this example for complete understanding.
*/
