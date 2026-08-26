import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.style import WD_STYLE_TYPE
import os

doc = docx.Document()

# Set standard page margins (0.75 in)
for section in doc.sections:
    section.top_margin = Inches(0.75)
    section.bottom_margin = Inches(0.75)
    section.left_margin = Inches(0.75)
    section.right_margin = Inches(0.75)

# Color definitions
COLOR_PRIMARY = RGBColor(15, 23, 42)      # #0F172A
COLOR_ACCENT = RGBColor(217, 119, 6)      # #D97706
COLOR_TEXT = RGBColor(51, 65, 85)        # #334155
COLOR_MUTED = RGBColor(100, 116, 139)    # #64748B

# Header
title_p = doc.add_paragraph()
title_p.paragraph_format.space_after = Pt(2)
title_run = title_p.add_run("Alex Teye Ametepey")
title_run.font.name = 'Calibri'
title_run.font.size = Pt(24)
title_run.font.bold = True
title_run.font.color.rgb = COLOR_PRIMARY

sub_p = doc.add_paragraph()
sub_p.paragraph_format.space_after = Pt(8)
sub_run = sub_p.add_run("Backend Architect & Systems Engineer")
sub_run.font.name = 'Calibri'
sub_run.font.size = Pt(13)
sub_run.font.bold = True
sub_run.font.color.rgb = COLOR_ACCENT

contact_p = doc.add_paragraph()
contact_p.paragraph_format.space_after = Pt(14)
contact_run = contact_p.add_run(
    "Accra, Ghana  |  alexteyeametepey@gmail.com  |  +233 54 904 4977\n"
    "GitHub: github.com/aa-Teye  |  LinkedIn: linkedin.com/in/alex-ametepey-1123a3205"
)
contact_run.font.name = 'Calibri'
contact_run.font.size = Pt(9.5)
contact_run.font.color.rgb = COLOR_MUTED

def add_heading(doc, text):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(14)
    p.paragraph_format.space_after = Pt(4)
    p.paragraph_format.keep_with_next = True
    run = p.add_run(text.upper())
    run.font.name = 'Calibri'
    run.font.size = Pt(11)
    run.font.bold = True
    run.font.color.rgb = COLOR_PRIMARY
    return p

def add_bullet(doc, bold_prefix, text):
    p = doc.add_paragraph(style='List Bullet')
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.line_spacing = 1.15
    if bold_prefix:
        r1 = p.add_run(bold_prefix)
        r1.font.name = 'Calibri'
        r1.font.size = Pt(10)
        r1.font.bold = True
        r1.font.color.rgb = COLOR_TEXT
    r2 = p.add_run(text)
    r2.font.name = 'Calibri'
    r2.font.size = Pt(10)
    r2.font.color.rgb = COLOR_TEXT
    return p

# Executive Summary
add_heading(doc, "Executive Summary")
sum_p = doc.add_paragraph()
sum_p.paragraph_format.space_after = Pt(10)
sum_run = sum_p.add_run(
    "Full-Stack & Backend Architect with a BSc in Information Technology from the University of Ghana and a specialized "
    "focus on AI, Machine Learning, and Computer Vision. Currently a Research Assistant developing spatio-temporal Graph "
    "Neural Networks, I engineer complete, end-to-end production systems — bridging deep learning models with high-concurrency "
    "backends, real-time WebRTC/WebSocket streaming, and responsive web/mobile interfaces."
)
sum_run.font.name = 'Calibri'
sum_run.font.size = Pt(10)
sum_run.font.color.rgb = COLOR_TEXT

# Core Competencies
add_heading(doc, "Core Competencies & Technical Skills")
add_bullet(doc, "Backend Engineering: ", "Python, FastAPI, PostgreSQL, Redis (Distributed Locks/Caching), Celery, RabbitMQ, Kafka, TimescaleDB, Pydantic v2, REST APIs, WebSockets, WebRTC")
add_bullet(doc, "AI & Machine Learning: ", "PyTorch, PyTorch Geometric, Graph Neural Networks (GNNs), Computer Vision, Spatio-Temporal Graph Transformers, Prompt Engineering, AI Microservices")
add_bullet(doc, "DevOps & Cloud: ", "Docker, Docker Compose, Multi-stage Builds, AWS S3, AWS CloudFront, Git, GitHub Actions (CI/CD), Linux Administration")
add_bullet(doc, "Frontend & Media: ", "React, React Native, TypeScript, Tailwind CSS, vMix API, OBS, WebRTC Live Streaming, Media Automation")
add_bullet(doc, "Engineering Leadership: ", "Agile/Scrum, Git Workflow, Technical Mentorship, Code Reviews, Jira, Technical Communication")

# Professional Experience
add_heading(doc, "Professional Experience")

# Job 1
j1 = doc.add_paragraph()
j1.paragraph_format.space_before = Pt(6)
j1.paragraph_format.space_after = Pt(2)
j1_r1 = j1.add_run("Research Assistant  |  University of Ghana (Prof. Kofi Sarpong Adu-Manu)")
j1_r1.font.bold = True
j1_r1.font.size = Pt(10.5)
j1_r1.font.color.rgb = COLOR_PRIMARY
j1_date = j1.add_run("\t2023 — Present")
j1_date.font.size = Pt(9.5)
j1_date.font.color.rgb = COLOR_MUTED

