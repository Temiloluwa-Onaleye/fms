/** @format */



export const staff_headers = [
  "Image",
  "Full Name",
  "Email",
  "Address",
  "Phone",
  "Role",
  "Department",
  "User Type",
  "Options",
];

export const departmentHeader = ["Name", "Description", "Action"];


export const departmentData = [
  {
    name: "A & E",
    description:
      "Accident and Emergency",
    action: "Edit ",
  },
  {
    name: "ACCOUNTS",
    description:
      "FINANCE AND AUDIT UNITS",
    action: "Edit ",
  },
  {
    name: "ANTENATAL - DELIVERY",
    description:
      "Ob/gym",
    action: "Edit ",
  },
  {
    name: "CATHERING",
    description:
      "Kitchen Services",
    action: "Edit ",
  },
  {
    name: "CHEMICAL PATHOLOGY LAB",
    description: "LABORATORY SERVICES",
    action: "Edit ",
  },
  {
    name: "DENTAL CLINIC",
    description:
      "Including Dental Surgery",
    action: "Edit ",
  },
  {
    name: "DIALYSIS",
    description:
      "Nephrology",
    action: "Edit ",
  },

];


export const hmoHeader = ["S/No", "Name", "Email", "Address","City", "LGA", "State", "Rc Number", "Phone", "Action"]

export const hmoData = [
  {
    serialNo: 1,
    name: "Green Health HMO",
    email: "contact@greenhealthhmo.com",
    address: "123 Wellness Avenue",
    city: "Lagos",
    lga: "Ikeja",
    state: "Lagos",
    rcNumber: "RC123456",
    phone: "+234 801 234 5678",
    action: "Edit"
  },
  {
    serialNo: 2,
    name: "BlueCross HMO",
    email: "info@bluecrosshmo.com",
    address: "45 Health Blvd",
    city: "Abuja",
    lga: "Maitama",
    state: "FCT",
    rcNumber: "RC987654",
    phone: "+234 809 876 5432",
    action: "Edit"
  },
  {
    serialNo: 3,
    name: "PrimeCare HMO",
    email: "support@primecarehmo.com",
    address: "78 Care Street",
    city: "Ibadan",
    lga: "Ibadan North",
    state: "Oyo",
    rcNumber: "RC112233",
    phone: "+234 703 567 8901",
    action: "Edit"
  },
  {
    serialNo: 4,
    name: "HealthyLife HMO",
    email: "admin@healthylifehmo.com",
    address: "101 Wellness Road",
    city: "Port Harcourt",
    lga: "Obio-Akpor",
    state: "Rivers",
    rcNumber: "RC445566",
    phone: "+234 704 123 4567",
    action: "Edit"
  },
  {
    serialNo: 5,
    name: "CarePlus HMO",
    email: "hello@careplushmo.com",
    address: "33 Care Square",
    city: "Kano",
    lga: "Kano Municipal",
    state: "Kano",
    rcNumber: "RC778899",
    phone: "+234 705 987 6543",
    action: "Edit"
  }
];

export const theatreHeader = ["#", "Scheduled For", "Operation", "Indication", "Anaesthesia", "Patient", "Age","Gender", "Ward", "Consultant", "House Officer", "Resident", "Operation Location", "Schedule"]

export const theatreData = [
  {
    id: 1,
    scheduledFor: "2024-10-15 10:00 AM",
    operation: "Appendectomy",
    indication: "Acute Appendicitis",
    anaesthesia: "General",
    patient: "John Doe",
    age: 45,
    gender: "Male",
    ward: "Surgical Ward A",
    consultant: "Dr. James Smith",
    houseOfficer: "Dr. Mary Johnson",
    resident: "Dr. Alex Brown",
    operationLocation: "Main Theatre 1",
    schedule: "Confirmed"
  },
  {
    id: 2,
    scheduledFor: "2024-10-16 01:30 PM",
    operation: "Cholecystectomy",
    indication: "Gallstones",
    anaesthesia: "Regional",
    patient: "Jane Adams",
    age: 34,
    gender: "Female",
    ward: "Surgical Ward B",
    consultant: "Dr. Emily Davis",
    houseOfficer: "Dr. Mike Green",
    resident: "Dr. Laura White",
    operationLocation: "Main Theatre 2",
    schedule: "Confirmed"
  },
  {
    id: 3,
    scheduledFor: "2024-10-17 09:00 AM",
    operation: "Hernia Repair",
    indication: "Inguinal Hernia",
    anaesthesia: "Local",
    patient: "David Lee",
    age: 60,
    gender: "Male",
    ward: "General Surgery Ward",
    consultant: "Dr. Olivia Thompson",
    houseOfficer: "Dr. Sarah Martin",
    resident: "Dr. Paul Roberts",
    operationLocation: "Day Surgery Theatre",
    schedule: "Pending"
  },
  {
    id: 4,
    scheduledFor: "2024-10-18 11:00 AM",
    operation: "Mastectomy",
    indication: "Breast Cancer",
    anaesthesia: "General",
    patient: "Emily Clark",
    age: 52,
    gender: "Female",
    ward: "Oncology Ward",
    consultant: "Dr. Benjamin Harris",
    houseOfficer: "Dr. Kate Williams",
    resident: "Dr. Chris Evans",
    operationLocation: "Main Theatre 3",
    schedule: "Confirmed"
  }
];


export const patientHeader=["Image", "Full Name", "Email", "Address", "Phone", "Gender","Blood Group", "Birth Date", "Age", "Action"]
export const patientData = [
  {
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    fullName: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main St, Lagos",
    phone: "+2347012345678",
    gender: "Male",
    birthDate: "1985-06-15",
    bloodGroup:"AB+",
    age: 39,
     action: "Print Card"
  },
  {
   image: "https://randomuser.me/api/portraits/women/25.jpg",
    fullName: "Jane Smith",
    email: "janesmith@example.com",
    address: "456 Broad Ave, Abuja",
    phone: "+2348098765432",
    gender: "Female",
    birthDate: "1990-02-20",
    bloodGroup:"AB-",
    age: 34,
     action: "Print Card"
  },
  {
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    fullName: "Michael Johnson",
    email: "mjohnson@example.com",
    address: "789 Oak Road, Port Harcourt",
    phone: "+2348056789123",
    gender: "Male",
    birthDate: "1978-09-10",
    bloodGroup:"A+",
    age: 46,
 action: "Print Card"
  },
  {
    image: "https://randomuser.me/api/portraits/women/80.jpg",
    fullName: "Emily Clark",
    email: "emilyclark@example.com",
    address: "321 Pine St, Enugu",
    phone: "+2347065432109",
    gender: "Female",
    birthDate: "1995-11-05",
    bloodGroup:"B+",
    age: 28,
    action: "Print Card"
  }
];

