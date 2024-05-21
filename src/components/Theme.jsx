import { useState } from 'react'

const Theme = () => {

    const [theme, setTheme] = useState("light")

    const switchTheme = () => {
        if(theme === "light") {
            document.documentElement.setAttribute("data-theme", "dark")
            setTheme("dark")
        } else {
            document.documentElement.setAttribute("data-theme", "light")
            setTheme("light")
        }
    }

    return (
      <div className="switch" onClick={switchTheme}>
        {theme === "dark" ? "Dark" : "Light"}
      </div>
    );
}

export default Theme