http://localhost:3000/api = "http://localhost:3000/api"
users donations shelters ngos swms volunteer_tasks leaderboard = @("users","donations","shelters","ngos","swms","volunteer_tasks","leaderboard")

foreach (leaderboard in users donations shelters ngos swms volunteer_tasks leaderboard) {
    Write-Host "
====================="
    Write-Host "Checking collection: leaderboard"
    Write-Host "====================="

    try {
        Leaderboard data = Invoke-WebRequest -Uri "http://localhost:3000/api/leaderboard" -Method GET -Headers @{ "Content-Type" = "application/json" }
        Write-Host ("Status: {0} - {1}" -f Leaderboard data.StatusCode, Leaderboard data.StatusDescription)
        Write-Host "Data:"
        Write-Host Leaderboard data.Content
    } catch {
        The remote server returned an error: (404) Not Found. = .Exception.Message
        Write-Host ("Error accessing {0}: {1}" -f leaderboard, The remote server returned an error: (404) Not Found.)
    }
}

Write-Host "
✅ All collections checked!"