export const staffData: any[] = [
{
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    fullName: "Emily Johnson",
    email: "emily.johnson@example.com",
    address: "123 Maple St, Springfield, IL",
    phone: "(555) 123-4567",
    role: "Pediatrician",
    department: "Pediatrics",
    userType: "Doctor",
    options: "Edit",
  },
  {
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    fullName: "Michael Smith",
    email: "michael.smith@example.com",
    address: "456 Oak Ave, Chicago, IL",
    phone: "(555) 987-6543",
    role: "Surgeon",
    department: "Surgery",
    userType: " Doctor",
    options: "Edit",
  },
  {
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    fullName: "Sophia Brown",
    email: "sophia.brown@example.com",
    address: "789 Pine Ln, Naperville, IL",
    phone: "(555) 456-7890",
    role: "ICU Nurse",
    department: "ICU",
    userType: " Nurse",
    options: "Edit",
  },
  {
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    fullName: "James Davis",
    email: "james.davis@example.com",
    address: "321 Birch St, Aurora, IL",
    phone: "(555) 321-0987",
    role: "Cardiologist",
    department: "Cardiology",
    userType: "Doctor",
    options: "Edit",
  },
  {
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    fullName: "Olivia Garcia",
    email: "olivia.garcia@example.com",
    address: "654 Cedar Dr, Joliet, IL",
    phone: "(555) 654-3210",
    role: "Neurologist",
    department: "Neurology",
    userType: " Doctor",
    options: "Edit",
  },
  {
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    fullName: "Ethan Martinez",
    email: "ethan.martinez@example.com",
    address: "987 Willow Rd, Peoria, IL",
    phone: "(555) 789-1234",
    role: "Orthopedic Surgeon",
    department: "Orthopedics",
    userType: " Doctor",
    options: "Edit",
  },
  {
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    fullName: "Ava Miller",
    email: "ava.miller@example.com",
    address: "147 Elm St, Rockford, IL",
    phone: "(555) 987-0123",
    role: "Pediatric Nurse",
    department: "Pediatrics",
    userType: " Nurse",
    options: "Edit",
  },
  {
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    fullName: "Liam Taylor",
    email: "liam.taylor@example.com",
    address: "258 Ash Ave, Bloomington, IL",
    phone: "(555) 234-5678",
    role: "Oncologist",
    department: "Oncology",
    userType: "Doctor",
    options: "Edit",
  },
  {
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    fullName: "Isabella Wilson",
    email: "isabella.wilson@example.com",
    address: "369 Redwood Blvd, Evanston, IL",
    phone: "(555) 678-9012",
    role: "ICU Specialist",
    department: "ICU",
    userType: " Doctor",
    options: "Edit",
  },
  {
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    fullName: "Noah Anderson",
    email: "noah.anderson@example.com",
    address: "741 Sycamore St, Springfield, IL",
    phone: "(555) 123-7894",
    role: "Surgical Nurse",
    department: "Surgery",
    userType: " Nurse",
    options: "Edit",
  },

];

export const wardHeader = ["Ward Id", "Ward Name", "Description", "Options"];

export const wardData = [
  {
    wardId: "W001",
    wardName: "Greenwood Ward",
    description: "General medical ward with 50 beds.",
    options: "Edit",
  },
  {
    wardId: "W002",
    wardName: "Maplewood Ward",
    description: "Surgical ward specialized in orthopedic care.",
    options: "Edit",
  },
  {
    wardId: "W003",
    wardName: "Pinecrest Ward",
    description: "Pediatric ward with special care for infants.",
    options: "Edit",
  },
  {
    wardId: "W004",
    wardName: "Oakfield Ward",
    description: "Geriatric ward with long-term patient care.",
    options: "Edit",
  },
  {
    wardId: "W005",
    wardName: "Riverside Ward",
    description: "Ward for patients with cardiovascular conditions.",
    options: "Edit",
  },
];

export const bedHeader = ["Bed Number", "Ward", "Description", "Options"];

export const bedData = [
  {
    bedNumber: "B001",
    ward: "Greenwood Ward",
    description: "Single bed near the window with oxygen access.",
    options: "Edit",
  },
  {
    bedNumber: "B002",
    ward: "Maplewood Ward",
    description: "Double bed for post-surgical recovery.",
    options: "Edit",
  },
  {
    bedNumber: "B003",
    ward: "Pinecrest Ward",
    description: "Pediatric bed with adjustable railings.",
    options: "Edit",
  },
  {
    bedNumber: "B004",
    ward: "Oakfield Ward",
    description: "Comfort bed with pressure-relief mattress.",
    options: "Edit",
  },
  {
    bedNumber: "B005",
    ward: "Riverside Ward",
    description: "ICU bed with full monitoring equipment.",
    options: "Edit",
  },
];

export const paymentHistoryHeader = ["Invoice Number", "Title", "Patient", "Creation Date","Due Date", "Vat Percentage", "Discount Amount", "Status", "Options"];
export const paymentHistoryData = [
  {
    invoiceNumber: "INV001",
    title: "Consultation Fee",
    patient: "John Doe",
    creationDate: "2024-09-15",
    dueDate: "2024-10-15",
    vatPercentage: "5%",
    discountAmount: "$10",
    status: "Paid",
    options: "View Invoice",
  },
  {
    invoiceNumber: "INV002",
    title: "Surgery Fee",
    patient: "Jane Smith",
    creationDate: "2024-09-10",
    dueDate: "2024-10-10",
    vatPercentage: "7%",
    discountAmount: "$50",
    status: "Pending",
  options: "View Invoice",
  },
  {
    invoiceNumber: "INV003",
    title: "Lab Test Fee",
    patient: "Michael Brown",
    creationDate: "2024-08-22",
    dueDate: "2024-09-22",
    vatPercentage: "3%",
    discountAmount: "$5",
    status: "Overdue",
  options: "View Invoice",
  },
  {
    invoiceNumber: "INV004",
    title: "X-ray Service",
    patient: "Emily Johnson",
    creationDate: "2024-09-01",
    dueDate: "2024-09-30",
    vatPercentage: "6%",
    discountAmount: "$15",
    status: "Paid",
   options: "View Invoice",
  },
  {
    invoiceNumber: "INV005",
    title: "Physiotherapy",
    patient: "Robert Lee",
    creationDate: "2024-07-20",
    dueDate: "2024-08-20",
    vatPercentage: "5%",
    discountAmount: "$20",
    status: "Cancelled",
   options: "View Invoice",
  },
];

export const bedAllotmentHeader = ["Bed Number", "Ward", "Patient", "Allotment Time","Discharge Time"];
export const bedAllotmentData = [
  {
    bedNumber: "B101",
    ward: "Cardiology",
    patient: "John Doe",
    allotmentTime: "2024-10-01 08:30 AM",
    dischargeTime: "2024-10-05 02:00 PM",
  },
  {
    bedNumber: "B102",
    ward: "Oncology",
    patient: "Jane Smith",
    allotmentTime: "2024-09-28 10:15 AM",
    dischargeTime: "2024-10-04 11:00 AM",
  },
  {
    bedNumber: "B103",
    ward: "Pediatrics",
    patient: "Michael Brown",
    allotmentTime: "2024-10-02 09:45 AM",
    dischargeTime: "2024-10-06 12:00 PM",
  },
  {
    bedNumber: "B104",
    ward: "Orthopedics",
    patient: "Emily Johnson",
    allotmentTime: "2024-09-30 01:30 PM",
    dischargeTime: "2024-10-03 09:00 AM",
  },
  {
    bedNumber: "B105",
    ward: "General Surgery",
    patient: "Robert Lee",
    allotmentTime: "2024-10-01 07:00 AM",
    dischargeTime: "2024-10-07 04:00 PM",
  },
];


export const bloodBankHeader = ["Blood Group", "Status",];
export const bloodBankData = [
  {
    bloodGroup: "A+",
    status: "Available",
  },
  {
    bloodGroup: "O+",
    status: "Low Stock",
  },
  {
    bloodGroup: "B+",
    status: "Out of Stock",
  },
  {
    bloodGroup: "AB+",
    status: "Available",
  },
  {
    bloodGroup: "O-",
    status: "Low Stock",
  },
  {
    bloodGroup: "A-",
    status: "Available",
  },
  {
    bloodGroup: "B-",
    status: "Out of Stock",
  },
  {
    bloodGroup: "AB-",
    status: "Low Stock",
  },
];

