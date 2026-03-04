import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const emailBody = `
=== NUEVA SOLICITUD DE PAREJA - SwingerSV ===

--- DATOS DE LA PAREJA ---
Nombre Persona 1: ${data.name1}
Nombre Persona 2: ${data.name2}
WhatsApp Persona 1: ${data.whatsapp1}
WhatsApp Persona 2: ${data.whatsapp2}
Edad Persona 1: ${data.age1}
Edad Persona 2: ${data.age2}

--- SOBRE SU RELACION ---
Tiempo de relacion/matrimonio: ${data.relationshipTime}
Fantasias cumplidas / Experiencia: ${data.fantasies}

--- SALUD SEXUAL ---
Ultimo examen de ETS: ${data.etsExam}
Compromiso de salud: ${data.healthCommitment}

--- REDES SOCIALES ---
${data.socialMedia || "No proporcionaron redes sociales"}

--- CONSENTIMIENTO ---
Ambos de acuerdo: SI
Mayores de 18 y aceptan reglas: SI

Fecha de solicitud: ${new Date().toLocaleString("es-SV", { timeZone: "America/El_Salvador" })}
    `.trim()

    // Send email using fetch to a simple email service
    // Using Formspree-style or direct SMTP relay
    // For production, you'd integrate with SendGrid, Resend, etc.
    // For now we'll use a simple mailto-compatible API
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY || "",
        subject: `Nueva Solicitud de Pareja - SwingerSV: ${data.name1} & ${data.name2}`,
        from_name: "SwingerSV Website",
        to: "ismagabsv@gmail.com",
        message: emailBody,
        name: `${data.name1} & ${data.name2}`,
        email: "noreply@swingersv.com",
      }),
    })

    if (response.ok) {
      return NextResponse.json({ success: true })
    }

    // Fallback: log the data if email service fails
    console.log("[SwingerSV] Registration data (email service unavailable):")
    console.log(emailBody)

    return NextResponse.json({ success: true, note: "logged" })
  } catch (error) {
    console.error("[SwingerSV] Registration error:", error)
    return NextResponse.json(
      { success: false, error: "Error al procesar la solicitud" },
      { status: 500 }
    )
  }
}
