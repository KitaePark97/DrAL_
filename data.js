 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/data.js b/data.js
index 1111b9f98963af241071ed570d78ad3e892307f8..69c4905d07a5f2b1186330bd14b772db23486040 100644
--- a/data.js
+++ b/data.js
@@ -1,55 +1,58 @@
 // ============================================================
 //  DrAL Lab — Seed Data
 // ============================================================
 window.SEED_DATA = {
   about: {
     tagline:     "Designing Healthier Communities Through Evidence-Based Research",
     description: "The Design Research for Active Living (DrAL) Lab at Texas A&M University investigates how the built environment shapes physical activity, health, and well-being across diverse communities. Founded by Dr. Chanam Lee, our interdisciplinary team bridges landscape architecture, urban planning, public health, and data science.",
     mission:     "Our mission is to generate rigorous, translatable evidence that informs policies and designs promoting active living — with a particular focus on health equity, aging populations, and underserved communities.",
     contact:     "chanam@tamu.edu",
     linkedin:    "https://www.linkedin.com/in/design-research-for-active-living-dral-lab-918614268/",
+    heroBgType:  "animated",
+    heroBgImage: null,
   },
+  memberRoleFilters: ["Faculty","Researcher","Post Doc","PhD Student","Master Student","Undergraduate Student"],
   projectTags: ["Health","Mobility","Equity","Urban Design","Aging"],
   members: [
     { id:1,  name:"Chanam Lee",         role:"Faculty",        dept:null,   email:"chanam@tamu.edu",               status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=B-H2Wq0AAAAJ", tamu:"https://www.arch.tamu.edu/staff/chanam-lee/",   bio:"Professor of Landscape Architecture & Urban Planning and founding director of DrAL.", photoUrl:null },
     { id:2,  name:"Xuemei Zhu",         role:"Faculty",        dept:null,   email:"xuemeizhu@tamu.edu",            status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=PPWx3LwAAAAJ", tamu:"https://www.arch.tamu.edu/staff/xuemei-zhu/",  bio:"Professor of Architecture. Research on healthy community design, non-motorized transportation, and public health.", photoUrl:null },
     { id:3,  name:"Marcia Ory",         role:"Faculty",        dept:null,   email:"mory@tamu.edu",                 status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=3nelzqkAAAAJ", tamu:null,                                           bio:"Regents & Distinguished Professor. Director, Center for Population Health and Aging.", photoUrl:null },
     { id:4,  name:"Sungmin Lee",        role:"Faculty",        dept:null,   email:"sungminlee@arch.tamu.edu",      status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=Mq-u-9MAAAAJ", tamu:"https://www.arch.tamu.edu/staff/sungmin-lee/",bio:"Assistant Professor, Landscape Architecture & Urban Planning. Research on built environment, public health, and green space.", photoUrl:null },
     { id:5,  name:"Zhipeng Lu",         role:"Faculty",        dept:null,   email:"luzhipeng@tamu.edu",            status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=CkiAju0AAAAJ", tamu:null,                                           bio:"Assistant Professor of Architecture. Research: active living, design for aging, evidence-based healthcare design.", photoUrl:null },
     { id:6,  name:"Wei Li",             role:"Faculty",        dept:null,   email:"wli@tamu.edu",                  status:"Active", advisor:null,                 scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:7,  name:"Kenneth Hurst",      role:"Faculty",        dept:null,   email:"khurst5775@tamu.edu",           status:"Active", advisor:null,                 scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:8,  name:"Dongying Li",        role:"Faculty",        dept:null,   email:"dli@arch.tamu.edu",             status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=ccTwEaMAAAAJ", tamu:"https://www.arch.tamu.edu/staff/dongying-li/",bio:"Associate Professor of Landscape Architecture. Research on green space, restorative environments, and human health.", photoUrl:null },
     { id:9,  name:"Tyler Prochnow",     role:"Faculty",        dept:null,   email:"tprochnow@tamu.edu",            status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=TOKNbGcAAAAJ", tamu:null,                                           bio:"Assistant Professor, Dept. Health Behavior. Research: social network analysis, physical activity, health equity.", photoUrl:null },
     { id:10, name:"Yang Song",          role:"Faculty",        dept:null,   email:"ysong@arch.tamu.edu",           status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=I-h_YWoAAAAJ", tamu:"https://www.arch.tamu.edu/staff/yang-song/",   bio:"Associate Professor of Landscape Architecture. Research: public placemaking, data science, and community health.", photoUrl:null },
     { id:11, name:"Sinan Zhong",        role:"Faculty",        dept:null,   email:"zsn198838@email.tamu.edu",      status:"Active", advisor:null,                 scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:12, name:"Youngre Noh",        role:"Faculty",        dept:null,   email:"urbannyr@email.tamu.edu",       status:"Active", advisor:null,                 scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:13, name:"Andong Chen",        role:"PhD Student",    dept:"LAUP", email:"andongch@tamu.edu",             status:"Active", advisor:"Chanam Lee, Wei Li", scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:14, name:"Jiwoon Jeong",       role:"PhD Student",    dept:"LAUP", email:"dolcejw324@tamu.edu",           status:"Active", advisor:"Chanam Lee",          scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:15, name:"Li Deng",            role:"PhD Student",    dept:"LAUP", email:"lideng@tamu.edu",               status:"Active", advisor:"Chanam Lee",          scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:16, name:"Yeankyoung Hahm",    role:"PhD Student",    dept:"LAUP", email:"yeankyoung@tamu.edu",           status:"Active", advisor:"Chanam Lee",          scholar:null, tamu:null, bio:null, photoUrl:null },
-    { id:17, name:"Wenjin Wang",        role:"PhD Student",    dept:"LAUP", email:"wjwang@tamu.edu",               status:"Active", advisor:"Chanam Lee",          scholar:null, tamu:null, bio:null, photoUrl:null },
+    { id:17, name:"Wenjin Wang",        role:"PhD Student",    dept:"LAUP", email:"wjwang@tamu.edu",               status:"Active", advisor:"Chanam Lee",          scholar:null, tamu:null, bio:null, photoUrl:null, customTitle:"Lab Manager" },
     { id:18, name:"Seokyung Park",      role:"PhD Student",    dept:"ARCH", email:"skpark529@tamu.edu",            status:"Active", advisor:"Xuemei Zhu",          scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:19, name:"Parya Khandan",      role:"PhD Student",    dept:"ARCH", email:"parya.khandan@tamu.edu",        status:"Active", advisor:"Zhipeng Lu",          scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:20, name:"Shuqi Nie",          role:"PhD Student",    dept:"ARCH", email:"shuqinie@tamu.edu",             status:"Active", advisor:"Xuemei Zhu",          scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:21, name:"Na Wang",            role:"PhD Student",    dept:"LAUP", email:"nawang.njust@tamu.edu",         status:"Active", advisor:"Sinan Zhong",         scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:22, name:"Kitae Park",         role:"PhD Student",    dept:"LAUP", email:"parky2025@tamu.edu",            status:"Active", advisor:"Chanam Lee",          scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:23, name:"Min Pan",            role:"PhD Student",    dept:"ARCH", email:"panmin@tamu.edu",               status:"Active", advisor:"Xuemei Zhu",          scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:24, name:"Mingi Kim",          role:"PhD Student",    dept:"ARCH", email:"mingikim@tamu.edu",             status:"Active", advisor:"Xuemei Zhu",          scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:25, name:"Najmeh Jahani",      role:"PhD Student",    dept:"LAUP", email:"najmeh@tamu.edu",               status:"Active", advisor:"Dongying Li",         scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:26, name:"Sungju Jung",        role:"PhD Student",    dept:"LAUP", email:"luke9241@tamu.edu",             status:"Active", advisor:"Sungmin Lee",         scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:27, name:"John Monigold",      role:"Master Student", dept:"LAUP", email:"johnmon02@tamu.edu",            status:"Active", advisor:null,                  scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:28, name:"Inseo Park",         role:"Master Student", dept:"LAUP", email:"inseo0323@tamu.edu",            status:"Active", advisor:"Sungmin Lee",         scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:29, name:"Keyla Sanchez",      role:"PhD Student",    dept:"LAUP", email:"keyla_sanchez07@tamu.edu",      status:"Active", advisor:null,                  scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:30, name:"Maria Ballina",      role:"PhD Student",    dept:"LAUP", email:"maria.ballina@tamu.edu",        status:"Active", advisor:null,                  scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:31, name:"Hanwool Lee",        role:"Post Doc",       dept:null,   email:"list1205@tamu.edu",             status:"Active", advisor:null, scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:32, name:"Xi Chen",            role:"Post Doc",       dept:null,   email:"cici.chen@tamu.edu",            status:"Active", advisor:null, scholar:null, tamu:null, bio:null, photoUrl:null },
     { id:33, name:"Damaris Galo Reyes", role:"Researcher",     dept:null,   email:"damarisgalo@tamu.edu",          status:"Active", advisor:null, scholar:null, tamu:null, bio:null, photoUrl:null },
   ],
   projects: [
     { id:1,  abbr:"AEP",     title:"Active El Paso (AEP)",                                       tags:["Mobility","Equity","Aging"],       status:"Active", recruiting:true,  pi:"Chanam Lee",  funding:"NIH R01", memberIds:[1,4,6,13,17,31],   driveUrl:null, desc:"A natural experiment examining how Bus Rapid Transit expansion in El Paso impacts physical activity, healthy aging, and reduces disparities in this predominantly Latino/Hispanic border community." },
     { id:2,  abbr:"ALA",     title:"Active Living Austin (ALA)",                                 tags:["Health","Equity"],                 status:"Active", recruiting:true,  pi:"Chanam Lee",  funding:"NIH R01", memberIds:[1,2,3,5,14,15,32], driveUrl:null, desc:"Longitudinal study investigating how relocation to walkable, mixed-income communities in Austin affects residents' physical activity, social interactions, and health outcomes." },
     { id:3,  abbr:"DTC",     title:"Digital Twin City for Age-friendly Communities",              tags:["Urban Design","Mobility","Aging"], status:"Active", recruiting:false, pi:"Chanam Lee",  funding:null,      memberIds:[1,5,11,16,21,31],  driveUrl:null, desc:"Developing digital twin models of urban environments to simulate how spatial design changes can create more age-friendly communities and support healthy aging in place." },
     { id:4,  abbr:"DBSLC",   title:"Design for Better & Safer Long-term Care",                   tags:["Health","Aging"],                  status:"Active", recruiting:false, pi:"Xuemei Zhu",  funding:null,      memberIds:[2,5,19,23,32],     driveUrl:null, desc:"Investigating how architectural design of long-term care facilities affects resident safety, physical activity, social engagement, and quality of life for older adults." },
     { id:5,  abbr:"HASD",    title:"Healthy and Active School Design",                            tags:["Health","Equity"],                 status:"Active", recruiting:false, pi:"Xuemei Zhu",  funding:null,      memberIds:[2,10,18,24,26],    driveUrl:null, desc:"Examining how school building and campus design promotes or inhibits physical activity, active transportation, and healthy behaviors among K-12 students." },
     { id:6,  abbr:"iCAT",    title:"Intergenerational Communities Assessment Tool (iCAT)",        tags:["Equity","Urban Design","Aging"],   status:"Active", recruiting:false, pi:"Chanam Lee",  funding:null,      memberIds:[1,11,12,21,27],    driveUrl:null, desc:"Developing and validating a community assessment tool to measure how well neighborhoods support intergenerational interactions, social cohesion, and active aging." },
     { id:7,  abbr:"NbI-HCW", title:"Nature-based Interventions for Healthcare Workers",          tags:["Health"],                          status:"Active", recruiting:true,  pi:"Dongying Li", funding:null,      memberIds:[8,10,20,25,29],    driveUrl:null, desc:"Studying how exposure to nature-based environments affects stress recovery, mental health, and well-being of healthcare workers." },
 
EOF
)
