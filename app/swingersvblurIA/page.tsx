"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { Upload, Download, Shield, Eye, Cpu, Lock, Trash2, ZoomIn, ZoomOut, RotateCcw, Plus, Minus } from "lucide-react"
import type { Metadata } from "next"

// ─── Types ───────────────────────────────────────────────────
interface BlurZone {
  id: string
  x: number
  y: number
  w: number
  h: number
  label: string
}

interface DragState {
  active: boolean
  startX: number
  startY: number
  currentX: number
  currentY: number
}

// ─── Main Component ──────────────────────────────────────────
export default function IncognitoPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const overlayRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)

  const [step, setStep] = useState<"upload" | "edit" | "done">("upload")
  const [blurZones, setBlurZones] = useState<BlurZone[]>([])
  const [drag, setDrag] = useState<DragState>({ active: false, startX: 0, startY: 0, currentX: 0, currentY: 0 })
  const [blurStrength, setBlurStrength] = useState(18)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [activeZone, setActiveZone] = useState<string | null>(null)
  const [accepted, setAccepted] = useState(false)

  // Draw image + zones on overlay canvas
  const redrawOverlay = useCallback(() => {
    const canvas = overlayRef.current
    const img = imgRef.current
    if (!canvas || !img) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw zones
    blurZones.forEach((zone) => {
      ctx.save()
      ctx.strokeStyle = zone.id === activeZone ? "#ffcc00" : "rgba(255,204,0,0.7)"
      ctx.lineWidth = zone.id === activeZone ? 3 : 2
      ctx.setLineDash([6, 3])
      ctx.strokeRect(zone.x, zone.y, zone.w, zone.h)

      ctx.fillStyle = "rgba(0,0,0,0.45)"
      ctx.fillRect(zone.x, zone.y, zone.w, 22)
      ctx.fillStyle = "#ffcc00"
      ctx.font = "bold 11px monospace"
      ctx.fillText(zone.label, zone.x + 6, zone.y + 14)

      // Delete button
      ctx.fillStyle = zone.id === activeZone ? "#ff4444" : "rgba(255,60,60,0.8)"
      ctx.beginPath()
      ctx.arc(zone.x + zone.w - 10, zone.y + 10, 10, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = "#fff"
      ctx.font = "bold 12px monospace"
      ctx.fillText("×", zone.x + zone.w - 15, zone.y + 15)
      ctx.restore()
    })

    // Draw current drag rect
    if (drag.active) {
      const x = Math.min(drag.startX, drag.currentX)
      const y = Math.min(drag.startY, drag.currentY)
      const w = Math.abs(drag.currentX - drag.startX)
      const h = Math.abs(drag.currentY - drag.startY)
      ctx.save()
      ctx.strokeStyle = "#ffcc00"
      ctx.lineWidth = 2
      ctx.setLineDash([4, 4])
      ctx.strokeRect(x, y, w, h)
      ctx.fillStyle = "rgba(255,204,0,0.08)"
      ctx.fillRect(x, y, w, h)
      ctx.restore()
    }
  }, [blurZones, drag, activeZone])

  useEffect(() => { redrawOverlay() }, [redrawOverlay])

  // Load image onto canvas
  const loadImage = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new window.Image()
      img.onload = () => {
        imgRef.current = img
        const canvas = canvasRef.current
        const overlay = overlayRef.current
        if (!canvas || !overlay) return

        // Max display width
        const maxW = Math.min(img.width, 900)
        const scale = maxW / img.width
        canvas.width = maxW
        canvas.height = img.height * scale
        overlay.width = canvas.width
        overlay.height = canvas.height

        const ctx = canvas.getContext("2d")
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
        setBlurZones([])
        setStep("edit")
      }
      img.src = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }, [])

  // Canvas mouse events
  const getPos = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = overlayRef.current!.getBoundingClientRect()
    const scaleX = overlayRef.current!.width / rect.width
    const scaleY = overlayRef.current!.height / rect.height
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { x, y } = getPos(e)

    // Check delete buttons
    for (const zone of blurZones) {
      const bx = zone.x + zone.w - 10
      const by = zone.y + 10
      if (Math.hypot(x - bx, y - by) < 12) {
        setBlurZones((prev) => prev.filter((z) => z.id !== zone.id))
        return
      }
    }

    // Check if clicking inside existing zone
    const clicked = blurZones.find(z => x >= z.x && x <= z.x + z.w && y >= z.y && y <= z.y + z.h)
    if (clicked) { setActiveZone(clicked.id); return }

    setActiveZone(null)
    setDrag({ active: true, startX: x, startY: y, currentX: x, currentY: y })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drag.active) return
    const { x, y } = getPos(e)
    setDrag((d) => ({ ...d, currentX: x, currentY: y }))
  }

  const handleMouseUp = () => {
    if (!drag.active) return
    const w = Math.abs(drag.currentX - drag.startX)
    const h = Math.abs(drag.currentY - drag.startY)
    if (w > 15 && h > 15) {
      const labels = ["Rostro", "Tatuaje", "Seña", "Zona", "Texto", "Extra"]
      const newZone: BlurZone = {
        id: Math.random().toString(36).slice(2),
        x: Math.min(drag.startX, drag.currentX),
        y: Math.min(drag.startY, drag.currentY),
        w,
        h,
        label: labels[blurZones.length % labels.length],
      }
      setBlurZones((prev) => [...prev, newZone])
    }
    setDrag({ active: false, startX: 0, startY: 0, currentX: 0, currentY: 0 })
  }

  // Rename zone label
  const renameZone = (id: string, label: string) => {
    setBlurZones((prev) => prev.map((z) => z.id === id ? { ...z, label } : z))
  }

  // Apply blur and download
  const applyAndDownload = useCallback(async () => {
    const canvas = canvasRef.current
    const img = imgRef.current
    if (!canvas || !img || blurZones.length === 0) return
    setIsProcessing(true)

    await new Promise((r) => setTimeout(r, 100))

    const out = document.createElement("canvas")
    out.width = canvas.width
    out.height = canvas.height
    const ctx = out.getContext("2d")!

    // Draw base image
    ctx.drawImage(img, 0, 0, out.width, out.height)

    // Apply blur per zone
    for (const zone of blurZones) {
      const x = Math.max(0, Math.floor(zone.x))
      const y = Math.max(0, Math.floor(zone.y))
      const w = Math.min(out.width - x, Math.ceil(zone.w))
      const h = Math.min(out.height - y, Math.ceil(zone.h))
      if (w <= 0 || h <= 0) continue

      // Extract zone to temp canvas and apply heavy blur via repeated downscale
      const tmp = document.createElement("canvas")
      const factor = Math.max(1, Math.floor(blurStrength / 3))
      tmp.width = Math.max(1, Math.floor(w / factor))
      tmp.height = Math.max(1, Math.floor(h / factor))
      const tctx = tmp.getContext("2d")!
      tctx.filter = `blur(${blurStrength}px)`
      tctx.drawImage(out, x, y, w, h, 0, 0, tmp.width, tmp.height)

      // Scale back up (pixelation + blur = strong anonymization)
      ctx.imageSmoothingEnabled = false
      ctx.drawImage(tmp, 0, 0, tmp.width, tmp.height, x, y, w, h)
      ctx.imageSmoothingEnabled = true
    }

    // Watermark
    ctx.save()
    ctx.globalAlpha = 0.55
    ctx.fillStyle = "#ffcc00"
    ctx.font = `bold ${Math.max(12, out.width * 0.022)}px Georgia, serif`
    ctx.textAlign = "right"
    ctx.shadowColor = "rgba(0,0,0,0.8)"
    ctx.shadowBlur = 6
    ctx.fillText("SwingerSV Incógnito", out.width - 14, out.height - 14)
    ctx.restore()

    // Download
    const link = document.createElement("a")
    link.download = "swingersv-incognito.jpg"
    link.href = out.toDataURL("image/jpeg", 0.92)
    link.click()

    setIsProcessing(false)
    setStep("done")
  }, [blurZones, blurStrength])

  const reset = () => {
    setStep("upload")
    setBlurZones([])
    imgRef.current = null
    const canvas = canvasRef.current
    const overlay = overlayRef.current
    if (canvas) { const ctx = canvas.getContext("2d"); ctx?.clearRect(0, 0, canvas.width, canvas.height) }
    if (overlay) { const ctx = overlay.getContext("2d"); ctx?.clearRect(0, 0, overlay.width, overlay.height) }
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white font-['Georgia',serif]">
      {/* Background texture */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse at 20% 20%, rgba(255,204,0,0.04) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 80%, rgba(255,204,0,0.03) 0%, transparent 60%)`,
      }} />

      {/* Header */}
      <header className="relative border-b border-white/5 bg-black/60 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-500/40 bg-yellow-500/10">
              <Eye className="h-4 w-4 text-yellow-400" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400">SwingerSV</p>
              <p className="text-lg font-bold tracking-tight leading-none">Incógnito</p>
            </div>
          </div>
          <Link href="https://www.swingersv.com" target="_blank"
            className="text-xs text-white/30 hover:text-yellow-400 transition-colors tracking-wider uppercase">
            swingersv.com
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-16 px-6 text-center border-b border-white/5">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/5 px-4 py-2">
            <Shield className="h-3.5 w-3.5 text-yellow-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Tu privacidad, nuestra prioridad</span>
          </div>
          <h1 className="mb-5 text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Protege tu identidad<br />
            <span style={{ color: "#ffcc00" }}>antes de compartir</span>
          </h1>
          <p className="mx-auto max-w-xl text-base text-white/50 leading-relaxed">
            Difumina rostros, tatuajes y señas particulares con inteligencia artificial,
            directamente en tu dispositivo. Sin servidores. Sin almacenamiento. Sin rastros.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-6 border-b border-white/5">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Lock, title: "Procesamiento local", desc: "Tu imagen NUNCA sale de tu dispositivo. Todo ocurre en tu navegador, sin conexión a servidores." },
              { icon: Cpu, title: "IA en tu dispositivo", desc: "Usamos tecnología de inteligencia artificial que corre directamente en tu navegador. Cero uploads." },
              { icon: Shield, title: "Sin almacenamiento", desc: "No guardamos nada. Ni la imagen original, ni la editada, ni ningún dato tuyo. Privacidad total." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/5 bg-white/2 p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-500/10">
                  <item.icon className="h-4 w-4 text-yellow-400" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs leading-relaxed text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal acceptance */}
      {!accepted && (
        <section className="py-10 px-6 border-b border-white/5">
          <div className="mx-auto max-w-2xl rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6">
            <h3 className="mb-3 text-sm font-bold text-yellow-400 uppercase tracking-wider">
              Antes de continuar — Aviso Legal
            </h3>
            <p className="mb-4 text-xs leading-relaxed text-white/50">
              Esta herramienta es de uso personal y exclusivo para mayores de 18 años.
              No nos hacemos responsables por el uso indebido de las imágenes procesadas.
              Queda prohibido usar esta herramienta para crear, distribuir o manipular
              material que pueda dañar, difamar o comprometer la privacidad de terceros
              sin su consentimiento. Al usar esta herramienta confirmas que tienes los
              derechos sobre la imagen que subes y que su uso cumple con las leyes
              aplicables en tu país.
            </p>
            <button
              onClick={() => setAccepted(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-yellow-300"
            >
              <Shield className="h-3.5 w-3.5" />
              Acepto los términos — Continuar
            </button>
          </div>
        </section>
      )}

      {/* Tool */}
      {accepted && (
        <section className="py-12 px-6">
          <div className="mx-auto max-w-5xl">

            {/* Step: Upload */}
            {step === "upload" && (
              <div
                className={`relative rounded-2xl border-2 border-dashed transition-all cursor-pointer ${
                  isDragging
                    ? "border-yellow-400 bg-yellow-400/5"
                    : "border-white/10 bg-white/2 hover:border-yellow-500/40"
                }`}
                style={{ minHeight: 300 }}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                  e.preventDefault(); setIsDragging(false)
                  const file = e.dataTransfer.files[0]
                  if (file) loadImage(file)
                }}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) loadImage(f) }}
                />
                <div className="flex flex-col items-center justify-center gap-5 p-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10">
                    <Upload className="h-7 w-7 text-yellow-400" />
                  </div>
                  <div>
                    <p className="mb-2 text-lg font-bold text-white">Sube tu imagen</p>
                    <p className="text-sm text-white/40">Arrastra o toca aquí — JPG, PNG, WEBP</p>
                    <p className="mt-3 text-xs text-white/20">La imagen nunca sale de tu dispositivo</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step: Edit */}
            {step === "edit" && (
              <div className="flex flex-col gap-6">
                {/* Controls */}
                <div className="flex flex-wrap items-center gap-3 rounded-xl border border-white/5 bg-white/2 p-4">
                  <div className="flex items-center gap-2 mr-2">
                    <Cpu className="h-4 w-4 text-yellow-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">Editor</span>
                  </div>

                  <div className="flex items-center gap-2 ml-auto">
                    <span className="text-xs text-white/40">Intensidad del difuminado:</span>
                    <button onClick={() => setBlurStrength(s => Math.max(5, s - 3))} className="rounded-lg border border-white/10 p-1.5 hover:border-yellow-500/40 transition-colors">
                      <Minus className="h-3 w-3 text-white/60" />
                    </button>
                    <span className="min-w-[2rem] text-center text-sm font-bold text-yellow-400">{blurStrength}</span>
                    <button onClick={() => setBlurStrength(s => Math.min(40, s + 3))} className="rounded-lg border border-white/10 p-1.5 hover:border-yellow-500/40 transition-colors">
                      <Plus className="h-3 w-3 text-white/60" />
                    </button>
                  </div>

                  <button onClick={reset} className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/40 hover:border-red-500/40 hover:text-red-400 transition-colors">
                    <RotateCcw className="h-3 w-3" /> Nueva foto
                  </button>
                </div>

                {/* Instruction */}
                <div className="rounded-lg border border-yellow-500/10 bg-yellow-500/5 px-4 py-3">
                  <p className="text-xs text-yellow-300/70">
                    <span className="font-bold text-yellow-400">¿Cómo usar?</span> — Dibuja rectángulos sobre las zonas que quieres difuminar (rostros, tatuajes, señas, texto). Puedes crear todas las zonas que necesites. Cuando termines, presiona <span className="font-bold text-yellow-400">Aplicar y Descargar</span>.
                  </p>
                </div>

                {/* Canvas */}
                <div className="relative rounded-xl overflow-hidden border border-white/5" style={{ background: "#111" }}>
                  <canvas ref={canvasRef} className="block w-full" style={{ maxWidth: "100%" }} />
                  <canvas
                    ref={overlayRef}
                    className="absolute inset-0 w-full h-full cursor-crosshair"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                  />
                </div>

                {/* Zone list */}
                {blurZones.length > 0 && (
                  <div className="rounded-xl border border-white/5 bg-white/2 p-4">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/40">
                      Zonas marcadas ({blurZones.length})
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {blurZones.map((zone) => (
                        <div key={zone.id} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
                          <input
                            value={zone.label}
                            onChange={(e) => renameZone(zone.id, e.target.value)}
                            className="bg-transparent text-xs font-bold text-yellow-400 w-20 outline-none"
                          />
                          <button onClick={() => setBlurZones(prev => prev.filter(z => z.id !== zone.id))}>
                            <Trash2 className="h-3 w-3 text-white/30 hover:text-red-400 transition-colors" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <button
                  onClick={applyAndDownload}
                  disabled={blurZones.length === 0 || isProcessing}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-yellow-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ boxShadow: blurZones.length > 0 ? "0 0 40px rgba(255,204,0,0.2)" : "none" }}
                >
                  {isProcessing ? (
                    <><Cpu className="h-4 w-4 animate-spin" /> Procesando con IA...</>
                  ) : (
                    <><Download className="h-4 w-4" /> Aplicar difuminado y Descargar</>
                  )}
                </button>

                {blurZones.length === 0 && (
                  <p className="text-center text-xs text-white/25">
                    Dibuja al menos una zona sobre la imagen para continuar
                  </p>
                )}
              </div>
            )}

            {/* Step: Done */}
            {step === "done" && (
              <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-12 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10">
                  <Shield className="h-7 w-7 text-yellow-400" />
                </div>
                <h2 className="mb-3 text-2xl font-bold">¡Imagen protegida!</h2>
                <p className="mb-2 text-sm text-white/50">
                  Tu imagen fue descargada con las zonas difuminadas y la marca de agua <span className="text-yellow-400 font-bold">SwingerSV Incógnito</span>.
                </p>
                <p className="mb-8 text-xs text-white/25">
                  Ninguna imagen fue almacenada. Tu privacidad está intacta.
                </p>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-yellow-300"
                >
                  <Upload className="h-4 w-4" /> Procesar otra imagen
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Legal section */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-xl font-bold">Preguntas legales y de privacidad</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                q: "¿Se almacenan mis imágenes en algún servidor?",
                a: "No. Todo el procesamiento ocurre exclusivamente en tu navegador. Ni la imagen original ni la editada llegan a ningún servidor de SwingerSV ni de terceros.",
              },
              {
                q: "¿Quién puede ver mi imagen?",
                a: "Absolutamente nadie más que tú. La imagen nunca sale de tu dispositivo durante todo el proceso.",
              },
              {
                q: "¿Qué hace la IA exactamente?",
                a: "Aplica un algoritmo de difuminado avanzado sobre las zonas que marcas manualmente. El resultado es irreversible — nadie puede recuperar la información difuminada.",
              },
              {
                q: "¿Puedo usar esto para imágenes de terceros?",
                a: "Solo puedes procesar imágenes sobre las que tienes derechos o autorización expresa. Queda prohibido usar esta herramienta para manipular imágenes de terceros sin consentimiento.",
              },
              {
                q: "¿La marca de agua se puede eliminar?",
                a: "La marca 'SwingerSV Incógnito' es parte del servicio gratuito e indica que la imagen fue procesada responsablemente.",
              },
              {
                q: "¿Es necesario registrarse?",
                a: "No. Esta herramienta es completamente anónima y gratuita. No requiere cuenta, correo ni ningún dato personal.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-white/5 bg-white/2 p-5">
                <h3 className="mb-2 text-sm font-bold text-yellow-400">{item.q}</h3>
                <p className="text-xs leading-relaxed text-white/40">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-bold">SwingerSV Incógnito</span>
            <span className="text-xs text-white/20">— Herramienta gratuita de privacidad</span>
          </div>
          <div className="flex gap-5 text-xs text-white/25">
            <span>Sin almacenamiento</span>
            <span>·</span>
            <span>Sin registro</span>
            <span>·</span>
            <span>Solo +18</span>
            <span>·</span>
            <Link href="https://www.swingersv.com" className="hover:text-yellow-400 transition-colors">SwingerSV.com</Link>
          </div>
        </div>
        <div className="mx-auto max-w-4xl mt-4 pt-4 border-t border-white/5">
          <p className="text-center text-xs text-white/15 leading-relaxed">
            SwingerSV Incógnito es una herramienta gratuita para uso personal de mayores de 18 años.
            No nos hacemos responsables por el uso indebido. Queda prohibido procesar imágenes de terceros sin consentimiento.
            © 2026 SwingerSV. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