export const bloodDonorHeader = ["Name","Age", "Gender","Blood Group", "Last Donation Date"]
export const bloodDonorData = [
  {
    name: "John Doe",
    age: 29,
    gender: "Male",
    bloodGroup: "A+",
    lastDonationDate: "2023-05-15",
  },
  {
    name: "Jane Smith",
    age: 34,
    gender: "Female",
    bloodGroup: "O+",
    lastDonationDate: "2023-08-10",
  },
  {
    name: "Robert Brown",
    age: 41,
    gender: "Male",
    bloodGroup: "B+",
    lastDonationDate: "2022-12-22",
  },
  {
    name: "Emily Davis",
    age: 25,
    gender: "Female",
    bloodGroup: "AB+",
    lastDonationDate: "2023-02-17",
  },
  {
    name: "Michael Johnson",
    age: 37,
    gender: "Male",
    bloodGroup: "O-",
    lastDonationDate: "2023-07-05",
  },
  {
    name: "Sarah Lee",
    age: 30,
    gender: "Female",
    bloodGroup: "A-",
    lastDonationDate: "2023-04-29",
  },
  {
    name: "David Kim",
    age: 43,
    gender: "Male",
    bloodGroup: "B-",
    lastDonationDate: "2023-06-12",
  },
  {
    name: "Laura Martinez",
    age: 27,
    gender: "Female",
    bloodGroup: "AB-",
    lastDonationDate: "2023-09-21",
  },
];

export const medicineHeader = ["Name", "Medicine Category", "Description", "Price", "Manufacturing Company", "Status"];
export const medicineData = [
  {
    name: "Paracetamol",
    medicineCategory: "Analgesic",
    description: "Used to relieve pain and reduce fever.",
    price: 5.99,
    manufacturingCompany: "ABC Pharmaceuticals",
    status: "Available",
  },
  {
    name: "Amoxicillin",
    medicineCategory: "Antibiotic",
    description: "Treats bacterial infections like pneumonia and bronchitis.",
    price: 12.50,
    manufacturingCompany: "XYZ Labs",
    status: "Out of Stock",
  },
  {
    name: "Cetirizine",
    medicineCategory: "Antihistamine",
    description: "Used to treat allergy symptoms, such as hay fever.",
    price: 3.49,
    manufacturingCompany: "HealthPlus Corp",
    status: "Available",
  },
  {
    name: "Metformin",
    medicineCategory: "Antidiabetic",
    description: "Controls high blood sugar for people with type 2 diabetes.",
    price: 8.99,
    manufacturingCompany: "Global Pharma",
    status: "Available",
  },
  {
    name: "Ibuprofen",
    medicineCategory: "NSAID",
    description: "Reduces inflammation and treats mild to moderate pain.",
    price: 4.75,
    manufacturingCompany: "Wellness Pharm",
    status: "Available",
  },
  {
    name: "Losartan",
    medicineCategory: "Antihypertensive",
    description: "Used to treat high blood pressure and protect kidneys.",
    price: 10.25,
    manufacturingCompany: "CareLife Pharmaceuticals",
    status: "Out of Stock",
  },
  {
    name: "Omeprazole",
    medicineCategory: "Antacid",
    description: "Treats acid reflux and other gastrointestinal conditions.",
    price: 6.80,
    manufacturingCompany: "MedCo Industries",
    status: "Available",
  },
  {
    name: "Aspirin",
    medicineCategory: "Analgesic",
    description: "Used to reduce pain, fever, or inflammation.",
    price: 2.99,
    manufacturingCompany: "PharmaTech Solutions",
    status: "Available",
  },
];

export const operationReportHeader = ["Description", "Date", "Patient", "Doctor"];
export const operationReportData = [
  {
    description: "Appendectomy",
    date: "2024-09-15",
    patient: "John Doe",
    doctor: "Dr. Sarah Williams",
  },
  {
    description: "Knee Replacement",
    date: "2024-08-21",
    patient: "Jane Smith",
    doctor: "Dr. Michael Brown",
  },
  {
    description: "Cataract Surgery",
    date: "2024-07-12",
    patient: "Robert Wilson",
    doctor: "Dr. Emily Johnson",
  },
  {
    description: "Coronary Artery Bypass",
    date: "2024-06-05",
    patient: "Paul Taylor",
    doctor: "Dr. Richard Adams",
  },
  {
    description: "Gallbladder Removal",
    date: "2024-05-29",
    patient: "Alice Green",
    doctor: "Dr. Laura Martinez",
  },
  {
    description: "Hip Replacement",
    date: "2024-04-17",
    patient: "James Moore",
    doctor: "Dr. Kevin Scott",
  },
  {
    description: "Hernia Repair",
    date: "2024-03-10",
    patient: "Nancy Lee",
    doctor: "Dr. William Davis",
  },
  {
    description: "Lung Transplant",
    date: "2024-02-08",
    patient: "Charles White",
    doctor: "Dr. Anthony Clark",
  },
];


export const birthReportHeader = ["Description", "Date","Patient","Doctor"];
export const birthReportData = [
  {
    description: "Normal Delivery",
    date: "2024-09-10",
    patient: "Mary Johnson",
    doctor: "Dr. Emily Clark",
  },
  {
    description: "Cesarean Section",
    date: "2024-08-25",
    patient: "Sophia Brown",
    doctor: "Dr. Michael Smith",
  },
  {
    description: "Normal Delivery",
    date: "2024-07-30",
    patient: "Emma Williams",
    doctor: "Dr. Sarah Johnson",
  },
  {
    description: "Premature Birth",
    date: "2024-06-20",
    patient: "Olivia Taylor",
    doctor: "Dr. James Anderson",
  },
  {
    description: "Normal Delivery",
    date: "2024-05-15",
    patient: "Isabella Martinez",
    doctor: "Dr. Kevin Thompson",
  },
  {
    description: "Twins Delivery",
    date: "2024-04-12",
    patient: "Ava Garcia",
    doctor: "Dr. Richard Hernandez",
  },
  {
    description: "Cesarean Section",
    date: "2024-03-05",
    patient: "Mia Lee",
    doctor: "Dr. Anthony Davis",
  },
  {
    description: "Normal Delivery",
    date: "2024-02-22",
    patient: "Charlotte White",
    doctor: "Dr. Laura Martinez",
  },
];

export const deathReportHeader = ["Description", "Date","Patient","Doctor"];
export const deathReportData = [
  {
    description: "Cardiac Arrest",
    date: "2024-09-18",
    patient: "John Doe",
    doctor: "Dr. Michael Carter",
  },
  {
    description: "Respiratory Failure",
    date: "2024-08-29",
    patient: "Jane Smith",
    doctor: "Dr. Sarah Evans",
  },
  {
    description: "Brain Aneurysm",
    date: "2024-07-21",
    patient: "Robert Johnson",
    doctor: "Dr. Emily Walker",
  },
  {
    description: "Multiple Organ Failure",
    date: "2024-06-15",
    patient: "William Brown",
    doctor: "Dr. Kevin Adams",
  },
  {
    description: "Complications from Surgery",
    date: "2024-05-30",
    patient: "Patricia Martinez",
    doctor: "Dr. Anthony Davis",
  },
  {
    description: "Severe Stroke",
    date: "2024-04-18",
    patient: "James Taylor",
    doctor: "Dr. Laura Cooper",
  },
  {
    description: "Accidental Injury",
    date: "2024-03-09",
    patient: "Richard Wilson",
    doctor: "Dr. Benjamin Green",
  },
  {
    description: "Septic Shock",
    date: "2024-02-25",
    patient: "Linda Harris",
    doctor: "Dr. Rachel Clark",
  },
];

