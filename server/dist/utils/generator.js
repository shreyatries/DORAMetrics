import { faker } from "@faker-js/faker";
//---utilities---
function randomDateWithinLast30Days() {
    const currentDate = new Date();
    const past = new Date();
    past.setDate(currentDate.getDate() - 30);
    return faker.date.between({ from: past, to: currentDate });
}
function randomStatus() {
    return faker.helpers.arrayElement(["inProgress", "completed", "cancelling"]);
}
function randomResult() {
    return faker.helpers.arrayElement(["succeeded", "failed", "cancelled", "partiallySucceeded"]);
}
//---Generating mock data---
function generateBuilds(count = 200) {
    const builds = [];
    for (let i = 0; i < count; i++) {
        const startTime = randomDateWithinLast30Days();
        const finishTime = faker.date.soon({ days: 1, refDate: startTime });
        builds.push({
            id: faker.number.int({ min: 1000, max: 9999 }),
            buildNumber: `Build_${faker.string.alphanumeric(6).toUpperCase()}`,
            projectId: faker.string.uuid(),
            definitionId: faker.number.int({ min: 1, max: 10 }),
            definitionName: faker.commerce.department(),
            status: randomStatus(),
            result: randomResult(),
            startTime,
            finishTime,
            requestedBy: faker.person.fullName(),
            tags: faker.helpers.arrayElements(["CI", "Nightly", "Release", "Hotfix"], { min: 0, max: 3 }),
            sourceBranch: faker.helpers.arrayElement(["main", "develop", "feature/dummyfeaturebranch", "release/1.0"]),
            repositoryId: faker.string.uuid(),
        });
    }
    return builds;
}
function generateWorkItems(count = 200) {
    const workItems = [];
    for (let i = 0; i < count; i++) {
        const createdDate = randomDateWithinLast30Days();
        const closedDate = faker.datatype.boolean() && Math.random() > 0.3
            ? faker.date.soon({ days: 10, refDate: createdDate })
            : null;
        workItems.push({
            id: faker.number.int({ min: 10000, max: 99999 }),
            projectId: faker.string.uuid(),
            workItemType: faker.helpers.arrayElement(["Bug", "Feature", "Task", "Epic"]),
            title: faker.commerce.productName(),
            state: faker.helpers.arrayElement(["New", "Active", "Closed", "Resolved"]),
            createdDate,
            closedDate,
            assignedTo: faker.person.fullName(),
            tags: faker.helpers.arrayElements(["Backend", "Frontend", "API", "DB", "Integration", "Test", "UI", "UX"], { min: 0, max: 3 }),
        });
    }
    return workItems;
}
module.exports = { generateBuilds, generateWorkItems };
