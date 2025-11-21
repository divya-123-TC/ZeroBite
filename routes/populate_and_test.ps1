# Set your base URL
$baseUrl = "http://localhost:3000/api"

# Sample data for collections
$sampleData = @{
    users = @(@{name="Alice"; email="alice@example.com"}, @{name="Bob"; email="bob@example.com"})
    donations = @(@{donor="Alice"; amount=100}, @{donor="Bob"; amount=50})
    shelters = @(@{name="City Shelter"; location="Downtown"}, @{name="Community Shelter"; location="Uptown"})
    ngos = @(@{name="Helping Hands"; location="Central"}, @{name="Good Deeds"; location="Westside"})
    swms = @(@{location="North Street"; contact="12345"}, @{location="South Street"; contact="67890"})
    volunteer_tasks = @(@{task="Distribute Food"; assignedTo="Volunteer1"}, @{task="Clean Park"; assignedTo="Volunteer2"})
    leaderboard = @()  # usually auto-generated
}

# Function to populate a collection
function Populate-Collection {
    param(
        [string]$collection,
        [array]$items
    )
    foreach ($item in $items) {
        $json = $item | ConvertTo-Json -Compress
        try {
            switch ($collection) {
                "users" {
                    $response = Invoke-RestMethod -Uri "$baseUrl/users/register" -Method POST -Body $json -ContentType "application/json"
                }
                default {
                    $response = Invoke-RestMethod -Uri "$baseUrl/$collection/add" -Method POST -Body $json -ContentType "application/json"
                }
            }
            Write-Host "✅ Populated ${collection}: $response"
        } catch {
            Write-Host "❌ Error populating ${collection}: $($_.Exception.Message)"
        }
    }
}

# Function to check collection data (ignores 404)
function Check-Collection {
    param([string]$collection)
    try {
        $url = if ($collection -eq "users") { "$baseUrl/users" } else { "$baseUrl/$collection" }
        $response = Invoke-RestMethod -Uri $url -Method GET
        Write-Host "`n🔍 Data in ${collection}:"
        $response | ConvertTo-Json | Write-Host
    } catch {
        if ($_.Exception.Response.StatusCode -eq 404) {
            Write-Host "⚠️ GET not implemented for ${collection}, skipping check."
        } else {
            Write-Host "❌ Error accessing ${collection}: $($_.Exception.Message)"
        }
    }
}

# Populate all collections except leaderboard
foreach ($col in $sampleData.Keys) {
    if ($col -ne "leaderboard") {
        Write-Host "`n🚀 Populating ${col}..."
        Populate-Collection -collection $col -items $sampleData[$col]
    }
}

# Check all collections
foreach ($col in $sampleData.Keys) {
    Write-Host "`nChecking ${col}..."
    Check-Collection -collection $col
}

Write-Host "`n🎉 All collections populated and checked!"

# Optional: Test a POST endpoint
Write-Host "`nTesting POST /donations/add..."
Invoke-RestMethod -Uri "$baseUrl/donations/add" -Method POST -Body '{"donor":"Charlie","amount":200}' -ContentType "application/json"
Write-Host "✅ POST donation tested!"

Write-Host "`nTesting POST /volunteer_tasks/add..."
Invoke-RestMethod -Uri "$baseUrl/volunteer_tasks/add" -Method POST -Body '{"task":"Plant Trees","assignedTo":"Volunteer3"}' -ContentType "application/json"
Write-Host "✅ POST volunteer task tested!"
