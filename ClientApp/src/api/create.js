export const addItem = (addItem, item) => fetch('graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        query: `mutation {
            addItem(name:"${item.name}", price: ${item.price}, categoryId: ${item.categoryId}){ id }
        }` }),
    })
    .then(res => res.json())
    .then(res => addItem({ ...item, id: res.addItem.id }));

export const addCategory = (addCategory, categoryName) => fetch('graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        query: `mutation {
            addCategory(name: "${categoryName}") { id }
        }` }),
    })
    .then(res => res.json())
    .then(res => addCategory({ name: categoryName, id: res.addCategory.id, items: [] }));