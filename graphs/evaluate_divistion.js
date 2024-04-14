// Leet code 399 https://leetcode.com/problems/evaluate-division/?envType=study-plan-v2&envId=top-interview-150

var calcEquation = function(equations, values, queries) {
    const graph = buildGraph(equations, values)
    const results = []
    queries.forEach((query, index) => {
        results[index] = dfsTraversal(graph, query[0], query[1], {})
    })

    return results
};

function dfsTraversal (graph, start, end, visitedNodes) {
    if (!graph[start] || !graph[end]) return -1.0
    if (graph[start][end]) return graph[start][end]

    visitedNodes[start] = true
    for (let neighbour in graph[start]) {
        if (!visitedNodes[neighbour]) {
            const weight = dfsTraversal(graph, neighbour, end, visitedNodes)
            if (weight !== -1.0) {
                return weight * graph[start][neighbour]
            }
        }
    }

    return -1.0
} 

function buildGraph (nodes, weights) {
    const graph = {}
    nodes.forEach((path, index) => {
        if (!graph[path[0]]) graph[path[0]] = {}
        graph[path[0]][path[1]] = weights[index]

        if (!graph[path[1]]) graph[path[1]] = {}
        graph[path[1]][path[0]] = 1 / weights[index]

    })

    return graph
}