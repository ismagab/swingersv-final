"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { Upload, Download, Shield, Cpu, Lock, Trash2, RotateCcw, Plus, Minus, ImageIcon, CheckCircle, AlertCircle } from "lucide-react"

// ── Piña con antifaz ─────────────────────────────────────────
function PineappleLogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hojas */}
      <path d="M50 4 C47 14 44 21 46 29 L50 27 L54 29 C56 21 53 14 50 4Z" fill="#43A047" />
      <path d="M38 7 C33 16 32 24 35 31 L39 28 C38 21 37 14 38 7Z" fill="#66BB6A" />
      <path d="M62 7 C67 16 68 24 65 31 L61 28 C62 21 63 14 62 7Z" fill="#66BB6A" />
      <path d="M27 13 C21 21 21 29 25 35 L29 32 C27 26 26 20 27 13Z" fill="#81C784" />
      <path d="M73 13 C79 21 79 29 75 35 L71 32 C73 26 74 20 73 13Z" fill="#81C784" />
      {/* Cuerpo */}
      <ellipse cx="50" cy="78" rx="27" ry="37" fill="#FFB300" />
      {/* Textura rombos */}
      <g stroke="#E65100" strokeWidth="0.9" fill="none" opacity="0.4">
        <path d="M40 55 L50 50 L60 55 L50 60Z" />
        <path d="M30 65 L40 60 L50 65 L40 70Z" /><path d="M50 65 L60 60 L70 65 L60 70Z" />
        <path d="M35 75 L45 70 L55 75 L45 80Z" /><path d="M55 75 L65 70 L71 75 L65 80Z" />
        <path d="M30 85 L40 80 L50 85 L40 90Z" /><path d="M50 85 L60 80 L70 85 L60 90Z" />
        <path d="M36 95 L46 90 L56 95 L46 100Z" /><path d="M56 95 L63 90 L68 95 L63 100Z" />
      </g>
      {/* Antifaz — base negra */}
      <path d="M21 68 C21 62 26 57 33 57 C37 57 40 59 43 62 C45 64 47 65 50 65 C53 65 55 64 57 62 C60 59 63 57 67 57 C74 57 79 62 79 68 C79 73 75 76 71 75 C67 74 64 71 61 70 C58 69 54 68 50 68 C46 68 42 69 39 70 C36 71 33 74 29 75 C25 76 21 73 21 68Z"
        fill="#111" stroke="#ffcc00" strokeWidth="1.5" />
      {/* Ojo izquierdo */}
      <ellipse cx="34" cy="67" rx="7" ry="5" fill="#FFB300" />
      <ellipse cx="34" cy="67" rx="3.5" ry="3.5" fill="#111" />
      <circle cx="32" cy="65.5" r="1.2" fill="white" opacity="0.95" />
      {/* Ojo derecho */}
      <ellipse cx="66" cy="67" rx="7" ry="5" fill="#FFB300" />
      <ellipse cx="66" cy="67" rx="3.5" ry="3.5" fill="#111" />
      <circle cx="64" cy="65.5" r="1.2" fill="white" opacity="0.95" />
      {/* Plumas izq */}
      <path d="M21 68 C17 63 14 57 17 52 C19 56 20 61 21 68Z" fill="#ffcc00" opacity="0.9" />
      <path d="M21 68 C15 65 11 59 13 53 C16 56 18 62 21 68Z" fill="#ff9900" opacity="0.65" />
      {/* Plumas der */}
      <path d="M79 68 C83 63 86 57 83 52 C81 56 80 61 79 68Z" fill="#ffcc00" opacity="0.9" />
      <path d="M79 68 C85 65 89 59 87 53 C84 56 82 62 79 68Z" fill="#ff9900" opacity="0.65" />
      {/* Ribete dorado */}
      <path d="M21 68 C21 62 26 57 33 57 C37 57 40 59 43 62 C45 64 47 65 50 65 C53 65 55 64 57 62 C60 59 63 57 67 57 C74 57 79 62 79 68"
        fill="none" stroke="#ffcc00" strokeWidth="2" />
      {/* Sonrisa */}
      <path d="M43 83 Q50 89 57 83" stroke="#E65100" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