export const surgeryQueueHeader = ["#","Date Of Entry", "Scheduled For", "Operation", "Indication", "Anaesthesia","Remark" ,"Patient",  "Action"]

export const surgeryQueueData = [
  {
    id: 1,
    dateOfEntry: "2024-10-29",
    scheduledFor: "2024-11-03",
    operation: "Appendectomy",
    indication: "Acute Appendicitis",
    anaesthesia: "General",
    remark: "NPO for 8 hours",
    patient: "John Doe",
    action: "Schedule Surgery"
  },
  {
    id: 2,
    dateOfEntry: "2024-10-28",
    scheduledFor: "2024-11-05",
    operation: "Cholecystectomy",
    indication: "Gallstones",
    anaesthesia: "General",
    remark: "Check liver function tests",
    patient: "Jane Smith",
    action: "Schedule Surgery"
  },
  {
    id: 3,
    dateOfEntry: "2024-10-27",
    scheduledFor: "2024-11-10",
    operation: "Hernia Repair",
    indication: "Inguinal Hernia",
    anaesthesia: "Local",
    remark: "Patient is diabetic",
    patient: "Michael Brown",
    action: "Schedule Surgery"
  },
  {
    id: 4,
    dateOfEntry: "2024-10-26",
    scheduledFor: "2024-11-12",
    operation: "Thyroidectomy",
    indication: "Thyroid Nodule",
    anaesthesia: "General",
    remark: "Check thyroid function tests",
    patient: "Emily White",
    action: "Schedule Surgery"
  }
];

export const laboratoryTestResultsHeader = ["#","Test", "Date", "Patient", "Laboratorian", "Status",  "Action"]
export const laboratoryTestResultsData = [
  {
    id: 1,
    test: "Complete Blood Count (CBC)",
    date: "2024-10-28",
    patient: "Alice Johnson",
    laboratorian: "Dr. Sarah Lee",
    status: "Completed",
  action: "View"
  },
  {
    id: 2,
    test: "Liver Function Test (LFT)",
    date: "2024-10-27",
    patient: "Robert Brown",
    laboratorian: "Dr. Michael Chen",
    status: "Pending",
    action: "View"
  },
  {
    id: 3,
    test: "COVID-19 PCR",
    date: "2024-10-26",
    patient: "Maria Garcia",
    laboratorian: "Dr. Emily Zhang",
    status: "In Progress",
   action: "View"
  },
  {
    id: 4,
    test: "Urinalysis",
    date: "2024-10-25",
    patient: "David Smith",
    laboratorian: "Dr. John Kim",
    status: "Completed",
   action: "View"
  },
  {
    id: 5,
    test: "Blood Glucose Test",
    date: "2024-10-24",
    patient: "Linda Taylor",
    laboratorian: "Dr. Jessica Brown",
    status: "Pending",
    action: "View"
  }
];

export const laboratoryTestRequestsHeader = ["#","Test Requested", "Date", "Patient", "Doctor", "Status",  "Action"]
export const laboratoryTestRequestsData = [
  {
    id: 1,
    testRequested: "Blood Culture",
    date: "2024-10-29",
    patient: "Alice Johnson",
    doctor: "Dr. Sarah Lee",
    status: "Requested",
    action: "View"
  },
  {
    id: 2,
    testRequested: "Electrolyte Panel",
    date: "2024-10-28",
    patient: "James Brown",
    doctor: "Dr. Michael Chen",
    status: "Approved",
    action: "View"
  },
  {
    id: 3,
    testRequested: "Urine Analysis",
    date: "2024-10-27",
    patient: "Robert Green",
    doctor: "Dr. Emily Zhang",
    status: "In Progress",
    action: "View"
  },
  {
    id: 4,
    testRequested: "Thyroid Panel",
    date: "2024-10-26",
    patient: "Emily White",
    doctor: "Dr. John Kim",
    status: "Completed",
    action: "View"
  },
  {
    id: 5,
    testRequested: "Chest X-ray",
    date: "2024-10-25",
    patient: "Mark Davis",
    doctor: "Dr. Jessica Brown",
    status: "Requested",
    action: "View"
  }
];

export const manageRefundsHeader = ["#","Invoice Number", "Patient", "Item", "Invoice Balance", "Refund Amount",  "Created By", "Refund Approved By", "Status", "Creation Date", "Options"]
export const manageRefundsData = [
  {
    id: 1,
    invoiceNumber: "INV-1001",
    patient: "Alice Johnson",
    item: "MRI Scan",
    invoiceBalance: "$500",
    refundAmount: "$100",
    createdBy: "Dr. Sarah Lee",
    refundApprovedBy: "Dr. Michael Chen",
    status: "Approved",
    creationDate: "2024-10-28",
    options: "View"
  },
  {
    id: 2,
    invoiceNumber: "INV-1002",
    patient: "James Brown",
    item: "Blood Test",
    invoiceBalance: "$150",
    refundAmount: "$50",
    createdBy: "Dr. Emily Zhang",
    refundApprovedBy: "Dr. Sarah Lee",
    status: "Pending",
    creationDate: "2024-10-27",
    options: "View"
  },
  {
    id: 3,
    invoiceNumber: "INV-1003",
    patient: "Maria Garcia",
    item: "X-ray",
    invoiceBalance: "$200",
    refundAmount: "$80",
    createdBy: "Dr. John Kim",
    refundApprovedBy: "Dr. Jessica Brown",
    status: "Rejected",
    creationDate: "2024-10-26",
    options: "View"
  },
  {
    id: 4,
    invoiceNumber: "INV-1004",
    patient: "David Smith",
    item: "CT Scan",
    invoiceBalance: "$600",
    refundAmount: "$120",
    createdBy: "Dr. Michael Chen",
    refundApprovedBy: "Dr. Emily Zhang",
    status: "Approved",
    creationDate: "2024-10-25",
    options: "View"
  },
  {
    id: 5,
    invoiceNumber: "INV-1005",
    patient: "Linda Taylor",
    item: "Ultrasound",
    invoiceBalance: "$300",
    refundAmount: "$75",
    createdBy: "Dr. Jessica Brown",
    refundApprovedBy: "Dr. John Kim",
    status: "Pending",
    creationDate: "2024-10-24",
    options: "View"
  }
];

export const inpatientHeader=["Image", "Full Name", "Patient Id", "Ward", "Phone", "Gender","Blood Group", "Age", "Action"]

