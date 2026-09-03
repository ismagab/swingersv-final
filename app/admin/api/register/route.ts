import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    if (
      data.whatsappEsposo &&
      data.whatsappEsposa &&
      String(data.whatsappEsposo).trim() === String(data.whatsappEsposa).trim()
    ) {
      return NextResponse.json(
        { success: false, error: "El WhatsApp de esposo y esposa no pueden ser el mismo número." },
        { status: 400 }
      )
    }

    const emailBody = `
=== NUEVA SOLICITUD DE PAREJA - SwingerSV ===

--- DATOS DE LA PAREJA ---
Nombre Esposo: ${data.nombreEsposo}
Nombre Esposa: ${data.nombreEsposa}
WhatsApp Esposo: ${data.whatsappEsposo}
WhatsApp Esposa: ${data.whatsappEsposa}
Edad Esposo: ${data.edadEsposo}
Edad Esposa: ${data.edadEsposa}
Departamento: ${data.departamento}

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
        subject: `Nueva Solicitud de Pareja - SwingerSV: ${data.nombreEsposo} & ${data.nombreEsposa}`,
        from_name: "SwingerSV Website",
        to: "ismagabsv@gmail.com",
        message: emailBody,
        name: `${data.nombreEsposo} & ${data.nombreEsposa}`,
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
