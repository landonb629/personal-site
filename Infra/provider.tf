terraform {
  required_version = ">= 0.12"
  required_providers {
    azurerm = "3.10.0"
  }
}

provider "azurerm" { 
    features { }
}