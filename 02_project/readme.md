## 🧱 1. **What Are We Building?**

You are building a **step-by-step progress indicator**, like this:

```
●────●────●────●
1    2    3    4
```

When you click **Next**, it fills the line and highlights the next step. When you click **Prev**, it goes backward.

This is often used in:

* Forms (multi-step)
* Tutorials
* Checklists

---

## 🔍 2. **How Is It Structured? (HTML)**

HTML is like the **skeleton** of your project.

### Main Parts:

```html
<div class="progress-container">
  <div class="progress" id="progress"></div>
  <div class="circle active">1</div>
  <div class="circle">2</div>
  <div class="circle">3</div>
  <div class="circle">4</div>
</div>
<button id="prev" disabled>Prev</button>
<button id="next">Next</button>
```

### What it means:

* `progress-container`: Holds the whole progress line and steps.
* `progress`: A thin blue line that grows with steps.
* `circle`: Numbered circles (1 to 4). The first is marked **active** at start.
* `prev`/`next`: Buttons to move back and forth.

---

## 🎨 3. **How Does It Look? (CSS)**

CSS is the **skin and clothes** of your page — it controls appearance.

### Key Styles:

* `.progress`: Thin blue line. Starts at `width: 0%` and grows.
* `.circle`: White circle with gray border.
* `.circle.active`: Circle with **blue border** (shows current step).
* `.btn`: Styled button with some padding, color, and disabled states.

#### Example:

```css
.circle.active {
  border-color: var(--line-border-fill); /* Blue */
}
```

---

## 🧠 4. **How Does It Work? (JavaScript)**

JavaScript is the **brain** of your site — it makes things interactive.

### What It Does:

* Tracks which step you're on.
* Updates UI when you click **Next** or **Prev**.
* Fills progress bar accordingly.

---

### Step-by-step Explanation:

#### 1. **Set Variables**

```js
let currentActive = 1;
```

Means: We're starting at step 1.

#### 2. **Add Click Events**

```js
next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) currentActive = circles.length;
  update();
});
```

Clicking **Next**:

* Moves to the next step.
* Prevents going past step 4.
* Calls `update()` to refresh visuals.

Clicking **Prev** is similar but goes backward.

---

### 3. **Update Function**

This is the heart of the logic.

```js
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}
```

#### What it does:

1. **Updates Circles**: Adds or removes `.active` class based on current step.
2. **Updates Line**: Grows/shrinks the blue line.
3. **Disables Buttons**: Disables Prev on step 1 and Next on step 4.

---

## 🧠💡 Why This Is a Good Learning Project

You learn:

* ✅ HTML structure with semantic elements
* ✅ CSS with variables and positioning
* ✅ JavaScript DOM selection and event listeners
* ✅ Loops and conditions (`forEach`, `if`, etc.)
* ✅ Basic state tracking (`currentActive`)

---
![image](https://github.com/user-attachments/assets/addab751-5cc5-4511-99de-1454b125c374)

