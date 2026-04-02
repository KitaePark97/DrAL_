// ============================================================
//  DrAL Lab — Data File
//  ✏️  이 파일만 수정하면 웹사이트 전체가 업데이트됩니다
//
//  업데이트 워크플로우:
//    1. Claude에게 변경 요청
//    2. 이 파일 저장
//    3. git add data.js && git commit -m "update" && git push
// ============================================================

window.LAB_DATA = {

  // ── 랩 기본 정보 ──────────────────────────────────────────
  lab: {
    name:      "Design Research for Active Living",
    shortName: "DrAL Lab",
    university:"Texas A&M University",
    dept:      "Landscape Architecture & Urban Planning",
    siteUrl:   "https://www.arch.tamu.edu/",
    driveUrl:  null,   // ← 구글 드라이브 루트 폴더 링크로 교체하세요
  },

  // ── 멤버 ─────────────────────────────────────────────────
  // role   : "Faculty" | "PhD Student" | "Post Doc" | "Researcher" | "Visiting Scholar"
  // status : "Active" | "Former" | "Visiting"
  // scholar: Google Scholar URL (없으면 null)
  // tamu   : TAMU 프로필 URL    (없으면 null)
  // bio    : 소개 문구          (없으면 null)
  members: [

    // ── Faculty ───────────────────────────────────────────
    { id:1,  name:"Chanam Lee",         role:"Faculty",     email:"chanam@tamu.edu",               status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=B-H2Wq0AAAAJ", tamu:"https://www.arch.tamu.edu/staff/chanam-lee/",    bio:"Professor of Landscape Architecture & Urban Planning and founding director of DrAL. Research links built environment with public health." },
    { id:2,  name:"Xuemei Zhu",         role:"Faculty",     email:"xuemeizhu@tamu.edu",            status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=PPWx3LwAAAAJ", tamu:"https://www.arch.tamu.edu/staff/xuemei-zhu/",   bio:"Professor of Architecture. Research on healthy community design, non-motorized transportation, and public health." },
    { id:3,  name:"Marcia Ory",         role:"Faculty",     email:"mory@tamu.edu",                 status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=3nelzqkAAAAJ", tamu:null,                                            bio:"Regents & Distinguished Professor. Director, Center for Population Health and Aging." },
    { id:4,  name:"Sungmin Lee",        role:"Faculty",     email:"sungminlee@arch.tamu.edu",      status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=Mq-u-9MAAAAJ", tamu:"https://www.arch.tamu.edu/staff/sungmin-lee/", bio:"Assistant Professor, Landscape Architecture & Urban Planning. Research on built environment, public health, and green space." },
    { id:5,  name:"Zhipeng Lu",         role:"Faculty",     email:"luzhipeng@tamu.edu",            status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=CkiAju0AAAAJ", tamu:null,                                            bio:"Assistant Professor of Architecture. Research: active living, design for aging, evidence-based healthcare design." },
    { id:6,  name:"Wei Li",             role:"Faculty",     email:"wli@tamu.edu",                  status:"Active", advisor:null,                 scholar:null, tamu:null, bio:null },
    { id:7,  name:"Kenneth Hurst",      role:"Faculty",     email:"khurst5775@tamu.edu",           status:"Active", advisor:null,                 scholar:null, tamu:null, bio:null },
    { id:8,  name:"Dongying Li",        role:"Faculty",     email:"dli@arch.tamu.edu",             status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=ccTwEaMAAAAJ", tamu:"https://www.arch.tamu.edu/staff/dongying-li/", bio:"Associate Professor of Landscape Architecture. Research on green space, restorative environments, and human health." },
    { id:9,  name:"Tyler Prochnow",     role:"Faculty",     email:"tprochnow@tamu.edu",            status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=TOKNbGcAAAAJ", tamu:null,                                            bio:"Assistant Professor, Dept. Health Behavior. Research: social network analysis, physical activity, health equity." },
    { id:10, name:"Yang Song",          role:"Faculty",     email:"ysong@arch.tamu.edu",           status:"Active", advisor:null,                 scholar:"https://scholar.google.com/citations?user=I-h_YWoAAAAJ", tamu:"https://www.arch.tamu.edu/staff/yang-song/",    bio:"Associate Professor of Landscape Architecture. Research: public placemaking, data science, and community health." },
    { id:11, name:"Sinan Zhong",        role:"Faculty",     email:"zsn198838@email.tamu.edu",      status:"Active", advisor:null,                 scholar:null, tamu:null, bio:null },
    { id:12, name:"Youngre Noh",        role:"Faculty",     email:"urbannyr@email.tamu.edu",       status:"Active", advisor:null,                 scholar:null, tamu:null, bio:null },

    // ── PhD Students ──────────────────────────────────────
    { id:13, name:"Andong Chen",        role:"PhD Student", email:"andongch@tamu.edu",             status:"Active", advisor:"Chanam Lee, Wei Li", scholar:null, tamu:null, bio:null },
    { id:14, name:"Jiwoon Jeong",       role:"PhD Student", email:"dolcejw324@tamu.edu",           status:"Active", advisor:"Chanam Lee",          scholar:null, tamu:null, bio:null },
    { id:15, name:"Li Deng",            role:"PhD Student", email:"lideng@tamu.edu",               status:"Active", advisor:"Chanam Lee",          scholar:null, tamu:null, bio:null },
    { id:16, name:"Yeankyoung Hahm",    role:"PhD Student", email:"yeankyoung@tamu.edu",           status:"Active", advisor:"Chanam Lee",          scholar:null, tamu:null, bio:null },
    { id:17, name:"Wenjin Wang",        role:"PhD Student", email:"wjwang@tamu.edu",               status:"Active", advisor:"Chanam Lee",          scholar:null, tamu:null, bio:null },
    { id:18, name:"Seokyung Park",      role:"PhD Student", email:"skpark529@tamu.edu",            status:"Active", advisor:"Xuemei Zhu",          scholar:null, tamu:null, bio:null },
    { id:19, name:"Parya Khandan",      role:"PhD Student", email:"parya.khandan@tamu.edu",        status:"Active", advisor:"Zhipeng Lu",          scholar:null, tamu:null, bio:null },
    { id:20, name:"Shuqi Nie",          role:"PhD Student", email:"shuqinie@tamu.edu",             status:"Active", advisor:"Xuemei Zhu",          scholar:null, tamu:null, bio:null },
    { id:21, name:"Na Wang",            role:"PhD Student", email:"nawang.njust@tamu.edu",         status:"Active", advisor:"Sinan Zhong",         scholar:null, tamu:null, bio:null },
    { id:22, name:"Kitae Park",         role:"PhD Student", email:"parky2025@tamu.edu",            status:"Active", advisor:"Chanam Lee",          scholar:null, tamu:null, bio:null },
    { id:23, name:"Min Pan",            role:"PhD Student", email:"panmin@tamu.edu",               status:"Active", advisor:"Xuemei Zhu",          scholar:null, tamu:null, bio:null },
    { id:24, name:"Mingi Kim",          role:"PhD Student", email:"mingikim@tamu.edu",             status:"Active", advisor:"Xuemei Zhu",          scholar:null, tamu:null, bio:null },
    { id:25, name:"Najmeh Jahani",      role:"PhD Student", email:"najmeh.jahani@tamu.edu",        status:"Active", advisor:"Sungmin Lee",         scholar:null, tamu:null, bio:null },
    { id:26, name:"Sungju Jung",        role:"PhD Student", email:"luke9241@tamu.edu",             status:"Active", advisor:"Sungmin Lee",         scholar:null, tamu:null, bio:null },
    { id:27, name:"John Monigold",      role:"PhD Student", email:"johnmon02@tamu.edu",            status:"Active", advisor:null,                  scholar:null, tamu:null, bio:null },
    { id:28, name:"Inseo Park",         role:"PhD Student", email:"inseo0323@tamu.edu",            status:"Active", advisor:"Sungmin Lee",         scholar:null, tamu:null, bio:null },
    { id:29, name:"Keyla Sanchez",      role:"PhD Student", email:"keyla_sanchez07@tamu.edu",      status:"Active", advisor:null,                  scholar:null, tamu:null, bio:null },
    { id:30, name:"Maria Ballina",      role:"PhD Student", email:"maria.ballina@tamu.edu",        status:"Active", advisor:null,                  scholar:null, tamu:null, bio:null },

    // ── Post Doc ──────────────────────────────────────────
    { id:31, name:"Hanwool Lee",        role:"Post Doc",    email:"list1205@tamu.edu",             status:"Active", advisor:null, scholar:null, tamu:null, bio:null },
    { id:32, name:"Xi Chen",            role:"Post Doc",    email:"cici.chen@tamu.edu",            status:"Active", advisor:null, scholar:null, tamu:null, bio:null },

    // ── Researcher ────────────────────────────────────────
    { id:33, name:"Damaris Galo Reyes", role:"Researcher",  email:"damarisgalo@tamu.edu",          status:"Active", advisor:null, scholar:null, tamu:null, bio:null },
  ],

  // ── 프로젝트 ──────────────────────────────────────────────
  // memberIds : 멤버 id 배열 (팀원)
  // driveUrl  : Google Drive 폴더 링크 (없으면 null)
  projects: [
    { id:1,  abbr:"AEP",     title:"Active El Paso (AEP)",                                       tags:["Mobility","Equity","Aging"],         status:"Active", recruiting:true,  pi:"Chanam Lee",   funding:"NIH R01", memberIds:[1,4,6,13,17,31],    driveUrl:null, desc:"A natural experiment examining how Bus Rapid Transit expansion in El Paso impacts physical activity, healthy aging, and reduces disparities in this predominantly Latino/Hispanic border community." },
    { id:2,  abbr:"ALA",     title:"Active Living Austin (ALA)",                                 tags:["Health","Equity"],                   status:"Active", recruiting:true,  pi:"Chanam Lee",   funding:"NIH R01", memberIds:[1,2,3,5,14,15,32],  driveUrl:null, desc:"Longitudinal study investigating how relocation to walkable, mixed-income communities in Austin affects residents' physical activity, social interactions, and health outcomes." },
    { id:3,  abbr:"DTC",     title:"Digital Twin City for Age-friendly Communities",              tags:["Urban Design","Mobility","Aging"],   status:"Active", recruiting:false, pi:"Chanam Lee",   funding:null,      memberIds:[1,5,11,16,21,31],   driveUrl:null, desc:"Developing digital twin models of urban environments to simulate how spatial design changes can create more age-friendly communities and support healthy aging in place." },
    { id:4,  abbr:"DBSLC",   title:"Design for Better & Safer Long-term Care",                   tags:["Health","Aging"],                    status:"Active", recruiting:false, pi:"Xuemei Zhu",   funding:null,      memberIds:[2,5,19,23,32],      driveUrl:null, desc:"Investigating how architectural design of long-term care facilities affects resident safety, physical activity, social engagement, and quality of life for older adults." },
    { id:5,  abbr:"HASD",    title:"Healthy and Active School Design",                            tags:["Health","Equity"],                   status:"Active", recruiting:false, pi:"Xuemei Zhu",   funding:null,      memberIds:[2,10,18,24,26],     driveUrl:null, desc:"Examining how school building and campus design promotes or inhibits physical activity, active transportation, and healthy behaviors among K–12 students." },
    { id:6,  abbr:"iCAT",    title:"Intergenerational Communities Assessment Tool (iCAT)",        tags:["Equity","Urban Design","Aging"],     status:"Active", recruiting:false, pi:"Chanam Lee",   funding:null,      memberIds:[1,11,12,21,27],     driveUrl:null, desc:"Developing and validating a community assessment tool to measure how well neighborhoods support intergenerational interactions, social cohesion, and active aging." },
    { id:7,  abbr:"NbI-HCW", title:"Nature-based Interventions for Healthcare Workers",          tags:["Health"],                            status:"Active", recruiting:true,  pi:"Dongying Li",  funding:null,      memberIds:[8,10,20,25,29],     driveUrl:null, desc:"Studying how exposure to nature-based environments — including healing gardens and green spaces — affects stress recovery, mental health, and well-being of healthcare workers." },
    { id:8,  abbr:"PedH",    title:"PedH (Pedestrian Health) Project",                           tags:["Mobility","Equity"],                 status:"Active", recruiting:false, pi:"Chanam Lee",   funding:null,      memberIds:[1,4,8,9,22,28],     driveUrl:null, desc:"Analyzing how pedestrian infrastructure, street design, and walkability features impact health outcomes, injury risk, and physical activity across diverse populations." },
    { id:9,  abbr:"PSIHB",   title:"Programmable Surroundings & Their Impact on Human Behavior", tags:["Urban Design"],                      status:"Active", recruiting:true,  pi:"Zhipeng Lu",   funding:null,      memberIds:[5,11,13,16,30],     driveUrl:null, desc:"Exploring how smart, programmable built environments and responsive design technologies can influence health behaviors and promote active living." },
    { id:10, abbr:"GCP",     title:"The Green Campus Project",                                   tags:["Health","Urban Design"],             status:"Active", recruiting:false, pi:"Chanam Lee",   funding:null,      memberIds:[1,4,8,15,25,33],    driveUrl:null, desc:"Investigating the role of campus green infrastructure — trees, parks, and open spaces — in supporting mental health, physical activity, and well-being among university students and staff." },
    { id:11, abbr:"UGIPH",   title:"Urban Green (Infra)structure for Pedestrian Health",          tags:["Health","Equity"],                   status:"Active", recruiting:true,  pi:"Sungmin Lee",  funding:null,      memberIds:[4,8,10,26,28],      driveUrl:null, desc:"Examining how urban tree canopy, greenways, and green infrastructure affect pedestrian safety, walking behavior, and health equity across socioeconomic and racial groups." },
  ],

  // ── 채용 공고 ─────────────────────────────────────────────
  // type   : "PhD Position" | "Postdoc" | "RA" | "Undergraduate"
  // status : "Open" | "Closed" | "Filled"
  recruiting: [
    { id:1, title:"PhD Research Assistant – Active El Paso (AEP)",                    type:"PhD Position", projectId:1,  contactEmail:"chanam@tamu.edu",      deadline:"2025-05-30", funding:"RA stipend + tuition waiver",   status:"Open", urgent:false, desc:"Seeking a PhD student with interest in transportation, aging, and health equity for our NIH-funded natural experiment in El Paso. GIS and survey analysis experience preferred. Spanish language skills a plus." },
    { id:2, title:"Postdoctoral Fellow – Active Living Austin (ALA)",                  type:"Postdoc",      projectId:2,  contactEmail:"chanam@tamu.edu",      deadline:"2025-04-30", funding:"Competitive salary + benefits", status:"Open", urgent:true,  desc:"Recruiting a postdoc with expertise in longitudinal study design, structural equation modeling, or mixed methods to lead data analysis and manuscript preparation for our NIH-R01 Austin project." },
    { id:3, title:"PhD Student – Healthy and Active School Design",                    type:"PhD Position", projectId:5,  contactEmail:"xuemeizhu@tamu.edu",   deadline:"2025-06-01", funding:"RA stipend + tuition waiver",   status:"Open", urgent:false, desc:"Looking for a PhD applicant with background in architecture, landscape architecture, or public health for environment-health research around school design and children's physical activity." },
    { id:4, title:"Research Assistant – Nature-based Interventions for Healthcare Workers", type:"RA",      projectId:7,  contactEmail:"dli@arch.tamu.edu",    deadline:"2025-04-20", funding:"Hourly pay",                    status:"Open", urgent:false, desc:"RA needed to assist with survey distribution, field observations, and data management for a study on green space and healthcare worker well-being. 15–20 hrs/week." },
  ],

}; // end LAB_DATA
