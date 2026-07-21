import os
from models.project_info import ProjectInfo

SOURCE_EXTENSIONS = {
    ".py",
    ".java",
    ".js",
    ".ts",
    ".cpp",
    ".c",
    ".cs",
    ".go",
    ".php",
    ".rb",
    ".kt",
    ".swift"
}
DOCUMENTATION = {
    "README.md",
    "README",
    "architecture.md",
    "API.md",
    "CONTRIBUTING.md"
}
CONFIGS = {
    "pom.xml",
    "package.json",
    "requirements.txt",
    "Dockerfile",
    "build.gradle",
    "application.yml",
    "application.yaml"
}

def scan_project(project_path: str) -> ProjectInfo:

    project = ProjectInfo(
        project_name=os.path.basename(project_path),
        project_path=project_path,
    )

    for root, _, files in os.walk(project_path):

        for file in files:

            full_path = os.path.join(root, file)

            extension = os.path.splitext(file)[1]

            if extension in SOURCE_EXTENSIONS:
                project.source_files.append(full_path)

            elif file in DOCUMENTATION:
                project.documentation_files.append(full_path)

            elif file in CONFIGS:
                project.config_files.append(full_path)

    return project