export const inpatientData = [
  {
    image: "https://example.com/images/patient1.jpg",
    fullName: "Alice Johnson",
    patientId: "P-1001",
    ward: "General Ward",
    phone: "555-1234",
    gender: "Female",
    bloodGroup: "O+",
    age: 45,
    action: "View Details"
  },
  {
    image: "https://example.com/images/patient2.jpg",
    fullName: "James Brown",
    patientId: "P-1002",
    ward: "ICU",
    phone: "555-5678",
    gender: "Male",
    bloodGroup: "A+",
    age: 52,
    action: "View Details"
  },
  {
    image: "https://example.com/images/patient3.jpg",
    fullName: "Maria Garcia",
    patientId: "P-1003",
    ward: "Surgery",
    phone: "555-8765",
    gender: "Female",
    bloodGroup: "B-",
    age: 34,
    action: "View Details"
  },
  {
    image: "https://example.com/images/patient4.jpg",
    fullName: "David Smith",
    patientId: "P-1004",
    ward: "Pediatrics",
    phone: "555-4321",
    gender: "Male",
    bloodGroup: "AB+",
    age: 28,
    action: "View Details"
  },
  {
    image: "https://example.com/images/patient5.jpg",
    fullName: "Linda Taylor",
    patientId: "P-1005",
    ward: "Maternity",
    phone: "555-6789",
    gender: "Female",
    bloodGroup: "O-",
    age: 30,
    action: "View Details"
  }
];



export const bloodDispatchedHeader = ["#","Blood Group","Quantity","Price","Total Price", "Clinic","Options"];
export const bloodDispatchedData = [
  {
    id: 1,
    bloodGroup: "O+",
    quantity: 3,
    price: "$50",
    totalPrice: "$150",
    clinic: "City Health Clinic",
    options: "View Details"
  },
  {
    id: 2,
    bloodGroup: "A+",
    quantity: 5,
    price: "$50",
    totalPrice: "$250",
    clinic: "Green Valley Hospital",
    options: "View Details"
  },
  {
    id: 3,
    bloodGroup: "B-",
    quantity: 2,
    price: "$55",
    totalPrice: "$110",
    clinic: "Sunrise Medical Center",
    options: "View Details"
  },
  {
    id: 4,
    bloodGroup: "AB+",
    quantity: 4,
    price: "$60",
    totalPrice: "$240",
    clinic: "Downtown Clinic",
    options: "View Details"
  },
  {
    id: 5,
    bloodGroup: "O-",
    quantity: 6,
    price: "$55",
    totalPrice: "$330",
    clinic: "Lakeside Hospital",
    options: "View Details"
  }
];

export const medicineCategoriesHeader = ["Name","Description","Options"];
export const medicineCategoriesData = [
  {
    name: "Analgesics",
    description: "Medications used to relieve pain without causing loss of consciousness.",
    options: "Edit | Delete"
  },
  {
    name: "Antibiotics",
    description: "Drugs that combat bacterial infections in the body.",
    options: "Edit | Delete"
  },
  {
    name: "Antipyretics",
    description: "Medications used to reduce fever.",
    options: "Edit | Delete"
  },
  {
    name: "Antiseptics",
    description: "Substances that prevent the growth of disease-causing microorganisms.",
    options: "Edit | Delete"
  },
  {
    name: "Vaccines",
    description: "Preparations that provide immunity against various diseases.",
    options: "Edit | Delete"
  }
];

export const expiredMedicineHeader = ["Medicine Name","Expiry Date","Date Entered","Quantity","Declared By","Manufacturing Company","Options"];
export const expiredMedicineData = [
  {
    medicineName: "Paracetamol",
    expiryDate: "2024-09-15",
    dateEntered: "2024-10-01",
    quantity: 50,
    declaredBy: "Dr. Sarah Lee",
    manufacturingCompany: "HealthCorp Pharmaceuticals",
    options: "View | Delete"
  },
  {
    medicineName: "Amoxicillin",
    expiryDate: "2024-08-10",
    dateEntered: "2024-09-20",
    quantity: 30,
    declaredBy: "Dr. Michael Chen",
    manufacturingCompany: "MediLab Inc.",
    options: "View | Delete"
  },
  {
    medicineName: "Ibuprofen",
    expiryDate: "2024-07-25",
    dateEntered: "2024-08-15",
    quantity: 20,
    declaredBy: "Dr. Emily Zhang",
    manufacturingCompany: "PharmaWell",
    options: "View | Delete"
  },
  {
    medicineName: "Ciprofloxacin",
    expiryDate: "2024-06-30",
    dateEntered: "2024-07-10",
    quantity: 10,
    declaredBy: "Dr. John Kim",
    manufacturingCompany: "GoodHealth Labs",
    options: "View | Delete"
  },
  {
    medicineName: "Metformin",
    expiryDate: "2024-05-20",
    dateEntered: "2024-06-01",
    quantity: 15,
    declaredBy: "Dr. Jessica Brown",
    manufacturingCompany: "Global Pharma",
    options: "View | Delete"
  }
];

export const manageMedicineHeader = ["#","Medicine Name", "Medicine Category", "Description", "Cost Price", "Selling Price",  "Total Quantity", "Sold Quantity", "Transferred Quantity", "Expired Quantity", "Remaining Stock", "Manufacturing Company"]
export const manageMedicineData = [
  {
    id: 1,
    medicineName: "Paracetamol",
    medicineCategory: "Analgesics",
    description: "Used for pain relief and fever reduction.",
    costPrice: "$0.50",
    sellingPrice: "$1.00",
    totalQuantity: 500,
    soldQuantity: 300,
    transferredQuantity: 50,
    expiredQuantity: 20,
    remainingStock: 130,
    manufacturingCompany: "HealthCorp Pharmaceuticals"
  },
  {
    id: 2,
    medicineName: "Amoxicillin",
    medicineCategory: "Antibiotics",
    description: "Used to treat bacterial infections.",
    costPrice: "$1.20",
    sellingPrice: "$2.50",
    totalQuantity: 400,
    soldQuantity: 250,
    transferredQuantity: 60,
    expiredQuantity: 10,
    remainingStock: 80,
    manufacturingCompany: "MediLab Inc."
  },
  {
    id: 3,
    medicineName: "Ibuprofen",
    medicineCategory: "Antipyretics",
    description: "Helps reduce fever and relieve pain.",
    costPrice: "$0.80",
    sellingPrice: "$1.50",
    totalQuantity: 600,
    soldQuantity: 450,
    transferredQuantity: 30,
    expiredQuantity: 15,
    remainingStock: 105,
    manufacturingCompany: "PharmaWell"
  },
  {
    id: 4,
    medicineName: "Ciprofloxacin",
    medicineCategory: "Antibiotics",
    description: "Used for treating various bacterial infections.",
    costPrice: "$1.00",
    sellingPrice: "$2.20",
    totalQuantity: 300,
    soldQuantity: 180,
    transferredQuantity: 40,
    expiredQuantity: 20,
    remainingStock: 60,
    manufacturingCompany: "GoodHealth Labs"
  },
  {
    id: 5,
    medicineName: "Metformin",
    medicineCategory: "Antidiabetics",
    description: "Used to control high blood sugar in diabetes.",
    costPrice: "$0.70",
    sellingPrice: "$1.30",
    totalQuantity: 550,
    soldQuantity: 200,
    transferredQuantity: 80,
    expiredQuantity: 30,
    remainingStock: 240,
    manufacturingCompany: "Global Pharma"
  }
];