// ── Types ─────────────────────────────────────────────────────
interface BlurZone { id: string; x: number; y: number; w: number; h: number; label: string }
interface DragState { active: boolean; startX: number; startY: number; currentX: number; currentY: number }

// ── Main ──────────────────────────────────────────────────────
export default function IncognitoPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const overlayRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dropZoneRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const [step, setStep] = useState<"upload" | "edit" | "done">("upload")
  const [blurZones, setBlurZones] = useState<BlurZone[]>([])
  const [drag, setDrag] = useState<DragState>({ active: false, startX: 0, startY: 0, currentX: 0, currentY: 0 })
  const [blurStrength, setBlurStrength] = useState(20)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [activeZone, setActiveZone] = useState<string | null>(null)
  const [accepted, setAccepted] = useState(false)
  const [uploadError, setUploadError] = useState("")

  // Redraw overlay
  const redrawOverlay = useCallback(() => {
    const canvas = overlayRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    blurZones.forEach(zone => {
      ctx.save()
      ctx.strokeStyle = zone.id === activeZone ? "#ffcc00" : "rgba(255,204,0,0.75)"
      ctx.lineWidth = zone.id === activeZone ? 3 : 2
      ctx.setLineDash([6, 3])
      ctx.strokeRect(zone.x, zone.y, zone.w, zone.h)
      ctx.fillStyle = "rgba(0,0,0,0.55)"
      ctx.fillRect(zone.x, zone.y, zone.w, 22)
      ctx.fillStyle = "#ffcc00"
      ctx.font = "bold 11px monospace"
      ctx.fillText(zone.label, zone.x + 6, zone.y + 14)
      ctx.fillStyle = "#ff4444"
      ctx.beginPath()
      ctx.arc(zone.x + zone.w - 10, zone.y + 10, 10, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = "#fff"
      ctx.font = "bold 14px monospace"
      ctx.fillText("×", zone.x + zone.w - 15, zone.y + 15)
      ctx.restore()
    })
    if (drag.active) {
      const x = Math.min(drag.startX, drag.currentX)
      const y = Math.min(drag.startY, drag.currentY)
      const w = Math.abs(drag.currentX - drag.startX)
      const h = Math.abs(drag.currentY - drag.startY)
      ctx.save()
      ctx.strokeStyle = "#ffcc00"
      ctx.lineWidth = 2
      ctx.setLineDash([5, 4])
      ctx.strokeRect(x, y, w, h)
      ctx.fillStyle = "rgba(255,204,0,0.07)"
      ctx.fillRect(x, y, w, h)
      ctx.restore()
    }
  }, [blurZones, drag, activeZone])

  useEffect(() => { redrawOverlay() }, [redrawOverlay])

  // Load image — works with both file input and drag & drop
  const loadImage = useCallback((file: File) => {
    setUploadError("")
    if (!file || !file.type.startsWith("image/")) {
      setUploadError("El archivo debe ser una imagen (JPG, PNG, WEBP, GIF)")
      return
    }
    if (file.size > 20 * 1024 * 1024) {
      setUploadError("La imagen es muy grande. Máximo 20MB.")
      return
    }
    const reader = new FileReader()
    reader.onerror = () => setUploadError("No se pudo leer el archivo. Intenta de nuevo.")
    reader.onload = (e) => {
      const src = e.target?.result as string
      if (!src) { setUploadError("Error al cargar la imagen."); return }
      const img = new window.Image()
      img.onerror = () => setUploadError("No se pudo procesar la imagen.")
      img.onload = () => {
        imgRef.current = img
        const canvas = canvasRef.current
        const overlay = overlayRef.current
        if (!canvas || !overlay) return
        const maxW = Math.min(img.width, 900)
        const scale = maxW / img.width
        canvas.width = maxW
        canvas.height = Math.round(img.height * scale)
        overlay.width = canvas.width
        overlay.height = canvas.height
        canvas.getContext("2d")?.drawImage(img, 0, 0, canvas.width, canvas.height)
        setBlurZones([])
        setActiveZone(null)
        setStep("edit")
      }
      img.src = src
    }
    reader.readAsDataURL(file)
  }, [])

  // File input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) loadImage(file)
    e.target.value = "" // reset so same file can be re-selected
  }

  // Drag & drop on drop zone
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) loadImage(file)
  }

  // Canvas mouse events
  const getPos = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = overlayRef.current!.getBoundingClientRect()
    return {
      x: (e.clientX - rect.left) * (overlayRef.current!.width / rect.width),
      y: (e.clientY - rect.top) * (overlayRef.current!.height / rect.height),
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getPos(e)
    // Check delete buttons
    for (const zone of blurZones) {
      if (Math.hypot(x - (zone.x + zone.w - 10), y - (zone.y + 10)) < 13) {
        setBlurZones(prev => prev.filter(z => z.id !== zone.id)); return
      }
    }
    // Click existing zone
    const hit = blurZones.find(z => x >= z.x && x <= z.x + z.w && y >= z.y && y <= z.y + z.h)
    if (hit) { setActiveZone(hit.id); return }
    setActiveZone(null)
    setDrag({ active: true, startX: x, startY: y, currentX: x, currentY: y })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drag.active) return
    const { x, y } = getPos(e)
    setDrag(d => ({ ...d, currentX: x, currentY: y }))
  }

  const handleMouseUp = () => {
    if (!drag.active) return
    const w = Math.abs(drag.currentX - drag.startX)
    const h = Math.abs(drag.currentY - drag.startY)
    if (w > 15 && h > 15) {
      const labels = ["Rostro 😶", "Tatuaje", "Seña", "Zona", "Texto", "Extra"]
      setBlurZones(prev => [...prev, {
        id: Math.random().toString(36).slice(2),
        x: Math.min(drag.startX, drag.currentX),
        y: Math.min(drag.startY, drag.currentY),
        w, h, label: labels[prev.length % labels.length],
      }])
    }
    setDrag({ active: false, startX: 0, startY: 0, currentX: 0, currentY: 0 })
  }

  // Apply blur + watermark + download
  const applyAndDownload = useCallback(async () => {
    const canvas = canvasRef.current
    const img = imgRef.current
    if (!canvas || !img || blurZones.length === 0) return
    setIsProcessing(true)
    await new Promise(r => setTimeout(r, 80))
    const out = document.createElement("canvas")
    out.width = canvas.width
    out.height = canvas.height
    const ctx = out.getContext("2d")!
    ctx.drawImage(img, 0, 0, out.width, out.height)
    for (const zone of blurZones) {
      const x = Math.max(0, Math.floor(zone.x))
      const y = Math.max(0, Math.floor(zone.y))
      const w = Math.min(out.width - x, Math.ceil(zone.w))
      const h = Math.min(out.height - y, Math.ceil(zone.h))
      if (w <= 0 || h <= 0) continue
      const tmp = document.createElement("canvas")
      const factor = Math.max(1, Math.floor(blurStrength / 3))
      tmp.width = Math.max(1, Math.floor(w / factor))
      tmp.height = Math.max(1, Math.floor(h / factor))
      const tctx = tmp.getContext("2d")!
      tctx.filter = `blur(${blurStrength}px)`
      tctx.drawImage(out, x, y, w, h, 0, 0, tmp.width, tmp.height)
      ctx.imageSmoothingEnabled = false
      ctx.drawImage(tmp, 0, 0, tmp.width, tmp.height, x, y, w, h)
      ctx.imageSmoothingEnabled = true
    }
    // Watermark
    const fs = Math.max(14, out.width * 0.022)
    ctx.save()
    ctx.globalAlpha = 0.55
    ctx.font = `bold ${fs}px Georgia, serif`
    ctx.textAlign = "right"
    ctx.shadowColor = "rgba(0,0,0,0.95)"
    ctx.shadowBlur = 8
    ctx.fillStyle = "#ffcc00"
    ctx.fillText("🍍 SwingerSV Incógnito", out.width - 14, out.height - 14)
    ctx.restore()
    const link = document.createElement("a")
    link.download = "swingersv-incognito.jpg"
    link.href = out.toDataURL("image/jpeg", 0.93)
    link.click()
    setIsProcessing(false)
    setStep("done")
  }, [blurZones, blurStrength])

  const reset = () => {
    setStep("upload"); setBlurZones([]); imgRef.current = null; setUploadError("")
    canvasRef.current?.getContext("2d")?.clearRect(0, 0, 9999, 9999)
    overlayRef.current?.getContext("2d")?.clearRect(0, 0, 9999, 9999)
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0f0f0f", color: "#fff", fontFamily: "'Segoe UI', Arial, sans-serif" }}>

      {/* Background */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 15% 15%, rgba(255,204,0,0.05) 0%, transparent 55%), radial-gradient(ellipse at 85% 85%, rgba(255,180,0,0.04) 0%, transparent 55%)" }} />

      {/* ── Header ── */}
      <header style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <PineappleLogo size={44} />
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.35em", color: "#ffcc00", textTransform: "uppercase" }}>SwingerSV</div>
              <div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1, color: "#fff" }}>Incógnito 🕵️</div>
            </div>
          </div>
          <Link href="https://www.swingersv.com" target="_blank"
            style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "0.1em" }}
            onMouseOver={e => (e.currentTarget.style.color = "#ffcc00")}
            onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}>
            swingersv.com ↗
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{ padding: "48px 24px 36px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999, border: "1px solid rgba(255,204,0,0.25)", background: "rgba(255,204,0,0.07)", padding: "6px 16px", marginBottom: 20 }}>
            <span style={{ fontSize: 16 }}>🍍</span>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#ffcc00", textTransform: "uppercase" }}>Herramienta gratuita de privacidad</span>
          </div>

          <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 16, fontFamily: "Georgia, serif" }}>
            Comparte sin miedo<br />
            <span style={{ color: "#ffcc00" }}>protege tu identidad 🕵️‍♀️</span>
          </h1>

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", marginBottom: 20 }}>
            ¿Quieren compartir fotos en redes sociales pero les preocupa ser reconocidos?
            SwingerSV Incógnito difumina rostros, tatuajes y señas particulares con IA
            para que disfruten el lifestyle con total discreción. 💚
          </p>

          {/* Trust badges */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {[
              { emoji: "🔒", text: "Sin almacenamiento" },
              { emoji: "📵", text: "Sin servidores" },
              { emoji: "👤", text: "Sin registro" },
              { emoji: "✅", text: "100% gratuito" },
            ].map(b => (
              <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 6, borderRadius: 8, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", padding: "6px 12px" }}>
                <span style={{ fontSize: 14 }}>{b.emoji}</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ padding: "36px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 20, fontWeight: 800, marginBottom: 24, color: "#ffcc00" }}>
            ¿Cómo funciona? 🤔
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { step: "01", emoji: "📸", title: "Sube tu foto", desc: "Arrastra o selecciona la imagen desde tu galería o cámara." },
              { step: "02", emoji: "✏️", title: "Marca las zonas", desc: "Dibuja rectángulos sobre rostros, tatuajes o señas que quieras ocultar." },
              { step: "03", emoji: "🤖", title: "IA aplica el difuminado", desc: "Nuestra IA procesa la imagen directamente en tu dispositivo." },
              { step: "04", emoji: "⬇️", title: "Descarga y comparte", desc: "Descarga la imagen protegida con marca 🍍 SwingerSV Incógnito." },
            ].map(item => (
              <div key={item.step} style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", padding: "20px 18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,204,0,0.5)", fontFamily: "monospace" }}>{item.step}</span>
                  <span style={{ fontSize: 24 }}>{item.emoji}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why use it (for the community) ── */}
      <section style={{ padding: "32px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,204,0,0.03)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>
            Hecho para parejas del lifestyle 💚
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.5)" }}>
            Sabemos que muchas parejas quieren compartir sus experiencias en Instagram, X, TikTok y otras redes
            pero les preocupa ser reconocidas. SwingerSV Incógnito nació exactamente para eso — para que
            puedan compartir libremente manteniendo su privacidad intacta. Tu imagen nunca sale de tu
            teléfono o computadora. Nadie más la ve. Ni nosotros. 🔒
          </p>
        </div>
      </section>

      {/* ── Legal acceptance ── */}
      {!accepted && (
        <section style={{ padding: "32px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: 640, margin: "0 auto", borderRadius: 16, border: "2px solid rgba(255,204,0,0.3)", background: "rgba(255,204,0,0.05)", padding: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <PineappleLogo size={40} />
              <div style={{ fontWeight: 700, color: "#ffcc00", fontSize: 15 }}>Antes de continuar</div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>
              Esta herramienta es exclusivamente para mayores de 18 años. No nos hacemos responsables
              por el uso indebido de las imágenes. Queda prohibido procesar imágenes de terceros sin
              su consentimiento. Al continuar confirmas que tienes los derechos sobre la imagen y que
              su uso cumple con las leyes de tu país.
            </p>
            <button onClick={() => setAccepted(true)}
              style={{ background: "#ffcc00", color: "#000", border: "none", borderRadius: 10, padding: "12px 28px", fontWeight: 800, fontSize: 13, cursor: "pointer", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: 8 }}>
              ✅ Acepto — ¡Empezar a proteger mis fotos!
            </button>
          </div>
        </section>
      )}

      {/* ── Tool ── */}
      {accepted && (
        <section style={{ padding: "32px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>

            {/* UPLOAD */}
            {step === "upload" && (
              <div>
                {/* Drop zone */}
                <div
                  ref={dropZoneRef}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={e => { e.preventDefault(); setIsDragging(true) }}
                  onDragEnter={e => { e.preventDefault(); setIsDragging(true) }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  style={{
                    borderRadius: 20,
                    border: `2px dashed ${isDragging ? "#ffcc00" : "rgba(255,255,255,0.15)"}`,
                    background: isDragging ? "rgba(255,204,0,0.06)" : "rgba(255,255,255,0.02)",
                    padding: "60px 24px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    minHeight: 280,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                  }}>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <PineappleLogo size={80} />
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
                      {isDragging ? "¡Suelta aquí tu imagen! 🎯" : "Sube tu foto aquí 📸"}
                    </div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
                      Arrastra y suelta, o toca para seleccionar desde tu galería
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.22)", marginTop: 8 }}>
                      JPG · PNG · WEBP · GIF — Máx 20MB
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, borderRadius: 10, background: "#ffcc00", color: "#000", padding: "10px 24px", fontWeight: 800, fontSize: 13 }}>
                    <ImageIcon size={16} /> Seleccionar imagen
                  </div>
                </div>

                {/* Error message */}
                {uploadError && (
                  <div style={{ marginTop: 16, borderRadius: 10, border: "1px solid rgba(255,80,80,0.4)", background: "rgba(255,80,80,0.08)", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                    <AlertCircle size={16} color="#ff6666" />
                    <span style={{ fontSize: 13, color: "#ff9999" }}>{uploadError}</span>
                  </div>
                )}

                {/* Privacy note */}
                <div style={{ marginTop: 20, borderRadius: 12, border: "1px solid rgba(255,204,0,0.15)", background: "rgba(255,204,0,0.04)", padding: "14px 18px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ fontSize: 20 }}>🔒</span>
                  <p style={{ fontSize: 12, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", margin: 0 }}>
                    <strong style={{ color: "#ffcc00" }}>100% privado:</strong> Tu imagen se procesa directamente
                    en tu dispositivo. No se envía a ningún servidor. Ni SwingerSV ni nadie más puede verla.
                  </p>
                </div>
              </div>
            )}

            {/* EDIT */}
            {step === "edit" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Toolbar */}
                <div style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", padding: "14px 18px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <PineappleLogo size={28} />
                    <span style={{ fontWeight: 700, color: "#ffcc00", fontSize: 13 }}>Editor Incógnito</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: "auto" }}>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>💪 Intensidad:</span>
                    <button onClick={() => setBlurStrength(s => Math.max(5, s - 3))}
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "4px 8px", color: "#fff", cursor: "pointer" }}>
                      <Minus size={12} />
                    </button>
                    <span style={{ fontWeight: 800, color: "#ffcc00", minWidth: 28, textAlign: "center" }}>{blurStrength}</span>
                    <button onClick={() => setBlurStrength(s => Math.min(40, s + 3))}
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "4px 8px", color: "#fff", cursor: "pointer" }}>
                      <Plus size={12} />
                    </button>
                  </div>

                  <button onClick={reset}
                    style={{ background: "rgba(255,80,80,0.08)", border: "1px solid rgba(255,80,80,0.2)", borderRadius: 8, padding: "6px 14px", color: "#ff9999", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                    <RotateCcw size={12} /> Nueva foto
                  </button>
                </div>

                {/* Tip */}
                <div style={{ borderRadius: 10, border: "1px solid rgba(255,204,0,0.15)", background: "rgba(255,204,0,0.05)", padding: "12px 16px" }}>
                  <p style={{ fontSize: 12, color: "rgba(255,220,100,0.8)", margin: 0, lineHeight: 1.6 }}>
                    ✏️ <strong style={{ color: "#ffcc00" }}>¿Cómo usar?</strong> Dibuja rectángulos sobre cada zona que quieras difuminar —
                    rostros, tatuajes, señas, textos. Puedes crear todas las zonas que necesites.
                    Toca la <strong style={{ color: "#ff6666" }}>✕ roja</strong> para eliminar una zona. Cuando termines presiona el botón amarillo.
                  </p>
                </div>

                {/* Canvas */}
                <div style={{ position: "relative", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)", background: "#111" }}>
                  <canvas ref={canvasRef} style={{ display: "block", width: "100%", maxWidth: "100%" }} />
                  <canvas ref={overlayRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", cursor: "crosshair" }}
                    onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} />
                </div>

                {/* Zones */}
                {blurZones.length > 0 && (
                  <div style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", padding: "14px 16px" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>
                      {blurZones.length} zona{blurZones.length > 1 ? "s" : ""} marcada{blurZones.length > 1 ? "s" : ""} ✅
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {blurZones.map(zone => (
                        <div key={zone.id} style={{ display: "flex", alignItems: "center", gap: 8, borderRadius: 8, border: "1px solid rgba(255,204,0,0.2)", background: "rgba(255,204,0,0.05)", padding: "5px 10px" }}>
                          <input value={zone.label} onChange={e => setBlurZones(prev => prev.map(z => z.id === zone.id ? { ...z, label: e.target.value } : z))}
                            style={{ background: "transparent", border: "none", outline: "none", color: "#ffcc00", fontWeight: 700, fontSize: 12, width: 90 }} />
                          <button onClick={() => setBlurZones(prev => prev.filter(z => z.id !== zone.id))}
                            style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,100,100,0.6)", padding: 0 }}>
                            <Trash2 size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <button onClick={applyAndDownload} disabled={blurZones.length === 0 || isProcessing}
                  style={{
                    background: blurZones.length > 0 ? "#ffcc00" : "rgba(255,204,0,0.2)",
                    color: blurZones.length > 0 ? "#000" : "rgba(255,255,255,0.3)",
                    border: "none", borderRadius: 14, padding: "16px 24px",
                    fontWeight: 800, fontSize: 15, cursor: blurZones.length > 0 ? "pointer" : "not-allowed",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 10, width: "100%",
                    boxShadow: blurZones.length > 0 ? "0 0 50px rgba(255,204,0,0.25)" : "none",
                    transition: "all 0.2s",
                  }}>
                  {isProcessing
                    ? <><Cpu size={18} style={{ animation: "spin 1s linear infinite" }} /> Procesando con IA... 🤖</>
                    : <><Download size={18} /> 🍍 Aplicar difuminado y Descargar</>}
                </button>

                {blurZones.length === 0 && (
                  <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.22)", marginTop: -8 }}>
                    👆 Dibuja al menos una zona sobre la imagen para continuar
                  </p>
                )}
              </div>
            )}

            {/* DONE */}
            {step === "done" && (
              <div style={{ borderRadius: 20, border: "2px solid rgba(255,204,0,0.3)", background: "rgba(255,204,0,0.05)", padding: 48, textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                  <PineappleLogo size={90} />
                </div>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🎉</div>
                <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 10 }}>¡Imagen protegida!</h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 8px" }}>
                  Tu imagen fue descargada con las zonas difuminadas y la marca de agua
                  <strong style={{ color: "#ffcc00" }}> 🍍 SwingerSV Incógnito</strong>.
                  ¡Ya puedes compartirla con total discreción! 😎
                </p>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.22)", marginBottom: 28 }}>
                  Ninguna imagen fue almacenada. Tu privacidad está intacta. 🔒
                </p>
                <button onClick={reset}
                  style={{ background: "#ffcc00", color: "#000", border: "none", borderRadius: 12, padding: "14px 32px", fontWeight: 800, fontSize: 14, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <Upload size={16} /> Proteger otra imagen
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── FAQ Legal ── */}
      <section style={{ padding: "40px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 20, fontWeight: 800, marginBottom: 24 }}>
            Preguntas frecuentes 🙋
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            {[
              { q: "¿Se guardan mis fotos en algún servidor?", a: "No. Todo ocurre en tu navegador. La imagen nunca sale de tu dispositivo. Ni SwingerSV ni nadie más tiene acceso a ella." },
              { q: "¿Quién puede ver mi imagen?", a: "Solo tú. La imagen no se envía a ningún lugar. Es procesada 100% localmente en tu teléfono o computadora." },
              { q: "¿Para qué sirve en el lifestyle?", a: "Para que parejas puedan compartir fotos en redes sociales (Instagram, X, TikTok) sin ser reconocidas por sus rostros, tatuajes o señas." },
              { q: "¿Es seguro subir fotos íntimas?", a: "Sí, desde el punto de vista de privacidad digital. La imagen nunca se transmite. Úsala responsablemente y solo con imágenes propias." },
              { q: "¿La marca de agua se puede quitar?", a: "La marca '🍍 SwingerSV Incógnito' es parte del servicio gratuito. Indica que la imagen fue procesada responsablemente." },
              { q: "¿Necesito crear una cuenta?", a: "No. Esta herramienta es completamente anónima y gratuita. Sin cuenta, sin correo, sin datos personales." },
            ].map(item => (
              <div key={item.q} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", padding: "16px 18px" }}>
                <div style={{ fontWeight: 700, color: "#ffcc00", fontSize: 13, marginBottom: 8 }}>{item.q}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", lineHeight: 1.65 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px", background: "rgba(0,0,0,0.4)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <PineappleLogo size={32} />
              <div>
                <div style={{ fontWeight: 800, fontSize: 14 }}>SwingerSV Incógnito</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>Herramienta gratuita de privacidad para parejas</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, fontSize: 12, color: "rgba(255,255,255,0.28)" }}>
              <span>🔒 Sin almacenamiento</span>
              <span>·</span>
              <span>👤 Sin registro</span>
              <span>·</span>
              <span>🔞 Solo +18</span>
              <span>·</span>
              <Link href="https://www.swingersv.com" style={{ color: "rgba(255,255,255,0.28)", textDecoration: "none" }}
                onMouseOver={e => (e.currentTarget.style.color = "#ffcc00")}
                onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.28)")}>
                SwingerSV.com
              </Link>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 14 }}>
            <p style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.18)", lineHeight: 1.7 }}>
              SwingerSV Incógnito es una herramienta gratuita para uso personal de mayores de 18 años.
              No nos hacemos responsables por el uso indebido. Queda prohibido procesar imágenes de
              terceros sin consentimiento expreso. © 2026 SwingerSV. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
