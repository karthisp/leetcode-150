var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (grid[i][j] === "1") {
                count++
                dfs(grid, i, j, m, n)
            }
        }
    }

    return count
};

function dfs (adjMatrix, i, j, m, n) {
    if (i < 0 || j < 0 || i === m || j === n || adjMatrix[i][j] === "0") return
    adjMatrix[i][j] = "0";
    dfs(adjMatrix, i-1, j, m, n);
    dfs(adjMatrix, i+1, j, m, n);
    dfs(adjMatrix, i, j+1, m, n);
    dfs(adjMatrix, i, j-1, m, n);
}