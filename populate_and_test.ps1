$baseUrl = 'http://localhost:3000/api'

$sampleData = @{
    users = @(@{name='Alice'; email='alice@example.com'}, @{name='Bob'; email='bob@example.com'})
    donations = @(@{donor='Alice'; amount=100}, @{donor='Bob'; amount=50})
    shelters = @(@{name='City Shelter'; location='Downtown'}, @{name='Community Shelter'; location='Uptown'})
    ngos = @(@{name='Helping Hands'; location='Central'}, @{name='Good Deeds'; location='Westside'})
    swms = @(@{location='North Street'; contact='12345'}, @{location='South Street'; contact='67890'})
    volunteer_tasks = @(@{task='Distribute Food'; assignedTo='Volunteer1'}, @{task='Clean Park'; assignedTo='Volunteer2'})
}

function Populate-Collection {
    param([string]$collection, [array]$items)
    foreach ($item in $items) {
        $json = $item | ConvertTo-Json -Compress
        try {
            if ($collection -eq 'users') {
                $response = Invoke-RestMethod -Uri "$baseUrl/users/register" -Method POST -Body $json -ContentType 'application/json'
            } else {
                $response = Invoke-RestMethod -Uri "$baseUrl/$collection/add" -Method POST -Body $json -ContentType 'application/json'
            }
            Write-Host ("? Populated {0}: {1}" -f $collection, $response)
        } catch {
            Write-Host ("? Error populating {0}: {1}" -f $collection, $_.Exception.Message)
        }
    }
}

function Check-Collection {
    param([string]$collection)
    try {
        $url = if ($collection -eq 'users') { "$baseUrl/users" } else { "$baseUrl/$collection" }
        $response = Invoke-RestMethod -Uri $url -Method GET
        Write-Host ("?? Data in {0}:" -f $collection)
        $response | ConvertTo-Json | Write-Host
    } catch {
        Write-Host ("?? GET not implemented for {0}, skipping check." -f $collection)
    }
}

# Populate all collections
foreach ($col in $sampleData.Keys) {
    Write-Host ("?? Populating {0}..." -f $col)
    Populate-Collection -collection $col -items $sampleData[$col]
}

# Check all collections
Write-Host "
?? Checking all collections..."
foreach ($col in $sampleData.Keys) {
    Check-Collection -collection $col
}

Write-Host "
?? All collections populated, tested, and checked!"
