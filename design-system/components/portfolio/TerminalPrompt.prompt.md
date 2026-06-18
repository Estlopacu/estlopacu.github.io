The signature heritage motif — a VT323 terminal window with prompt, command and blinking cursor.

```jsx
<TerminalPrompt command="whoami" output="Esteban López — software engineer" />
<TerminalPrompt user="guest" host="cv" command="cat skills.json" chrome={false} />
```

`output` renders a signal-green response line. Set `chrome={false}` to drop the traffic-lights, `cursor={false}` to hide the blink.