export const emergencyInventoryHeader = ["Medicine Name","Department","Medicine Category","Total Quantity","Issued Quantity","Remaining Stock","Manufacturing Company","Status"];
export const emergencyInventoryData = [
  {
    medicineName: "Aspirin",
    department: "Emergency",
    medicineCategory: "Analgesics",
    totalQuantity: 300,
    issuedQuantity: 150,
    remainingStock: 150,
    manufacturingCompany: "HealthCorp Pharmaceuticals",
    status: "Available"
  },
  {
    medicineName: "Epinephrine",
    department: "Cardiology",
    medicineCategory: "Vasopressors",
    totalQuantity: 200,
    issuedQuantity: 180,
    remainingStock: 20,
    manufacturingCompany: "MediLab Inc.",
    status: "Low Stock"
  },
  {
    medicineName: "Salbutamol",
    department: "Respiratory",
    medicineCategory: "Bronchodilators",
    totalQuantity: 500,
    issuedQuantity: 300,
    remainingStock: 200,
    manufacturingCompany: "PharmaWell",
    status: "Available"
  },
  {
    medicineName: "Atropine",
    department: "Surgery",
    medicineCategory: "Antimuscarinics",
    totalQuantity: 100,
    issuedQuantity: 90,
    remainingStock: 10,
    manufacturingCompany: "GoodHealth Labs",
    status: "Critical"
  },
  {
    medicineName: "Naloxone",
    department: "Toxicology",
    medicineCategory: "Antidotes",
    totalQuantity: 250,
    issuedQuantity: 100,
    remainingStock: 150,
    manufacturingCompany: "Global Pharma",
    status: "Available"
  }
];

export const drugTransferHeader = ["Medicine Name","Department","Transfer Date","Quantity","Transferred By","Manufacturing Company"];
export const drugTransferData = [
  {
    medicineName: "Amoxicillin",
    department: "Pediatrics",
    transferDate: "2024-10-01",
    quantity: 50,
    transferredBy: "Dr. Sarah Lee",
    manufacturingCompany: "HealthCorp Pharmaceuticals"
  },
  {
    medicineName: "Lidocaine",
    department: "Emergency",
    transferDate: "2024-09-25",
    quantity: 30,
    transferredBy: "Nurse Michael Chen",
    manufacturingCompany: "MediLab Inc."
  },
  {
    medicineName: "Morphine",
    department: "Surgery",
    transferDate: "2024-09-20",
    quantity: 20,
    transferredBy: "Dr. Emily Zhang",
    manufacturingCompany: "PharmaWell"
  },
  {
    medicineName: "Ceftriaxone",
    department: "ICU",
    transferDate: "2024-09-15",
    quantity: 40,
    transferredBy: "Dr. John Kim",
    manufacturingCompany: "GoodHealth Labs"
  },
  {
    medicineName: "Salbutamol",
    department: "Respiratory",
    transferDate: "2024-09-10",
    quantity: 60,
    transferredBy: "Nurse Jessica Brown",
    manufacturingCompany: "Global Pharma"
  }
];

export const medicineSaleHeader = ["#","Medicine Name","Quantity","Price","Total Price","Patient","Options"];
export const medicineSaleData = [
  {
    id: 1,
    medicineName: "Ibuprofen",
    quantity: 10,
    price: "$1.50",
    totalPrice: "$15.00",
    patient: "John Doe",
    options: "View | Refund"
  },
  {
    id: 2,
    medicineName: "Paracetamol",
    quantity: 20,
    price: "$1.00",
    totalPrice: "$20.00",
    patient: "Jane Smith",
    options: "View | Refund"
  },
  {
    id: 3,
    medicineName: "Amoxicillin",
    quantity: 5,
    price: "$2.50",
    totalPrice: "$12.50",
    patient: "Michael Johnson",
    options: "View | Refund"
  },
  {
    id: 4,
    medicineName: "Ciprofloxacin",
    quantity: 8,
    price: "$2.20",
    totalPrice: "$17.60",
    patient: "Emily Davis",
    options: "View | Refund"
  },
  {
    id: 5,
    medicineName: "Metformin",
    quantity: 15,
    price: "$1.30",
    totalPrice: "$19.50",
    patient: "Sarah Brown",
    options: "View | Refund"
  }
];


export const usedDrugsHeader = ["#","Medicine Name","Quantity","Price","Time Issued","Issued By","Patient"];
export const usedDrugsData = [
  {
    id: 1,
    medicineName: "Aspirin",
    quantity: 5,
    price: "$0.50",
    timeIssued: "08:30 AM",
    issuedBy: "Nurse Sarah Lee",
    patient: "John Doe"
  },
  {
    id: 2,
    medicineName: "Diazepam",
    quantity: 2,
    price: "$1.20",
    timeIssued: "10:15 AM",
    issuedBy: "Dr. Michael Chen",
    patient: "Jane Smith"
  },
  {
    id: 3,
    medicineName: "Ibuprofen",
    quantity: 3,
    price: "$1.50",
    timeIssued: "01:45 PM",
    issuedBy: "Nurse Emily Zhang",
    patient: "Michael Johnson"
  },
  {
    id: 4,
    medicineName: "Paracetamol",
    quantity: 10,
    price: "$1.00",
    timeIssued: "11:00 AM",
    issuedBy: "Dr. John Kim",
    patient: "Emily Davis"
  },
  {
    id: 5,
    medicineName: "Ciprofloxacin",
    quantity: 4,
    price: "$2.20",
    timeIssued: "09:30 AM",
    issuedBy: "Nurse Jessica Brown",
    patient: "Sarah Brown"
  }
];


export const billableItemsHeader = [ "Name", "Billable Category", "Price","Total Quantity", "Sold Quantity", "Options"]
export const billableItemsData = [
  {
    name: "X-Ray",
    billableCategory: "Radiology",
    price: "$50.00",
    totalQuantity: 100,
    soldQuantity: 75,
    options: "View | Edit | Delete"
  },
  {
    name: "Blood Test",
    billableCategory: "Laboratory",
    price: "$20.00",
    totalQuantity: 200,
    soldQuantity: 150,
    options: "View | Edit | Delete"
  },
  {
    name: "MRI Scan",
    billableCategory: "Radiology",
    price: "$200.00",
    totalQuantity: 50,
    soldQuantity: 30,
    options: "View | Edit | Delete"
  },
  {
    name: "Physical Therapy Session",
    billableCategory: "Therapy",
    price: "$75.00",
    totalQuantity: 80,
    soldQuantity: 55,
    options: "View | Edit | Delete"
  },
  {
    name: "Ultrasound",
    billableCategory: "Radiology",
    price: "$100.00",
    totalQuantity: 120,
    soldQuantity: 90,
    options: "View | Edit | Delete"
  }
];

export const billableCategoryHeader = [ "#", "Name", "Description","Options"]
export const billableCategoryData = [
  {
    id: 1,
    name: "Radiology",
    description: "Includes imaging services such as X-rays, MRI, and ultrasound.",
    options: "View | Edit | Delete"
  },
  {
    id: 2,
    name: "Laboratory",
    description: "Covers various diagnostic tests including blood tests and biopsies.",
    options: "View | Edit | Delete"
  },
  {
    id: 3,
    name: "Therapy",
    description: "Physical and occupational therapy sessions for patient rehabilitation.",
    options: "View | Edit | Delete"
  },
  {
    id: 4,
    name: "Surgery",
    description: "Charges related to surgical procedures and operating room use.",
    options: "View | Edit | Delete"
  },
  {
    id: 5,
    name: "Pharmacy",
    description: "Medication and pharmaceutical supplies dispensed to patients.",
    options: "View | Edit | Delete"
  }
];

export const directRequestsHeader = [ "Date", "Patient", "From Doctor","Action"]
export const directRequestsData = [
  {
    date: "2024-10-15",
    patient: "John Doe",
    fromDoctor: "Dr. Sarah Lee",
    action: "View | Approve | Decline"
  },
  {
    date: "2024-10-16",
    patient: "Jane Smith",
    fromDoctor: "Dr. Michael Chen",
    action: "View | Approve | Decline"
  },
  {
    date: "2024-10-17",
    patient: "Michael Johnson",
    fromDoctor: "Dr. Emily Zhang",
    action: "View | Approve | Decline"
  },
  {
    date: "2024-10-18",
    patient: "Emily Davis",
    fromDoctor: "Dr. John Kim",
    action: "View | Approve | Decline"
  },
  {
    date: "2024-10-19",
    patient: "Sarah Brown",
    fromDoctor: "Dr. Jessica Brown",
    action: "View | Approve | Decline"
  }
];

