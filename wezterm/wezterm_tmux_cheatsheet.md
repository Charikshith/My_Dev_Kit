# WezTerm Custom Configuration Cheatsheet

**Leader key:** `CTRL+A` (press and release both, then press the command key)

---

## 🪟 Pane Management (after `CTRL+A`)

| Action                     | Key       |
|----------------------------|-----------|
| Split pane vertically      | `-`       |
| Split pane horizontally    | `\`       |
| Move to left pane          | `l`       |
| Move to down pane          | `d`       |
| Move to up pane            | `u`       |
| Move to right pane         | `r`       |
| Resize pane left by 5      | `L`       |
| Resize pane down by 5      | `D`       |
| Resize pane up by 5        | `U`       |
| Resize pane right by 5     | `R`       |
| Zoom current pane (toggle) | `x`       |
| Close current pane         | `z`       |

---

## 📑 Tab Management (after `CTRL+A`)

| Action                     | Key       |
|----------------------------|-----------|
| Create new tab             | `c`       |
| Switch to tab 1            | `1`       |
| Switch to tab 2            | `2`       |
| Switch to tab 3            | `3`       |
| Switch to tab 4            | `4`       |
| Switch to tab 5            | `5`       |
| Switch to tab 6            | `6`       |
| Switch to tab 7            | `7`       |
| Switch to tab 8            | `8`       |
| Switch to tab 9            | `9`       |
| Close current tab          | `&` (Shift+7) |

---

## 🌐 Global Shortcuts (no leader needed)

| Action                     | Key               |
|----------------------------|-------------------|
| Copy selected text         | `Shift+Ctrl+C`    |
| Paste from clipboard       | `Shift+Ctrl+V`    |
| Increase font size         | `Shift+Ctrl++`    |
| Decrease font size         | `Shift+Ctrl+-`    |
| Reset font size            | `Shift+Ctrl+0`    |
| Toggle fullscreen          | `Shift+Ctrl+F`    |
| Open debug overlay         | `Ctrl+Shift+L`    |

---

## 🔁 Special: Send `CTRL+A` to the terminal

To send the actual `CTRL+A` keystroke (e.g., to go to the beginning of the line in Bash), press:

`CTRL+A` twice:  
`LEADER` + `CTRL+A` (hold `Ctrl`, press `A` twice)

---

## 🎨 Appearance

- **Color scheme:** Default (built-in dark theme)
- **Cursor:** Light gray (`#bbbbbb`) background, black text
- **Font size:** 16 (currently commented out – uncomment in config to enable)

---

All default key bindings are disabled; only the shortcuts listed above are active.
