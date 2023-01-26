# IGME-480 Practicing with some JS

### _To run:_


1. Install the Live Server extension in VSCode.
2. Run it in this folder with the "Go Live" button on the bottom right of your editor.
    - You don't strictly _need_ Live Server, but you do need to run a file server in this folder. This is the easiest way to do it.
3. It should open automatically in your browser (for example, it may open the URL "http://127.0.0.1:62128/")
4. Check the browser dev console to see test results. 

---

Your task is to implement each of the requested functions.

There are a number of tasks, most of which ask you to write a function or two. Write your implementation as requested by the exercise using the name I've provided.

Make sure to test your code. Each task should have at least one basic test written for it, written into `index.js`. Follow the examples there using the `test` function I've written for you.

**1 point for each task earnestly attempted, 1 point for testing each task** for a total of 2 points per task.

## RULES
- No curly braces allowed, except where otherwise noted. The hope here is to get you to think in expressions, instead of statements. You can use parentheses, though, so 
~~~js
    const double = (num) => (
        num * 2
    )
~~~
is totally fine, but you should not use
~~~js
    const double = (num) => {
        return num * 2;
    }
~~~
- Don't feel that you must make any great effort to understand the type annotations. (The \`add :: Number -> Number -> Number\` bits) They're there to expose you to the syntax now, so they're easier to understand later. 
- Ask for help where I've stated things poorly, or you don't understand what I want.