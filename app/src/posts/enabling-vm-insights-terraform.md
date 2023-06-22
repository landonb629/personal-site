# How to Enable VM insights on Azure VMs with Terraform 

Enabling VM insights using Terraform isn't straight forward. Here is how to do it. This post intends to highlight the following:

* Resources needed to enable VM insights with TF
* High level overview of those resources
* How to find the information needed to complete the terraform resources  

This post won't be covering what VM insights is. I'll be creating a separate post for that.  

### What resources need to be created to enable VM insights 

- data collection rule 
- data collection endpoint 
- data collection rule association 
- VM extensions installed (Dependency agent, Azure monitoring agent)
- log analytics workspace 

### finding information about these for terraform with the az cli 

``` az vm extension image list --query "[?starts_with(publisher, 'Microsoft.Azure.Monitor'].publisher" -o tsv | sort -u | xargs -I {} az vm extension image list-names --publisher {} -l eastus ```

### Monitor Agent
```
resource "azurerm_virtual_machine_extension" "tab02-monitor-agent" {
  name = "AzureMonitorWindowsAgent"
  virtual_machine_id = azurerm_windows_virtual_machine.hexar-tab02.id 
  publisher = "Microsoft.Azure.Monitor"
  type = "AzureMonitorWindowsAgent"
  type_handler_version = "1.9"
}
```

### Dependency Agent 

```
resource "azurerm_virtual_machine_extension" "test-dependency-agent" { 
  name = "DependencyAgentWindows"
  virtual_machine_id = data.azurerm_virtual_machine.test-machine.id
  publisher = "Microsoft.Azure.Monitoring.DependencyAgent"
  type = "DependencyAgentWindows"
  type_handler_version = "9.9"
  settings = jsonencode({ "enableAMA" = "true"})
}
```
### data collection endpoint 

```
resource "azurerm_monitor_data_collection_endpoint" "vm-insights"{ 
  name = "test-dcr"
  resource_group_name = "dev-compute-eastus"
  location = "eastus"
  lifecycle { 
    create_before_destroy = true 
  }
}
```

### Data collection rule 

```
resource "azurerm_monitor_data_collection_rule" "testing" { 
  name = "example-rule"
  resource_group_name = "dev-compute-eastus"
  location = "eastus"
  data_collection_endpoint_id = azurerm_monitor_data_collection_endpoint.vm-insights.id 

  destinations { 
    log_analytics { 
      workspace_resource_id = data.azurerm_log_analytics_workspace.test-law.id
      name = "workspace-for-testing"
    }
  }
  
  data_flow { 
    streams = ["Microsoft-InsightsMetrics","Microsoft-ServiceMap"]
    destinations = ["workspace-for-testing"]
  }

  data_sources { 
    performance_counter { 
      streams = ["Microsoft-InsightsMetrics"]
      sampling_frequency_in_seconds = 60
      counter_specifiers = ["\\VmInsights\\DetailedMetrics"]
      name = "vminsights-activation"
    }
    
    extension { 
      streams = ["Microsoft-ServiceMap"]
      extension_name = "DependencyAgent"
      name = "DependencyAgentDataSource" 

    }
  }
}
```

### Data collection rule association 

```
resource "azurerm_monitor_data_collection_rule_association" "association" { 
  name = "example1-dcra"
  target_resource_id = data.azurerm_virtual_machine.test-machine.id 
  data_collection_rule_id = azurerm_monitor_data_collection_rule.testing.id 
  description = "data collection rule "
}
```
