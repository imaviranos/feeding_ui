import React, { useState } from "react";
import "./App.css";

function App() {
  const [baby, setBaby] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!baby || !amount) {
      setMessage("יש למלא את כל השדות");
      return;
    }

    setMessage("שומר...");
    try {
      // TODO: send to backend Google Sheets API
      await new Promise((res) => setTimeout(res, 800)); // simulate delay
      setMessage(`${baby} אכל/ה ${amount} מ"ל`);
      setAmount("");
    } catch {
      setMessage("קרתה שגיאה בשליחה");
    }
  };

  return (
    <div className="container">
      <h1>סוכן האכלה 👶</h1>
      <label>בחר תינוק:</label>
      <select value={baby} onChange={(e) => setBaby(e.target.value)}>
        <option value="">בחר שם</option>
        <option value="נועה">נועה</option>
        <option value="אורי">אורי</option>
      </select>

      <label>כמות (מ"ל):</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="לדוגמה: 90"
      />

      <button onClick={handleSubmit}>שמור האכלה</button>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
