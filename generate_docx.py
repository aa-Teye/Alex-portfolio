import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT

doc = docx.Document()

# Set standard page margins (0.7 in for clean layout)
for section in doc.sections:
    section.top_margin = Inches(0.7)
    section.bottom_margin = Inches(0.7)
    section.left_margin = Inches(0.7)
    section.right_margin = Inches(0.7)

# Color palette
COLOR_PRIMARY = RGBColor(15, 23, 42)      # #0F172A Dark Slate
COLOR_ACCENT = RGBColor(217, 119, 6)      # #D97706 Amber
COLOR_TEXT = RGBColor(51, 65, 85)        # #334155 Body Text
COLOR_MUTED = RGBColor(100, 116, 139)    # #64748B Secondary Text

# Header
title_p = doc.add_paragraph()
title_p.paragraph_format.space_after = Pt(2)
title_run = title_p.add_run("ALEX TEYE AMETEPEY")
title_run.font.name = 'Calibri'
title_run.font.size = Pt(22)
title_run.font.bold = True
title_run.font.color.rgb = COLOR_PRIMARY

sub_p = doc.add_paragraph()
sub_p.paragraph_format.space_after = Pt(6)
sub_run = sub_p.add_run("Full-Stack Software Engineer & Systems Architect")
sub_run.font.name = 'Calibri'
sub_run.font.size = Pt(12)
sub_run.font.bold = True
sub_run.font.color.rgb = COLOR_ACCENT

contact_p = doc.add_paragraph()
contact_p.paragraph_format.space_after = Pt(12)
contact_run = contact_p.add_run(
    "Accra, Ghana  |  0549044977  |  alexteyeametepey@gmail.com\n"
    "GitHub: github.com/aa-Teye  |  LinkedIn: linkedin.com/in/alex-ametepey-1123a3205  |  Portfolio: alex-portfolio-sooty.vercel.app"
)
contact_run.font.name = 'Calibri'
contact_run.font.size = Pt(9.5)
contact_run.font.color.rgb = COLOR_MUTED

def add_heading(doc, text):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(12)
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
    p.paragraph_format.space_after = Pt(2.5)
    p.paragraph_format.line_spacing = 1.15
    if bold_prefix:
        r1 = p.add_run(bold_prefix)
        r1.font.name = 'Calibri'
        r1.font.size = Pt(9.5)
        r1.font.bold = True
        r1.font.color.rgb = COLOR_TEXT
    r2 = p.add_run(text)
    r2.font.name = 'Calibri'
    r2.font.size = Pt(9.5)
    r2.font.color.rgb = COLOR_TEXT
    return p

# Professional Summary
add_heading(doc, "Professional Summary")
sum_p = doc.add_paragraph()
sum_p.paragraph_format.space_after = Pt(8)
sum_p.paragraph_format.line_spacing = 1.15
sum_run = sum_p.add_run(
    "Results-driven Full-Stack Software Engineer and Systems Architect with a strong track record of leading technical "
    "teams to deliver end-to-end enterprise platforms, mobile applications, and automated growth systems. Transitioning "
    "a background in machine learning and backend architecture into comprehensive full-stack development to solve complex "
    "operational challenges. Currently pursuing an MSc in Financial Engineering to integrate quantitative data modeling "
    "into production-grade software architectures."
)
sum_run.font.name = 'Calibri'
sum_run.font.size = Pt(9.5)
sum_run.font.color.rgb = COLOR_TEXT

# Technical Skills
add_heading(doc, "Technical Skills")
add_bullet(doc, "Languages: ", "Python, JavaScript (ES6+), Java, SQL, HTML5, CSS3")
add_bullet(doc, "Frontend & Mobile: ", "React, Next.js, Astro, Vite, Tailwind CSS, Cross-Platform Mobile Development (React Native), Electron")
add_bullet(doc, "Backend & Architecture: ", "FastAPI, RESTful API Design, System Design, JWT Authentication, Redis (Caching & Queues)")
add_bullet(doc, "Databases & Storage: ", "Neon (Serverless PostgreSQL), PostgreSQL, SQLite, Relational Schema Design")
add_bullet(doc, "DevOps & Workflows: ", "Vercel, Render, Git, GitHub, Jira, Agile Sprint Planning")
add_bullet(doc, "Media Systems: ", "Live Broadcast Routing (vMix)")

