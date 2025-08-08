import {NextResponse} from "next/server";

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {nombre, empresa, email, mensaje, captcha} = body;
    
    if (!captcha) {
      return NextResponse.json({error: "Captcha token missing"}, {status: 400});
    }
    
    // Validar el token del captcha con Cloudflare
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${TURNSTILE_SECRET}&response=${captcha}`,
    });
    
    const data = await response.json();
    
    if (!data.success) {
      return NextResponse.json({error: "Captcha inválido", details: data}, {status: 400});
    }
    
    console.log("Captcha validado exitosamente:", data);
    console.log("Datos del formulario:", {nombre, empresa, email, mensaje});
    // aqui se planea enviar a un servicio externo
    
    return NextResponse.json({ok: true});
  } catch (error) {
    console.error("Error en el endpoint /api/contact:", error);
    return NextResponse.json({error: "Error inesperado"}, {status: 500});
  }
}
