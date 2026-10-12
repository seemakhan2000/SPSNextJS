import { NextResponse } from "next/server";

function text(value) {
  return String(value || "").trim();
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  const form = await request.formData();

  if (text(form.get("companyWebsite"))) {
    return NextResponse.json({
      status: 1,
      msg: "Thank you. We will review your idea shortly.",
    });
  }

  const fullName = text(form.get("full_name"));
  const email = text(form.get("email"));
  const phone = text(form.get("phone"));
  const projectName = text(form.get("project_name"));
  const vision = text(form.get("question1"));

  if (!fullName || !email || !phone || !projectName || !vision) {
    return NextResponse.json({
      status: 0,
      msg: "Please complete your name, email, phone, project name, and vision.",
    });
  }

  if (!isEmail(email)) {
    return NextResponse.json({
      status: 0,
      msg: "Please enter a valid email address.",
    });
  }

  console.info("[startup-propose]", {
    fullName,
    email,
    phone,
    projectName,
  });

  return NextResponse.json({
    status: 1,
    msg: "Thank you. We will review your idea and get back to you shortly.",
  });
}