# Key Projects
add_heading(doc, "Key Full-Stack & System Architecture Projects")
add_bullet(doc, "Ghana HIVdr Platform (Ongoing): ", "Lead the full-stack architecture and data synchronization pipelines for secure, real-time health-tech reporting and record tracking.")
add_bullet(doc, "Enterprise ERP & Custom CMS Solutions: ", "Architected multi-tenant database schemas, automated operational workflows, and role-based access control (RBAC) systems across diverse client requirements.")
add_bullet(doc, "Automated Examination Management System: ", "Built a secure assessment engine supporting automated grading logic, audit logging, and encrypted academic record handling.")
add_bullet(doc, "Church Management & Operations System (SPS): ", "Engineered an integrated platform for database administration, member tracking, and automated service coordination.")
add_bullet(doc, "UGDS System: ", "Led the complete full-stack architecture, API endpoint specifications, and database performance optimization as Lead Engineer and Full-Stack Developer.")

# Professional Experience
add_heading(doc, "Professional Experience")

# Exp 1
j1 = doc.add_paragraph()
j1.paragraph_format.space_before = Pt(6)
j1.paragraph_format.space_after = Pt(2)
j1_r1 = j1.add_run("Software Developer (Contract)  |  Aréte Forge")
j1_r1.font.bold = True
j1_r1.font.size = Pt(10)
j1_r1.font.color.rgb = COLOR_PRIMARY
j1_date = j1.add_run("\tOngoing")
j1_date.font.size = Pt(9)
j1_date.font.color.rgb = COLOR_MUTED
add_bullet(doc, "", "Architect and deploy comprehensive full-stack solutions, engineering seamless experiences from responsive web platforms to mobile applications.")
add_bullet(doc, "", "Maintain modular backend microservices using Python and FastAPI, bridging APIs with modern frontend interfaces.")

# Exp 2
j2 = doc.add_paragraph()
j2.paragraph_format.space_before = Pt(6)
j2.paragraph_format.space_after = Pt(2)
j2_r1 = j2.add_run("Backend Developer (Contract)  |  Meditel")
j2_r1.font.bold = True
j2_r1.font.size = Pt(10)
j2_r1.font.color.rgb = COLOR_PRIMARY
j2_date = j2.add_run("\tOngoing")
j2_date.font.size = Pt(9)
j2_date.font.color.rgb = COLOR_MUTED
add_bullet(doc, "", "Design and deploy secure RESTful endpoints and high-performance backend services using Python and FastAPI.")
add_bullet(doc, "", "Collaborate closely with frontend engineers to integrate backend services seamlessly into React-based applications.")

# Exp 3
j3 = doc.add_paragraph()
j3.paragraph_format.space_before = Pt(6)
j3.paragraph_format.space_after = Pt(2)
j3_r1 = j3.add_run("Growth Engineer (Contract)  |  WAICA")
j3_r1.font.bold = True
j3_r1.font.size = Pt(10)
j3_r1.font.color.rgb = COLOR_PRIMARY
j3_date = j3.add_run("\tOngoing")
j3_date.font.size = Pt(9)
j3_date.font.color.rgb = COLOR_MUTED
add_bullet(doc, "", "Design and implement automated customer acquisition funnels, technical marketing systems, and digital growth campaigns.")
add_bullet(doc, "", "Leverage data analytics and automation tools to optimize conversion rates and expand digital brand presence.")

