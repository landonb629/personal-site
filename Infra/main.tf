locals {
    location = "eastus2"
    app_name = "lbabay-personal-site"
}
resource "azurerm_resource_group" "rg" { 
    name = "${local.app_name}-rg"
    location = local.location 
}

resource "azurerm_static_site" "lbabay-site" { 
    name = local.app_name
    resource_group_name = azurerm_resource_group.rg.name
    location = local.location
    sku_tier = "Standard"
} 

// database
resource "azurerm_cosmosdb_account" "db-account" {
name =   "${local.app_name}-db"
resource_group_name = azurerm_resource_group.rg.name
location = local.location
offer_type = "Standard"
kind = "MongoDB"
enable_free_tier = true

consistency_policy {
  consistency_level = "BoundedStaleness"
}

geo_location {
  location = "eastus"
  failover_priority = 0
}

enable_automatic_failover = false
public_network_access_enabled = true
network_acl_bypass_for_azure_services = true 
}

resource "azurerm_cosmosdb_mongo_database" "personal-site" { 
  name = "personalwebsite"
  resource_group_name = azurerm_resource_group.rg.name
  account_name = azurerm_cosmosdb_account.db-account.name
  depends_on = [ 
    azurerm_cosmosdb_account.db-account
  ]
}