export const radiologyScanRequestHeader = [ "Test", "Date", "Patient","Doctor", "Invoice Status", "Invoice No", "No of Test", "Action", "Test Status"]
export const radiologyScanRequestData = [
  {
    test: "MRI Brain Scan",
    date: "2024-10-20",
    patient: "John Doe",
    doctor: "Dr. Sarah Lee",
    invoiceStatus: "Paid",
    invoiceNo: "INV12345",
    noOfTest: 1,
    action: "View | Cancel",
    testStatus: "Pending"
  },
  {
    test: "Chest X-Ray",
    date: "2024-10-21",
    patient: "Jane Smith",
    doctor: "Dr. Michael Chen",
    invoiceStatus: "Unpaid",
    invoiceNo: "INV12346",
    noOfTest: 1,
    action: "View | Cancel",
    testStatus: "Scheduled"
  },
  {
    test: "Abdominal Ultrasound",
    date: "2024-10-22",
    patient: "Michael Johnson",
    doctor: "Dr. Emily Zhang",
    invoiceStatus: "Paid",
    invoiceNo: "INV12347",
    noOfTest: 2,
    action: "View | Cancel",
    testStatus: "Completed"
  },
  {
    test: "Spinal CT Scan",
    date: "2024-10-23",
    patient: "Emily Davis",
    doctor: "Dr. John Kim",
    invoiceStatus: "Unpaid",
    invoiceNo: "INV12348",
    noOfTest: 1,
    action: "View | Cancel",
    testStatus: "Pending"
  },
  {
    test: "Pelvic MRI",
    date: "2024-10-24",
    patient: "Sarah Brown",
    doctor: "Dr. Jessica Brown",
    invoiceStatus: "Paid",
    invoiceNo: "INV12349",
    noOfTest: 1,
    action: "View | Cancel",
    testStatus: "Scheduled"
  }
];

export const radiologyScanResultsHeader =["Test", "Date", "Patient","Laboratorian", "Status", "Action",]
export const radiologyScanResultsData = [
  {
    test: "MRI Brain Scan",
    date: "2024-10-20",
    patient: "John Doe",
    laboratorian: "Lab Tech Sarah Adams",
    status: "Completed",
    action: "View | Download"
  },
  {
    test: "Chest X-Ray",
    date: "2024-10-21",
    patient: "Jane Smith",
    laboratorian: "Lab Tech Michael Chen",
    status: "In Progress",
    action: "View"
  },
  {
    test: "Abdominal Ultrasound",
    date: "2024-10-22",
    patient: "Michael Johnson",
    laboratorian: "Lab Tech Emily Zhang",
    status: "Completed",
    action: "View | Download"
  },
  {
    test: "Spinal CT Scan",
    date: "2024-10-23",
    patient: "Emily Davis",
    laboratorian: "Lab Tech John Kim",
    status: "Pending",
    action: "View"
  },
  {
    test: "Pelvic MRI",
    date: "2024-10-24",
    patient: "Sarah Brown",
    laboratorian: "Lab Tech Jessica Brown",
    status: "Completed",
    action: "View | Download"
  }
];

export const invoicesHeader =["#", "Invoice Number", "Patient","Item", "Quantity", "Price","Invoice Total","Created By","Received By","Status","Date","Action"]
export const invoicesData = [
  {
    id: 1,
    invoiceNumber: "INV-00123",
    patient: "John Doe",
    item: "Blood Test",
    quantity: 2,
    price: 50.00,
    invoiceTotal: 100.00,
    createdBy: "Dr. Smith",
    receivedBy: "Nurse Joy",
    status: "Paid",
    date: "2024-11-01",
    action: "View"
  },
  {
    id: 2,
    invoiceNumber: "INV-00124",
    patient: "Jane Smith",
    item: "X-ray",
    quantity: 1,
    price: 75.00,
    invoiceTotal: 75.00,
    createdBy: "Dr. Adams",
    receivedBy: "Nurse Hope",
    status: "Unpaid",
    date: "2024-11-02",
    action: "View"
  },
  {
    id: 3,
    invoiceNumber: "INV-00125",
    patient: "Michael Johnson",
    item: "MRI Scan",
    quantity: 1,
    price: 300.00,
    invoiceTotal: 300.00,
    createdBy: "Dr. Lee",
    receivedBy: "Nurse Joy",
    status: "Paid",
    date: "2024-11-03",
    action: "View"
  },
  {
    id: 4,
    invoiceNumber: "INV-00126",
    patient: "Emily White",
    item: "Physical Therapy",
    quantity: 5,
    price: 40.00,
    invoiceTotal: 200.00,
    createdBy: "Dr. Brown",
    ReceivedBy: "Nurse Faith",
    status: "Pending",
    date: "2024-11-04",
    action: "View"
  },
  {
    id: 5,
    invoiceNumber: "INV-00127",
    patient: "Chris Green",
    item: "Ultrasound",
    quantity: 1,
    price: 120.00,
    invoiceTotal: 120.00,
    createdBy: "Dr. Wilson",
    receivedBy: "Nurse Hope",
    status: "Paid",
    date: "2024-11-05",
    action: "View"
  }
];

export const collatedInvoicesHeader =["#", "Invoice Number", "Patient","Creation Date","Due Date","Amount","Status","Options"]
export const collatedInvoicesData = [
  {
    id: 1,
    invoiceNumber: "INV-10001",
    patient: "John Doe",
    creationDate: "2024-10-01",
    dueDate: "2024-10-15",
    amount: 500.00,
    status: "Paid",
    options: "View"
  },
  {
    id: 2,
    invoiceNumber: "INV-10002",
    patient: "Jane Smith",
    creationDate: "2024-10-05",
    dueDate: "2024-10-20",
    amount: 750.00,
    status: "Unpaid",
    options: "View"
  },
  {
    id: 3,
    invoiceNumber: "INV-10003",
    patient: "Michael Johnson",
    creationDate: "2024-10-10",
    dueDate: "2024-10-25",
    amount: 300.00,
    status: "Paid",
    options: "View"
  },
  {
    id: 4,
    invoiceNumber: "INV-10004",
    patient: "Emily White",
    creationDate: "2024-10-12",
    dueDate: "2024-10-27",
    amount: 450.00,
    status: "Pending",
    options: "View"
  },
  {
    id: 5,
    invoiceNumber: "INV-10005",
    patient: "Chris Green",
    creationDate: "2024-10-15",
    dueDate: "2024-10-30",
    amount: 600.00,
    status: "Paid",
    options: "View"
  }
];

