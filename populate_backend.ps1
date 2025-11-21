function Send-Post($url, $body) {
    try {
        $response = Invoke-WebRequest -Uri $url -Method POST -Headers @{ "Content-Type" = "application/json" } -Body $body
        Write-Host "`nPOST $url"
        Write-Host "Status: $($response.StatusCode) - $($response.StatusDescription)"
        Write-Host "Response: $($response.Content)"
    } catch {
        Write-Host "Error: $($_.Exception.Message)"
    }
}

function Send-Get($url) {
    try {
        $response = Invoke-WebRequest -Uri $url -Method GET -Headers @{ "Content-Type" = "application/json" }
        Write-Host "`nGET $url"
        Write-Host "Status: $($response.StatusCode) - $($response.StatusDescription)"
        Write-Host "Response: $($response.Content)"
    } catch {
        Write-Host "Error: $($_.Exception.Message)"
    }
}
