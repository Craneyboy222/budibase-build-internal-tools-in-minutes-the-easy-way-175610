CREATE INDEX idx_users_email ON Users (email);
CREATE INDEX idx_applications_user_id ON Applications (user_id);
CREATE INDEX idx_components_application_id ON Components (application_id);
CREATE INDEX idx_workflows_application_id ON Workflows (application_id);
CREATE INDEX idx_logs_application_id ON Logs (application_id);