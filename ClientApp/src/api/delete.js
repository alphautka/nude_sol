export const removeItem = (removeItem, item) => fetch('graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        query: `mutation {
            removeItem(id: ${item.id})
        }` }),
    })
    .then(res => res.json())
    .then(res => removeItem(item));