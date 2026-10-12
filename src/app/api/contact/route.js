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
      msg: "Thank you for contacting SPS.",
    });
  }

  const firstName = text(form.get("dzFirstName") || form.get("dzName"));
  const lastName = text(form.get("dzLastName"));
  const email = text(form.get("dzEmail"));
  const phone = text(form.get("dzPhoneNumber"));
  const message = text(form.get("dzMessage"));
  const name = [firstName, lastName].filter(Boolean).join(" ");

  if (!name || !email || !message) {
    return NextResponse.json({
      status: 0,
      msg: "Please complete your name, email, and message.",
    });
  }

  if (!isEmail(email)) {
    return NextResponse.json({
      status: 0,
      msg: "Please enter a valid email address.",
    });
  }

  console.info("[contact]", {
    todo: text(form.get("dzToDo")) || "Contact",
    name,
    email,
    phone: phone || undefined,
  });

  return NextResponse.json({
    status: 1,
    msg: "Thank you for contacting SPS. We will get back to you shortly.",
  });
}