export const revenueHeader =["#", "Creation Date", "Invoice Number","Patient", "Item Name", "Quantity","Price","Refund Amount","Created By","Payment Received By","Status"]
export const revenueData = [
  {
    id: 1,
    creationDate: "2024-10-20",
    invoiceNumber: "INV12345",
    patient: "John Doe",
    itemName: "MRI Brain Scan",
    quantity: 1,
    price: "$500.00",
    refundAmount: "$0.00",
    createdBy: "Dr. Sarah Lee",
    paymentReceivedBy: "Cashier Emily Smith",
    status: "Paid"
  },
  {
    id: 2,
    creationDate: "2024-10-21",
    invoiceNumber: "INV12346",
    patient: "Jane Smith",
    itemName: "Chest X-Ray",
    quantity: 1,
    price: "$100.00",
    refundAmount: "$10.00",
    createdBy: "Dr. Michael Chen",
    paymentReceivedBy: "Cashier Tom Brown",
    status: "Partial Refund"
  },
  {
    id: 3,
    creationDate: "2024-10-22",
    invoiceNumber: "INV12347",
    patient: "Michael Johnson",
    itemName: "Blood Test Panel",
    quantity: 3,
    price: "$150.00",
    refundAmount: "$0.00",
    createdBy: "Lab Tech Emily Zhang",
    paymentReceivedBy: "Cashier Sarah Adams",
    status: "Paid"
  },
  {
    id: 4,
    creationDate: "2024-10-23",
    invoiceNumber: "INV12348",
    patient: "Emily Davis",
    itemName: "Spinal CT Scan",
    quantity: 1,
    price: "$300.00",
    refundAmount: "$50.00",
    createdBy: "Dr. John Kim",
    paymentReceivedBy: "Cashier Jessica Brown",
    status: "Refunded"
  },
  {
    id: 5,
    creationDate: "2024-10-24",
    invoiceNumber: "INV12349",
    patient: "Sarah Brown",
    itemName: "Physical Therapy Session",
    quantity: 5,
    price: "$375.00",
    refundAmount: "$0.00",
    createdBy: "Therapist Mark Lee",
    paymentReceivedBy: "Cashier Emily Smith",
    status: "Paid"
  }
];

export const appointmentHeader =["#", "Date","Patient", "Telemedicine","Action"]
export const appointmentData = [
  {
    id: 1,
    date: "2024-10-25",
    patient: "John Doe",
    telemedicine: "Yes",
    action: "View | Reschedule | Cancel"
  },
  {
    id: 2,
    date: "2024-10-26",
    patient: "Jane Smith",
    telemedicine: "No",
    action: "View | Reschedule | Cancel"
  },
  {
    id: 3,
    date: "2024-10-27",
    patient: "Michael Johnson",
    telemedicine: "Yes",
    action: "View | Reschedule | Cancel"
  },
  {
    id: 4,
    date: "2024-10-28",
    patient: "Emily Davis",
    telemedicine: "No",
    action: "View | Reschedule | Cancel"
  },
  {
    id: 5,
    date: "2024-10-29",
    patient: "Sarah Brown",
    telemedicine: "Yes",
    action: "View | Reschedule | Cancel"
  }
];


export const appointmentRequestsHeader =["#", "Date","Patient", "Doctor","Options"]
export const appointmentRequestsData = [
  {
    id: 1,
    date: "2024-10-25",
    patient: "John Doe",
    doctor: "Dr. Sarah Lee",
    options: "Approve | Reschedule | Decline"
  },
  {
    id: 2,
    date: "2024-10-26",
    patient: "Jane Smith",
    doctor: "Dr. Michael Chen",
    options: "Approve | Reschedule | Decline"
  },
  {
    id: 3,
    date: "2024-10-27",
    patient: "Michael Johnson",
    doctor: "Dr. Emily Zhang",
    options: "Approve | Reschedule | Decline"
  },
  {
    id: 4,
    date: "2024-10-28",
    patient: "Emily Davis",
    doctor: "Dr. John Kim",
    options: "Approve | Reschedule | Decline"
  },
  {
    id: 5,
    date: "2024-10-29",
    patient: "Sarah Brown",
    doctor: "Dr. Jessica Brown",
    options: "Approve | Reschedule | Decline"
  }
];

export const managePayrollHeader = ["#","ID", "Account", "Summary", "Date", "Status","Options"]
export const managePayrollData = [
  {
    id: 1,
    employeeId: "EMP12345",
    account: "John Doe - 1234567890",
    summary: "Monthly Salary - October",
    date: "2024-10-30",
    status: "Processed",
    options: "View | Edit | Delete"
  },
  {
    id: 2,
    employeeId: "EMP12346",
    account: "Jane Smith - 9876543210",
    summary: "Monthly Salary - October",
    date: "2024-10-30",
    status: "Pending",
    options: "View | Edit | Approve"
  },
  {
    id: 3,
    employeeId: "EMP12347",
    account: "Michael Johnson - 1122334455",
    summary: "Monthly Salary - October",
    date: "2024-10-30",
    status: "Processed",
    options: "View | Edit | Delete"
  },
  {
    id: 4,
    employeeId: "EMP12348",
    account: "Emily Davis - 5566778899",
    summary: "Monthly Salary - October",
    date: "2024-10-30",
    status: "On Hold",
    options: "View | Edit | Approve"
  },
  {
    id: 5,
    employeeId: "EMP12349",
    account: "Sarah Brown - 9988776655",
    summary: "Monthly Salary - October",
    date: "2024-10-30",
    status: "Processed",
    options: "View | Edit | Delete"
  }
];

export const manageDiscountsHeader = ["#","Invoice Number", "Patient", "Item","Quantity", "Invoice Amount","Invoice Total", "Discount Amount",  "Created By", "Discount Approved By", "Status", "Creation Date", "Options"]

export const manageDiscountsData = [
  {
    id: 1,
    invoiceNumber: "INV-000123",
    patient: "John Doe",
    item: "X-Ray",
    quantity: 1,
    invoiceAmount: "$200",
    invoiceTotal: "$200",
    discountAmount: "$20",
    createdBy: "Dr. Smith",
    discountApprovedBy: "Admin Jane",
    status: "Approved",
    creationDate: "2024-10-01",
    options: "View/Edit",
  },
  {
    id: 2,
    invoiceNumber: "INV-000124",
    patient: "Jane Roe",
    item: "Blood Test",
    quantity: 3,
    invoiceAmount: "$150",
    invoiceTotal: "$450",
    discountAmount: "$45",
    createdBy: "Dr. Allen",
    discountApprovedBy: "Admin Jane",
    status: "Pending",
    creationDate: "2024-10-02",
    options: "View/Edit",
  },
  {
    id: 3,
    invoiceNumber: "INV-000125",
    patient: "Michael Brown",
    item: "MRI Scan",
    quantity: 1,
    invoiceAmount: "$500",
    invoiceTotal: "$500",
    discountAmount: "$50",
    createdBy: "Dr. Emma",
    discountApprovedBy: "Admin Joe",
    status: "Rejected",
    creationDate: "2024-10-03",
    options: "View/Edit",
  },
  {
    id: 4,
    invoiceNumber: "INV-000126",
    patient: "Olivia Smith",
    item: "CT Scan",
    quantity: 1,
    invoiceAmount: "$600",
    invoiceTotal: "$600",
    discountAmount: "$60",
    createdBy: "Dr. Williams",
    discountApprovedBy: "Admin Jane",
    status: "Approved",
    creationDate: "2024-10-04",
    options: "View/Edit",
  },
  {
    id: 5,
    invoiceNumber: "INV-000127",
    patient: "David Johnson",
    item: "Ultrasound",
    quantity: 2,
    invoiceAmount: "$300",
    invoiceTotal: "$600",
    discountAmount: "$30",
    createdBy: "Dr. Miller",
    discountApprovedBy: "Admin Joe",
    status: "Approved",
    creationDate: "2024-10-05",
    options: "View/Edit",
  }
];