# Exp 4
j4 = doc.add_paragraph()
j4.paragraph_format.space_before = Pt(6)
j4.paragraph_format.space_after = Pt(2)
j4_r1 = j4.add_run("Head of IT & Media Systems  |  Overcomers Nation Church (ONC)")
j4_r1.font.bold = True
j4_r1.font.size = Pt(10)
j4_r1.font.color.rgb = COLOR_PRIMARY
j4_date = j4.add_run("\t2023 – Present")
j4_date.font.size = Pt(9)
j4_date.font.color.rgb = COLOR_MUTED
add_bullet(doc, "", "Direct IT operations, advanced AV media broadcasting systems, and internal technical infrastructure.")
add_bullet(doc, "", "Develop custom full-stack web and mobile applications to automate administrative workflows, community engagement, and digital production.")

# Exp 5
j5 = doc.add_paragraph()
j5.paragraph_format.space_before = Pt(6)
j5.paragraph_format.space_after = Pt(2)
j5_r1 = j5.add_run("Research Assistant  |  University of Ghana")
j5_r1.font.bold = True
j5_r1.font.size = Pt(10)
j5_r1.font.color.rgb = COLOR_PRIMARY
j5_date = j5.add_run("\t2023 – Present")
j5_date.font.size = Pt(9)
j5_date.font.color.rgb = COLOR_MUTED
add_bullet(doc, "", "Conduct deep learning research under Prof. Kofi Sarpong Adu-Manu focusing on spatio-temporal graph transformer networks.")
add_bullet(doc, "", "Build automated data pipelines and evaluate model training benchmarks to support advanced AI infrastructure monitoring.")

# Education
add_heading(doc, "Education")
e1 = doc.add_paragraph()
e1.paragraph_format.space_before = Pt(4)
e1.paragraph_format.space_after = Pt(2)
e1_r1 = e1.add_run("MSc in Financial Engineering  |  WorldQuant University (USA)")
e1_r1.font.bold = True
e1_r1.font.size = Pt(10)
e1_r1.font.color.rgb = COLOR_PRIMARY
e1_date = e1.add_run("\tOngoing")
e1_date.font.size = Pt(9)
e1_date.font.color.rgb = COLOR_MUTED

e2 = doc.add_paragraph()
e2.paragraph_format.space_before = Pt(2)
e2.paragraph_format.space_after = Pt(4)
e2_r1 = e2.add_run("BSc in Information Technology  |  University of Ghana, Legon")
e2_r1.font.bold = True
e2_r1.font.size = Pt(10)
e2_r1.font.color.rgb = COLOR_PRIMARY
e2_date = e2.add_run("\tGraduated 2025")
e2_date.font.size = Pt(9)
e2_date.font.color.rgb = COLOR_MUTED

# References
add_heading(doc, "References")

table = doc.add_table(rows=4, cols=3)
table.alignment = WD_TABLE_ALIGNMENT.CENTER
table.autofit = False

headers = ["Name", "Role / Organization", "Contact Info"]
hdr_cells = table.rows[0].cells
for i, h in enumerate(headers):
    hdr_cells[i].text = h
    p = hdr_cells[i].paragraphs[0]
    p.runs[0].font.bold = True
    p.runs[0].font.size = Pt(9.5)
    p.runs[0].font.color.rgb = COLOR_PRIMARY

ref_data = [
    ("Professor Kofi Sarpong Adu-Manu", "Dept. of Computer Science, University of Ghana", "kaysarpsnr@gmail.com / 0244602374"),
    ("Alex Quao, PhD", "CEO, Aréte Forge", "0592199757 / 0249221772"),
    ("Dr. Ebenezer Okronipa", "Pharmacist", "0200994446"),
]

for row_idx, data in enumerate(ref_data, start=1):
    row_cells = table.rows[row_idx].cells
    for col_idx, text in enumerate(data):
        row_cells[col_idx].text = text
        p = row_cells[col_idx].paragraphs[0]
        if p.runs:
            p.runs[0].font.size = Pt(9)
            p.runs[0].font.color.rgb = COLOR_TEXT

# Save DOCX files
output_path1 = "Alex_Teye_Ametepey_CV.docx"
output_path2 = "public/Alex_Resume.docx"
doc.save(output_path1)
doc.save(output_path2)

print(f"Successfully created {output_path1} and updated {output_path2}")
