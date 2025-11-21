# Set base URL
\http://localhost:3000/api = "http://localhost:3000/api"

# Sample data for each collection
\System.Collections.Hashtable = @{
    users = @(@{ name="Alice"; email="alice@example.com" }, @{ name="Bob"; email="bob@example.com" })
    donations = @(@{ item="Clothes"; quantity=10 }, @{ item="Books"; quantity=5 })
    shelters = @(@{ name="Shelter A"; location="City Center" }, @{ name="Shelter B"; location="North Side" })
    ngos = @(@{ name="NGO1"; location="East City" }, @{ name="NGO2"; location="West City" })
    swms = @(@{ location="Park"; contact="1234567890" }, @{ location="Beach"; contact="0987654321" })
    volunteer_tasks = @(@{ task="Distribute Food"; assignedTo="Volunteer1" }, @{ task="Clean Park"; assignedTo="Volunteer2" })
    leaderboard = @(@{ name="Alice"; points=50 }, @{ name="Bob"; points=40 })
}

# Function to POST sample data
function Populate-Collection {
    param (\, \)
    foreach (\System.Collections.Hashtable in \) {
        try {
            \{"task":"Clean Park","assignedTo":"Volunteer2"} = \System.Collections.Hashtable | ConvertTo-Json -Compress
            \Leaderboard data = Invoke-RestMethod -Uri "\http://localhost:3000/api/\/add" -Method POST -Body \{"task":"Clean Park","assignedTo":"Volunteer2"} -ContentType "application/json"
            Write-Host "Populated : Leaderboard data"
        } catch {
            Write-Host ("Error populating {0}: {1}" -f \, \.Exception.Message)
        }
    }
}

# Populate all collections
foreach (\leaderboard in \System.Collections.Hashtable.Keys) {
    Write-Host "
Populating leaderboard..."
    Populate-Collection -collection \leaderboard -items \System.Collections.Hashtable[\leaderboard]
}

Start-Sleep -Seconds 1

# Function to GET and display all collections
function Check-Collection {
    param (\)
    try {
        \Leaderboard data = Invoke-RestMethod -Uri "\http://localhost:3000/api/\" -Method GET
        Write-Host "
Data in :
Leaderboard data"
    } catch {
        Write-Host ("Error accessing {0}: {1}" -f \, \.Exception.Message)
    }
}

# Check all collections
\users donations shelters ngos swms volunteer_tasks leaderboard = @("users","donations","shelters","ngos","swms","volunteer_tasks","leaderboard")
foreach (\leaderboard in \users donations shelters ngos swms volunteer_tasks leaderboard) {
    Check-Collection -collection \leaderboard
}

Write-Host "
✅ All collections populated and checked!"
