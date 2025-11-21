# Set base URL
$baseUrl = "http://localhost:3000/api"

# Bypass execution policy temporarily
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Sample volunteer tasks to populate
$tasks = @(
    @{ task="Distribute Food"; assignedTo="Volunteer1" },
    @{ task="Clean Park"; assignedTo="Volunteer2" }
)

# Populate volunteer_tasks
Write-Host "`n🚀 Populating volunteer_tasks..."
foreach ($t in $tasks) {
    $json = $t | ConvertTo-Json -Compress
    try {
        $response = Invoke-RestMethod -Uri "$baseUrl/volunteer_tasks/add" -Method POST -Body $json -ContentType "application/json"
        Write-Host "✅ $response"
    } catch {
        Write-Host "❌ Error adding task: $($_.Exception.Message)"
    }
}

# Check leaderboard
Write-Host "`n🔍 Checking leaderboard..."
try {
    $response = Invoke-RestMethod -Uri "$baseUrl/leaderboard" -Method GET
    Write-Host "`nLeaderboard data:`n$response"
} catch {
    Write-Host "❌ Error accessing leaderboard: $($_.Exception.Message)"
}

Write-Host "`n🎉 Done! Volunteer tasks populated and leaderboard checked!"
