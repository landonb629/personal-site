terraform {
  required_version = ">= 0.12"
  required_providers {
    azurerm = "3.10.0"
  }
  backend "azurerm" { 
    resource_group_name = "terraformbackend"
    storage_account_name = "terraformbackend142"
    container_name = "remotebackend"
    key = "personalsite.tfstate"
  }
}

provider "azurerm" { 
    features { }
}