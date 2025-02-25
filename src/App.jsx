import React, { useState } from "react"
import "./App.css"
import {
  Button,
  Card,
  Accordion,
  Checkbox,
  Dropdown,
} from "khrlumam-component-bismillah1"
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"

function App() {
  const [currentComponent, setCurrentComponent] = useState("Button")
  const [checkboxStates, setCheckboxStates] = useState({
    checkbox1: false,
    checkbox2: false,
  })

  const options = ["Option 1", "Option 2", "Option 3"]

  const handleCheckboxChange = (id) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  const renderComponent = () => {
    switch (currentComponent) {
      case "Button":
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "40px",
            }}
          >
            <Button variant="primary" label="Primary" />
            <Button variant="secondary" label="Secondary" />
            <Button variant="tertiary" label="Tertiary" />
          </div>
        )
      case "Card":
        return (
          <div style={{ marginBottom: "40px", textAlign: "center" }}>
            <Card
              title="Card Component"
              description="Card ini Akan berubah ketika hover."
            />
          </div>
        )
      case "Accordion":
        return (
          <div style={{ marginBottom: "40px" }}>
            <Accordion
              sections={[
                {
                  title: "Section 1",
                  content:
                    "Content for section 1. Lorem ipsum dolor sit amet consectetur...",
                },
                {
                  title: "Section 2",
                  content:
                    "Content for section 2. Lorem ipsum dolor sit amet consectetur...",
                },
                {
                  title: "Section 3",
                  content:
                    "Content for section 3. Lorem ipsum dolor sit amet consectetur...",
                },
              ]}
            />
          </div>
        )
      case "Checkbox":
        return (
          <div style={{ width: "300px", textAlign: "left" }}>
            <h3 style={{ marginBottom: "10px", color: "#333" }}>
              Contoh Checkbox:
            </h3>
            <Checkbox
              id="checkbox1"
              label="Option 1"
              checked={checkboxStates.checkbox1}
              onChange={() => handleCheckboxChange("checkbox1")}
            />
            <Checkbox
              id="checkbox2"
              label="Option 2"
              checked={checkboxStates.checkbox2}
              onChange={() => handleCheckboxChange("checkbox2")}
            />
          </div>
        )
      case "Dropdown":
        return (
          <div style={{ width: "300px" }}>
            <Dropdown options={options} defaultOption="Choose an option" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "10px" }}>
        <h1 style={{ margin: "0", fontSize: "40px", color: "#333" }}>
          KHOIRUL UMAM - 1122102087
        </h1>
        <p style={{ margin: "5px 0", fontSize: "22px", color: "#555" }}>
          Component Package khrlumam-component-bismillah1
        </p>
      </header>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* List Components */}
        <div
          style={{
            width: "200px",
            borderRight: "1px solid #ccc",
            paddingRight: "10px",
          }}
        >
          <h3 style={{ textAlign: "center", color: "#333" }}>List Komponen</h3>
          <List>
            {["Button", "Card", "Accordion", "Checkbox", "Dropdown"].map(
              (component) => (
                <ListItem key={component} disablePadding>
                  <ListItemButton
                    onClick={() => setCurrentComponent(component)}
                  >
                    <ListItemText primary={component} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </div>

        {/* Render the selected component */}
        <div style={{ flex: 1, paddingLeft: "10px" }}>{renderComponent()}</div>
      </div>
    </div>
  )
}

export default App
