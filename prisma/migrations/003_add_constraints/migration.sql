ALTER TABLE Users ADD CONSTRAINT chk_username_length CHECK (char_length(username) >= 3);
ALTER TABLE Applications ADD CONSTRAINT chk_application_name_length CHECK (char_length(name) >= 3);
ALTER TABLE Components ADD CONSTRAINT chk_component_name_length CHECK (char_length(name) >= 3);
ALTER TABLE Workflows ADD CONSTRAINT chk_workflow_name_length CHECK (char_length(name) >= 3);