# React Basics Cheat Sheet

A quick reference for essential React concepts including JSX, state, props, hooks, state sharing, and event handling.

---
# Repsitoru link:https://github.com/mahadi5272/B12A07.git
# deploy link : b12a07.netlify.app
## 1. What is JSX and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript.  
It is used in React to describe the UI structure in a readable way and combine JavaScript logic with HTML layout.


## 2. What is the difference between State and Props?

State

Local, mutable data managed inside a component.

Can change using useState or other hooks.

Private to the component.
## 3. What is the useState hook, and how does it work?

useState is a React hook that allows functional components to have state.
It returns an array with two elements: the current state value and a function to update that state.
## 4. How can you share state between components in React?

1. Lifting State Up
Move state to a common parent and pass it as props.
2. Context API
Allows global state sharing without prop drilling.

3. State Management Libraries
Examples: Redux, Zustand, Recoil.
## 5. How is event handling done in React?

Use camelCase for events (onClick, onChange)

Pass a function reference, not a string

React uses synthetic events for cross-browser compatibility