add_bullet(doc, "", "Conduct deep learning research on Spatio-Temporal Graph Transformer architectures for water distribution infrastructure monitoring and leakage detection.")
add_bullet(doc, "", "Engineered the DiTEC preprocessing pipeline with two-pass normalization producing exact-dimension feature tensors.")
add_bullet(doc, "", "Developed Transferable Foundation GNNs using PyTorch Geometric, reducing model convergence time by 40%.")

# Job 2
j2 = doc.add_paragraph()
j2.paragraph_format.space_before = Pt(6)
j2.paragraph_format.space_after = Pt(2)
j2_r1 = j2.add_run("Lead Backend Developer (Contract)  |  Meditel Inc.")
j2_r1.font.bold = True
j2_r1.font.size = Pt(10.5)
j2_r1.font.color.rgb = COLOR_PRIMARY
j2_date = j2.add_run("\tOngoing")
j2_date.font.size = Pt(9.5)
j2_date.font.color.rgb = COLOR_MUTED

add_bullet(doc, "", "Lead backend developer for StrokeNet, a real-time stroke emergency response platform spanning Web, Mobile, Desktop, and Smartwatches.")
add_bullet(doc, "", "Architected real-time alert routing infrastructure using WebRTC and Socket.IO for low-latency emergency notifications.")
add_bullet(doc, "", "Built automated AI assessment pipeline using FastAPI, Celery queues, and AWS S3 to process medical imaging.")

# Job 3
j3 = doc.add_paragraph()
j3.paragraph_format.space_before = Pt(6)
j3.paragraph_format.space_after = Pt(2)
j3_r1 = j3.add_run("Software Developer  |  AreteForge")
j3_r1.font.bold = True
j3_r1.font.size = Pt(10.5)
j3_r1.font.color.rgb = COLOR_PRIMARY
j3_date = j3.add_run("\tOngoing")
j3_date.font.size = Pt(9.5)
j3_date.font.color.rgb = COLOR_MUTED
add_bullet(doc, "", "Developed production-grade backend microservices in Python following Agile/Scrum sprint workflows with Git and Jira.")

# Job 4
j4 = doc.add_paragraph()
j4.paragraph_format.space_before = Pt(6)
j4.paragraph_format.space_after = Pt(2)
j4_r1 = j4.add_run("Teaching Assistant & Applied AI Instructor  |  University of Ghana (Dept. of CS)")
j4_r1.font.bold = True
j4_r1.font.size = Pt(10.5)
j4_r1.font.color.rgb = COLOR_PRIMARY
j4_date = j4.add_run("\tOngoing")
j4_date.font.size = Pt(9.5)
j4_date.font.color.rgb = COLOR_MUTED
add_bullet(doc, "", "Instruct Applied AI short course covering prompt engineering, AI workflow design, and practical AI tooling.")

# Job 5
j5 = doc.add_paragraph()
j5.paragraph_format.space_before = Pt(6)
j5.paragraph_format.space_after = Pt(2)
j5_r1 = j5.add_run("Head, Media Systems & IT Unit  |  Overcomers Nation Church")
j5_r1.font.bold = True
j5_r1.font.size = Pt(10.5)
j5_r1.font.color.rgb = COLOR_PRIMARY
j5_date = j5.add_run("\t2023 — Present")
j5_date.font.size = Pt(9.5)
j5_date.font.color.rgb = COLOR_MUTED
add_bullet(doc, "", "Direct broadcast and IT teams; engineered WebSocket live switching software connecting React Native to vMix at 60fps.")

# Key Projects
add_heading(doc, "Featured Projects")
add_bullet(doc, "StrokeNet: ", "Real-time stroke emergency response platform built with FastAPI, WebRTC, Socket.IO, Celery, and AWS S3.")
add_bullet(doc, "VelocityPass: ", "High-throughput ticketing API handling 10k+ concurrent users with zero race conditions via Redis distributed locks.")
add_bullet(doc, "UG SmartWallet: ", "Campus financial ledger with double-entry accounting, PostgreSQL row-level locks, and strict idempotency validation.")
add_bullet(doc, "Dominion Media API: ", "Memory-efficient audio streaming engine with FastAPI async generators and AWS CloudFront presigned URLs.")
add_bullet(doc, "QuantData Pipeline: ", "Financial ingestion pipeline streaming thousands of market ticks per second into TimescaleDB hypertables.")

# Education
add_heading(doc, "Education")
edu_p = doc.add_paragraph()
edu_p.paragraph_format.space_before = Pt(4)
edu_r1 = edu_p.add_run("Bachelor of Science (BSc) in Information Technology")
edu_r1.font.bold = True
edu_r1.font.size = Pt(10.5)
edu_r1.font.color.rgb = COLOR_PRIMARY
edu_r2 = edu_p.add_run("  |  University of Ghana, Legon")
edu_r2.font.size = Pt(10)
edu_r2.font.color.rgb = COLOR_TEXT
edu_date = edu_p.add_run("\tGraduated 2025")
edu_date.font.size = Pt(9.5)
edu_date.font.color.rgb = COLOR_MUTED

# Save DOCX files
output_path1 = "Alex_Teye_Ametepey_CV.docx"
output_path2 = "public/Alex_Resume.docx"
doc.save(output_path1)
doc.save(output_path2)

print(f"Successfully created {output_path1} and updated {output_path2}")
