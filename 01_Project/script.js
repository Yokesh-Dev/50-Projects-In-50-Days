//Created a Varible to call class panel
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

/*
Sure! Here's a **simple and easy explanation** of what this code does — especially useful for interviews or beginners:

---

### 🔍 **What This Code Does**

It creates an **interactive UI** where:

* You have **multiple `.panel` elements** on the page.
* When you **click on a panel**, it becomes **active** (e.g., highlighted, enlarged).
* It also **removes the "active" state** from any other panel.

---

### 💡 **Step-by-Step Explanation**

```js
const panels = document.querySelectorAll(".panel");
```

✅ This gets **all elements with the class `.panel`** and puts them into a list called `panels`.

---

```js
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
```

✅ For **each panel**, this sets up a **click event**:

* When you **click** a panel:

  1. It calls `removeActiveClasses()` to remove `.active` from **all panels**.
  2. Then it **adds** `.active` to the one you clicked.

This ensures only **one panel** is "active" at a time.

---

```js
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
```

✅ This function **loops through all panels** and removes the `active` class from each one.

---

### 📦 Example Use Case

Imagine you have a **set of cards** or a **tab menu**, and you want only **one item** to be highlighted or expanded when clicked — this is the code you'd use.

---

### ✅ Summary for Interview

> "This code selects all `.panel` elements and adds a click event to each. When a panel is clicked, it removes the 'active' class from all panels and adds it only to the clicked one. This is useful for building interactive UIs where you want only one item active at a time, like image sliders, tab interfaces, or accordions."

---


*/
