const initData = [
    {
        name: "25년 1주차",
        lastModified: "2025.01.06",
        created: "2025.01.06",
        writer: "홍길동",
        employeeId: "db012501",
        position: "사원",
        correspondWeek: "2025.01.06 ~ 2025.01.10",
        id: "1",
    },
    {
        name: "24년 5주차",
        lastModified: "2024.12.30",
        created: "2024.12.30",
        writer: "김명길",
        employeeId: "ab012501",
        position: "대리",
        correspondWeek: "2024.12.30 ~ 2025.01.04",
        id: "2",
    },
    {
        name: "24년 4주차",
        lastModified: "2024.12.23",
        created: "2024.12.23",
        writer: "박수영",
        employeeId: "cd012501",
        position: "주임",
        correspondWeek: "2024.12.23 ~ 2024.12.27",
        id: "3",
    },
    {
        name: "24년 3주차",
        lastModified: "2024.12.16",
        created: "2024.12.16",
        writer: "정명길",
        employeeId: "ef012501",
        position: "과장",
        correspondWeek: "2024.12.16 ~ 2024.12.20",
        id: "4",
    },
];

export async function getAllWeeklyPlan() {
    return initData;
}

export async function getWeeklyPlanById(id: string) {
    return initData.find((plan) => plan.id === id);
}
