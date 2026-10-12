import { NextResponse } from "next/server";

export const runtime = "nodejs";

function text(value) {
  return String(value || "").trim();
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function fileInfo(file) {
  if (!file || typeof file === "string" || !file.size) return undefined;
  return { name: file.name, type: file.type, size: file.size };
}

function isPdf(file) {
  return file && typeof file !== "string" && file.type === "application/pdf";
}

function isImage(file) {
  return (
    file &&
    typeof file !== "string" &&
    ["image/jpeg", "image/png", "image/gif"].includes(file.type)
  );
}

export async function POST(request) {
  const form = await request.formData();

  if (text(form.get("companyWebsite"))) {
    return NextResponse.json({
      status: 1,
      msg: "Thank you. Your internship application has been received.",
    });
  }

  const firstName = text(form.get("txt_fname"));
  const lastName = text(form.get("txt_lname"));
  const email = text(form.get("txt_email"));
  const phone = text(form.get("txt_contact"));
  const location = text(form.get("location"));
  const university = text(form.get("txt_university"));
  const degree = text(form.get("degree_type"));
  const major = text(form.get("degree_majors"));
  const cgpa = text(form.get("txt_cgpa"));
  const semester = text(form.get("curr_sem"));
  const field = text(form.get("department"));
  const role = text(form.get("role_name"));
  const option = text(form.get("internship_option"));
  const resume = form.get("resume");
  const transcript = form.get("transcript");
  const picture = form.get("picture");

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !location ||
    !university ||
    !degree ||
    !major ||
    !cgpa ||
    !semester ||
    !field ||
    !role
  ) {
    return NextResponse.json({
      status: 0,
      msg: "Please complete all required personal and academic fields.",
    });
  }

  if (!isEmail(email)) {
    return NextResponse.json({
      status: 0,
      msg: "Please enter a valid email address.",
    });
  }

  if (!option) {
    return NextResponse.json({
      status: 0,
      msg: "Please select one option from Projects, Competencies, or Specializations.",
    });
  }

  if (!isPdf(resume) || resume.size > 5 * 1024 * 1024) {
    return NextResponse.json({
      status: 0,
      msg: "Please upload your resume as a PDF (max 5MB).",
    });
  }

  if (!isPdf(transcript) || transcript.size > 5 * 1024 * 1024) {
    return NextResponse.json({
      status: 0,
      msg: "Please upload your transcript as a PDF (max 5MB).",
    });
  }

  if (picture && typeof picture !== "string" && picture.size) {
    if (!isImage(picture) || picture.size > 2 * 1024 * 1024) {
      return NextResponse.json({
        status: 0,
        msg: "Please upload a JPG, PNG, or GIF picture (max 2MB).",
      });
    }
  }

  console.info("[internship-apply]", {
    cohort: text(form.get("internship_cohort")) || "2026",
    name: `${firstName} ${lastName}`,
    email,
    phone,
    location,
    city: text(form.get("city")) || text(form.get("txt_other")),
    university,
    degree,
    major,
    field,
    role,
    option,
    resume: fileInfo(resume),
    transcript: fileInfo(transcript),
    picture: fileInfo(picture),
  });

  return NextResponse.json({
    status: 1,
    msg: "Thank you. Your internship application has been received. The SPS Internship Team will contact you if you are shortlisted.",
  });
}
