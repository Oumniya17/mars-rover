---
## 🌑🚀 Mars Rover – JavaScript Prototype Mission

  Welcome to the **Mars Exploration Program**.  
  This repository contains a complete implementation of the classic **Mars Rover Challenge**, written using **pure JavaScript** and **prototype-based object-oriented programming**.

  No classes.  
  No frameworks.  
  Just **JavaScript the way it truly works**.

```


    /\
   /  \       _🚀_
  /----\     ( •_•)   < "Rover online. Awaiting commands."
 /      \    />🌑     
/--------\  


```

---

## 🌌 Problem Description

NASA deploys autonomous rovers onto a plateau on Mars.  
Each rover receives:

- An initial position → `X Y Direction`
- A series of commands:
  - `L` → rotate left 90°
  - `R` → rotate right 90°
  - `M` → move forward 1 grid unit  

The plateau is defined by the **upper-right coordinate**.  
The lower-left is always **(0,0)**.

Rovers move **one at a time**, finishing their entire instruction sequence before the next rover begins.

🎯 Your task:  
Compute the **final position and direction** of each rover.

---

## 📥 Example Input

```

5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM

```

---

## 📤 Expected Output

```

1 3 N
5 1 E

```

---

## 🧠 Technologies Used

- JavaScript Constructor Functions  
- Prototype Methods  
- Prototype-Based Inheritance  
- Node.js Runtime  
- Zero ES6 classes  
- Zero external libraries  

This fully respects JavaScript’s **original object model**, as often required in technical assignments and interviews.

---

## 📁 Project Structure

```

mars-rover/
│── mars-rover.js   # Rover logic (constructor + prototype)
└── README.md       # Documentation

````

---

## ▶️ How to Run

1. Install Node.js → https://nodejs.org  
2. Open the project folder in Visual Studio Code  
3. Run the script in the terminal:

   ```bash
   node mars-rover.js
   ```

The rover's final positions will be printed in the console.

---

## 🧩 Solution Overview

### 🟥 Plateau  
Validates boundaries and prevents rovers from leaving the grid.

### 🟦 Rover  
Implemented via a constructor function with prototype methods for:

- rotateLeft()  
- rotateRight()  
- move()  
- execute()  

### 🟩 Controller  
Parses input, runs each rover sequentially, prints results.

---

## 🛰️ Sample Output

````

1 3 N
5 1 E

`````

Mission accomplished. 🛰️

---

## 🎯 Purpose

This project shows:

- Strong understanding of JavaScript prototypes  
- Clean and modular problem-solving  
- Ability to implement classic CS challenges  
- Professional coding practices  

Ideal for:

- Assignments  
- Interviews  
- JavaScript study  
- Portfolios  

---

## 🌑 Future Enhancements

- Dark-mode web visualizer  
- Real-time rover movement dashboard  
- Path tracing  
- Collision detection  
- Multi-rover support  

---

## 🛸 Final Transmission

Your rover is ready.  
Your mission is uploaded. 🌑🚀
---
```

