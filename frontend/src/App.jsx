import { useState } from "react"
function App() {
  const [prompt, setPrompt] = useState("")
  const [responses, setResponses] = useState(null)
  return (
    <div style={{ padding: "30px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>LLM Comparator</h1>

      <textarea
        placeholder="Enter your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows="5"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginTop: "20px",
        }}
      />

      <br /><br />

      <button
        onClick={async () => {
          console.log("clicked")
        const res = await fetch("http://127.0.0.1:8000/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
       })

        const data = await res.json()
        setResponses(data)
       }}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        }}
        >
        Compare
      </button>

      <div style={{ marginTop: "40px" }}>
  {responses && (
    <>
      <div style={{ border: "1px solid black", padding: "15px", marginBottom: "20px" }}>
        <h2>Gemini</h2>
        <p>{responses.gemini}</p>
      </div>

      <div style={{ border: "1px solid black", padding: "15px", marginBottom: "20px" }}>
        <h2>Qwen</h2>
        <p>{responses.qwen}</p>
      </div>

      <div style={{ border: "1px solid black", padding: "15px", marginBottom: "20px" }}>
        <h2>Llama</h2>
        <p>{responses.llama}</p>
      </div>

      <div style={{ border: "1px solid black", padding: "15px", marginBottom: "20px" }}>
        <h2>Mistral</h2>
        <p>{responses.mistral}</p>
      </div>
    </>
  )}
</div>
    </div>
  )
}

export default App